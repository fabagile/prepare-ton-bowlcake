import { TestBed } from '@angular/core/testing';

import { BowlcakesService } from './bowlcakes.service';

describe('BowlcakesService', () => {
  let service: BowlcakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlcakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
