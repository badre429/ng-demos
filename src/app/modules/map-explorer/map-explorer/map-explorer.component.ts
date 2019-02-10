import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewChecked,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import * as turf from '@turf/turf';
import { LngLat, MapLayerMouseEvent } from 'mapbox-gl';
import { GeoJsonProperties } from 'geojson';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Deck } from '@deck.gl/core';
import { GeoJsonLayer } from '@deck.gl/layers';
import * as mapboxgl from 'mapbox-gl';
import { toDMS } from './dmsformat';
const INITIAL_VIEW_STATE = {
  latitude: 40,
  longitude: -100,
  zoom: 3,
  bearing: 30,
  pitch: 30
};
const US_MAP_GEOJSON =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson';
const MAPBOX_STYLE = {
  version: 8,
  sources: {
    'simple-tiles': {
      type: 'raster',
      tiles: [
        // '/tile/0/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'
      ],
      tileSize: 256
    }
  },
  layers: [
    {
      id: 'simple-tiles',
      type: 'raster',
      source: 'simple-tiles',
      minzoom: 0,
      maxzoom: 22
    }
  ]
};
@Component({
  selector: 'app-map-explorer',
  templateUrl: './map-explorer.component.html',
  styleUrls: ['./map-explorer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapExplorerComponent implements OnInit, AfterViewChecked {
  style = MAPBOX_STYLE;
  map: any;

  deck: any;
  hoverFilter = ['==', 'NAME_2', ''];
  detachNextTime = false;
  constructor(private cd: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit() {}

  selectedElement: GeoJsonProperties;
  selectedLngLat: LngLat;
  cursorStyle: string;
  load(e) {
    console.log(e);
    this.map = e;
    (<any>window).mapAll = e;
    var Draw = new MapboxDraw();

    // Map#addControl takes an optional second argument to set the position of the control.
    // If no position is specified the control defaults to `top-right`. See the docs
    // for more details: https://www.mapbox.com/mapbox-gl-js/api/map#addcontrol

    this.zone.runOutsideAngular(e => {
      this.map.addControl(Draw, 'top-left');
      this.map.on('mousemove', function(e) {
        // const pt = turf.point([e.lngLat.lat,e.lngLat.lng]);

        // var converted = turf.degreesToRadians(e.lngLat[0]);
        document.getElementById(
          'map-location-state'
        ).innerHTML = JSON.stringify(toDMS([e.lngLat.lng, e.lngLat.lat]));
      });
      this.map.on('draw.selectionchange', f => {
        (<any>document).selectedElement = f;
        console.log(f);
      });
      this.map.on('mousemove', function(e) {
        var features = e.target.queryRenderedFeatures(e.point);
        document.getElementById('frs-state').innerHTML = JSON.stringify(
          features.length,
          null,
          2
        );
      });
      this.map.addLayer({
        id: 'maine',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-67.13734351262877, 45.137451890638886],
                  [-66.96466, 44.8097],
                  [-68.03252, 44.3252],
                  [-69.06, 43.98],
                  [-70.11617, 43.68405],
                  [-70.64573401557249, 43.090083319667144],
                  [-70.75102474636725, 43.08003225358635],
                  [-70.79761105007827, 43.21973948828747],
                  [-70.98176001655037, 43.36789581966826],
                  [-70.94416541205806, 43.46633942318431],
                  [-71.08482, 45.3052400000002],
                  [-70.6600225491012, 45.46022288673396],
                  [-70.30495378282376, 45.914794623389355],
                  [-70.00014034695016, 46.69317088478567],
                  [-69.23708614772835, 47.44777598732787],
                  [-68.90478084987546, 47.184794623394396],
                  [-68.23430497910454, 47.35462921812177],
                  [-67.79035274928509, 47.066248887716995],
                  [-67.79141211614706, 45.702585354182816],
                  [-67.13734351262877, 45.137451890638886]
                ]
              ]
            }
          }
        },
        layout: {},
        paint: {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });
    });
    this.cd.detach();
  }
  onClick(evt: MapLayerMouseEvent) {
    console.log(evt);
    this.selectedLngLat = evt.lngLat;
    this.selectedElement = evt.features![0].properties;
    this.cd.reattach();
    this.detachNextTime = true;
  }

  activateHoverOn(evt: any) {
    if (
      this.hoverFilter != null &&
      evt.features[0].properties.NAME_2 != this.hoverFilter[2]
    ) {
      this.hoverFilter = ['==', 'NAME_2', evt.features[0].properties.NAME_2];
    }
  }
  index = 1;
  disableHover() {
    this.hoverFilter = ['==', 'NAME_2', ''];
  }
  ngAfterViewChecked(): void {
    // if (this.detachNextTime) {
    //   this.detachNextTime = false;
    //   this.cd.detach();
    // }
    this.index++;
    if (this.index % 20 == 0) {
      console.log('index:', this.index);
    }
  }
}
