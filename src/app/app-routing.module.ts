import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TarefaComponent } from "src/tarefa/tarefa.component";
import { categoriaComponent } from "../categoria/categoria.component";

const rotas: Route[] = [
    {
        path:'categoria',
        component: categoriaComponent
    },
    {
        path:'tarefas',
        component: TarefaComponent
    },
    {
        path:'',
        redirectTo: 'tarefas',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}