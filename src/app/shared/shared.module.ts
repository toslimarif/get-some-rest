import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
