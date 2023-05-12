import { Component } from "@angular/core";

interface Tarefa{
    nome: String,
    categoria:
}

@Component({
    template: '<h1> ola tarefa</h1>'
})
export class TarefaComponent{

    categorias: String [] = [];
    categoriaSelecionada = ' ';
    nomeCategoria: String = '';

    ngOnInit(): void {
        console.log('categorias iniciando');
        this.categorias = JSON.parse(localStorage.getItem('categorias'))
    }
    cadastrarTarefa(): void{
        this
    }
    getTarefas(categoria: String):Tarefa[]{
        console.log(categoria);
        return.this.tarefas.filter(tarefaCadastrada) {

        }
    }
}