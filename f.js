var turf = require('@turf/turf');
var fs = require('fs');

var center = [5.639200210571403, 28.107131958007926];
var radius = 5000;
var options = { steps: 5000, units: 'kilometers', properties: { foo: 'bar' } };
var circle = turf.circle(center, radius, options);
// console.log(JSON.stringify(circle));

fs.writeFileSync('out.json', JSON.stringify(circle));
