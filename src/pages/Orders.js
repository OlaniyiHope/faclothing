import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";

const Orders = () => {
  return (
    <div className="wt-bg-white">
      <Header2 />

      <main id="content">
        <div className="wt-p-xs-4 wt-p-md-6">

          {/* PAGE TITLE */}
          <h1 className="wt-text-title-large wt-text-center wt-mb-xs-4">
            Your Orders
          </h1>

          {/* FILTER BUTTONS */}
          <div className="wt-display-flex-xs wt-justify-content-center wt-mb-xs-4">
            <button className="wt-btn wt-btn--secondary wt-mr-xs-2">All</button>
            <button className="wt-btn wt-btn--secondary wt-mr-xs-2">Successful</button>
            <button className="wt-btn wt-btn--secondary wt-mr-xs-2">Pending</button>
            <button className="wt-btn wt-btn--secondary">Failed</button>
          </div>

          {/* FULL WIDTH TABLE */}
          <div
            className="wt-card wt-p-xs-4"
            style={{ width: "100%", overflowX: "auto" }}
          >
            <table className="wt-table wt-width-full" style={{ width: "100%" }}>
              <thead>
                <tr className="wt-text-title-small">
                  <th className="wt-p-xs-3 wt-border-b">Order ID</th>
                  <th className="wt-p-xs-3 wt-border-b">Date</th>
                  <th className="wt-p-xs-3 wt-border-b">Amount</th>
                  <th className="wt-p-xs-3 wt-border-b">Status</th>
                  <th className="wt-p-xs-3 wt-border-b wt-text-right">Action</th>
                </tr>
              </thead>

              <tbody>

                {/* SUCCESSFUL */}
                <tr>
                  <td className="wt-p-xs-3">#12345</td>
                  <td className="wt-p-xs-3">Jan 12, 2025</td>
                  <td className="wt-p-xs-3">₦14,500</td>
                  <td className="wt-p-xs-3">
                    <span className="wt-badge wt-badge--success">Successful</span>
                  </td>
                  <td className="wt-p-xs-3 wt-text-right">
                    <button className="wt-btn wt-btn--small">View</button>
                  </td>
                </tr>

                {/* FAILED */}
                <tr>
                  <td className="wt-p-xs-3">#12346</td>
                  <td className="wt-p-xs-3">Jan 8, 2025</td>
                  <td className="wt-p-xs-3">₦23,000</td>
                  <td className="wt-p-xs-3">
                    <span className="wt-badge wt-badge--error">Failed</span>
                  </td>
                  <td className="wt-p-xs-3 wt-text-right">
                    <button className="wt-btn wt-btn--small">View</button>
                  </td>
                </tr>

                {/* PENDING */}
                <tr>
                  <td className="wt-p-xs-3">#12347</td>
                  <td className="wt-p-xs-3">Jan 1, 2025</td>
                  <td className="wt-p-xs-3">₦9,700</td>
                  <td className="wt-p-xs-3">
                    <span className="wt-badge wt-badge--warning">Pending</span>
                  </td>
                  <td className="wt-p-xs-3 wt-text-right">
                    <button className="wt-btn wt-btn--small">View</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
