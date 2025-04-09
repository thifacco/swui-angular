import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './views/movies/movies.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoadingComponent } from 'src/app/features/shared/components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MoviesComponent,
        LoadingComponent
      ],
      imports: [
        MatProgressSpinnerModule
      ],
      providers: [
        HttpClient,
        HttpHandler
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
