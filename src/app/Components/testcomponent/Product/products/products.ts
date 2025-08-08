import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../Shared/Services/product-service';
import { IProduct } from '../../../../Models/iproduct';
import { SharedSer } from '../../../../Shared/Services/shared-ser';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  currentPrds: IProduct[];
  constructor(private prdSer: ProductService, private sharedSer: SharedSer) {
    this.currentPrds = [];
  }


  ngOnInit(): void {

    this.prdSer.getAll().subscribe(
      (data) => { this.currentPrds = data },
      (err) => { console.log(err) }
    )
  }

  addToCart(data: string) {
    this.sharedSer.changePrdData(data);
  }

}


