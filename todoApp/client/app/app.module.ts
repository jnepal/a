import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TodosComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
