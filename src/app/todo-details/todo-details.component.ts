import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() todo?: Todo;
  private isLoading: boolean = true;

  constructor(private todoService: TodoService, private activatedRoure: ActivatedRoute) { }

  ngOnInit() {
    if (!this.todo) {
      this.activatedRoure.params.forEach((params: Params) => {
        let id = +params['id'];
        this.todoService.getTodo(id)
          .then((todos) => {
            this.todo = todos;
            this.isLoading = false;
          });
      });
    } else {
      this.isLoading = false;
    }
  }

}
