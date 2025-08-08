import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Products } from './Components/testcomponent/Product/products/products';
import { HttpClientModule } from '@angular/common/http';
import { Order } from './Components/testcomponent/Product/order/order';
import { Cart } from './Components/testcomponent/Product/cart/cart';

@NgModule({
  declarations: [
    App,
    Products,
    Order,
    Cart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
