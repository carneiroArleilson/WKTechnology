import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private storeService: StoreService,
    private firebaseStore: AngularFirestore
  ) {}

  getOrders() {
    return this.storeService.getObservable(
      this.firebaseStore.collection('orders')
    );
  }

  addOrder(order: any) {
    this.firebaseStore.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.firebaseStore.collection('orders').add(order),
      ]);
      return promise;
    });
  }
}
