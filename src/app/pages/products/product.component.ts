import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './interface/item.interface';
import { tap } from 'rxjs/operators'
import { ShoppingCartService } from '../shopping/shopping-cart.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)'}),
            style({opacity: 0.5, transform: 'translateY(35px)'}),
            style({opacity: 1, transform: 'translateY(0)'}),
          ]))
        ]))
      ])
    ])
  ]
})

export class ProductComponent implements OnInit{
  products!: Product[];

  constructor(private productService: ProductsService, private shoppingCartService: ShoppingCartService){
  }

  ngOnInit(): void {
    this.productService
    .getProducts()
    .pipe( tap ((products: Product[]) => this.products = products))
    .subscribe( );
  }

  addToCart(product: Product): void{
    console.log('add to card', product)
    this.shoppingCartService.updateCart(product);
  }
}
