import React, {useState, useEffect, useContext} from "react";
import white from "./home.png";
import young from "./a1.jpeg";
import old from "./a3.jpg";
import step from "./newsprint.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./style.css";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header2 from "./Header2";
import Header3 from "./Header3";
import { AuthContext } from "../context/AuthContext";


const Cart2 = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
console.log(cartItems);
  const [payment, setPayment] = useState("card");
const navigate = useNavigate();
const { user } = useContext(AuthContext);
const isLoggedIn = !!user;
const paymentMethods = [
  {
    id: "card",
    label: "Credit / Debit Card",
    provider: "Stripe",
    screenReader: "Pay with credit or debit card",
  },
  {
    id: "paypal",
    label: "PayPal",
    provider: "PayPal",
    screenReader: "Pay with PayPal",
  },
  {
    id: "klarna",
    label: "Klarna",
    provider: "Klarna",
    screenReader: "Pay with Klarna",
  },
];


  // Default shipping rate options
  const [shipping, setShipping] = useState(15);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // const total = subtotal + shipping;
    const total = subtotal;
    const handleProceedToCheckout = () => {
  if (isLoggedIn) {
    navigate("/checkout");
  } else {
    setShowCheckoutModal(true); // open modal instead of alert
  }
};

    const CheckoutChoiceModal = ({ onClose, onGuest, onLogin }) => {
  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal">
        <h3>Proceed to Checkout</h3>
        <p>You can checkout as a guest or login for a faster experience.</p>

        <div className="checkout-modal-actions">
          <button
            className="wt-btn wt-btn--filled wt-width-full wt-mb-xs-2"
            onClick={onGuest}
          >
            Continue as Guest
          </button>

          <button
            className="wt-btn wt-btn--secondary wt-width-full"
            onClick={onLogin}
          >
            Login to Continue
          </button>
        </div>

        <button className="checkout-modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

  return (
    
    <div className="wp-singular page-template-default page page-id-85 page-child parent-pageid-84 wp-custom-logo wp-theme-trevox theme-trevox woocommerce-cart woocommerce-page woocommerce-js translatepress-en_US cms-heading-font-default elementor-default elementor-kit-8 currency-usd e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit" style={{backgroundColor: "white"}}>
      <Header2 />
	      <main id="content">
            <div id="checkout" class="
    wt-horizontal-center wt-sem-bg-elevation-0 wt-width-full wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-lg-6 wt-pr-lg-6
        
        wt-pt-xs-4 min-width-desktop-view
    
    ">
    <div data-submit-overlay-selector="">
        <div id="place-order" class="wt-overlay wt-overlay--info wt-display-none" data-wt-overlay="" role="dialog" aria-labelledby="placing-order" aria-hidden="true" data-close-on-esc="false" data-close-on-mask-click="false">
    <div class="wt-overlay__modal" data-overlay-modal="">
        <div class="wt-overlay__header wt-pb-xs-0 wt-text-center-xs">
            <h1 id="placing-order" class="wt-text-title-large">
                Hold tight, we’re submitting your order.
            </h1>
        </div>
            <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--03" aria-live="assertive">
        <div class="wt-spinner--03__background"></div>
        <div class="wt-spinner--03__item-1"></div>
        <div class="wt-spinner--03__item-2"></div>
        Loading
    </div>


    </div>
</div>
</div>
    

    <div>

        

        

            

        

        <div data-cart-notification-container=""></div>

        

        <div class="" data-checkout-header="">
    <div class="wt-display-flex-xs wt-align-items-center
 wt-justify-content-space-between
            ">
        <p class="wt-text-title-larger">Your cart</p>
    </div>
</div>

        

        

            

            <div class="wt-position-relative">
                <div id="multi-shop-cart-list" class="wt-align-items-center">
                    <div data-multi-shop-cart="" class="wt-mt-xs-1 wt-mt-lg-0 wt-mb-xs-5 wt-position-relative">
    


    <div class="wt-grid wt-position-relative wt-pl-xs-0 wt-pr-xs-0 ">
     


<ul className="cart-list-items wt-grid__item-xs-12 wt-grid__item-sm-12 wt-p-xs-0 wt-pr-md-3 wt-height-full wt-list-unstyled wt-grid__item-lg-8 wt-grid__item-md-7">
  {cartItems.map((item) =>
    item.product ? ( // ✅ check if product exists
      <li key={item.product._id} className="condensed-desktop-cart wt-mt-xs-3 wt-mt-md-5">
        <div className="wt-rounded-02 wt-b-xs">
          <div className="wt-pt-xs-4 wt-pl-xs-4 wt-pr-xs-4 wt-pb-xs-1">
            <div className="wt-display-flex-xs wt-pt-xs-1 wt-pt-md-0">

              {/* PRODUCT IMAGE */}
              <div className="wt-flex-xs-1">
                <img
                  src={item.product.image || "/placeholder.png"} // fallback image
                  className="wt-width-full wt-rounded-01 wt-overflow-hidden wt-display-block"
                  alt={item.product.name || "Product Image"}
                  style={{ height: "120px", objectFit: "cover" }}
                />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="wt-flex-xs-3 wt-pl-xs-2 wt-break-word simplified-cart-min-width-0 wt-pl-md-3">
                <p className="wt-text-body wt-text-truncate">
                  {item.product.name || "Unnamed Product"}
                </p>

                <div className="wt-mt-xs-1 wt-text-small">
<div className="wt-mt-xs-1 wt-text-small">
  {item.color && <div>Color: {item.color}</div>}
  {item.size && <div>Size: {item.size}</div>}
<div className="wt-mt-xs-1 wt-display-flex-xs wt-align-items-center wt-flex-gap-xs-2">
  <button
    className="wt-btn wt-btn--small wt-btn--secondary"
    onClick={() =>
      updateQuantity(item.product._id, item.color, item.quantity - 1)
    }
    disabled={item.quantity <= 1}
  >
    −
  </button>

  <span className="wt-text-body">
    {item.quantity}
  </span>

  <button
    className="wt-btn wt-btn--small wt-btn--secondary"
    onClick={() =>
      updateQuantity(item.product._id, item.color, item.quantity + 1)
    }
  >
    +
  </button>
</div>

</div>


               
                </div>

                <div className="wt-mt-xs-1 wt-text-title-01">
                  ₦{item.product.discountPrice ?? item.product.price ?? 0}
                </div>

                {/* REMOVE BUTTON */}
        <button
  onClick={() => removeFromCart(item.product._id, item.color)}
  className="wt-btn wt-btn--small wt-btn--secondary wt-mt-xs-2"
  style={{ cursor: "pointer" }}
>
  Remove
</button>


              </div>

            </div>
          </div>
        </div>
      </li>
    ) : null // skip items without product
  )}
</ul>



        <div class="wt-grid__item-xs-12 wt-grid__item-sm-12 wt-p-xs-0 wt-pt-xs-2 wt-mt-md-0 wt-mt-xs-2 wt-pt-md-0 wt-pl-md-3 wt-grid__item-lg-4 wt-grid__item-md-5">
            <div data-multi-shop-cart-payment="" data-shop-payment-unique-id="12541074043">
    <div class="multi-shop-cart-payment wt-p-md-3">
        <form class="enter-checkout-form" action="/cart/12541074043/checkout/?guest=1&amp;payment_method=cc" method="post">
            <input type="hidden" name="cart_nonce" value="69172fff20fe0" />
<input type="hidden" name="_nnc" value="3:1763127295:1UcJowTxS-jLe72RcLHcaf-iG1zb:851e03934d6711908f14b0b2178cca488d8f1250449cbaa24d30d1b1b7fd2004" />
<input type="hidden" name="has_estimated_shipping" value="true" />

    <input type="hidden" name="cart_ids[]" value="12541074043" />

    <input type="hidden" name="guest_checkout" value="1" />
    <input type="hidden" name="guest_user_email" value="" />

    <input type="hidden" name="sign_in_and_checkout" value="1" />
            <div class="cart-payment-section ">

                

            <fieldset className="wt-mt-xs-1">
  <legend className="wt-text-title-01">
    How you’ll pay
  </legend>

  <ul className="wt-list-unstyled wt-mt-xs-2">
    {paymentMethods.map((method) => (
      <li key={method.id}>
        <div className="wt-radio wt-mb-xs-2">
          <input
            type="radio"
            id={`payment_${method.id}`}
            name="payment_method"
            value={method.id}
            checked={payment === method.id}
            onChange={() => setPayment(method.id)}
          />

          <label htmlFor={`payment_${method.id}`}>
            <span className="wt-radio-label">
              <strong>{method.label}</strong>
              <div className="wt-text-small wt-text-gray">
                {method.provider}
              </div>
            </span>
            <span className="wt-screen-reader-only">
              {method.screenReader}
            </span>
          </label>
        </div>
      </li>
    ))}
  </ul>
</fieldset>

                <div class="wt-mt-xs-1">
                    <table class="wt-b-xs-none wt-width-full" summary="This is the order summary, it contains costs for the products you have put in your cart">
        <caption hidden="true">Order summary</caption>
        <tbody class="wt-text-left-xs">
<tr>
  <th
    className="wt-p-xs-0 wt-b-xs-none wt-sem-text-primary wt-text-body-01 th-payments-normal"
    scope="row"
  >
    Item(s) total
  </th>
<td className="wt-p-xs-0 wt-b-xs-none wt-text-right-xs wt-text-body-01 wt-sem-text-primary wt-no-wrap">
  <span className="money">
    <span className="currency-symbol">₦ </span>
    <span className="currency-value">
      {cartItems.reduce((total, item) => {
        if (!item.product) return total;
        const price = item.product.discountPrice ?? item.product.price ?? 0;
        const quantity = item.quantity ?? 1;
        return total + price * quantity;
      }, 0)}
    </span>
  </span>
</td>

</tr>


        <tr>
            <td colspan="2">                    
                <div class="wt-mt-xs-1 wt-mb-xs-2">
    <div class="wt-display-flex-xs wt-align-items-center">
        <span class="wt-icon wt-icon--base-xs wt-flex-shrink-xs-0 wt-mr-xs-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2 4 6v6c0 8 8 10 8 10s8-2 8-10V6zm5.25 7.54-6.67 6.67-.11.11h-.32l-.9-.12h-.16L9 16l-2.3-4-.17-.29.29-.17L8 10.88l.28-.17.17.29 1.66 2.87 5.74-5.74.24-.24.24.24.94.94.23.23z"></path></svg></span>
        <div class="wt-popover" >
            <div class="wt-text-body-small">
                You're covered with <button  type="button" tabindex="0" aria-describedby="epp-signal-popover" class="wt-text-body-small wt-popover__trigger wt-popover__trigger--underline">Rayofaa Purchase Protection</button>
            </div>
            <div id="epp-signal-popover" role="tooltip">
                <div class="wt-text-title wt-mb-xs-2 wt-display-inline-flex-xs">
                    Rayofaa Purchase Protection
                </div>
                <div class="wt-text-body-small wt-mb-xs-3">If something goes wrong with your order, you'll get a full refund.</div>
                <p class="wt-text-title-small wt-mb-xs-1">Here's what's eligible:</p>
                <ul class="wt-text-body-small wt-mb-xs-1 wt-pl-xs-3">
                        <li>Your order doesn't match the item description or photos</li>
                        <li>Your item arrived damaged</li>
                        <li>Your item arrived after the estimated arrival date</li>
                        <li>Your item didn't arrive or was lost in the mail</li>
                </ul>
                <a href="https://www.etsy.com/etsy-purchase-protection" class="wt-text-caption" target="_blank">View program terms
                </a>
                <span class="wt-popover__arrow"></span>
            </div>
        </div>
    </div>
</div>
            </td>  
        </tr>
        
        
        
        
        
        
        
        </tbody>
    </table>
    
    <div class="wt-sem-text-secondary wt-text-caption wt-pb-xs-2">
        VAT included
    </div>
    <button
  className=" wt-btn wt-btn--filled wt-mt-xs-2 wt-width-full"
  type="button"
//   onClick={() => {
//     if (!isLoggedIn) {
//       return alert("You must be logged in before proceeding to checkout.\nClick OK to go to login.");
//     }

//     // Force navigate to checkout
//     navigate("/checkout");

//     // FORCE STOP any redirect caused by Checkout2
//     setTimeout(() => {
//       if (window.location.pathname !== "/checkout") {
//         window.location.replace("/checkout");
//       }
//     }, 200);
//   }}
onClick={handleProceedToCheckout}

>
  <span className="submit-button-text">Proceed to checkout</span>
{showCheckoutModal && (
  <CheckoutChoiceModal
    onClose={() => setShowCheckoutModal(false)}
    onGuest={() => {
      setShowCheckoutModal(false);
      navigate("/checkout?mode=guest");
    }}
    onLogin={() => {
      setShowCheckoutModal(false);
      navigate("/login?redirect=/checkout");
    }}
  />
)}

  <span className="wt-spinner wt-spinner--01 wt-display-none" role="alert" aria-live="assertive">
    <span className="etsy-icon">
   
    </span>
    Loading
  </span>
</button>
                    
                </div>
            </div>
            <div>
                
                <div class="wt-pb-xs-2">
                    {/* <button class="proceed-to-checkout wt-btn wt-btn--filled wt-mt-xs-2 wt-width-full
            
            inline-overlay-trigger guest-checkout-action
        " type="submit" data-redirect-to="/checkout" data-selector="cart-submit-button" data-supplemental-state--has_estimated_shipping="true">
    <span class="submit-button-text" data-cart-default-submit-button-text="">Proceed to checkout</span>
    <span class="wt-spinner wt-spinner--01 wt-display-none" role="alert" aria-live="assertive" data-cart-default-submit-button-loading-spinner="">
      <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
      Loading
    </span>
</button> */}




                    <div class="wt-display-none apple-pay-button-wrapper" >
        
        <button class="wt-btn wt-width-full wt-mt-xs-2 wt-mb-lg-0 checkout-with apple-pay-button
        
        
        wt-mb-xs-1 apple-pay-button-black" type="submit"  >
            &nbsp;
        </button>
        <div  class="wt-pt-xs-2">
            <div class="wt-sem-text-primary wt-text-body-small">
                By clicking the Apple Pay button, you agree to Etsy's <a href="/legal/terms-of-use" title="Terms of Use"  class="checkout-purchase-accept-terms-link">Terms of Use</a> and <a href="/legal/privacy" title="Privacy Policy"  class="checkout-purchase-accept-terms-link">Privacy Policy</a>
</div>
        </div>
</div>
                    
                </div>
                <button type="button" class="wt-content-toggle--btn wt-btn wt-btn--small wt-btn--transparent-flush-left
        
        wt-nudge-r-2"  aria-controls="strategic-discount-input-12541074043" aria-expanded="false">
    <span class="wt-display-flex-xs wt-align-items-center wt-width-full
        
        ">
        <span class="wt-display-inline-flex-xs">
                <span class="wt-icon cart-ia-coupon-field-icon etsy-icon wt-icon wt-mr-xs-3 wt-ml-xs-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12 12 2h10v10L12 22zm17-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span>
        </span><span class="wt-text-title">Apply coupon code</span>
    </span>
    </button>
    <div id="strategic-discount-input-12541074043" class="wt-content-toggle__body" aria-hidden="true" tabindex="-1">
        <div class="wt-validation wt-mt-xs-2 wt-mb-xs-2">
            <div class="wt-input-btn-group">
                <input type="text" class="wt-input-btn-group__input" id="strategic-discount" value="" placeholder="Enter code" />
                <button type="submit" class="wt-input-btn-group__btn wt-input-btn-group__btn--filled" >
                    Apply
                </button>
            </div>
        </div>
    </div>

    <div class="wt-overlay wt-overlay--info" id="nbo-celebration-overlay" aria-hidden="true"  role="dialog" aria-modal="false" aria-label="Important information">
    <div class="wt-overlay__modal wt-p-xs-4"  >
        <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-align-items-center">
            <img class="wt-width-full nbo-celebration-img" loading="lazy" src="https://www.etsy.com/assets/dist/images/checkout/nbo-celebration.20211014161635.png" alt="Shoppers celebrating that their coupon worked" />
            <h1 class="wt-text-heading wt-line-height-tight wt-mt-xs-6 wt-mb-xs-8 wt-text-center-xs nbo-celebration-text">
                Congrats! You unlocked your offer
            </h1>
        </div>
    </div>
</div>
                
                <div class="wt-sem-text-secondary wt-text-caption wt-text-center-xs">
                    <div  class="  wt-text-left-xs ">
Local taxes included (where applicable)
    <div class="wt-mt-xs-1">
        * Learn more about additional taxes, duties, and fees that <button class="wt-text-link" aria-controls="tax-transparency-overlay-69172fff272ed" type="button" >may apply</button>
    </div>
</div>
                </div>
            </div>
        </form>
    </div>
    
</div>
        </div>
    </div>
    <div  class="wt-display-none wt-width-full wt-height-full wt-z-index-1 overlay-styling">
        <div class="wt-spinner wt-spinner--02 wt-vertical-center">
            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle fill="transparent" cx="24" cy="24" r="21"></circle></svg></span>
                Loading
        </div>
    </div>
</div>
                    <div data-selector="full-page-loading-spinner" class="wt-display-none wt-width-full wt-height-full wt-position-fixed overlay-styling" aria-busy="true">
                        <div class="wt-spinner wt-spinner--02 wt-vertical-center">
                            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle fill="transparent" cx="24" cy="24" r="21"></circle></svg></span>
                            Loading
                        </div>
                    </div>
                </div>
                <div class="wt-mb-xs-6 wt-mt-xs-4 wt-mt-xs-1 wt-position-relative wt-display-none" >
    <div class="wt-text-center-xs">
        <h1 class="wt-text-heading wt-pt-xs-2 wt-pb-xs-2">
            Your cart is empty.
        </h1>
    </div>
</div>
            </div>




        {/* <div class="wt-sem-bg-elevation-0">
                <div data-selector="cart-recommendations-container">
                    <div>
<div class="appears-ready">
        <div class="wt-display-flex-xs wt-mb-xs-3  wt-align-items-baseline">
    <h3 class="wt-text-title-large wt-mr-xs-1">Related items you may like</h3>

    <span>Including ads&nbsp;</span>
    <span class="wt-text-left-xs wt-popover wt-align-self-baseline wt-text-body-small wt-text-gray" data-ads-row-popover="">
    <button data-wt-popover-trigger="" aria-disabled="true" class="wt-popover__trigger wt-align-items-baseline" aria-describedby="ads-row-popover-content">
        <span class="wt-screen-reader-only">Learn more</span>
        <span class="etsy-icon wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,22A10,10,0,1,1,22,12,10.012,10.012,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8.009,8.009,0,0,0,12,4Z"></path><circle cx="12" cy="16.5" r="1.5"></circle><path d="M13,14H11a3.043,3.043,0,0,1,1.7-2.379C13.5,11.055,14,10.674,14,10a2,2,0,1,0-4,0H8a4,4,0,1,1,8,0,4,4,0,0,1-2.152,3.259A2.751,2.751,0,0,0,13,14Z"></path></svg></span>
        
    </button>
    <span id="ads-row-popover-content" class="wt-text-left-xs" role="tooltip">
        Sellers looking to grow their business and reach more interested buyers can use Etsy’s advertising platform to promote their items. You’ll see ad results based on factors like relevancy, and the amount sellers pay per click. <a href="https://www.etsy.com/legal/policy/search-advertisement-ranking-disclosures/899478564529" target="_blank" rel="nofollow">Learn more</a>.
    <span class="wt-popover__arrow"></span></span>
</span>
</div>

    <ul class="wt-block-grid wt-list-unstyled wt-block-grid-xs-5 ">
        <li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="4298647493" data-shop-id="54418716" data-listing-id="4298647493" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             b360fe2b19a7f8e8e
" data-listing-id="4298647493" data-palette-listing-image="" href="https://www.etsy.com/listing/4298647493/custom-dance-png-dance-game-day-png?click_key=LTe1452aaeb6481e9ff55a290434f0fcbcecdfa9a0%3A4298647493&amp;click_sum=619bc940&amp;ls=a&amp;ref=also_bought-1&amp;pro=1&amp;sts=1&amp;dd=1" data-listing-link="" data-display-loc="w.1-1" data-index="0" data-logging-key="LTe1452aaeb6481e9ff55a290434f0fcbcecdfa9a0:4298647493" target="etsy.4298647493" title="Custom Dance Png, Dance Game Day Png, Personalized Dance Name Png, Dance Coquette Bow Png, Dance Season Png, Sports Mom Png, Retro Dance Png">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-1" alt="Custom Dance Png, Dance Game Day Png, Personalized Dance Name Png, Dance Coquette Bow Png, Dance Season Png, Sports Mom Png, Retro Dance Png" src="https://i.etsystatic.com/54418716/r/il/f4b3b0/6876083557/il_340x270.6876083557_ess3.jpg" srcset="https://i.etsystatic.com/54418716/r/il/f4b3b0/6876083557/il_340x270.6876083557_ess3.jpg 340w,https://i.etsystatic.com/54418716/r/il/f4b3b0/6876083557/il_680x540.6876083557_ess3.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="ad-listing-title-4298647493">
                Custom Dance Png, Dance Game Day Png, Personalized Dance Name Png, Dance Coquette Bow Png, Dance Season Png, Sports Mom Png, Retro Dance Png
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate cTu0XRYS2t wt-mb-xs-1" data-seller-name-container="">
              <span class="ikaw0xngi" aria-hidden="true">
                    ad <span class="lvm1h2hqn">vertisement</span> by Etsy seller
              </span>
              <span class="ikaw0xngi wt-screen-reader-only">Ad<span class="zea716bd2">vertisement</span> from Etsy seller</span>
              <span class="pxyglo796" aria-hidden="true">
                    SrnTrendShop
              </span>
              <span class="pxyglo796 wt-screen-reader-only">From shop SrnTrendShop</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                               wt-text-slime
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 2.79
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">2.79</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-gray
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">3.99</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 3.99
                            </span>
                            <span class="wt-text-grey ">
                                
                                (30% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="LTe1452aaeb6481e9ff55a290434f0fcbcecdfa9a0:4298647493">
    <input type="hidden" name="listing_id" value="4298647493" />
    <input type="hidden" name="listing_title" value="Custom Dance Png, Dance Game Day Png, Personalized Dance Name Png, Dance Coquette Bow Png, Dance Season Png, Sports Mom Png, Retro Dance Png" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/4298647493/custom-dance-png-dance-game-day-png" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_pl" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="true" />
    <input type="hidden" name="plkey" value="LTe1452aaeb6481e9ff55a290434f0fcbcecdfa9a0:4298647493" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="ads" />
    <input type="hidden" name="logging_key" value="LTe1452aaeb6481e9ff55a290434f0fcbcecdfa9a0:4298647493" />
    <input type="hidden" name="_nnc" value="3:1763127319:RGQTTv7Zjk1VASHX2RTGKIAMI2ba:db71e5828cbfd99709b6c8198e5cf9529f0a1705bebf81bdc39709ba521e73a8" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="ad-listing-title-4298647493">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="4298647493" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="ads" data-logging-key="LTe1452aaeb6481e9ff55a290434f0fcbcecdfa9a0:4298647493">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1668778321" data-shop-id="16327816" data-listing-id="1668778321" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             b360fe2b19a7f8e8e
" data-listing-id="1668778321" data-palette-listing-image="" href="https://www.etsy.com/listing/1668778321/in-my-dance-era-svg-bundle-groovy?click_key=LT44412c5a9e7540d8813e4629cd021e59229948d1%3A1668778321&amp;click_sum=31a3089a&amp;ls=a&amp;ref=also_bought-2&amp;dd=1" data-listing-link="" data-display-loc="w.1-2" data-index="1" data-logging-key="LT44412c5a9e7540d8813e4629cd021e59229948d1:1668778321" target="etsy.1668778321" title="In My Dance Era Svg Bundle, Groovy Letters Dance Shirt Svg, Dance Team Svg Png Dxf Cricut Silhouette Sublimation Instant Download SC3175">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-2" alt="In My Dance Era Svg Bundle, Groovy Letters Dance Shirt Svg, Dance Team Svg Png Dxf Cricut Silhouette Sublimation Instant Download SC3175" src="https://i.etsystatic.com/16327816/r/il/341f56/5719254190/il_340x270.5719254190_9dcc.jpg" srcset="https://i.etsystatic.com/16327816/r/il/341f56/5719254190/il_340x270.5719254190_9dcc.jpg 340w,https://i.etsystatic.com/16327816/r/il/341f56/5719254190/il_680x540.5719254190_9dcc.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="ad-listing-title-1668778321">
                In My Dance Era Svg Bundle, Groovy Letters Dance Shirt Svg, Dance Team Svg Png Dxf Cricut Silhouette Sublimation Instant Download SC3175
            </h3>

                    <p class="wt-text-caption wt-text-truncate d2oRoQO4Ez wt-mb-xs-1" data-seller-name-container="">
              <span class="iti7duazu" aria-hidden="true">
                    ad <span class="pxyglo796">vertisement</span> by Etsy seller
              </span>
              <span class="iti7duazu wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from Etsy seller</span>
              <span class="lvm1h2hqn" aria-hidden="true">
                    SunflowerChicSVG
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">From shop SunflowerChicSVG</span>
        </p>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">2.50</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="LT44412c5a9e7540d8813e4629cd021e59229948d1:1668778321">
    <input type="hidden" name="listing_id" value="1668778321" />
    <input type="hidden" name="listing_title" value="In My Dance Era Svg Bundle, Groovy Letters Dance Shirt Svg, Dance Team Svg Png Dxf Cricut Silhouette Sublimation Instant Download SC3175" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1668778321/in-my-dance-era-svg-bundle-groovy" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_pl" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="true" />
    <input type="hidden" name="plkey" value="LT44412c5a9e7540d8813e4629cd021e59229948d1:1668778321" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="ads" />
    <input type="hidden" name="logging_key" value="LT44412c5a9e7540d8813e4629cd021e59229948d1:1668778321" />
    <input type="hidden" name="_nnc" value="3:1763127319:50aMP5NsUyEnO6cUq_0EAUjJPcJG:4932f8936c51bb90573c61322ad48b6f94d7d0139c331623cb1e6974a3ca3339" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="ad-listing-title-1668778321">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1668778321" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="ads" data-logging-key="LT44412c5a9e7540d8813e4629cd021e59229948d1:1668778321">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1359543755" data-shop-id="31632419" data-listing-id="1359543755" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             b360fe2b19a7f8e8e
" data-listing-id="1359543755" data-palette-listing-image="" href="https://www.etsy.com/listing/1359543755/gymnastics-svg-cut-file-bundle?click_key=LT7b4dfe998dc56c9b3e945c014619f016a0c59df4%3A1359543755&amp;click_sum=3013fb83&amp;ls=a&amp;ref=also_bought-3&amp;dd=1" data-listing-link="" data-display-loc="w.1-3" data-index="2" data-logging-key="LT7b4dfe998dc56c9b3e945c014619f016a0c59df4:1359543755" target="etsy.1359543755" title="Gymnastics SVG Cut File Bundle, Gymnastics Silhouette Clipart, Cricut Cut File, Gymnastics Digital Download, Gymnast Gift, Gymnastics Mom">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-3" alt="Gymnastics SVG Cut File Bundle, Gymnastics Silhouette Clipart, Cricut Cut File, Gymnastics Digital Download, Gymnast Gift, Gymnastics Mom" src="https://i.etsystatic.com/31632419/r/il/327f37/4397676796/il_340x270.4397676796_kdvm.jpg" srcset="https://i.etsystatic.com/31632419/r/il/327f37/4397676796/il_340x270.4397676796_kdvm.jpg 340w,https://i.etsystatic.com/31632419/r/il/327f37/4397676796/il_680x540.4397676796_kdvm.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="ad-listing-title-1359543755">
                Gymnastics SVG Cut File Bundle, Gymnastics Silhouette Clipart, Cricut Cut File, Gymnastics Digital Download, Gymnast Gift, Gymnastics Mom
            </h3>

                    <p class="wt-text-caption wt-text-truncate keg7kF44I9 wt-mb-xs-1" data-seller-name-container="">
              <span class="jujjegt76" aria-hidden="true">
                    ad <span class="wtt4jncv7">vertisement</span> by Etsy seller
              </span>
              <span class="jujjegt76 wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from Etsy seller</span>
              <span class="bmrcbo5d4" aria-hidden="true">
                    GraphixByJay
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">From shop GraphixByJay</span>
        </p>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">2.99</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="LT7b4dfe998dc56c9b3e945c014619f016a0c59df4:1359543755">
    <input type="hidden" name="listing_id" value="1359543755" />
    <input type="hidden" name="listing_title" value="Gymnastics SVG Cut File Bundle, Gymnastics Silhouette Clipart, Cricut Cut File, Gymnastics Digital Download, Gymnast Gift, Gymnastics Mom" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1359543755/gymnastics-svg-cut-file-bundle" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_pl" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="true" />
    <input type="hidden" name="plkey" value="LT7b4dfe998dc56c9b3e945c014619f016a0c59df4:1359543755" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="ads" />
    <input type="hidden" name="logging_key" value="LT7b4dfe998dc56c9b3e945c014619f016a0c59df4:1359543755" />
    <input type="hidden" name="_nnc" value="3:1763127319:AMRmeXc3bwvIi_f7AFnfebB_bqZE:8ff0abe09ba99e58e66fc15cbb9a7692e0f036b0ec9d8076ee817da48f6cd7e6" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="ad-listing-title-1359543755">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1359543755" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="ads" data-logging-key="LT7b4dfe998dc56c9b3e945c014619f016a0c59df4:1359543755">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="4327442958" data-shop-id="27745117" data-listing-id="4327442958" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             b360fe2b19a7f8e8e
" data-listing-id="4327442958" data-palette-listing-image="" href="https://www.etsy.com/listing/4327442958/retro-dance-svg-png-for-cricut-retro?click_key=LTea43ec62f8a247ab279fda98dac0ac3676a5b377%3A4327442958&amp;click_sum=7409ef90&amp;ls=a&amp;ref=also_bought-4&amp;sts=1&amp;dd=1" data-listing-link="" data-display-loc="w.1-4" data-index="3" data-logging-key="LTea43ec62f8a247ab279fda98dac0ac3676a5b377:4327442958" target="etsy.4327442958" title="Retro Dance Svg Png for Cricut, Retro Dance Team Shirt, Dance Mom Svg, Tumbler &amp; Family Svg for Girls and Kids">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-4" alt="Retro Dance Svg Png for Cricut, Retro Dance Team Shirt, Dance Mom Svg, Tumbler &amp; Family Svg for Girls and Kids" src="https://i.etsystatic.com/27745117/c/1875/1875/561/29/il/5436b1/7092565194/il_340x270.7092565194_n9g6.jpg" srcset="https://i.etsystatic.com/27745117/c/1875/1875/561/29/il/5436b1/7092565194/il_340x270.7092565194_n9g6.jpg 340w,https://i.etsystatic.com/27745117/c/1875/1875/561/29/il/5436b1/7092565194/il_680x540.7092565194_n9g6.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="ad-listing-title-4327442958">
                Retro Dance Svg Png for Cricut, Retro Dance Team Shirt, Dance Mom Svg, Tumbler &amp; Family Svg for Girls and Kids
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-mb-xs-1" data-seller-name-container="">
              <span class="q0vghi1o4" aria-hidden="true">
                    ad <span class="s1dljhoji">vertisement</span> by Etsy seller
              </span>
              <span class="q0vghi1o4 wt-screen-reader-only">Ad<span class="zea716bd2">vertisement</span> from Etsy seller</span>
              <span class="bmrcbo5d4" aria-hidden="true">
                    MiddaySVG
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">From shop MiddaySVG</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">3.79</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="LTea43ec62f8a247ab279fda98dac0ac3676a5b377:4327442958">
    <input type="hidden" name="listing_id" value="4327442958" />
    <input type="hidden" name="listing_title" value="Retro Dance Svg Png for Cricut, Retro Dance Team Shirt, Dance Mom Svg, Tumbler &amp; Family Svg for Girls and Kids" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/4327442958/retro-dance-svg-png-for-cricut-retro" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_pl" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="true" />
    <input type="hidden" name="plkey" value="LTea43ec62f8a247ab279fda98dac0ac3676a5b377:4327442958" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="ads" />
    <input type="hidden" name="logging_key" value="LTea43ec62f8a247ab279fda98dac0ac3676a5b377:4327442958" />
    <input type="hidden" name="_nnc" value="3:1763127319:b9rAhILMsZ7oPcFWuZxiRrT0f71n:58e61e08ad87c2997f6e08b54f1bae718a6f6496252795694db058f8bac3f2b6" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="ad-listing-title-4327442958">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="4327442958" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="ads" data-logging-key="LTea43ec62f8a247ab279fda98dac0ac3676a5b377:4327442958">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1510353026" data-shop-id="43713423" data-listing-id="1510353026" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             b360fe2b19a7f8e8e
" data-listing-id="1510353026" data-palette-listing-image="" href="https://www.etsy.com/listing/1510353026/dancing-svg-dance-mom-svg-dance-teacher?click_key=LT3208d5b7435c9acce7547bda6ce6f762c1479f44%3A1510353026&amp;click_sum=035dd60f&amp;ls=a&amp;ref=also_bought-5&amp;pro=1&amp;sts=1&amp;dd=1" data-listing-link="" data-display-loc="w.1-5" data-index="4" data-logging-key="LT3208d5b7435c9acce7547bda6ce6f762c1479f44:1510353026" target="etsy.1510353026" title="Dancing Svg, Dance Mom Svg, Dance Teacher Svg, Dance Svg, Dance Heart Svg, Dance Shirt Svg, Sports Svg, Cut File, Cricut, Svg, sublimation">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-5" alt="Dancing Svg, Dance Mom Svg, Dance Teacher Svg, Dance Svg, Dance Heart Svg, Dance Shirt Svg, Sports Svg, Cut File, Cricut, Svg, sublimation" src="https://i.etsystatic.com/43713423/r/il/d81537/5094828074/il_340x270.5094828074_fzjn.jpg" srcset="https://i.etsystatic.com/43713423/r/il/d81537/5094828074/il_340x270.5094828074_fzjn.jpg 340w,https://i.etsystatic.com/43713423/r/il/d81537/5094828074/il_680x540.5094828074_fzjn.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="ad-listing-title-1510353026">
                Dancing Svg, Dance Mom Svg, Dance Teacher Svg, Dance Svg, Dance Heart Svg, Dance Shirt Svg, Sports Svg, Cut File, Cricut, Svg, sublimation
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate laWph2mRJI wt-mb-xs-1" data-seller-name-container="">
              <span class="oidevvrdu" aria-hidden="true">
                    ad <span class="bsm0vib8s">vertisement</span> by Etsy seller
              </span>
              <span class="oidevvrdu wt-screen-reader-only">Ad<span class="ba0ac7b57">vertisement</span> from Etsy seller</span>
              <span class="h56kdv9ur" aria-hidden="true">
                    CraftyDigiArts
              </span>
              <span class="h56kdv9ur wt-screen-reader-only">From shop CraftyDigiArts</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                               wt-text-slime
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 1.05
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">1.05</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-gray
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">3.50</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 3.50
                            </span>
                            <span class="wt-text-grey ">
                                
                                (70% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="LT3208d5b7435c9acce7547bda6ce6f762c1479f44:1510353026">
    <input type="hidden" name="listing_id" value="1510353026" />
    <input type="hidden" name="listing_title" value="Dancing Svg, Dance Mom Svg, Dance Teacher Svg, Dance Svg, Dance Heart Svg, Dance Shirt Svg, Sports Svg, Cut File, Cricut, Svg, sublimation" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1510353026/dancing-svg-dance-mom-svg-dance-teacher" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_pl" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="true" />
    <input type="hidden" name="plkey" value="LT3208d5b7435c9acce7547bda6ce6f762c1479f44:1510353026" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="ads" />
    <input type="hidden" name="logging_key" value="LT3208d5b7435c9acce7547bda6ce6f762c1479f44:1510353026" />
    <input type="hidden" name="_nnc" value="3:1763127319:L9yRD5Dr01x5X-7uh2KtwXWS7LtG:ddae1c09eece7d04ede645e4548715d7d389d14572d29fd3666d5c23db37d38b" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="ad-listing-title-1510353026">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1510353026" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="ads" data-logging-key="LT3208d5b7435c9acce7547bda6ce6f762c1479f44:1510353026">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1570575519" data-shop-id="27595895" data-listing-id="1570575519" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1570575519" data-palette-listing-image="" href="https://www.etsy.com/listing/1570575519/sports-clipart-black-cheerleader?click_key=ac35b16904b47cf8562a2e9e45b6e234%3ALTca56e8ebbd06af00b2e5c0d18958f240495fb47d&amp;click_sum=d66e303f&amp;ls=r&amp;ref=also_bought-6&amp;sts=1&amp;dd=1&amp;content_source=ac35b16904b47cf8562a2e9e45b6e234%253ALTca56e8ebbd06af00b2e5c0d18958f240495fb47d" data-listing-link="" data-impression-attribution-key="" data-impression-id="1570575519" data-impression-type="listing" data-display-loc="w.1-1" data-index="0" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LTca56e8ebbd06af00b2e5c0d18958f240495fb47d" target="etsy.1570575519" title="Sports Clipart: Black Cheerleader Megaphone with Pom Pom Outline with Word Cheer Cutout for Cheerleading - Digital Download svg png dxf pdf">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-6" alt="Sports Clipart: Black Cheerleader Megaphone with Pom Pom Outline with Word Cheer Cutout for Cheerleading - Digital Download svg png dxf pdf" src="https://i.etsystatic.com/27595895/r/il/134747/5309859100/il_340x270.5309859100_9m8m.jpg" srcset="https://i.etsystatic.com/27595895/r/il/134747/5309859100/il_340x270.5309859100_9m8m.jpg 340w,https://i.etsystatic.com/27595895/r/il/134747/5309859100/il_680x540.5309859100_9m8m.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="listing-title-1570575519">
                Sports Clipart: Black Cheerleader Megaphone with Pom Pom Outline with Word Cheer Cutout for Cheerleading - Digital Download svg png dxf pdf
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate dRgs129Dl7 wt-mb-xs-1" data-seller-name-container="">
              <span class="mk3wq84lo" aria-hidden="true">
                    ad <span class="gz59pzpqr">vertisement</span> by ClipartWarehouse
              </span>
              <span class="mk3wq84lo wt-screen-reader-only">Ad<span class="c339c158c">vertisement</span> from shop ClipartWarehouse</span>
              <span class="ikaw0xngi" aria-hidden="true">
                    ClipartWarehouse
              </span>
              <span class="ikaw0xngi wt-screen-reader-only">From shop ClipartWarehouse</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.39</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LTca56e8ebbd06af00b2e5c0d18958f240495fb47d">
    <input type="hidden" name="listing_id" value="1570575519" />
    <input type="hidden" name="listing_title" value="Sports Clipart: Black Cheerleader Megaphone with Pom Pom Outline with Word Cheer Cutout for Cheerleading - Digital Download svg png dxf pdf" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1570575519/sports-clipart-black-cheerleader" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_og" /> 
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="false" />
    <input type="hidden" name="plkey" value="ac35b16904b47cf8562a2e9e45b6e234:LTca56e8ebbd06af00b2e5c0d18958f240495fb47d" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="recs" />
    <input type="hidden" name="logging_key" value="ac35b16904b47cf8562a2e9e45b6e234:LTca56e8ebbd06af00b2e5c0d18958f240495fb47d" />
    <input type="hidden" name="_nnc" value="3:1763127319:l5SHyZL0CPqo_Fkcoi7sM2heucv8:3710ef76b6a11843585a5dde8aa697abf7f5041b1f24302be1181a030fd83c05" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="listing-title-1570575519">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1570575519" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LTca56e8ebbd06af00b2e5c0d18958f240495fb47d">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1115919049" data-shop-id="27595895" data-listing-id="1115919049" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1115919049" data-palette-listing-image="" href="https://www.etsy.com/listing/1115919049/sports-clipart-half-black-soccer-ball?click_key=ac35b16904b47cf8562a2e9e45b6e234%3ALT4717358fd964a2c9d96a2383d887f12490de1910&amp;click_sum=1194f03a&amp;ls=r&amp;ref=also_bought-7&amp;sts=1&amp;dd=1&amp;content_source=ac35b16904b47cf8562a2e9e45b6e234%253ALT4717358fd964a2c9d96a2383d887f12490de1910" data-listing-link="" data-impression-attribution-key="" data-impression-id="1115919049" data-impression-type="listing" data-display-loc="w.1-2" data-index="1" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT4717358fd964a2c9d96a2383d887f12490de1910" target="etsy.1115919049" title="Sports Clipart: Half Black Soccer Ball with Bold Word &quot;Coach&quot; Below It - Players, Teams, Coaches, Parents - Digital Download svg png dxf pdf">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-7" alt="Sports Clipart: Half Black Soccer Ball with Bold Word &amp;quot;Coach&amp;quot; Below It - Players, Teams, Coaches, Parents - Digital Download svg png dxf pdf" src="https://i.etsystatic.com/27595895/r/il/e2d9c3/3497100079/il_340x270.3497100079_gizq.jpg" srcset="https://i.etsystatic.com/27595895/r/il/e2d9c3/3497100079/il_340x270.3497100079_gizq.jpg 340w,https://i.etsystatic.com/27595895/r/il/e2d9c3/3497100079/il_680x540.3497100079_gizq.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="listing-title-1115919049">
                Sports Clipart: Half Black Soccer Ball with Bold Word "Coach" Below It - Players, Teams, Coaches, Parents - Digital Download svg png dxf pdf
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate hUbqGguIbp wt-mb-xs-1" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="i2eazdbbj">vertisement</span> by ClipartWarehouse
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop ClipartWarehouse</span>
              <span class="jujjegt76" aria-hidden="true">
                    ClipartWarehouse
              </span>
              <span class="jujjegt76 wt-screen-reader-only">From shop ClipartWarehouse</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.06</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2">
                    <form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT4717358fd964a2c9d96a2383d887f12490de1910">
    <input type="hidden" name="listing_id" value="1115919049" />
    <input type="hidden" name="listing_title" value="Sports Clipart: Half Black Soccer Ball with Bold Word &quot;Coach&quot; Below It - Players, Teams, Coaches, Parents - Digital Download svg png dxf pdf" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1115919049/sports-clipart-half-black-soccer-ball" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_og" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="false" />
    <input type="hidden" name="plkey" value="ac35b16904b47cf8562a2e9e45b6e234:LT4717358fd964a2c9d96a2383d887f12490de1910" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="recs" />
    <input type="hidden" name="logging_key" value="ac35b16904b47cf8562a2e9e45b6e234:LT4717358fd964a2c9d96a2383d887f12490de1910" />
    <input type="hidden" name="_nnc" value="3:1763127319:OQCzZSNG9-jLSUMauGZDTkpoZLQW:87aa3fc6b4384861cbd19f4afe3a899f956ea1bccb57adf6452b1971009b128d" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="listing-title-1115919049">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1115919049" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT4717358fd964a2c9d96a2383d887f12490de1910">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1103308701" data-shop-id="27595895" data-listing-id="1103308701" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1103308701" data-palette-listing-image="" href="https://www.etsy.com/listing/1103308701/holiday-clipart-blackwhite-outline-of?click_key=ac35b16904b47cf8562a2e9e45b6e234%3ALT9e816f259e76f847b115a709dfe26caa1e1a05fb&amp;click_sum=ec631233&amp;ls=r&amp;ref=also_bought-8&amp;sts=1&amp;dd=1&amp;content_source=ac35b16904b47cf8562a2e9e45b6e234%253ALT9e816f259e76f847b115a709dfe26caa1e1a05fb" data-listing-link="" data-impression-attribution-key="" data-impression-id="1103308701" data-impression-type="listing" data-display-loc="w.1-3" data-index="2" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT9e816f259e76f847b115a709dfe26caa1e1a05fb" target="etsy.1103308701" title="Holiday Clipart: Black/White Outline of Nutcracker, Palace Guard or Toy Soldier Figure - Christmas Ballet - Digital Download Format SVG/PNG">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-8" alt="Holiday Clipart: Black/White Outline of Nutcracker, Palace Guard or Toy Soldier Figure - Christmas Ballet - Digital Download Format SVG/PNG" src="https://i.etsystatic.com/27595895/r/il/ffa5c7/3401040878/il_340x270.3401040878_i9f6.jpg" srcset="https://i.etsystatic.com/27595895/r/il/ffa5c7/3401040878/il_340x270.3401040878_i9f6.jpg 340w,https://i.etsystatic.com/27595895/r/il/ffa5c7/3401040878/il_680x540.3401040878_i9f6.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="listing-title-1103308701">
                Holiday Clipart: Black/White Outline of Nutcracker, Palace Guard or Toy Soldier Figure - Christmas Ballet - Digital Download Format SVG/PNG
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate usxSl20Duw wt-mb-xs-1" data-seller-name-container="">
              <span class="bmrcbo5d4" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by ClipartWarehouse
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from shop ClipartWarehouse</span>
              <span class="ubrly762o" aria-hidden="true">
                    ClipartWarehouse
              </span>
              <span class="ubrly762o wt-screen-reader-only">From shop ClipartWarehouse</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.17</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT9e816f259e76f847b115a709dfe26caa1e1a05fb">
    <input type="hidden" name="listing_id" value="1103308701" />
    <input type="hidden" name="listing_title" value="Holiday Clipart: Black/White Outline of Nutcracker, Palace Guard or Toy Soldier Figure - Christmas Ballet - Digital Download Format SVG/PNG" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1103308701/holiday-clipart-blackwhite-outline-of" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_og" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="false" />
    <input type="hidden" name="plkey" value="ac35b16904b47cf8562a2e9e45b6e234:LT9e816f259e76f847b115a709dfe26caa1e1a05fb" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="recs" />
    <input type="hidden" name="logging_key" value="ac35b16904b47cf8562a2e9e45b6e234:LT9e816f259e76f847b115a709dfe26caa1e1a05fb" />
    <input type="hidden" name="_nnc" value="3:1763127319:yg_be6ZXRc1T-ibf2QOxosr_S612:6de3483a5dfc57ec7a4170d59e2b5cb6a05e19f1714de94ba7dbb2b7378b0c6d" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="listing-title-1103308701">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1103308701" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT9e816f259e76f847b115a709dfe26caa1e1a05fb">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1598536599" data-shop-id="27595895" data-listing-id="1598536599" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1598536599" data-palette-listing-image="" href="https://www.etsy.com/listing/1598536599/sports-clipart-large-black-half?click_key=ac35b16904b47cf8562a2e9e45b6e234%3ALTc9d21642aa001172befa2526849e861948c3cfe4&amp;click_sum=03cf52b7&amp;ls=r&amp;ref=also_bought-9&amp;sts=1&amp;dd=1&amp;content_source=ac35b16904b47cf8562a2e9e45b6e234%253ALTc9d21642aa001172befa2526849e861948c3cfe4" data-listing-link="" data-impression-attribution-key="" data-impression-id="1598536599" data-impression-type="listing" data-display-loc="w.1-4" data-index="3" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LTc9d21642aa001172befa2526849e861948c3cfe4" target="etsy.1598536599" title="Sports Clipart: Large Black Half Basketball Shape Under Bold Word &quot;Basketball&quot; in College Block Lettering - Digital Download svg png dxf pdf">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-9" alt="Sports Clipart: Large Black Half Basketball Shape Under Bold Word &amp;quot;Basketball&amp;quot; in College Block Lettering - Digital Download svg png dxf pdf" src="https://i.etsystatic.com/27595895/r/il/479419/5448548584/il_340x270.5448548584_dgde.jpg" srcset="https://i.etsystatic.com/27595895/r/il/479419/5448548584/il_340x270.5448548584_dgde.jpg 340w,https://i.etsystatic.com/27595895/r/il/479419/5448548584/il_680x540.5448548584_dgde.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="listing-title-1598536599">
                Sports Clipart: Large Black Half Basketball Shape Under Bold Word "Basketball" in College Block Lettering - Digital Download svg png dxf pdf
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate hUbqGguIbp wt-mb-xs-1" data-seller-name-container="">
              <span class="s1dljhoji" aria-hidden="true">
                    ad <span class="bsm0vib8s">vertisement</span> by ClipartWarehouse
              </span>
              <span class="s1dljhoji wt-screen-reader-only">Ad<span class="c339c158c">vertisement</span> from shop ClipartWarehouse</span>
              <span class="bvfko7q02" aria-hidden="true">
                    ClipartWarehouse
              </span>
              <span class="bvfko7q02 wt-screen-reader-only">From shop ClipartWarehouse</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.39</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LTc9d21642aa001172befa2526849e861948c3cfe4">
    <input type="hidden" name="listing_id" value="1598536599" />
    <input type="hidden" name="listing_title" value="Sports Clipart: Large Black Half Basketball Shape Under Bold Word &quot;Basketball&quot; in College Block Lettering - Digital Download svg png dxf pdf" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1598536599/sports-clipart-large-black-half" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_og" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="false" />
    <input type="hidden" name="plkey" value="ac35b16904b47cf8562a2e9e45b6e234:LTc9d21642aa001172befa2526849e861948c3cfe4" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="recs" />
    <input type="hidden" name="logging_key" value="ac35b16904b47cf8562a2e9e45b6e234:LTc9d21642aa001172befa2526849e861948c3cfe4" />
    <input type="hidden" name="_nnc" value="3:1763127319:UVgoM1KEzwJNwaHJ9e1vXCssZ4-6:cb7577cc708577158395bd25fdbcf9eff5732c8df970cbb6aa61c8d05c1e5128" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="listing-title-1598536599">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1598536599" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LTc9d21642aa001172befa2526849e861948c3cfe4">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li><li class="wt-block-grid__item"><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-6 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-4
           

            wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between
            listing-card-experimental-style" data-palette-listing-id="1055594718" data-shop-id="27595895" data-listing-id="1055594718" data-page-type="cart_recommendations" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1055594718" data-palette-listing-image="" href="https://www.etsy.com/listing/1055594718/sports-clipart-black-cheerleader?click_key=ac35b16904b47cf8562a2e9e45b6e234%3ALT3c22d649738fb8f2b520a22314cd5958a3a1ac29&amp;click_sum=c7b42294&amp;ls=r&amp;ref=also_bought-10&amp;sts=1&amp;dd=1&amp;content_source=ac35b16904b47cf8562a2e9e45b6e234%253ALT3c22d649738fb8f2b520a22314cd5958a3a1ac29" data-listing-link="" data-impression-attribution-key="" data-impression-id="1055594718" data-impression-type="listing" data-display-loc="w.1-5" data-index="4" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT3c22d649738fb8f2b520a22314cd5958a3a1ac29" target="etsy.1055594718" title="Sports Clipart: Black Cheerleader Silhouette Jumping Up in the Air with Bent Knees and Two Pom Poms - Digital Download svg png dxf pdf jpg">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01
             placeholder-landscape 
                 wt-mb-xs-1 
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape 
                
                
                ">
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute 
         
        
        
        also_bought-10" alt="Sports Clipart: Black Cheerleader Silhouette Jumping Up in the Air with Bent Knees and Two Pom Poms - Digital Download svg png dxf pdf jpg" src="https://i.etsystatic.com/27595895/r/il/9b967c/5562851710/il_340x270.5562851710_o7qw.jpg" srcset="https://i.etsystatic.com/27595895/r/il/9b967c/5562851710/il_340x270.5562851710_o7qw.jpg 340w,https://i.etsystatic.com/27595895/r/il/9b967c/5562851710/il_680x540.5562851710_o7qw.jpg 680w" sizes="20vw" />


            </div>
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 " id="listing-title-1055594718">
                Sports Clipart: Black Cheerleader Silhouette Jumping Up in the Air with Bent Knees and Two Pom Poms - Digital Download svg png dxf pdf jpg
            </h3>

                    <div class=" wt-display-flex-xs">
                <span class="wt-icon wt-flex-shrink-xs-0 wt-icon--core wt-icon--smaller-xs star-seller-shop-name wt-fill-star-seller-dark" data-star-seller-badge="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
        <p class="wt-text-caption wt-text-truncate cTu0XRYS2t wt-mb-xs-1" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="bsm0vib8s">vertisement</span> by ClipartWarehouse
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="b3a97a3bb">vertisement</span> from shop ClipartWarehouse</span>
              <span class="bvfko7q02" aria-hidden="true">
                    ClipartWarehouse
              </span>
              <span class="bvfko7q02 wt-screen-reader-only">From shop ClipartWarehouse</span>
        </p>
</div>
            
                        
            
                           <div class="n-listing-card__price  wt-display-block
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.06</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
        <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray wt-text-caption">
        Digital Download
    </p>
</div>
</div>
    </a>
            <div class="wt-mt-xs-1  wt-display-flex-xs wt-flex-wrap wt-align-items-center row-gap-2">
                <span class="wt-mr-xs-2"><form action="/cart/listing.php" method="post" class="wt-display-inline-block " data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT3c22d649738fb8f2b520a22314cd5958a3a1ac29">
    <input type="hidden" name="listing_id" value="1055594718" />
    <input type="hidden" name="listing_title" value="Sports Clipart: Black Cheerleader Silhouette Jumping Up in the Air with Bent Knees and Two Pom Poms - Digital Download svg png dxf pdf jpg" />
    <input type="hidden" name="listing_url" value="https://www.etsy.com/listing/1055594718/sports-clipart-black-cheerleader" />
    <input type="hidden" name="quantity" value="1" />
    <input type="hidden" name="ref" value="search_lc_cart_og" />
    <input type="hidden" name="show_listing_disclaimer" value="true" />
    <input type="hidden" name="show_cart_edit_panel" value="false" />
    <input type="hidden" name="is_pl" value="false" />
    <input type="hidden" name="plkey" value="ac35b16904b47cf8562a2e9e45b6e234:LT3c22d649738fb8f2b520a22314cd5958a3a1ac29" />
    <input type="hidden" name="platc" value="true" />
    <input type="hidden" name="ad_click_type" value="add_to_cart" />
    <input type="hidden" name="listing_source" value="recs" />
    <input type="hidden" name="logging_key" value="ac35b16904b47cf8562a2e9e45b6e234:LT3c22d649738fb8f2b520a22314cd5958a3a1ac29" />
    <input type="hidden" name="_nnc" value="3:1763127319:nYFMOinP70X2M_LKAwVz4wRSK3EO:81ac161e1c08c4b157ab8405103b5b8e22c8c7eb4ea6be697a6e822e1ac380df" class="wt-display-none" />

        <button type="submit" class="wt-btn wt-btn--secondary wt-btn--small 
" data-listing-card-add-to-cart="" aria-describedby="listing-title-1055594718">
                <span class="wt-icon wt-icon--smaller-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg></span>
            <span class="wt-vertical-align-middle">Add to cart</span>
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

        </button>

</form></span>
                <span></span>
            </div>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1055594718" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="ac35b16904b47cf8562a2e9e45b6e234:LT3c22d649738fb8f2b520a22314cd5958a3a1ac29">
            <div class="favorite-listing-button-icon-container should-animate " data-source="cart_recommendations" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div></li>
    </ul>
</div>
</div>
                </div>
            
        </div>

        

        <div data-wt-overlay="" id="user-lists-overlay" class="wt-overlay wt-display-none wt-position-fixed wt-position-bottom wt-overlay--has-close-icon collection-list-overlay " role="dialog" aria-hidden="true" aria-modal="false" aria-labelledby="collection-modal-title" data-animations="{ &quot;open&quot;: { &quot;mask&quot;: &quot;wt-animated wt-animated--appear-02&quot;, &quot;content&quot;: &quot;wt-animated wt-animated--appear-02&quot; }, &quot;close&quot;: { &quot;mask&quot;: &quot;wt-animated wt-animated--disappear-02&quot;, &quot;content&quot;: &quot;wt-animated wt-animated--disappear-02&quot; } }">
    <div class="wt-overlay__modal collection-list-overlay-view wt-display-flex-xs wt-pb-xs-0 wt-pb-md-4 " data-overlay-modal="">
        <div data-collection-list="" data-max-characters="50" class="favorites-modal-collection-list wt-width-full">
    <button class="wt-btn wt-btn--icon wt-btn--tertiary wt-btn--light  wt-overlay__close-icon
        " data-wt-overlay-close="" data-overlay-initial-focus="" aria-label="Close">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg></span>
    </button>
    <div data-collection-list-section="" class="favorites-modal--collection-list-section wt-position-relative wt-flex-direction-column-xs wt-height-full wt-align-items-center">
        <div class="wt-overlay__header wt-display-flex-xs wt-align-items-center wt-justify-content-center ">

            <img src="https://www.etsy.com/images/grey.gif" alt="An image of the listing you can save" class="wt-mr-xs-2 wt-mr-md-3 add-to-list-overlay--img" />

            <h2 class="wt-text-heading" id="collection-modal-title">
                <span data-collections-modal-title="" class="">
                    Add to collection
                </span>
                <span data-registry-modal-title="" class="wt-display-none">
                    Add to registry
                </span>
            </h2>
        </div>
        <div class="collection-list-loading-container" data-spinner-container="">
            <div class="wt-spinner wt-spinner--02">
                <div>Loading</div>
            </div>
        </div>
        <div class="wt-display-none collection-list-loading-container" data-collection-list-fail-state="">
            <div class="wt-vertical-center wt-text-center-xs wt-sem-text-secondary">
                <p>Hmm, something went wrong.</p>
                <p>Try that again.</p>
            </div>
        </div>
        <fieldset class="wt-max-width-full wt-pr-xs-2 wt-overflow-scroll">
            <div class="wt-display-none wt-width-full wt-action-group wt-action-group--image wt-list-inline wt-mb-xs-0" data-collection-list-content="">
                <span class="wt-p-xs-0 wt-width-full wt-mb-xs-2">
                    <input type="checkbox" id="create_new_list" hidden="" />
                    <label role="button" tabindex="0" data-add-list-trigger="" class="add-to-list-overlay-row wt-width-full wt-display-flex-xs wt-align-items-center">
                        <div class="add-list--trigger add-to-list-overlay-row--icon wt-sem-text-on-surface-dark wt-rounded-02 wt-overflow-hidden wt-display-flex-xs wt-justify-content-center wt-align-items-center">
                            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,20,11Z"></path></svg></span>
                        </div>
                        <p class="wt-pl-xs-2 wt-text-title-01">
                            Create new collection
                        </p>
                    </label>
                </span>
                
                
                
            </div>
        </fieldset>
        <div class="wt-overlay__sticky-footer-container wt-bt-xs wt-width-full">
            <div class="wt-overlay__footer wt-justify-content-flex-end wt-pt-md-4">
                <div class="wt-overlay__footer__action">
                    <button type="button" class="wt-btn wt-btn--primary wt-pr-md-7 wt-pl-md-7" data-wt-overlay-close="">Done</button>
                </div>
            </div>
        </div>
    </div>
    <div class="wt-display-none" data-add-collection-section="" data-listing-id="">
        <div data-collection-list-add="">
    <div class="wt-overlay__header">
        <h3 class="wt-text-heading wt-text-center-xs">
            Create new collection
        </h3>
    </div>
    <div class="wt-display-flex-xs wt-flex-direction-row-xs wt-align-items-baseline">
        <div class="wt-validation wt-width-full">
            <label class="wt-label" for="edit-list">Name</label>
            <input data-add-collection-input="" autofocus="" aria-invalid="false" type="text" class="wt-input" id="edit-list" placeholder="Gifts, Home, Wedding, etc." />
            <div class="wt-display-flex-xs wt-justify-content-space-between">
                <div>
                    <div data-duplicated-name-alert="" data-error="duplicate_name" class="wt-validation__message wt-validation__message--is-hidden wt-sem-text-critical">You've already used that name</div>
                    <div data-too-long-alert="" data-error="too_long" class="wt-validation__message wt-validation__message--is-hidden wt-sem-text-critical">
                        Collection name is too long
                    </div>
                </div>
                <p class="wt-text-right-xs wt-sem-text-secondary wt-mt-md-1" data-character-count="">50</p>
            </div>
        </div>
    </div>
    <div class="wt-display-flex-sm wt-flex-direction-column-xs wt-flex-direction-row-md wt-justify-content-space-between wt-mt-xs-1">
            <div class="wt-mb-xs-5 wt-mb-md-0">
                <legend class="wt-text-title-01 wt-mt-xs-1">
                    Set to private?
                </legend>
                <p class="wt-text-body-01 wt-max-width-sm wt-ml-xs-0">
                    Keep collections to yourself or inspire other shoppers! Keep in mind that anyone can view public collections—they may also appear in recommendations and other places.
                    <a href="https://www.etsy.com/legal/privacy/" target="_blank">View Etsy’s Privacy Policy</a></p>
            </div>
            <div>
                    <div id="collection-privacy-control" class="wt-display-flex-md wt-flex-direction-column-xs wt-align-items-center" data-label-yes="Private" data-label-no="Public" data-selector="toggle-switch">
                        <div data-clg-id="WtSwitchInput" class="wt-switch__wrapper" data-wt-props-small="true" data-wt-props-label-text="Set to private?" data-wt-props-label-type="hidden" data-wt-neu-rendered="">
    
    <div class="wt-switch__frame">
        <input type="checkbox" class="wt-switch wt-switch--small" id="wt-switch-69172fff27648" />
        <label class="wt-switch__toggle" for="wt-switch-69172fff27648">
            <span class="wt-screen-reader-only">
                Set to private? 
            </span>
        </label>
    </div>
    
</div>

                        <div class="wt-display-flex-xs wt-flex-direction-row-reverse-xs wt-align-items-center wt-justify-content-flex-end wt-nudge-t-2">
                            <span data-toggle-private-text="" class="wt-text-body">
                                Public
                            </span>
                            <span class="etsy-icon wt-icon--smaller-xs wt-mr-xs-1 wt-display-none" data-toggle-private-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 13v5h-2v-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.25A.25.25 0 0 1 4.25 9H7.5V6.5a4.5 4.5 0 0 1 9 0V9h3.25a.25.25 0 0 1 .25.25V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM9.5 6.5a2.5 2.5 0 0 1 5 0V9h-5zM8 20a2 2 0 0 1-2-2v-7h12v7a2 2 0 0 1-2 2z"></path></svg></span>
                            <span class="etsy-icon wt-icon--smaller-xs wt-mr-xs-1" data-toggle-public-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2M9 18.883v.528a7.94 7.94 0 0 1-4.94-8.351l3.385 3.385a2.967 2.967 0 0 0 1.649 4.4zM17.5 15q.252 0 .5-.05V15a.99.99 0 0 0 .927.985A8 8 0 0 1 12 20c-.216 0-.427-.016-.639-.032l1.254-2.5-.015.006a2.97 2.97 0 0 0-.08-3.11A2.988 2.988 0 0 0 8 13.78V11h1a1 1 0 0 0 1-1V9a1 1 0 0 0 1-1 1 1 0 1 0 0-2H6.726A7.9 7.9 0 0 1 14 4.263V6a1 1 0 0 0 2 0v-.918a8 8 0 0 1 2 1.649V7h-1a1 1 0 1 0 0 2h2.411q.196.49.326 1H17a2.556 2.556 0 0 0-2 2.5 2.5 2.5 0 0 0 2.5 2.5"></path></svg></span>
                        </div>
                    </div>
            </div>
        </div>
    <div data-collection-list-add-footer="">
        <div class="wt-overlay__footer">
            <div class="wt-overlay__footer__cancel">
                <button type="button" class="wt-btn wt-btn--transparent wt-btn--transparent-flush-left wt-btn--transparent-flush-right" data-overlay-back="">Cancel</button>
            </div>
            <div class="wt-overlay__footer__action">
                <button type="button" class="wt-btn wt-btn--primary" data-add-collection-button="" disabled="true">
                    Create collection
                </button>
            </div>
        </div>
    </div>
</div>
<div class="wt-overlay wt-overlay--alert" id="make-public-list-modal" data-wt-overlay="" aria-hidden="true" role="alertdialog" aria-modal="false">
    <div class="wt-overlay__modal" data-overlay-modal="">
        <div class="wt-overlay__header">
            <h2 class="wt-text-heading wt-text-center-xs">
                Make your collection public?

            </h2>
        </div>
        <div class="wt-display-flex-xs wt-justify-content-space-between">
            <div>
                <p>
                    Public collections can be seen by the public, including other shoppers, and may show up in recommendations and other places.
                </p>
            </div>
        </div>
        <div class="wt-overlay__footer">
            <div class="wt-overlay__footer__cancel">
                <button type="button" data-selector="cancel-make-public-button" class="wt-btn wt-btn--transparent wt-btn--transparent-flush-left wt-btn--transparent-flush-right">Cancel</button>
            </div>
            <div class="wt-overlay__footer__action">
                <button type="button" data-selector="make-public-button" class="wt-btn wt-btn--primary">Make Public</button>
            </div>
        </div>
    </div>
</div>
    </div>
</div>
    </div>
</div>
        
        <div class="wt-overlay wt-overlay--peek" id="conditional-sale-interstitial-overlay" aria-hidden="true" data-wt-overlay="" role="dialog" aria-modal="false" aria-label="">
    <div class="wt-overlay__modal" data-overlay-modal="">
        <button type="button" class="wt-btn wt-btn--transparent wt-btn--icon wt-overlay__close-icon wt-btn--light" data-wt-overlay-close="">
            <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3.793 5.207 10.586 12l-6.793 6.793 1.414 1.414L12 13.414l6.793 6.793 1.414-1.414L13.414 12l6.793-6.793-1.414-1.414L12 10.586 5.207 3.793z"></path></svg></span>
        </button>

        <div data-conditional-sale-content=""></div>
        <div data-conditional-sale-loading="" class="wt-width-full wt-height-full wt-z-index-3">
            
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--02" aria-live="assertive">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle fill="transparent" cx="24" cy="24" r="21"></circle></svg></span>
        Loading
    </div>

        </div>
        <div data-conditional-sale-load-failure="">
            <div data-clg-id="WtBanner" class="wt-banner wt-banner--warning-01" id="etsywebtoolkitbannerswtbanner69172fff26af1" data-prop-id="etsywebtoolkitbannerswtbanner69172fff26af1" data-prop-type="static" data-prop-style-type="warning-01" data-prop-is-open="true" data-wt-neu-rendered="">
    <div data-clg-id="WtBannerContent" class="wt-banner__layout">
    <div class="wt-display-flex-xs wt-align-items-center">
        <div class="wt-banner__icon-frame wt-hide-xs wt-show-sm ">
            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.035 2.627a2 2 0 0 1 3.93 0 6.7 6.7 0 0 1 4.56 4.905L21 18.333H3L5.475 7.532a6.7 6.7 0 0 1 4.56-4.905m1.921 1.706a4.694 4.694 0 0 0-4.531 3.645L5.51 16.333h12.98l-1.915-8.355a4.694 4.694 0 0 0-4.531-3.645z"></path><path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2"></path></svg></span>
        </div>
        <div>
            <div>
                <p class="wt-banner__title">
                    There was a problem loading the content
                </p>
            </div>
        </div>
    </div>
    <div class="wt-banner__buttons">
        <button data-clg-id="WtButton" class="wt-btn wt-btn--primary wt-btn--small" data-wt-banner-cta-button="" type="button">
    Try again
</button>

    </div>
</div>
</div>
        </div>

    </div>
</div>
        <div data-clg-id="WtOverlay" class="wt-overlay wt-overlay--large wt-overlay--has-close-icon" id="mix-and-match-overlay" aria-hidden="true" aria-modal="false" role="alertdialog" aria-label="Are you sure you want to remove this bundle listing?" data-wt-overlay="">
    <div class="wt-overlay__modal" data-overlay-modal="">
            <button type="button" class="wt-btn wt-btn--transparent wt-btn--icon wt-overlay__close-icon wt-btn--light" aria-label="Close" data-wt-overlay-close="">
                <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg></span>
            </button>
        <div data-clg-id="WtOverlayHeader" class="wt-overlay__header">
        <h1 class="wt-text-heading" data-overlay-initial-focus="">
      Are you sure?
    </h1>

</div>
  <div id="mix-and-match-overlay-body">
  </div>

  <div id="mix-and-match-overlay-spinner" class="wt-mt-xs-2 wt-mb-xs-2">
    
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--02" aria-live="assertive">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle fill="transparent" cx="24" cy="24" r="21"></circle></svg></span>
        Loading
    </div>

  </div>

    </div>
</div> */}
    </div>
</div>
        </main>



      <Footer />
    </div>
  );
};

export default Cart2;
