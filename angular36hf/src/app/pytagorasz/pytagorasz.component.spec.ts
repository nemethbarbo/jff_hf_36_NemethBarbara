import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PytagoraszComponent } from './pytagorasz.component';

describe('PytagoraszComponent', () => {
  let component: PytagoraszComponent;
  let fixture: ComponentFixture<PytagoraszComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PytagoraszComponent]
    });
    fixture = TestBed.createComponent(PytagoraszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
