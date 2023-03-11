import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getOptions() {
    let headers = new HttpHeaders();
    if (localStorage.getItem('token') != null) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    return { headers: headers };
  }

  getProdutos(): Observable<any> { 
    return this.http.get('http://localhost:5085/api/produtos', this.getOptions());
  }
  addProduto(nome: string, quantidade: number): Observable<any> {
    return this.http.post('http://localhost:5085/api/produtos', {
      nome: nome,
      quantidade: quantidade
    }, this.getOptions())
  }

  comprarProduto(id: number, quantidade: number): Observable<any> {
    return this.http.put('http://localhost:5085/api/produtos/comprar', {
      id: id,
      quantidade: quantidade
    }, this.getOptions())
  }

  editarProduto(id: number, nome: string, quantidade: number): Observable<any> {
    return this.http.put('http://localhost:5085/api/produtos/' +id, {
      nome: nome,
      quantidade: quantidade
    }, this.getOptions())
  }

  excluirProduto(id: number): Observable<any> {
    return this.http.delete('http://localhost:5085/api/produtos/' +id, this.getOptions())
  }

  getProduto(id: number): Observable<any> {
    return this.http.get('http://localhost:5085/api/produtos/' +id, this.getOptions())
  }

}
