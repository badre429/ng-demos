import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgChartRoutingModule } from './org-chart-routing.module';
import { MainComponent } from './main/main.component';
import { AllMaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, AllMaterialModule, OrgChartRoutingModule]
})
export class OrgChartModule {}
