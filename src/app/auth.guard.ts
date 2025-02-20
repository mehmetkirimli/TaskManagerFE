import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = !!localStorage.getItem('token'); // Örneğin token kontrolü
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/logRegister']); // Eğer giriş yapılmamışsa login/register sayfasına yönlendir
      return false;
    }
  }
}
