import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './layout/header/header.component';

import { HomeComponent } from './content/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageComponent } from './page/page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListProductComponent } from './content/list-product/list-product.component';
import { DetailComponent } from './content/detail/detail.component';
import { CartComponent } from './content/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search/search-filter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageComponent,
    ListProductComponent,
    DetailComponent,
    CartComponent,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule,
    FormsModule
  ]
})
export class CustomerModule { }
