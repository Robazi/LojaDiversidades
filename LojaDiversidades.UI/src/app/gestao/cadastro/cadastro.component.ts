import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-gestao-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class GestaoCadastroComponent implements OnInit {

  constructor(private service:ProdutoService) { }

  ngOnInit(): void {
  }

  nome = '';
  quantidade = 0;

  salvar() {
    console.log(this.nome)
    this.service.addProduto(this.nome,this.quantidade).subscribe(result => {
      history.back();
    })
  }
}
