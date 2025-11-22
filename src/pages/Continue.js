import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Header2 from "./Header2";
import Footer from "./Footer";

const ContinuePay = ({ shippingInfo }) => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [payment, setPayment] = useState("card"); // default selected payment
  const [loading, setLoading] = useState(false);

const getTotalPrice = () => {
  return cartItems.reduce(
    (total, item) =>
      total + ((item.product.discountPrice ?? item.product.price) * item.quantity),
    0
  );
};

  // Handle Stripe / Klarna payments
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

  // Placeholder for PayPal integration
  const handlePayPalPayment = () => {
    alert("PayPal integration goes here");
  };

  // Cash on Delivery
  const handleCOD = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/db/create-order`, {
        cartItems,
        paymentMethod: "cod",
        shippingInfo,
      });
      clearCart();
      navigate("/order-success", { state: { order: res.data.order } });
    } catch (err) {
      console.error("COD order failed", err);
    }
  };

  return (
    <div className="wt-bg-white">
      <Header2 />

      <main id="content">
        <div id="checkout-sheet-container">
          <div id="checkout-sheet">
            <div>
              <div className="wt-width-full checkout-sheet-full-height-container">
                <div className="wt-display-flex-xs checkout-sheet-navigation-container wt-width-full checkout-sheet-full-page-width">
                  <div className="wt-width-full wt-flex-shrink-xs-0">
                    <div>
                      <div>
                        <div className="wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3 wt-p-md-5 wt-pt-xs-4 wt-pt-xs-0">
                          
                          {/* HEADER */}
                          <div>
                            <div className="checkout-sheet-panel-header wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-mb-xs-2">
                              <h1 className="checkout-sheet-panel-header-text wt-text-title-large wt-text-title-small wt-sem-text-secondary">
                                <div className="wt-display-flex-xs wt-align-items-center">
                                  <button className="wt-text-link">
                                    <span className="wt-icon--logo wt-icon--base-md wt-icon--smaller-xs wt-fill-orange etsy-icon"></span>
                                  </button>
                                  <div className="wt-ml-xs-1 wt-display-flex-xs">
                                    <span className="wt-icon--smallest-xs wt-align-self-center etsy-icon"></span>
                                    <div style={{ marginLeft: "2px" }}>Secure checkout</div>
                                  </div>
                                </div>
                              </h1>
                            </div>

                            {/* SUBWAY NAVIGATION */}
                            <ol className="wt-subway">
                              <li className="wt-subway__stop">
                                <span className="wt-subway__stop__link">
                                  <div className="wt-subway__stop__dot"></div>
                                  <span className="wt-subway__stop__title">Shipping</span>
                                </span>
                              </li>
                              <li aria-current="step" className="wt-subway__stop wt-subway__stop--active">
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

                            <h1 className="checkout-sheet-panel-header-text wt-text-title-large wt-mt-xs-3 wt-display-flex-xs wt-align-items-center wt-justify-content-center">
                              Select payment method
                            </h1>
                          </div>

                          {/* PAYMENT FORM */}
                          <div className="wt-mt-xs-4">
                            <form className="wt-form checkout-sheet-payment-form" onSubmit={(e) => e.preventDefault()}>
                              
                              {/* PAYMENT METHOD OPTIONS */}
                              <div className="wt-form__field wt-mb-xs-4">
                                <label className="wt-label wt-label--small">Payment Method</label>
                                <select
                                  className="wt-input wt-input--small"
                                  value={payment}
                                  onChange={(e) => setPayment(e.target.value)}
                                >
                                  <option value="card">Credit / Debit Card</option>
                                  <option value="klarna">Klarna</option>
                                  <option value="paypal">PayPal</option>
                                  <option value="cod">Cash on Delivery</option>
                                </select>
                              </div>

                              {/* Conditional Payment Inputs */}
                              {(payment === "card" || payment === "klarna") && (
                                <>
                                  <div className="wt-form__field wt-mb-xs-3">
                                    <label className="wt-label wt-label--small">Card Number</label>
                                    <input type="text" className="wt-input wt-input--small" placeholder="1234 5678 9012 3456" />
                                  </div>

                                  <div className="wt-display-flex-xs wt-mb-xs-3">
                                    <div className="wt-form__field wt-flex-xs-1 wt-mr-xs-2">
                                      <label className="wt-label wt-label--small">Expiry Date</label>
                                      <input type="text" className="wt-input wt-input--small" placeholder="MM/YY" />
                                    </div>
                                    <div className="wt-form__field wt-flex-xs-1">
                                      <label className="wt-label wt-label--small">CVV</label>
                                      <input type="text" className="wt-input wt-input--small" placeholder="123" />
                                    </div>
                                  </div>

                                  <div className="wt-form__field wt-mb-xs-4">
                                    <label className="wt-label wt-label--small">Name on Card</label>
                                    <input type="text" className="wt-input wt-input--small" placeholder="John Doe" />
                                  </div>
                                </>
                              )}

                              {/* SUBMIT */}
                           <div className="wt-display-flex-xs wt-justify-content-space-between wt-mt-xs-4">
  <button
    type="button"
    className="wt-btn wt-btn--secondary"
    onClick={() => navigate("/checkout")}
  >
    Back
  </button>

  {payment === "card" || payment === "klarna" ? (
    <button
      type="button"
      onClick={handleStripePayment}
      className="wt-btn wt-btn--primary"
      disabled={loading}
    >
      {loading ? "Processing..." : `Pay ₦${getTotalPrice().toLocaleString()}`}
    </button>
  ) : payment === "paypal" ? (
    <button
      type="button"
      onClick={handlePayPalPayment}
      className="wt-btn wt-btn--primary"
    >
      Pay with PayPal
    </button>
  ) : (
    <button
      type="button"
      onClick={handleCOD}
      className="wt-btn wt-btn--primary"
    >
      Confirm Order (Cash on Delivery)
    </button>
  )}
</div>

                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hidden fallback form */}
                <form
                  id="checkout-sheet-fallback-checkout-start-form"
                  className="wt-display-none"
                  method="post"
                  action=""
                >
                  <input type="hidden" name="_nnc" value="..." />
                  <input type="hidden" name="force_flex_pay" value="1" />
                  <input type="hidden" name="payment_method" value="cc" />
                  <input type="hidden" name="bypass_fullpage_checkout_sheet" value="true" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContinuePay;
