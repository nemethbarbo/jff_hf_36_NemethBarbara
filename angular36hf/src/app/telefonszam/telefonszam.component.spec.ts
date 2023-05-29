import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonszamComponent } from './telefonszam.component';

describe('TelefonszamComponent', () => {
  let component: TelefonszamComponent;
  let fixture: ComponentFixture<TelefonszamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelefonszamComponent]
    });
    fixture = TestBed.createComponent(TelefonszamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
