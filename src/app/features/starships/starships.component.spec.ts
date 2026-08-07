import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { provideAnimations } from '@angular/platform-browser/animations';

import { StarshipsComponent } from './starships.component';
import { STARSHIPS_SERVICE } from './data/starships-service.token';
import { IStarshipItem } from './data/interfaces/starship';

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

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;
  let starshipsServiceSpy: { getAll: jest.Mock; getSearch: jest.Mock };

  const initialStarships = [buildStarship({ name: 'X-wing' }), buildStarship({ name: 'Y-wing' })];

  beforeEach(async () => {
    starshipsServiceSpy = {
      getAll: jest.fn().mockReturnValue(of({ count: 2, next: '', previous: null, results: initialStarships })),
      getSearch: jest.fn().mockReturnValue(of({ count: 0, next: '', previous: null, results: [] }))
    };

    await TestBed.configureTestingModule({
      imports: [StarshipsComponent],
      providers: [
        provideAnimations(),
        { provide: STARSHIPS_SERVICE, useValue: starshipsServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente e carregar a lista inicial de naves', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(starshipsServiceSpy.getAll).toHaveBeenCalledWith();
    expect(component.starships).toEqual(initialStarships);
    expect(component.starshipsLatest).toEqual(initialStarships);
    expect(component.starshipsCount).toBe(2);
  });

  it('deve limpar a lista e nao pesquisar quando o termo tiver menos de 3 caracteres', fakeAsync(() => {
    fixture.detectChanges();

    component.starshipInputSearch.setValue('xw');
    tick(300);

    expect(starshipsServiceSpy.getSearch).not.toHaveBeenCalled();
    expect(component.starships).toEqual([]);
  }));

  it('deve restaurar a ultima lista carregada quando o campo de busca for limpo', fakeAsync(() => {
    fixture.detectChanges();

    component.starshipInputSearch.setValue('xw');
    tick(300);
    component.starshipInputSearch.setValue('');
    tick(300);

    expect(component.starships).toEqual(initialStarships);
  }));

  it('deve pesquisar naves quando o termo tiver 3 ou mais caracteres', fakeAsync(() => {
    const searchResult = [buildStarship({ name: 'Millennium Falcon' })];
    starshipsServiceSpy.getSearch.mockReturnValue(of({ count: 1, next: '', previous: null, results: searchResult }));

    fixture.detectChanges();

    component.starshipInputSearch.setValue('falcon');
    tick(300);

    expect(starshipsServiceSpy.getSearch).toHaveBeenCalledWith('falcon');
    expect(component.starships).toEqual(searchResult);
    expect(component.starshipsCount).toBe(1);
  }));

  it('deve buscar a pagina correspondente ao evento do paginator', () => {
    const pageResults = [buildStarship({ name: 'Star Destroyer' })];
    starshipsServiceSpy.getAll.mockReturnValue(of({ count: 1, next: '', previous: null, results: pageResults }));

    fixture.detectChanges();

    const pageEvent = { pageIndex: 2, pageSize: 10, length: 30 } as PageEvent;
    component.handlePageChange(pageEvent);

    expect(starshipsServiceSpy.getAll).toHaveBeenCalledWith(3);
    expect(component.starships).toEqual(pageResults);
  });

  it('nao deve lancar erro ao destruir o componente', () => {
    fixture.detectChanges();
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
