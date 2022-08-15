import { TestBed } from '@angular/core/testing';

import { AviContextualizadoService } from './avi-contextualizado.service';

describe('AviContextualizadoService', () => {
  let service: AviContextualizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AviContextualizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
