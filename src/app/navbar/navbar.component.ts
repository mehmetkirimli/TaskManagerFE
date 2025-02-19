import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn = false; // Kullanıcı giriş durumu, başlangıçta false

  // Çıkış yapma fonksiyonu (örnek)
  logout() {
    this.isLoggedIn = false;
    // Burada JWT token'ı silip, başka işlemler yapabiliriz.
  }
}
