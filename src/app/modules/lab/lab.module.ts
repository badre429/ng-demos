import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { PropertiesTableComponent } from './properties-table/properties-table.component';
import { AllMaterialModule } from '../../material.module';

@NgModule({
  declarations: [PropertiesTableComponent],
  imports: [CommonModule, LabRoutingModule, AllMaterialModule]
})
export class LabModule {}
