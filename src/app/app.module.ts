import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { categoriaModule } from 'src/categoria/categoria.module';
import { TarefaModule } from 'src/tarefa/tarefa.module';
import { UserRepository } from 'src/repositories/user.repository';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    categoriaModule,
    TarefaModule
    //ReactiveFormsModule
  ],
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
