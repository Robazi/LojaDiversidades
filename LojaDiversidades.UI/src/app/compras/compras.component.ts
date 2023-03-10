import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.getProdutos().subscribe(result => {
      console.log(result)
      this.produtos = result;
    })
  }

  produtos: any = [];

  finalizar() {
    console.log(this.produtos.service.nome)
    this.service.addProduto(this.produtos.service.nome,this.produtos.service.quantidade).subscribe(result => {
      history.back();
    })
  }

}
