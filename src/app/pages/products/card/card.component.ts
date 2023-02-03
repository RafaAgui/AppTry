import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../interface/item.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  product!: Product

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService
    ){}

  ngOnInit(): void{
    this.activateRoute.params
    .pipe(switchMap (({id}) => this.productService.getProductsId(id) ))
    .subscribe( product => this.product = product);
  }
}
