import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, PaymentElement, Elements } from "@stripe/react-stripe-js";



export default function MembershipCheckout() {
    const [clientSecret, setClientSecret] = useState("");
    const stripePromise = loadStripe(process.env.STRIP_PUBLISH_KEY);

    useEffect(() => {
        // fetch("http://localhost:9090/create-payment-intent", {
        //   method: "POST",
        //   body: JSON.stringify({}),
        // }).then(async (result) => {
        //   var { clientSecret } = await result.json();
        //   setClientSecret(clientSecret);
        // });
        setClientSecret("pi_3NFwEmSAIDSoJ9VZ0rV2Q7A5_secret_53bZfqU9dyqbASvtqr8ChWIXS");
      }, []);

  return (
    <div style={{maxWidth: "500px", margin : "5rem"}}>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}



function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (paymentIntent?.status === "succeeded") {
        setMessage(paymentIntent.status);
    } else if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}