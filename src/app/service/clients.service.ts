import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(
    private storeService: StoreService,
    private firebaseStore: AngularFirestore
  ) {}

  getClients() {
    return this.storeService.getObservable(
      this.firebaseStore.collection('clients')
    );
  }

  addClient(client: any) {
    this.firebaseStore.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.firebaseStore.collection('clients').add(client),
      ]);
      return promise;
    });
  }
}
