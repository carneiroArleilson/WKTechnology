import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/components/template/base/base.component';

@Component({
  selector: 'app-listing-orders',
  templateUrl: './listing-orders.component.html',
  styleUrls: ['./listing-orders.component.css']
})
export class ListingOrdersComponent implements OnInit {
  closeResult = '';
  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];
  currentItem = ['id', 'name','items', 'price', 'data', 'action'];
  product: Line = {
    id: 0,
    name: '',
    items:'',
    price: 0,
    data: ''
  };
  rows = [
    {
      id: 1,
      name: 'odilomar',
      items:'notebook , monitor',
      price: 10000.6,
      data: '20/03/2020'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  open(){};
  addItem(){};
  order(){};
  incluirCenario(){};

}
