

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./mycss.css"

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

      	<header id="cms-header-wrap" class="site-header">
       <div id="cms-header"   className={`cms-header header-layout-3  transparent-on header-transparent header-divider ${
            scrolled ? "scrolled-header" : ""
          }`}>
             <div id="cms-header-top" class="cms-header-top header-top-default" style={{backgroundColor: "#fff"}}>		<div data-elementor-type="wp-post" data-elementor-id="142"  style={{backgroundColor: "#8b023a;"}} class="elementor elementor-142">
				<div class="elementor-element elementor-element-bccac42 bg-primary  text-white text-14 p-tb-10 e-con-boxed-wide e-flex e-con e-parent" data-id="bccac42"  style={{backgroundColor: "#8b023a;"}} data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
				<div class="elementor-element elementor-element-797c274 elementor-widget__width-initial cms-carousel-item-shadow-no elementor-widget elementor-widget-cms_headline"  style={{backgroundColor: "#8b023a;"}} data-id="797c274" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;effect&quot;:&quot;fade&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;arrows&quot;:&quot;yes&quot;}" data-widget_type="cms_headline.default">
				<div class="elementor-widget-container">
					<div class="cms-headlines cms-headlines-1 text-center">
    <div class="cms-carousel swiper">
        <div class="swiper-wrapper"> 
                            <div class="swiper-slide headline-item text-white text-hover-white">Free shipping on US orders $100+ &amp; Free exchanges</div>
                            <div class="swiper-slide headline-item text-white text-hover-white"  style={{backgroundColor: "#8b023a;"}}>Delivery time 2-3 working days</div>
                            <div class="swiper-slide headline-item text-white text-hover-white">Free exchanges &amp; free returns</div>
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
              <a class="site-logo" href="index.html" title="Trevox" rel="home">
                
                {/* <img width="83" height="19" alt="Trevox" src="wp-content/themes/trevox/assets/images/logo/logo-light.png" data-mobile="https://7oroofthemes.com/trevox/wp-content/themes/trevox/assets/images/logo/logo-light-mobile.png" data-sticky="https://7oroofthemes.com/trevox/wp-content/themes/trevox/assets/images/logo/logo.png" data-sticky-mobile="https://7oroofthemes.com/trevox/wp-content/themes/trevox/assets/images/logo/logo-mobile.png" />
                 */}
                
                <h4 style={{color: "white", fontWeight: "800"}}>Fa Clothing</h4>
                </a></div>
              
                <nav class="site-navigation site-navigation-dropdown justify-content-center flex-auto d-flex"><ul id="mastmenu" class="cms-primary-menu cms-primary-menu-dropdown"><li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-46 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-49">
              
              <a href="index.html" aria-current="page" class="cms-menu-link"><span class="menu-title title">Home</span><span class="main-menu-toggle"></span></a>

</li>
<li id="menu-item-197" class="menu-item menu-item-type-post_type menu-item-object-page megamenu menu-item-has-children megamenu-full menu-item-197"><a href="shop/index.html" class="cms-menu-link"><span class="menu-title title">Shop</span><span class="main-menu-toggle"></span></a><div class="sub-menu sub-megamenu cms-megamenu-full">		<div data-elementor-type="wp-post" data-elementor-id="613" class="elementor elementor-613">
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
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/Dress-460-qyz0f1zckltippm0cwy2z8no2lw8qn1od5rfqkxxz8.webp" alt="Dress-460" class="cms-lazy lazy-loading img-cover" style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/dresses/index.html">Dresses</a></h2>
                    <div class="count text-15 pt-8"><span class="count">1</span> item</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/T-Shirt-460-qyz0f1zckltippm0cwy2z8no2lw8qn1od5rfqkxxz8.webp" alt="T-Shirt-460" class="cms-lazy lazy-loading img-cover"  style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/t-shirts/index.html">T-Shirts</a></h2>
                    <div class="count text-15 pt-8"><span class="count">7</span> items</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/Outweater-460-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="Outweater-460" class="cms-lazy lazy-loading img-cover" style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/blouses/index.html">Blouses</a></h2>
                    <div class="count text-15 pt-8"><span class="count">4</span> items</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/Knitwear-460-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="Knitwear-460" class="cms-lazy lazy-loading img-cover"  style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/outerwear/index.html">Outerwear</a></h2>
                    <div class="count text-15 pt-8"><span class="count">9</span> items</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/Pants-460-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="Pants-460" class="cms-lazy lazy-loading img-cover"  style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/knitwear/index.html">Knitwear</a></h2>
                    <div class="count text-15 pt-8"><span class="count">7</span> items</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/Pants-460-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="Pants-460" class="cms-lazy lazy-loading img-cover"  style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/pants/index.html">Pants</a></h2>
                    <div class="count text-15 pt-8"><span class="count">4</span> items</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/dothing-that-make-happy-qyz0f11idrs8e3ndiejgeqw7h80vixxy113y9azc5g.webp" alt="dothing that make happy" class="cms-lazy lazy-loading img-cover" style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/hoodies/index.html">Hoodies</a></h2>
                    <div class="count text-15 pt-8"><span class="count">2</span> items</div>
                </div>
    		</div>
		</div>        </div>
            <div class="cms-clt-item relative hover-image-move swiper-slide">
            <div class="relative overflow-hidden cms-gradient-black-bt2"><img loading="lazy" width="290" height="250" src="wp-content/uploads/elementor/thumbs/banner-6-qyz0f1zckltippm0cwy2z8no2lw8qn1od5rfqkxxz8.webp" alt="banner-6" class="cms-lazy lazy-loading img-cover"  style={{maxHeight: "250px"}} /><div class="cms-gradient-render"></div>    		<div class="cms-overlay d-flex align-items-center justify-content-center p-40 p-lr-mobile-20">
                <div class="banner-content text-white">
    				<h2 class="text-32"><a class="text-white text-hover-white cms-hover-underline" href="product-category/shirts/index.html">Shirts</a></h2>
                    <div class="count text-15 pt-8"><span class="count">3</span> items</div>
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
		</div></li>
<li id="menu-item-129" class="menu-item menu-item-type-custom menu-item-object-custom megamenu menu-item-has-children megamenu-full menu-item-129"><a href="#" class="cms-menu-link"><span class="menu-title title">Products</span><span class="main-menu-toggle"></span></a><div class="sub-menu sub-megamenu cms-megamenu-full">		<div data-elementor-type="wp-post" data-elementor-id="617" class="elementor elementor-617">
				<div class="elementor-element elementor-element-eac42de e-flex e-con-boxed e-con e-parent" data-id="eac42de" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-faa7b29 e-con-full e-flex e-con e-child" data-id="faa7b29" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-773a107 elementor-widget elementor-widget-cms_navigation_menu" data-id="773a107" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
				<div class="elementor-widget-container">
						<div class="cms-emenu cms-emenu--mega">
		<h2 class="cms-title text-18 text-heading mt-n5 mb-15">
			<a class="text-heading" href="#">Product Types</a>
		</h2>
		<ul id="menu-product-types" class="cms-menu cms-dropdown-mega"><li id="menu-item-523" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-523 cms-dropdown-mega-item"><a href="product/polo-knitwear-sweater/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Detailed Product</span></a></li>
<li id="menu-item-524" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-524 cms-dropdown-mega-item"><a href="product/yellow-knitwear-sweater/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Standard Product</span></a></li>
<li id="menu-item-525" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-525 cms-dropdown-mega-item"><a href="product/multi-color-knitwear/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Big Images Product</span></a></li>
<li id="menu-item-526" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-526 cms-dropdown-mega-item"><a href="product/wide-leg-trousers-navy-blue-t-shirt/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Grouped Product</span></a></li>
<li id="menu-item-527" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-527 cms-dropdown-mega-item"><a href="product/emerald-turtleneck-sweater/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Full Width Product</span></a></li>
<li id="menu-item-528" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-528 cms-dropdown-mega-item"><a href="product/printed-cotton-t-shirt/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Masonry Product</span></a></li>
<li id="menu-item-529" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-529 cms-dropdown-mega-item"><a href="product/collar-zipper-fur-coat/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Variable Product</span></a></li>
<li id="menu-item-670" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-670 cms-dropdown-mega-item"><a href="product/printed-semi-fitted-t-shirt/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Variable Colors</span></a></li>
<li id="menu-item-671" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-671 cms-dropdown-mega-item"><a href="product/wide-leg-trousers/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Virtual Product</span></a></li>
</ul>	</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-5b2c808 e-con-full e-flex e-con e-child" data-id="5b2c808" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-b8c082d elementor-widget elementor-widget-cms_navigation_menu" data-id="b8c082d" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
				<div class="elementor-widget-container">
						<div class="cms-emenu cms-emenu--mega">
		<h2 class="cms-title text-18 text-heading mt-n5 mb-15">
			<a class="text-heading" href="#">Product Widgets</a>
		</h2>
		<ul id="menu-product-widgets" class="cms-menu cms-dropdown-mega"><li id="menu-item-672" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-672 cms-dropdown-mega-item"><a href="product/button-blazer-jacket/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">New Product</span></a></li>
<li id="menu-item-533" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-533 cms-dropdown-mega-item"><a href="product/boyfriend-knitted-t-shirt/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Video Product</span></a></li>
<li id="menu-item-679" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-679 cms-dropdown-mega-item"><a href="product/blue-knitwear-sweater/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">On Sale Product</span></a></li>
<li id="menu-item-681" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-681 cms-dropdown-mega-item"><a href="product/double-sided-hat/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Out Of Stock Product</span></a></li>
<li id="menu-item-536" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-536 cms-dropdown-mega-item"><a href="product/red-pattern-flowy-shirt/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">Countdown Product</span></a></li>
<li id="menu-item-537" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-537 cms-dropdown-mega-item"><a href="product/first/index.html" class="cms-menu-link text-link text-hover-link"><span class="menu-title title">External Product</span></a></li>
</ul>	</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-e1d991e e-con-full e-flex e-con e-child" data-id="e1d991e" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
				<div class="elementor-element elementor-element-8bb39f8 mb-n7 cms-carousel-item-shadow-no elementor-widget elementor-widget-cms_products_carousel" data-id="8bb39f8" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;2&quot;,&quot;slides_to_show_tablet&quot;:&quot;1&quot;,&quot;slides_to_show_mobile_extra&quot;:&quot;2&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;arrows&quot;:&quot;yes&quot;}" data-widget_type="cms_products_carousel.default">
				<div class="elementor-widget-container">
					<div id="cms_products_carousel-8bb39f8" class="cms-products-carousel cms-products-5">
    <div class="d-flex gap-40 justify-content-between pb-25">
        <div class="cms-eproducts-heading text-start">
            <div class="cms-smallheading text-heading text-15 pb-10 mt-n5 empty-none"></div>
            <h2 class="cms-heading empty-none text-18 mt-n5 text-heading">Hot items</h2>
        </div>
        <div class="d-flex gap-40 align-items-center align-self-end mt-n10">
                                    <div class="cms-carousel-buttons d-flex gap-10">
                <div class="cms-carousel-button-prev prev cms-carousel-button relative arrow-button hover outline size-28 bg-white bg-hover-primary text-primary text-hover-white ">
                    <i class="cms-carousel-button-icon rtl-flip text-12   cmsi-chevron-left" aria-hidden="true"></i><i class="cms-carousel-button-icon hover rtl-flip text-10   cmsi-long-arrow-left" aria-hidden="true"></i>                </div>
                <div class="cms-carousel-button-next next cms-carousel-button relative arrow-button hover outline size-28 bg-white bg-hover-primary text-primary text-hover-white ">
                    <i class="cms-carousel-button-icon rtl-flip text-12   cmsi-chevron-right" aria-hidden="true"></i><i class="cms-carousel-button-icon hover rtl-flip text-10   cmsi-long-arrow-right" aria-hidden="true"></i>                </div>
            </div>
                    </div>
    </div>
    <div class="cms-eproducts-content mb-n7">                        <div class="cms-carousel swiper">
                            <div class="swiper-wrapper">
                    <div class="cms-carousel-item swiper-slide hover-second-img cms-product-5 product type-product post-290 status-publish first instock product_cat-outerwear product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" width="600" height="517" src="wp-content/uploads/Polo-Knitwear-Sweater-600x517.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async"  /><img loading="lazy" width="600" height="517" src="wp-content/uploads/Polo-Knitwear-Sweater2-600x517.webp" class="attachment-woocommerce_thumbnail_rectangle size-woocommerce_thumbnail_rectangle" alt="Polo Knitwear Sweater" decoding="async"  /></div>  
                <a href="product/polo-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="indexc071.html?add-to-wishlist=290" class="cms-woosw-btn woosw-btn woosw-btn-290 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="290" data-product_name="Polo Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Polo-Knitwear-Sweater2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexf754.html?quick-view=290" class="woosq-btn woosq-btn-290 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="290" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="product/polo-knitwear-sweater/index.html" data-quantity="1" class="cms-loop-atc product_type_variable in-stock add_to_cart_button" data-product_id="290" data-product_sku="ED5690012" aria-label="Select options for &ldquo;Polo Knitwear Sweater&rdquo;" rel="nofollow">Select options</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_290" class="screen-reader-text">
		This product has multiple variants. The options may be chosen on the product page	</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/polo-knitwear-sweater/index.html">Polo Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aa8bb30"  data-product-id="290"><span class="woocommerce-Price-amount amount"><bdi>60.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-5 product type-product post-280 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" width="600" height="517" src="wp-content/uploads/Yellow-Knitwear-Sweater-600x517.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async"  /><img loading="lazy" width="600" height="517" src="wp-content/uploads/Yellow-Knitwear-Sweater4-600x517.webp" class="attachment-woocommerce_thumbnail_rectangle size-woocommerce_thumbnail_rectangle" alt="Yellow Knitwear Sweater" decoding="async"  /></div>  
                <a href="product/yellow-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index3969.html?add-to-wishlist=280" class="cms-woosw-btn woosw-btn woosw-btn-280 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="280" data-product_name="Yellow Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Yellow-Knitwear-Sweater4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexaf03.html?quick-view=280" class="woosq-btn woosq-btn-280 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="280" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index700a.html?add-to-cart=280" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="280" data-product_sku="ED5690010-1" aria-label="Add to cart: &ldquo;Yellow Knitwear Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Yellow Knitwear Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_280" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/yellow-knitwear-sweater/index.html">Yellow Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aa8cfaa"  data-product-id="280"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>90.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 90.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 45.00&#036;.</span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-5 product type-product post-268 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" width="600" height="517" src="wp-content/uploads/Multi-Color-Knitwear-600x517.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async" /><img loading="lazy" width="600" height="517" src="wp-content/uploads/Multi-Color-Knitwear2-600x517.webp" class="attachment-woocommerce_thumbnail_rectangle size-woocommerce_thumbnail_rectangle" alt="Multi Color Knitwear" decoding="async"  /></div>  
                <a href="product/multi-color-knitwear/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index07a6.html?add-to-wishlist=268" class="cms-woosw-btn woosw-btn woosw-btn-268 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="268" data-product_name="Multi Color Knitwear" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Multi-Color-Knitwear2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexf4d9.html?quick-view=268" class="woosq-btn woosq-btn-268 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="268" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexee06.html?add-to-cart=268" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="268" data-product_sku="ED5690010" aria-label="Add to cart: &ldquo;Multi Color Knitwear&rdquo;" rel="nofollow" data-success_message="&ldquo;Multi Color Knitwear&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_268" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/multi-color-knitwear/index.html">Multi Color Knitwear</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aa8df2f"  data-product-id="268"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-5 product type-product post-260 status-publish last instock product_cat-t-shirts product_tag-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <div class="wpcbm-badges wpcbm-badges-flat "><div class="wpcbm-badge wpcbm-badge-674 wpcbm-pid-260 wpcbm-badge-style-cms-new wpcbm-badge-group-102 hint--top" aria-label=""><div class="wpcbm-badge-inner">New</div></div></div><img loading="lazy" width="600" height="517" src="wp-content/uploads/Boyfriend-Knitted-T-Shirt5-600x517.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async" /><img loading="lazy" width="600" height="517" src="wp-content/uploads/Boyfriend-Knitted-T-Shirt2-600x517.webp" class="attachment-woocommerce_thumbnail_rectangle size-woocommerce_thumbnail_rectangle" alt="Boyfriend Knitted T-Shirt" decoding="async"  /></div>  
                <a href="product/boyfriend-knitted-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index16dc.html?add-to-wishlist=260" class="cms-woosw-btn woosw-btn woosw-btn-260 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="260" data-product_name="Boyfriend Knitted T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Boyfriend-Knitted-T-Shirt2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index4697.html?quick-view=260" class="woosq-btn woosq-btn-260 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="260" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index84f3.html?add-to-cart=260" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="260" data-product_sku="ED56900013" aria-label="Add to cart: &ldquo;Boyfriend Knitted T-Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Boyfriend Knitted T-Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_260" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/boyfriend-knitted-t-shirt/index.html">Boyfriend Knitted T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aa8f08f"  data-product-id="260"><span class="woocommerce-Price-amount amount"><bdi>35.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
                            </div>
                        </div>
                    </div>
</div>				</div>
				</div>
				</div>
					</div>
				</div>
				</div>
		</div></li>

<li id="menu-item-51" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51"><a href="blog-grid/index.html" class="cms-menu-link"><span class="menu-title title">Blog</span><span class="main-menu-toggle"></span></a>

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
    <span class="cms-header-divider cms-hidden-mobile-menu"></span>    <div class="site-header-item site-header-cart menu-color cms-modal" data-modal="#cms-modal-cart" data-modal-mode="slide" data-modal-slide="right" data-modal-class="bg-white">
                <div class="relative cms-cart-icon cms-counter-icon">
            <i class="header-icon cart-icon trevox-icon-shopping-basket1"></i>
            <span class="cart-counter cart_total cms-count" data-count="0">0</span>
        </div>
            </div>
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
