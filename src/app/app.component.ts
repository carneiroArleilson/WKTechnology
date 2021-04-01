import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { Line } from './components/template/base/base.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
}
