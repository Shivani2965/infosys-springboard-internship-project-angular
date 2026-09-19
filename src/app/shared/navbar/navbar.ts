import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { AuthService } from '../../core/services/auth';
import { ToastService } from '../../core/services/toast';

@Component({
  selector: 'app-navbar',

  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  isLoggedIn = false;
  userName = '';

  mobileMenuOpen = false;

  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {

    this.authService.loggedIn$.subscribe(
      loggedIn => {

        this.isLoggedIn = loggedIn;

        if (loggedIn) {

          const user =
            this.authService.getUser();

          this.userName =
            user?.name || 'Traveler';

        } else {

          this.userName = '';

        }

      }
    );
  }

  toggleMobileMenu(): void {

    this.mobileMenuOpen =
      !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {

    this.mobileMenuOpen = false;
  }

  logout(): void {

    this.authService.logout();

    this.toastService.success(
      'You have been logged out successfully.'
    );

    this.closeMobileMenu();
  }
}