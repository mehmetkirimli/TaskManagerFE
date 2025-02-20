import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLoggedIn: boolean = false; // Burada kullanıcı giriş durumu kontrol edilecek

  constructor(private router: Router) {
    // Kullanıcı giriş durumu kontrolü burada yapılacak, örneğin bir service ile
    // Örnek: this.isLoggedIn = authService.isAuthenticated();
  }
}
