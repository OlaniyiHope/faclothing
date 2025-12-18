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

const navigate = useNavigate();
const { user } = useContext(AuthContext);
const isLoggedIn = !!user;


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
        {/* <ul class="cart-list-items wt-grid__item-xs-12 wt-grid__item-sm-12 wt-p-xs-0 wt-pr-md-3 wt-height-full wt-list-unstyled wt-grid__item-lg-8 wt-grid__item-md-7">
            <li class="condensed-desktop-cart wt-mt-xs-3 wt-mt-md-5" data-multi-shop-cart-single="" multi-shop-eligible="">
    <div class="wt-rounded-02 wt-b-xs">
        <div>
            <div class="wt-pt-xs-4 wt-pl-xs-4 wt-pr-xs-4 wt-pb-xs-1">
                <input type="hidden" name="cart_ids[]" value="12541074043" />


                <div class="shop-details wt-mb-xs-3">
    <div class="wt-display-flex-xs wt-justify-content-space-between wt-align-items-center desktop__shop-details--height wt-width-full">
        <div class="wt-display-flex-xs wt-align-items-center">
            <div class="wt-pr-lg-1">
                <a class="wt-display-flex-xs wt-align-items-center" href="https://www.etsy.com/shop/ClipartWarehouse?ref=cart_shop_avatar_click&amp;cart_id=12541074043" title="ClipartWarehouse" aria-label="shop-ClipartWarehouse" tabindex="-1">
                    <img class="wt-rounded" src="https://i.etsystatic.com/27595895/r/isla/dff775/48479231/isla_75x75.48479231_dpt6iel5.jpg" width="32" height="32" alt="ClipartWarehouse" data-selector="shop-avatar" />
                </a>
            </div>
            <div class="wt-pl-xs-1">
                <p class="wt-text-title">
                    <a class="wt-sem-text-primary wt-text-link-no-underline" href="https://www.etsy.com/shop/ClipartWarehouse?ref=cart_shop_name_click&amp;cart_id=12541074043" aria-label="shop-ClipartWarehouse" data-selector="shop-name">
                        ClipartWarehouse
                    </a>
                </p>
            </div>
                            <div class="wt-pl-xs-2 wt-display-flex-xs wt-align-items-center">
                                <div data-appears-component-name="cart_shop_ratings_signal" data-appears-event-data="{&quot;num_shops_in_cart&quot;:1,&quot;rating&quot;:&quot;4.9&quot;}">
<div class="wt-no-wrap appears-ready" data-review-ratings-count="" data-rating="4.9" data-shop-id="27595895">
        <a href="https://www.etsy.com/listing/1226534278/sports-clipart-black-bold-word-dance-w?ref=cart#reviews" data-click-source="rating_reviews_signal" class="rating-and-reviews-count wt-display-flex-xs wt-align-items-center wt-text-link-no-underline">
            <span class="wt-icon wt-icon--smaller-xs rating-and-reviews-count__icon wt-nudge-b-1 wt-fill-beeswax"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path></svg></span> 
                <span class="rating-and-reviews-count__avg-rating wt-text-title-small">4.9</span>
                    <span class="rating-and-reviews-count__reviews-count wt-text-body-small wt-text-gray">
                        (17.4k)
                    </span>
        </a>
</div>
</div>
                            </div>
        </div>
                    <div class="wt-mt-xs-1 wt-ml-xs-1 wt-block-grid__item wt-display-flex-xs wt-flex-direction-column-xs wt-align-items-center">
<div data-clg-id="WtMenu" class="wt-menu " data-wt-menu="" data-dg-example="dg-menu-example-neu--direction" data-hide-trigger-on-open="false" data-animate-in="true" data-close-on-select="true" data-contain-focus="false" data-open-direction-vert="bottom" data-open-direction-horiz="right" data-open-direction-force="false" data-menu-type="action">
                            <button data-clg-id="WtMenuTrigger" type="button" class="wt-menu__trigger wt-btn wt-btn--small wt-btn--transparent wt-btn--icon" aria-haspopup="true" aria-expanded="false" data-wt-menu-trigger="" aria-label="Top left menu">
        <span class="wt-icon wt-menu__trigger__label wt-nudge-b-1 wt-icon--smaller"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12.001" r="2.999"></circle><circle cx="3" cy="12.001" r="2.999"></circle><circle cx="21" cy="12.001" r="2.999"></circle></svg></span>
        
</button>
<div data-clg-id="WtMenuBody" role="menu" class="wt-menu__body " data-wt-menu-body="">
                                <button rel="nofollow" class="wt-menu__item contact-action convo-overlay-trigger inline-overlay-trigger wt-justify-content-flex-start" type="button" role="menuitemradio" tabindex="-1" data-to_username="ynx0ukxa9vrhjy66" data-to_user_id="436973908" data-to_user_display_name="Clipart (ynx0ukxa9vrhjy66)" data-referring_type="cart" data-referring_id="12541074043" data-subject="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG" data-message="https://www.etsy.com/listing/1226534278/sports-clipart-black-bold-word-dance-w" href="https://www.etsy.com/messages/new?with_id=436973908&amp;referring_id=12541074043&amp;referring_type=cart&amp;subject=Sports+Clipart%3A+Black+Bold+Word+%26quot%3BDance%26quot%3B+w%2F+Three+Different+Dancer+%2F+Ballerina+Pastel+Silhouettes+Layered+on+Top+-+Digital+Download+SVG+%26+PNG&amp;message=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1226534278%2Fsports-clipart-black-bold-word-dance-w&amp;recipient_id=436973908" aria-label="Contact shop">
   <span class="etsy-icon wt-icon--base wt-vertical-align-middle wt-nudge-b-1 wt-mr-xs-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8.65l4.73 3.78a1 1 0 0 0 1.4-.15A1 1 0 0 0 18 20v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 12.05h-4V18l-3.38-2.71a.92.92 0 0 0-.62-.22H4V5h16zM8 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1z"></path></svg></span>
   
     Contact shop
   
   
</button>
                            <button type="button" role="menuitem" class="wt-menu__item" tabindex="-1" aria-controls="note-to-seller-input-ClipartWarehouse" data-selector="note-to-seller-toggle-button" data-wt-content-toggle="" aria-expanded="false">
                                <span class="etsy-icon wt-icon--smaller wt-nudge-b-1 wt-mr-xs-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,20,11Z"></path></svg></span>
                                Add a note about this order
                            </button>

</div>
</div>                    </div>
    </div>
</div>

                <div id="note-to-seller-input-ClipartWarehouse" class="wt-content-toggle__body wt-flex-basis-xs-full wt-flex-basis-md-0 wt-flex-xs-1 wt-order-xs-1" aria-hidden="true" tabindex="-1">
                    <textarea form="single-shop-checkout-form-12541074043" data-note-to-seller="" aria-label="Add a note to ClipartWarehouse (optional)" name="message_to_seller" placeholder="Add a note to ClipartWarehouse (optional)" rows="1" class="wt-textarea wt-width-full wt-mb-xs-3 wt-text-body-small"></textarea>
                </div>

            </div>

            <ul class="wt-list-unstyled wt-pl-xs-4 wt-pr-xs-4 wt-mb-xs-3">
                <li class="wt-mb-xs-4" data-cart-listing="" data-listing-id="1226534278" data-listing-customization-id="0" data-listing-inventory-id="9826476954" data-listing-unit-price="1.06" data-listing-regular-price="1.06" data-listing-quantity="1" data-listing-title="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG" data-listing-available="true" data-is-personalizable="false" data-has-variation-options="false">
    <div class="wt-display-flex-xs wt-pt-xs-1 wt-pt-md-0">
        <div class="wt-flex-xs-1">
            <a href="https://www.etsy.com/listing/1226534278/sports-clipart-black-bold-word-dance-w?ref=cart" tabindex="-1" aria-label="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG (This link opens in a new tab or window)" target="_blank">
                <img src="https://i.etsystatic.com/27595895/r/il/79cb49/3901475194/il_340x270.3901475194_jh51.jpg" class="wt-width-full wt-rounded-01 wt-overflow-hidden wt-display-block" alt="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG" data-selector="listing-thumbnail" />
            </a>
        </div>

        <div class="wt-flex-xs-3 wt-pl-xs-2 wt-break-word simplified-cart-min-width-0 wt-pl-md-3">
            <div class="wt-grid wt-height-full">
                <div class="wt-grid__item-xs-12 
                wt-grid__item-md-8 wt-display-flex-xs wt-flex-direction-column-xs">
                    <div>
                    <div data-message-container-listing=""></div>
                    
                    
                    <p data-listing-title-wrapper="" class="wt-display-flex-xs wt-flex-direction-column-xs wt-pb-xs-1">
                        <a class="wt-text-link-no-underline wt-text-body wt-text-truncate" href="https://www.etsy.com/listing/1226534278/sports-clipart-black-bold-word-dance-w?ref=cart" data-title="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG" aria-label="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG (This link opens in a new tab or window)" target="_blank" data-listing-title="">
                                Sports Clipart: Black Bold Word "Dance" w/ SVG &amp; PNG
                        </a>
                    </p>

                    

                    </div>


                            <div class="item-numbers-full-width wt-height-full">
        <div class="wt-height-full wt-display-flex-xs wt-flex-direction-column-xs wt-justify-content-space-between">
        <div class="wt-display-none wt-ml-xs-0 wt-spinner wt-spinner--01" data-property-list-variations-loading="">
            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
            Loading
        </div>
            <div class="wt-display-flex-xs wt-mb-xs-1">
                <span class="wt-badge wt-badge--statusInformational wt-mr-xs-1 wt-text-truncate wt-badge--small">
            <span class="etsy-icon wt-icon--smallest-xs wt-vertical-align-bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17,9c-0.034,0-.066.009-0.1,0.01A5,5,0,0,0,7,10c0,0.017,0,.034.005,0.051A4.433,4.433,0,0,0,6.5,10,4.488,4.488,0,0,0,6,18.95V19H17A5,5,0,0,0,17,9Zm-1.293,5.707-3,3,0,0L12,18.414l-0.706-.706,0,0-3-3a1,1,0,0,1,1.414-1.414L11,14.586V10a1,1,0,1,1,2,0v4.586l1.293-1.293A1,1,0,0,1,15.707,14.707Z"></path></svg></span>
            Instant Download
        </span>
            <span class="wt-badge wt-badge--statusInformational wt-mr-xs-1 wt-text-truncate wt-badge--small">
                1 PDF, 1 PNG, 2 other files included
            </span>
            </div>
                <div class="wt-display-flex-xs wt-mb-xs-3">
                    <ul data-clg-id="WtList" class="wt-list wt-list-unstyled wt-width-full" id="cart-personalizations" role="list"></ul>
                </div>
            <div data-appears-component-name="cart_scarcity" data-appears-event-data="{&quot;id&quot;:83,&quot;event_identifier&quot;:&quot;cart_scarcity&quot;,&quot;legacy_event_identifier&quot;:null,&quot;candidate_signal_identifiers&quot;:[&quot;recently_purchased_and_quantity&quot;,&quot;recently_purchased_and_carts&quot;,&quot;recently_purchased_and_views&quot;,&quot;recently_purchased&quot;,&quot;rare_find_and_cart_combo&quot;,&quot;almost_gone_and_cart_combo&quot;,&quot;lp_scarcity_with_views&quot;,&quot;quantity_only&quot;,&quot;views_and_cart&quot;,&quot;in_cart_only&quot;,&quot;rare_find_and_views&quot;,&quot;lp_views_only&quot;,&quot;only_one_available&quot;],&quot;ranking_event_identifier&quot;:&quot;default_ranking&quot;,&quot;page_or_screen&quot;:&quot;cart&quot;,&quot;listing_id&quot;:1226534278,&quot;data_aggregate_identifier&quot;:null,&quot;data_aggregate&quot;:null,&quot;signals&quot;:[{&quot;id&quot;:61,&quot;event_identifier&quot;:&quot;views_and_cart&quot;,&quot;title&quot;:&quot;In 9 carts with 3 views&quot;,&quot;body&quot;:null,&quot;icon_identifier&quot;:null,&quot;optional_content&quot;:null},{&quot;id&quot;:57,&quot;event_identifier&quot;:&quot;in_cart_only&quot;,&quot;title&quot;:&quot;Already in 9 carts!&quot;,&quot;body&quot;:null,&quot;icon_identifier&quot;:null,&quot;optional_content&quot;:null},{&quot;id&quot;:59,&quot;event_identifier&quot;:&quot;lp_views_only&quot;,&quot;title&quot;:&quot;3 views!&quot;,&quot;body&quot;:null,&quot;icon_identifier&quot;:null,&quot;optional_content&quot;:null}]}">
<span class="wt-sem-text-critical wt-line-height-tight wt-pb-xs-1 wt-text-body-small appears-ready">In 9 carts with 3 views</span>
</div>
        <p class="wt-pt-xs-1 pb-xs-1">
        </p>
    <div class="wt-grid wt-align-items-baseline">
            <div class="">
                <input type="hidden" value="1" aria-label="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG" data-quantity-value="" />
            </div>
        <div class="wt-display-flex-xs wt-no-wrap">
            
            <div class="wt-mr-xs-0">
        <a href="" role="button" rel="save-for-later-guest" class="inline-overlay-trigger save-for-later-action" data-listing-key="12541074043|1226534278|9826476954|0">
            <span class="wt-btn wt-btn--small wt-btn--transparent wt-btn--transparent-flush-left">
                Save for later
            </span>
        </a>
    </div>
<div class="wt-pr-xs-1">
    <a href="#" rel="remove" role="button" aria-label="Remove listing">
        <span class="wt-btn wt-btn--small wt-btn--transparent">
            Remove
        </span>
    </a>
</div>
        </div>
    </div>
</div>
    
    
    
</div>
                </div>
                    <div class="wt-grid__item-xs-4 wt-hide-xs wt-show-md wt-pl-xs-3">
                        <div class="wt-grid">
            <div class="wt-grid__item-xs-12">
                <div class="wt-text-right-xs">
                    <p class="wt-text-title-large"><span class="money"><span class="currency-symbol">USD </span><span class="currency-value">1.06</span></span></p>
                </div>
            </div>
</div>
                    </div>
            </div>
        </div>
    </div>
</li>
            </ul>


            <div class="wt-display-flex-xs wt-flex-wrap wt-flex-direction-row-xs wt-pr-xs-4">
                <div class="wt-display-flex-xs wt-flex-direction-column-xs">
                            
                </div>
                <div class="wt-width-full wt-display-flex-xs wt-justify-content-space-between wt-flex-direction-row-reverse-xs">
                </div>
            </div>
        </div>
    </div>
</li>
        </ul> */}


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
  <div>Qty: {item.quantity}</div>
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

                

                <fieldset class="wt-mt-xs-1">
                        <legend class="wt-text-title-01">
                            <a href="/checkout">      How you'll pay</a>

                      
                        </legend>



                    
                    <ul class="wt-list-unstyled wt-mt-xs-2">
        <li class="apple_pay wt-display-none">
            <div class="wt-radio wt-mb-xs-2 wt-mb-lg-1">
                <input type="radio" id="851e5f8_multiple_payment_method_apple_pay" name="payment_method" autocomplete="off" value="apple_pay" />
                <label for="851e5f8_multiple_payment_method_apple_pay">
                    <span class="wt-radio-label" aria-hidden="true">
                        <div class="wt-display-inline-block">
        <span class="inline-svg svg-payment-icon wt-p-xs-1 wt-display-none" data-apple-pay-icon=""><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 25" aria-labelledby="paymentsapplepay-apple-pay" role="img" focusable="false"><title id="paymentsapplepay-apple-pay">Apple Pay</title><path d="M47.962 6.717l-2.802 7.62c-.175.46-.34.924-.488 1.376-.072.225-.14.438-.208.64h-.053c-.066-.21-.137-.432-.214-.664-.146-.448-.302-.887-.462-1.305l-2.997-7.668h-1.603l4.288 11.024c.112.266.128.387.128.437 0 .015-.005.105-.13.44-.268.66-.576 1.23-.91 1.69-.344.47-.658.85-.94 1.13-.324.325-.66.592-1.003.794-.35.207-.667.374-.948.5l-.163.072.52 1.27.167-.062c.136-.05.39-.168.778-.357.39-.192.824-.498 1.286-.91.397-.347.76-.758 1.082-1.22.317-.454.634-.987.945-1.58.307-.59.614-1.264.914-2 .3-.74.62-1.568.954-2.457l3.463-8.77h-1.605zm-11.72 8.095c0 .16-.038.38-.11.644-.093.274-.228.545-.404.804-.175.256-.395.49-.655.697-.26.205-.568.37-.92.49-.35.123-.755.184-1.203.184-.27 0-.536-.045-.79-.133-.252-.09-.475-.223-.666-.4-.19-.174-.348-.4-.468-.675-.118-.273-.178-.61-.178-1.004 0-.644.173-1.166.513-1.548.352-.397.803-.702 1.34-.907.547-.21 1.156-.35 1.81-.413.53-.05 1.05-.076 1.543-.076h.19v2.338zm1.526 2.343c-.016-.465-.023-.933-.023-1.398v-4.574c0-.542-.055-1.095-.162-1.644-.11-.562-.32-1.077-.622-1.53-.305-.46-.732-.838-1.266-1.126-.536-.287-1.23-.433-2.067-.433-.61 0-1.208.08-1.77.237-.57.16-1.125.424-1.66.79l-.12.083.507 1.187.184-.124c.388-.26.823-.47 1.3-.618.475-.146.958-.22 1.44-.22.627 0 1.127.112 1.483.337.363.226.636.506.812.833.184.338.304.697.357 1.07.055.39.083.737.083 1.035v.133c-2.227-.01-3.965.36-5.12 1.104-1.21.78-1.826 1.89-1.826 3.3 0 .406.073.816.216 1.22.145.41.366.774.655 1.087.29.317.665.575 1.114.767.448.196.973.295 1.56.295.467 0 .903-.06 1.3-.176.393-.12.75-.276 1.06-.47.31-.193.584-.41.818-.643.107-.104.197-.21.286-.315h.058l.14 1.335h1.446l-.04-.215c-.077-.425-.125-.87-.142-1.327zM26.145 9.59c-.77.647-1.863.975-3.248.975-.38 0-.74-.016-1.07-.047-.275-.027-.528-.07-.756-.127V3.397c.2-.037.445-.07.733-.103.366-.04.807-.06 1.312-.06.625 0 1.203.076 1.716.224.51.146.953.364 1.32.646.36.28.644.643.84 1.08.2.444.298.973.298 1.57 0 1.246-.385 2.2-1.143 2.838zm1.38-6.282c-.47-.453-1.075-.805-1.798-1.047-.718-.237-1.58-.358-2.563-.358-.68 0-1.313.033-1.885.098-.565.064-1.09.138-1.56.22l-.15.025v16.452h1.5v-6.93c.507.086 1.086.132 1.724.132.85 0 1.647-.11 2.368-.325.728-.215 1.366-.548 1.897-.99.532-.442.957-.996 1.268-1.647.307-.652.463-1.42.463-2.28 0-.714-.112-1.355-.332-1.907-.222-.553-.535-1.036-.933-1.442zm-14.99 6.867c-.02-2.34 1.91-3.466 2-3.522-1.09-1.583-2.777-1.803-3.38-1.827-1.438-.143-2.81.847-3.537.847-.73 0-1.853-.825-3.05-.8-1.567.023-3.013.912-3.82 2.315-1.626 2.834-.414 7.02 1.173 9.31.778 1.123 1.7 2.383 2.92 2.337 1.17-.045 1.61-.758 3.025-.758 1.413-.002 1.812.756 3.046.735 1.26-.027 2.06-1.146 2.83-2.274.89-1.298 1.256-2.56 1.276-2.624-.025-.014-2.452-.94-2.48-3.74zM9.862 3.31c.645-.782 1.08-1.868.962-2.95-.93.037-2.057.622-2.72 1.4-.6.69-1.12 1.797-.977 2.857 1.035.08 2.09-.527 2.736-1.308z" fill="#0A0B09" fill-rule="evenodd"></path></svg></span>
    
</div>
                    </span>
                    <span class="wt-screen-reader-only">Buy with Apple Pay</span>
                </label>
            </div>
        </li>
        <li>
            <div class="wt-radio wt-mb-xs-2 wt-mb-lg-1">
                <input type="radio" id="851e5f8_multiple_payment_method_credit_card" name="payment_method" autocomplete="off" value="cc" checked="checked" />
                <label for="851e5f8_multiple_payment_method_credit_card">
                    <span class="wt-radio-label" aria-hidden="true">
                        <div class="wt-display-inline-block">
        <span class="inline-svg svg-payment-icon wt-p-xs-1"></span>
    
        <span class="inline-svg svg-payment-icon svg-payment-icon-p-2"></span>
    
        <span class="inline-svg svg-payment-icon svg-payment-icon-p-2"></span>
    
        <span class="inline-svg svg-payment-icon svg-payment-icon-p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" height="100%" viewBox="15 3 1 19" width="100%" aria-labelledby="paymentsdiners-diners" role="img" focusable="false"><path d="m17.9761 8.81728c-.0007-.56637-.1736-1.11926-.496-1.58581-.3223-.46656-.7789-.82491-1.3097-1.02783v5.22736c.5307-.203.9874-.5614 1.3097-1.0279.3223-.46657.4952-1.01945.496-1.58582zm-3.8182 2.61252v-5.22586c-.5309.20252-.9875.5607-1.3096 1.02723s-.4946 1.01945-.4946 1.58568c0 .56624.1725 1.11915.4946 1.58565.3221.4666.7787.8248 1.3096 1.0273zm1.0068-7.03073c-.877.00013-1.7343.25931-2.4635.74477-.7292.48547-1.2975 1.17542-1.633 1.98261-.3356.8072-.4234 1.69539-.2522 2.55227.1711.85688.5935 1.64398 1.2136 2.26178.6202.6177 1.4103 1.0385 2.2704 1.2089.8602.1705 1.7518.0831 2.5621-.2512s1.5029-.9004 1.9902-1.6268.7475-1.58044.7476-2.45412c0-1.17178-.4673-2.29557-1.2991-3.12414-.8317-.82857-1.9598-1.29406-3.1361-1.29407zm-.0109 9.25253c-2.6804.0124-4.8864-2.1505-4.8864-4.78392 0-2.87771 2.206-4.8683 4.8864-4.8677h1.2563c2.6485-.0006 5.0659 1.98879 5.0659 4.8677 0 2.63222-2.4174 4.78392-5.0659 4.78392z" fill="#0b4f95"></path><path clip-rule="evenodd" d="m12.7012 5.14384c.7292-.48546 1.5865-.74464 2.4635-.74477 1.1763.00001 2.3044.4655 3.1361 1.29407.8318.82857 1.2991 1.95236 1.2991 3.12414-.0001.87368-.2603 1.72772-.7476 2.45412s-1.1799 1.2925-1.9902 1.6268-1.7019.4217-2.5621.2512c-.8601-.1704-1.6502-.5912-2.2704-1.2089-.6201-.6178-1.0425-1.4049-1.2136-2.26178-.1712-.85688-.0834-1.74507.2522-2.55227.3355-.80719.9038-1.49714 1.633-1.98261zm4.7789 2.08763c.3224.46655.4953 1.01944.496 1.58581-.0008.56637-.1737 1.11925-.496 1.58582-.3223.4665-.779.8249-1.3097 1.0279v-5.22736c.5308.20292.9874.56127 1.3097 1.02783zm-3.3222-1.02753v5.22586c-.5309-.2025-.9875-.5607-1.3096-1.0273-.3221-.4665-.4946-1.01941-.4946-1.58565 0-.56623.1725-1.11915.4946-1.58568s.7787-.82471 1.3096-1.02723z" fill="#fff" fill-rule="evenodd"></path><path d="m4.85413 20.6251c-.13319 0-.29887-.0108-.436-.0108-.13533 0-.29766.0108-.406.0108h-.01213v-.1061h.05066c.10015-.0024.19147-.0105.19207-.1454v-1.4409c-.0006-.1345-.09192-.1436-.19207-.1454h-.05066v-.1058h.01213c.10834 0 .27371.0106.409.0106.13748 0 .30254-.0106.433-.0106h.01213v.1058h-.05035c-.10046.0018-.19238.0109-.19268.1454v1.4409c.0003.1349.09222.143.19268.1454h.05035v.1061z" fill="#231f20"></path><path d="m6.79738 20.6624.11378.0043h.01397l-.00244-.014c-.01233-.0913-.01771-.1835-.01607-.2756v-1.2523c.00334-.3237.11986-.334.23424-.3374h.0534v-.106h-.01244c-.11377 0-.22725.0109-.33923.0109-.12924 0-.25669-.0109-.38688-.0109h-.01243v.106h.07281c.08103.0019.2273.0281.2288.247v1.0117l-1.21342-1.3605c-.09312-.0042-.17325.0067-.25516.0067l-.32984-.0109v.106l.14.0172c.02904.0117.05547.029.07776.0509.02229.022.04.0481.0521.0769.01211.0287.01836.0596.01842.0908v1.1583c-.00244.2195-.05434.3362-.23699.3376h-.05129v.1058h.01213c.12565 0 .25245-.0106.37565-.0106.11803 0 .23699.0106.35621.0106h.01247v-.1058h-.05948c-.20755-.003-.24397-.0707-.24761-.3104v-1.102z" fill="#222"></path><g fill="#231f20"><path d="m7.59164 18.87c-.20724 0-.21483.0496-.2567.2502h-.08253c.01123-.0767.02459-.1538.03339-.2339.01081-.0773.01628-.1553.01636-.2333h.06647c.02215.0825.09102.0792.16567.0792h1.4249c.07435 0 .14352-.0025.1493-.085l.06553.0115c-.01003.0735-.02126.1481-.02974.2225-.00578.074-.00578.1487-.00578.2228l-.0825.0308c-.00549-.1022-.01975-.2648-.20455-.2648h-.45271v1.4636c0 .2125.09681.2363.2291.2363h.0522v.0828c-.10743 0-.30101-.0108-.45001-.0108-.16533 0-.35925.0108-.46694.0108v-.0828h.05249c.15231 0 .22906-.0132.22906-.2303v-1.4696z"></path><path d="m9.34009 20.5311h.03853c.09921 0 .2042-.013.2042-.1565v-1.4409c0-.1436-.10499-.1566-.2042-.1566h-.03853v-.0838c.16778 0 .45606.0115.68721.0115.2325 0 .5192-.0115.7064-.0115-.0045.1188-.0018.3008.0064.4217l-.0834.0221c-.0131-.1787-.0465-.3216-.3365-.3216h-.38298v.7199h.32768c.166 0 .2021-.0927.2182-.2414h.0825c-.0051.1072-.0081.2142-.0081.3216 0 .1049.003.2091.0081.3134l-.0825.0166c-.0161-.165-.0246-.2723-.2154-.2723h-.33048v.6408c0 .179.15958.179.33588.179.332 0 .4779-.0221.5608-.3356l.077.0194c-.0358.1462-.0689.291-.0937.4374-.1763 0-.4943-.0109-.7428-.0109-.24881 0-.57715.0109-.73431.0109z"></path><path d="m11.5494 19.6353h.1347c.2764 0 .4254-.104.4254-.4289.0039-.0537-.0039-.1077-.0228-.1582-.0189-.0504-.0485-.0963-.0867-.1344-.0383-.0381-.0843-.0675-.135-.0864-.0506-.0188-.1048-.0266-.1587-.0227-.0525.0007-.1049.0045-.1569.0111zm-.3535-.6381c0-.201-.1105-.2086-.196-.2086h-.0504v-.0834c.0883 0 .2597.0112.4284.0112.1651 0 .298-.0112.4448-.0112.3472 0 .6564.0937.6564.4848 0 .2473-.1651.3984-.3832.4846l.4724.7033c.0252.0492.0635.0905.1106.1196s.1013.0448.1567.0454v.0829c-.091 0-.1793-.0108-.2704-.0108-.0861 0-.1742.0108-.2597.0108-.2119-.2837-.4038-.5816-.5744-.8917h-.1817v.5888c0 .2125.0989.22.2257.22h.0504v.0829c-.1581 0-.318-.0108-.4755-.0108-.1323 0-.2622.0108-.4005.0108v-.0829h.0504c.1013 0 .196-.0462.196-.1484z"></path><path d="m14.7918 20.0719.0051-.0054v-1.0316c0-.2255-.1572-.2582-.2397-.2582h-.061v-.0834c.1302 0 .2564.0112.3869.0112.1135 0 .2264-.0112.3399-.0112v.0834h-.041c-.1162 0-.2464.0215-.2464.3489v1.2519c-.0018.0928.0036.1856.0161.2775h-.1044l-1.4222-1.5787v1.1329c0 .24.0471.3216.2598.3216h.0473v.0831c-.1192 0-.2382-.0109-.3568-.0109-.1244 0-.2513.0109-.3754.0109v-.0831h.0379c.1912 0 .2489-.1284.2489-.3488v-1.1583c.0001-.0327-.0064-.0651-.019-.0954-.0126-.0302-.0311-.0576-.0545-.0806-.0233-.023-.0511-.0411-.0815-.0533-.0305-.0122-.0631-.0182-.096-.0177h-.0358v-.0834c.1044 0 .213.0112.3175.0112.0825 0 .1626-.0112.2454-.0112z"></path><path d="m16.0407 19.0137h-.0055l-.257.7787h.5161zm-.4027 1.2188c-.0278.0692-.0486.141-.0619.2143 0 .0829.1168.0961.2076.0961h.0306v.0829c-.111-.0055-.2239-.0106-.3347-.0106-.0995 0-.1984.0051-.2976.0106v-.0829h.0161c.054.0002.1065-.0172.1498-.0494.0432-.0322.0748-.0776.0899-.1292l.4423-1.2619c.0432-.1111.0774-.2255.1023-.3419.0876-.0309.1718-.0704.2516-.118.0068-.0031.0143-.0049.0218-.0051.0037-.0006.0074-.0003.0109.0011.0034.0014.0064.0038.0086.0068.0081.0221.0163.0468.0251.0689l.5077 1.4388c.033.0961.0664.1983.1019.2808.0143.0356.0399.0656.0729.0853s.0715.0281.1098.0238h.016v.0829c-.1238-.0055-.2482-.0106-.3804-.0106-.135 0-.2734.0051-.4139.0106v-.0829h.0303c.0631 0 .1709-.0102.1709-.0792-.0105-.0681-.0293-.1347-.0559-.1982l-.1074-.3193h-.6268z"></path><path d="m17.1482 18.8331c-.2076 0-.2155.0495-.257.2502h-.0831c.0111-.0767.0251-.1539.0333-.2339.0112-.0773.0168-.1553.0166-.2334h.0663c.0221.0825.0912.0792.1656.0792h1.4249c.0743 0 .1429-.0024.1487-.0849l.0664.0115c-.0106.0734-.0212.1481-.0303.2224-.0067.0741-.0067.1487-.0067.2228l-.0819.0308c-.0045-.1022-.0192-.2647-.2039-.2647h-.453v1.4635c0 .2125.0967.2364.2294.2364h.0521v.0828c-.1073 0-.3007-.0108-.4499-.0108-.1655 0-.3593.0108-.4673.0108v-.0828h.0527c.1527 0 .2301-.0133.2301-.2303v-1.4696z"></path><path d="m18.8984 20.5287h.0386c.1001 0 .2044-.013.2044-.1566v-1.4409c0-.1435-.1043-.1566-.2044-.1566h-.0386v-.0837c.1078 0 .2731.0115.4085.0115.138 0 .3037-.0115.4341-.0115v.0837h-.0385c-.1001 0-.2055.0131-.2055.1566v1.4409c0 .1436.1054.1566.2055.1566h.0385v.0831c-.1328 0-.2985-.0109-.4366-.0109-.1357 0-.2982.0109-.406.0109z"></path><path d="m20.9191 20.5334c.5364 0 .6291-.4706.6291-.8714 0-.4023-.2174-.8889-.6759-.8889-.483 0-.6265.4289-.6265.797 0 .4927.2263.9633.6733.9633zm-.0412-1.8816c.5883 0 1.0577.3634 1.0577.9495 0 .6327-.4554 1.0531-1.0438 1.0531-.5862 0-1.0323-.3957-1.0323-.9878-.0019-.1338.0231-.2666.0736-.3905.0505-.124.1255-.2366.2204-.3312s.208-.1693.3324-.2196c.1244-.0504.2577-.0753.392-.0735z"></path><path d="m23.793 20.0713.0054-.0054v-1.0316c0-.2255-.1575-.2582-.2413-.2582h-.0594v-.0834c.129 0 .2567.0112.386.0112.1141 0 .227-.0112.3398-.0112v.0834h-.0413c-.1164 0-.2463.0215-.2463.3489v1.2519c-.0015.0928.0042.1856.017.2775h-.1053l-1.4219-1.5787v1.1328c0 .2401.0467.3216.2597.3216h.0468v.0832c-.1187 0-.237-.0109-.3562-.0109-.1241 0-.2516.0109-.376.0109v-.0832h.0391c.1912 0 .248-.1283.248-.3488v-1.1582c.0002-.0328-.0063-.0653-.0189-.0955-.0126-.0303-.0311-.0577-.0545-.0807s-.0512-.0412-.0818-.0533c-.0305-.0122-.0632-.0181-.0961-.0175h-.0358v-.0834c.1053 0 .2127.0112.318.0112.0825 0 .1626-.0112.2455-.0112z"></path><path d="m24.931 19.0011h-.0054l-.257.7787h.5173zm-.4032 1.2188c-.027.0693-.0472.1411-.0603.2143 0 .0828.1167.0961.2065.0961h.031v.0828c-.1107-.0054-.2236-.0106-.3344-.0106-.1004 0-.199.0052-.2976.0106v-.0828h.0152c.0541.0002.1069-.0172.1503-.0494s.0752-.0775.0906-.1293l.4424-1.2619c.0428-.1111.0768-.2254.1016-.3419.0875-.0309.1717-.0704.2513-.1179.0071-.0031.0147-.0048.0224-.0051.0036-.0006.0107.0012.0107.0012s.0064.0037.0085.0067c.0084.022.0164.0468.0254.0688l.5076 1.4389c.0325.0961.0665.1982.1023.2808.0141.0356.0396.0656.0726.0854.033.0197.0716.028.1098.0237h.0163v.0828c-.124-.0054-.2488-.0106-.3811-.0106-.1352 0-.2737.0052-.4144.0106v-.0828h.0306c.0631 0 .1714-.0103.1714-.0792-.0107-.0681-.0295-.1346-.0558-.1983l-.1071-.3192h-.6263z"></path><path d="m26.7779 20.3424c0 .11.0767.143.165.1542.1216.0092.2438.0074.3651-.0055.0518-.006.1018-.0223.1473-.0478.0454-.0256.0852-.0599.1172-.1009.0396-.0608.0686-.1279.0858-.1983h.0802c-.031.1569-.0695.3113-.1029.4679-.2427 0-.4861-.0109-.7282-.0109-.2433 0-.4867.0109-.7295.0109v-.0831h.038c.1004 0 .2079-.013.2079-.1841v-1.4134c0-.1436-.1075-.1566-.2079-.1566h-.038v-.0834c.1463 0 .2901.0112.4361.0112.1411 0 .2791-.0112.4203-.0112v.0834h-.0696c-.1046 0-.1868.0027-.1868.1487z"></path><path d="m4.98146 16.9944c0 .3897.27945.4347.52797.4347 1.09659 0 1.45614-.8237 1.45614-1.5772 0-.9449-.60866-1.6275-1.58813-1.6275-.20815 0-.30406.0145-.39598.02zm-.49702-2.3713c0-.4546-.23878-.4246-.46668-.4298v-.1306c.19756.0091.40052.0091.59867.0091.21299 0 .50247-.0091.87813-.0091 1.31382 0 2.02961.8739 2.02961 1.7693 0 .5004-.29401 1.7592-2.0906 1.7592-.25823 0-.49762-.0098-.7358-.0098-.2285 0-.45211.0052-.68001.0098v-.1319c.30375-.0302.45151-.0402.46668-.3838z"></path><path d="m8.24546 14.5024c-.03275.0001-.06519-.0063-.09547-.0187s-.0578-.0307-.08098-.0537c-.02319-.0231-.04158-.0505-.05414-.0806-.01255-.0301-.01901-.0624-.01901-.095 0-.0327.00646-.065.01901-.0951.01256-.0301.03095-.0575.05414-.0805.02318-.0231.0507-.0413.08098-.0538.03028-.0124.06272-.0187.09547-.0187.06521 0 .12782.0255.17435.071.04654.0455.07327.1074.07446.1723.00001.0662-.02605.1298-.07258.177-.04652.0473-.1098.0745-.17623.0758zm-.54343 2.9571h.0965c.14202 0 .24333 0 .24333-.1675v-1.3693c0-.2224-.07555-.2529-.26399-.3534v-.0809c.23883-.0714.52283-.1666.54348-.1826.0277-.0162.05921-.0247.09132-.0248.02517 0 .03519.0299.03519.0705v1.9405c0 .1675.11227.1675.25366.1675h.08648v.1317c-.17266 0-.35016-.0099-.53281-.0099-.18269 0-.36533.0051-.55316.0099z"></path><path d="m9.27018 15.9528c0-.1865-.05583-.2373-.29402-.3328v-.0967c.22717-.0696.45068-.1505.66968-.2425.01518 0 .03004.0101.03004.0499v.3295c.28974-.2076.53862-.3794.87872-.3794.4312 0 .5835.3132.5835.7077v1.3036c0 .1675.112.1675.2537.1675h.0913v.1315c-.1781 0-.3556-.0097-.5377-.0097-.183 0-.3656.0052-.5483.0097v-.1315h.0913c.1424 0 .2431 0 .2431-.1675v-1.3085c0-.2886-.1769-.4298-.4667-.4298-.1623 0-.42084.1312-.58892.2427v1.4956c0 .1675.11254.1675.25456.1675h.09136v.1315c-.17784 0-.35595-.0097-.53893-.0097-.18204 0-.36499.0052-.54767.0097v-.1315h.09196c.14168 0 .24302 0 .24302-.1675z"></path><path d="m12.7676 16.0338c.1262 0 .141-.0655.141-.126 0-.2584-.1571-.4655-.4411-.4655-.3092 0-.5225.2273-.5835.5915zm-.8985.1624c-.0118.0972-.0118.1956 0 .2928.0298.4807.3399.8749.7455.8749.2792 0 .4983-.1521.6855-.3389l.071.0707c-.2336.3084-.5225.571-.9385.571-.8074 0-.9694-.7783-.9694-1.1017 0-.9909.6696-1.2841 1.0243-1.2841.4114 0 .8536.2576.8581.7931.0008.0307-.0008.0613-.0045.0917l-.0465.0305z"></path><path d="m13.4623 17.4595h.1374c.142 0 .2428 0 .2428-.1675v-1.4201c0-.1562-.1873-.1867-.2634-.2276v-.0749c.3701-.1572.5738-.2884.6195-.2884.0301 0 .0452.0145.0452.0656v.4546h.011c.1262-.1968.3395-.5202.649-.5202.0367-.0017.0734.0039.1079.0165s.0661.0319.093.0568c.0269.025.0485.055.0636.0883.0151.0334.0234.0694.0244.106.0018.0326-.003.0653-.0141.096-.011.0308-.0282.0591-.0504.0831-.0222.0241-.049.0435-.0788.0571s-.0621.0212-.0949.0222c-.1578 0-.1578-.1218-.335-.1218-.1022.0139-.1959.064-.2639.1412-.0681.0771-.1059.1762-.1066.2789v1.1867c0 .1675.1014.1675.2434.1675h.2842v.1318c-.2791-.0048-.4918-.01-.7099-.01-.2085 0-.4215.0052-.6044.01z"></path><path d="m15.4159 16.8885c.0664.3334.2694.6169.6399.6169.2991 0 .4103-.1822.4103-.3591 0-.5964-1.1055-.4051-1.1055-1.2184 0-.2836.2285-.6469.7868-.6469.2013.0047.399.0547.5781.1463l.0358.5157h-.1165c-.0507-.3183-.2289-.5009-.5535-.5009-.2033 0-.3957.1167-.3957.334 0 .5919 1.177.4096 1.177 1.2033 0 .3334-.2688.6874-.8724.6874-.2174-.0061-.4301-.0649-.6196-.1713l-.0557-.5817z"></path><path d="m21.4552 14.9772h-.1269c-.0962-.5912-.5176-.8288-1.0853-.8288-.5844 0-1.4322.389-1.4322 1.6017 0 1.022.7322 1.7552 1.5129 1.7552.5024 0 .9188-.3435 1.0204-.8747l.1162.03-.1162.7384c-.2133.1318-.7874.2678-1.1224.2678-1.1873 0-1.9377-.7632-1.9377-1.9007 0-1.0364.9282-1.7798 1.9231-1.7798.4112 0 .8066.1316 1.1974.2679z"></path><path d="m21.6378 17.4595h.0968c.1423 0 .2439 0 .2439-.1675v-2.8144c0-.3291-.0762-.3394-.2691-.3947v-.0811c.1803-.0571.3553-.1299.5228-.2176.0348-.0229.0722-.0417.1114-.056.0309 0 .0406.0306.0406.0714v3.4924c0 .1675.112.1675.254.1675h.0861v.1318c-.1717 0-.3498-.01-.5331-.01-.1821 0-.3647.0052-.5534.01z"></path><path d="m24.8969 17.3128c0 .0916.0551.0961.1419.0961.0604 0 .1372-.0045.2033-.0045v.1063c-.2474.0345-.492.0867-.7319.1563l-.0248-.0151v-.4089c-.304.2475-.5383.424-.899.424-.2737 0-.5574-.1765-.5574-.6009v-1.2946c0-.1318-.0207-.2585-.3041-.2832v-.0962c.1829-.0054.5878-.0351.6541-.0351.0566 0 .0566.0351.0566.1464v1.304c0 .1514 0 .5863.4411.5863.172 0 .4005-.1317.6136-.3073v-1.3612c0-.1006-.2434-.1559-.4258-.207v-.091c.4567-.0305.7413-.0702.7916-.0702.0408 0 .0408.0351.0408.0911z"></path><path d="m25.9062 17.0198c0 .1922.1828.5157.5231.5157.5435 0 .7717-.5312.7717-.9813 0-.5455-.4163-1.0004-.812-1.0004-.1887 0-.3456.1215-.4828.2382zm0-1.3754c.203-.1714.4777-.3633.7566-.3633.5886 0 .9439.5109.9439 1.0613 0 .6619-.4871 1.3245-1.2134 1.3245-.2461-.0003-.4883-.0609-.7052-.1765l-.1521.1158-.1062-.0553c.046-.2978.0695-.5986.0704-.8999v-2.1734c0-.3291-.0758-.3396-.2688-.395v-.0809c.1805-.0568.3555-.1296.5228-.2177.035-.0229.0726-.0416.112-.0556.0304 0 .04.0305.04.0713z"></path></g><title id="paymentsdiners-diners">Diners</title></svg></span>
    
</div>
                    </span>
                    <span class="wt-screen-reader-only">Pay with Visa, Master Card, American Express, Discover or Diners Club</span>
                </label>
            </div>
        </li>
        <li>
            <div class="wt-radio wt-mb-xs-2 wt-mb-lg-1">
                <input type="radio" id="851e5f8_multiple_payment_method_paypal" name="payment_method" autocomplete="off" value="paypal" />
                <label for="851e5f8_multiple_payment_method_paypal">
                    <span class="wt-radio-label" aria-hidden="true">
                        <div class="wt-display-inline-block">
        <span class="inline-svg svg-payment-icon svg-payment-icon-p-2"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 33" aria-labelledby="paymentspaypal-paypal" role="img" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M22.544 26.548c-.14.93-.844.93-1.524.93h-.387l.272-1.738c.016-.105.106-.183.21-.183h.178c.463 0 .9 0 1.126.266.133.16.174.396.123.723zm-.296-2.43h-2.565c-.175 0-.325.13-.352.305l-1.035 6.648c-.02.13.08.25.21.25h1.317c.124 0 .228-.09.247-.212l.293-1.885c.03-.175.178-.304.353-.304h.812c1.69 0 2.664-.827 2.92-2.465.114-.716.003-1.28-.328-1.673-.368-.434-1.015-.664-1.873-.664z" fill="#238EC2"></path><path d="M4.252 26.548c-.14.93-.843.93-1.523.93h-.39l.27-1.738c.018-.105.107-.183.213-.183H3c.463 0 .9 0 1.126.266.134.16.175.396.124.723zm-.296-2.43H1.392c-.176 0-.325.13-.352.305L.003 31.07c-.02.13.08.25.21.25H1.44c.176 0 .325-.13.352-.304l.28-1.793c.027-.175.177-.304.352-.304h.812c1.69 0 2.664-.827 2.92-2.465.113-.716.003-1.28-.33-1.673-.364-.434-1.01-.664-1.87-.664z" fill="#253667"></path><path d="M9.91 28.933c-.12.71-.676 1.185-1.386 1.185-.356 0-.64-.115-.825-.335-.183-.217-.25-.527-.194-.872.11-.7.676-1.192 1.376-1.192.35 0 .632.117.82.338.187.223.26.535.207.878zm1.71-2.417h-1.227c-.105 0-.194.078-.21.183l-.055.345-.086-.126c-.266-.39-.858-.52-1.45-.52-1.357 0-2.516 1.04-2.74 2.496-.12.727.048 1.422.456 1.907.375.446.91.63 1.546.63 1.094 0 1.7-.71 1.7-.71l-.054.346c-.02.13.08.25.21.25h1.107c.175 0 .324-.13.352-.305l.662-4.25c.02-.13-.08-.25-.212-.25z" fill="#253667"></path><path d="M28.2 28.933c-.117.71-.674 1.185-1.385 1.185-.356 0-.64-.115-.824-.335-.18-.217-.25-.527-.19-.872.11-.7.676-1.192 1.375-1.192.35 0 .632.117.82.338.187.223.26.535.207.878zm1.713-2.417h-1.228c-.105 0-.195.078-.21.183l-.055.345-.086-.126c-.266-.39-.86-.52-1.45-.52-1.357 0-2.516 1.04-2.742 2.496-.117.727.05 1.422.457 1.907.373.446.91.63 1.545.63 1.093 0 1.7-.71 1.7-.71l-.055.346c-.02.13.08.25.212.25h1.106c.175 0 .325-.13.352-.305l.664-4.25c.02-.13-.08-.25-.21-.25z" fill="#238EC2"></path><path d="M18.162 26.518h-1.234c-.118 0-.23.058-.295.157L14.93 29.21l-.72-2.436c-.046-.153-.185-.257-.343-.257h-1.213c-.147 0-.25.145-.202.285l1.36 4.033-1.282 1.823c-.1.144 0 .342.175.342h1.235c.117 0 .226-.058.293-.155l4.105-5.99c.098-.142-.003-.338-.176-.338" fill="#253667"></path><path d="M31.36 24.3l-1.052 6.77c-.02.13.08.25.21.25h1.06c.175 0 .324-.13.35-.304l1.042-6.648c.02-.13-.08-.25-.212-.25H31.57c-.104 0-.193.078-.21.183" fill="#238EC2"></path><path d="M15.008 5.497c.044-.28.22-.51.46-.625.11-.053.23-.082.358-.082h5.184c.614 0 1.186.04 1.71.126.15.024.295.052.437.084.14.032.278.067.41.107l.197.06c.257.088.497.19.717.307.26-1.673 0-2.812-.895-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084L15.01 5.497" fill="#253667"></path><path d="M24.48 5.474c.26-1.673 0-2.812-.896-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084l-.28 1.806c-.048.305.184.58.49.58h3.44c.408 0 .755-.3.82-.706l.032-.177.65-4.156.04-.227c.064-.407.41-.707.818-.707h.515c3.334 0 5.944-1.37 6.707-5.33.32-1.654.154-3.035-.69-4.006-.254-.295-.57-.538-.94-.736" fill="#238EC2"></path><path d="M24.48 5.474c.26-1.673 0-2.812-.896-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084l1.026-6.575-.03.204c.07-.465.464-.807.93-.807h1.94c3.81 0 6.795-1.565 7.667-6.092.026-.134.048-.264.068-.392" fill="#20274F"></path></g><title id="paymentspaypal-paypal">Paypal</title></svg></span>
    
</div>
                    </span>
                    <span class="wt-screen-reader-only">Pay with PayPal</span>
                </label>
            </div>
        </li>
        <li class="gpay_panonly">
            <div class="wt-radio wt-mb-xs-2 wt-mb-lg-1">
                <input type="radio" id="851e5f8_multiple_payment_method_google_pay" name="payment_method" autocomplete="off" value="gpay_panonly" />
                <label for="851e5f8_multiple_payment_method_google_pay">
                    <span class="wt-radio-label" aria-hidden="true">
                        <div class="wt-display-inline-block">
        <span class="inline-svg svg-payment-icon">
            
            
          </span>
    
</div>
                    </span>
                    <span class="wt-screen-reader-only">Buy with Klarna</span>
                </label>
            </div>
        </li>
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
