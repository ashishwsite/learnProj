import { Component, OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { Todo } from '../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemComponent,AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})


export class TodoComponent implements OnInit {
      // here describe todo item
      todos:Todo[];
      localItem:string;
      constructor(){
        const storedItem = localStorage.getItem("todos");
        this.localItem = storedItem !== null ? storedItem : ""; 
        this.todos=[ ]
      }
      ngOnInit(): void {
      }
      deletetode(todo:Todo){
        console.log(todo);
        const index=this.todos.indexOf(todo);
        this.todos.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(this.todos));
   console.log(" custom event todoDelete trigger and deletetode call back fire ")
      }
      addtodo(todo :Todo){
        console.log(todo);
       this.todos.push(todo);
       localStorage.setItem("todos",JSON.stringify(this.todos));
   console.log(" custom event todoAdd trigger and addtodo call back fire ")
      }
}