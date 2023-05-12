import { NgModule } from "@angular/core";
import { categoriaComponent } from "./categoria.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        categoriaComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class categoriaModule{

}