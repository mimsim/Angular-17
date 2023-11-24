import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../shared/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  productInfo: any;

  constructor(
    private productService: ProductService
  ){

  }
  ngOnInit(): void {
    this.productService.loadProductAll().subscribe((res: any) => {
      console.log(res)
      this.productInfo = res
    })
  }
}
