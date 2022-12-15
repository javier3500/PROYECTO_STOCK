import { TestBed } from '@angular/core/testing';

import { GananciaServiceService } from './ganancia-service.service';

describe('GananciaServiceService', () => {
  let service: GananciaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GananciaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
