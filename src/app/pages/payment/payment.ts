import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import {
  PaymentService
} from '../../core/services/payment';

import {
  ToastService
} from '../../core/services/toast';

@Component({
  selector: 'app-payment',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment implements OnInit {

  booking: any = null;

  loading = false;

  cancelled = false;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {

    this.cancelled =
      this.router.url.includes('cancelled=true');

    const storedBooking =
      localStorage.getItem('wanderly_current_booking');

    if (storedBooking) {
      this.booking = JSON.parse(storedBooking);
    } else {
      this.router.navigate(['/destinations']);
    }
  }

  payWithStripe(): void {

    if (!this.booking) {
      return;
    }

    this.loading = true;

    this.paymentService
      .createCheckoutSession({
        destinationName:
          this.booking.destination.name,

        totalAmount:
          this.booking.totalAmount,

        bookingId:
          this.booking.id
      })
      .subscribe({

        next: (response) => {

          if (response.url) {
            window.location.href = response.url;
          }

        },

        error: (error) => {

          console.error(
            'Payment error:',
            error
          );

          this.loading = false;

          this.toastService.error(
            'Unable to start payment. Please try again.'
          );
        }

      });
  }
}