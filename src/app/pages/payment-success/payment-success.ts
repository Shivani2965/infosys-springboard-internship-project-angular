import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-success.html',
  styleUrl: './payment-success.css'
})
export class PaymentSuccess implements OnInit {

  booking: any = null;

  ngOnInit(): void {

    const storedBooking =
      localStorage.getItem('wanderly_current_booking');

    if (storedBooking) {

      this.booking = JSON.parse(storedBooking);

      this.booking.status = 'Confirmed';
      this.booking.paymentStatus = 'Paid';
      this.booking.paymentDate =
        new Date().toISOString();

      // Save booking to history
      const existingBookings =
        JSON.parse(
          localStorage.getItem('wanderly_bookings') || '[]'
        );

      existingBookings.push(this.booking);

      localStorage.setItem(
        'wanderly_bookings',
        JSON.stringify(existingBookings)
      );

      // Remove current booking
      localStorage.removeItem(
        'wanderly_current_booking'
      );
    }
  }
}