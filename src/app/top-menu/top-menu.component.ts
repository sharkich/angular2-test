import { Component, OnInit, Input } from '@angular/core';

interface Menu {
  id: number;
  title: string;
  link: string;
}

const MENU: Menu[] = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'ToDo List',
    link: '/todo'
  }
];

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input() title: string;

  private activeMenu: Menu;
  constructor() {
  }

  ngOnInit() {
  }

  get menus() {
    return MENU;
  }

  onClick(menu: Menu) {
    this.activeMenu = menu;
  }

}
