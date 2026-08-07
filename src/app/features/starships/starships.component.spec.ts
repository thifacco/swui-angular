import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StarshipsComponent } from './starships.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { STARSHIPS_SERVICE } from './data/starships-service.token';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StarshipsComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        provideAnimations(),
        {
          provide: STARSHIPS_SERVICE,
          useValue: {
            getAll: () => of({ count: 0, next: '', previous: null, results: [] }),
            getSearch: () => of({ count: 0, next: '', previous: null, results: [] })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
