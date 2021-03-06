/**
 * @type {{degrees: string, minutes: string, seconds: string}}
 */
const UNITS = {
  degrees: '°',
  minutes: '′',
  seconds: '″'
};

/**
 * @type {{PARSE_STRING: string}}
 */
const ERRORS = {
  PARSE_STRING: 'Could not parse string'
};

/**
 * @type {{-: number, N: number, S: number, E: number, W: number}}
 */
const SIGN_INDEX = {
  '-': -1,
  N: 1,
  S: -1,
  E: 1,
  W: -1
};

/**
 * See https://regex101.com/r/kS2zR1/3
 * @type {RegExp}
 */
const DMS_REGREX = /([NSEW])?(-)?(\d+(?:\.\d+)?)[°º:d\s]?\s?(?:(\d+(?:\.\d+)?)['’‘′:]\s?(?:(\d{1,2}(?:\.\d+)?)(?:"|″|’’|'')?)?)?\s?([NSEW])?/i;

/**
 * RegEx for checking if a given string contain any special characters which allows
 * exclude it to have a DMM or DD syntax.
 * @type {RegExp}
 */
const DOES_CONTAIN_SPECIAL_CHARS = /[NSEW°'’‘′:"″]/g;

/**
 * Check if the given value is within the allowed range
 * @param {number} value
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function inRange(value, a, b) {
  return value >= a && value <= b;
}

/**
 * Checks if the given value is of type number
 * @param {*} v
 * @returns {boolean}
 */
function isNumber(v) {
  return typeof v == 'number' && !isNaN(v);
}

/**
 * Extract the decimal value and the orientation from a given match clause.
 * @param {*} m
 * @returns {number}
 * @throws
 */
function decDegFromMatch(m) {
  const sign = SIGN_INDEX[m[2]] || SIGN_INDEX[m[1]] || SIGN_INDEX[m[6]] || 1;
  const degrees = Number(m[3]);
  const minutes = m[4] ? Number(m[4]) : 0;
  const seconds = m[5] ? Number(m[5]) : 0;

  if (!inRange(degrees, 0, 180)) {
    throw new Error('Degrees out of range');
  }

  if (!inRange(minutes, 0, 60)) {
    throw new Error('Minutes out of range');
  }

  if (!inRange(seconds, 0, 60)) {
    throw new Error('Seconds out of range');
  }

  return sign * (degrees + minutes / 60 + seconds / 3600);
}

/**
 * Computes a configuration of the coordinate.
 * @param {[number, number]} coordinate
 * @returns {{}}
 */
function computeCoordinateConfig(coordinate) {
  function computeFor(initValue) {
    const values = {
      initValue: null,
      degrees: 0,
      degreesInt: 0,
      degreesFrac: 0,
      secondsTotal: 0,
      minutes: 0,
      minutesInt: 0,
      seconds: 0
    };
    values.initValue = initValue;
    values.degrees = Math.abs(initValue);
    values.degreesInt = Math.floor(values.degrees);
    values.degreesFrac = values.degrees - values.degreesInt;
    values.secondsTotal = 3600 * values.degreesFrac;
    values.minutes = values.secondsTotal / 60;
    values.minutesInt = Math.floor(values.minutes);
    values.seconds = values.secondsTotal - values.minutesInt * 60;
    return values;
  }

  return {
    north: coordinate[1] > 0,
    east: coordinate[0] > 0,
    latValues: computeFor([coordinate[1]]),
    lonValues: computeFor([coordinate[0]])
  };
}

/**
 * Converts grad and decimal minutes to a [lon, lat] coordinate. The function expects coordinates
 * to be in the form `41 24.2028, -2 10.4418` (lat, lon - order) and a comma as an seperator
 *
 * @param {string} value
 * @returns {[number,number]} [lon, lat]
 * @throws
 */
export function fromDMM(value) {
  function errorFn(errorMsg) {
    throw new Error(errorMsg);
  }
  const seperator = ',';
  const v = value.trim();

  // check if seperator exists
  if (v.indexOf(seperator) === -1) {
    return errorFn(ERRORS.PARSE_STRING);
  }

  const parts = v.split(',');
  if (parts.length !== 2) {
    return errorFn(ERRORS.PARSE_STRING);
  }

  // try to parse lat coordinate
  const orientationLat = parts[0].trim().substring(0, 1) === '-' ? -1 : 1;
  const partsLat = parts[0].trim().split(' ');
  const decimalGradLat =
    orientationLat === -1
      ? parseFloat(partsLat[0].replace('-', ''))
      : parseFloat(partsLat[0]);
  const decimalMinutesLat = partsLat.length > 1 ? parseFloat(partsLat[1]) : 0;
  const valueLat =
    isNumber(decimalGradLat) && isNumber(decimalMinutesLat)
      ? orientationLat * (decimalGradLat + decimalMinutesLat / 60)
      : undefined;

  // try to parse lon coordinate
  const orientationLon = parts[1].trim().substring(0, 1) === '-' ? -1 : 1;
  const partsLon = parts[1].trim().split(' ');
  const decimalGradLon =
    orientationLon === -1
      ? parseFloat(partsLon[0].replace('-', ''))
      : parseFloat(partsLon[0]);
  const decimalMinutesLon = partsLon.length > 1 ? parseFloat(partsLon[1]) : 0;
  const valueLon =
    isNumber(decimalGradLon) && isNumber(decimalMinutesLon)
      ? orientationLon * (decimalGradLon + decimalMinutesLon / 60)
      : undefined;

  if (!isNumber(valueLon) || !isNumber(valueLat)) {
    return errorFn(ERRORS.PARSE_STRING);
  }
  if (!inRange(valueLon, -180, 180) || !inRange(valueLat, -90, 90)) {
    return errorFn('Lon/Lat values out of range');
  }

  return [valueLon, valueLat];
}

/**
 * Function always expect that we got a dms string with the first part describing latitude and
 * the second part describing the longitude
 * @param {string} value
 * @returns {[number,number]} [lon, lat]
 * @throws
 */
export function fromDMS(value: string) {
  const v = value.trim();
  const matchLat = v.match(DMS_REGREX);

  if (!matchLat) {
    throw new Error(ERRORS.PARSE_STRING);
  }

  // If dmsString starts with a hemisphere letter, then the regex can also capture the
  // hemisphere letter for the second coordinate pair if also in the string
  const lonString =
    matchLat[1] !== undefined
      ? v.substr(matchLat[0].length - 1).trim()
      : v.substr(matchLat[0].length).trim();
  const matchLon = lonString.match(DMS_REGREX);

  if (!matchLon) {
    throw new Error(ERRORS.PARSE_STRING);
  }

  return [decDegFromMatch(matchLon), decDegFromMatch(matchLat)];
}

/**
 * Checks if a given string value is compliant to the Degrees and decimal minutes (DMM)
 * syntax or decimal degrees syntax. Both are handle by the library through DMM functions.
 * Syntax examples are:
 *
 * 41 24.2028, 2 10.4418 (DMM)
 * 41.40338, 2.17403 (DD)
 *
 * Is it possible that fromDMM also returns valid, but wrong coordinates for a given
 * DMS syntax. To filter out this cases we also do a DOES_CONTAIN_SPECIAL_CHARS check.
 * @param {string} value
 * @returns {boolean}
 */
export function isDMM(value) {
  try {
    const v = fromDMM(value);
    return (
      (<any>v).length === 2 &&
      v[0] !== undefined &&
      v[1] !== undefined &&
      !DOES_CONTAIN_SPECIAL_CHARS.test(value)
    );
  } catch (e) {
    return false;
  }
}

/**
 * Checks if a given string value is compliant to the Degrees, minutes and seconds (DMS)
 * syntax supported through this library, e.g.:
 *
 * 41°24'12.2"N 2°10'26.5"E
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isDMS(value) {
  try {
    const v = fromDMS(value);
    return (
      v.length === 2 &&
      v[0] !== undefined &&
      v[1] !== undefined &&
      !isDMM(value)
    );
  } catch (e) {
    return false;
  }
}

/**
 * Returns a dms string for a given coordinate
 * @param {[number, number]} coordinate [lon, lat]
 * @param {string} optFormatStr e.g.: 'DD MM ss X', 'DD mm X', 'dd X'
 * @param {{ latLonSeparator: string, decimalPlaces: number }} optOptions
 * @returns {string}
 */
export function toDMS(coordinate, optFormatStr?, optOptions?) {
  if (coordinate.length !== 2) {
    throw new Error('Not a valid coordinate');
  }

  const format = optFormatStr !== undefined ? optFormatStr : 'DD MM ss X';
  const options = Object.assign(
    {
      decimalPlaces: 5,
      latLonSeparator: ' '
    },
    optOptions !== undefined ? optOptions : {}
  );
  const coordConf = computeCoordinateConfig(coordinate);

  const lat = formatFor(
    format,
    options,
    coordConf.latValues,
    coordConf.north ? 'N' : 'S'
  );
  const lon = formatFor(
    format,
    options,
    coordConf.lonValues,
    coordConf.east ? 'E' : 'W'
  );

  function formatFor(format, options, values, X) {
    let formatted = format;
    formatted = formatted.replace(/DD/g, values.degreesInt + UNITS.degrees);
    formatted = formatted.replace(
      /dd/g,
      values.degrees.toFixed(options.decimalPlaces) + UNITS.degrees
    );
    formatted = formatted.replace(/D/g, values.degreesInt);
    formatted = formatted.replace(
      /d/g,
      values.degrees.toFixed(options.decimalPlaces)
    );
    formatted = formatted.replace(/MM/g, values.minutesInt + UNITS.minutes);
    formatted = formatted.replace(
      /mm/g,
      values.minutes.toFixed(options.decimalPlaces) + UNITS.minutes
    );
    formatted = formatted.replace(/M/g, values.minutesInt);
    formatted = formatted.replace(
      /m/g,
      values.minutes.toFixed(options.decimalPlaces)
    );
    formatted = formatted.replace(
      /ss/g,
      values.seconds.toFixed(options.decimalPlaces) + UNITS.seconds
    );
    formatted = formatted.replace(
      /s/g,
      values.seconds.toFixed(options.decimalPlaces)
    );
    formatted = formatted.replace(/-/g, values.initValue < 0 ? '-' : '');
    formatted = formatted.replace(/X/g, X);

    return formatted;
  }

  return lat + options.latLonSeparator + lon;
}
