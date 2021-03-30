import { Component, OnInit, Input } from '@angular/core';

interface Line {
  id: number;
  first: string;
  last: string;
  selected?: boolean;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  @Input() item: Array<string> = []; // decorate the property with @Input()
  @Input() row: Array<Line> = []; // decorate the property with @Input()

  constructor() {}

  ngOnInit(): void {
    this.row.map((element) => {
      element.selected = false;
    });
  }

  reverse(id: number) {
    this.row.map((element) => {
      if (element.id === id) {
        element.selected = !element.selected;
      }
    });
  }
}
