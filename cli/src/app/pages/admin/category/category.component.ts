import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../service/category.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categoryService = inject(CategoryService)
  router = inject(Router)
  AddCategory: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  })
  onSubmit() {
    this.categoryService.createCategory(this.AddCategory.value).subscribe({
      next: () => {
        this.router.navigate(['/admin/category-list'])
      }
    })
  }
}
