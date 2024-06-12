import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  router = inject(Router)
  route = inject(ActivatedRoute)
  categoriesID!:string
  categoryService = inject(CategoryService)
  AddCategory : FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl(''),
  })
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.categoriesID = param['id']
      this.categoryService.getCategoryDetail(param['id']).subscribe({
        next:(data)=>{
          this.AddCategory.patchValue(data)
        }
      })
    })
  }
  onSubmit(){
    this.categoryService.updateCategory(this.categoriesID,this.AddCategory.value).subscribe({
      next:()=>{
        this.router.navigate(['/admin/category-list'])
      }
    })
  }
}
