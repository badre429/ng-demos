import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxRoutingModule } from './ngx-routing.module';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudDetailComponent } from './crud-list/crud-detail.component';
import { CrudService } from './crud-list/crud.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllMaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    AllMaterialModule,
    NgxRoutingModule
  ],
  declarations: [CrudListComponent, CrudDetailComponent],
  providers:
  [
    CrudService
  ]
})
export class NgxModule { }
