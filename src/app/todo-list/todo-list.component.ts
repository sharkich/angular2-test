// Service
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  private isLoading = true;
  private activeTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getList()
      .then((todos) => {
        this.todos = todos;
        this.isLoading = false;
      });
  }

  onClick(todo: Todo) {
    this.activeTodo = todo;
  }

}
