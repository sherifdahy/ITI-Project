import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedSer {

  //form product to cart
  private productSource = new BehaviorSubject<string>('');
  changePrdData(data: string) {
    this.productSource.next(data);
  }
  currentPrdData() {
    return this.productSource.asObservable();
  }

  //form cart to order

  private cartSource = new BehaviorSubject<string>('');
  changeCartData(data: string) {
    this.cartSource.next(data);
  }
  currentCartData() {
    return this.cartSource.asObservable();
  }
}
