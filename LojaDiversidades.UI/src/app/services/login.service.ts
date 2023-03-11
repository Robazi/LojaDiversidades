import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendLogin(usuario: string, senha: string): Observable<any> {
    return this.http.post('http://localhost:5085/api/login', {
      usuario: usuario,
      senha: senha
    })
  }
}
