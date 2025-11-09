import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h1>
      <p className="text-gray-600 mb-6">
        Your order has been placed successfully. You’ll receive a confirmation email shortly.
      </p>
      <Link
        to="/"
        className="bg-[#8b023a] text-white px-6 py-2 rounded-lg hover:bg-[#a30345] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
