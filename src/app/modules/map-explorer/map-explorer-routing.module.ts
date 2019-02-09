import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapExplorerComponent } from './map-explorer/map-explorer.component';

const routes: Routes = [
  {
    path: '',
    component: MapExplorerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapExplorerRoutingModule {}
