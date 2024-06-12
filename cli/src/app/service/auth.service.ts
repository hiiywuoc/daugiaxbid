import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {LoginForm, RegisterForm } from '../interface/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/auth';
  http = inject(HttpClient)
  register(data :RegisterForm){
    return this.http.post(`${this.url}/register`,data)
  }
  login(data :LoginForm){
    return this.http.post(`${this.url}/login`,data)
  }
}
