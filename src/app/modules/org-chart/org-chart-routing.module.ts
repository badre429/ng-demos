import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmployeesChartComponent } from './employees/employees.component';
import { OrganisationTreeComponent } from './organisation-tree/organisation-tree.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'employee',
    component: EmployeesChartComponent
  },
  {
    path: 'tree',
    component: OrganisationTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgChartRoutingModule {}
