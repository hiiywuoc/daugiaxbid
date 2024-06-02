import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../service/Product.service';
import { Bienso } from '../../../../interface/Bienso';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css'
})
export class Tab1Component {
  biensoService = inject(ProductService)
  products: Bienso[] = []

  ngOnInit() {
    this.biensoService.GetAll().subscribe({
      next: (data) => {
        this.products = data
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
