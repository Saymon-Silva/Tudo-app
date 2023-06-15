import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './categoria.component.html'
})

export class CategoriaComponent implements OnInit {
  nome: string;
  categorias: string[] = [];

  ngOnInit(): void {
    console.log('categorias iniciando');
    const categoriasSalvas = localStorage.getItem('Categorias');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
    } else {
      this.categorias = [];
    }
  }

  cadastrarCategoria(): void {
    let nomeCadastro = this.nome;
    this.categorias.push(nomeCadastro);
    localStorage.setItem("Categorias", JSON.stringify(this.categorias));
    this.nome = "";
  }

  removerCategoria(indice: number): void {
    this.categorias.splice(indice,1);
    localStorage.setItem('Categorias', JSON.stringify(this.categorias));
    }
}
