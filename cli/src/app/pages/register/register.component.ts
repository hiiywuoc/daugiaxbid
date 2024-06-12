import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router)

  RegisterForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  onSubmit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.register(this.RegisterForm.value).subscribe({
      next: () => {
        this.router.navigate([''])
      }
    })
  }
}
