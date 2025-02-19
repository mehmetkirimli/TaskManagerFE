import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule],
  templateUrl: './log-register.component.html',
  styleUrl: './log-register.component.css',
})
export class LogRegisterComponent {
  title = 'TaskManagerFE';
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Login Formu
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Register Formu
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Formları gönderme işlemi
  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted', this.loginForm.value);
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log('Register Form Submitted', this.registerForm.value);
    }
  }
}
