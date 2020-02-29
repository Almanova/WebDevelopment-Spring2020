import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  products: Product[];

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  getCategoryProducts() {
    const id = this.route.snapshot.paramMap.get('categoryId');
    this.products = this.categoriesService.getProducts(id);
  }
}
