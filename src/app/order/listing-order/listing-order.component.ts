import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/components/template/base/base.component';
@Component({
  selector: 'app-listing-order',
  templateUrl: './listing-order.component.html',
  styleUrls: ['./listing-order.component.css']
})
export class ListingOrderComponent  {

  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];

  addItem(newItem: Array<Line>) {
    this.items = newItem;
    console.log(newItem);
  }

  currentItem = [ "id", "name", "preço", "action"  ];

  rows = [
    {
      id: 1,
      name: "uva",
      price: 10.6,
    },
    {
      id: 2,
      name: "teclado",
      price: 250,
    },
  ]

}
