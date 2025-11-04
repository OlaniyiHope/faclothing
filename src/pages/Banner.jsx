import React, {useState, useEffect} from "react";

import axios from "axios";

import { Link } from "react-router-dom";import Popular from "./Policy";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShippingFast, FaLock, FaHeadset, FaWallet, FaShoppingCart } from "react-icons/fa";
import "./style.css"
import a5 from "./a5.jpg";
import a3 from "./a3.jpg";
import Featured from "./Featured";
import  "./Banner.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick?.();
    }}
    style={{
      position: "absolute",
      right: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 9999, // bump higher
      background: "rgba(255,255,255,0.9)",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "22px",
      color: "black",
      boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      pointerEvents: "auto", // force arrow to catch click
    }}
  >
    ➡
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick?.();
    }}
    style={{
      position: "absolute",
      left: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 9999, // bump higher
      background: "rgba(255,255,255,0.9)",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "22px",
      color: "black",
      boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      pointerEvents: "auto",
    }}
  >
    ⬅
  </div>
);

const TestArrow = ({ onClick }) => (
  <div
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Next arrow clicked!");
      onClick?.();
    }}
    style={{
      background: "blue",
      color: "white",
      padding: "10px",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      right: "10px",
      zIndex: 9999,
    }}
  >
    TEST ➡
  </div>
);
const Banner = () => {

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [brands, setBrands] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
//   const settings = {
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   speed: 800,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   nextArrow: <TestArrow />,
//   prevArrow: <TestArrow />,
// };

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

  // Render submenu
// Only keep children that are categories (ignore products)

 const fetchBrands = async () => {
    try {
      const res = await axios.get( `${process.env.REACT_APP_API_URL}/api/db/brands`);
      setBrands(res.data); // assuming API returns [{ _id, name, image }]
    } catch (error) {
      console.error("Failed to fetch brands:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/featured`
        );
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };

    fetchFeatured();
  }, []);


  return (
    <>
<main id="cms-main" class="cms-main is-elementor" style={{backgroundColor: "white"}}>		<div data-elementor-type="wp-page" data-elementor-id="46" class="elementor elementor-46">
				<div class="elementor-element elementor-element-7c32a94 e-con-full-no-space e-flex e-con e-parent" data-id="7c32a94" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full-no-space&quot;}">
				<div class="elementor-element elementor-element-42cbe44 cms-eslider-header-transparent-yes cms-eslider-overlay-1 elementor-widget elementor-widget-cms_slider" data-id="42cbe44" data-element_type="widget" data-settings="{&quot;dots_type&quot;:&quot;circle&quot;,&quot;subtitle_animation&quot;:&quot;fadeInLeft&quot;,&quot;subtitle_animation_delay&quot;:500,&quot;title_animation&quot;:&quot;fadeInLeft&quot;,&quot;title_animation_delay&quot;:600,&quot;description_animation&quot;:&quot;fadeInLeft&quot;,&quot;description_animation_delay&quot;:700,&quot;button_primary_animation&quot;:&quot;fadeInLeft&quot;,&quot;button_primary_animation_delay&quot;:800,&quot;button_secondary_animation&quot;:&quot;fadeInLeft&quot;,&quot;button_secondary_animation_delay&quot;:900,&quot;button_video_animation&quot;:&quot;fadeInLeft&quot;,&quot;button_video_animation_delay&quot;:1000,&quot;product_animation&quot;:&quot;fadeInRight&quot;,&quot;product_animation_delay&quot;:1000,&quot;slides_to_show&quot;:&quot;1&quot;,&quot;slides_to_show_tablet&quot;:&quot;1&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;arrows&quot;:&quot;yes&quot;,&quot;dots&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="cms_slider.default">
				<div class="elementor-widget-container">
					<div class="cms-eslider cms-eslider-2 cms-carousel swiper">
    <div class="swiper-wrapper">
                    <div class="cms-slider-item swiper-slide relative ">
                <img loading="lazy" decoding="async" width="1600" height="927" src="wp-content/uploads/2024/03/slider-2.webp" class="cms-lazy lazy-loading cms-slider-img img-cover" alt="" data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/2024/03/slider-2.webp 1600w, https://7oroofthemes.com/trevox/wp-content/uploads/2024/03/slider-2-1536x890.webp 1536w, https://7oroofthemes.com/trevox/wp-content/uploads/2024/03/slider-2-18x10.webp 18w" sizes="auto, (max-width: 1600px) 100vw, 1600px" />                <div class="cms-slider-content cms-overlay d-flex align-items-center">
                    <div class="container d-flex justify-content-start text-start">
                        <div class="cms-slider--content">
                            <div class="cms-slider-subtitle text-white text-line-3 mt-n8 mb-25 empty-none " data-cms-animation="subtitle_animation" data-cms-animation-delay="subtitle_animation_delay"></div>
                            <h2 class="cms-slider-title heading text-white text-75 text-tablet-60 text-mobile-55 mt-n10 empty-none " data-cms-animation="title_animation" data-cms-animation-delay="title_animation_delay">Stunning, Joyful<br />
& Captivating!</h2>
                            <div class="cms-slider-desc text-line-3 empty-none text-17 lh-147 text-white" data-cms-animation="description_animation" data-cms-animation-delay="description_animation_delay">Our values are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with a unique versatility and top of mind allowing the investment in masterpieces.</div>
                            <div class="cms-slider-buttons d-flex gap-30 justify-content-start pt-30 empty-none" >                                <a href="shop-category-list/index.html"  style={{ backgroundColor: "#8b023a", color: "#fff" }}  class="cms-slider-btn btn btn-white text-primary btn-hover-accent text-hover-white " data-cms-animation="button_primary_animation" data-cms-animation-delay="button_primary_animation_delay">
                                    Explore Collection                                </a>
                                                                                        <a href="shop-filter-list/index.html" class="cms-slider-btn btn btn-outline-white text-white btn-hover-white text-hover-primary " data-cms-animation="button_secondary_animation" data-cms-animation-delay="button_secondary_animation_delay">
                                    Shop This                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <div class="cms-slider-item swiper-slide relative ">
                <img loading="lazy" decoding="async" width="1600" height="1239" src="wp-content/uploads/2024/03/slider-1.webp" class="cms-lazy lazy-loading cms-slider-img img-cover" alt="" data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/2024/03/slider-1.webp 1600w, https://7oroofthemes.com/trevox/wp-content/uploads/2024/03/slider-1-1536x1189.webp 1536w, https://7oroofthemes.com/trevox/wp-content/uploads/2024/03/slider-1-15x12.webp 15w" sizes="auto, (max-width: 1600px) 100vw, 1600px" />                <div class="cms-slider-content cms-overlay d-flex align-items-center">
                    <div class="container d-flex justify-content-start text-start">
                        <div class="cms-slider--content">
                            <div class="cms-slider-subtitle text-white text-line-3 mt-n8 mb-25 empty-none " data-cms-animation="subtitle_animation" data-cms-animation-delay="subtitle_animation_delay"></div>
                            <h2 class="cms-slider-title heading text-white text-75 text-tablet-60 text-mobile-55 mt-n10 empty-none " data-cms-animation="title_animation" data-cms-animation-delay="title_animation_delay">An Unobtrusive<br />
& True Beauty!</h2>
                            <div class="cms-slider-desc text-line-3 empty-none text-17 lh-147 text-white" data-cms-animation="description_animation" data-cms-animation-delay="description_animation_delay">Our values are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with a unique versatility and top of mind allowing the investment in masterpieces.</div>
                            <div class="cms-slider-buttons d-flex gap-30 justify-content-start pt-30 empty-none">                                <a href="shop-category-list/index.html"  style={{ backgroundColor: "#8b023a", color: "#fff" }} class="cms-slider-btn btn btn-white text-primary btn-hover-accent text-hover-white " data-cms-animation="button_primary_animation" data-cms-animation-delay="button_primary_animation_delay">
                                    Explore Collection                                </a>
                                                                                        <a href="shop-filter-list/index.html" class="cms-slider-btn btn btn-outline-white text-white btn-hover-white text-hover-primary " data-cms-animation="button_secondary_animation" data-cms-animation-delay="button_secondary_animation_delay">
                                    Shop This                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            <div class="cms-slider-button-arrow cms-carousel-button-prev">
            <i class="cmsi-arrow-prev rtl-flip"></i>
            <span class="arrow-text-prev">Prev</span>
        </div>
        <div class="cms-slider-button-arrow cms-carousel-button-next">
            <span class="arrow-text-next">Next</span>
            <i class="cmsi-arrow-next rtl-flip"></i>
        </div>
                <div class="cms-carousel-dots cms-carousel-dots-circle cms-carousel-dots-in justify-content-center text-white cms-carousel-dots-white cms-carousel-dots-active-white"></div>
    </div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-670981e pt-80 pt-tablet-30 e-con-boxed-wide e-flex e-con e-parent" data-id="670981e" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
				<div class="elementor-element elementor-element-8e17bf2 elementor-widget__width-initial pb-60 pb-tablet-30 elementor-invisible elementor-widget elementor-widget-cms_heading" data-id="8e17bf2" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="cms_heading.default">
				<div class="elementor-widget-container">
					<div class="cms-eheading cms-eheading-5 text-center">
	<div class="cms-smallheading text-heading-lighten pb-10 ls-06 empty-none"></div>
	<h2 class="cms-heading text-28 lh-1357 ls--112 font-400 text-heading empty-none">Welcome to Fa & A Africa Print Everyday Wear. FA & A designs empowers women to embrace cultural pride and beauty with Afro-centric fashion that is modest, modern and majestic. Each piece in the store is carefully hand-patterned and made. </h2>
</div>				</div>
				</div>
				<div class="elementor-element elementor-element-24a00bf elementor-invisible elementor-widget elementor-widget-egrid-products" data-id="24a00bf" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="egrid-products.default">
				<div class="elementor-widget-container">
					<div class="egrid-products-wrapper"><div class="lds-ring"><div></div><div></div><div></div><div></div></div>
<div class="row"><div class="egrid-products-content flex-basic flex-smobile-100 "><div class="egrid-products egrid-products-1">
	<div class="woocommerce-notices-wrapper"></div><div class="cms-result-order w-100 d-flex justify-content-between align-items-center"><div class="egrid-products-featured-status-filter widget_featured_status">
    <ul class="egrid-products-featured-filter d-flex gap-15 text-15 text-uppercase ls-06">
                            <li class="egrid-products-featured-filter-item chosen">
                        <a rel="nofollow" href="#" class="chosen" egrid-products-featured-status-filter>
                            All Products                        </a>
                    </li>
                                    <li class="egrid-products-featured-filter-item ">
                        <a rel="nofollow" href="#featured" class="" egrid-products-featured-status-filter>
                            Hot Items                        </a>
                    </li>
                                    <li class="egrid-products-featured-filter-item ">
                        <a rel="nofollow" href="#newarrival" class="" egrid-products-featured-status-filter>
                            New Arrivals                        </a>
                    </li>
                                    <li class="egrid-products-featured-filter-item ">
                        <a rel="nofollow" href="#onsale" class="" egrid-products-featured-status-filter>
                            On Sale                        </a>
                    </li>
                    </ul>
</div><form class="woocommerce-ordering" method="get">
		<select
		name="orderby"
		class="orderby"
					aria-label="Shop order"
			>
					<option value="popularity" >Best Selling</option>
					<option value="rating" >Rating</option>
					<option value="title" >Alphabetically, A-Z</option>
					<option value="title-desc" >Alphabetically, Z-A</option>
					<option value="price" >Price, low to high</option>
					<option value="price-desc" >Price, high to low</option>
					<option value="date" >Date, old to new</option>
					<option value="date-desc"  selected='selected'>Date, new to old</option>
			</select>
	<input type="hidden" name="paged" value="1" />
	</form>
</div><div class="cms-eproducts-content cms-grid-content d-flex  flex-col-4 flex-col-tablet-3 flex-col-mobile-2 flex-col-smobile-1"><div class="cms-product-1 product type-product post-290 status-publish first instock product_cat-outerwear product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Polo-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Polo-Knitwear-Sweater2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Polo Knitwear Sweater"  /></div>  
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
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aae4527"  data-product-id="290"><span class="woocommerce-Price-amount amount"><bdi>60.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-280 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Yellow-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Yellow-Knitwear-Sweater4-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Yellow Knitwear Sweater"  /></div>  
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
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aae51cb"  data-product-id="280"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>90.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 90.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 45.00&#036;.</span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-268 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Multi-Color-Knitwear-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Multi-Color-Knitwear2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Multi Color Knitwear"  /></div>  
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
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aae5c58"  data-product-id="268"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-260 status-publish last instock product_cat-t-shirts product_tag-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <div class="wpcbm-badges wpcbm-badges-flat "><div class="wpcbm-badge wpcbm-badge-674 wpcbm-pid-260 wpcbm-badge-style-cms-new wpcbm-badge-group-102 hint--top" aria-label=""><div class="wpcbm-badge-inner">New</div></div></div><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Boyfriend-Knitted-T-Shirt5-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Boyfriend-Knitted-T-Shirt2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Boyfriend Knitted T-Shirt"  /></div>  
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
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aae66fe"  data-product-id="260"><span class="woocommerce-Price-amount amount"><bdi>35.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-249 status-publish first instock product_cat-pants product_tag-pants has-post-thumbnail virtual purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Wide-Leg-Trousers7-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Wide-Leg-Trousers-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Wide Leg Trousers"  /></div>  
                <a href="product/wide-leg-trousers/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index6a7b.html?add-to-wishlist=249" class="cms-woosw-btn woosw-btn woosw-btn-249 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="249" data-product_name="Wide Leg Trousers" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Wide-Leg-Trousers-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexbc13.html?quick-view=249" class="woosq-btn woosq-btn-249 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="249" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexfaa8.html?add-to-cart=249" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="249" data-product_sku="ED56900042" aria-label="Add to cart: &ldquo;Wide Leg Trousers&rdquo;" rel="nofollow" data-success_message="&ldquo;Wide Leg Trousers&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_249" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/wide-leg-trousers/index.html">Wide Leg Trousers</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aae87b8"  data-product-id="249"><span class="woocommerce-Price-amount amount"><bdi>55.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-239 status-publish outofstock product_cat-accessories product_cat-blouses product_cat-dresses product_cat-hoodies product_cat-knitwear product_cat-outerwear product_cat-pants product_cat-shirts product_cat-shorts product_cat-skirts product_cat-t-shirts product_tag-accessories product_tag-blouses product_tag-dresses product_tag-hoodies product_tag-knitwear product_tag-outerwear product_tag-pants product_tag-shirts product_tag-shorts product_tag-skirts product_tag-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"><span class="cms-wc-badge sold-out">Sold Out</span>    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Double-Sided-Hat2-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Double-Sided-Hat3-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Double-Sided Hat"  /></div>  
                <a href="product/double-sided-hat/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index53b5.html?add-to-wishlist=239" class="cms-woosw-btn woosw-btn woosw-btn-239 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="239" data-product_name="Double-Sided Hat" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Double-Sided-Hat3-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index455f.html?quick-view=239" class="woosq-btn woosq-btn-239 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="239" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="product/double-sided-hat/index.html" data-quantity="1" class="cms-loop-atc product_type_simple out-of-stock" data-product_id="239" data-product_sku="ED56900073" aria-label="Read more about &ldquo;Double-Sided Hat&rdquo;" rel="nofollow" data-success_message="">Read more</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_239" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/double-sided-hat/index.html">Double-Sided Hat</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aaea3f1"  data-product-id="239"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-218 status-publish instock product_cat-blouses product_cat-knitwear product_tag-blouses product_tag-knitwear has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Emerald-Turtleneck-Sweater5-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Emerald-Turtleneck-Sweater-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Emerald Turtleneck Sweater"  /></div>  
                <a href="product/emerald-turtleneck-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index4e10.html?add-to-wishlist=218" class="cms-woosw-btn woosw-btn woosw-btn-218 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="218" data-product_name="Emerald Turtleneck Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Emerald-Turtleneck-Sweater-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexc0bc.html?quick-view=218" class="woosq-btn woosq-btn-218 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="218" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexa1f5.html?add-to-cart=218" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="218" data-product_sku="ED5690007-1" aria-label="Add to cart: &ldquo;Emerald Turtleneck Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Emerald Turtleneck Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_218" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/emerald-turtleneck-sweater/index.html">Emerald Turtleneck Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aaec39c"  data-product-id="218"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>80.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 80.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>40.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 40.00&#036;.</span></span></span>
</div></div>
<div class="cms-product-1 product type-product post-222 status-publish last instock product_cat-knitwear product_cat-t-shirts product_tag-shirts product_tag-skirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Printed-Cotton-T-Shirt3-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Printed-Cotton-T-Shirt4-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Printed Cotton T-Shirt" /></div>  
                <a href="product/printed-cotton-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index6f1b.html?add-to-wishlist=222" class="cms-woosw-btn woosw-btn woosw-btn-222 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="222" data-product_name="Printed Cotton T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index7f35.html?quick-view=222" class="woosq-btn woosq-btn-222 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="222" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index5f99.html?add-to-cart=222" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="222" data-product_sku="ED56900072" aria-label="Add to cart: &ldquo;Printed Cotton T-Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Printed Cotton T-Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_222" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/printed-cotton-t-shirt/index.html">Printed Cotton T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9aaeea44"  data-product-id="222"><span class="woocommerce-Price-amount amount"><bdi>40.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
						</div></div></div></div></div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-c1438ce p-tb-80 p-tb-tablet-30  xxxx xxxx e-flex e-con-boxed e-con e-parent" data-id="c1438ce" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-556d6b0 elementor-invisible elementor-widget elementor-widget-cms_fancy_box" data-id="556d6b0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="cms_fancy_box.default">
				<div class="elementor-widget-container">
					<div class="cms-fancyboxs-3 d-flex gutter gutter-grid flex-col-4 flex-col-tablet-extra-2 flex-col-tablet-2 flex-col-smobile-1 text-start">
		<div class="fancy-box-item relative">
		<div class="cms-fancybox cms-fancybox-3 hover-icon-bounce cms-transition d-flex gap-30 flex-nowrap">
			<div class="cms-icon text-heading text-48 text-heading  trevoxicon- trevox-icon-box" aria-hidden="true"></div>			<div class="flex-basic">
				<div class="cms-title text-22 text-heading">Free Shipping </div>
			  <div class="cms-desc text-body lh-1-533 text-15 pt-5 mb-n10 empty-none"><p>Free shipping when you purchase an item from $150 + within the united state. </p>
</div>
							</div>
		</div>
	</div>
		<div class="fancy-box-item relative">
		<div class="cms-fancybox cms-fancybox-3 hover-icon-bounce cms-transition d-flex gap-30 flex-nowrap">
			<div class="cms-icon text-heading text-48 text-heading  trevoxicon- trevox-icon-transaction" aria-hidden="true"></div>			<div class="flex-basic">
				<div class="cms-title text-22 text-heading">Buy Now Pay Later</div>
			  <div class="cms-desc text-body lh-1-533 text-15 pt-5 mb-n10 empty-none"><p>We offer customers the opportunity to buy now and pay later, pay 4 times or 3 times etc</p>
</div>
							</div>
		</div>
	</div>
		<div class="fancy-box-item relative">
		<div class="cms-fancybox cms-fancybox-3 hover-icon-bounce cms-transition d-flex gap-30 flex-nowrap">
			<div class="cms-icon text-heading text-48 text-heading  trevoxicon- trevox-icon-cash" aria-hidden="true"></div>			<div class="flex-basic">
				<div class="cms-title text-22 text-heading">Flexible Payment</div>
			  <div class="cms-desc text-body lh-1-533 text-15 pt-5 mb-n10 empty-none"><p>We accept different payments method, paypal, stripe etc, our payment method is flexible.</p>
</div>
							</div>
		</div>
	</div>
		<div class="fancy-box-item relative">
		<div class="cms-fancybox cms-fancybox-3 hover-icon-bounce cms-transition d-flex gap-30 flex-nowrap">
			<div class="cms-icon text-heading text-48 text-heading  trevoxicon- trevox-icon-exchange" aria-hidden="true"></div>			<div class="flex-basic">
				<div class="cms-title text-22 text-heading">Exchanges & Returns </div>
			  <div class="cms-desc text-body lh-1-533 text-15 pt-5 mb-n10 empty-none"><p>You have 14 days from the shipping or delivery date to return your purchase for exchange and it must be in original condition</p>
</div>
							</div>
		</div>
	</div>
	</div>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-b49a0aa e-con-boxed-wide e-flex e-con e-parent" data-id="b49a0aa" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
		<div class="elementor-element elementor-element-9764b6d e-con-full e-flex elementor-invisible e-con e-child" data-id="9764b6d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;animation&quot;:&quot;fadeInLeft&quot;}">
				<div class="elementor-element elementor-element-1db42ed elementor-widget elementor-widget-cms_taxonomies" data-id="1db42ed" data-element_type="widget" data-widget_type="cms_taxonomies.default">
				<div class="elementor-widget-container">
					<h2 class="cms-heading text-22 empty-none mb-25"></h2>
<div class="cms-etaxonomies cms-etaxonomies-1 d-flex gutter flex-col-1 flex-col-smobile-1">
			<div class="cms-tax-item relative"><div class="cms-tax--item relative hover-image-zoom-out overflow-hidden"><div class="cms-lazy lazy-loading cms-bg-cover hover-bg cms-transition bg-top-center"   style={{
    "--cms-bg-lazyload": "url(wp-content/uploads/Dress.webp)",
    backgroundImage: "var(--cms-bg-lazyload-loaded)",
    maxHeight: "620px",
  }} data-as-background="yes"><img loading="lazy" decoding="async" width="930" height="620" src="wp-content/uploads/elementor/thumbs/Dress-qyz0f11q6fzvgj1p21nawgqp2t5yia6co3mw5af4xk.webp" class="as-bg-fix cms-lazy" alt="Dress"  /></div>				
                <a class="cms-overlay cms-link-overlay" href="product-category/dresses/index.html"></a>
                <div class="cms-content p-40 absolute bottom-left z-top">
				   <a class="cms-heading text-32 cms-hover-underline d-block" href="product-category/dresses/index.html">Dresses</a>
                   <div class="count pt-5 mb-n7"><span class="count">1</span> item</div>
					<a class="cms-link cms-hover-underline empty-none pt-10 mb-n7 d-block" href="product-category/dresses/index.html" data-title="1"></a>
				</div>
			</div></div>	</div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-93ec836 e-con-full e-flex elementor-invisible e-con e-child" data-id="93ec836" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;animation&quot;:&quot;fadeInRight&quot;}">
				<div class="elementor-element elementor-element-0aa5f61 elementor-widget__width-initial elementor-widget elementor-widget-cms_taxonomies" data-id="0aa5f61" data-element_type="widget" data-widget_type="cms_taxonomies.default">
				<div class="elementor-widget-container">
					<h2 class="cms-heading text-22 empty-none mb-25"></h2>
<div class="cms-etaxonomies cms-etaxonomies-2 d-flex gutter flex-col-1 flex-col-smobile-1">
			            <div class="cms-tax-item relative">
                <div class="cms-tax--item relative hover-image-zoom-out">
    				<a class="d-block overflow-hidden cms-radius-tl-100 mb-35" href="product-category/t-shirts/index.html"><img loading="lazy" decoding="async" width="490" height="490" src="wp-content/uploads/elementor/thumbs/T-Shirt-qyz0f11kthdbsqwk2nqs1qwxpfttct5uu0hfdajrtw.webp" alt="T-Shirt" class="cms-lazy lazy-loading img-cover"  style={{maxHeight:"490px"}} /></a>				    <a class="cms-heading text-32 cms-hover-underline" href="product-category/t-shirts/index.html">T-shirts</a>
                    <div class="count pt-5 mb-n7"><span class="count">7</span> items</div>
					<a class="cms-link cms-hover-underline empty-none pt-10 mb-n7 d-block" href="product-category/t-shirts/index.html" data-title="7"></a>
				</div>
            </div>
				</div>				</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-8f07413 e-con-boxed-wide e-flex e-con e-parent" data-id="8f07413" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
		<div class="elementor-element elementor-element-99a5c5d e-con-full e-flex elementor-invisible e-con e-child" data-id="99a5c5d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;animation&quot;:&quot;fadeInLeft&quot;}">
				<div class="elementor-element elementor-element-997b7bb elementor-widget__width-initial elementor-widget elementor-widget-cms_taxonomies" data-id="997b7bb" data-element_type="widget" data-widget_type="cms_taxonomies.default">
				<div class="elementor-widget-container">
					<h2 class="cms-heading text-22 empty-none mb-25"></h2>
<div class="cms-etaxonomies cms-etaxonomies-3 d-flex gutter flex-col-1 flex-col-smobile-1">
			            <div class="cms-tax-item relative">
                <div class="cms-tax--item relative hover-image-zoom-out">
    				<a class="d-block overflow-hidden cms-radius-tr-100 mb-35" href="product-category/outerwear/index.html"><img loading="lazy" decoding="async" width="490" height="490" src="wp-content/uploads/elementor/thumbs/Outweater-qyz0f11kthdbsqwk2nqs1qwxpfttct5uu0hfdajrtw.webp" alt="Outweater" class="cms-lazy lazy-loading img-cover"  style={{maxHeight:"490px"}}  /></a>				    <a class="cms-heading text-32 cms-hover-underline" href="product-category/outerwear/index.html">Outerwear</a>
                    <div class="count pt-5 mb-n7"><span class="count">9</span> items</div>
					<a class="cms-link cms-hover-underline empty-none pt-10 mb-n7 d-block" href="product-category/outerwear/index.html" data-title="9"></a>
				</div>
            </div>
				</div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-aaca496 e-con-full e-flex elementor-invisible e-con e-child" data-id="aaca496" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;animation&quot;:&quot;fadeInRight&quot;}">
				<div class="elementor-element elementor-element-dea6ebf elementor-widget elementor-widget-cms_taxonomies" data-id="dea6ebf" data-element_type="widget" data-widget_type="cms_taxonomies.default">
				<div class="elementor-widget-container">
					<h2 class="cms-heading text-22 empty-none mb-25"></h2>
<div class="cms-etaxonomies cms-etaxonomies-1 d-flex gutter flex-col-1 flex-col-smobile-1">
			<div class="cms-tax-item relative"><div class="cms-tax--item relative hover-image-zoom-out overflow-hidden"><div class="cms-lazy lazy-loading cms-bg-cover hover-bg cms-transition bg-top-center"   style={{
    "--cms-bg-lazyload": "url(wp-content/uploads/Blouse.webp)",
    backgroundImage: "var(--cms-bg-lazyload-loaded)",
    maxHeight: "620px",
  }} data-as-background="yes"><img loading="lazy" decoding="async" width="930" height="620" src="wp-content/uploads/elementor/thumbs/Blouse-qyz0f11q6fzvgj1p21nawgqp2t5yia6co3mw5af4xk.webp" class="as-bg-fix cms-lazy" alt="Blouse"  /></div>				
                <a class="cms-overlay cms-link-overlay" href="product-category/blouses/index.html"></a>
                <div class="cms-content p-40 absolute bottom-left z-top">
				   <a class="cms-heading text-32 cms-hover-underline d-block" href="product-category/blouses/index.html">Blouses</a>
                   <div class="count pt-5 mb-n7"><span class="count">4</span> items</div>
					<a class="cms-link cms-hover-underline empty-none pt-10 mb-n7 d-block" href="product-category/blouses/index.html" data-title="4"></a>
				</div>
			</div></div>	</div>				</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-b0b142d pt-50 pb-70 pt-tablet-0 pb-tablet-20 bdr-b-1 e-flex e-con-boxed e-con e-parent" data-id="b0b142d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-e575248 text-uppercase elementor-invisible elementor-widget elementor-widget-cms_text_scroll" data-id="e575248" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="cms_text_scroll.default">
				<div class="elementor-widget-container">
					<div class="cms-swiper-container swiper-container cms-text-scroll text-primary text- text-95 text-tablet-80 text-smobile-40 cms-heading">
	<div class="cms-swiper-wrapper swiper-wrapper">
					<div class="cms-swiper-slide swiper-slide d-flex gap-40 pr-30" style={{color: "#8b023a"}}>
				<div class="text empty-none" style={{color: "#8b023a"}}>Daring</div>
				<div class="banner"><img loading="lazy" decoding="async" width="106" height="106" src="wp-content/uploads/daring.png" class="cms-lazy lazy-loading" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/daring.png 106w, https://7oroofthemes.com/trevox/wp-content/uploads/daring-12x12.png 12w" sizes="auto, (max-width: 106px) 100vw, 106px" /></div>			</div>
					<div class="cms-swiper-slide swiper-slide d-flex gap-40 pr-30" style={{color: "#8b023a"}}>
				<div class="text empty-none" style={{color: "#8b023a"}}>Charming</div>
				<div class="banner"><img loading="lazy" decoding="async" width="160" height="106" src="wp-content/uploads/charming.webp" class="cms-lazy lazy-loading" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/charming.webp 160w, https://7oroofthemes.com/trevox/wp-content/uploads/charming-18x12.webp 18w" sizes="auto, (max-width: 160px) 100vw, 160px" /></div>			</div>
					<div class="cms-swiper-slide swiper-slide d-flex gap-40 pr-30" style={{color: "#8b023a"}}>
				<div class="text empty-none" style={{color: "#8b023a"}}>Vibrant</div>
				<div class="banner"><img loading="lazy" decoding="async" width="106" height="106" src="wp-content/uploads/Vibrant.webp" class="cms-lazy lazy-loading" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/Vibrant.webp 106w, https://7oroofthemes.com/trevox/wp-content/uploads/Vibrant-12x12.webp 12w" sizes="auto, (max-width: 106px) 100vw, 106px" /></div>			</div>
					<div class="cms-swiper-slide swiper-slide d-flex gap-40 pr-30" style={{color: "#8b023a"}}>
				<div class="text empty-none" style={{color: "#8b023a"}}>Captivating</div>
				<div class="banner"><img loading="lazy" decoding="async" width="106" height="106" src="wp-content/uploads/banner-11.webp" class="cms-lazy lazy-loading" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/banner-11.webp 106w, https://7oroofthemes.com/trevox/wp-content/uploads/banner-11-12x12.webp 12w" sizes="auto, (max-width: 106px) 100vw, 106px" /></div>			</div>
					<div class="cms-swiper-slide swiper-slide d-flex gap-40 pr-30" style={{color: "#8b023a"}}>
				<div class="text empty-none" style={{color: "#8b023a"}}>Serene</div>
				<div class="banner"><img loading="lazy" decoding="async" width="160" height="106" src="wp-content/uploads/banner-12.webp" class="cms-lazy lazy-loading" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/banner-12.webp 160w, https://7oroofthemes.com/trevox/wp-content/uploads/banner-12-18x12.webp 18w" sizes="auto, (max-width: 160px) 100vw, 160px" /></div>			</div>
					<div class="cms-swiper-slide swiper-slide d-flex gap-40 pr-30" style={{color: "#8b023a"}}>
				<div class="text empty-none" style={{color: "#8b023a"}}>Stunning</div>
				<div class="banner"><img loading="lazy" decoding="async" width="106" height="106" src="wp-content/uploads/banner-13.webp" class="cms-lazy lazy-loading" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/banner-13.webp 106w, https://7oroofthemes.com/trevox/wp-content/uploads/banner-13-12x12.webp 12w" sizes="auto, (max-width: 106px) 100vw, 106px" /></div>			</div>
			</div>
</div>				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-dfad287 e-con-boxed-wide p-tb-100 p-tb-tablet-30 e-flex e-con e-parent" data-id="dfad287" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
				<div class="elementor-element elementor-element-bb1a9aa cms-swiper-full-end-large cms-carousel-item-shadow-yes elementor-invisible elementor-widget elementor-widget-cms_products_carousel" data-id="bb1a9aa" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;5&quot;,&quot;slides_to_scroll&quot;:&quot;3&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.01000000000000000020816681711721685132943093776702880859375,&quot;sizes&quot;:[]},&quot;slides_to_show_laptop&quot;:&quot;4&quot;,&quot;slides_to_show_tablet_extra&quot;:&quot;3&quot;,&quot;slides_to_show_tablet&quot;:&quot;2&quot;,&quot;slides_to_show_mobile_extra&quot;:&quot;2&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;slides_to_scroll_laptop&quot;:&quot;4&quot;,&quot;slides_to_scroll_tablet_extra&quot;:&quot;3&quot;,&quot;slides_to_scroll_tablet&quot;:&quot;2&quot;,&quot;slides_to_scroll_mobile_extra&quot;:&quot;2&quot;,&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;dots&quot;:&quot;yes&quot;,&quot;dots_type&quot;:&quot;circle&quot;}" data-widget_type="cms_products_carousel.default">
				<div class="elementor-widget-container">
					<div id="cms_products_carousel-bb1a9aa" class="cms-eproducts-carousel cms-eproducts-carousel-1 cms-eproducts-1">
    <div class="d-flex gap-40 justify-content-between pb-40">
        <div class="cms-eproducts-heading text-start">
            <div class="cms-smallheading text-heading text-17 font-700 pb-10 mt-n7 empty-none"></div>
            <h2 class="cms-heading empty-none text-45 lh-1222 text-heading mb-n10">Best Sellers</h2>
        </div>
        <div class="d-flex gap-40 align-items-center align-self-end">
                        <div class="cms-eproducts-button text-start">
                <a class="cms-link cms-hover-underline2" href="shop-left-sidebar/index.html">Shop All</a>
            </div>
                                </div>
    </div>
    <div class="cms-eproducts-content">                        <div class="cms-carousel swiper">
                            <div class="swiper-wrapper">
                    <div class="cms-carousel-item swiper-slide hover-second-img cms-product-1 product type-product post-153 status-publish first instock product_cat-outerwear product_cat-t-shirts product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Navy-Blue-Pattern-T-Shirt-3-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Navy-Blue-Pattern-T-Shirt-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Navy Blue Pattern T-Shirt"  /></div>  
                <a href="product/navy-blue-pattern-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="indexe64b.html?add-to-wishlist=153" class="cms-woosw-btn woosw-btn woosw-btn-153 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="153" data-product_name="Navy Blue Pattern T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Navy-Blue-Pattern-T-Shirt-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index357e.html?quick-view=153" class="woosq-btn woosq-btn-153 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="153" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexb133.html?add-to-cart=153" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="153" data-product_sku="ED5690002" aria-label="Add to cart: &ldquo;Navy Blue Pattern T-Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Navy Blue Pattern T-Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_153" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/navy-blue-pattern-t-shirt/index.html">Navy Blue Pattern T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9ab09e47"  data-product-id="153"><span class="woocommerce-Price-amount amount"><bdi>25.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-1 product type-product post-205 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-shirts product_tag-skirts has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">29% OFF</span>

	    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Blue-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Blue-Knitwear-Sweater9-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Blue Knitwear Sweater"  /></div>  
                <a href="product/blue-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index8d09.html?add-to-wishlist=205" class="cms-woosw-btn woosw-btn woosw-btn-205 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="205" data-product_name="Blue Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Blue-Knitwear-Sweater9-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexa04d.html?quick-view=205" class="woosq-btn woosq-btn-205 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="205" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index274e.html?add-to-cart=205" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="205" data-product_sku="ED5690007" aria-label="Add to cart: &ldquo;Blue Knitwear Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Blue Knitwear Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_205" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/blue-knitwear-sweater/index.html">Blue Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9ab0b7e7"  data-product-id="205"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 70.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>50.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 50.00&#036;.</span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-1 product type-product post-184 status-publish instock product_cat-outerwear product_cat-t-shirts product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Printed-Semi-Fitted-T-Shirt-3-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Printed-Semi-Fitted-T-Shirt-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Printed Semi-Fitted T-Shirt"  /></div>  
                <a href="product/printed-semi-fitted-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="indexfe17.html?add-to-wishlist=184" class="cms-woosw-btn woosw-btn woosw-btn-184 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="184" data-product_name="Printed Semi-Fitted T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Semi-Fitted-T-Shirt-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index3068.html?quick-view=184" class="woosq-btn woosq-btn-184 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="184" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="product/printed-semi-fitted-t-shirt/index.html" data-quantity="1" class="cms-loop-atc product_type_variable in-stock add_to_cart_button" data-product_id="184" data-product_sku="ED5690004" aria-label="Select options for &ldquo;Printed Semi-Fitted T-Shirt&rdquo;" rel="nofollow">Select options</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_184" class="screen-reader-text">
		This product has multiple variants. The options may be chosen on the product page	</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/printed-semi-fitted-t-shirt/index.html">Printed Semi-Fitted T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9ab0d047"  data-product-id="184"><span class="woocommerce-Price-amount amount"><bdi>35.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-1 product type-product post-198 status-publish last instock product_cat-shirts product_cat-skirts product_tag-shirts product_tag-skirts has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-active wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Red-Pattern-Flowy-Shirt4-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Red-Pattern-Flowy-Shirt-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Red Pattern Flowy Shirt"  /></div>  
                <a href="product/red-pattern-flowy-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index07b8.html?add-to-wishlist=198" class="cms-woosw-btn woosw-btn woosw-btn-198 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="198" data-product_name="Red Pattern Flowy Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Red-Pattern-Flowy-Shirt-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexb467.html?quick-view=198" class="woosq-btn woosq-btn-198 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="198" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index6f15.html?add-to-cart=198" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="198" data-product_sku="ED5690006" aria-label="Add to cart: &ldquo;Red Pattern Flowy Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Red Pattern Flowy Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_198" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/red-pattern-flowy-shirt/index.html">Red Pattern Flowy Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9ab0ea7a"  data-product-id="198"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>100.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 100.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>50.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 50.00&#036;.</span></span></span>
</div></div>
<div class="cms-carousel-item swiper-slide hover-second-img cms-product-1 product type-product post-159 status-publish first instock product_cat-outerwear product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <div class="wpcbm-badges wpcbm-badges-flat "><div class="wpcbm-badge wpcbm-badge-674 wpcbm-pid-159 wpcbm-badge-style-cms-new wpcbm-badge-group-102 hint--top" aria-label=""><div class="wpcbm-badge-inner">New</div></div></div><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Button-Blazer-Jacket-4-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="wp-content/uploads/Button-Blazer-Jacket-2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Button Blazer Jacket"  /></div>  
                <a href="product/button-blazer-jacket/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index4b09.html?add-to-wishlist=159" class="cms-woosw-btn woosw-btn woosw-btn-159 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="159" data-product_name="Button Blazer Jacket" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Button-Blazer-Jacket-2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index56b3.html?quick-view=159" class="woosq-btn woosq-btn-159 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="159" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexe8b4.html?add-to-cart=159" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="159" data-product_sku="ED5690003" aria-label="Add to cart: &ldquo;Button Blazer Jacket&rdquo;" rel="nofollow" data-success_message="&ldquo;Button Blazer Jacket&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_159" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="product/button-blazer-jacket/index.html">Button Blazer Jacket</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906b9ab104d9"  data-product-id="159"><span class="woocommerce-Price-amount amount"><bdi>95.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
                            </div>
                        </div>
                                <div class="cms-carousel-dots cms-carousel-dots-circle cms-carousel-dots-primary-regular cms-carousel-dots-active-accent-regular justify-content-center "></div>
        </div>
</div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-1462b1a e-con-full-space-end e-flex elementor-invisible e-con e-parent" data-id="1462b1a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full-space-end&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
				<div class="elementor-element elementor-element-e5f6248 elementor-widget elementor-widget-cms_text_scroll" data-id="e5f6248" data-element_type="widget" data-widget_type="cms_text_scroll.default">
				<div class="elementor-widget-container">
					<div class="cms-text-scroll cms-text-scroll-3">
	<div class="cms-text-scroll-heading d-flex justify-content-end gap">
		<div class="banner flex-basic order-first pr-70 pr-tablet-extra-0"><div class="cms-lazy lazy-loading cms-bg-cover "  style={{
    "--cms-bg-lazyload": "url(wp-content/uploads/banner-1-1.jpg)",
    backgroundImage: "var(--cms-bg-lazyload-loaded)",
    maxHeight: "720px",
  }}  data-as-background="yes"><img loading="lazy" decoding="async" width="930" height="720" src="wp-content/uploads/elementor/thumbs/banner-1-1-qyz0f11q6g0fx4dze4brfkkpgnm5s65j9l4q68y3z4.jpg" class="as-bg-fix cms-lazy" alt="banner-1-1"  /></div></div>		<div class="content flex-auto pt-90 pt-laptop-30 pt-tablet-extra-0 pb-tablet-30">
			<h2 class="cms-heading empty-none text-heading text-55 lh-1182">An Unobtrusive, Innovative With A True Beauty!</h2>
			<div class="cms-desc pt-20 empty-none text-body">We believe in creating unique products, so we use finest materials and stunning design to create special items.</div>
			<a class="btn btn-outline-primary text-primary btn-hover-primary text-hover-white mt-30 empty-none" href="about-us/index.html" style={{backgroundColor: "#fff", color: "#8b023a"}}>Learn More</a>
		</div>
	</div>
	<div class="cms-swiper-container swiper-container text-primary text- text-95 text-tablet-80 text-smobile-40 cms-heading">
		<div class="cms-swiper-wrapper swiper-wrapper">
							<div class="cms-swiper-slide swiper-slide d-flex gap-40" style={{color: "#8b023a"}}>
					<div class="text empty-none" style={{color: "#8b023a"}}>Fashion Can Be Bought. </div>
									</div>
							<div class="cms-swiper-slide swiper-slide d-flex gap-40" style={{color: "#8b023a"}}>
					<div class="text empty-none" style={{color: "#8b023a"}}>Style One Must Possess!! </div>
									</div>
					</div>
	</div>
</div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-c5e4242 p-tb-70 p-tb-tablet-20 e-flex e-con-boxed e-con e-parent" data-id="c5e4242" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-ad35c7a cms-carousel-item-shadow-no elementor-invisible elementor-widget elementor-widget-cms_testimonials" data-id="ad35c7a" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500,&quot;arrows&quot;:&quot;yes&quot;}" data-widget_type="cms_testimonials.default">
				<div class="elementor-widget-container">
					    <div class="cms-ttmn-quote trevox-icon-quotes text-90 text-primary pb-10 text-center"></div>
<div class="cms-ettmn cms-ettmn-carousel cms-ettmn-1 text-center relative p-lr-220 p-lr-tablet-50 p-lr-mobile-0">
            <div class="cms-carousel swiper">
            <div class="swiper-wrapper">
        
                            <div class="cms-ttmn-item cms-carousel-item swiper-slide">
                                        <div class="cms-ttmn-content">
                        <div class="cms-ttmn-desc heading text-28 lh-1357 ls--06 text-heading swiper-nav-vert">Love it! It's knitted from extra fine mulesing free Merino
wool and really has kept its shape over time. Can't wait to buy
some more colours and new awesome styles!
</div>
                                                    <div class="cms-ttmn-info pt-25">
                                                                <div class="cms-ribbon-1 bg-primary bg-hover-accent d-inline-block mb-7 mt-n5"   style={{
    width: "10px",
    height: "19px",
  }}></div>                                <div class="cms-ttmn-name">
                                    <div class="cms-ttmn--name text-15 text-uppercase ls-06 empty-none text-heading d-flex gap-5 align-items-center justify-content-center">Lola Dark / <span class="cms-ttmn--pos text-body">Paris</span></div>
                                </div>
                            </div>
                                            </div>
                </div>
                            <div class="cms-ttmn-item cms-carousel-item swiper-slide">
                                        <div class="cms-ttmn-content">
                        <div class="cms-ttmn-desc heading text-28 lh-1357 ls--06 text-heading swiper-nav-vert">Love it! It's knitted from extra fine mulesing free Merino
wool and really has kept its shape over time. Can't wait to buy
some more colours and new awesome styles!
</div>
                                                    <div class="cms-ttmn-info pt-25">
                                                                <div class="cms-ribbon-1 bg-primary bg-hover-accent d-inline-block mb-7 mt-n5"   style={{
    width: "10px",
    height: "19px",
  }}></div>                                <div class="cms-ttmn-name">
                                    <div class="cms-ttmn--name text-15 text-uppercase ls-06 empty-none text-heading d-flex gap-5 align-items-center justify-content-center">Lola Dark / <span class="cms-ttmn--pos text-body">Paris</span></div>
                                </div>
                            </div>
                                            </div>
                </div>
                            <div class="cms-ttmn-item cms-carousel-item swiper-slide">
                                        <div class="cms-ttmn-content">
                        <div class="cms-ttmn-desc heading text-28 lh-1357 ls--06 text-heading swiper-nav-vert">Love it! It's knitted from extra fine mulesing free Merino
wool and really has kept its shape over time. Can't wait to buy
some more colours and new awesome styles!
</div>
                                                    <div class="cms-ttmn-info pt-25">
                                                                <div class="cms-ribbon-1 bg-primary bg-hover-accent d-inline-block mb-7 mt-n5"   style={{
    width: "10px",
    height: "19px",
  }}></div>                                <div class="cms-ttmn-name">
                                    <div class="cms-ttmn--name text-15 text-uppercase ls-06 empty-none text-heading d-flex gap-5 align-items-center justify-content-center">Lola Dark / <span class="cms-ttmn--pos text-body">Paris</span></div>
                                </div>
                            </div>
                                            </div>
                </div>
                            </div>
        </div>
                    <div class="cms-carousel-button-prev cms-carousel-button prev in arrow-icon">
                <i class="cms-carousel-button-icon rtl-flip text-45   cmsi-arrow-prev" aria-hidden="true"></i>            </div>
            <div class="cms-carousel-button-next cms-carousel-button next in arrow-icon">
                <i class="cms-carousel-button-icon rtl-flip text-45   cmsi-arrow-next" aria-hidden="true"></i>            </div>
            </div>
				</div>
				</div>
				<div class="elementor-element elementor-element-927ea4d pt-50 pt-tablet-10 pb-10 cms-carousel-item-shadow-no elementor-invisible elementor-widget elementor-widget-cms_clients" data-id="927ea4d" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;6&quot;,&quot;slides_to_show_tablet&quot;:&quot;4&quot;,&quot;slides_to_show_mobile&quot;:&quot;2&quot;,&quot;slides_to_scroll&quot;:&quot;2&quot;,&quot;autoplay_speed&quot;:0.200000000000000011102230246251565404236316680908203125,&quot;speed&quot;:2000,&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;}" data-widget_type="cms_clients.default">
				<div class="elementor-widget-container">
					<div class="cms-clients cms-clients-1 relative">
    <div class="cms-carousel swiper relative">
        <div class="swiper-wrapper">
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #1"><img loading="lazy" decoding="async" width="65" height="36" src="wp-content/uploads/client-13.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-13.webp 65w, https://7oroofthemes.com/trevox/wp-content/uploads/client-13-18x10.webp 18w" sizes="auto, (max-width: 65px) 100vw, 65px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #2"><img loading="lazy" decoding="async" width="66" height="66" src="wp-content/uploads/client-14.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-14.webp 66w, https://7oroofthemes.com/trevox/wp-content/uploads/client-14-12x12.webp 12w" sizes="auto, (max-width: 66px) 100vw, 66px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #3"><img loading="lazy" decoding="async" width="70" height="67" src="wp-content/uploads/client-15.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-15.webp 70w, https://7oroofthemes.com/trevox/wp-content/uploads/client-15-13x12.webp 13w" sizes="auto, (max-width: 70px) 100vw, 70px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #4"><img loading="lazy" decoding="async" width="50" height="39" src="wp-content/uploads/client-16.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-16.webp 50w, https://7oroofthemes.com/trevox/wp-content/uploads/client-16-15x12.webp 15w" sizes="auto, (max-width: 50px) 100vw, 50px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #5"><img loading="lazy" decoding="async" width="62" height="51" src="wp-content/uploads/client-17.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-17.webp 62w, https://7oroofthemes.com/trevox/wp-content/uploads/client-17-15x12.webp 15w" sizes="auto, (max-width: 62px) 100vw, 62px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #6"><img loading="lazy" decoding="async" width="73" height="33" src="wp-content/uploads/client-18.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-18.webp 73w, https://7oroofthemes.com/trevox/wp-content/uploads/client-18-18x8.webp 18w" sizes="auto, (max-width: 73px) 100vw, 73px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #1"><img loading="lazy" decoding="async" width="65" height="36" src="wp-content/uploads/client-13.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-13.webp 65w, https://7oroofthemes.com/trevox/wp-content/uploads/client-13-18x10.webp 18w" sizes="auto, (max-width: 65px) 100vw, 65px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #2"><img loading="lazy" decoding="async" width="66" height="66" src="wp-content/uploads/client-14.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-14.webp 66w, https://7oroofthemes.com/trevox/wp-content/uploads/client-14-12x12.webp 12w" sizes="auto, (max-width: 66px) 100vw, 66px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #3"><img loading="lazy" decoding="async" width="70" height="67" src="wp-content/uploads/client-15.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-15.webp 70w, https://7oroofthemes.com/trevox/wp-content/uploads/client-15-13x12.webp 13w" sizes="auto, (max-width: 70px) 100vw, 70px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #4"><img loading="lazy" decoding="async" width="50" height="39" src="wp-content/uploads/client-16.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-16.webp 50w, https://7oroofthemes.com/trevox/wp-content/uploads/client-16-15x12.webp 15w" sizes="auto, (max-width: 50px) 100vw, 50px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #5"><img loading="lazy" decoding="async" width="62" height="51" src="wp-content/uploads/client-17.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-17.webp 62w, https://7oroofthemes.com/trevox/wp-content/uploads/client-17-15x12.webp 15w" sizes="auto, (max-width: 62px) 100vw, 62px" /></a>
                            <a href="#" target="_blank" rel="nofollow" class="client-item swiper-slide" title="Client Name #6"><img loading="lazy" decoding="async" width="73" height="33" src="wp-content/uploads/client-18.webp" class="cms-lazy lazy-loading swiper-nav-vert" alt=""  data-duration="" srcset="https://7oroofthemes.com/trevox/wp-content/uploads/client-18.webp 73w, https://7oroofthemes.com/trevox/wp-content/uploads/client-18-18x8.webp 18w" sizes="auto, (max-width: 73px) 100vw, 73px" /></a>
                    </div>
    </div>
        </div>				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-1fb993a e-con-boxed-wide e-flex elementor-invisible e-con e-parent" data-id="1fb993a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
				<div class="elementor-element elementor-element-619b550 elementor-widget elementor-widget-cms_video_player" data-id="619b550" data-element_type="widget" data-settings="{&quot;video_link&quot;:&quot;https:\/\/youtu.be\/0c6ukXGxOPo&quot;}" data-widget_type="cms_video_player.default">
				<div class="elementor-widget-container">
					<div class="cms-evideo cms-evideo-1 relative cms-gradient-black-bt overflow-hidden">
<img loading="lazy" decoding="async" width="1400" height="800" src="wp-content/uploads/elementor/thumbs/banner-video-1-qyz0f11vwk9gp13t8bjo3fdyu5gfigjssf9h6aqnuo.webp" alt="banner-video-1" class="cms-lazy lazy-loading img-cover"  style={{maxHeight:"800px"}} /><div class="cms-gradient-render cms-overlay"></div>            <div class="cms-btn-video layout-1 cms-btn-video-bg cms-overlay cms-transition has-stroke" data-elementor-open-lightbox="yes" data-elementor-lightbox="{&quot;type&quot;:&quot;video&quot;,&quot;videoType&quot;:&quot;youtube&quot;,&quot;url&quot;:&quot;https:\/\/www.youtube.com\/embed\/0c6ukXGxOPo?feature=oembed&amp;mode=opaque&amp;loop=1&amp;autoplay=1&amp;controls=0&amp;mute=0&amp;rel=0&amp;modestbranding=0&quot;,&quot;modalOptions&quot;:{&quot;id&quot;:&quot;cms-lightbox-&quot;,&quot;entranceAnimation&quot;:&quot;&quot;,&quot;entranceAnimation_tablet&quot;:&quot;&quot;,&quot;entranceAnimation_mobile&quot;:&quot;&quot;,&quot;videoAspectRatio&quot;:169}}">
                                <div class="cms-btn--video absolute center cms-transition"   style={{
    width: "140px",
    height: "140px",
  }}>
                            <svg class="cms-video-play-stroke" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="140px" height="140px" viewBox="0 0 300 300" style={{
    enableBackground: "new 0 0 300 300",
  }} >
            <circle class="cms-stroke-1" fill="none" stroke="var(--cms-white)" cx="150" cy="150" r="149"></circle>
            <circle class="cms-stroke-2" fill="none" stroke="var(--cms-white)" cx="150" cy="150" r="149"></circle>
        </svg>
                            <div class="cms-btn-video-content absolute center">
                            <i class="cms-play-icon cms-icon cms-transition text-hover-white absolute center rtl-flip text-15 text-white  cmsi-play" arial-hidden="true"></i>                            <span class="cms-text empty-none text-white text-nowrap absolute cms-transition">PLAY VIDEO</span>
                        </div>
                                    </div>
                            </div>
        </div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-a230adb p-tb-80 p-tb-tablet-30 bdr-b-1 e-flex e-con-boxed e-con e-parent" data-id="a230adb" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-23823fe pb-10 elementor-invisible elementor-widget elementor-widget-cms_heading" data-id="23823fe" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="cms_heading.default">
				<div class="elementor-widget-container">
					<div class="cms-eheading cms-eheading-1 text-center">
	<div class="cms-smallheading text-heading-lighten pb-20 mt-n10 text-15 empty-none"></div>
	<h2 class="cms-heading empty-none text-heading mt-n10">Our Latest Posts</h2>
</div>				</div>
				</div>
				<div class="elementor-element elementor-element-e70790e elementor-invisible elementor-widget elementor-widget-cms_blog_grid" data-id="e70790e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="cms_blog_grid.default">
				<div class="elementor-widget-container">
					<div id="cms_blog_grid-e70790e" class="cms-post-grid cms-grid cms-grid-1" data-layout="grid" data-start-page="1" data-max-pages="3" data-total="7" data-perpage="3" data-next-link="page/2/index.html">
    
    <div class="cms-grid-content d-flex gutter flex-col-3 flex-col-tablet-2 flex-col-smobile-1">            <div class="cms-item hover-image-move item-1">
                <div class="cms-post-thumbnail overflow-hidden mb-25 relative"><img loading="lazy" decoding="async" width="570" height="513" src="wp-content/uploads/elementor/thumbs/blog-6-qyz0f11lske5fajp8fe0h5ripthbnnpggk7zxmm0lm.webp" alt="Alternative Text" class="cms-lazy lazy-loading img-cover swiper-nav-vert"  style={{maxHeight:"513px"}} />                        <div class="cms-post-thumb-cat absolute top-left ml-20 mt-20 bg-white bdr-1-primary text-uppercase text-15 ls-06 p-lr-5 pt-3">
                            <a href="category/fashion/index.html" class="cms-term cms-hover-underline1">Fashion</a>, <a href="category/lifestyle/index.html" class="cms-term cms-hover-underline1">Lifestyle</a>                        </div>
                </div>                <div class="cms-post-meta d-flex align-items-center gap-10 pb-10 text-uppercase">
                    <div class="date text-15 ls-06">Dec 25, 2023</div>
                </div>
                <h3 class="cms-heading text-line-2 text-22 lh-1228"><a href="the-perfect-guide-to-pick-your-perfect-duffle-for-2024/index.html">The Perfect Guide To Pick Your Perfect Duffle for 2024!</a></h3>
                <div class="cms-excerpt text-line-3 pt-10 mb-15">Summer is here, the season of road trips, redeyes, and getaways is upon us. Add in programming like your Tuesday cycling class and a duffle&hellip;</div>
                <a href="the-perfect-guide-to-pick-your-perfect-duffle-for-2024/index.html" class="cms-link cms-hover-underline2 text-hover-link">Read More                </a>
                            </div>
                    <div class="cms-item hover-image-move item-2">
                <div class="cms-post-thumbnail overflow-hidden mb-25 relative"><img loading="lazy" decoding="async" width="570" height="513" src="wp-content/uploads/elementor/thumbs/blog-5-qyz0f11lske5fajp8fe0h5ripthbnnpggk7zxmm0lm.webp" alt="blog-5" class="cms-lazy lazy-loading img-cover swiper-nav-vert"  style={{maxHeight:"513px"}}  />                        <div class="cms-post-thumb-cat absolute top-left ml-20 mt-20 bg-white bdr-1-primary text-uppercase text-15 ls-06 p-lr-5 pt-3">
                            <a href="category/denium/index.html" class="cms-term cms-hover-underline1">Denium</a>, <a href="category/industry/index.html" class="cms-term cms-hover-underline1">Industry</a>                        </div>
                </div>                <div class="cms-post-meta d-flex align-items-center gap-10 pb-10 text-uppercase">
                    <div class="date text-15 ls-06">Dec 25, 2023</div>
                </div>
                <h3 class="cms-heading text-line-2 text-22 lh-1228"><a href="products-with-purpose-what-is-clean-denim-anyway/index.html">Products With Purpose: What is clean denim anyway?</a></h3>
                <div class="cms-excerpt text-line-3 pt-10 mb-15">Denim’s a dirty business, but it doesn’t have to be. We sat down to talk all clean denim, inclusivity, and why sustainability can be both&hellip;</div>
                <a href="products-with-purpose-what-is-clean-denim-anyway/index.html" class="cms-link cms-hover-underline2 text-hover-link">Read More                </a>
                            </div>
                    <div class="cms-item hover-image-move item-3">
                <div class="cms-post-thumbnail overflow-hidden mb-25 relative"><img loading="lazy" decoding="async" width="570" height="513" src="wp-content/uploads/elementor/thumbs/blog-4-qyz0f11lske5fajp8fe0h5ripthbnnpggk7zxmm0lm.webp" alt="blog-4" class="cms-lazy lazy-loading img-cover swiper-nav-vert"  style={{maxHeight:"513px"}}  />                        <div class="cms-post-thumb-cat absolute top-left ml-20 mt-20 bg-white bdr-1-primary text-uppercase text-15 ls-06 p-lr-5 pt-3">
                            <a href="category/gold/index.html" class="cms-term cms-hover-underline1">Gold</a>, <a href="category/style/index.html" class="cms-term cms-hover-underline1">Style</a>                        </div>
                </div>                <div class="cms-post-meta d-flex align-items-center gap-10 pb-10 text-uppercase">
                    <div class="date text-15 ls-06">Dec 25, 2023</div>
                </div>
                <h3 class="cms-heading text-line-2 text-22 lh-1228"><a href="gold-seal-of-sustainability-gots-finally-explained/index.html">Gold Seal of Sustainability: GOTS, Finally Explained!</a></h3>
                <div class="cms-excerpt text-line-3 pt-10 mb-15">You know by now that using sustainable materials in our products is right there with picking up trash, in terms of how it important it&hellip;</div>
                <a href="gold-seal-of-sustainability-gots-finally-explained/index.html" class="cms-link cms-hover-underline2 text-hover-link">Read More                </a>
                            </div>
        </div>
            <div class="cms-grid-pagination d-none" data-loadmore="{&quot;posttype&quot;:&quot;post&quot;,&quot;taxonomy&quot;:&quot;category&quot;,&quot;startPage&quot;:1,&quot;maxPages&quot;:3,&quot;total&quot;:7,&quot;perpage&quot;:3,&quot;nextLink&quot;:&quot;https:\/\/7oroofthemes.com\/trevox\/page\/2\/&quot;,&quot;pagination_type&quot;:&quot;false&quot;,&quot;layout&quot;:&quot;1&quot;,&quot;source&quot;:&quot;&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;desc&quot;,&quot;limit&quot;:3,&quot;thumbnail_size&quot;:&quot;custom&quot;,&quot;thumbnail_custom_dimension&quot;:{&quot;width&quot;:570,&quot;height&quot;:513},&quot;num_words&quot;:25,&quot;readmore_text&quot;:&quot;Read More&quot;,&quot;item_class&quot;:&quot;hover-image-move&quot;}"
             data-query="{&quot;post_type&quot;:&quot;post&quot;,&quot;post_status&quot;:&quot;publish&quot;,&quot;posts_per_page&quot;:3,&quot;order&quot;:&quot;desc&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;tax_query&quot;:{&quot;relation&quot;:&quot;OR&quot;},&quot;post__not_in&quot;:[46]}">            <nav class="navigation posts-pagination ajax">
                <div class="posts-page-links d-flex">
                    <span aria-label="Page 1" aria-current="page" class="page-numbers current">1</span>
<a aria-label="Page 2" class="page-numbers" href="#2">2</a>
<a aria-label="Page 3" class="page-numbers" href="#3">3</a>
<a class="next page-numbers" href="#2">Next<i class="cmsi-chevron-right rtl-flip"></i></a>                </div>
            </nav>
        </div>
    </div>				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-7402530 p-tb-90 p-tb-tablet-20 e-flex e-con-boxed e-con e-parent" data-id="7402530" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-8688e32 cms-swiper-effect-scroll cms-carousel-item-shadow-no elementor-invisible elementor-widget elementor-widget-cms_instagram" data-id="8688e32" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;6&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;autoplay_speed&quot;:0,&quot;speed&quot;:2000,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;effect_scroll&quot;:&quot;scroll&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;space_between_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile_extra&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;infinite&quot;:&quot;yes&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;}" data-widget_type="cms_instagram.default">
				<div class="elementor-widget-container">
					<div class="cms-einstagram cms-einstagram-1">
    <div class="d-flex gap flex-nowrap align-items-end pb-40 mt-n10">
        <h2 class="cms-heading empty-none text-heading flex-basic flex-smobile-full">Instagram</h2>
        <a class="cms-link cms-hover-underline2 text-15 ls-06 flex-auto flex-smobile-full" href="https://instagram.com/">Follow us @trevor</a>
    </div>
    <div class="cms-carousel swiper">
        <div class="swiper-wrapper">
                                <div class="cms-swiper-item swiper-slide hover-content-zoom-in">
                        <a class="grid-item-inner relative d-flex align-items-center" title="" href="https://instagram.com/" target="_blank" data-elementor-lightbox-slideshow="8688e32">
                            <img loading="lazy" decoding="async" width="300" height="383" src="wp-content/uploads/elementor/thumbs/instagram-1-qyz0f11ii5okpwsmdv7app1ygdxt25so7lj05zgh6e.webp" alt="instagram-1" class="cms-lazy lazy-loading swiper-nav-vert img-cover"  />                            <div class="hover-content--zoom-in cms-overlay">
                                <span class="cms-icon absolute center cmsi-instagram cms-transition text-20 bg-white d-block text-primary text-hover-accent"></span>
                            </div>
                        </a>
                    </div>
                                    <div class="cms-swiper-item swiper-slide hover-content-zoom-in">
                        <a class="grid-item-inner relative d-flex align-items-center" title="" href="https://instagram.com/" target="_blank" data-elementor-lightbox-slideshow="8688e32">
                            <img loading="lazy" decoding="async" width="300" height="300" src="wp-content/uploads/elementor/thumbs/instagram-2-qyz0f11ii5o3qjegoq3k1741qhtpwh1znlrlomn1rs.webp" alt="instagram-2" class="cms-lazy lazy-loading swiper-nav-vert img-cover" />                            <div class="hover-content--zoom-in cms-overlay">
                                <span class="cms-icon absolute center cmsi-instagram cms-transition text-20 bg-white d-block text-primary text-hover-accent"></span>
                            </div>
                        </a>
                    </div>
                                    <div class="cms-swiper-item swiper-slide hover-content-zoom-in">
                        <a class="grid-item-inner relative d-flex align-items-center" title="" href="https://instagram.com/" target="_blank" data-elementor-lightbox-slideshow="8688e32">
                            <img loading="lazy" decoding="async" width="300" height="383" src="wp-content/uploads/elementor/thumbs/instagram-3-qyz0f11ii5okpwsmdv7app1ygdxt25so7lj05zgh6e.webp" alt="instagram-3" class="cms-lazy lazy-loading swiper-nav-vert img-cover"  />                            <div class="hover-content--zoom-in cms-overlay">
                                <span class="cms-icon absolute center cmsi-instagram cms-transition text-20 bg-white d-block text-primary text-hover-accent"></span>
                            </div>
                        </a>
                    </div>
                                    <div class="cms-swiper-item swiper-slide hover-content-zoom-in">
                        <a class="grid-item-inner relative d-flex align-items-center" title="" href="https://instagram.com/" target="_blank" data-elementor-lightbox-slideshow="8688e32">
                            <img loading="lazy" decoding="async" width="300" height="300" src="wp-content/uploads/elementor/thumbs/instagram-4-qyz0f11ii5o3qjegoq3k1741qhtpwh1znlrlomn1rs.webp" alt="instagram-4" class="cms-lazy lazy-loading swiper-nav-vert img-cover" />                            <div class="hover-content--zoom-in cms-overlay">
                                <span class="cms-icon absolute center cmsi-instagram cms-transition text-20 bg-white d-block text-primary text-hover-accent"></span>
                            </div>
                        </a>
                    </div>
                                    <div class="cms-swiper-item swiper-slide hover-content-zoom-in">
                        <a class="grid-item-inner relative d-flex align-items-center" title="" href="https://instagram.com/" target="_blank" data-elementor-lightbox-slideshow="8688e32">
                            <img loading="lazy" decoding="async" width="300" height="383" src="wp-content/uploads/elementor/thumbs/instagram-5-qyz0f11ii5okpwsmdv7app1ygdxt25so7lj05zgh6e.webp" alt="instagram-5" class="cms-lazy lazy-loading swiper-nav-vert img-cover"  />                            <div class="hover-content--zoom-in cms-overlay">
                                <span class="cms-icon absolute center cmsi-instagram cms-transition text-20 bg-white d-block text-primary text-hover-accent"></span>
                            </div>
                        </a>
                    </div>
                                    <div class="cms-swiper-item swiper-slide hover-content-zoom-in">
                        <a class="grid-item-inner relative d-flex align-items-center" title="" href="https://instagram.com/" target="_blank" data-elementor-lightbox-slideshow="8688e32">
                            <img loading="lazy" decoding="async" width="300" height="300" src="wp-content/uploads/elementor/thumbs/instagram-6-qyz0f11ii5o3qjegoq3k1741qhtpwh1znlrlomn1rs.webp" alt="instagram-6" class="cms-lazy lazy-loading swiper-nav-vert img-cover" />                            <div class="hover-content--zoom-in cms-overlay">
                                <span class="cms-icon absolute center cmsi-instagram cms-transition text-20 bg-white d-block text-primary text-hover-accent"></span>
                            </div>
                        </a>
                    </div>
                        </div>
    </div>
        </div>				</div>
				</div>
					</div>
				</div>
				</div>
		</main>
    </>
  );
};

export default Banner;
