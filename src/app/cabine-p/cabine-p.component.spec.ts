import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinePComponent } from './cabine-p.component';

describe('CabinePComponent', () => {
  let component: CabinePComponent;
  let fixture: ComponentFixture<CabinePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
