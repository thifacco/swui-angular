import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com spinning desativado e sem exibir o spinner', () => {
    expect(component.spinning).toBe(false);
    expect(fixture.nativeElement.querySelector('mat-progress-spinner')).toBeNull();
  });

  it('deve exibir o spinner quando a propriedade spinning for verdadeira', () => {
    component.spinning = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('mat-progress-spinner')).not.toBeNull();
  });
});
