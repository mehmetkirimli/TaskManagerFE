import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7007/api/auth'; // Backend URL
  private tokenKey = 'token'; // LocalStorage anahtarı

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          if (response.token) {
            localStorage.setItem(this.tokenKey, response.token); // Token'ı kaydet
            this.router.navigate(['/profile']); // Ana sayfaya yönlendir
          }
        })
      );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Çıkış yaparken token'ı sil
    this.router.navigate(['/login']); // Giriş sayfasına yönlendir
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey); // Kullanıcı giriş yaptı mı?
  }
}
