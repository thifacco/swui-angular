import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'movies',
    loadComponent: () => import('./features/movies/movies.component').then((c) => c.MoviesComponent)
  },
  {
    path: 'starships',
    loadComponent: () => import('./features/starships/starships.component').then((c) => c.StarshipsComponent)
  },
];
