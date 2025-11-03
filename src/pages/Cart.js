import React, {useState, useEffect} from "react";
import white from "./home.png";
import young from "./a1.jpeg";
import old from "./a3.jpg";
import Navbar from "../components/Navbar";
import step from "./newsprint.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./home.css";
import "./style.css";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header2 from "./Header2";


const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // ✅ include updateQuantity from context

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.discountPrice || item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="wp-singular page-template-default page page-id-85 page-child parent-pageid-84 wp-custom-logo wp-theme-trevox theme-trevox woocommerce-cart woocommerce-page woocommerce-js translatepress-en_US cms-heading-font-default elementor-default elementor-kit-8 currency-usd e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit" style={{backgroundColor: "white"}}>
      <Header2 />
{/* 
    	<main id="cms-main" class="cms-main container cms-woo-content"><div class="woocommerce"><div class="woocommerce-notices-wrapper"></div><div class="wc-empty-cart-message">
	<div class="cart-empty woocommerce-info" role="status">
		Your cart is currently empty.	</div>
</div>	<p class="return-to-shop">
		<a class="button wc-backward" href="../index.html">
			Return to shop		</a>
	</p>
</div>
</main> */}
{/* <div id="cms-ptitle" class="cms-ptitle text-center cms-ptitle-woo single-post" >
        <div class="container-fluid relative z-top">
			<ul class="cms-breadcrumb unstyled cms-breadcrumb-1 justify-content-start"><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/">Home</a></li><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/shop/">Shop</a></li><li><span class="breadcrumb-entry">Cart</span></li></ul>        </div>
    </div> */}
<main id="cms-main" class="cms-main container cms-woo-content" style={{width: "100%"}}><div class="woocommerce"><div class="woocommerce-notices-wrapper"></div>
<form class="woocommerce-cart-form" action="https://7oroofthemes.com/trevox/shop/cart/" method="post">
	
	<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0" style={{marginTop: "100px"}}>
		<thead>
			<tr>
				<th class="product-remove"><span class="screen-reader-text">Remove item</span></th>
				<th class="product-thumbnail"><span class="screen-reader-text">Thumbnail image</span></th>
				<th scope="col" class="product-name">Product</th>
				<th scope="col" class="product-price">Price</th>
				<th scope="col" class="product-quantity">Quantity</th>
				<th scope="col" class="product-subtotal">Subtotal</th>
			</tr>
		</thead>
		<tbody>
			
								<tr class="woocommerce-cart-form__cart-item cart_item">

						<td class="product-remove">
							<a role="button" href="https://7oroofthemes.com/trevox/shop/cart/?remove_item=8f121ce07d74717e0b1f21d122e04521&amp;_wpnonce=2bef0420ff" class="remove" aria-label="Remove Multi Color Knitwear from cart" data-product_id="268" data-product_sku="ED5690010">×</a>						</td>

						<td class="product-thumbnail">
						<a href="https://7oroofthemes.com/trevox/product/multi-color-knitwear/#woosq-268"><img loading="lazy" decoding="async" width="180" height="230" src="https://7oroofthemes.com/trevox/wp-content/uploads/Multi-Color-Knitwear2-180x230.webp" class="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt="Multi Color Knitwear" /></a>						</td>

						<td scope="row" role="rowheader" class="product-name" data-title="Product">
						<a href="https://7oroofthemes.com/trevox/product/multi-color-knitwear/#woosq-268">Multi Color Knitwear</a>						</td>

						<td class="product-price" data-title="Price">
							<span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>						</td>

						<td class="product-quantity" data-title="Quantity">
						<div class="quantity">
	  
<div class="cms-quantity cms-transition d-flex flex-nowrap justify-content-between align-items-center gap-20">
    <div class="cms-qty-text text-15 pl-20">Quantity</div>
    <div class="cms-qty-input relative d-flex align-items-center flex-nowrap">
        <span class="cms-qty-act cms-qty-down pl-10"></span>
	<label class="screen-reader-text" for="quantity_69086382ebef8">Multi Color Knitwear quantity</label>
	<input type="number" id="quantity_69086382ebef8" class="input-text qty text" name="cart[8f121ce07d74717e0b1f21d122e04521][qty]" value="1" aria-label="Product quantity" min="0" step="1" placeholder="" inputmode="numeric" autocomplete="off" />
	        <span class="cms-qty-act cms-qty-up pr-20"></span>
    </div>
</div>
</div>
						</td>

						<td class="product-subtotal" data-title="Subtotal">
							<span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>						</td>
					</tr>
										<tr class="woocommerce-cart-form__cart-item cart_item">

						<td class="product-remove">
							<a role="button" href="https://7oroofthemes.com/trevox/shop/cart/?remove_item=92c8c96e4c37100777c7190b76d28233&amp;_wpnonce=2bef0420ff" class="remove" aria-label="Remove Yellow Knitwear Sweater from cart" data-product_id="280" data-product_sku="ED5690010-1">×</a>						</td>

						<td class="product-thumbnail">
						<a href="https://7oroofthemes.com/trevox/product/yellow-knitwear-sweater/#woosq-280"><img loading="lazy" decoding="async" width="180" height="230" src="https://7oroofthemes.com/trevox/wp-content/uploads/Yellow-Knitwear-Sweater4-180x230.webp" class="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" alt="Yellow Knitwear Sweater" /></a>						</td>

						<td scope="row" role="rowheader" class="product-name" data-title="Product">
						<a href="https://7oroofthemes.com/trevox/product/yellow-knitwear-sweater/#woosq-280">Yellow Knitwear Sweater</a>						</td>

						<td class="product-price" data-title="Price">
							<span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>						</td>

						<td class="product-quantity" data-title="Quantity">
						<div class="quantity">
	  
<div class="cms-quantity cms-transition d-flex flex-nowrap justify-content-between align-items-center gap-20">
    <div class="cms-qty-text text-15 pl-20">Quantity</div>
    <div class="cms-qty-input relative d-flex align-items-center flex-nowrap">
        <span class="cms-qty-act cms-qty-down pl-10"></span>
	<label class="screen-reader-text" for="quantity_69086382eca7f">Yellow Knitwear Sweater quantity</label>
	<input type="number" id="quantity_69086382eca7f" class="input-text qty text" name="cart[92c8c96e4c37100777c7190b76d28233][qty]" value="1" aria-label="Product quantity" min="0" step="1" placeholder="" inputmode="numeric" autocomplete="off" />
	        <span class="cms-qty-act cms-qty-up pr-20"></span>
    </div>
</div>
</div>
						</td>

						<td class="product-subtotal" data-title="Subtotal">
							<span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>						</td>
					</tr>
					
			
			<tr>
				<td colspan="6" class="actions">

											<div class="coupon">
							<label for="coupon_code" class="screen-reader-text">Coupon:</label> <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="Coupon code" /> <button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
													</div>
					
					<button type="submit" class="button" name="update_cart" value="Update cart" disabled="">Update cart</button>

					
					<input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="2bef0420ff" /><input type="hidden" name="_wp_http_referer" value="/trevox/shop/cart/" />				</td>
			</tr>

					</tbody>
	</table>
	</form>


<div class="cart-collaterals">
	<div class="cart_totals ">

	
	<h2>Cart totals</h2>

	<table cellspacing="0" class="shop_table shop_table_responsive">

		<tbody><tr class="cart-subtotal">
			<th>Subtotal</th>
			<td data-title="Subtotal"><span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>115.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span></td>
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
							<p class="woocommerce-shipping-destination">
					Shipping to <strong>CA</strong>. 				</p>
						
		
					
<form class="woocommerce-shipping-calculator" action="https://7oroofthemes.com/trevox/shop/cart/" method="post">

	<a href="#" class="shipping-calculator-button" aria-expanded="false" aria-controls="shipping-calculator-form" role="button">Change address</a>
	<section class="shipping-calculator-form" id="shipping-calculator-form" style={{display:"none;"}}>

					<p class="form-row form-row-wide" id="calc_shipping_country_field">
				<label for="calc_shipping_country">Country / region</label>
				<select name="calc_shipping_country" id="calc_shipping_country" class="country_to_state country_select" rel="calc_shipping_state">
					<option value="default">Select a country / region…</option>
					<option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Türkiye</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US" selected="selected">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>				</select>
			</p>
		
					<p class="form-row validate-required form-row-wide address-field" id="calc_shipping_state_field" data-o_class="form-row form-row-wide">
									<span>
						<label for="calc_shipping_state">State&nbsp;<span class="required" aria-hidden="true">*</span></label>
						<select name="calc_shipping_state" class="state_select" id="calc_shipping_state"><option value="">Select an option…</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (AA)</option><option value="AE">Armed Forces (AE)</option><option value="AP">Armed Forces (AP)</option></select>
					</span>
								</p>
		
					<p class="form-row validate-required form-row-wide address-field" id="calc_shipping_city_field" data-o_class="form-row form-row-wide">
				<label for="calc_shipping_city">Town / City&nbsp;<span class="required" aria-hidden="true">*</span></label>
				<input type="text" class="input-text" value="" name="calc_shipping_city" id="calc_shipping_city" />
			</p>
		
					<p class="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field" data-o_class="form-row form-row-wide">
				<label for="calc_shipping_postcode">ZIP Code&nbsp;<span class="required" aria-hidden="true">*</span></label>
				<input type="text" class="input-text" value="" name="calc_shipping_postcode" id="calc_shipping_postcode" />
			</p>
		
		<p><button type="submit" name="calc_shipping" value="1" class="button">Update</button></p>
		<input type="hidden" id="woocommerce-shipping-calculator-nonce" name="woocommerce-shipping-calculator-nonce" value="54d97219ec" /><input type="hidden" name="_wp_http_referer" value="/trevox/shop/cart/" />	</section>
</form>

			</td>
</tr>

			
		
		
		
		
		<tr class="order-total">
			<th>Total</th>
			<td data-title="Total"><strong><span class="woocs_special_price_code"><span class="woocommerce-Price-amount amount"><bdi>130.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span></strong> </td>
		</tr>

		
	</tbody></table>

	<div class="wc-proceed-to-checkout">
		
<a href="https://7oroofthemes.com/trevox/shop/checkout/" class="checkout-button btn btn-accent text-white btn-hover-primary text-hover-white">
	Proceed to checkout</a>
	</div>

	
</div>
</div>

</div>
</main>

      <Footer />
    </div>
  );
};

export default Cart;
