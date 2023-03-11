import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): boolean {
    if(localStorage.getItem('funcao') == 'cliente') {
      return true;
    }
    this.router.navigate(['/']);    
    return false;
  }
}