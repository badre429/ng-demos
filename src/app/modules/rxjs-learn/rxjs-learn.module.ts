
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsLearnRoutingModule } from './rxjs-learn-routing.module';
import { ObslearnerComponent } from './obslearner/obslearner.component';
import { PerformanceTestComponent } from './performance-test/performance-test.component';
import { ChildObsComponent } from './obslearner/child-obs.component';
import { ChildNoObsComponent } from './obslearner/child-no-obs.component';
import { PerfTestComponent } from './perf-test/perf-test.component';
import { PerfRowComponent } from './perf-test/perf-row/perf-row.component';
import { AllMaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    AllMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RxjsLearnRoutingModule
  ],
  declarations: [
    ObslearnerComponent,
    PerformanceTestComponent,
    PerfTestComponent,
    ChildObsComponent,
    ChildNoObsComponent,
    PerfRowComponent
    ]
})
export class RxjsLearnModule {
}
