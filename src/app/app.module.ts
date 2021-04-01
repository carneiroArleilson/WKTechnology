import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/template/base/base.component';
import { ListingComponent } from './product/listing/listing.component';
import { ListingOrderComponent } from './order/listing-order/listing-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/template/menu/menu.component';
import { ListingOrdersComponent } from './order/listing-orders/listing-orders.component';
import { ListingClientsComponent } from './clients/listing-clients/listing-clients.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ListingComponent,
    ListingOrderComponent,
    MenuComponent,
    ListingOrdersComponent,
    ListingClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
