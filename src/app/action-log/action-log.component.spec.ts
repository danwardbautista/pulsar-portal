import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLogComponent } from './action-log.component';

describe('ActionLogComponent', () => {
  let component: ActionLogComponent;
  let fixture: ComponentFixture<ActionLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionLogComponent]
    });
    fixture = TestBed.createComponent(ActionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
