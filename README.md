# 🌍 Wanderly — Tourism Information & Online Booking System

Wanderly is a responsive tourism and online booking web application built with **Angular**. It enables users to explore destinations, view travel packages, complete a booking flow, and proceed to Stripe payment and booking confirmation.

## 🎯 Problem Statement

Travelers often need to browse destinations, compare packages, view location information, and complete bookings through a single platform. Wanderly provides a simple end-to-end tourism experience that combines destination discovery, authentication, booking, maps, and payment.

## 🛠️ Tech Stack

**Frontend**

* Angular
* TypeScript
* HTML5 & CSS3
* Angular Router
* RxJS

**Backend**

* Node.js
* Express.js
* CORS
* dotenv

**Integrations & Storage**

* Stripe
* Google Maps
* Browser LocalStorage

**Tools**

* Angular CLI
* npm
* Git & GitHub

## ✨ Key Features

* Responsive tourism landing page
* Destination browsing and filtering
* Debounced search/filter interaction
* Load-more functionality
* Destination details with packages, pricing, duration, and places to visit
* Google Maps destination integration
* Client-side user registration and login
* Protected booking routes using Angular route guards
* Dynamic booking amount calculation
* Stripe payment workflow
* Booking confirmation flow
* LocalStorage-based session and application state
* Responsive navigation with mobile hamburger menu

## 🏗️ Implementation

The application follows a component-based Angular architecture with dedicated services for authentication, destinations, and payments.

The booking flow is:

```text
Destination
    ↓
Destination Details
    ↓
Authentication
    ↓
Booking Form
    ↓
Payment
    ↓
Booking Confirmation
```

The Angular frontend communicates with the **Express.js backend** for payment-related requests. Stripe secret credentials are kept on the server using environment variables.

## 📁 Project Structure

```text
Wanderly/
├── src/
│   └── app/
│       ├── core/
│       │   ├── guards/
│       │   └── services/
│       ├── pages/
│       │   ├── home/
│       │   ├── destinations/
│       │   ├── booking/
│       │   ├── bookings/
│       │   ├── payment/
│       │   └── payment-success/
│       └── shared/
│           └── navbar/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm
* Angular CLI
* Git

### Installation

```bash
git clone https://github.com/Shivani2965/Wanderly.git
cd Wanderly
npm install
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Run Backend

```bash
npm start
```

### Run Frontend

Open a new terminal in the project root:

```bash
ng serve
```

Application:

```text
http://localhost:4200
```

> Never commit `.env` or expose Stripe secret keys publicly.
> 

## 💾 Data Storage

The current version uses **LocalStorage and local/static application data** instead of a traditional database.

For production, the application could be extended with a persistent database and server-side authentication.

## 🔮 Future Improvements

* MongoDB or other persistent database
* Secure server-side authentication
* Admin dashboard
* Persistent booking history
* Email booking confirmations
* Expanded destination and package management
* Production deployment


