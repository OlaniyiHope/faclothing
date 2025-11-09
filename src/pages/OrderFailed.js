import React from "react";
import { Link } from "react-router-dom";

const OrderFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Payment Failed</h1>
      <p className="text-gray-600 mb-6">
        Something went wrong or you canceled the payment. Please try again.
      </p>
      <Link
        to="/checkout"
        className="bg-[#8b023a] text-white px-6 py-2 rounded-lg hover:bg-[#a30345] transition"
      >
        Go Back to Checkout
      </Link>
    </div>
  );
};

export default OrderFailed;
