import { Component, OnInit } from '@angular/core';
import { SharedSer } from '../../../../Shared/Services/shared-ser';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {



  constructor(private sharedSer: SharedSer) {

  }
  ngOnInit(): void {
    this.sharedSer.currentPrdData().subscribe(
      (data) => { alert(`Now Im In The CartComponent and this is From product${data}`) }
    )
  }


  checkOut(data: string) {
    this.sharedSer.changeCartData(data);
  }
}
