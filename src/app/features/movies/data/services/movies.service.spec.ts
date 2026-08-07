import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesService } from './movies.service';
import { environment } from 'src/environments/environment';
import { IMovie, IMovieItem } from '../interfaces/movie';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.swapiAPIObject.base.url + environment.swapiAPIObject.resources.films;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar apenas a lista de filmes extraida da resposta da API', () => {
    const movieItem = { title: 'A New Hope', episode_id: 4 } as IMovieItem;
    const mockResponse: IMovie = { count: 1, next: null, previous: null, results: [movieItem] };

    service.listMovies().subscribe(result => {
      expect(result).toEqual([movieItem]);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
