import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertingComponent } from './alerting.component';

describe('AlertingComponent', () => {
  let component: AlertingComponent;
  let fixture: ComponentFixture<AlertingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertingComponent]
    });
    fixture = TestBed.createComponent(AlertingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
