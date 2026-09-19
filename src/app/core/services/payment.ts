import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CheckoutRequest {
  destinationName: string;
  totalAmount: number;
  bookingId: number;
}

export interface CheckoutResponse {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:4242';

  constructor(private http: HttpClient) {}

  createCheckoutSession(
    booking: CheckoutRequest
  ): Observable<CheckoutResponse> {

    return this.http.post<CheckoutResponse>(
      `${this.apiUrl}/create-checkout-session`,
      booking
    );
  }
}