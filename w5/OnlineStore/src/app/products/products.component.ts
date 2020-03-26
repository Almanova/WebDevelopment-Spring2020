import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  category: Category;

  constructor(private categoriesService: CategoriesService, 
    private location: Location, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  getCategoryProducts(): void {
    const categoryId = +this.route.snapshot.paramMap.get('categoryId');
    this.categoriesService.getProductsByCategoryId(categoryId)
      .subscribe(products => this.products = products);
    this.categoriesService.getCategoryById(categoryId).subscribe(category => this.category = category);
  }
}
