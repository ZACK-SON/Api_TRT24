import {AfterViewInit, Component, OnInit, ViewChild, inject, signal, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common'
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ApiTrt24Service } from 'src/app/services/api-trt24.service';
import { IdadosServidores } from 'src/app/models/table-interface';

@Component({
  selector: 'app-table-sort',
  standalone:true,
  imports: [MatTableModule, MatSortModule, CommonModule ],
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss']
})

export class TableSortComponent implements OnInit, AfterViewInit{
  private _liveAnnouncer = inject(LiveAnnouncer);
  #ApiTrt24Service = inject(ApiTrt24Service)
  public displayedColumns: string[] = ['idServidor', 'nome', 'cargo', 'totalRendimento'];
  //public ELEMENT_DATA: IdadosServidores[] = []
  //public dadosRetornados: boolean = false
  public dataSource!: MatTableDataSource<IdadosServidores> // A Definite Assignment Assertion (!) é usada aqui - garante que a variável será inicializada antes de ser usada

   #setDadosRetornados = signal<boolean | null>(false)

  get getConsultaEfetuada() {
    return this. #setDadosRetornados.asReadonly()
  }
  
  //private div = document.querySelector('div');

  @ViewChild(MatSort) sort!: MatSort; // A Definite Assignment Assertion (!) é usada aqui - garante que a variável será inicializada antes de ser usada
  @ViewChild('div') div!: ElementRef<HTMLDivElement>;

    ngOnInit(): void {
      console.log(`table-sort| ngOnInit getDadosRetornados(): ${this.#ApiTrt24Service.getDadosRetornados()}`)
      this.#setDadosRetornados.set( this.#ApiTrt24Service.getDadosRetornados()) //false na inicialização para não exibir a tabela

          this.#ApiTrt24Service.emitEventListaServidores.subscribe(  
            (res)=>  {
              this.dataSource = new MatTableDataSource(res.retorno)

              if (this.sort) {
                this.dataSource.sort = this.sort; // Configura o sort após inicializar o dataSource
                console.log('DataSource configurado com MatSort:', this.dataSource);
              } else {
                console.error('MatSort não está inicializado no momento da configuração do dataSource');
              }
              //this.dataSource.sort = this.sort; 

              //if (this.sort) { 
                //this.dataSource.sort = this.sort; 
              //} else { 
                //console.error('ngOnInit - subscribe - MatSort não está inicializado');
              //}

              this.#ApiTrt24Service.dadosRetornados(true)
              
       
              console.log(`table-sort| emitEventListaServidores Dados Retornados: ${res.retorno}`)
              this.#setDadosRetornados.set(this.#ApiTrt24Service.getDadosRetornados())
              //this.div.style.color = "red";
                
                if (this.div) {
                  this.div.nativeElement.style.display = 'block';
                  // Exemplo: mudar a cor do texto da div
                  //this.div.nativeElement.style.color = 'red';
                }
            }

          )

          this.#ApiTrt24Service.emitEventBotaoClicado.subscribe(
            (res)=>  {
              console.log(`table-sort| emitEventBotaoClicado getDadosRetornados(): ${this.#ApiTrt24Service.getDadosRetornados()}`)
            }   
          )

    }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort; 
       console.log('MatSort:', this.sort); 
       console.log('DataSource antes de setar o sort:', this.dataSource); 
       
        if (this.sort) { 
          this.dataSource.sort = this.sort; 
          console.log('DataSource depois de setar o sort:', this.dataSource); 
        } else { 
          console.error('MatSort não está inicializado'); 
        } 
    }


        /** Announce the change in sort state for assistive technology. */
        announceSortChange(sortState: Sort) {
          // This example uses English messages. If your application supports
          // multiple language, you would internationalize these strings.
          // Furthermore, you can customize the message to add additional
          // details about the values being sorted.
          if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
          } else {
            this._liveAnnouncer.announce('Sorting cleared');
          }
        } 



 


}
