import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/components/template/base/base.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];

  addItem(newItem: Array<Line>) {
    this.items = newItem;
    console.log(newItem);
    this.soma();
    this.total = this.soma();
  }

  soma (){
    const tot = this.items.map(function(item){
      return item.price || 0;
    });

    return tot.reduce(function(acc,cur){
      return acc + cur;
    });
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
