import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login = '';
  senha = '';

  sendLogin() {
    this.loginService.sendLogin(this.login, this.senha).subscribe(result => {
      localStorage.setItem('token', result.token);
      localStorage.setItem('usuario', result.usuario);
      localStorage.setItem('funcao', result.funcao);

      this.login = '';
      this.senha = '';
    }, error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Descrição do erro: ' + error.error.message
      })
    })
  }

  estaLogado() {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('funcao');

    this.router.navigate(['/']);
  }

  getFuncao() {
    return localStorage.getItem('funcao');
  }

  ehAdministrador() {
    return this.getFuncao() == 'administrador';
  }

  ehCliente() {
    return this.getFuncao() == 'cliente';
  }

}
