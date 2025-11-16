import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";

const OrderDetails = () => {
  return (
    <div className="wt-bg-white">
      <Header2 />

      <main id="content">
        <div className="wt-p-xs-4 wt-p-md-6 wt-max-width-5xl wt-margin-auto">

          {/* PAGE TITLE */}
          <h1 className="wt-text-title-large wt-text-center wt-mb-xs-4">
            Order #12345
          </h1>

          {/* STATUS */}
          <div className="wt-display-flex-xs wt-justify-content-center wt-mb-xs-4">
            <span className="wt-badge wt-badge--success">Successful</span>
          </div>

          {/* ORDER SUMMARY */}
          <div className="wt-card wt-p-xs-4 wt-mb-xs-4">
            <h2 className="wt-text-title-small wt-mb-xs-2">Order Summary</h2>

            <p className="wt-text-body">Order Date: Jan 12, 2025</p>
            <p className="wt-text-body">Total Amount: ₦14,500</p>
            <p className="wt-text-body">Payment Method: Card</p>
          </div>

          {/* ITEMS */}
          <div className="wt-card wt-p-xs-4 wt-mb-xs-4">
            <h2 className="wt-text-title-small wt-mb-xs-2">Items Purchased</h2>

            <div className="wt-border-b wt-pb-xs-3 wt-mb-xs-3">
              <div className="wt-display-flex-xs wt-justify-content-space-between">
                <span>Blue Sneakers</span>
                <span>₦8,000</span>
              </div>
            </div>

            <div className="wt-display-flex-xs wt-justify-content-space-between">
              <span>Wrist Watch</span>
              <span>₦6,500</span>
            </div>
          </div>

          {/* SHIPPING DETAILS */}
          <div className="wt-card wt-p-xs-4 wt-mb-xs-4">
            <h2 className="wt-text-title-small wt-mb-xs-2">Shipping Details</h2>

            <p className="wt-text-body">John Doe</p>
            <p className="wt-text-body">14, Admiralty Way, Lekki Phase 1</p>
            <p className="wt-text-body">Lagos, Nigeria</p>
          </div>

          {/* PAYMENT DETAILS */}
          <div className="wt-card wt-p-xs-4">
            <h2 className="wt-text-title-small wt-mb-xs-2">Payment Details</h2>

            <p className="wt-text-body">Card: **** **** **** 2345</p>
            <p className="wt-text-body">Transaction Ref: TXN123ASD9982</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderDetails;
