import { Injectable } from '@angular/core';
import { GenricService } from './genric-service';
import { Observable } from 'rxjs';
import { IProduct } from '../../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  entityName: string;
  constructor(private genericSer: GenricService) {
    this.entityName = "products";
  }


  getAll(): Observable<IProduct[]> {
    return this.genericSer.getAll(this.entityName);
  }
}
