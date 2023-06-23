import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users';
import { UserRepository } from 'src/repositories/user.repository';


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


private userId: string = 'saymon.silva';
private users: User[] = [];
user!: User;

constructor(
  private userRepository: UserRepository
) {
  userRepository.getUsers().subscribe({
    next : (value) => {
      console.log(value);
    }
  })
}
  ngOnInit(): void {
    this.tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
    this.categorias = JSON.parse(localStorage.getItem('Categorias'))
  }

adicionarTarefa(): void {
  const tarefa: Tarefa = {
    nome: this.tarefa.nome,
    categoria: this.tarefa.categoria
    };
    if (!this.hasPermission('Add')) {
      alert('Não pode cadastrar');
      return;
    }
    else{
    console.log(this.tarefa);
    this.tarefas.push(tarefa);
    localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
    this.tarefa.nome = '';
    this.tarefa.categoria = '';

  alert('Pode cadastrar');
}
}

editarTarefa(): void {
  if (!this.hasPermission('Edit')) {
    alert('Não pode cadastrar');
    return;
  }
  alert('Pode cadastrar');
}

removerTarefa(indice : number): void {
  if (!this.hasPermission('Remove')) {
    alert('Não pode cadastrar');
    return;
  }
  else{
    alert('Pode cadastrar');
    this.tarefas.splice(indice, 1);
    localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
  }
}

hasPermission(permission: string): boolean {
  console.log(this.user);
  return this.user.cardPermissions.some((cardPermission) => {
    return cardPermission === permission;
  });
}

private getUsuarioLogado(): User {
  return this.users.find((user) => {
    return user.id === this.userId
  }) as User;
}

}

// meu codigo -->
// cadastrarTarefas(): void {
// const tarefa: Tarefa = {
// nome: this.tarefa.nome,
// categoria: this.tarefa.categoria
// };
// console.log(this.tarefa);
// this.tarefas.push(tarefa);
// localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
// this.tarefa.nome = '';
// this.tarefa.categoria = '';

// alterarTarefa(tarefa: Tarefa): void {
//     localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
//   }
  
// removerTarefa(indice: number): void {
// this.tarefas.splice(indice, 1);
// localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
// }

// ngOnInit(): void {
// this.tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
// this.categorias = JSON.parse(localStorage.getItem('Categorias'))
// }

// mudar(): void {
// localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
// }
//<--
