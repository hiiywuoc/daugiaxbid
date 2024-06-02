import { NgIf } from '@angular/common';
import { ProductService } from './../../../service/Product.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  productService = inject(ProductService)
  router = inject(Router)
  route = inject(ActivatedRoute)
  ID!: string
  AddForm: FormGroup = new FormGroup({
    bienso: new FormControl('', [Validators.required, Validators.minLength(9)]),
    gia: new FormControl('', [Validators.required, Validators.min(0)]),
    tinh: new FormControl('', [Validators.required]),
    loaixe: new FormControl('', [Validators.required]),
    loaibien: new FormControl('', [Validators.required]),
    startAt: new FormControl('', [Validators.required]),
    endAt: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.ID = param['id']
      this.productService.View(param['id']).subscribe({
        next: (data) => {
          this.AddForm.patchValue(data)
        },
        error: (err) => {
          console.log(err);

        }
      })
    })
  }
  handSubmit() {
    this.productService.Edit(this.ID, this.AddForm.value).subscribe({
      next: () => {
        this.router.navigate(['/admin/list'])
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}

