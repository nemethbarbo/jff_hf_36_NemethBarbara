import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaertekeloComponent } from './vizsgaertekelo.component';

describe('VizsgaertekeloComponent', () => {
  let component: VizsgaertekeloComponent;
  let fixture: ComponentFixture<VizsgaertekeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VizsgaertekeloComponent]
    });
    fixture = TestBed.createComponent(VizsgaertekeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
