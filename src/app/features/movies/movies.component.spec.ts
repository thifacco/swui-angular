import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MoviesComponent } from './movies.component';
import { MOVIES_SERVICE } from './data/movies-service.token';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MoviesComponent
      ],
      providers: [
        { provide: MOVIES_SERVICE, useValue: { listMovies: () => of([]) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
