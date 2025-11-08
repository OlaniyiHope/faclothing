

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./mycss.css"
import { Link } from "react-router-dom";

const Header = ({ cartCount = 1 }) => {
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
 const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div > 

      	<header id="cms-header-wrap" class="site-header" >
       <div id="cms-header"   className={`cms-header header-layout-3  transparent-on header-transparent header-divider ${
            scrolled ? "scrolled-header" : ""
          }`}>
             <div id="cms-header-top" class="cms-header-top header-top-default" style={{backgroundColor: "#fff"}}>		<div data-elementor-type="wp-post" data-elementor-id="142"  style={{backgroundColor: "#8b023a"}} class="elementor elementor-142">
				<div class="elementor-element elementor-element-bccac42 bg-primary  text-white text-14 p-tb-10 e-con-boxed-wide e-flex e-con e-parent" data-id="bccac42"  style={{backgroundColor: "#8b023a"}} data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
				<div class="elementor-element elementor-element-797c274 elementor-widget__width-initial cms-carousel-item-shadow-no elementor-widget elementor-widget-cms_headline"  style={{backgroundColor: "#8b023a"}} data-id="797c274" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;effect&quot;:&quot;fade&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;arrows&quot;:&quot;yes&quot;}" data-widget_type="cms_headline.default">
				<div class="elementor-widget-container">
					<div class="cms-headlines cms-headlines-1 text-center">
    <div class="cms-carousel swiper">
        <div class="swiper-wrapper"> 
                            <div class="swiper-slide headline-item text-white text-hover-white">Free shipping on US orders $150+ &amp; Free exchange</div>
                            <div class="swiper-slide headline-item text-white text-hover-white"  style={{backgroundColor: "#8b023a"}}>Delivery time 2-3 working days</div>
                            <div class="swiper-slide headline-item text-white text-hover-white">Free exchanges &amp; free returns</div>
                            <div class="swiper-slide headline-item text-white text-hover-white">Buy Now &amp; Pay Later</div>
                    </div>
    </div>
            <div class="cms-carousel-button-prev prev cms-carousel-button in arrow-icon hover ">
            <i class="cms-carousel-button-icon rtl-flip text-12   cmsi-chevron-left" aria-hidden="true"></i><i class="cms-carousel-button-icon hover rtl-flip text-12   cmsi-long-arrow-left" aria-hidden="true"></i>        </div>
        <div class="cms-carousel-button-next next cms-carousel-button in arrow-icon hover ">
            <i class="cms-carousel-button-icon rtl-flip text-12   cmsi-chevron-right" aria-hidden="true"></i><i class="cms-carousel-button-icon hover rtl-flip text-12   cmsi-long-arrow-right" aria-hidden="true"></i>        </div>
        </div>				</div>
				</div>
				</div>
				</div>
		</div>



    <div class="cms-header-main container-fluid d-flex gap-30 justify-content-between">





        <div class="site-branding flex-basic d-flex justify-content-start">
              <a class="site-logo" href="/" title="Trevox" rel="home">
                
                {/* <img width="83" height="19" alt="Trevox" src="wp-content/themes/trevox/assets/images/logo/logo-light.png" data-mobile="https://7oroofthemes.com/trevox/wp-content/themes/trevox/assets/images/logo/logo-light-mobile.png" data-sticky="https://7oroofthemes.com/trevox/wp-content/themes/trevox/assets/images/logo/logo.png" data-sticky-mobile="https://7oroofthemes.com/trevox/wp-content/themes/trevox/assets/images/logo/logo-mobile.png" />
                 */}
                
                <h4 style={{color: "white", fontWeight: "800"}}>Fa Clothing</h4>
                </a></div>
              
                <nav class="site-navigation site-navigation-dropdown justify-content-center flex-auto d-flex"><ul id="mastmenu" class="cms-primary-menu cms-primary-menu-dropdown">
                <li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-46 current_page_item">
  <a href="/" aria-current="page" class="cms-menu-link">
    <span class="menu-title title">Home</span>
  </a>
</li>
     <li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-46 current_page_item">
  <a href="/new-arrival" aria-current="page" class="cms-menu-link">
    <span class="menu-title title">New Arrival</span>
  </a>
</li>

{/* <li id="menu-item-197" class="menu-item menu-item-type-post_type menu-item-object-page megamenu menu-item-has-children megamenu-full menu-item-197"><a href="shop/index.html" class="cms-menu-link"><span class="menu-title title">Shop</span><span class="main-menu-toggle"></span></a><div class="sub-menu sub-megamenu cms-megamenu-full">		<div data-elementor-type="wp-post" data-elementor-id="613" class="elementor elementor-613">
				<div class="elementor-element elementor-element-878effc e-flex e-con-boxed e-con e-parent" data-id="878effc" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-e331b00 e-con-full e-flex e-con e-child" data-id="e331b00" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-5649f06 elementor-widget elementor-widget-cms_navigation_menu" data-id="5649f06" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
				<div class="elementor-widget-container">
						<div class="cms-emenu cms-emenu--mega">
	</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-1f8238f e-con-full e-flex e-con e-child" data-id="1f8238f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-48f5547 elementor-widget elementor-widget-cms_navigation_menu" data-id="48f5547" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
				<div class="elementor-widget-container">
						<div class="cms-emenu cms-emenu--mega">
		<h2 class="cms-title text-18 text-heading mt-n5 mb-15">
			<a class="text-heading" href="#">Shop Layouts</a>
		</h2>
		<ul id="menu-shop-layouts" class="cms-menu cms-dropdown-mega"><li id="menu-item-509" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-509 cms-dropdown-mega-item"><a href="shop/two-columns/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Two Columns</span></a></li>
<li id="menu-item-510" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-510 cms-dropdown-mega-item"><a href="shop/three-columns/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Three Columns</span></a></li>
<li id="menu-item-511" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511 cms-dropdown-mega-item"><a href="shop/three-columns-wide/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Three Columns Wide</span></a></li>
<li id="menu-item-512" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-512 cms-dropdown-mega-item"><a href="shop/four-columns/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Four Columns</span></a></li>
<li id="menu-item-513" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-513 cms-dropdown-mega-item"><a href="shop/four-columns-wide/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Four Columns Wide</span></a></li>
<li id="menu-item-514" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-514 cms-dropdown-mega-item"><a href="shop/five-columns-wide/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Five Columns Wide</span></a></li>
<li id="menu-item-515" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-515 cms-dropdown-mega-item"><a href="shop/six-columns-wide/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Six Columns Wide</span></a></li>
</ul>	</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-a9af98a e-con-full e-flex e-con e-child" data-id="a9af98a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-d121596 elementor-widget elementor-widget-cms_navigation_menu" data-id="d121596" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
				<div class="elementor-widget-container">
						<div class="cms-emenu cms-emenu--mega">
		<h2 class="cms-title text-18 text-heading mt-n5 mb-15">
			<a class="text-heading" href="#">Shop Pages</a>
		</h2>
		<ul id="menu-shop-pages" class="cms-menu cms-dropdown-mega"><li id="menu-item-519" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-519 cms-dropdown-mega-item"><a href="shop/my-account/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">My Account</span></a></li>
<li id="menu-item-517" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-517 cms-dropdown-mega-item"><a href="shop/cart/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Cart</span></a></li>
<li id="menu-item-518" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-518 cms-dropdown-mega-item"><a href="shop/checkout/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Checkout</span></a></li>
<li id="menu-item-638" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-638 cms-dropdown-mega-item"><a href="wishlist/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Wishlist</span></a></li>
<li id="menu-item-521" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-521 cms-dropdown-mega-item"><a href="shop/order-tracking/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Order Tracking</span></a></li>
</ul>	</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-3868bb1 e-con-full e-flex e-con e-child" data-id="3868bb1" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-5244c34 cms-swiper-effect-scroll cms-carousel-item-shadow-no elementor-widget elementor-widget-cms_shop_collection" data-id="5244c34" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;2&quot;,&quot;effect_scroll&quot;:&quot;scroll&quot;,&quot;autoplay_speed&quot;:0,&quot;speed&quot;:3000,&quot;slides_to_show_tablet_extra&quot;:&quot;1&quot;,&quot;slides_to_show_tablet&quot;:&quot;1&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;}" data-widget_type="cms_shop_collection.default">
				<div class="elementor-widget-container">
					<h2 class="cms-ecollections-heading cms-heading empty-none text-18 text-heading mt-n5 mb-25">New Collections</h2>
<div class="cms-ecollections cms-ecollections-4 text-center">
    <div class="cms-carousel swiper">
        <div class="swiper-wrapper">
	     
       
          
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/Knitwear-460-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="Knitwear-460" class="cms-lazy lazy-loading img-cover"  style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/outerwear/index.html">Outerwear</a></h2>
                    <div class="count text-15 pt-8"><span class="count">9</span> items</div>
                </div>
    		</div>
		</div>        </div>
        
           
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/banner-video-2-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="banner-video-2" class="cms-lazy lazy-loading img-cover" style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/skirts/index.html">Skirts</a></h2>
                    <div class="count text-15 pt-8"><span class="count">2</span> items</div>
                </div>
    		</div>
		</div>        </div>
                </div>         </div>            </div>				</div>
				</div>
				</div>
					</div>
				</div>
				</div>
		</div></li> */}
<li id="menu-item-197" className="menu-item menu-item-type-post_type menu-item-object-page megamenu menu-item-has-children megamenu-full menu-item-197">
  <a href="#" className="cms-menu-link">
    <span className="menu-title title">Shop</span>
    <span className="main-menu-toggle"></span>
  </a>

  <div className="sub-menu sub-megamenu cms-megamenu-full">
    <div className="cms-emenu cms-emenu--mega">
    
      <ul id="menu-shop-categories" className="cms-menu cms-dropdown-mega">
        {categories.map((cat) => (
          <li key={cat._id} className="menu-item cms-dropdown-mega-item">
            <a href={`/category/${cat._id}`} className="cms-menu-link text-link text-hover-link">
              <span className="menu-title title">
                {cat.icon ? `${cat.icon} ` : ""}{cat.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</li>


     <li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-46 current_page_item">
  <a href="/blog" aria-current="page" class="cms-menu-link">
    <span class="menu-title title">Blog</span>
  </a>
</li>
     <li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-46 current_page_item">
  <a href="/contact" aria-current="page" class="cms-menu-link">
    <span class="menu-title title">Contact</span>
  </a>
</li>
</ul></nav> 



<div class="has-tools site-tools flex-basic d-flex gap-20 justify-content-end align-items-center">
                        <a href="#csh-login-wrap" class="site-header-login site-header-item menu-color cms-modal" data-modal="#csh-login-wrap" data-modal-mode="fade" data-modal-class="center bg-white" data-modal-slide="center" data-modal-width="400px" data-modal-content-width="400px" data-modal-space="50px">
                        <span class="header-icon trevox-icon-user"></span>
        </a>
        <div class="site-header-search cms-modal site-header-item menu-color" data-modal="#cms-modal-search" data-focus=".cms-search-popup-input" data-modal-mode="slide" data-modal-slide="top" data-modal-class=""  data-modal-width="100vw"><i class="header-icon  search-toggle trevox-icon-search1"></i></div>
        <div class="cms-header-wishlist relative woosw-menu">
            <a class="cms-wishlist relative cms-counter-icon menu-color" href="wishlist/index.html">
                                <span class="wishlist-icon header-icon trevox-icon-love" data-count="0"></span>
                <span class="header-count wishlist-count cms-count">0</span>
            </a>
        </div>
    <span class="cms-header-divider cms-hidden-mobile-menu"></span>    
<Link to="/cart" className="site-header-item site-header-cart menu-color">
  <div className="relative cms-cart-icon cms-counter-icon">
    <i className="header-icon cart-icon trevox-icon-shopping-basket1"></i>
   
    <span className="cart-counter cart_total cms-count" data-count={totalItems}>
  {totalItems}
</span>

  </div>
</Link>

        <div id="main-menu-mobile" class="main-menu-mobile cms-hidden-desktop-menu">
            <span class="btn-nav-mobile open-menu">
                <span></span>
            </span>
        </div>
                </div>
    </div>



    </div>
    
</header>	
    </div>
  );
};

export default Header;
