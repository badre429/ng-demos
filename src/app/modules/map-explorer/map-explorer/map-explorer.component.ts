import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewChecked,
  ChangeDetectorRef
} from '@angular/core';
import { LngLat, MapLayerMouseEvent } from 'mapbox-gl';
import { GeoJsonProperties } from 'geojson';

import { Deck } from '@deck.gl/core';
import { GeoJsonLayer } from '@deck.gl/layers';
import * as mapboxgl from 'mapbox-gl';
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
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  selectedElement: GeoJsonProperties;
  selectedLngLat: LngLat;
  cursorStyle: string;
  load(e) {
    console.log(e);
    this.map = e;
    this.cd.detach();
    // setTimeout(() => {
    //   this.deck = new Deck({
    //     canvas: 'deck-canvas',
    //     width: '100%',
    //     height: '100%',
    //     initialViewState: INITIAL_VIEW_STATE,
    //     controller: true,
    //     onViewStateChange: ({ viewState }) => {
    //       this.map.jumpTo({
    //         center: [viewState.longitude, viewState.latitude],
    //         zoom: viewState.zoom,
    //         bearing: viewState.bearing,
    //         pitch: viewState.pitch
    //       });
    //     },
    //     layers: [
    //       new GeoJsonLayer({
    //         data: US_MAP_GEOJSON,
    //         stroked: true,
    //         filled: true,
    //         lineWidthMinPixels: 2,
    //         opacity: 0.4,
    //         getLineColor: [255, 100, 100],
    //         getFillColor: [200, 160, 0, 180]
    //       })
    //     ]
    //   });
    // }, 1000);
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
