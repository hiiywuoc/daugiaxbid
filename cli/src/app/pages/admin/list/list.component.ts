import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../../service/Product.service';
import { Bienso } from '../../../interface/Bienso';
import {NgxPaginationModule} from 'ngx-pagination'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor,NgxPaginationModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  p : number = 1
  productService = inject(ProductService)
  products: Bienso[] = [];
  ngOnInit() {
    this.productService.GetAll().subscribe({
      next:(data)=>{
        this.products=data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
handDle(id:string){
  if(confirm('Ban Chac Chan Xoa Khong')){
    this.productService.Delete(id).subscribe({
      next:()=>{
        this.products=this.products.filter((products)=> products.id != id)
        alert('Ban Xoa Thanh Cong')
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
}
