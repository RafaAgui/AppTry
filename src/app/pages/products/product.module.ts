import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ProductComponent,
    ItemComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
    ]
})
export class ProductModule { }
