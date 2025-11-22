import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Header2 from "./Header2";
import Footer from "./Footer";

const ContinuePay = ({ shippingInfo }) => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [payment, setPayment] = useState("card");
  const [loading, setLoading] = useState(false);

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

  const handlePayPalPayment = () => {
    alert("PayPal integration goes here");
  };

  const handleCOD = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/db/create-order`,
        {
          cartItems,
          paymentMethod: "cod",
          shippingInfo,
        }
      );
      clearCart();
      navigate("/order-success", { state: { order: res.data.order } });
    } catch (err) {
      console.error("COD order failed", err);
    }
  };

  return (
    <div className="wt-bg-white min-h-screen flex flex-col">
      <Header2 />

      <main className="flex-grow flex justify-center items-start pt-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-gray-50 border rounded-lg p-6 sm:p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Select Payment Method
          </h2>

          {/* Payment Options */}
          <div className="space-y-4">
            {/* Credit / Debit Card */}
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="card"
                className="mr-3"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              <span className="font-medium">Credit / Debit Card (Pay Now)</span>
            </label>

            {/* Klarna */}
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="klarna"
                className="mr-3"
                checked={payment === "klarna"}
                onChange={() => setPayment("klarna")}
              />
              <span className="font-medium">Klarna Pay Later (Pay in 4)</span>
            </label>

            {/* PayPal */}
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="paypal"
                className="mr-3"
                checked={payment === "paypal"}
                onChange={() => setPayment("paypal")}
              />
              <span className="font-medium">PayPal</span>
            </label>

            {/* Cash on Delivery */}
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="cod"
                className="mr-3"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              <span className="font-medium">Cash on Delivery</span>
            </label>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            {(payment === "card" || payment === "klarna") && (
              <button
                type="button"
                onClick={handleStripePayment}
                className="w-full py-2 rounded-lg text-white font-semibold transition duration-150"
                style={{ backgroundColor: "#8b023a" }}
                disabled={loading}
              >
                {loading ? "Processing..." : `Pay $${getTotalPrice().toFixed(2)}`}
              </button>
            )}

            {payment === "paypal" && (
              <button
                type="button"
                onClick={handlePayPalPayment}
                className="w-full py-2 rounded-lg text-white font-semibold mt-4 transition duration-150"
                style={{ backgroundColor: "#0070ba" }}
              >
                Pay with PayPal
              </button>
            )}

            {payment === "cod" && (
              <div className="mt-4 p-4 border rounded-lg bg-white text-gray-700">
                You have selected Cash on Delivery. Please prepare the payment when
                your order arrives.
                <button
                  type="button"
                  onClick={handleCOD}
                  className="mt-3 w-full py-2 rounded-lg text-white font-semibold transition duration-150"
                  style={{ backgroundColor: "#8b023a" }}
                >
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContinuePay;
