import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { TodoService } from './shared/todo.service';
import { HomeComponent } from './home/home.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TopMenuComponent,
    HomeComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    routing,

    MdCardModule,
    MdButtonModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
