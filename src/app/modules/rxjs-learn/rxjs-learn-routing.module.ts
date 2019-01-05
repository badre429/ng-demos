import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceTestComponent } from './performance-test/performance-test.component';
import { ObslearnerComponent } from './obslearner/obslearner.component';
import { PerfTestComponent } from './perf-test/perf-test.component';
const routes: Routes = [
   {
    path: '',
    component: PerfTestComponent,
    children: []
  },
  {
    path: 'obs',
    component: ObslearnerComponent,
    children: []
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsLearnRoutingModule { }
