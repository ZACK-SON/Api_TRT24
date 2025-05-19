import { EventEmitter, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesAnoSelecionadoService {

  #setMesSelecionado= signal<number>(0)
  #setAnoSelecionado= signal<number>(1999)
  
  //public emitEventBotaoClicado = new EventEmitter

  get getMesSelecionado() {
    return this.#setMesSelecionado.asReadonly()
  }

  get getAnoSelecionado() {
    return this.#setAnoSelecionado.asReadonly()
  }

  public mesSelecionado(value: number){
    this.#setMesSelecionado.set(value)
    //console.log(`service-mes-ano | mes selecionado: ${this.getMesSelecionado()}`)
  }

  public anoSelecionado(value: number){
    this.#setAnoSelecionado.set(value)
    //console.log(`service-mes-ano | ano selecionado: ${this.getAnoSelecionado()}`)
  }
 
}
