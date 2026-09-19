import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastSubject =
    new Subject<ToastMessage>();

  toast$ =
    this.toastSubject.asObservable();

  success(message: string): void {

    this.toastSubject.next({
      message,
      type: 'success'
    });
  }

  error(message: string): void {

    this.toastSubject.next({
      message,
      type: 'error'
    });
  }

  info(message: string): void {

    this.toastSubject.next({
      message,
      type: 'info'
    });
  }
}