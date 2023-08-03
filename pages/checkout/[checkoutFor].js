import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, PaymentElement, Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { showToastAct } from "@/store/slice/toastSlice";


const stripePromise = loadStripe(process.env.STRIP_PUBLISH_KEY);

export default function MembershipCheckout() {
  const router = useRouter()

  const {checkout : { _id, clientSecret, paymentIntentID, totalCost, type, narration,
  }} = useSelector(state => state)

  useEffect(() => {
    if (router.query.checkoutFor == "success" && router?.query?.payment_intent) {
      alert(router?.query?.payment_intent)
      

    }
  }, [])

  if (router.query.checkoutFor == "success") {
    return (
      <div className="checkout-outer-container">
        <div className="checkout-container">
          <h1>Payment Successful</h1>
        </div>
      </div>
    )
  }

    
  return (
    <div className="checkout-outer-container">
    <div className="checkout-container">
      <div className="mb-3">
        <h3>{type}</h3>
        <h1>{"CAD"} {totalCost}</h1>
        <h2>{narration}</h2>
        {/* <h2>Paid Membership - Visibility for 3 Month</h2> */}
      </div>

        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
    </div>
    </div>
  );
}



function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch()

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/secure`,
      },
    });
    // debugger
    console.log('+++ error, paymentIntent', error, paymentIntent);

    // charge : "ch_3Nb53gSAIDSoJ9VZ1djcmQNb"
    // code : "card_declined"
    // decline_code: "generic_decline"
    // doc_url: "https://stripe.com/docs/error-codes/card-declined"
    // message: "Your card has been declined."
    if (error?.code) {
      dispatch(showToastAct({message : error?.message + " decline_code " + error?.decline_code}))
    }
    debugger
    
    // if (paymentIntent?.status === "succeeded") {
    //     setMessage(paymentIntent.status);
    // } else if (error?.type === "card_error" || error?.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occured.");
    // }
    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit" className="btn mt-2">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>

    </form>
  );
}