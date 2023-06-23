import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TarefaComponent } from "src/tarefa/tarefa.component";
import { CategoriaComponent } from "../categoria/categoria.component";
import { AuthGuardService } from "src/services/auth-guard.services";

const rotas: Route[] = [
    {
        path:'categoria',
        component: CategoriaComponent
    },
    {
        path:'tarefa',
        component: TarefaComponent,
        canActivate: [AuthGuardService]
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