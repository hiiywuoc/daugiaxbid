import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserLogin } from '../../interface/Users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router)

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  onSubmit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.login(this.LoginForm.value).subscribe({
      next: (data) => {
        localStorage.setItem('token', (data as UserLogin).token),
        localStorage.setItem('userId', (data as UserLogin).user._id)
      }
    })
  }
}
