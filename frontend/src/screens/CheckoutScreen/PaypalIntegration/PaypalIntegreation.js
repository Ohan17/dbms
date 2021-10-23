import { PayPalButton } from "react-paypal-button-v2";

const PaypalIntegreation = (props) => {
  return (
    <PayPalButton
      amount={1}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        // OPTIONAL: Call your server to save the transaction
        return () => {
          console.log("Transaction complete");
        };
      }}
      options={{
        clientId:
          "AeBf1_0vhtmz-6gYCXgpxtEs6vPHofX9B2ZErnTfNlwo0d1gHYD24YfhLswLqySqWmMPFZ_7HfcL8lqr",
        currency: "USD",
      }}
      shippingPreference= "NO_SHIPPING"

    />
  );
};

export default PaypalIntegreation;
