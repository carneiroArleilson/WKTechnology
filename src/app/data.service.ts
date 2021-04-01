import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Line } from './components/template/base/base.component';

export interface Order {
  products: Line[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private order = new BehaviorSubject<Order>({
    products: [],
    total: 0
  });
  castOrder = this.order.asObservable();

  constructor() {}

  changeOrder(newOrder: Order) {
    this.order.next(newOrder);
  }


}
