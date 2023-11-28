import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { DadosAlunosComponent } from './dados-alunos/dados-alunos.component';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    FormLoginComponent,
    AreaLogadaComponent,
    DadosAlunosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
