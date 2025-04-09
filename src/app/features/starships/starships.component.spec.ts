import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsComponent } from './starships.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingComponent } from 'src/app/features/shared/components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        StarshipsComponent,
        LoadingComponent
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        provideAnimations()
      ],
      schemas: [
        NO_ERRORS_SCHEMA
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
