import { Component, OnInit } from '@angular/core';
import { SharedSer } from '../../../../Shared/Services/shared-ser';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements OnInit {

  constructor(private sharedSer: SharedSer) {

  }
  ngOnInit(): void {
    this.sharedSer.currentCartData().subscribe(
      (data) => { alert(`im Not In the Order And have this Data ${data}`) }
    )
  }
}
