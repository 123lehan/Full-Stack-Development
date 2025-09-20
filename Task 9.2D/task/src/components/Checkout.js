import React, { useState } from 'react';
import { Container, Header, Button, Message } from 'semantic-ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51S9FXxJrJpQdKXJHkx00UFyikjaQCcZUHIF6Ir1CruST0HtdZg3mKaxgxfFW5D7ZBLBZohoSEstQdTIzt1Yd7aSu008nnMa1JV');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!stripe || !elements) return;

    setLoading(true);

    // DEMO: simulate backend payment intent + confirmation.
    // Replace this whole block with a real fetch('/create-payment-intent') in production.
    await new Promise(res => setTimeout(res, 1200));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <Message positive>
        <Message.Header>Payment successful (demo)</Message.Header>
        <p>Your Premium plan is activated. You can now use banners, themes, content controls and analytics.</p>
      </Message>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{padding: '14px 12px', border: '1px solid #dfe3e8', borderRadius: 8, marginBottom: 14}}>
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      {error && <Message negative content={error} />}
      <Button type="submit" color="green" loading={loading} disabled={!stripe || loading}>
        Pay $9
      </Button>
    </form>
  );
}

export default function Checkout() {
  return (
    <Container className="page">
      <Header as="h1">Checkout</Header>
      <p>Enter your test card details (e.g., <code>4242 4242 4242 4242</code>, any future date & CVC) to simulate a successful payment.</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
}
