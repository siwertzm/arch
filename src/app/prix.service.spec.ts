import { TestBed } from '@angular/core/testing';

import { PrixService } from './prix.service';

describe('PrixService', () => {
  let service: PrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
