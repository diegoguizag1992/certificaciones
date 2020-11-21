import { TestBed } from '@angular/core/testing';

import { CrearproveedorService } from './crearproveedor.service';

describe('CrearproveedorService', () => {
  let service: CrearproveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearproveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
