import { NgIf } from '@angular/common';
import { ProductService } from './../../../service/Product.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  productService = inject(ProductService)
  router = inject(Router)
  AddForm: FormGroup = new FormGroup({
    bienso: new FormControl('', [Validators.required, Validators.minLength(9)]),
    gia: new FormControl('', [Validators.required, Validators.min(0)]),
    tinh: new FormControl('', [Validators.required]),
    loaixe: new FormControl('', [Validators.required]),
    loaibien: new FormControl('', [Validators.required]),
    startAt: new  FormControl('', [Validators.required]),
    endAt: new  FormControl('', [Validators.required]),
  })
  handSubmit() {
    this.productService.Create(this.AddForm.value).subscribe({
      next: () => {
        this.router.navigate(['/admin/list'])
      }
    })
  }
}
