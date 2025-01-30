import React from 'react';
import Router from './Router/Router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Display/Layout/Layout';
import { CartProvider } from './Cart/Provider/CartProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App() {

  const stripePromise = loadStripe('your-public-key-here');

  return (
    <BrowserRouter>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <Layout>
            <Router />
          </Layout>
        </Elements>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
