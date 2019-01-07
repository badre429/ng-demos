import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgChartRoutingModule } from './org-chart-routing.module';
import { MainComponent } from './main/main.component';
import { AllMaterialModule } from '../../material.module';
import { NgOrganizationChartModule } from './ng-organization-chart/ng-organization-chart.module';
import { EmployeesChartComponent } from './employees/employees.component';
import { OrgChartModule } from './org-chart/module';

@NgModule({
  declarations: [MainComponent, EmployeesChartComponent],
  imports: [
    CommonModule,
    OrgChartModule,
    AllMaterialModule,
    OrgChartRoutingModule,
    NgOrganizationChartModule
  ]
})
export class OrgModule {}
