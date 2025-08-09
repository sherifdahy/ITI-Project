import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../Shared/Services/product-service';
import { IProduct } from '../../../../Models/iproduct';
import { SharedSer } from '../../../../Shared/Services/shared-ser';
import { ICart } from '../../../../Models/icart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  currentPrds: IProduct[];
  constructor(private prdSer: ProductService, private sharedSer: SharedSer, private router: Router) {
    this.currentPrds = [];
  }
  generateUniqueId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  ngOnInit(): void {

    this.prdSer.getAll().subscribe(
      (data) => { this.currentPrds = data },
      (err) => { console.log(err) }
    )
  }

  addToCart(price: number, quantity: number, count: string, name: string) {
    let cartVm: ICart = {
      price: price, quantity: quantity, count: +count, name: name, id: this.generateUniqueId().toString(), userId: 123
    }
    this.sharedSer.changePrdData(cartVm);
    this.router.navigate(["carts"]);
  }

}


