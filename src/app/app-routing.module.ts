import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
export const MENU = [
  { name: 'Material Pallete', route: 'css' },
  { name: 'Flex layout', route: 'css/flex' },
  { name: 'Properties table', route: 'lab/properties' },
  { name: 'rxjs performance', route: 'rxjs' },
  { name: 'rxjs observable', route: 'rxjs/obs' },
  { name: 'Orgnisation Chart', route: 'org/main' },
  { name: 'Orgnisation Employees', route: 'org/employee' },
  { name: 'Orgnisation Tree', route: 'org/tree' }
];
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'css',
    loadChildren: './modules/css-samples/css-samples.module#CssSamplesModule'
  },

  {
    path: 'rxjs',
    loadChildren: './modules/rxjs-learn/rxjs-learn.module#RxjsLearnModule'
  },
  {
    path: 'lab',
    loadChildren: './modules/lab/lab.module#LabModule'
  },
  {
    path: 'org',
    loadChildren: './modules/org-chart/org-chart.module#OrgModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
