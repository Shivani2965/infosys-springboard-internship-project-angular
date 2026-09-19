import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import {
  ToastMessage,
  ToastService
} from '../../core/services/toast';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast implements OnInit, OnDestroy {

  toast?: ToastMessage;

  private subscription?: Subscription;

  constructor(
    private toastService: ToastService
  ) {}

  ngOnInit(): void {

    this.subscription =
      this.toastService.toast$.subscribe(
        toast => {

          this.toast = toast;

          setTimeout(() => {
            this.toast = undefined;
          }, 3500);

        }
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}