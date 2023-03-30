import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEComponent } from './reservation-e.component';

describe('ReservationEComponent', () => {
  let component: ReservationEComponent;
  let fixture: ComponentFixture<ReservationEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
