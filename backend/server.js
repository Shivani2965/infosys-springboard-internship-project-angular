const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Wanderly Stripe backend is running'
  });
});

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

      success_url:
        `http://localhost:4200/payment-success?session_id={CHECKOUT_SESSION_ID}&booking_id=${bookingId}`,

      cancel_url:
        `http://localhost:4200/payment?cancelled=true`,

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

app.listen(process.env.PORT || 4242, () => {
  console.log(
    `Wanderly backend running on http://localhost:${process.env.PORT || 4242}`
  );
});