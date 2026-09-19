# 🌍 Wanderly — Tourism Information & Online Booking System

Wanderly is a responsive tourism and online booking web application built with Angular. It allows users to explore destinations, view detailed travel information, select packages, complete a booking flow, and proceed to payment and booking confirmation.

The project focuses on building a complete travel-booking experience using Angular, TypeScript, Express.js, browser-based LocalStorage, and Stripe integration.

---

## 📌 Problem Statement

Planning a trip often requires users to switch between different platforms to discover destinations, compare travel information, and manage bookings.

Wanderly aims to provide a centralized platform where users can:

* Explore tourist destinations
* View destination details
* Browse travel packages
* Enter booking information
* Manage their login state
* Proceed through a payment workflow
* View booking confirmation

---

## 💡 Solution

Wanderly combines destination discovery and travel booking into a single web application.

### User Flow

```text
Home
  ↓
Destinations
  ↓
Destination Details
  ↓
Book Now
  ↓
Login / Register
  ↓
Booking Form
  ↓
Payment
  ↓
Booking Confirmation
```

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

## 🔔 Toast Notifications

The application provides user feedback for actions such as:

* Login
* Registration
* Logout
* Booking actions
* Validation errors

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile

The navigation includes a responsive hamburger menu for smaller screens.

---

# 🧠 Key Technical Concepts

## Angular Component Architecture

The application is organized into feature-based pages, reusable components, services, and core functionality.

This separation makes the application easier to maintain and extend.

## Angular Routing

Angular Router is used for navigation between major application pages.

Example routes include:

```text
/
/destinations
/destinations/:id
/booking
/payment
/payment-success
/bookings
/contact
```

## Route Guards

Protected routes use an authentication guard to prevent unauthenticated users from directly accessing booking-related functionality.

### Booking Authentication Flow

```text
User clicks "Book Now"
        ↓
Authentication Guard
        ↓
Is user logged in?
      /   \
    Yes    No
     ↓      ↓
 Booking  Login/Register
              ↓
           Booking
```

## RxJS State Management

A `BehaviorSubject` is used to maintain and broadcast authentication state.

This allows components such as the navbar to react when the user logs in or logs out.

## LocalStorage

Browser LocalStorage is used for client-side persistence.

Examples of application state include:

```text
wanderly_user
wanderly_logged_in
```

## Debounced Filtering

Destination filtering uses debouncing to avoid unnecessarily processing every individual keystroke.

## Dynamic Booking Calculation

The total booking amount is calculated based on the selected package and number of travelers.

## Express Backend

The backend uses Express.js to provide server-side functionality and handle payment-related requests.

CORS is configured to allow communication between the Angular frontend and backend.

## Environment Variables

`dotenv` is used to load sensitive configuration values from environment variables.

Sensitive values such as Stripe secret keys should never be committed to GitHub.

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

# 🧩 Challenges Faced & Solutions

## 1. Authentication State Management

The navbar needed to immediately reflect changes when a user logged in or logged out.

**Solution:**
Used an RxJS `BehaviorSubject` inside the authentication service to maintain and broadcast the current authentication state.

## 2. Protected Booking Routes

Users should not be able to directly access protected booking functionality without authentication.

**Solution:**
Implemented an Angular route guard that checks the current authentication state before allowing navigation.

## 3. Persistence After Page Refresh

Component state is lost when the browser is refreshed.

**Solution:**
Used browser LocalStorage to persist relevant user and booking-related state.

## 4. Destination Filtering

Filtering on every keystroke can cause unnecessary processing.

**Solution:**
Implemented debouncing to delay filtering until the user pauses input.

## 5. Responsive Navigation

The desktop navigation needed to remain usable on smaller screens.

**Solution:**
Implemented a responsive hamburger menu for mobile layouts.

## 6. Frontend and Backend Communication

Payment-related functionality requires server-side processing instead of exposing sensitive credentials in the browser.

**Solution:**
Added an Express.js backend and used environment variables for sensitive Stripe configuration.

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

# 📸 Screenshots

Screenshots of the major application pages can be added here.

Recommended screenshots:

```text
screenshots/
├── home.png
├── destinations.png
├── destination-details.png
├── login.png
├── booking.png
├── payment.png
├── booking-success.png
└── mobile-view.png
```

Example:

```markdown
## Screenshots

### Home Page

![Home Page](screenshots/home.png)

### Destinations

![Destinations](screenshots/destinations.png)

### Destination Details

![Destination Details](screenshots/destination-details.png)

### Booking

![Booking](screenshots/booking.png)

### Payment

![Payment](screenshots/payment.png)

### Booking Success

![Booking Success](screenshots/booking-success.png)
```

---

# 🎯 Project Highlights

* Angular-based tourism application
* Component-based architecture
* Angular routing
* Protected routes using route guards
* RxJS `BehaviorSubject` for authentication state
* LocalStorage-based client-side persistence
* Destination filtering with debounce
* Dynamic booking calculations
* Express.js backend
* Stripe payment integration
* Google Maps integration
* Responsive design
* Mobile navigation
* Toast notifications

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

* Angular application architecture
* TypeScript
* Component-based development
* Angular routing
* Route guards
* RxJS
* Service-based architecture
* LocalStorage
* Form handling and validation
* Responsive web development
* Express.js backend development
* Frontend-backend communication
* Stripe integration
* Environment variable management
* Git and GitHub

---

# 🔮 Future Architecture

A future production version of Wanderly could evolve into:

```text
Angular Frontend
       │
       ▼
Express.js REST API
       │
       ├── Authentication
       ├── Booking Management
       ├── Payment Processing
       │
       ▼
Persistent Database
       │
       └── Users
           Destinations
           Bookings
           Packages
```

This would allow the application to support multiple users and persistent booking data.

---

# 👩‍💻 Author

**Shivani Devanekar**

B.E. Information Technology
MGM College of Engineering & Technology

GitHub:
https://github.com/Shivani2965

---

# 📄 License

This project was developed for educational and demonstration purposes.
