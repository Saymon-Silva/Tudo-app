import { NgModule } from "@angular/core";
import { TarefaComponent } from "./tarefa.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TarefaComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TarefaModule{

}