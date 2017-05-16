import { Component, OnInit } from '@angular/core';

import { TodosService } from '../../services/todos.service';

import { Todo } from '../../../todo';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit{
  // private todos: Todo[];
  private todos: any;
  constructor(private todoService:TodosService){

  }

  ngOnInit(){
    this.todos = [];
    this.todoService.getTodos()
                    .subscribe(todos => {
                          this.todos = todos;
                     });
  }

  addTodo($event, todoText){
    if($event.which == 1){
      var result;
      var newTodo = {
        text: todoText.value,
        isCompleted: false
      };

      result = this.todoService.saveTodo(newTodo);
      result.subscribe(x => {
        this.todos.push(newTodo);
        todoText.value = ""
      });
    }
  }

  updateStatus($event, todo){
    if($event.which == 1){
      var todo = {
        _id:todo._id,
        text: todo.text,
        isCompleted: !(todo.isCompleted)
      };
    }
    this.todoService.updateTodo(todo)
        .subscribe(data => {
          todo.isCompleted = !todo.isCompleted
        });
  }

  setEditState(todo, state){
    if(state){
      todo.isEditMode = state;
    }else{
      delete(todo.isEditMode);
    }
  }

  updateTodoText($event, todo){
    //Enter button check
    if($event.which == 13){
      todo.text = $event.target.value;

      var todo = {
        _id: todo._id,
        text: todo.text,
        isCompleted: todo.isCompleted
      };

      this.todoService.updateTodo(todo)
      .subscribe(data => {
        this.setEditState(todo, false)
      });
    }
  }

  deleteTodo(todo){
    var todos = todo;

    this.todoService.deleteTodo(todo._id)
        .subscribe(data => {
          if(data.n == 1){
            for(var i = 0; i < todo.length; i++){
              if(todos[i]._id == todo._id){
                todos.splice(i, 1);
              }
            }
          }
        });
  }
}
