import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Line } from 'src/app/components/template/base/base.component';

@Component({
  selector: 'app-listing-order',
  templateUrl: './listing-order.component.html',
  styleUrls: ['./listing-order.component.css'],
})
export class ListingOrderComponent implements OnInit {
  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];
  currentItem = ['id', 'name', 'preço', 'action'];

  rows: Line[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.castOrder.subscribe(order => {
      this.rows = order.products;
      this.total = order.total;
    })
  }

  addItem(newItem: Array<Line>) {
    this.items = newItem;
    console.log(newItem);
  }

  toProducts() {
    this.router.navigate(['/products']);
  }

  finish() {
    this.toProducts();
  }
}
