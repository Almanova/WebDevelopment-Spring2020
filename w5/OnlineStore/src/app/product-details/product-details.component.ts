import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(private categoriesService: CategoriesService,
    private location: Location, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const productId = +this.route.snapshot.paramMap.get('productId');
    this.categoriesService.getProductByProductId(productId)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  share() {
    this.product.share = 'https://telegram.me/share/url?url=' + this.product.link 
      + '&text=Hey, check out the ' + this.product.name + '!';
  }

  switch(img) {
    this.product.main = img;
  }
}
