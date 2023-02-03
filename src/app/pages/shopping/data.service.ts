import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Details, Order } from "./interface/order.interface";
import { Store } from "./interface/store.interface";

@Injectable({
  providedIn: 'root'
})

export class DataService{
  private apiURL='http://localhost:3000';
  constructor(private http: HttpClient){}

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiURL}/stores`);
  }

  //esto guarda nuestra orden de compra
  saveOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(`${this.apiURL}/orders`, order)
  }

  //esto guarda nuestra details de la orden de compra... en teoría esto se encargaría en backend
  saveDetailsOrder(details: Details): Observable<Details>{
    return this.http.post<Details>(`${this.apiURL}/detailsOrders`, details)
  }
}
