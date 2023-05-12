import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl:'./categoria.component.html'
})
export class categoriaComponent implements OnInit{
    
    categorias: String [] = [];

    nomeCategoria: String = '';

    ngOnInit(): void {
        console.log('categorias iniciando');
        this.categorias = JSON.parse(localStorage.getItem('categorias'))
    }

    cadastrarCategoria(): void{
        console.log('cadastrando categoria');
        console.log(this.nomeCategoria);
        this.categorias.push(this.nomeCategoria);
        localStorage.setItem('categorias', JSON.stringify(this.nomeCategoria))
    }

}