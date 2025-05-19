import { Component, inject } from '@angular/core';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MesAnoSelecionadoService } from 'src/app/services/mes-ano-selecionado.service';


//ANGULAR MATERIAL - SELECT - Select with no option ripple


@Component({
  selector: 'app-select-mes',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './select-mes.component.html',
  styleUrls: ['./select-mes.component.scss']
})
export class SelectMesComponent {

  #mesSelecionado = inject(MesAnoSelecionadoService)
  public mesSelecionado(event: MatSelectChange){
    return this.#mesSelecionado.mesSelecionado(event.value)
  }
  
}
