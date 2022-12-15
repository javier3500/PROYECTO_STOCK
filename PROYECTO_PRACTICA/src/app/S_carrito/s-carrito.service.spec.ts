import { TestBed } from '@angular/core/testing';

import { SCarritoService } from './s-carrito.service';

describe('SCarritoService', () => {
  let service: SCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
