import { CommonModule } from '@angular/common'
import { Component, inject, OnInit, signal } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ApiTrt24Service } from 'src/app/services/api-trt24.service';
import { IdadosServidores, Isearch } from 'src/app/models/table-interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchPipePipe } from 'src/app/pipes/search-pipe.pipe';
import { FormsModule } from '@angular/forms';
//import { IbodyRequestInterface } from 'src/app/models/body-request-interface';
//import { MesAnoSelecionadoService } from 'src/app/services/mes-ano-selecionado.service';
//import { Pipe, PipeTransform } from '@angular/core';




@Component({
  selector: 'app-table-retorno-api',
  standalone: true,
  imports: [MatTableModule,CommonModule,MatProgressSpinnerModule,SearchPipePipe,FormsModule],
  templateUrl: './table-retorno-api.component.html',
  styleUrls: ['./table-retorno-api.component.scss']
})


export class TableRetornoApiComponent implements OnInit {

  #ApiTrt24Service = inject(ApiTrt24Service)
  
  public displayedColumns: string[] = ['idServidor', 'nome', 'cargo', 'totalRendimento'];
  public dataSource: IdadosServidores[] = []
  public dadosRetornados: boolean = false

  public ListaPipeSearch: Isearch[] = [
    { id: 1, text: 'First item' },
    { id: 2, text: 'Second item' },
    { id: 3, text: 'Third item' },
    { id: 4, text: 'Quarto item' },
    { id: 5, text: 'Quinto item' },
    { id: 6, text: 'Sexto item' }
  ];

  public search: string = ""
  

    ngOnInit(): void {
      console.log(`table-retorno| ngOnInit getDadosRetornados(): ${this.#ApiTrt24Service.getDadosRetornados()}`)

      this.dadosRetornados = this.#ApiTrt24Service.getDadosRetornados() //false na inicialização para não exibir a tabela

      

          this.#ApiTrt24Service.emitEventListaServidores.subscribe(  
            (res)=>  {
              this.dataSource = res.retorno

              // Informa que os dados retornados são true para exibir a tabela
              this.#ApiTrt24Service.dadosRetornados(true)
              this.dadosRetornados = this.#ApiTrt24Service.getDadosRetornados()
       
              console.log(`table-retorno| emitEventListaServidores Dados Retornados: ${this.#ApiTrt24Service.getDadosRetornados()}`)
            }   
          )

          this.#ApiTrt24Service.emitEventBotaoClicado.subscribe(
            (res)=>  {
                      //this.setDadosRetornados(false)
                      //this.#ApiTrt24Service.dadosRetornados(false)
                      console.log(`table-retorno| emitEventBotaoClicado getDadosRetornados(): ${this.#ApiTrt24Service.getDadosRetornados()}`)
            }   
          )

    }


    public setDadosRetornados(value: boolean){
      this.dadosRetornados = value
    }
}
