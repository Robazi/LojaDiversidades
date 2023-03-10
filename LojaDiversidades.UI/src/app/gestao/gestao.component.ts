import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.getProdutos().subscribe(result => {
      console.log(result)
      this.produtos = result;
    })
  }

  produtos: any = [];

}
