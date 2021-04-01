import { StoreService } from './store.service';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private storeService: StoreService,
    private firebaseStore: AngularFirestore
  ) { }

  getProducts() {
    return this.firebaseStore.collection('products').valueChanges();
  }

  addProduct(product: any) {
    this.firebaseStore.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.firebaseStore.collection('products').add(product),
      ]);
      return promise;
    });
  }
}
