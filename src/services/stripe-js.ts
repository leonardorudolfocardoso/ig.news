import { loadStripe } from '@stripe/stripe-js';

export async function getStripe () {
  const stripeJs = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return stripeJs;
}