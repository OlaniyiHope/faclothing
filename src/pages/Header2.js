

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./mycss.css"


const Header2 = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { user, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/");
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/categories`
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div style={{marginBottom: "20px"}}> 

 


        <div data-selector="header-cat-nav-wrapper" data-menu-ui="menubar">
<div id="gnav-header" class=" gnav-header global-nav v2-toolkit-gnav-header wt-z-index-6 wt-sem-bg-elevation-0 wt-position-relative " data-as-version="10_12672349415_19" data-count-ajax="" data-show-suggested-searches-in-as="" data-show-gift-card-cta-in-as="1" data-as-personalized="1" data-as-extras="{&amp;quot;expt&amp;quot;:&amp;quot;all_xml&amp;quot;,&amp;quot;lang&amp;quot;:&amp;quot;en-US&amp;quot;,&amp;quot;extras&amp;quot;:[]}" data-cheact="1" data-gnav-header="">
    <header id="gnav-header-inner" class="global-enhancements-header wt-display-flex-xs wt-justify-content-space-between wt-align-items-center wt-width-full wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-lg-6 wt-pr-lg-6 wt-bb-xs wt-bb-lg-none gnav-header-inner wt-pt-lg-2 
        
        " role="banner">
     
<div class="wt-pb-lg-0 wt-pt-sm-1 wt-pt-lg-0 wt-pr-xs-1 " data-header-logo-container="">
    <a href="/?ref=lgo" elementtiming="ux-global-nav">
        <span class="wt-screen-reader-only">Rayofaa</span>
        <span class="etsy-icon wt-display-block wt-fill-orange wt-nudge-r-3 wt-nudge-t-1 logo-dimensions" id="logo" style={{fontSize: "23px", fontWeight: "800", color: "#8b023a"}}>
        Rayofaa
      </span>
    </a>
</div>
         

        <div class="wt-width-full wt-display-flex-xs wt-pr-lg-3 wt-flex-lg-1 order-mobile-tablet-2" data-hamburger-search-container="">
      
     <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="wt-btn wt-btn--transparent wt-btn--icon wt-hide-lg header-button"
>
  <span className="wt-screen-reader-only">Browse</span>
  <span className="wt-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 7H3V5h18zm-5 6H3v-2h13zm5 6H3v-2h18z"></path>
    </svg>
  </span>
</button>

            <div class="wt-display-inline-block wt-flex-xs-1 wt-pl-lg-0
                wt-mb-xs-2
        
        wt-mb-lg-0">
    <form id="gnav-search" class="global-enhancements-search-nav wt-position-relative wt-display-flex-xs" method="GET" action="/search.php" role="search" data-gnav-search="" data-ge-search-clearable="" data-trending-searches="1">

        <label for="global-enhancements-search-query" class="wt-label wt-screen-reader-only">
   Search for items or shops
</label>
<div class="search-container" data-id="search-bar">
    <div  style={{width: "90%",  margin: "auto"}} class="wt-input-btn-group global-enhancements-search-input-btn-group emphasized_search_bar emphasized_search_bar_grey_bg search-bar-container" data-id="search-suggestions-trigger">
        <input id="global-enhancements-search-query" data-id="search-query"  data-search-input="" type="text" name="search_query" class="wt-input wt-input-btn-group__input global-enhancements-search-input-btn-group__input
                    wt-pr-xs-7
                                        
                    " placeholder="Search for anything" value="" autocomplete="off" autocorrect="off" autocapitalize="off" role="combobox" aria-autocomplete="both" aria-controls="global-enhancements-search-suggestions" aria-expanded="false" />
        <button type="button" class="wt-btn wt-btn--transparent wt-btn--icon wt-btn--small position-absolute-important wt-position-right wt-z-index-9 wt-animated  wt-animated--is-hidden
            
            search-close-btn-margin-right " data-search-close-btn="">
            <span class="wt-screen-reader-only">Clear search</span>
            <span class="wt-icon wt-icon--smaller wt-nudge-t-1">
              
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg>
              
              
              </span>
        </button>
        <button type="submit" class="wt-input-btn-group__btn 
              
                " value="Search" aria-label="Search" data-id="gnav-search-submit-button" style={{backgroundColor: "#8b023a", color: "white"}}>
            
            <span class="wt-icon wt-nudge-b-2 wt-nudge-r-1">
              
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"></path></svg>
            
            
            </span>
        </button>
    </div>
    <div id="global-enhancements-search-suggestions" class="global-nav-menu__body
            search-suggestions-container
             wt-width-full wt-max-width-full
            " data-id="search-suggestions">
    </div>
</div>

<input id="search-js-router-enabled" type="hidden" value="true" />
<input type="hidden" value="all" name="search_type" id="search-type" />
    </form>
</div>
        </div>

        <a data-selector="skip-to-content-marketplace" class="global-enhancements-skip-to-content wt-screen-reader-only wt-focusable" href="#content">
    <div id="skip-to-content-wrapper" class="wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-body-max-width wt-width-full wt-height-full wt-position-absolute wt-position-top wt-position-left wt-position-right wt-bg-denim wt-z-index-10">
        <label class="wt-btn wt-btn--transparent wt-btn--light">
            Skip to Content
        </label>
    </div>
</a>

        

   

        <div class="wt-flex-shrink-xs-0" >
            <nav aria-label="Main">
    <ul className="wt-display-flex-xs wt-justify-content-space-between wt-list-unstyled wt-m-xs-0 wt-align-items-center">

          {/* IF NOT LOGGED IN */}
          {!user && (
            <li>
              <Link to="/login">
                <button className="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 select-signin header-button">
                  Sign in
                </button>
              </Link>
            </li>
          )}

          {/* IF LOGGED IN → SHOW DROPDOWN */}
          {user && (
            <li style={{ position: "relative" }}>
              <button
                onClick={() => setOpen(!open)}
                className="wt-btn wt-btn--transparent"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer"
                }}
              >
                {/* USER ICON */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="user"
                  width="22"
                  height="22"
                />

                {/* USERNAME */}
                <span style={{ fontWeight: "600" }}>
                  {user.fullname?.split(" ")[0] || "Account"}
                </span>
              </button>

              {/* DROPDOWN MENU */}
              {open && (
                <ul
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "0",
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    width: "200px",
                    padding: "10px 0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    zIndex: 50,
                    listStyle: "none"
                  }}
                >

                  <li className="dropdown-item">
                    <Link
                      to="/purchases"
                      className="dropdown-link"
                    >
                      My Purchases
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <Link
                      to="/messages"
                      className="dropdown-link"
                    >
                      My Messages
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <Link
                      to="/special-offers"
                      className="dropdown-link"
                    >
                      Special Offers
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <Link
                      to="/account-settings"
                      className="dropdown-link"
                    >
                      Account Settings
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <Link
                      to="/wallet"
                      className="dropdown-link"
                    >
                      Credit Balance
                    </Link>
                  </li>

                  <hr style={{ margin: "8px 0", borderColor: "#eee" }} />

                  <li className="dropdown-item">
                    <button
                      onClick={handleLogout}
                      className="dropdown-link"
                      style={{ color: "red" }}
                    >
                      Sign Out
                    </button>
                  </li>

                </ul>
              )}
            </li>
          )}

    


<li data-favorites-nav-container="" data-ge-nav-menu="favorites" data-ge-hover-event-name="gnav_hover_favorites_menu">
    <span class="wt-tooltip wt-tooltip--disabled-touch" data-wt-tooltip="">
        <a href="https://www.etsy.com/guest/favorites?ref=hdr-fav" class="wt-tooltip__trigger wt-tooltip__trigger--icon-only wt-btn wt-btn--transparent wt-btn--icon reduced-margin-xs header-button" data-favorites-nav-link="" aria-labelledby="ge-tooltip-label-favorites">
            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
        </a>

        <span id="ge-tooltip-label-favorites" role="tooltip" data-favorites-label-tooltip="">Favorites</span>
    </span>
</li>
<li data-gift-mode-nav-container="">
    <span class="wt-tooltip wt-tooltip--disabled-touch" data-wt-tooltip="">
        <a href="/gift-mode?ref=gm_utility_nav" class=" wt-tooltip__trigger wt-tooltip__trigger--icon-only wt-btn wt-btn--transparent wt-btn--icon reduced-margin-xs header-button" data-gift-mode-nav-link="" aria-labelledby="ge-tooltip-label-gift-mode">
            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.535 7A4 4 0 0 1 12 2.354 4 4 0 0 1 18.465 7H22v9h-1v6H3v-6H2V7zm9.466 0H13V5a2 2 0 1 1 2.001 2M11 5a2 2 0 1 0-2.001 2H11zm-.764 4c-.55.614-1.348 1-2.236 1v2a4.98 4.98 0 0 0 3-1v3H4V9zM13 11c.836.628 1.874 1 3 1v-2a3 3 0 0 1-2.236-1H20v5h-7zm-8 5v4h6v-4zm8 4v-4h6v4z"></path></svg></span>
        </a>

        <span id="ge-tooltip-label-gift-mode" role="tooltip" data-registry-label-tooltip="">
            
                Gifts
            
        </span>
    </span>
</li>
<li data-ge-nav-menu="cart" data-ge-hover-event-name="gnav_hover_cart_menu">
  <span
    className="wt-tooltip wt-tooltip--bottom-left"
    data-wt-tooltip=""
    data-header-cart-button=""
  >
    <a
      aria-label="Cart"
      href="/cart"
      className="wt-btn wt-btn--transparent wt-btn--icon header-button"
    >
      {/* CART BADGE WITH PURPLE BACKGROUND */}
      <span
        className="wt-z-index-1 wt-no-wrap ge-cart-badge wt-badge wt-badge--small wt-badge--outset-top-right"
        data-count={totalItems}
        style={{ backgroundColor: "#8b023a", color: "#fff" }}
      >
        {totalItems}
      </span>

      {/* CART ICON */}
      <span className="wt-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          aria-hidden="true" focusable="false">
          <path fillRule="evenodd" clipRule="evenodd"
            d="m5.766 5-.618-3H1v2h2.518l2.17 10.535L6.18 17h14.307l2.4-12zM7.82 15l-1.6-8h14.227l-1.6 8z">
          </path>
          <path d="M10.667 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.333 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
        </svg>
      </span>
    </a>
  </span>
</li>


    </ul>
</nav>
        </div>
    </header>

    
</div>

<nav className="wt-hide-xs wt-show-lg category-nav-button-menu">
      <div
        data-ui="cat-nav"
        id="desktop-category-topnav"
        className="cat-nav responsive-disabled v2-toolkit-cat-nav wt-ml-xs-0 wt-mr-xs-0"
      >
        <div className="wt-text-caption wt-position-relative wt-sem-bg-elevation-0 wt-z-index-5 v2-toolkit-cat-nav-tab-bar">
          <div className="wt-body-max-width">

            <ul
              className="wt-list-unstyled wt-body-max-width wt-display-flex-xs wt-justify-content-center"
              data-menu-ui="menubar"
              data-ui="top-nav-category-list"
            >

              {/* DYNAMIC CATEGORY ITEMS */}
              {categories.map((cat) => (
                <li key={cat._id} className="wt-mr-xs-3">
                  <a
                    href={`/shop-category/${cat._id}`}
                    className="wt-btn wt-btn--transparent wt-btn--small"
                    data-menu-ui="menuitem"
                    data-ui="top-nav-category-link"
                  >
                    <span className="wt-icon wt-icon--smaller-xs wt-nudge-b-1 wt-nudge-r-3">
                      {cat.icon ? (
                        <span style={{ fontSize: "14px" }}>{cat.icon}</span>
                      ) : null}
                    </span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}

            </ul>

          </div>
        </div>
      </div>
    </nav>
</div>


{menuOpen && (
  <div className="mobile-menu-container wt-show-xs wt-hide-lg">
    <ul className="wt-list-unstyled wt-m-xs-0 wt-p-xs-2">
      {categories.map((cat) => (
        <li key={cat._id} className="wt-mb-xs-2">
          <a
            href={`/shop-category/${cat._id}`}
            className="wt-btn wt-btn--transparent wt-btn--small wt-width-full"
          >
            <span className="wt-icon wt-icon--smaller-xs wt-nudge-r-2">
              {cat.icon ? <span style={{ fontSize: "16px" }}>{cat.icon}</span> : null}
            </span>
            <span>{cat.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

  


    </div>
    
  );
};

export default Header2;
