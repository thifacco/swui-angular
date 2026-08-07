import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

import { HomeComponent } from './home.component';
import { HomeService } from './data/services/home.service';
import { IPeopleItem } from './data/interfaces/people';

const buildPerson = (name: string): IPeopleItem => ({
  name,
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: new Date(),
  edited: new Date(),
  url: ''
});

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeServiceSpy: { searchPeople: jest.Mock };

  beforeEach(async () => {
    homeServiceSpy = { searchPeople: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HomeComponent],
      providers: [provideAnimations(), { provide: HomeService, useValue: homeServiceSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('nao deve pesquisar quando o termo de busca tiver menos de 3 caracteres', fakeAsync(() => {
    component.peopleResults$.subscribe();

    component.peopleInputSearch.setValue('lu');
    tick(300);

    expect(homeServiceSpy.searchPeople).not.toHaveBeenCalled();
    expect(component.people).toEqual([]);
    expect(component.loading).toBe(false);
  }));

  it('deve buscar e listar pessoas quando o termo tiver 3 ou mais caracteres', fakeAsync(() => {
    const people = [buildPerson('Luke Skywalker')];
    homeServiceSpy.searchPeople.mockReturnValue(of({ count: 1, next: null, previous: null, results: people }));

    component.peopleResults$.subscribe();

    component.peopleInputSearch.setValue('luke');
    tick(300);

    expect(homeServiceSpy.searchPeople).toHaveBeenCalledWith('luke');
    expect(component.people).toEqual(people);
    expect(component.loading).toBe(false);
  }));

  it('deve definir uma mensagem de erro quando a busca falhar', fakeAsync(() => {
    homeServiceSpy.searchPeople.mockReturnValue(throwError(() => ({ status: 500, name: 'HttpErrorResponse' })));

    component.peopleResults$.subscribe({ error: () => undefined });

    component.peopleInputSearch.setValue('luke');
    tick(300);

    expect(component.errorMessage).toBe('Ocorreu um erro ao tentar acessar a API. Tente novamente mais tarde.');
  }));
});
