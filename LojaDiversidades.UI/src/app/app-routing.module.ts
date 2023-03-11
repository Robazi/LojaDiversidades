import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { GestaoCadastroComponent } from './gestao/cadastro/cadastro.component';
import { GestaoComponent } from './gestao/gestao.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'gestao', component: GestaoComponent },
  {path:'gestao/cadastro', component: GestaoCadastroComponent },
  {path:'gestao/editar/:id', component: GestaoCadastroComponent },
  {path:'login', component: LoginComponent },
  {path:'compras', component: ComprasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
