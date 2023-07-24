import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatTableModule,
    LoadingComponent
  ]
})
export class SharedModule { }
