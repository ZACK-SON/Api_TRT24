import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiConsultaComponent } from './components/pai-consulta/pai-consulta.component';
import { SelectMesComponent } from './components/select-mes/select-mes.component';
import { SelectAnoComponent } from './components/select-ano/select-ano.component';
import { ButtonSubmitSelectComponent } from './components/button-submit-select/button-submit-select.component';
import { TableRetornoApiComponent } from './components/table-retorno-api/table-retorno-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { TableSortComponent } from './components/table-sort/table-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    PaiConsultaComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SelectMesComponent,
    SelectAnoComponent,
    ButtonSubmitSelectComponent,
    TableRetornoApiComponent,
    FormsModule,
    SearchPipePipe,
    TableSortComponent,
    
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
