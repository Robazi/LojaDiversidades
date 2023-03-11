import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { GestaoCadastroComponent } from './gestao/cadastro/cadastro.component';
import { GestaoComponent } from './gestao/gestao.component';
import { AdminService } from './guards/admin.service';
import { ClienteService } from './guards/cliente.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'gestao', component: GestaoComponent, canActivate: [AdminService], },
  {path:'gestao/cadastro', component: GestaoCadastroComponent, canActivate: [AdminService] },
  {path:'gestao/editar/:id', component: GestaoCadastroComponent, canActivate: [AdminService] },  
  {path:'compras', component: ComprasComponent, canActivate: [ClienteService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
