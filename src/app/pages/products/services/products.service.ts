import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/item.interface'
import { tap,catchError } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  }

  getProductsId(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

}
