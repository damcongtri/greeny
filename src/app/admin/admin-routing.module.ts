import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCategoryComponent } from './content/add-category/add-category.component';
import { AddProductComponent } from './content/add-product/add-product.component';
import { CategorysComponent } from './content/categorys/categorys.component';
import { EditCategoryComponent } from './content/edit-category/edit-category.component';
import { EditProductComponent } from './content/edit-product/edit-product.component';
import { HomeComponent } from './content/home/home.component';
import { ListProductComponent } from './content/list-product/list-product.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ListProductComponent },
      { path: 'category', component: CategorysComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'edit-category/:id', component: EditCategoryComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
