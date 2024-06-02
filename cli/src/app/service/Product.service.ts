import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addform, Bienso } from '../interface/Bienso';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
  url = 'http://localhost:3000/products'
  GetAll() {
    return this.http.get<Bienso[]>(`${this.url}`)
  }
  Delete(id: string) {
    return this.http.delete<Bienso>(`${this.url}/${id}`)
  }
  Create(data: Addform) {
    return this.http.post<Bienso>(`${this.url}`, data)
  }
  View(id: string) {
    return this.http.get<Bienso>(`${this.url}/${id}`)
  }
  Edit(id: string, data: Addform) {
    return this.http.put<Bienso>(`${this.url}/${id}`, data)
  }
}
