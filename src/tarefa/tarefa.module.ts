import { NgModule } from "@angular/core";
import { TarefaComponent } from "./tarefa.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserRepository } from "src/repositories/user.repository";

@NgModule({
    declarations: [
        TarefaComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        UserRepository
    ]
})
export class TarefaModule{

}