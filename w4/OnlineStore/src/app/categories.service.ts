import { Injectable } from '@angular/core';
import { categories } from './categories';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { products } from './products';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  constructor() { }

  getCategories(): Category[] {
    return categories;
  }

  fetchCategories1(): Observable<Category[]> {
    return of(categories);
  }

  getProducts(id): Product[] {
    let laptops = [];
    products.forEach(element => {
      if (element.categoryId == id)
        laptops.push(element);
    });
    return laptops;
  }

  getProductForDet(id): Product[] {
    let prod = [];
    products.forEach(element => {
      if (element.productId == id)
        prod.push(element);
    });
    return prod;
  }
}
