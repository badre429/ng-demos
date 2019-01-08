import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesTableComponent } from './properties-table/properties-table.component';

const routes: Routes = [
  { path: 'properties', component: PropertiesTableComponent },
  { path: 'tree', component: PropertiesTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule {}
