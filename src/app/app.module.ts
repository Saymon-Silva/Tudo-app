import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { categoriaModule } from 'src/categoria/categoria.module';
import { TarefaModule } from 'src/tarefa/tarefa.module';
import { UserRepository } from 'src/repositories/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    categoriaModule,
    TarefaModule,
    HttpClientModule
    //ReactiveFormsModule
  ],
  providers: [
    UserRepository,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
