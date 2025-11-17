

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { HiMenu, HiX } from "react-icons/hi";


const Header2 = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
            <nav class="wt-hide-xs wt-show-lg">
                <div data-clg-id="WtMenu" class="wt-menu wt-tooltip ge-menu--body-below-trigger wt-tooltip--disabled-touch dropdown-category-menu wt-menu--bottom wt-menu--left" data-wt-menu="" data-wt-tooltip="true" data-menu-body-below-trigger="true" data-close-on-select="true" data-hide-trigger-on-open="false" data-animate-in="true" data-contain-focus="false" data-open-direction-vert="bottom" data-open-direction-horiz="left" data-open-direction-force="true" data-menu-type="action">
        <button type="button" class="wt-menu__trigger wt-btn wt-btn--transparent header-button wt-mr-xs-1 wt-btn--small" aria-haspopup="true" aria-expanded="false" data-wt-menu-trigger="" data-level="0" data-overlay-trigger-selector="overlay-trigger-ele">
          <span class="etsy-icon wt-mr-xs-1 wt-icon--smaller">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 18 18">
              <rect x="2" y="8" width="14" height="2"></rect>
              <rect x="2" y="13" width="14" height="2"></rect>
              <rect x="2" y="3" width="14" height="2"></rect>
            </svg>
          </span>
          Categories
        </button>
        <div data-clg-id="WtMenuBody" role="menu" class="wt-menu__body wt-pt-xs-2 wt-pb-xs-2 ge-you-menu-dimensions wt-z-index-10 dropdown-category-menu__body" data-wt-menu-body="" type="option">
      <a href="/c/accessories?ref=catnav-1" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Accessories
  </a><a href="/c/art-and-collectibles?ref=catnav-66" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Art &amp; Collectibles
  </a><a href="/c/baby?ref=catnav-12545" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Baby
  </a><a href="/c/bags-and-purses?ref=catnav-132" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Bags &amp; Purses
  </a><a href="/c/bath-and-beauty?ref=catnav-199" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Bath &amp; Beauty
  </a><a href="/c/books-movies-and-music?ref=catnav-323" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Books, Movies &amp; Music
  </a><a href="/c/clothing?ref=catnav-374" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Clothing
  </a><a href="/c/craft-supplies-and-tools?ref=catnav-562" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Craft Supplies &amp; Tools
  </a><a href="/c/electronics-and-accessories?ref=catnav-825" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Electronics &amp; Accessories
  </a><a href="/c/gifts?ref=catnav-12584" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Gifts
  </a><a href="/c/home-and-living?ref=catnav-891" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Home &amp; Living
  </a><a href="/c/jewelry?ref=catnav-1179" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Jewelry
  </a><a href="/c/paper-and-party-supplies?ref=catnav-1250" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Paper &amp; Party Supplies
  </a><a href="/c/pet-supplies?ref=catnav-1351" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Pet Supplies
  </a><a href="/c/shoes?ref=catnav-1429" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Shoes
  </a><a href="/c/toys-and-games?ref=catnav-1552" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Toys &amp; Games
  </a><a href="/c/weddings?ref=catnav-1633" class="wt-menu__item wt-display-block wt-text-truncate wt-width-full wt-pr-xs-1 wt-position-relative wt-max-width-full " role="menuitem" tabindex="-1" data-level="1">
          Weddings
  </a>

</div>

        <span class="ge-menu__body-caret wt-z-index-10 wt-sem-bg-elevation-0 wt-position-absolute wt-bl-xs wt-bt-xs wt-br-xs-none wt-bb-xs-none"></span>

</div>
            </nav>

        <div class="wt-width-full wt-display-flex-xs wt-pr-lg-3 wt-flex-lg-1 order-mobile-tablet-2" data-hamburger-search-container="">
            <button data-id="hamburger" class="wt-btn wt-btn--transparent wt-btn--icon wt-hide-lg
               wt-btn--transparent-flush-left
                         wt-mb-xs-2
               
               wt-mb-lg-0
               header-button" aria-controls="mobile-catnav-overlay" tab-index="0">
          <span class="wt-screen-reader-only">
                    Browse
          </span>
          <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 7H3V5h18zm-5 6H3v-2h13zm5 6H3v-2h18z"></path></svg></span>
     </button>
            <div class="wt-display-inline-block wt-flex-xs-1 wt-pl-lg-0
                wt-mb-xs-2
        
        wt-mb-lg-0">
    <form id="gnav-search" class="global-enhancements-search-nav wt-position-relative wt-display-flex-xs" method="GET" action="/search.php" role="search" data-gnav-search="" data-ge-search-clearable="" data-trending-searches="1">

        <label for="global-enhancements-search-query" class="wt-label wt-screen-reader-only">
   Search for items or shops
</label>
<div class="search-container" data-id="search-bar">
    <div class="wt-input-btn-group global-enhancements-search-input-btn-group emphasized_search_bar emphasized_search_bar_grey_bg search-bar-container" data-id="search-suggestions-trigger">
        <input id="global-enhancements-search-query" data-id="search-query" data-search-input="" type="text" name="search_query" class="wt-input wt-input-btn-group__input global-enhancements-search-input-btn-group__input
                    wt-pr-xs-7
                                        
                    " placeholder="Search for anything" value="" autocomplete="off" autocorrect="off" autocapitalize="off" role="combobox" aria-autocomplete="both" aria-controls="global-enhancements-search-suggestions" aria-expanded="false" />
        <button type="button" class="wt-btn wt-btn--transparent wt-btn--icon wt-btn--small position-absolute-important wt-position-right wt-z-index-9 wt-animated  wt-animated--is-hidden
            
            search-close-btn-margin-right " data-search-close-btn="">
            <span class="wt-screen-reader-only">Clear search</span>
            <span class="wt-icon wt-icon--smaller wt-nudge-t-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg></span>
        </button>
        <button type="submit" class="wt-input-btn-group__btn global-enhancements-search-input-btn-group__btn
                
                " value="Search" aria-label="Search" data-id="gnav-search-submit-button">
            
            <span class="wt-icon wt-nudge-b-2 wt-nudge-r-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"></path></svg></span>
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

        

   

        <div class="wt-flex-shrink-xs-0" data-primary-nav-container="">
            <nav aria-label="Main">
    <ul class="wt-display-flex-xs wt-justify-content-space-between wt-list-unstyled wt-m-xs-0 wt-align-items-center">
        <li>
    <button class="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin header-button" href="/login">
        Sign in
    </button>
</li>


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
    <span class="wt-tooltip wt-tooltip--bottom-left wt-tooltip--disabled-touch" data-wt-tooltip="" data-header-cart-button="">
        <a aria-label="Cart" href="https://www.etsy.com/cart?ref=hdr-cart" class="wt-tooltip__trigger wt-tooltip__trigger--icon-only wt-btn wt-btn--transparent wt-btn--icon header-button">
            <span class="wt-z-index-1 wt-no-wrap wt-display-none ge-cart-badge wt-badge wt-badge--notificationPrimary wt-badge--small wt-badge--outset-top-right" data-selector="header-cart-count" aria-hidden="true">
                0
            </span>
            <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="m5.766 5-.618-3H1v2h2.518l2.17 10.535L6.18 17h14.307l2.4-12zM7.82 15l-1.6-8h14.227l-1.6 8z"></path><path d="M10.667 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.333 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span>
        </a>
        <span role="tooltip" aria-hidden="true">Cart</span>
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
                    href={`/category/${cat._id}`}
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



  


    </div>
    
  );
};

export default Header2;
