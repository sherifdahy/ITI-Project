import { Injectable } from '@angular/core';
import { GenricService } from './genric-service';
import { ICart } from '../../Models/icart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  entityName: string;
  constructor(private genericSer: GenricService) {
    this.entityName = "carts";
  }
  getAll(): Observable<ICart[]> {
    return this.genericSer.getAll(this.entityName);
  }
  getAllByUserId(userId: number): Observable<ICart[]> {
    return this.genericSer.getByAnyProperty(this.entityName, "userId", userId.toString());
  }
  post(obj: ICart) {
    return this.genericSer.post(this.entityName, obj);
  }
  delete(id: string) {
    return this.genericSer.delete(this.entityName, id);
  }
  deleteAllForUser(userId: number) {
    return this.genericSer.deleteAllForUser(userId);
  }


}
