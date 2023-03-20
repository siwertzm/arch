import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaComponent } from './resa.component';

describe('ResaComponent', () => {
  let component: ResaComponent;
  let fixture: ComponentFixture<ResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
