import { Component } from '@angular/core';
import { removeListener } from 'process';

interface TarefasNomes{
  nome: String;
}
interface removeListener{

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostraInput: boolean = true;

  listaTarefa: TarefasNomes[] = [];

  nomeTarefa: TarefasNomes = {
  nome: ' '
  }

  cadastrarTarefas(): void {
    const tarefa: TarefasNomes = {
      nome: this.nomeTarefa.nome,
    }
    console.log(this.nomeTarefa),
    this.listaTarefa.push(tarefa);
  }

  remover: boolean = false;
  removerTarefas(): void{
    const removerTarefa: removeListener ={
      
    }
    //this.listaTarefa.removeAtributes(this.nomeTarefa)
  }

  inputMudou(): void{
    console.log('asdf');
  }
}

