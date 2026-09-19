const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4242;
const FRONTEND_URL =
  process.env.FRONTEND_URL || 'http://localhost:4200';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: FRONTEND_URL
  })
);

app.use(express.json());


// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'Wanderly Stripe backend is running'
  });
});


// Create Stripe Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const {
      destinationName,
      totalAmount,
      bookingId
    } = req.body;

    if (!destinationName || !totalAmount) {
      return res.status(400).json({
        message: 'Missing booking information'
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

      line_items: [
        {
          price_data: {
            currency: 'inr',

            product_data: {
              name: `Wanderly - ${destinationName}`
            },

            unit_amount: Math.round(totalAmount * 100)
          },

          quantity: 1
        }
      ],

      mode: 'payment',

      // Redirect to deployed Angular frontend after successful payment
      success_url:
        `${FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&booking_id=${bookingId}`,

      // Redirect to deployed Angular frontend if payment is cancelled
      cancel_url:
        `${FRONTEND_URL}/payment?cancelled=true`,

      metadata: {
        bookingId: String(bookingId),
        destinationName
      }
    });

    res.json({
      url: session.url
    });

  } catch (error) {
    console.error('Stripe error:', error);

    res.status(500).json({
      message: 'Unable to create Stripe checkout session'
    });
  }
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Wanderly backend running on port ${PORT}`);
});