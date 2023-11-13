import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  showDetails = true;
  productInfo: any;

  // id = this.route.snapshot.params['id'];.
  // id: any;
  id = this.route.snapshot.params['id'];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { 
    // this.id = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getById(this.route.snapshot.params['id'])
  }
  getById(id: any){
    this.productService.loadProduct().subscribe((res: any) => {
    console.log(res)
    this.productInfo = res
  })}
}
