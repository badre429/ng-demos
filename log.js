var turf = require('@turf/turf');
var corr=[-7903683.846322424, 5012341.663847514];
var pt = turf.point(corr);
var converted = turf.getGeom(pt);
console.log(converted);
