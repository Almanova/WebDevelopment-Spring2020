import { Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { ALL_PRODUCTS } from './mock-products';
import { CATEGORIES } from './mock-categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories = CATEGORIES;
  products = ALL_PRODUCTS;

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryById(categoryId): Observable<Category> {
    const neededCategory = this.categories.find(category => category.id === categoryId);
    return of(neededCategory);
  }

  getProductsByCategoryId(categoryId): Observable<Product[]> {
    const neededCategory = this.categories.find(category => category.id === categoryId);
    return of(neededCategory.products);
  }

  getProductsByCategoryIdFromAllProducts(categoryId): Observable<Product[]> {
    const neededProducts = this.products.filter(product => product.categoryId === categoryId);
    return of(neededProducts);
  }

  getProductByProductId(productId): Observable<Product> {
    const neededProduct = this.products.find(product => product.id === productId);
    return of(neededProduct);
  }
}
