// <app-hello-world title="Some Text"></app-hello-world>
// <app-hello-world [title]="variableName"></app-hello-world>

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<p>Hello, {{ title }}!</p>`
})
export class HelloWorldComponent implements OnInit {

  @Input()
  title: string;

  constructor() {
    // if (!this.title) {
    //   this.title = 'World';
    // }
    console.log('constructor', this.title); // undefined
  }

  ngOnInit() {
    if (!this.title) {
      this.title = 'World';
    }
    console.log('ngOnInit', this.title);
  }

}
