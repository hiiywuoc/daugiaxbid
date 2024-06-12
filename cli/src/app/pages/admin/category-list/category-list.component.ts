import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../interface/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categoryService = inject(CategoryService)
  categories: Category[] = [];
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (data) => {
        this.categories = data
      }
    })
  }
  Del(id: string) {
    if (window.confirm('Ban co muon xoa kh?')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          this.categories = this.categories.filter((cate) => cate._id != id)
        }
      })
    }
  }
}
