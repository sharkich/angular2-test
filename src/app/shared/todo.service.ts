import { Injectable } from '@angular/core';

export class Todo {
  constructor(public id: number, public title?: string) {}
}

@Injectable()
export class TodoService {

  constructor() { }

  getList(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
          resolve([
            new Todo(1, 'Todo 1'),
            new Todo(2, 'Some Todo 2'),
            new Todo(3, 'Op Todo3'),
            new Todo(4, 'Todo 4'),
            new Todo(5, 'Todo 5')
          ]);
      }, Math.random() * 2000 + 1000);
    });
  }

  getTodo(id: number): Promise<Todo> {
    return this.getList()
      .then(todos => todos.find(todo => todo.id === id));
  }

}
