import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule, RouterLink],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css'
})
export class Bookings implements OnInit {

  bookings: any[] = [];

  ngOnInit(): void {

    this.bookings = JSON.parse(
      localStorage.getItem('wanderly_bookings') || '[]'
    ).reverse();

  }
}