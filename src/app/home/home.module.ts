import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RequestComponent,
    ResponseComponent
  ],
  exports: [
    RequestComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
