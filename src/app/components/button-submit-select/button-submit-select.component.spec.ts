import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubmitSelectComponent } from './button-submit-select.component';

describe('ButtonSubmitSelectComponent', () => {
  let component: ButtonSubmitSelectComponent;
  let fixture: ComponentFixture<ButtonSubmitSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSubmitSelectComponent]
    });
    fixture = TestBed.createComponent(ButtonSubmitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
