import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './views/movies/movies.component';
import { MoviesFakeService } from 'src/app/services/movies-fake.service';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [
    MoviesFakeService
  ]
})
export class MoviesModule { }
