import { Component, OnInit } from '@angular/core';

interface Tarefa {
nome: string;
categoria: string;
}

@Component({
selector: 'app-tarefa',
templateUrl: './tarefa.component.html',
})
export class TarefaComponent implements OnInit {

mostraInput: boolean = true;
categorias: string [] = [];
tarefas: Tarefa[] = [];
categoria: string = '';
tarefa: Tarefa = {
nome: '',
categoria: ''
};

cadastrarTarefas(): void {
const tarefa: Tarefa = {
nome: this.tarefa.nome,
categoria: this.tarefa.categoria
};
console.log(this.tarefa);
this.tarefas.push(tarefa);
localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
this.tarefa.nome = '';
this.tarefa.categoria = '';
}

alterarTarefa(tarefa: Tarefa): void {
    localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
  }
  
removerTarefa(indice: number): void {
this.tarefas.splice(indice, 1);
localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
}

ngOnInit(): void {
this.tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
this.categorias = JSON.parse(localStorage.getItem('Categorias'))
}

mudar(): void {
localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
}

}