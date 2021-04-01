import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

export interface Line {
  id: number;
  selected?: boolean;
  price?: number;
  name?: string;
  items?: string;
  data?: string;
  total?: number;
  cpf?: string;
  ender?: string;
  email?:string;
  nasc?: string;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  @Input() item: Array<string> = []; // decorate the property with @Input()
  @Input() row: Array<Line> = []; // decorate the property with @Input()

  @Output() newItemEvent = new EventEmitter<Array<Line>>();

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
    this.addNewItem();
  }


  addNewItem() {
      const analise = this.row.filter(function(rows){
        return rows.selected;
      });
     this.newItemEvent.emit(analise);
  }
}
