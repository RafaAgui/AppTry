import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/pages/shopping/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  quantity$ = this.shoppingCartService.quantityAction$;
  total$ = this.shoppingCartService.totalAction$;
  cart$ = this.shoppingCartService.cartAction$;

  constructor(private shoppingCartService: ShoppingCartService) {}
}
