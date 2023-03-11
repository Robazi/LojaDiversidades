import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestao-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class GestaoCadastroComponent implements OnInit {

  constructor(private service:ProdutoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.service.getProduto(id).subscribe(result => {
          this.id = result.id;
          this.nome = result.nome;
          this.quantidade = result.quantidade;
        })
      }
    } )
  }

  id = 0;
  nome = '';
  quantidade = 0;

  salvar() {   
    
    if (this.id > 0) {
      this.service.editarProduto(this.id, this.nome, this.quantidade).subscribe(result => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Salvo com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })

        history.back();
      })
    } else {

    this.service.addProduto(this.nome,this.quantidade).subscribe(result => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Salvo com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })

      history.back();
    })
  }
  }
}
