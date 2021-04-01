import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Line } from '../components/template/base/base.component';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor( ) { }

  getObservable(collection: AngularFirestoreCollection<Line>) {
    // return collection.valueChanges({ idField: 'id' });
    return collection;
  };
}
