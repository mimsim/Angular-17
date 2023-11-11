import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
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
    this.productService.loadProduct().subscribe((res: any) => {
      console.log(res)
      this.productInfo = res
    })
  }
}
