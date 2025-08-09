import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedSer } from '../../../../Shared/Services/shared-ser';
import { filter, Subscription } from 'rxjs';
import { IOrder } from '../../../../Models/order';
import { Orderser } from '../../../../Shared/Services/orderser';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements OnInit, OnDestroy {

  orderSubsc: Subscription = new Subscription();
  saveSubsc: Subscription = new Subscription();
  getAllSubsc: Subscription = new Subscription();
  currentOrders: IOrder[] = [];
  constructor(private sharedSer: SharedSer, private orderSer: Orderser) {

  }

  ngOnInit(): void {

    this.loadOrders();
    this.orderSubsc = this.sharedSer.currentCartData().pipe(
      filter(order => order && Object.keys(order).length > 0)
    ).subscribe(
      (data) => {
        this.saveSubsc = this.orderSer.post(data).subscribe(
          (data) => { this.loadOrders() }
        )
      }
    )

  }
  loadOrders() {
    this.getAllSubsc = this.orderSer.getAllByUserId(123).subscribe(
      (data) => { this.currentOrders = data }
    )
  }

  ngOnDestroy(): void {
    this.sharedSer.changeCartData({} as IOrder);
    this.orderSubsc.unsubscribe();
    this.saveSubsc.unsubscribe();
    this.getAllSubsc.unsubscribe();
  }


}
