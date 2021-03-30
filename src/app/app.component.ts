import { Component } from '@angular/core';
import { Line } from './components/template/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WKTechnology';

  items: Array<Line> = [];

  addItem(newItem: Array<Line>) {
    this.items = newItem;
    console.log(newItem);
  }

  currentItem = [ "id", "first", "last", "actions"  ];

  rows = [
    {
      id: 1,
      first: "arleilson",
      last: "carneiro",
    },
    {
      id: 2,
      first: "odilomar",
      last: "junior",
    },
  ]

}
