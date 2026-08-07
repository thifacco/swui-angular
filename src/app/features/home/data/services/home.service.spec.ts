import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeService } from './home.service';
import { environment } from 'src/environments/environment';
import { IPeople } from '../interfaces/people';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.swapiAPIObject.base.url + environment.swapiAPIObject.resources.people;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar pessoas enviando o nome como parametro search', () => {
    const mockResponse: IPeople = {
      count: 1,
      next: null,
      previous: null,
      results: [{
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: '',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: new Date(),
        edited: new Date(),
        url: ''
      }]
    };

    service.searchPeople('luke').subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(request => request.url === baseUrl && request.params.get('search') === 'luke');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
