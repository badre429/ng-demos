import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapExplorerRoutingModule } from './map-explorer-routing.module';
import { MapExplorerComponent } from './map-explorer/map-explorer.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllMaterialModule } from 'src/app/material.module';
import { MatInputModule } from '@angular/material';
@NgModule({
  declarations: [MapExplorerComponent],
  imports: [
    CommonModule,
    NgxMapboxGLModule,
    AllMaterialModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MapExplorerRoutingModule
  ]
})
export class MapExplorerModule {}
