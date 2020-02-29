import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'categories', component: ProductListComponent },
      { path: 'products', component: CategoryComponent },
      { path: 'categories/:categoryId/products', component: CategoryComponent},
      { path: 'categories/:categoryId', redirectTo: 'categories/:categoryId/products', pathMatch: 'full'},
      { path: 'categories/categoryId/products/:productId', component: ProductDetailsComponent},
      { path: 'categories/:categoryId/products/:productId', component: ProductDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductItemComponent,
    CategoryComponent,
    ProductDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/