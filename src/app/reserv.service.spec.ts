import { TestBed } from '@angular/core/testing';

import { ReservService } from './reserv.service';

describe('ReservService', () => {
  let service: ReservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
