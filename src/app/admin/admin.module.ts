import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AddProductComponent } from './content/add-product/add-product.component';
import { EditProductComponent } from './content/edit-product/edit-product.component';
import { ListProductComponent } from './content/list-product/list-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './content/home/home.component';
import { CategorysComponent } from './content/categorys/categorys.component';
import { AddCategoryComponent } from './content/add-category/add-category.component';
import { EditCategoryComponent } from './content/edit-category/edit-category.component';



@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    HomeComponent,
    CategorysComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
