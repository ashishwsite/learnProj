import { Component,Input,OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../Todo';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  standalone:true,
  imports:[RouterOutlet],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo ;
// AS HERE TODO IS NOT PRESENT SO WE DIRTELY NOT CHANGE THE TODO
//  BUT WE SAY THAT TO DELETE IT BY CALLING EVENT 
//YAHA SE todoDelete event ko PHEK RAHA HUA JO KI TODO COMPOM=NT ME HANDLE HOAGA 
  @Output()  todoDelete: EventEmitter<Todo> =new EventEmitter();
  constructor(){
   this .todo={
    sno:1,
    title:"first",
    desc:"ds",
    active:true
   }
  }
ngOnInit() : void{}
onclick(todo: Todo){
    this.todoDelete.emit(todo);
  console.log("onclick for delete is call",todo);
}
}
