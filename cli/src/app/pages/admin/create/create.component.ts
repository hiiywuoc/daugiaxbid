import { NgFor, NgIf } from '@angular/common';
import { ProductService } from './../../../service/Product.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../interface/Category';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ToastModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [MessageService]
})
export class CreateComponent {
  productService = inject(ProductService)
  router = inject(Router)
  category: Category[] = [];
  categoryService = inject(CategoryService)
  mes = inject(MessageService)
  AddFomr: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(9)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    isShow: new FormControl('', [Validators.required]),
    startAt: new FormControl(''),
    bidTime: new FormControl('')
  })
  ngOnInit() {
    this.categoryService.getAllCategory().subscribe({
      next: (data) => {
        this.category = data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  onSubmit() {
    console.log(this.AddFomr.value);
    this.productService.createProduct({ ...this.AddFomr.value, endAt: new Date() }).subscribe({
      next: () => {
        this.mes.add({
          severity: 'success',
          summary: "Success",
          detail: 'Thêm Thành Công'
        })
        setTimeout(() => this.router.navigate(['/admin/list']), 2000
        )
      }
    })
  }
}
