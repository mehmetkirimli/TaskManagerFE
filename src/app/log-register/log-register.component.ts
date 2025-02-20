import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-log-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule],
  templateUrl: './log-register.component.html',
  styleUrl: './log-register.component.css',
})
export class LogRegisterComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Login Formu
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Register Formu
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Login işlemi
  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login Successful:', response);
          localStorage.setItem('token', response.token); // Token kaydetme // bu işlemi servis yapsın diye kaldırılmalı
        },
        error: (err) => {
          this.error = 'Login failed. Check your credentials.';
          console.error('Login Error:', err);
        },
      });
    }
  }

  // Register işlemi
  onRegisterSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService.register(email, password).subscribe({
        next: (response) => {
          console.log('Register Successful:', response);
        },
        error: (err) => {
          this.error = 'Registration failed. Try again later.';
          console.error('Register Error:', err);
        },
      });
    }
  }
}
