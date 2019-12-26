import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';

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
    CommonModule
  ]
})
export class HomeModule { }
