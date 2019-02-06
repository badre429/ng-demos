var ogr2ogr = require('ogr2ogr');
var fs = require('fs');

var geojson = ogr2ogr('a:/test/map/DZA_adm1.shp').stream();

geojson.pipe(fs.createWriteStream('./DZA_adm1.json'));

// var geojson = ogr2ogr('a:/test/map/DZA_adm2.shp')
//   // .format('MapInfo File')
//   .exec(function(er, buf) {
//     //geojson.pipe(fs.createWriteStream('/Algérie.json'));
//     console.log(geojson, er, buf);
//   });
