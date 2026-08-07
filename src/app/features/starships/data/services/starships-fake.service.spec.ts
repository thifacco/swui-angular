import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StarshipsFakeService } from './starships-fake.service';
import { environment } from 'src/environments/environment';
import { IStarshipItem } from '../interfaces/starship';

const buildStarship = (overrides: Partial<IStarshipItem>): IStarshipItem => ({
  name: '',
  model: '',
  manufacturer: '',
  cost_in_credits: '',
  length: '',
  max_atmosphering_speed: '',
  crew: '',
  passengers: '',
  cargo_capacity: '',
  consumables: '',
  hyperdrive_rating: '',
  MGLT: '',
  starship_class: '',
  pilots: [],
  films: [],
  created: new Date(),
  edited: new Date(),
  url: '',
  ...overrides
});

describe('StarshipsFakeService', () => {
  let service: StarshipsFakeService;
  let httpMock: HttpTestingController;

  const starships: IStarshipItem[] = [
    buildStarship({ name: 'Millennium Falcon', model: 'YT-1300 light freighter', starship_class: 'Light freighter' }),
    ...Array.from({ length: 11 }, (_, i) =>
      buildStarship({ name: `Starship ${i}`, model: 'Model X', starship_class: 'Fighter' })
    )
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StarshipsFakeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve usar a pagina 1 por padrao quando nenhuma pagina for informada', () => {
    service.getAll().subscribe(result => {
      expect(result.results.length).toBe(10);
    });

    const req = httpMock.expectOne(environment.baseApiStarshipsFake);
    req.flush({ results: starships });
  });

  it('deve retornar a primeira pagina com 10 itens e indicar que ha proxima pagina', () => {
    service.getAll(1).subscribe(result => {
      expect(result.count).toBe(12);
      expect(result.results.length).toBe(10);
      expect(result.next).toBe('next');
      expect(result.previous).toBeNull();
    });

    const req = httpMock.expectOne(environment.baseApiStarshipsFake);
    expect(req.request.method).toBe('GET');
    req.flush({ results: starships });
  });

  it('deve retornar a segunda pagina sem indicar proxima pagina', () => {
    service.getAll(2).subscribe(result => {
      expect(result.results.length).toBe(2);
      expect(result.next).toBe('');
    });

    const req = httpMock.expectOne(environment.baseApiStarshipsFake);
    req.flush({ results: starships });
  });

  it('deve filtrar naves pelo nome, modelo ou classe ignorando maiusculas e minusculas', () => {
    service.getSearch('FALCON').subscribe(result => {
      expect(result.results).toHaveLength(1);
      expect(result.results[0].name).toBe('Millennium Falcon');
      expect(result.count).toBe(1);
    });

    const req = httpMock.expectOne(environment.baseApiStarshipsFake);
    req.flush({ results: starships });
  });

  it('deve retornar lista vazia quando nenhuma nave corresponder a busca', () => {
    service.getSearch('inexistente').subscribe(result => {
      expect(result.results).toHaveLength(0);
      expect(result.count).toBe(0);
    });

    const req = httpMock.expectOne(environment.baseApiStarshipsFake);
    req.flush({ results: starships });
  });
});
