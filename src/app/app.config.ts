import { inject } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { routes } from './app.routes';
import { MOVIES_SERVICE } from './features/movies/data/movies-service.token';
import { MoviesFakeService } from './features/movies/data/services/movies-fake.service';
import { MoviesService } from './features/movies/data/services/movies.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: MOVIES_SERVICE,
      useFactory: () => environment.useFakeMoviesData ? inject(MoviesFakeService) : inject(MoviesService)
    }
  ]
};
