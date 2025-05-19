import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMesComponent } from './select-mes.component';

describe('SelectMesComponent', () => {
  let component: SelectMesComponent;
  let fixture: ComponentFixture<SelectMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMesComponent]
    });
    fixture = TestBed.createComponent(SelectMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
