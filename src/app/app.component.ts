import { Component } from '@angular/core';
import { Todo } from './Todo';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterOutlet } from '@angular/router';

// HERE ALL COMPONENTS ARE PRESRNT
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[TodoComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // THIS IS CLASS WHERE WE DEFINE SOME VARIABLE AND FUNCTION ACESS LIKE JS VARIABLE IN OTHER FILE
  title = 'lEARN Angular';
  constructor(){
    setTimeout(()=>{
this.title="Todolist"
    },2000
    )
  }
}
