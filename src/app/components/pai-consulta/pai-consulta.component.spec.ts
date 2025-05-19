import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiConsultaComponent } from './pai-consulta.component';

describe('PaiConsultaComponent', () => {
  let component: PaiConsultaComponent;
  let fixture: ComponentFixture<PaiConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiConsultaComponent]
    });
    fixture = TestBed.createComponent(PaiConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
