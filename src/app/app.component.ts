import { Component } from '@angular/core';
import { User } from 'src/models/users';
import { UserRepository } from 'src/repositories/user.repository';

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


  userRepository: UserRepository;
  private userId : string = 'joao';
  private users: User[] = [];
  private user: User | undefined

  constructor(private useRepository: UserRepository){
      console.log(this.userRepository.getUsers());
      this.user = this.getUsuarioLogado();
  }
  private getUsuarioLogado(): User{
    return this.users.find((user) => { return user.id === this.userId});
  }
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