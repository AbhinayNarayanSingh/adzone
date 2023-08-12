import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, PaymentElement, Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { showToastAct } from "@/store/slice/toastSlice";
import { SUCCESS_TOAST_ICON } from "@/Environment";


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

  const successMsg = {
    LISTING : {
      heading : "Congratulations! Your paid listing payment has been successfully processed.",
      para : "Your listing will be live and visible to users within the next 30 seconds. If you have any questions or need further assistance, feel free to contact our support team.",
      btn : "Happy selling!",
      navigateTo : ""
    },
    PROMOTION : {
      heading : "Congratulations! Your listing promotion payment has been successfully processed.",
      para : "Thank you for choosing our platform to promote your listing. If you have any questions or need assistance, feel free to contact our support team.",
      btn : "Happy selling!",
      navigateTo : ""
    },
    LISTING_AND_PROMOTION : {
      heading : "Congratulations! Your paid listing and promotion payment has been successfully processed.",
      para : "Thank you for choosing our platform to promote and list your listing, it will be live and visible to users within the next 30 seconds. If you have any questions or need assistance, feel free to contact our support team.",
      btn : "Happy selling!",
      navigateTo : ""
    },
    MEMBERSHIP : {
      heading : "Congratulations! Your membership payment has been successfully processed.",
      para : "We're thrilled to have you as part of our community and look forward to providing you with an exceptional experience. You now have access to all the premium features and benefits.",
      btn : "Start Exploring Now",
      navigateTo : ""
    },
    MEMBERSHIP_RENEWAL : {
      heading : "Congratulations! Your membership renewal payment has been successfully processed.",
      para : "We appreciate your continued support and loyalty to our community. By renewing your membership, you can continue to enjoy all the exclusive benefits and features.",
      btn : "Start Exploring Now",
      navigateTo : ""
    },
  }

  if (router.query.checkoutFor == "success") {
    let data = successMsg[router?.query?.type || "LISTING"]
    return (
      <div className="checkout-outer-container">

        <div className="checkout-success-container">
          <img src={SUCCESS_TOAST_ICON} alt="SUCCESS_TOAST_ICON" className="success-icon"/>
          <h1>{data["heading"]}</h1>
          <p>{data["para"]}</p>
          <button className="btn mt-1">{data["btn"]}</button>
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
            <CheckoutForm type={type}/>
          </Elements>
        )}
    </div>
    </div>
  );
}



function CheckoutForm({type}) {
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
        return_url: `${window.location.origin}/checkout/success?type=${type}`,
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