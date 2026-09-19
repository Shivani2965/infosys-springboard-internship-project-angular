# 🌍 Wanderly — Tourism Information & Online Booking System

Wanderly is a responsive tourism and online booking web application built with Angular. It allows users to explore destinations, view detailed travel information, select packages, complete a booking flow, and proceed to payment and booking confirmation.

The project focuses on building a complete travel-booking experience using Angular, TypeScript, Express.js, browser-based LocalStorage, and Stripe integration.

---
# 🛠️ Tech Stack

## Frontend

* **Angular**
* **TypeScript**
* **HTML5**
* **CSS3**
* **Angular Router**
* **RxJS**

## Backend

* **Node.js**
* **Express.js**
* **CORS**
* **dotenv**

## Payment

* **Stripe**

## Data Storage

* **Browser LocalStorage**
* Local/static application data

## Integrations

* **Google Maps**

## Development Tools

* **Angular CLI**
* **npm**
* **Git**
* **GitHub**

---

# ✨ Features

## 🏠 Home Page

* Responsive landing page
* Navigation to different sections
* Featured travel destinations
* Travel-focused call-to-action sections

## 🌎 Destinations

* Browse available destinations
* Destination cards
* Destination filtering
* Debounced filtering/search interaction
* Load-more functionality
* Navigation to destination details

## 📍 Destination Details

Users can view:

* Destination information
* Travel package details
* Number of days
* Places/spots to visit
* Package pricing
* Destination location
* Google Maps integration
* Booking option

## 🔐 Authentication

* User registration
* User login
* Logout
* Login-state management
* Protected booking routes
* Authentication state maintained using LocalStorage

> Authentication is currently implemented on the client side for this project and does not use Firebase Authentication or a remote authentication service.

## 📝 Booking

Users can enter:

* Name
* Email
* Phone number
* Travel date
* Number of adults
* Number of children

The booking amount is calculated dynamically based on the selected package and number of travelers.

## 💳 Payment

Wanderly includes a payment workflow supported by a Node.js/Express backend and Stripe.

The backend is responsible for handling payment-related requests so that sensitive Stripe credentials are not exposed directly in the Angular frontend.

> Payment functionality depends on the Stripe configuration provided through environment variables.

## 📋 Booking Information

Booking-related information is maintained locally in the browser for the current implementation.

LocalStorage is used to persist relevant application state across page refreshes.


## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile

The navigation includes a responsive hamburger menu for smaller screens.

---

# 📂 Project Structure

```text
wanderly/
│
├── src/
│   ├── app/
│   │   │
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   └── auth-guard.ts
│   │   │   │
│   │   │   └── services/
│   │   │       ├── auth.ts
│   │   │       ├── destination.ts
│   │   │       ├── payment.ts
│   │   │       └── ...
│   │   │
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── destinations/
│   │   │   ├── booking/
│   │   │   ├── bookings/
│   │   │   ├── payment/
│   │   │   ├── payment-success/
│   │   │   └── contact/
│   │   │
│   │   └── shared/
│   │       └── navbar/
│   │
│   ├── assets/
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

> `.env` should remain local and must not be committed to GitHub.

---

# 🔄 Application Architecture

```text
                    ┌─────────────────────┐
                    │   Angular Frontend  │
                    │                     │
                    │ Components          │
                    │ Services            │
                    │ Routing             │
                    │ Route Guards        │
                    └──────────┬──────────┘
                               │
                     HTTP Requests
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Express Backend   │
                    │                     │
                    │ Node.js             │
                    │ Express.js          │
                    │ CORS                │
                    │ dotenv              │
                    └──────────┬──────────┘
                               │
                               ▼
                         ┌──────────┐
                         │  Stripe  │
                         └──────────┘


        Local application data
                 │
                 ▼
        ┌──────────────────┐
        │ Browser          │
        │ LocalStorage     │
        └──────────────────┘
```

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Angular CLI
* Git

Check your versions:

```bash
node -v
npm -v
ng version
git --version
```

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Shivani2965/Wanderly.git
```

## 2. Navigate to the Project

```bash
cd Wanderly
```

## 3. Install Frontend Dependencies

```bash
npm install
```

---

# ⚙️ Backend Setup

Open a terminal in the project directory and navigate to the backend:

```bash
cd backend
```

Install the backend dependencies:

```bash
npm install
```

The backend uses:

* Express
* CORS
* dotenv
* Stripe

---

# 🔐 Environment Configuration

Create a `.env` file inside the `backend` directory.

Add the environment variables required by the backend, including the Stripe configuration used by `server.js`.

Example:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> Never commit your actual Stripe secret key or other sensitive credentials to GitHub.

The `.env` file is excluded using `.gitignore`.

---

# ▶️ Running the Application

## Start the Backend

From the `backend` directory:

```bash
npm start
```

The command runs:

```text
node server.js
```

## Start the Angular Frontend

Open a second terminal.

From the project root:

```bash
ng serve
```

The Angular application will normally be available at:

```text
http://localhost:4200
```

---

# 💾 Data Storage

The current version of Wanderly does not use a traditional database such as MongoDB, MySQL, or Firebase Firestore.

Application data is handled using local/static data and browser LocalStorage.

LocalStorage is currently used for information such as:

```text
wanderly_user
wanderly_logged_in
```

This approach allows the application to demonstrate authentication and booking functionality without requiring a persistent database server.

> For a production application, a secure backend database would be required instead of relying on browser LocalStorage for persistent application data.

---

# 🗺️ Google Maps Integration

Google Maps is integrated into the destination experience to provide location information for travel destinations.

This allows users to understand the geographical location of the destination they are viewing.

---

# 🔮 Future Improvements

Potential improvements for future versions include:

* Persistent backend database
* Secure server-side authentication
* User accounts
* Admin dashboard
* Persistent booking history
* More destinations and travel packages
* Advanced search and filtering
* User reviews and ratings
* Email booking confirmations
* Production-ready payment handling
* Improved Google Maps features
* Cloud-based image storage
* Production deployment

---

