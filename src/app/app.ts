import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Toast } from './shared/toast/toast';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    Toast
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}