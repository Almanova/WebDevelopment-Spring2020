import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories/:categoryId/products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
