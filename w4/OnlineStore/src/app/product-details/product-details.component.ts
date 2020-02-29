import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products = products;

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProductForDetails();
  }

  getProductForDetails() {
    const id = this.route.snapshot.paramMap.get('productId');
    this.products = this.categoriesService.getProductForDet(id);
  }
}
