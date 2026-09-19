import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../core/services/toast';

import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  register(): void {
    this.errorMessage = '';

    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all the fields.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.register(this.name, this.email, this.password);

    this.router.navigate(['/booking']);
    this.toastService.success(`Welcome to Wanderly, ${this.name}! Your account has been created.`);

    this.router.navigate(['/booking']);
  }
}
