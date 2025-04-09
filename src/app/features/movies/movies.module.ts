import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesFakeService } from './data/repositories/movies-fake.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
  ],
  providers: [
    MoviesFakeService
  ]
})
export class MoviesModule { }
