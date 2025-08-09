import { Injectable } from '@angular/core';
import { GenricService } from './genric-service';
import { IOrder } from '../../Models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Orderser {


  entityName: string;
  constructor(private genericSer: GenricService) {
    this.entityName = "orders";
  }

  getAllByUserId(userId: number): Observable<IOrder[]> {
    return this.genericSer.getByAnyProperty(this.entityName, "userId", userId.toString());
  }
  post(obj: IOrder) {
    return this.genericSer.post(this.entityName, obj);
  }


}
