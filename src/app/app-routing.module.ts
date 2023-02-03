import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ErrorComponent } from "./share/error/error.component";

const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'products', loadChildren: () => import('./pages/products/product.module').then(m=>m.ProductModule)},
  {path: '404', component: ErrorComponent },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  //{path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
