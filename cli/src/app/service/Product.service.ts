import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Iproduct, ProductForm } from '../interface/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  url = 'http://localhost:3000/products'
  http = inject(HttpClient)
  GetAll() {
    return this.http.get<Iproduct[]>(`${this.url}`)
  }
  Delete(id: string) {
    return this.http.delete<Iproduct>(`${this.url}/${id}`)
  }
  createProduct(data: ProductForm) {
    return this.http.post(this.url, data);
  }
  getProductDetail(id: string) {
    return this.http.get<Iproduct>(`${this.url}/${id}`)
  }
  Edit(id: string, data: ProductForm) {
    return this.http.put<Iproduct>(`${this.url}/${id}`, data)
  }
}
