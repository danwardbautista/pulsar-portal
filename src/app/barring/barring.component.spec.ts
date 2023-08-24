import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarringComponent } from './barring.component';

describe('BarringComponent', () => {
  let component: BarringComponent;
  let fixture: ComponentFixture<BarringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarringComponent]
    });
    fixture = TestBed.createComponent(BarringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
