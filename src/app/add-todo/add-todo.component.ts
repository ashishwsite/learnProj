import { Component,EventEmitter ,Output, ɵɵsetNgModuleScope } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Todo } from '../Todo';
@Component({
  selector: 'app-add-todo',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title:string;
  desc:string;
  @Output()  todoAdd: EventEmitter<Todo> =new EventEmitter();
  constructor(){
   this.title=''
   this.desc=""
  }
  handlesubmit(){
    console.log("onsubmit is call ");
    const todo={
      sno:9,
      title:this.title,
  desc:this.desc,
  active:true

    }
    this.todoAdd.emit(todo);
    console.log("submit is call")
  }

}
