import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './views/movies/movies.component';
import { MoviesFakeService } from './data/repositories/movies-fake.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatTableModule
  ],
  providers: [
    MoviesFakeService
  ]
})
export class MoviesModule { }
