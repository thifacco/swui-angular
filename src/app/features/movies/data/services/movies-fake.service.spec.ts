import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesFakeService } from './movies-fake.service';
import { environment } from 'src/environments/environment';
import { IMovieFake, IMovieFakeItem } from '../interfaces/movieFake';

describe('MoviesFakeService', () => {
  let service: MoviesFakeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MoviesFakeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar a lista de filmes a partir do arquivo mock', () => {
    const movieItem = { title: 'A New Hope', episode_id: 4 } as IMovieFakeItem;
    const mockResponse: IMovieFake = { results: [movieItem] };

    service.listMovies().subscribe(result => {
      expect(result).toEqual([movieItem]);
    });

    const req = httpMock.expectOne(environment.baseApiFilmsFake);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
