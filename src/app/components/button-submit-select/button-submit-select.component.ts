import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MesAnoSelecionadoService } from 'src/app/services/mes-ano-selecionado.service';
import { ApiTrt24Service } from 'src/app/services/api-trt24.service';
import { IdadosServidores } from 'src/app/models/table-interface';
import { IbodyRequestInterface } from 'src/app/models/body-request-interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-button-submit-select',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatProgressSpinnerModule,CommonModule],
  templateUrl: './button-submit-select.component.html',
  styleUrls: ['./button-submit-select.component.scss']
})
export class ButtonSubmitSelectComponent implements OnInit{

  #mesAnoSelecionado = inject(MesAnoSelecionadoService)
  #ApiTrt24Service = inject(ApiTrt24Service)

   mes: number = 0
   ano: number = 1999

  #setdataSource= signal<IdadosServidores[] | null>(null)
  #setConsultaEfetuada = signal<boolean | null>(false)

 body: IbodyRequestInterface = {
    mes: 10,
    ano: 2024,
    token: {id: 0, chave: "chave-teste-string", token: "token-teste-string"}
  }

  get getdataSource() {
    return this.#setdataSource.asReadonly()
  }

  get getConsultaEfetuada() {
    return this.#setConsultaEfetuada.asReadonly()
  }


      public botaoClicado(){
        this.#ApiTrt24Service.consultaEfetuada(false)
        this.#ApiTrt24Service.botaoClicado(true) // TRUE - informa para api trt24 que o botão foi clicado
        this.#ApiTrt24Service.emitEventBotaoClicado.emit(this.#ApiTrt24Service.dadosRetornados(false)) // FALSE - informa para api trt24 que novos dados serão retornados
        console.log(`Button - DadosRetornados - informação api-trt24: ${this.#ApiTrt24Service.getDadosRetornados()}`);

        this.mes = this.#mesAnoSelecionado.getMesSelecionado()
        this.ano = this.#mesAnoSelecionado.getAnoSelecionado()

        if(this.mes !== 0 && this.ano !== 1999){
          this.#setConsultaEfetuada.set(true)// FAZ RODAR O SPINNER
          //console.log(`Button: mês: ${this.mes} ano: ${this.ano}`)
          
          this.body = {
            mes: this.mes,
            ano: this.ano,
            token: {id: 1234, chave: "chave-teste-string", token: "token-teste-string"}
          }

          this.#ApiTrt24Service.httpRemuneracoes$(this.body).subscribe({
            next:(next)=> {
                if (next?.retorno){ 
                  this.#setdataSource.set(next?.retorno) // grava tabela com dados da consulta à API
                }

                this.#ApiTrt24Service.consultaEfetuada(true)
                //this.#ApiTrt24Service.dadosRetornados(true)
                //this.#ApiTrt24Service.botaoClicado(false);// Indica que a consulta terminou
                this.#setConsultaEfetuada.set(false) // PARA DE RODAR O SPINNER  

            },
            error:(error)=> console.log(`Error|Button-submit-select: ${error}`),
            //complete:()=> console.log("complete!"),
          })




        } else {
          console.log(`Selecione o mês e o ano!`);
        }

        
        //return this.#anoSelecionado.mesSelecionado(event.value)
      }


 ngOnInit(): void {
  //this.#setConsultaEfetuada.set(true)
  //console.log(`Button - ngOnInit - informação api-trt24: ${this.#ApiTrt24Service.getBotaoClicado()}`);
 }


}
