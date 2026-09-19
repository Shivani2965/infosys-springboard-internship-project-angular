# Wanderly

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# 🌍 Wanderly — Travel Information & Online Booking Platform

> A modern travel discovery and online booking platform built with Angular, featuring destination exploration, filtering, authentication, booking management, Google Maps integration, and Stripe test payments.

---

## ✨ Overview

**Wanderly** is a responsive travel booking web application designed to help users discover destinations, explore detailed travel packages, and make bookings through an interactive and user-friendly interface.

The project was developed as a reconstruction and enhancement of an internship project, with a completely redesigned frontend and a stronger focus on Angular concepts, reusable components, routing, forms, services, authentication, and payment integration.

---

## 🚀 Features

### 🏠 Home

- Modern travel-focused landing page
- Hero section with destination imagery
- Featured destinations
- Travel information sections
- Testimonials
- Responsive navigation
- Quick navigation to Explore Destinations

### 🗺️ Explore Destinations

- 50+ Indian travel destinations
- Destination cards with:
  - Destination name
  - Location
  - Category
  - Description
  - Price
  - Rating
  - Number of travelers
  - Duration
- Search destinations
- Filter by:
  - Category
  - Location
  - Destination
- Sort by:
  - Price — Low to High
  - Price — High to Low
  - Rating
  - Popularity
- Scroll-based pagination / load more destinations

### 📍 Destination Details

Each destination has a dedicated details page containing:

- Destination overview
- Travel package information
- Package inclusions
- Rating
- Traveler information
- Duration
- Hotel information
- Hotel rating
- Hotel price per night
- Google Maps location
- Direct booking option

### 🔐 Authentication

- User registration
- User login
- Logout
- Authentication state management
- Protected routes using Angular route guards
- User information stored locally for the demo

### 📝 Booking

Users can book a selected destination by providing:

- Name
- Email
- Phone number
- Travel date
- Number of adults
- Number of children

The booking amount is calculated dynamically based on the number of travelers.

### 💳 Stripe Payments

- Stripe Checkout integration
- Secure redirect to Stripe's hosted checkout
- INR-based test payment
- Payment success page
- Payment cancellation handling
- Booking confirmation after successful checkout

> Stripe is currently configured in **test mode** for demonstration purposes.

### 📚 Booking History

Logged-in users can view their previous bookings, including:

- Booking ID
- Destination
- Travel date
- Number of travelers
- Amount paid
- Booking status
- Payment status

### 📩 Contact & Feedback

- Contact information
- Office details
- Working hours
- Feedback form
- Client-side feedback storage
- Toast notifications

### 📱 Responsive Design

The application is designed to work across:

- Desktop
- Tablet
- Mobile

---

## 🛠️ Tech Stack

### Frontend

- **Angular**
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Bootstrap Icons
- RxJS

### Backend

- Node.js
- Express.js
- Stripe API
- CORS
- dotenv

### Storage

- Browser LocalStorage

### APIs & Integrations

- Google Maps Embed
- Stripe Checkout

---

## 🧠 Angular Concepts Demonstrated

This project was built to demonstrate practical Angular development concepts including:

- Standalone Components
- Angular Routing
- Lazy-loaded Components
- Route Parameters
- Query Parameters
- Route Guards
- Dependency Injection
- Services
- RxJS `BehaviorSubject`
- Observables
- Template-driven Forms
- Reactive Forms
- Form Validation
- Two-way Data Binding
- Property Binding
- Event Binding
- Structural Directives
- Attribute Directives
- Pipes
- Component Communication
- LocalStorage
- Dynamic calculations
- Conditional rendering
- Responsive layouts

---

## 📂 Project Structure

```text
wanderly/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── src/
│   ├── app/
│   │   │
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   ├── models/
│   │   │   └── services/
│   │   │
│   │   ├── shared/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   └── toast/
│   │   │
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── destinations/
│   │   │   ├── destination-details/
│   │   │   ├── booking/
│   │   │   ├── payment/
│   │   │   ├── payment-success/
│   │   │   ├── bookings/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── contact/
│   │   │
│   │   ├── app.component.*
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── assets/
│   └── styles.css
│
├── angular.json
├── package.json
└── README.md