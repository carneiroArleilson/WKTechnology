import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingClientsComponent } from './clients/listing-clients/listing-clients.component';
import { ListingOrderComponent } from './order/listing-order/listing-order.component';
import { ListingOrdersComponent } from './order/listing-orders/listing-orders.component';
import { ListingComponent } from './product/listing/listing.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: "/products",
  //   pathMatch: "full"
  // },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: "full"
  },
  {
    path: 'products',
    component: ListingComponent,
  },
  {
    path: 'order',
    component: ListingOrderComponent,
  },
  {
    path: 'orders',
    component: ListingOrdersComponent,
  },
  {
    path: 'clients',
    component: ListingClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
