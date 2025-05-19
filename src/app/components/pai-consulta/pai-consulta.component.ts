import { Component, signal, inject, OnInit } from '@angular/core';
import { ApiTrt24Service } from 'src/app/services/api-trt24.service';

@Component({
  selector: 'app-pai-consulta',
  templateUrl: './pai-consulta.component.html',
  styleUrls: ['./pai-consulta.component.scss']
})
export class PaiConsultaComponent implements OnInit {
     #ApiTrt24Service = inject(ApiTrt24Service)
     #setDadosRetornados = signal<boolean | null>(false)
  
    get getConsultaEfetuada() {
      return this. #setDadosRetornados.asReadonly()
    }

ngOnInit(): void {
  this.#ApiTrt24Service.emitEventDadosRetornados.subscribe(
    (res)=>  {
      this.#setDadosRetornados.set(true)
    } 
  )
}

}
