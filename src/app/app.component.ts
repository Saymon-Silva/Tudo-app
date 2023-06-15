import { Component } from '@angular/core';

/*
interface Tarefas{
  nome: String,
  categoria: String
}
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*
  mostraInput: boolean = true;

  listaTarefa: Tarefas[] = this.defineLista();

  defineLista(): Tarefas[]{
    let a: Tarefas[] = []
    if(localStorage.getItem('Tarefa') == null){
      return a;
    }
    return JSON.parse(localStorage.getItem('Tarefa') )
  }
  nomeTarefa: Tarefas = {
  nome: ' ',
  categoria: ''
  }
*/
 
/*
  cadastrarTarefas(): void {
    const tarefa: Tarefas = {
      nome: this.nomeTarefa.nome,
      categoria: this.nomeTarefa.categoria
    }
    console.log(this.listaTarefa),
    this.listaTarefa.push(tarefa);
    localStorage.setItem("Tarefa", JSON.stringify(this.listaTarefa));
    this.nomeTarefa.nome = null;
    this.nomeTarefa.categoria= null;
  }
  removerTarefa(indice: number){
    this.listaTarefa.splice(indice,1)
    localStorage.setItem("Tarefa", JSON.stringify(this.listaTarefa))
    return null;
  }
  mudar(){
    localStorage.setItem("Tarefa", JSON.stringify(this.listaTarefa))
  }
*/
}