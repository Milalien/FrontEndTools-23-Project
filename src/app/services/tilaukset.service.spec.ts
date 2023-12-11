import { TestBed } from '@angular/core/testing';

import { TilauksetService } from './tilaukset.service';

describe('TilauksetService', () => {
  let service: TilauksetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TilauksetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
