import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductService } from '../../../service/Product.service';
import { NgFor } from '@angular/common';
import { Iproduct } from '../../../interface/Iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,BannerComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  viewService = inject(ProductService)
  product:Iproduct[]=[]
  ngOnInit(){
    this.viewService.GetAll().subscribe({
      next:(data)=>{
        this.product = data
      }
    })
  }
}
