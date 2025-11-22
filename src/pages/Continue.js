import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ContinueToPay = ({ payment, setPayment }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // You can change shipping if needed
  const shipping = 15;

  const total = subtotal + shipping;

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

  return (
    <div className="wt-bg-white">
      <Header2 />

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

                {/* ACTION BUTTONS */}
                <div className="wt-display-flex-xs wt-justify-content-space-between wt-mt-xs-5">
                  <button
                    className="wt-btn wt-btn--secondary"
                    onClick={() => navigate("/checkout")}
                  >
                    Back
                  </button>

                  <button
                    className="wt-btn wt-btn--primary"
                    onClick={() => navigate("/review-order")}
                  >
                    Continue
                  </button>
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
