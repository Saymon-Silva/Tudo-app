import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TarefaComponent } from "src/tarefa/tarefa.component";
import { CategoriaComponent } from "../categoria/categoria.component";

const rotas: Route[] = [
    {
        path:'categoria',
        component: CategoriaComponent
    },
    {
        path:'tarefa',
        component: TarefaComponent
    },
    {
        path:'',
        redirectTo: 'tarefa',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}