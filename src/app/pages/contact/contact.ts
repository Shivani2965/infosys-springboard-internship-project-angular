import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  feedback = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private toastService: ToastService) {}

  submitFeedback(): void {

    if (
      !this.feedback.name ||
      !this.feedback.email ||
      !this.feedback.subject ||
      !this.feedback.message
    ) {
      this.toastService.error(
        'Please fill in all the fields.'
      );
      return;
    }

    const feedbackList = JSON.parse(
      localStorage.getItem('wanderly_feedback') || '[]'
    );

    feedbackList.push({
      ...this.feedback,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    });

    localStorage.setItem(
      'wanderly_feedback',
      JSON.stringify(feedbackList)
    );

    this.toastService.success(
      'Thank you! Your feedback has been submitted.'
    );

    this.feedback = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}