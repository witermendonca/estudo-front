import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviContextualizadoComponent } from './avi-contextualizado.component';

describe('AviContextualizadoComponent', () => {
  let component: AviContextualizadoComponent;
  let fixture: ComponentFixture<AviContextualizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviContextualizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviContextualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
