import { OrdersService } from './../../service/orders.service';
import { DataService } from './../../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Line } from 'src/app/components/template/base/base.component';
import { ClientsService } from 'src/app/service/clients.service';
import { Subscription } from 'rxjs';

interface NewOrder {
  id: number;
  name: string;
  items: string;
  data: Date;
  price: number;
}

@Component({
  selector: 'app-listing-order',
  templateUrl: './listing-order.component.html',
  styleUrls: ['./listing-order.component.css'],
})
export class ListingOrderComponent implements OnInit, OnDestroy {
  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];
  subscribe = new Subscription();
  currentItem = ['id', 'nome', 'preço', 'ação'];
  clients: string[] = [];
  client: string = '';

  rows: Line[] = [];
  newId = 0;

  constructor(
    private router: Router,
    private dataService: DataService,
    private clientService: ClientsService,
    private orderService: OrdersService
  ) {}

  ngOnInit() {
    this.dataService.castOrder.subscribe((order) => {
      this.rows = order.products;
      this.total = order.total;
    });

    this.subscribe = this.clientService.getClients().subscribe(clients => {
      const allClients = clients.map(client => {
        const clientAsLine = client as Line;
        return clientAsLine.name;
      });

      this.clients = allClients as Array<string>;
    });

    this.subscribe = this.orderService.getOrders().subscribe(orders => {
      const orderAsLine = orders as Line[];
      this.newId = orderAsLine.sort((a, b) => b.id - a.id)[0].id + 1;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  addItem(newItem: Array<Line>) {
    this.items = newItem;
    console.log(newItem);
  }

  toProducts() {
    this.router.navigate(['/products']);
  }

  finish() {
    const allProducts = this.rows.map(row => row.name);
    const newOrder: NewOrder = {
      id: this.newId,
      items: allProducts.reduce((acc, cur) => `${acc}, ${cur}`) as string,
      name: this.client,
      price: this.total,
      data: new Date(),
    };
    this.orderService.addOrder(newOrder);
    this.toProducts();
  }
}
