import React from "react";

import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price }) => {


    const priceForStripe = price * 100;

    const publishableKey = "pk_test_51HkMFBFVxOKBAwHq0PLXgrEbVIo4ms7plO0OC49GKHc5ZfEzjMHOGGopjhP8HvY8JjBLEo2nPCxKG0PB5YC74QHz00T1SvzDwc";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crwn Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;