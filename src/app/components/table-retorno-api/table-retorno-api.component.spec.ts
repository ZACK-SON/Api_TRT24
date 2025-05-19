import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRetornoApiComponent } from './table-retorno-api.component';

describe('TableRetornoApiComponent', () => {
  let component: TableRetornoApiComponent;
  let fixture: ComponentFixture<TableRetornoApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableRetornoApiComponent]
    });
    fixture = TestBed.createComponent(TableRetornoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
