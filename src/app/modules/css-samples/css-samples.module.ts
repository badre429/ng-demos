import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialPaletteComponent } from './material-palette/material-palette.component';
import { RouterModule } from '@angular/router';
import { CssSamplesRoutingModule } from './css-samples-routing.module';

import { FlexBoxComponent } from './flex-box/flex-box.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AllMaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    AllMaterialModule,
    CssSamplesRoutingModule
  ],
  declarations: [MaterialPaletteComponent, FlexBoxComponent],
  exports: [MaterialPaletteComponent]
})
export class CssSamplesModule {}
