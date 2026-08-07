import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StarshipsService } from './starships.service';
import { environment } from 'src/environments/environment';
import { IStarship } from '../interfaces/starship';

describe('StarshipsService', () => {
  let service: StarshipsService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.swapiAPIObject.base.url + environment.swapiAPIObject.resources.starships;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StarshipsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar a listagem paginada de naves informando a pagina desejada', () => {
    const mockResponse: IStarship = { count: 0, next: '', previous: null, results: [] };

    service.getAll(2).subscribe(result => {
      expect(result).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(request => request.url === baseUrl && request.params.get('page') === '2');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('deve usar a pagina 1 por padrao quando nenhuma pagina for informada', () => {
    const mockResponse: IStarship = { count: 0, next: '', previous: null, results: [] };

    service.getAll().subscribe();

    const req = httpMock.expectOne(request => request.url === baseUrl && request.params.get('page') === '1');
    req.flush(mockResponse);
  });

  it('deve buscar naves pelo termo de pesquisa informado', () => {
    const mockResponse: IStarship = { count: 0, next: '', previous: null, results: [] };

    service.getSearch('millennium').subscribe(result => {
      expect(result).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(request => request.url === baseUrl && request.params.get('search') === 'millennium');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
