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

  id = 0;
  quantidade = 0;

  produtos: any = [];

  finalizar() {
        this.service.comprarProduto(this.id, this.quantidade).subscribe(result => {
      history.back();
    })
  }

}
