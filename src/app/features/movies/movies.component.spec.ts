import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { MoviesComponent } from './movies.component';
import { MOVIES_SERVICE } from './data/movies-service.token';
import { IMovieItem } from './data/interfaces/movie';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moviesServiceSpy: { listMovies: jest.Mock };

  beforeEach(async () => {
    moviesServiceSpy = { listMovies: jest.fn().mockReturnValue(of([])) };

    await TestBed.configureTestingModule({
      imports: [
        MoviesComponent
      ],
      providers: [
        { provide: MOVIES_SERVICE, useValue: moviesServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('deve carregar a lista de filmes ao inicializar', () => {
    const movies = [{ title: 'A New Hope', episode_id: 4 } as IMovieItem];
    moviesServiceSpy.listMovies.mockReturnValue(of(movies));

    fixture.detectChanges();

    expect(component.movies).toEqual(movies);
  });

  it('nao deve lancar erro quando a busca de filmes falhar', () => {
    moviesServiceSpy.listMovies.mockReturnValue(throwError(() => ({ error: 'falha ao buscar filmes' })));

    expect(() => fixture.detectChanges()).not.toThrow();
    expect(component.movies).toEqual([]);
  });

  it('nao deve lancar erro ao destruir o componente', () => {
    fixture.detectChanges();
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
