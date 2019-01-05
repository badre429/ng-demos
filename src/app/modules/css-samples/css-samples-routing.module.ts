import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialPaletteComponent } from './material-palette/material-palette.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
const routes: Routes = [
  {
    path: '',
    component: MaterialPaletteComponent,
    children: []
  },
  {
    path: 'flex',
    component: FlexBoxComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssSamplesRoutingModule { }
