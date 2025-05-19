import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, inject, Injectable, OnInit, signal } from '@angular/core';
import { IretornoHttpRequest, IdadosServidores } from '../models/table-interface';
import { catchError, Observable, shareReplay, tap, throwError } from 'rxjs';
import { IbodyRequestInterface } from '../models/body-request-interface';


@Injectable({
  providedIn: 'root'
})


export class ApiTrt24Service implements OnInit{

  public emitEventConsulta = new EventEmitter
  public emitEventListaServidores = new EventEmitter
  public emitEventBotaoClicado = new EventEmitter
  public emitEventDadosRetornados = new EventEmitter

  #http = inject(HttpClient);
  #url = signal('https://adm.trt24.jus.br/transparencia-ws/estrutura-cargos-funcoes-remuneracoes-diarias/listar')

  #setListaRemuneracoes= signal<IretornoHttpRequest | null>(null)
  #setConsultaEfetuada = signal<boolean | null>(false)
  #setBotaoClicado= signal<boolean>(false)
  #setDadosRetornados= signal<boolean>(false)

  #setError = signal<any | null>(null)
  
  get getError (){
    return this.#setError.asReadonly();
  }

  get getListaRemuneracoes() {
    return this.#setListaRemuneracoes.asReadonly()
  }

  get getConsultaEfetuada() {
    return this.#setConsultaEfetuada.asReadonly()
  }

  get getBotaoClicado() {
     return this.#setBotaoClicado.asReadonly()
   }

   get getDadosRetornados() {
    return this.#setDadosRetornados.asReadonly()
  }

   public botaoClicado(value: boolean){
      return this.#setBotaoClicado.set(value)
    //console.log(`service-api-trt24 | public botaoClicado - getBotaoClicado(): ${this.getBotaoClicado()}`)
  }

  public dadosRetornados(value: boolean){
    return this.#setDadosRetornados.set(value)
  //console.log(`service-api-trt24 | public botaoClicado - getBotaoClicado(): ${this.getBotaoClicado()}`)
  }

  public consultaEfetuada(value: boolean){
    this.#setConsultaEfetuada.set(value)
    //console.log(`service-api-trt24 | consulta efetuada: ${this.getConsultaEfetuada()}`)
  }


  public httpRemuneracoes$(body: IbodyRequestInterface): Observable<IretornoHttpRequest | null>{
    this.#setError.set(null)  

    return this.#http.post< IretornoHttpRequest | null>(this.#url(), body).pipe(
        shareReplay(),
        tap(      
          (res)=> {
                  this.#setListaRemuneracoes.set(res),
                  this.#setConsultaEfetuada.set(true),
                  this.emitEventConsulta.emit(this.#setConsultaEfetuada)
                  this.emitEventListaServidores.emit(this.getListaRemuneracoes())
                  this.emitEventBotaoClicado.emit(this.getBotaoClicado() )
                  this.emitEventDadosRetornados.emit(this.dadosRetornados(true))
                  
                  }
          
        ),
        catchError((error: HttpErrorResponse)=>{
          this.#setError.set(error.message)
          console.log(this.getError())
            return throwError( ()=> error)
        })
      )   
  }

  ngOnInit(): void {

    console.log(`service-api-trt24 | botaoClicado - ngOnInit: ${this.getBotaoClicado()}`)
  }

}

