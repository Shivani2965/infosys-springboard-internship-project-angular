import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Destination } from '../../core/models/destination';
import { DestinationService } from '../../core/services/destination';
import { AuthService } from '../../core/services/auth';
import { ToastService } from '../../core/services/toast';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  destination?: Destination;
  bookingForm!: FormGroup;
  minDate = '';

  totalAmount = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    const today = new Date();

    this.minDate = today.toISOString().split('T')[0];

    const destinationId = Number(this.route.snapshot.queryParamMap.get('destination'));

    if (destinationId) {
      this.destination = this.destinationService.getDestinationById(destinationId);
    }

    if (!this.destination) {
      this.router.navigate(['/destinations']);
      return;
    }

    const user = this.authService.getUser();

    this.bookingForm = this.fb.group({
      name: [user?.name || '', [Validators.required]],

      email: [user?.email || '', [Validators.required, Validators.email]],

      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],

      travelDate: ['', Validators.required],

      adults: [1, [Validators.required, Validators.min(1)]],

      children: [0, [Validators.min(0)]],
    });

    this.bookingForm.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    this.calculateTotal();
  }

  calculateTotal(): void {
    if (!this.destination || !this.bookingForm) {
      return;
    }

    const adults = Number(this.bookingForm.get('adults')?.value) || 0;

    const children = Number(this.bookingForm.get('children')?.value) || 0;

    const adultPrice = this.destination.price;

    // Children are charged 50% of the adult price
    const childPrice = adultPrice * 0.5;

    this.totalAmount = adults * adultPrice + children * childPrice;
  }

  submitBooking(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();

      this.toastService.error('Please fill in all required details correctly.');

      return;
    }

    const booking = {
      id: Date.now(),

      destination: this.destination,

      passenger: this.bookingForm.value,

      totalAmount: this.totalAmount,

      status: 'Pending Payment',

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('wanderly_current_booking', JSON.stringify(booking));

    this.router.navigate(['/payment']);
  }

  get f() {
    return this.bookingForm.controls;
  }
}
