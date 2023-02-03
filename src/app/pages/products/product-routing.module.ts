import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product.component';

const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children:[{
    path: ':id',
    component: CardComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
