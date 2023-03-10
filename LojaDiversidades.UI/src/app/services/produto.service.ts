import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> { 
    return this.http.get('http://localhost:5085/api/produtos')
  }
  addProduto(nome: string, quantidade: number): Observable<any> {
    return this.http.post('http://localhost:5085/api/produtos', {
      nome: nome,
      quantidade: quantidade
    })
  }

  comprarProduto(id: number, quantidade: number): Observable<any> {
    return this.http.put('http://localhost:5085/api/produtos/comprar', {
      id: id,
      quantidade: quantidade
    })
  }

}
