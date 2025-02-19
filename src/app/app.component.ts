import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LogRegisterComponent } from './log-register/log-register.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    LogRegisterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
