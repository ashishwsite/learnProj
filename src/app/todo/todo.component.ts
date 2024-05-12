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
      todos:Todo[]=[];
      localItem:string;
      constructor(){
        this.localItem = this.getStoredTodos();
        if (this.localItem) {
          try {
            this.todos = JSON.parse(this.localItem);
          } catch (error) {
            console.error("Error parsing stored todos:", error);
            // Handle the error, for example by resetting todos to an empty array
            this.todos = [];
          }
        }
        // if(this.localItem===null){
        //   this.todos=[];
        // }
        // else{
        //   this.todos=JSON.parse(this.localItem);
        // }
        // const storedItem = localStorage.getItem("todos");
        // this.localItem = storedItem !== null ? storedItem : ""; 
        // this.todos=[ ]
      }
      ngOnInit(): void {
      }
      deletetode(todo:Todo){
        console.log(todo);
        const index=this.todos.indexOf(todo);
      if(index!==-1){this.todos.splice(index,1);}  
      this.updateStoredTodos();
        // localStorage.setItem("todos",JSON.stringify(this.todos));
   console.log(" custom event todoDelete trigger and deletetode call back fire ")
      }
      addtodo(todo :Todo){
        console.log(todo);
       this.todos.push(todo);
       this.updateStoredTodos();
      //  localStorage.setItem("todos",JSON.stringify(this.todos));
   console.log(" custom event todoAdd trigger and addtodo call back fire ")
      }
      private getStoredTodos(): string {
        if (typeof localStorage !== 'undefined') {
          const storedItem = localStorage.getItem("todos");
          return storedItem !== null ? storedItem : "";
        } else {
          return "";
        }
      }
      private updateStoredTodos() {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      }
}

