import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "./Header";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Header2 from "./Header2";

const Checkout = () => {
  const navigate = useNavigate();
//   const { cartItems, clearCart } = useCart();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [address, setAddress] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//   });

//   const [delivery, setDelivery] = useState("standard");
//   const [payment, setPayment] = useState("card");

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + (item.discountPrice || item.price) * item.quantity,
//       0
//     );
//   };

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

  return (
    <div  style={{backgroundColor: "white"}}>
      <Header2 />
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

	
		
		<div class="col2-set" id="customer_details">
			<div class="col-1">
			<input type="hidden" name="wc_order_attribution_source_type" value="typein" /><input type="hidden" name="wc_order_attribution_referrer" value="https://7oroofthemes.com/trevox/landing/index.html" /><input type="hidden" name="wc_order_attribution_utm_campaign" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_source" value="(direct)" /><input type="hidden" name="wc_order_attribution_utm_medium" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_content" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_id" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_term" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_source_platform" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_creative_format" value="(none)" /><input type="hidden" name="wc_order_attribution_utm_marketing_tactic" value="(none)" /><input type="hidden" name="wc_order_attribution_session_entry" value="https://7oroofthemes.com/trevox/" /><input type="hidden" name="wc_order_attribution_session_start_time" value="2025-11-02 05:42:16" /><input type="hidden" name="wc_order_attribution_session_pages" value="3" /><input type="hidden" name="wc_order_attribution_session_count" value="3" /><input type="hidden" name="wc_order_attribution_user_agent" value="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36" /><div class="woocommerce-billing-fields">
	
		<h3>Billing details</h3>

	
	
	<div class="woocommerce-billing-fields__field-wrapper">
			<p class="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10"><label for="billing_first_name" class="required_field">First name&nbsp;<span class="required" aria-hidden="true">
      </span></label><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" aria-required="true" autocomplete="given-name" />
      </span></p><p class="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20"><label for="billing_last_name" class="required_field">
      Last name&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" aria-required="true" autocomplete="family-name" />
      </span></p><p class="form-row form-row-wide" id="billing_company_field" data-priority="30"><label for="billing_company" class="">Company name&nbsp;
      <span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="" value="" autocomplete="organization" />
      </span></p><p class="form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
      <label for="billing_country" class="required_field">Country / Region&nbsp;<span class="required" aria-hidden="true">*</span></label>
      <span class="woocommerce-input-wrapper"><select name="billing_country" id="billing_country" class="country_to_state country_select select2-hidden-accessible" aria-required="true" autocomplete="country"
       data-placeholder="Select a country / region…" data-label="Country / Region" tabindex="-1"
        aria-hidden="true"><option value="">Select a country / region…</option><option value="AF">
        Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option>
        <option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option>
        <option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option>
        <option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option>
        <option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option>
        <option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option>
        <option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">
        Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option>
        <option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">
        British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">
        Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option>
        <option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">
        Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option>
        <option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Türkiye</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US" selected="selected">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: "100%;"}}><span class="selection"><span class="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-required="true" aria-label="Country / Region" role="combobox"><span class="select2-selection__rendered" aria-required="true" id="select2-billing_country-container" role="textbox" aria-readonly="true" title="United States (US)">United States (US)</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span><noscript><button type="submit" name="woocommerce_checkout_update_totals" value="Update country / region">Update country / region</button></noscript></span></p><p class="form-row address-field validate-required form-row-wide" id="billing_address_1_field" data-priority="50"><label for="billing_address_1" class="required_field">Street address&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value="" aria-required="true" autocomplete="address-line1" data-placeholder="House number and street name" /></span></p><p class="form-row address-field form-row-wide" id="billing_address_2_field" data-priority="60"><label for="billing_address_2" class="screen-reader-text">Apartment, suite, unit, etc.&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value="" autocomplete="address-line2" data-placeholder="Apartment, suite, unit, etc. (optional)" /></span></p><p class="form-row address-field validate-required form-row-wide" id="billing_city_field" data-priority="70" data-o_class="form-row form-row-wide address-field validate-required"><label for="billing_city" class="required_field">Town / City&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="" aria-required="true" autocomplete="address-level2" /></span></p><p class="form-row address-field validate-required validate-state form-row-wide" id="billing_state_field" data-priority="80" data-o_class="form-row form-row-wide address-field validate-required validate-state"><label for="billing_state" class="required_field">State&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper"><select name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" aria-required="true" autocomplete="address-level1" data-placeholder="Select an option…" data-input-classes="" data-label="State" tabindex="-1" aria-hidden="true"><option value="">Select an option…</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (AA)</option><option value="AE">Armed Forces (AE)</option><option value="AP">Armed Forces (AP)</option></select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: "100%;"}}><span class="selection"><span class="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-required="true" aria-label="State" role="combobox"><span class="select2-selection__rendered" aria-required="true" id="select2-billing_state-container" role="textbox" aria-readonly="true" title="California">California</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></span></p><p class="form-row address-field validate-required validate-postcode form-row-wide" id="billing_postcode_field" data-priority="90" data-o_class="form-row form-row-wide address-field validate-required validate-postcode"><label for="billing_postcode" class="required_field">ZIP Code&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper">
        
        
        <input type="text" class="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" aria-required="true" autocomplete="postal-code" /></span></p><p class="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100"><label for="billing_phone" class="required_field">Phone&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper"><input type="tel" class="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" aria-required="true" autocomplete="tel" /></span></p><p class="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110"><label for="billing_email" class="required_field">Email address&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper">
        
        <input type="email" class="input-text " name="billing_email" id="billing_email" placeholder="" value="" aria-required="true" autocomplete="email" /></span></p></div>

	</div>

			</div>

			<div class="col-2">
				<div class="woocommerce-shipping-fields">
	
		<h3 id="ship-to-different-address">
			<label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox checked">
				<input id="ship-to-different-address-checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" type="checkbox" name="ship_to_different_address" value="1" /> <span>Ship to a different address?</span>
			</label>
		</h3>

		<div class="shipping_address" style={{display: "none;"}}>

			
			<div class="woocommerce-shipping-fields__field-wrapper">
							<p class="form-row form-row-first validate-required" id="shipping_first_name_field" data-priority="10">
              <label for="shipping_first_name" class="required_field">First name&nbsp;<span class="required" aria-hidden="true">*
              </span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_first_name"
               id="shipping_first_name" placeholder="" value="" aria-required="true" autocomplete="given-name" />
               </span></p><p class="form-row form-row-last validate-required" id="shipping_last_name_field" data-priority="20">
               <label for="shipping_last_name" class="required_field">Last name&nbsp;<span class="required" aria-hidden="true">*</span>
               </label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" value="" aria-required="true" autocomplete="family-name" />
               </span></p><p class="form-row form-row-wide" id="shipping_company_field" data-priority="30"><label for="shipping_company" class="">Company name&nbsp;<span class="optional">(optional)</span>
               </label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_company" id="shipping_company" placeholder="" value="" autocomplete="organization" />
               </span></p><p class="form-row form-row-wide address-field update_totals_on_change validate-required" id="shipping_country_field" data-priority="40">
               <label for="shipping_country" class="required_field">Country / Region&nbsp;<span class="required" aria-hidden="true">*</span>
               </label><span class="woocommerce-input-wrapper">
                
              
                <span class="select2 select2-container select2-container--default" dir="ltr" style={{width: "100%;"}}><span class="selection"><span class="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-required="true" aria-label="Country / Region" role="combobox"><span class="select2-selection__rendered" aria-required="true" id="select2-shipping_country-container" role="textbox" aria-readonly="true" title="United States (US)">United States (US)</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span><noscript><button type="submit" name="woocommerce_checkout_update_totals" value="Update country / region">Update country / region</button></noscript></span></p><p class="form-row address-field validate-required form-row-wide" id="shipping_address_1_field" data-priority="50"><label for="shipping_address_1" class="required_field">Street address&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" value="" aria-required="true" autocomplete="address-line1" data-placeholder="House number and street name" /></span></p><p class="form-row address-field form-row-wide" id="shipping_address_2_field" data-priority="60"><label for="shipping_address_2" class="screen-reader-text">Apartment, suite, unit, etc.&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value="" autocomplete="address-line2" data-placeholder="Apartment, suite, unit, etc. (optional)" /></span></p><p class="form-row address-field validate-required form-row-wide" id="shipping_city_field" data-priority="70" data-o_class="form-row form-row-wide address-field validate-required"><label for="shipping_city" class="required_field">Town / City&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper">
                
                <input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" aria-required="true" autocomplete="address-level2" /></span></p><p class="form-row address-field validate-required validate-state form-row-wide" id="shipping_state_field" data-priority="80" data-o_class="form-row form-row-wide address-field validate-required validate-state"><label for="shipping_state" class="required_field">State&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper"><select name="shipping_state" id="shipping_state" class="state_select select2-hidden-accessible" aria-required="true" autocomplete="address-level1" data-placeholder="Select an option…" data-input-classes="" data-label="State" tabindex="-1" aria-hidden="true"><option value="">Select an option…</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (AA)</option><option value="AE">Armed Forces (AE)</option><option value="AP">Armed Forces (AP)</option></select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: "100%;"}}>
               <span class="selection"><span class="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-required="true" aria-label="State" role="combobox"><span class="select2-selection__rendered" aria-required="true" id="select2-shipping_state-container" role="textbox" aria-readonly="true" title="California">California</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></span></p><p class="form-row address-field validate-required validate-postcode form-row-wide" id="shipping_postcode_field" data-priority="90" data-o_class="form-row form-row-wide address-field validate-required validate-postcode"><label for="shipping_postcode" class="required_field">ZIP Code&nbsp;<span class="required" aria-hidden="true">*</span></label><span class="woocommerce-input-wrapper">
               <input type="text" class="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value="" aria-required="true" autocomplete="postal-code" /></span></p></div>

			
		</div>

	</div>
<div class="woocommerce-additional-fields">
	
	
		
		<div class="woocommerce-additional-fields__field-wrapper">
							<p class="form-row notes" id="order_comments_field" data-priority=""><label for="order_comments" class="">Order notes&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><textarea name="order_comments" class="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea></span></p>					</div>

	
	</div>
			</div>
		</div>

		
		
	<div class="cms-orderreview-wrap"><div class="cms-orderreview cms-sticky">	
	<h3 id="order_review_heading">Your order</h3>
	
	
	<div id="order_review" class="woocommerce-checkout-review-order">
		<table class="shop_table woocommerce-checkout-review-order-table">
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
</table>

<div id="payment" class="woocommerce-checkout-payment">
			<ul class="wc_payment_methods payment_methods methods">
			<li class="wc_payment_method payment_method_bacs">
	<input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="bacs" checked="checked" data-order_button_text="" />

	<label for="payment_method_bacs">
		Direct bank transfer 	</label>
			<div class="payment_box payment_method_bacs">
			<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
		</div>
	</li>
<li class="wc_payment_method payment_method_cheque">
	<input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="cheque" data-order_button_text="" />

	<label for="payment_method_cheque">
		Check payments 	</label>
			<div class="payment_box payment_method_cheque" style={{display:"none;"}}>
			<p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
		</div>
	</li>
<li class="wc_payment_method payment_method_cod">
	<input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="cod" data-order_button_text="" />

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
	
		
		<button type="submit" class="btn btn-primary text-white btn-hover-accent text-hover-white cms-hover-underline-bg" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order"><span class="cms-place-order">Place order</span></button>
		
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
