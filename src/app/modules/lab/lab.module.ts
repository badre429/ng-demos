import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { PropertiesTableComponent } from './properties-table/properties-table.component';

@NgModule({
  declarations: [PropertiesTableComponent],
  imports: [CommonModule, LabRoutingModule]
})
export class LabModule {}
