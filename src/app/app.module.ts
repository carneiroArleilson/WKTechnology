import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/template/base/base.component';
import { ListingComponent } from './product/listing/listing.component';
import { ListingOrderComponent } from './order/listing-order/listing-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ListingComponent,
    ListingOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
