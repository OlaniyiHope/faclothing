import React, { useState } from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";




const ContinueToPay = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // const subtotal = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

const subtotal = cartItems.reduce(
  (sum, item) =>
    sum +
    ((item.product.discountPrice ?? item.product.price) * item.quantity),
  0
);

  const [payment, setPayment] = useState("card");
  const [loading, setLoading] = useState(false);
const [delivery, setDelivery] = useState("usps");
const [shippingInfo, setShippingInfo] = useState({
  method: "USPS International",
  price: 8689.88,
  deliveryTime: "4 to 9 business days",
});

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        ((item.product.discountPrice ?? item.product.price) * item.quantity),
      0
    );
  };

  const handleStripePayment = async () => {
    try {
      setLoading(true);
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/db/create-checkout-session`,
        {
          cartItems,
          paymentMethod: payment,
          shippingInfo,
        }
      );

      if (res.data.id) {
        await stripe.redirectToCheckout({ sessionId: res.data.id });
      } else {
        alert("Unable to start payment session");
      }
    } catch (err) {
      console.error("Stripe payment error:", err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };



  // const handleCOD = async () => {
  //   try {
  //     const res = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/api/db/create-order`,
  //       {
  //         cartItems,
  //         paymentMethod: "cod",
  //         shippingInfo,
  //       }
  //     );
  //     clearCart();
  //     navigate("/order-success", { state: { order: res.data.order } });
  //   } catch (err) {
  //     console.error("COD order failed", err);
  //   }
  // };

  // You can change shipping if needed
const total = subtotal + shippingInfo.price;

  const paymentMethods = [
    {
      id: "card",
      title: "Credit / Debit Card",
   
    },
    {
      id: "klarna",
      title: "Klarna",
     
    },
    {
      id: "paypal",
      title: "Pay with PayPal",

    },
    {
      id: "cod",
      title: "Cash on Delivery",
 
    },
  ];
// Inside your component
const PayPalPayment = () => {
  return (
    <div className="wt-mt-4">
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toFixed(2), // total amount including shipping
                  currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          console.log("PayPal transaction completed:", details);

          // You can now create an order in your backend
          try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/db/create-order`, {
              cartItems,
              paymentMethod: "paypal",
              shippingInfo,
              transactionDetails: details,
            });
            toast.success("Order completed!");
            navigate("/order-success", { state: { order: res.data.order } });
          } catch (err) {
            console.error("PayPal order creation failed:", err);
            toast.error("Failed to create order");
          }
        }}
        onError={(err) => {
          console.error("PayPal error:", err);
          toast.error("PayPal payment failed");
        }}
      />
    </div>
  );
};
  return (
    <div className="wt-bg-white">
      <Header2 />
<ToastContainer />
      <main id="content">
        <div className="wt-width-full">
          <div className="checkout-sheet-navigation-container wt-width-full checkout-sheet-full-page-width">
            <div className="wt-width-full wt-flex-shrink-xs-0">
              <div className="wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3 wt-p-md-5 wt-pt-xs-4">

                {/* HEADER */}
                <div className="checkout-sheet-panel-header wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-mb-xs-2">
                  <h1 className="checkout-sheet-panel-header-text wt-text-title-large wt-sem-text-secondary">
                    <div className="wt-display-flex-xs wt-align-items-center">
                      <button className="wt-text-link">
                        <span className="wt-icon--logo wt-icon--base-md wt-fill-orange etsy-icon"></span>
                      </button>
                      <div className="wt-ml-xs-1 wt-display-flex-xs">
                        <span className="wt-icon--smallest-xs wt-align-self-center etsy-icon"></span>
                        <div style={{ marginLeft: "2px" }}>Secure checkout</div>
                      </div>
                    </div>
                  </h1>
                </div>

                {/* SUBWAY NAV */}
                <ol className="wt-subway">
                  <li className="wt-subway__stop">
                    <span className="wt-subway__stop__link">
                      <div className="wt-subway__stop__dot"></div>
                      <span className="wt-subway__stop__title">Shipping</span>
                    </span>
                  </li>

                  <li className="wt-subway__stop wt-subway__stop--active">
                    <span className="wt-subway__stop__link">
                      <div className="wt-subway__stop__dot"></div>
                      <span className="wt-subway__stop__title">Payment</span>
                    </span>
                  </li>

                  <li className="wt-subway__stop">
                    <span className="wt-subway__stop__link">
                      <div className="wt-subway__stop__dot"></div>
                      <span className="wt-subway__stop__title">Review</span>
                    </span>
                  </li>
                </ol>

                {/* TITLE */}
                <h1 className="checkout-sheet-panel-header-text wt-text-title-large wt-mt-xs-3 wt-display-flex-xs wt-align-items-center wt-justify-content-center">
                  Payment Method
                </h1>

              {/* PAYMENT BUTTONS */}
<div className="wt-mt-xs-4">
  <div>
    {paymentMethods.map((m) => (
      <button
        key={m.id}
        type="button"
        onClick={() => setPayment(m.id)}
        className={`wt-btn wt-width-full wt-py-3 wt-font-semibold wt-mb-xs-3 ${
          payment === m.id ? "wt-btn--primary" : "wt-btn--secondary"
        }`}
        style={{ display: "block" }}
      >
        <div className="wt-flex-col wt-align-items-center">
          <span>{m.title}</span>
          {m.subtitle && (
            <span className="wt-text-small wt-mt-1">{m.subtitle}</span>
          )}
        </div>
      </button>
    ))}
  </div>
</div>
{/* SHIPPING METHOD SECTION */}
<div className="wt-mt-xs-5 wt-p-xs-4 wt-border wt-rounded bg-gray-50">
  <h3 className="wt-text-title-small wt-mb-xs-3">Shipping Method</h3>

  <div className="wt-grid wt-gap-xs-2">
    
    {/* USPS */}
    <label className="wt-display-flex-xs wt-justify-content-space-between wt-border wt-rounded wt-p-xs-3 wt-cursor-pointer">
      <input
        type="radio"
        name="shippingMethod"
        value="usps"
        checked={delivery === "usps"}
        onChange={() => {
          setDelivery("usps");
          setShippingInfo({
            method: "USPS International",
            price: 8689.88,
            deliveryTime: "4 to 9 business days",
          });
        }}
      />
      <div className="wt-flex-grow-xs wt-ml-xs-2">
        <div className="wt-font-semibold">USPS International</div>
        <div className="wt-text-small">${8689.88.toLocaleString()}</div>
      </div>
      <span className="wt-text-small">4 to 9 business days</span>
    </label>

    {/* UPS */}
    <label className="wt-display-flex-xs wt-justify-content-space-between wt-border wt-rounded wt-p-xs-3 wt-cursor-pointer">
      <input
        type="radio"
        name="shippingMethod"
        value="ups"
        checked={delivery === "ups"}
        onChange={() => {
          setDelivery("ups");
          setShippingInfo({
            method: "UPS Worldwide Expedited®",
            price: 9396.66,
            deliveryTime: "4 to 9 business days",
          });
        }}
      />
      <div className="wt-flex-grow-xs wt-ml-xs-2">
        <div className="wt-font-semibold">UPS Worldwide Expedited®</div>
        <div className="wt-text-small">${9396.66.toLocaleString()}</div>
      </div>
      <span className="wt-text-small">4 to 9 business days</span>
    </label>

    {/* DHL */}
    <label className="wt-display-flex-xs wt-justify-content-space-between wt-border wt-rounded wt-p-xs-3 wt-cursor-pointer">
      <input
        type="radio"
        name="shippingMethod"
        value="dhl"
        checked={delivery === "dhl"}
        onChange={() => {
          setDelivery("dhl");
          setShippingInfo({
            method: "DHL Express Worldwide",
            price: 13417.18,
            deliveryTime: "4 to 5 business days",
          });
        }}
      />
      <div className="wt-flex-grow-xs wt-ml-xs-2">
        <div className="wt-font-semibold">DHL Express Worldwide</div>
        <div className="wt-text-small">${13417.18.toLocaleString()}</div>
      </div>
      <span className="wt-text-small">4 to 5 business days</span>
    </label>

  </div>
</div>

            {/* ACTION BUTTONS */}
<div className="wt-mt-xs-5 wt-display-flex-xs wt-justify-content-space-between">
  <button
    className="wt-btn wt-btn--secondary"
    onClick={() => navigate("/checkout")}
  >
    Back
  </button>

  {/* <button
    type="button"
    disabled={!payment}
    onClick={() => {
      if (payment === "card" || payment === "klarna") {
        handleStripePayment();
      } else if (payment === "paypal") {
        handlePayPalPayment();
      }
    }}
    className="wt-btn wt-btn--primary"
  >
    Pay ${total.toFixed(2)}
  </button> */}
  <div className="wt-mt-xs-5 wt-display-flex-xs wt-justify-content-space-between">
  <button
    className="wt-btn wt-btn--secondary"
    onClick={() => navigate("/checkout")}
  >
    Back
  </button>

  <div style={{ flex: 1, marginLeft: "10px" }}>
    {payment === "paypal" ? (
      // Render PayPal buttons inline
      <PayPalPayment />
    ) : (
      // Stripe / Klarna
      <button
        type="button"
        disabled={!payment}
        onClick={handleStripePayment}
        className="wt-btn wt-btn--primary wt-width-full"
      >
        Pay ${total.toFixed(2)}
      </button>
    )}
  </div>
</div>

</div>


              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContinueToPay;
