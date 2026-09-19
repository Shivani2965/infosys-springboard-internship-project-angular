import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../core/services/toast';

import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  login(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';

      return;
    }

    const success = this.authService.login(this.email, this.password);
    if (success) {
      this.toastService.success('Welcome back! You are successfully logged in.');

      this.router.navigate(['/booking']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
