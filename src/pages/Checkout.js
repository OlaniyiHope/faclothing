import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Header from "./Header";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Header2 from "./Header2";
import Header3 from "./Header3";
import PaystackPop from "@paystack/inline-js";
const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  
//   const stripe = useStripe();
//   const elements = useElements();
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

    const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",
    apartment: "",
    company: "",
  });

  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("card");

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + (item.discountPrice || item.price) * item.quantity,
//       0
//     );
//   };
const getTotalPrice = () => {
  if (!Array.isArray(cartItems)) return 0;
  return cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQty = parseInt(item.quantity) || 0;
    return total + itemPrice * itemQty;
  }, 0);
};

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const res = await axios.get("https://restcountries.com/v3.1/all");
//         const countryNames = res.data
//           .map((c) => c.name.common)
//           .sort((a, b) => a.localeCompare(b));
//         setCountries(countryNames);
//       } catch (err) {
//         console.error("Error fetching countries:", err);
//       }
//     };
//     fetchCountries();
//   }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can now POST this to your backend
  };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ⚡ Here you would usually send the order details to backend
//     console.log({
//       address,
//       delivery,
//       payment,
//       cartItems,
//       total: getTotalPrice(),
//     });

//     clearCart();
//     navigate("/order-success"); // redirect after checkout
//   };
// const handleCardPayment = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);

//     // Call backend to create a PaymentIntent
//     const res = await fetch("http://localhost:5000/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       // body: JSON.stringify({ amount: total * 100 }), // amount in kobo/cents
//     });
//     const { clientSecret } = await res.json();

//     const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: { card: cardElement },
//     });

//     if (error) {
//       alert(error.message);
//     } else if (paymentIntent.status === "succeeded") {
//       // onSuccess();
//     }
//   };
// const handleStripePayment = async () => {
//   try {
//     const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); // ✅ uses env key

//     const res = await axios.post(
//       `${process.env.REACT_APP_API_URL}/api/db/create-checkout-session`,
//       { cartItems }
//     );

//     if (res.data.url) {
//       window.location.href = res.data.url; // Redirect to Stripe Checkout
//     } else {
//       alert("Unable to start payment session");
//     }
//   } catch (err) {
//     console.error("Stripe payment error:", err);
//     alert("Payment failed");
//   }
// };

// const handleStripePayment = async () => {
//   try {
//     // ✅ load Stripe with public key
//     const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

//     const res = await axios.post(
//       `${process.env.REACT_APP_API_URL}/api/db/create-checkout-session`,
//       { cartItems }
//     );

//     if (res.data.id) {
//       // ✅ use Stripe's recommended redirect method
//       await stripe.redirectToCheckout({ sessionId: res.data.id });
//     } else {
//       alert("Unable to start payment session");
//     }
//   } catch (err) {
//     console.error("Stripe payment error:", err);
//     alert("Payment failed");
//   }
// };
const handleStripePayment = async () => {
  try {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    // send the selected payment method to backend
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/db/create-checkout-session`,
      { cartItems, paymentMethod: payment } // <-- send payment method
    );

    if (res.data.id) {
      await stripe.redirectToCheckout({ sessionId: res.data.id });
    } else {
      alert("Unable to start payment session");
    }
  } catch (err) {
    console.error("Stripe payment error:", err);
    alert("Payment failed");
  }
};

const handlePaystackPayment = async () => {
    try {
      // 1️⃣ Call backend to initialize payment
      const res = await axios.post("http://localhost:8000/api/db/initialize", {
        email: "olaniyihoppee@gmail.com", // Replace with real customer email
        amount: getTotalPrice(), // in Naira
      });

      const { authorization_url, access_code, reference } = res.data.data;

      // 2️⃣ Open Paystack popup
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_194fdfb63723f18c009d2d250c6ada3b3d447c77", // You can also get a public key from Paystack dashboard
        email: "olaniyihoppee@gmail.com", // replace with real email
        amount: getTotalPrice() * 100, // amount in kobo
        reference, // optional
        onSuccess: (transaction) => {
          alert("Payment successful! Reference: " + transaction.reference);
          // ✅ Optionally save order to backend here
        },
        onCancel: () => {
          alert("Payment cancelled");
        },
      });
    } catch (err) {
      console.error("Paystack payment error:", err);
      alert("Payment failed");
    }
  };

  return (
    <div  style={{backgroundColor: "white"}}>
      <Header3 />
<div id="cms-ptitle" class="cms-ptitle text-center cms-ptitle-woo single-post">
        <div class="container-fluid relative z-top">
			<ul class="cms-breadcrumb unstyled cms-breadcrumb-1 justify-content-start"><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/">Home</a></li><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/shop/">Shop</a></li><li><span class="breadcrumb-entry">Checkout</span></li></ul>        </div>
    </div>

    <main id="cms-main" class="cms-main container cms-woo-content"><div class="woocommerce"><div class="woocommerce-notices-wrapper"></div><div class="woocommerce-form-coupon-toggle">
	
	<div class="woocommerce-info" role="status">
		Have a coupon? <a href="#" role="button" aria-label="Enter your coupon code" aria-controls="woocommerce-checkout-form-coupon" aria-expanded="false" class="showcoupon">Click here to enter your code</a>	</div>
</div>

<form class="checkout_coupon woocommerce-form-coupon" method="post" style={{display:"none"}} id="woocommerce-checkout-form-coupon">

	<p class="form-row form-row-first">
		<label for="coupon_code" class="screen-reader-text">Coupon:</label>
		<input type="text" name="coupon_code" class="input-text" placeholder="Coupon code" id="coupon_code" value="" />
	</p>

	<p class="form-row form-row-last">
		<button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
	</p>

	<div class="clear"></div>
</form>
<div class="woocommerce-notices-wrapper"></div>
<form name="checkout" method="post" class="checkout woocommerce-checkout" action="https://7oroofthemes.com/trevox/shop/checkout/" enctype="multipart/form-data" aria-label="Checkout" novalidate="novalidate">

	
		
		{/* <div class="col2-set" id="customer_details">
			<div class="col-1">
			<input type="hidden" name="wc_order_attribution_source_type" value="typein" /><input type="hidden" name="wc_order_attribution_referrer" value="https://7oroofthemes.com/trevox/landing/index.html" /><input type="hidden" name="wc_order_attribution_utm_campaign" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_source" value="(direct)" /><input type="hidden" name="wc_order_attribution_utm_medium" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_content" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_id" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_term" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_source_platform" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_creative_format" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_marketing_tactic" value="(none)" /><input type="hidden" name="wc_order_attribution_session_entry" value="https://7oroofthemes.com/trevox/" /><input type="hidden" name="wc_order_attribution_session_start_time" value="2025-11-02 05:42:16" /><input type="hidden" name="wc_order_attribution_session_pages" value="3" /><input type="hidden" name="wc_order_attribution_session_count" value="3" /><input type="hidden" name="wc_order_attribution_user_agent" value="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36" /><div class="woocommerce-billing-fields">
	
		<h3 style={{fontWeight: "800"}}>Delivery</h3>

	
	
	<div class="woocommerce-billing-fields__field-wrapper">
	<span class="woocommerce-input-wrapper">
        
        <input type="email" class="input-text " name="billing_email" id="billing_email" placeholder="Email Address" value="" aria-required="true" autocomplete="email" /></span>
			  <p class="form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
     
      <span class="woocommerce-input-wrapper">
		
		<select name="billing_country" id="billing_country"  placeholder="" class="country_to_state country_select select2-hidden-accessible" aria-required="true" autocomplete="country"
       data-placeholder="Select a country / region…" data-label="Country / Region" tabindex="-1"
        aria-hidden="true"><option value="">Select a country / region…</option>
		
		
		

</select>
        
        <input type="text" class="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" aria-required="true" autocomplete="postal-code" /></span>
		
		
		</p>
		
			<p class="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10"><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="First Name" value="" aria-required="true" autocomplete="given-name" />
      </span></p><p class="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20"><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="Last Name" aria-required="true" autocomplete="family-name" />
      </span></p><p class="form-row form-row-wide" id="billing_company_field" data-priority="30"><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="Company(optional)" value="" autocomplete="organization" />
      </span></p>

		
		<p class="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100">
			      <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="Address" value="" autocomplete="organization" />
				        <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="Apartment, suite etc" value="" autocomplete="organization" />
						      <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="City" value="" autocomplete="organization" />
							        <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="State" value="" autocomplete="organization" />
									      <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="Postal code(optional)" value="" autocomplete="organization" />
		<span class="woocommerce-input-wrapper"><input type="tel" class="input-text " name="billing_phone" id="billing_phone" placeholder="Phone Number" value="" aria-required="true" autocomplete="tel" /></span></p><p class="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
			
		</p></div>

	</div>

			</div>

		
		</div> */}

	<div className="flex justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-20">
  <div className="w-full max-w-5xl bg-white p-10 rounded-2xl shadow-lg">
    <h3 className="text-3xl font-bold text-gray-800 mb-8">🚚 Delivery Details</h3>

    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
          required
        />
      </div>

      {/* Country */}
   <label className="block text-gray-700 mb-1 font-medium">Country / Region</label>
<select
  name="country"
  value={form.country}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
  required
>
  <option value="">Select a country...</option>
  <option value="Nigeria">Nigeria</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="United States">United States</option>
</select>


      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            required
          />
        </div>
      </div>

      {/* Company (Optional) */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Company (Optional)</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company name"
          className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Street Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="House number and street name"
          className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 mb-4"
          required
        />
        <input
          type="text"
          name="apartment"
          value={form.apartment}
          onChange={handleChange}
          placeholder="Apartment, suite, unit, etc. (optional)"
          className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
        />
      </div>

      {/* City, State, Postal Code in one row */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <label className="block text-gray-700 mb-1 font-medium">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 mb-1 font-medium">State</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 mb-1 font-medium">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 234 567 890"
          className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
          required
        />
      </div>


{/* 🚚 Shipping Method Section */}
<div className="shipping-method mt-6 p-4 border rounded-lg bg-gray-50">
  <h3 className="text-lg font-semibold mb-4">Shipping Method</h3>

  <div className="grid gap-3">
    {/* USPS */}
    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-blue-500">
      <input
        type="radio"
        name="shippingMethod"
        value="usps"
        className="mr-3"
        checked={delivery === "usps"}
        onChange={() => setDelivery("usps")}
      />
      <div className="flex flex-col flex-1">
        <span className="font-medium">USPS International</span>
        <span className="text-sm text-gray-600">$8,689.88</span>
      </div>
      <span className="text-sm text-gray-600">4 to 9 business days</span>
    </label>

    {/* UPS */}
    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-blue-500">
      <input
        type="radio"
        name="shippingMethod"
        value="ups"
        className="mr-3"
        checked={delivery === "ups"}
        onChange={() => setDelivery("ups")}
      />
      <div className="flex flex-col flex-1">
        <span className="font-medium">UPS Worldwide Expedited®</span>
        <span className="text-sm text-gray-600">$9,396.66</span>
      </div>
      <span className="text-sm text-gray-600">4 to 9 business days</span>
    </label>

    {/* DHL */}
    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-blue-500">
      <input
        type="radio"
        name="shippingMethod"
        value="dhl"
        className="mr-3"
        checked={delivery === "dhl"}
        onChange={() => setDelivery("dhl")}
      />
      <div className="flex flex-col flex-1">
        <span className="font-medium">DHL Express Worldwide</span>
        <span className="text-sm text-gray-600">$13,417.18</span>
      </div>
      <span className="text-sm text-gray-600">4 to 5 business days</span>
    </label>
  </div>
</div>

{/* Payment Section */}

{/* Payment Section */}
<div className="payment-method mt-6 p-4 border rounded-lg bg-gray-50">
  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>

  {/* Payment Options */}
  <div className="grid gap-3">
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

  {/* Stripe Payment Button (Card or Klarna) */}
  {(payment === "card" || payment === "klarna") && (
    <button
      type="button"
      onClick={handleStripePayment} // pass payment method in this function
      className="mt-4 w-full py-2 rounded-lg transition"
      style={{ backgroundColor: "#8b023a", color: "white" }}
    >
      Pay ₦{(
        getTotalPrice() +
        (delivery === "usps"
          ? 8689.88
          : delivery === "ups"
          ? 9396.66
          : delivery === "dhl"
          ? 13417.18
          : 0)
      ).toLocaleString()}
    </button>
  )}

  {/* PayPal Button */}
  {payment === "paypal" && (
    <button
      type="button"
    //   onClick={handlePayPalPayment} // implement your PayPal payment function
      className="mt-4 w-full py-2 rounded-lg transition"
      style={{ backgroundColor: "#0070ba", color: "white" }}
    >
      Pay with PayPal
    </button>
  )}

  {/* Cash on Delivery Info */}
  {payment === "cod" && (
    <div className="mt-4 p-3 border rounded-lg bg-white text-gray-700">
      You have selected Cash on Delivery. Please prepare the payment when your order arrives.
    </div>
  )}
</div>



    </form>
  </div>
</div>

		
	<div class="cms-orderreview-wrap"><div class="cms-orderreview cms-sticky">	
	<h3 id="order_review_heading">Your order</h3>
	
	
	<div id="order_review" class="woocommerce-checkout-review-order">
		{/* <table class="shop_table woocommerce-checkout-review-order-table">
	<thead>
		<tr>
			<th class="product-name">Product</th>
			<th class="product-total">Subtotal</th>
		</tr>
	</thead>
	<tbody>
						<tr class="cart_item">
					<td class="product-name">
						Multi Color Knitwear&nbsp;						 <strong class="product-quantity">×&nbsp;1</strong>											</td>
					<td class="product-total">
						<span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>					</td>
				</tr>
								<tr class="cart_item">
					<td class="product-name">
						Yellow Knitwear Sweater&nbsp;						 <strong class="product-quantity">×&nbsp;1</strong>											</td>
					<td class="product-total">
						<span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>					</td>
				</tr>
					</tbody>
	<tfoot>

		<tr class="cart-subtotal">
			<th>Subtotal</th>
			<td><span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>115.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span></td>
		</tr>

		
		
			
			<tr class="woocommerce-shipping-totals shipping">
	<th>Shipping</th>
	<td data-title="Shipping">
					<ul id="shipping_method" class="woocommerce-shipping-methods">
									<li>
						<input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate13" value="flat_rate:13" class="shipping_method" checked="checked" /><label for="shipping_method_0_flat_rate13">Flat rate: <span class="woocommerce-Price-amount amount"><bdi>15.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></label>					</li>
									<li>
						<input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_local_pickup15" value="local_pickup:15" class="shipping_method" /><label for="shipping_method_0_local_pickup15">Local pickup: <span class="woocommerce-Price-amount amount"><bdi>10.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></label>					</li>
									<li>
						<input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_wc_pickup_store" value="wc_pickup_store" class="shipping_method" /><label for="shipping_method_0_wc_pickup_store">Pickup Store</label>					</li>
							</ul>
						
		
			</td>
</tr>

			
		
		
		
		
		<tr class="order-total">
			<th>Total</th>
			<td><strong><span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>130.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span></strong> </td>
		</tr>

		
	</tfoot>
</table> */}
<table className="shop_table woocommerce-checkout-review-order-table">
    <thead>
      <tr>
        <th className="product-name" style={{fontSize: "16px"}}>Product</th>
        <th className="product-total" style={{fontSize: "16px"}}>Subtotal</th>
      </tr>
    </thead>

    <tbody>
      {cartItems.length === 0 ? (
        <tr>
          <td colSpan="2" style={{ textAlign: "center" }}>
            Your cart is empty.
          </td>
        </tr>
      ) : (
        cartItems.map((item) => (
          <tr className="cart_item" key={item._id + (item.color || "")}>
            <td className="product-name" style={{fontSize: "15px"}}>
              {item.name}
              {item.color && (
                <span className="product-variation"> – {item.color}</span>
              )}
              {item.size && (
                <span className="product-variation"> – {item.size}</span>
              )}
              <strong className="product-quantity"> × {item.quantity}</strong>
            </td>
            <td className="product-total">
              <span className="woocommerce-Price-amount amount" style={{fontSize: "14px", fontWeight: "600"}}>
                <bdi>
					      <span className="woocommerce-Price-currencySymbol">$</span>
                  {(item.price * item.quantity).toFixed(2)}
            
                </bdi>
              </span>
            </td>
          </tr>
        ))
      )}
    </tbody>

    <tfoot>
      {/* Subtotal */}
      <tr className="cart-subtotal">
        <th style={{fontSize: "17px"}}>Subtotal</th>
        <td>
          <span className="woocommerce-Price-amount amount" style={{fontSize: "14px", fontWeight: "600"}}>
            <bdi>
				  <span className="woocommerce-Price-currencySymbol">$</span>
              {getTotalPrice().toFixed(2)}
            
            </bdi>
          </span>
        </td>
      </tr>
  {delivery && (
    <tr className="shipping-selected">
      <th style={{fontSize: "17px"}}>Shipping ({delivery.toUpperCase()})</th>
      <td>
        <span className="woocommerce-Price-amount amount" style={{fontSize: "14px", fontWeight: "600"}}>
			          <span className="woocommerce-Price-currencySymbol">$</span>
          <bdi>
            {delivery === "usps"
              ? "8689.88"
              : delivery === "ups"
              ? "9396.66"
              : "13417.18"}
  
          </bdi>
        </span>
      </td>
    </tr>
  )}
  

  <tr className="order-total">
    <th style={{fontSize: "17px"}}>Total</th>
    <td>
      <strong>
		  <span className="woocommerce-Price-currencySymbol">$</span>
        <span className="woocommerce-Price-amount amount" style={{fontSize: "18px"}}>
          <bdi>
            {(
              getTotalPrice() +
              (delivery === "usps"
                ? 8689.88
                : delivery === "ups"
                ? 9396.66
                : delivery === "dhl"
                ? 13417.18
                : 0)
            ).toFixed(2)}
          
          </bdi>
        </span>
      </strong>
    </td>
  </tr>
    </tfoot>
  </table>
<div id="payment" class="woocommerce-checkout-payment">
			<ul class="wc_payment_methods payment_methods methods">
			<li class="wc_payment_method payment_method_bacs">
	<input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="bacs" checked="checked" />

	<label for="payment_method_bacs">
		Direct bank transfer 	</label>
			<div class="payment_box payment_method_bacs">
			<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
		</div>
	</li>
<li class="wc_payment_method payment_method_cheque">
	<input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="cheque"  />

	<label for="payment_method_cheque">
		Check payments 	</label>
			<div class="payment_box payment_method_cheque" style={{display:"none;"}}>
			<p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
		</div>
	</li>
<li class="wc_payment_method payment_method_cod">
	<input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="cod"  />

	<label for="payment_method_cod">
		Cash on delivery 	</label>
			<div class="payment_box payment_method_cod" style={{display:"none;"}}>
			<p>Pay with cash upon delivery.</p>
		</div>
	</li>
		</ul>
		<div class="form-row place-order">
		<noscript>
			Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so.			<br/><button type="submit" class="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
		</noscript>

			<div class="woocommerce-terms-and-conditions-wrapper">
		<div class="woocommerce-privacy-policy-text"><p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="https://7oroofthemes.com/trevox/shop/privacy-policies/" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
</div><div class="woocommerce-terms-and-conditions"  style={{
    display: "none",
    maxHeight: "200px",
    overflow: "auto",
  }}><p class="privacy-policy-tutorial">This sample language includes the basics around what personal data your store may be collecting, storing and sharing, as well as who may have access to that data. Depending on what settings are enabled and which additional plugins are used, the specific information shared by your store will vary. We recommend consulting with a lawyer when deciding what information to disclose on your privacy policy.</p>
<p>We collect information about you during the checkout process on our store.</p>
<h2>What we collect and store</h2>
<p>While you visit our site, we’ll track:</p>
<ul>
<li>Products you’ve viewed: we’ll use this to, for example, show you products you’ve recently viewed</li>
<li>Location, IP address and browser type: we’ll use this for purposes like estimating taxes and shipping</li>
<li>Shipping address: we’ll ask you to enter this so we can, for instance, estimate shipping before you place an order, and send you the order!</li>
</ul>
<p>We’ll also use cookies to keep track of cart contents while you’re browsing our site.</p>
<p class="privacy-policy-tutorial">Note: you may want to further detail your cookie policy, and link to that section from here.</p>
<p>When you purchase from us, we’ll ask you to provide information including your name, billing address, shipping address, email address, phone number, credit card/payment details and optional account information like username and password. We’ll use this information for purposes, such as, to:</p>
<ul>
<li>Send you information about your account and order</li>
<li>Respond to your requests, including refunds and complaints</li>
<li>Process payments and prevent fraud</li>
<li>Set up your account for our store</li>
<li>Comply with any legal obligations we have, such as calculating taxes</li>
<li>Improve our store offerings</li>
<li>Send you marketing messages, if you choose to receive them</li>
</ul>
<p>If you create an account, we will store your name, address, email and phone number, which will be used to populate the checkout for future orders.</p>
<p>We generally store information about you for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for XXX years for tax and accounting purposes. This includes your name, email address and billing and shipping addresses.</p>
<p>We will also store comments or reviews, if you choose to leave them.</p>
<h2>Who on our team has access</h2>
<p>Members of our team have access to the information you provide us. For example, both Administrators and Shop Managers can access:</p>
<ul>
<li>Order information like what was purchased, when it was purchased and where it should be sent, and</li>
<li>Customer information like your name, email address, and billing and shipping information.</li>
</ul>
<p>Our team members have access to this information to help fulfill orders, process refunds and support you.</p>
<h2>What we share with others</h2>
<p class="privacy-policy-tutorial">In this section you should list who you’re sharing data with, and for what purpose. This could include, but may not be limited to, analytics, marketing, payment gateways, shipping providers, and third party embeds.</p>
<p>We share information with third parties who help us provide our orders and store services to you; for example —</p>
<h3>Payments</h3>
<p class="privacy-policy-tutorial">In this subsection you should list which third party payment processors you’re using to take payments on your store since these may handle customer data. We’ve included PayPal as an example, but you should remove this if you’re not using PayPal.</p>
<p>We accept payments through PayPal. When processing payments, some of your data will be passed to PayPal, including information required to process or support the payment, such as the purchase total and billing information.</p>
<p>Please see the <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full">PayPal Privacy Policy</a> for more details.</p>
</div>
					<p class="form-row validate-required">
				<label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
				<input type="checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="terms" id="terms" />
					<span class="woocommerce-terms-and-conditions-checkbox-text">I have read and agree to the website <a href="https://7oroofthemes.com/trevox/shop/terms-conditions/" class="woocommerce-terms-and-conditions-link" target="_blank">terms and conditions</a></span>&nbsp;<abbr class="required" title="required">*</abbr>
				</label>
				<input type="hidden" name="terms-field" value="1" />
			</p>
			</div>
	
		
		<button type="submit" class="btn btn-primary text-white btn-hover-accent text-hover-white cms-hover-underline-bg" name="woocommerce_checkout_place_order" id="place_order" value="Place order" ><span class="cms-place-order">Place order</span></button>
		
		<input type="hidden" id="woocommerce-process-checkout-nonce" name="woocommerce-process-checkout-nonce" value="c5822e4adf" /><input type="hidden" name="_wp_http_referer" value="/trevox/?wc-ajax=update_order_review" />	</div>
</div>

	</div>

	</div></div>
</form>

</div>
</main>
     

      <Footer />
    </div>
  );
};

export default Checkout;
