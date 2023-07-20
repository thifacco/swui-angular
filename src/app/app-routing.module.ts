import { NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((routes) => routes.HomeModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./features/movies/movies.module').then((routes) => routes.MoviesModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./features/starships/starships.module').then((routes) => routes.StarshipsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }