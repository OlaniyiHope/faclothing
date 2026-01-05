// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,

//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_YOUR_PUBLIC_KEY_HERE");

ReactDOM.render(
  <BrowserRouter>
    <DarkModeContextProvider>
        <Elements stripe={stripePromise}>

    <PayPalScriptProvider
      options={{
        "client-id": "AZh3e_yP_qUSCnISng7Y_rgeDHI2fBKlkt7VNR_iceaNJgx9jWYSX5qIn_FaHCh-Lt9NgAhNNUTmKqVX",
        currency: "USD", // optional
      }}
    >
  <App />

</PayPalScriptProvider>
    
        </Elements>

    </DarkModeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
