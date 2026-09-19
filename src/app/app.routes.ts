import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  {
    path: 'destinations',
    loadComponent: () => import('./pages/destinations/destinations').then((m) => m.Destinations),
  },

  {
    path: 'destinations/:id',
    loadComponent: () =>
      import('./pages/destination-details/destination-details').then((m) => m.DestinationDetails),
  },

  {
    path: 'bookings',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/bookings/bookings').then((m) => m.Bookings),
  },

  {
    path: 'payment',
    loadComponent: () => import('./pages/payment/payment').then((m) => m.Payment),
  },

  {
    path: 'payment-success',
    loadComponent: () =>
      import('./pages/payment-success/payment-success').then((m) => m.PaymentSuccess),
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },

  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then((m) => m.Register),
  },

  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
