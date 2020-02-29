import { Component } from '@angular/core';

import { products } from '../products';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  categories: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categories = this.categoriesService.getCategories();
  }

  showCategories(): void {
    this.categoriesService.fetchCategories1().subscribe(categories => this.categories = this.categories);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/