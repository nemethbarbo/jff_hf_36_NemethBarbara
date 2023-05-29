import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizetesekComponent } from './fizetesek.component';

describe('FizetesekComponent', () => {
  let component: FizetesekComponent;
  let fixture: ComponentFixture<FizetesekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FizetesekComponent]
    });
    fixture = TestBed.createComponent(FizetesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
