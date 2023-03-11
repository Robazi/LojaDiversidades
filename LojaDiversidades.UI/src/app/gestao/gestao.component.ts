import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  constructor(private service: ProdutoService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProdutos().subscribe(result => {
      console.log(result)
      this.produtos = result;
    })
  }

  produtos: any = [];

  editar(id: number) {

  this.router.navigate(['gestao/editar', id]);

    this.service.comprarProduto(id, 1).subscribe(result => {
      this.service.getProdutos().subscribe(result => {
        console.log(result)
        this.produtos = result;
      })
    })
  }

  excluir(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.excluirProduto(id).subscribe(result => { 
          
          this.ngOnInit();
          
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
      }
    })

  }

}
