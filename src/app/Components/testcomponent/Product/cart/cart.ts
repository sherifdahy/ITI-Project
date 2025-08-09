import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedSer } from '../../../../Shared/Services/shared-ser';
import { ICart } from '../../../../Models/icart';
import { CartService } from '../../../../Shared/Services/cart-service';
import { filter, Subscription } from 'rxjs';
import { IOrder } from '../../../../Models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit, OnDestroy {

  currentCarts: ICart[] = [];
  productSubs: Subscription = new Subscription();
  saveCartSubs: Subscription = new Subscription();
  getByUserIdSubs: Subscription = new Subscription();
  constructor(private sharedSer: SharedSer, private cartSer: CartService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadCart();

    this.productSubs = this.sharedSer.currentPrdData()
      .pipe(filter(cart => cart && Object.keys(cart).length > 0))
      .subscribe((data) => {
        this.cartSer.post(data).subscribe(() => {
          this.loadCart(); // refresh after save
        });
      });
  }
  generateUniqueId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
  private loadCart() {
    this.getByUserIdSubs = this.cartSer.getAllByUserId(123).subscribe(
      (data) => { this.currentCarts = data; },
      (err) => alert(err)
    );
  }

  ngOnDestroy(): void {
    this.sharedSer.changePrdData({} as ICart); // reset to empty
    this.productSubs.unsubscribe();
    this.saveCartSubs.unsubscribe();
    this.getByUserIdSubs.unsubscribe();
  }

  checkOut(carts: ICart[]) {
    let totalPrice = 0;
    carts.forEach(cart => {
      totalPrice += cart.price * cart.quantity;
    });
    //Clear All Cart For This User
    this.cartSer.deleteAllForUser(123).subscribe(
      (data) => { }
    );
    let order: IOrder = { id: this.generateUniqueId(), orderTotalPrice: totalPrice, userId: 123 }
    this.sharedSer.changeCartData(order);
    this.router.navigate(["orders"]);
  }
  deleteCart(id: string) {
    this.cartSer.delete(id).subscribe(
      (data) => {
        this.router.navigate(["orders"]);
      },
      (err) => { alert(err) }
    );
  }

}
