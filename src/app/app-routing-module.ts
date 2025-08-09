import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './Components/testcomponent/Product/products/products';
import { Cart } from './Components/testcomponent/Product/cart/cart';
import { Order } from './Components/testcomponent/Product/order/order';

const routes: Routes = [
  { path: '', component: Products },
  { path: 'products', component: Products },
  { path: 'carts', component: Cart },
  { path: 'orders', component: Order },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
