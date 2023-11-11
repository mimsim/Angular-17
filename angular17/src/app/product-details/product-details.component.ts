import { Component,  OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-details',
  // standalone: true,
  // imports: [CommonModule, BrowserModule, HttpClientModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // productService = inject(ProductService)
  showDetails = true;
  productInfo: any;

  constructor(
    private productService: ProductService
  ){

  }
  ngOnInit(): void {
    this.productService.loadProduct().subscribe((res: any) => {
      console.log(res)
      this.productInfo = res
    })
  }
}
