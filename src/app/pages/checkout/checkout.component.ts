import { Component, OnInit } from '@angular/core';
import { DataService } from '../shopping/data.service';
import { Store } from '../shopping/interface/store.interface';
import { tap } from 'rxjs/operators'
import { Details } from '../shopping/interface/order.interface';
import { Product } from '../products/interface/item.interface';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [
    trigger('enteranimation', [
      transition('* => *', [
        query('.form-field', style({ opacity: 0, transform: 'translateX(-100%)'})),
        query('.form-field', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({opacity: 1, transform: 'translate()'}))
        ]))
      ]),
    ])
  ]
})

export class CheckoutComponent implements OnInit{
  model = {
    name: '',
    store: '',
    shippingAddress: '',
    city: ''
  };

  isDelivery = false;
  cart: Product[] = [];
  stores: Store[] = [];

  constructor (private dataSvc: DataService){}

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void{
   this.isDelivery = value;
  }

  onSubmit(): void{
    console.log('guardar');
    const data = {
      ...FormData,
      date:this.getCurrentDay(),
      pickup: this.isDelivery
    }
  }

  private getStores(): void {
    this.dataSvc.getStores()
    .pipe( tap ((stores:Store[]) => this.stores = stores))
    .subscribe()
  }

  private getCurrentDay(): string {
    return new Date().toLocaleDateString();
  }


}
