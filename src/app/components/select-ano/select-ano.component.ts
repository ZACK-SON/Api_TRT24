import { Component, inject } from '@angular/core';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MesAnoSelecionadoService } from 'src/app/services/mes-ano-selecionado.service';

@Component({
  selector: 'app-select-ano',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule ],
  templateUrl: './select-ano.component.html',
  styleUrls: ['./select-ano.component.scss']
})
export class SelectAnoComponent {

  public anoAtual: number = new Date().getFullYear()
  public anoAnterior: number = this.anoAtual - 1
  public doisAnosAtras: number = this.anoAtual - 2




  #anoSelecionado = inject(MesAnoSelecionadoService)

    public anoSelecionado(event: MatSelectChange){
      return this.#anoSelecionado.anoSelecionado(event.value)
    }

}
