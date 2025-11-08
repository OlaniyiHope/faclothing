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
import Header3 from "./Header3";


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // Default shipping rate options
  const [shipping, setShipping] = useState(15);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shipping;
  return (
    <div className="wp-singular page-template-default page page-id-85 page-child parent-pageid-84 wp-custom-logo wp-theme-trevox theme-trevox woocommerce-cart woocommerce-page woocommerce-js translatepress-en_US cms-heading-font-default elementor-default elementor-kit-8 currency-usd e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit" style={{backgroundColor: "white"}}>
      <Header3 />
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
<main
      id="cms-main"
      className="cms-main container cms-woo-content"
      style={{ width: "100%" }}
    >
      <div className="woocommerce">
        <div className="woocommerce-notices-wrapper"></div>

        {cartItems.length === 0 ? (
          <div style={{ marginTop: "150px", textAlign: "center" }}>
            <h3>Your cart is empty 🛍️</h3>
            <p>Browse products and add them to your cart.</p>
          </div>
        ) : (
          <>
            <form className="woocommerce-cart-form" onSubmit={(e) => e.preventDefault()}>
              <table
                className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                cellspacing="0"
                style={{ marginTop: "100px" }}
              >
                <thead>
                  <tr>
                    <th className="product-remove">
                      <span className="screen-reader-text">Remove item</span>
                    </th>
                    <th className="product-thumbnail">
                      <span className="screen-reader-text">Thumbnail image</span>
                    </th>
                    <th scope="col" className="product-name">Product</th>
                    <th scope="col" className="product-price">Price</th>
                    <th scope="col" className="product-quantity">Quantity</th>
                    <th scope="col" className="product-subtotal">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      className="woocommerce-cart-form__cart-item cart_item"
                      key={item._id + (item.color || "")}
                    >
                      <td className="product-remove">
                        <button
                          type="button"
                          className="remove"
                          aria-label={`Remove ${item.name} from cart`}
                          onClick={() => removeFromCart(item._id, item.color)}
                          style={{
                            background: "none",
                            border: "none",
                            fontSize: "22px",
                            cursor: "pointer",
                          }}
                        >
                          ×
                        </button>
                      </td>

                      <td className="product-thumbnail">
                        <a href="#">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="180"
                            height="230"
                            src={item.images?.[0]}
                            alt={item.name}
                            className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
                          />
                        </a>
                      </td>

                      <td scope="row" role="rowheader" className="product-name">
                        <a href="#">{item.name}</a>
                      </td>

                      <td className="product-price" data-title="Price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
							           <span className="woocommerce-Price-currencySymbol">$</span>
                            {item.price.toFixed(2)}
                 
                          </bdi>
                        </span>
                      </td>

                      <td className="product-quantity" data-title="Quantity">
                        <div className="quantity">
                          <div className="cms-quantity cms-transition d-flex flex-nowrap justify-content-between align-items-center gap-20">
                
                            <div className="cms-qty-input relative d-flex align-items-center flex-nowrap">
                              <span
                                className="cms-qty-act cms-qty-down pl-10"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  updateQuantity(
                                    item._id,
                                    item.color,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                              >
                                
                              </span>
                              <input
                                type="number"
                                className="input-text qty text"
                                value={item.quantity}
                                min="1"
                                onChange={(e) =>
                                  updateQuantity(
                                    item._id,
                                    item.color,
                                    Number(e.target.value)
                                  )
                                }
                                style={{ width: "60px", textAlign: "center" }}
                              />
                              <span
                                className="cms-qty-act cms-qty-up pr-20"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  updateQuantity(
                                    item._id,
                                    item.color,
                                    item.quantity + 1
                                  )
                                }
                              >
                                
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="product-subtotal" data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
							              <span className="woocommerce-Price-currencySymbol">$</span>
                            {(item.price * item.quantity).toFixed(2)}
              
                          </bdi>
                        </span>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan="6" className="actions">
                      <div className="coupon">
                        <label htmlFor="coupon_code" className="screen-reader-text">
                          Coupon:
                        </label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="input-text"
                          id="coupon_code"
                          placeholder="Coupon code"
                        />
                        <button type="button" className="button">
                          Apply coupon
                        </button>
                      </div>
                      <button type="button" className="button" onClick={clearCart}>
                        Clear Cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="cart-collaterals">
              <div className="cart_totals">
                <h2>Cart totals</h2>

                <table cellspacing="0" className="shop_table shop_table_responsive">
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
							  <span className="woocommerce-Price-currencySymbol">$</span>
                            {subtotal.toFixed(2)}
                          
                          </bdi>
                        </span>
                      </td>
                    </tr>

                    {/* <tr className="woocommerce-shipping-totals shipping">
                      <th>Shipping</th>
                      <td data-title="Shipping">
                        <ul id="shipping_method" className="woocommerce-shipping-methods">
                          <li>
                            <input
                              type="radio"
                              name="shipping_method"
                              id="flat_rate"
                              value="15"
                              checked={shipping === 15}
                              onChange={() => setShipping(15)}
                            />
                            <label htmlFor="flat_rate">
                              Flat rate:{" "}
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                              <span className="woocommerce-Price-currencySymbol">$</span>    15.00
                                </bdi>
                              </span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="shipping_method"
                              id="pickup"
                              value="10"
                              checked={shipping === 10}
                              onChange={() => setShipping(10)}
                            />
                            <label htmlFor="pickup">
                              Local pickup:{" "}
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                               <span className="woocommerce-Price-currencySymbol">$</span>   10.00
                                </bdi>
                              </span>
                            </label>
                          </li>
                        </ul>
                        <p className="woocommerce-shipping-destination">
                          Shipping to <strong>NG</strong>.
                        </p>
                      </td>
                    </tr> */}

                    <tr className="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong>
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
								  <span className="woocommerce-Price-currencySymbol">$</span>
                              {total.toFixed(2)}
                            
                            </bdi>
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

             <div className="wc-proceed-to-checkout">
  <Link
    to="/checkout"
    className="checkout-button btn btn-accent text-white btn-hover-primary text-hover-white"
  >
    Proceed to checkout
  </Link>
</div>

              </div>
            </div>
          </>
        )}
      </div>


    </main>

      <Footer />
    </div>
  );
};

export default Cart;
