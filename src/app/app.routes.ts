import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogRegisterComponent } from './log-register/log-register.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logRegister', component: LogRegisterComponent },
];
