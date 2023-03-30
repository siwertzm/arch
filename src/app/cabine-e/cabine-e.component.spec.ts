import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabineEComponent } from './cabine-e.component';

describe('CabineEComponent', () => {
  let component: CabineEComponent;
  let fixture: ComponentFixture<CabineEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabineEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabineEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
