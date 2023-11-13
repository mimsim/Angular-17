import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  loadProduct() {
    return this.http.get(`${this.baseUrl}/1`)
  }
}
