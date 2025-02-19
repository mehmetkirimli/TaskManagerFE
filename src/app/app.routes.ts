import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, //AnaSayfa
  { path: 'login', component: LoginComponent }, //Login
  { path: 'register', component: RegisterComponent }, //Register
];
