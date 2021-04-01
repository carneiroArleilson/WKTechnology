import { OrdersService } from './../../service/orders.service';
import { DataService } from './../../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Line } from 'src/app/components/template/base/base.component';
import { ClientsService } from 'src/app/service/clients.service';
import { Subscription } from 'rxjs';

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
  currentItem = ['id', 'name', 'preço', 'action'];
  clients: string[] = [];

  rows: Line[] = [];

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

    this.toProducts();
  }
}
