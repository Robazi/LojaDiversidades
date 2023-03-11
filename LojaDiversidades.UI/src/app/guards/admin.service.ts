import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): boolean {
    if(localStorage.getItem('funcao') == 'administrador') {
      return true;
    }
    this.router.navigate(['/']);    
    return false;
  }
}
