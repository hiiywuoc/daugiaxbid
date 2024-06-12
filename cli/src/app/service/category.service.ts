import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AddCategory, Category } from '../interface/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/categories'
  http = inject(HttpClient)
  constructor() { }

  getAllCategory() {
    return this.http.get<Category[]>(this.url)
  }

  getCategoryDetail(id: string) {
    return this.http.get<Category>(`${this.url}/${id}`)
  }

  createCategory(data : AddCategory) {
    return this.http.post(`${this.url}` , data)
  }

  updateCategory(id: string , data : AddCategory) {
    return this.http.put(`${this.url}/${id}` , data)
  }

  deleteCategory(id: string) {
    return this.http.delete<Category>(`${this.url}/${id}`)
  }

}
