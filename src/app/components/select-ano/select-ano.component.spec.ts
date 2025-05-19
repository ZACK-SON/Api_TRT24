import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnoComponent } from './select-ano.component';

describe('SelectAnoComponent', () => {
  let component: SelectAnoComponent;
  let fixture: ComponentFixture<SelectAnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAnoComponent]
    });
    fixture = TestBed.createComponent(SelectAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
