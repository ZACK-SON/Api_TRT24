import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <app-pai-consulta></app-pai-consulta>
    <router-outlet></router-outlet>

  `,

})
export class AppComponent {
  public title:string = 'Bem vindo!';
}
