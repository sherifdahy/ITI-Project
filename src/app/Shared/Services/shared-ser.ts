import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ICart } from '../../Models/icart';
import { IOrder } from '../../Models/order';

@Injectable({
  providedIn: 'root'
})
export class SharedSer {

  //form product to cart
  private productSource = new ReplaySubject<ICart>(1);
  changePrdData(cartVm: ICart) {
    this.productSource.next(cartVm);
  }
  currentPrdData() {
    return this.productSource.asObservable();
  }
  //form cart to order
  private cartSource = new ReplaySubject<IOrder>(1);
  changeCartData(data: IOrder) {
    this.cartSource.next(data);
  }
  currentCartData() {
    return this.cartSource.asObservable();
  }
}
