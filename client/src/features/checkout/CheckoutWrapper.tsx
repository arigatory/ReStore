import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51MTVr6BrFzsPxqJgGHuMvcbEa4FriwUdvfErMVlwa5kbY66p44QaZ1apK3itJpQEIIphuyIDplLc4eZBxE0SdOfV00ujo2Fuar');

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  )
}
