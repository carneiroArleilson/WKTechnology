import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Line } from 'src/app/components/template/base/base.component';
import { OrdersService } from 'src/app/service/orders.service';

interface TimezoneFirebase {
  nanoseconds: number;
  seconds: number;
}

@Component({
  selector: 'app-listing-orders',
  templateUrl: './listing-orders.component.html',
  styleUrls: ['./listing-orders.component.css'],
})
export class ListingOrdersComponent implements OnInit, OnDestroy {
  closeResult = '';
  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];
  subscription: Subscription = new Subscription();
  currentItem = ['id', 'nome', 'itens', 'preço', 'data', 'ação'];
  product: Line = {
    id: 0,
    name: '',
    items: '',
    price: 0,
    data: new Date(),
  };
  rows: Line[] = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.subscription = this.orderService.getOrders().subscribe((orders) => {
      const newRows: Line[] = [];

      orders.map((order) => {
        const { id, name, items, price, data } = order as Line;
        const newDate = data as any;
        const row: Line = {
          id,
          name,
          items,
          price,
          data: new Date(newDate.seconds),
        };
        newRows.push(row);
      });

      this.rows = newRows;
      console.log(this.rows);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  open() {}
  addItem() {}
  order() {}
  incluirCenario() {}
}
