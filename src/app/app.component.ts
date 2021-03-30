import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WKTechnology';
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
