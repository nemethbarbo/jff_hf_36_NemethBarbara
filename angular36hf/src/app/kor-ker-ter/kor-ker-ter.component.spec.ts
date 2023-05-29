import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorKerTerComponent } from './kor-ker-ter.component';

describe('KorKerTerComponent', () => {
  let component: KorKerTerComponent;
  let fixture: ComponentFixture<KorKerTerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KorKerTerComponent]
    });
    fixture = TestBed.createComponent(KorKerTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
