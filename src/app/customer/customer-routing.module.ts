import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './content/cart/cart.component';
import { DetailComponent } from './content/detail/detail.component';
import { HomeComponent } from './content/home/home.component';
import { ListProductComponent } from './content/list-product/list-product.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ListProductComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'cart', component: CartComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
