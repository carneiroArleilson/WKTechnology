import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingOrderComponent } from './order/listing-order/listing-order.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
