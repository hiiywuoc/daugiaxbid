import { DatePipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../../service/Product.service';
import { NgxPaginationModule } from 'ngx-pagination'
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../../interface/Iproduct';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../interface/Category';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, RouterLink,DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  p: number = 1
  productService = inject(ProductService)
  categoryService = inject(CategoryService)
  products: Iproduct[] = [];
  category: Category[] = [];
  ngOnInit() {
    this.productService.GetAll().subscribe({
      next: (data) => {
        this.products = data
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.categoryService.getAllCategory().subscribe({
      next: (data) => {
        this.category = data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  handDle(id: string) {
    if (confirm('Ban Chac Chan Xoa Khong')) {
      this.productService.Delete(id).subscribe({
        next: () => {
          this.products = this.products.filter((products) => products._id != id)
          alert('Ban Xoa Thanh Cong')
        },
        error: (err) => {
          console.log(err);

        }
      })
    }
  }
}
