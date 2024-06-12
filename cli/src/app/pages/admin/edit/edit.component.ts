import { NgIf } from '@angular/common';
import { ProductService } from './../../../service/Product.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Category } from '../../../interface/Category';
import { CategoryService } from '../../../service/category.service';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ToastModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [MessageService]
})
export class EditComponent {
  productService = inject(ProductService)
  router = inject(Router)
  category: Category[] = [];
  categoryService = inject(CategoryService)
  route = inject(ActivatedRoute)
  mes = inject(MessageService)
  ID!: string
  AddFomr: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(9)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    isShow: new FormControl('', [Validators.required]),
    startAt: new FormControl(''),
    bidTime: new FormControl('')
  })
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.ID = param['id']
      this.productService.getProductDetail(param['id']).subscribe({
        next: (data) => {
          const now = new Date(data.startAt)
          now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
          const startAt = now.toISOString().slice(0,16);
          this.AddFomr.patchValue({ ...data, startAt: startAt });
        },
        error: (err) => {
          console.log(err);
        }
      })
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
  onSubmit() {
    this.productService.Edit(this.ID, this.AddFomr.value).subscribe({
      next: () => {
        this.mes.add({
          severity: 'success',
          summary: "Success",
          detail: 'Sửa Thành Công'
        })
        setTimeout(() => this.router.navigate(['/admin/list']), 2000
        )
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}

