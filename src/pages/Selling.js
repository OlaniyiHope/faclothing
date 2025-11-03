import React, {useState, useEffect} from "react";

import axios from "axios";

import { Link } from "react-router-dom";import Popular from "./Policy";
import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2";


const Selling = () => {
      return (
    <>
    <Header2 />

    <main id="cms-main" class="cms-main is-elementor" style={{backgroundColor: "white" }}>	
        	<div data-elementor-type="wp-page" data-elementor-id="73" class="elementor elementor-73" style={{paddingTop: "100px"}}>
				<div class="elementor-element elementor-element-951aef4 e-con-boxed-wide p-tb-25 bdr-t-1 e-flex e-con e-parent" data-id="951aef4" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed-wide&quot;}">
				<div class="elementor-element elementor-element-8d4326f elementor-widget elementor-widget-cms_breadcrumb" data-id="8d4326f" data-element_type="widget" data-widget_type="cms_breadcrumb.default">
				<div class="elementor-widget-container">
					<div class="cms-ebreadcrumb cms-breadcrumb cms-breadcrumb-1 d-flex ">
    <ul class="cms-breadcrumb unstyled"><li><a class="breadcrumb-entry" href="../index.html">Home</a></li><li><span class="breadcrumb-entry" >Shop Filter List</span></li></ul></div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-40a0a60 pt-15 pb-80 pb-tablet-30 e-flex e-con-boxed e-con e-parent" data-id="40a0a60" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-4d25cd8 elementor-widget elementor-widget-egrid-products" data-id="4d25cd8" data-element_type="widget" data-widget_type="egrid-products.default">
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
					<option value="date"  selected='selected'>Date, old to new</option>
					<option value="date-desc" >Date, new to old</option>
			</select>
	<input type="hidden" name="paged" value="1" />
	</form>
</div><div class="cms-eproducts-content cms-grid-content d-flex gutter flex-col-4 flex-col-tablet-3 flex-col-mobile-extra-2 flex-col-mobile-2 flex-col-smobile-1"><div class="cms-product-2 product type-product post-290 status-publish first instock product_cat-outerwear product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Polo-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Polo-Knitwear-Sweater2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Polo Knitwear Sweater"  /></div>  
                <a href="../product/polo-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="indexc071.html?add-to-wishlist=290" class="cms-woosw-btn woosw-btn woosw-btn-290 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="290" data-product_name="Polo Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Polo-Knitwear-Sweater2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexf754.html?quick-view=290" class="woosq-btn woosq-btn-290 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="290" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="../product/polo-knitwear-sweater/index.html" data-quantity="1" class="cms-loop-atc product_type_variable in-stock add_to_cart_button" data-product_id="290" data-product_sku="ED5690012" aria-label="Select options for &ldquo;Polo Knitwear Sweater&rdquo;" rel="nofollow">Select options</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_290" class="screen-reader-text">
		This product has multiple variants. The options may be chosen on the product page	</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/polo-knitwear-sweater/index.html">Polo Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac749d5"  data-product-id="290"><span class="woocommerce-Price-amount amount"><bdi>60.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-280 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Yellow-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Yellow-Knitwear-Sweater4-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Yellow Knitwear Sweater"  /></div>  
                <a href="../product/yellow-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index3969.html?add-to-wishlist=280" class="cms-woosw-btn woosw-btn woosw-btn-280 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="280" data-product_name="Yellow Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Yellow-Knitwear-Sweater4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexaf03.html?quick-view=280" class="woosq-btn woosq-btn-280 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="280" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index700a.html?add-to-cart=280" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="280" data-product_sku="ED5690010-1" aria-label="Add to cart: &ldquo;Yellow Knitwear Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Yellow Knitwear Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_280" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/yellow-knitwear-sweater/index.html">Yellow Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac75518"  data-product-id="280"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>90.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 90.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 45.00&#036;.</span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-268 status-publish instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Multi-Color-Knitwear-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Multi-Color-Knitwear2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Multi Color Knitwear"  /></div>  
                <a href="../product/multi-color-knitwear/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index07a6.html?add-to-wishlist=268" class="cms-woosw-btn woosw-btn woosw-btn-268 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="268" data-product_name="Multi Color Knitwear" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Multi-Color-Knitwear2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexf4d9.html?quick-view=268" class="woosq-btn woosq-btn-268 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="268" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexee06.html?add-to-cart=268" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="268" data-product_sku="ED5690010" aria-label="Add to cart: &ldquo;Multi Color Knitwear&rdquo;" rel="nofollow" data-success_message="&ldquo;Multi Color Knitwear&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_268" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/multi-color-knitwear/index.html">Multi Color Knitwear</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac75e52"  data-product-id="268"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-260 status-publish last instock product_cat-t-shirts product_tag-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <div class="wpcbm-badges wpcbm-badges-flat "><div class="wpcbm-badge wpcbm-badge-674 wpcbm-pid-260 wpcbm-badge-style-cms-new wpcbm-badge-group-102 hint--top" aria-label=""><div class="wpcbm-badge-inner">New</div></div></div><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Boyfriend-Knitted-T-Shirt5-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Boyfriend-Knitted-T-Shirt2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Boyfriend Knitted T-Shirt" /></div>  
                <a href="../product/boyfriend-knitted-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index16dc.html?add-to-wishlist=260" class="cms-woosw-btn woosw-btn woosw-btn-260 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="260" data-product_name="Boyfriend Knitted T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Boyfriend-Knitted-T-Shirt2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index4697.html?quick-view=260" class="woosq-btn woosq-btn-260 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="260" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index84f3.html?add-to-cart=260" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="260" data-product_sku="ED56900013" aria-label="Add to cart: &ldquo;Boyfriend Knitted T-Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Boyfriend Knitted T-Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_260" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/boyfriend-knitted-t-shirt/index.html">Boyfriend Knitted T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac76808"  data-product-id="260"><span class="woocommerce-Price-amount amount"><bdi>35.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-249 status-publish first instock product_cat-pants product_tag-pants has-post-thumbnail virtual purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Wide-Leg-Trousers7-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Wide-Leg-Trousers-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Wide Leg Trousers"  /></div>  
                <a href="../product/wide-leg-trousers/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index6a7b.html?add-to-wishlist=249" class="cms-woosw-btn woosw-btn woosw-btn-249 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="249" data-product_name="Wide Leg Trousers" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Wide-Leg-Trousers-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexbc13.html?quick-view=249" class="woosq-btn woosq-btn-249 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="249" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexfaa8.html?add-to-cart=249" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="249" data-product_sku="ED56900042" aria-label="Add to cart: &ldquo;Wide Leg Trousers&rdquo;" rel="nofollow" data-success_message="&ldquo;Wide Leg Trousers&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_249" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/wide-leg-trousers/index.html">Wide Leg Trousers</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac77f7c"  data-product-id="249"><span class="woocommerce-Price-amount amount"><bdi>55.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-239 status-publish outofstock product_cat-accessories product_cat-blouses product_cat-dresses product_cat-hoodies product_cat-knitwear product_cat-outerwear product_cat-pants product_cat-shirts product_cat-shorts product_cat-skirts product_cat-t-shirts product_tag-accessories product_tag-blouses product_tag-dresses product_tag-hoodies product_tag-knitwear product_tag-outerwear product_tag-pants product_tag-shirts product_tag-shorts product_tag-skirts product_tag-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"><span class="cms-wc-badge sold-out">Sold Out</span>    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Double-Sided-Hat2-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Double-Sided-Hat3-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Double-Sided Hat" /></div>  
                <a href="../product/double-sided-hat/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index53b5.html?add-to-wishlist=239" class="cms-woosw-btn woosw-btn woosw-btn-239 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="239" data-product_name="Double-Sided Hat" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Double-Sided-Hat3-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index455f.html?quick-view=239" class="woosq-btn woosq-btn-239 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="239" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="../product/double-sided-hat/index.html" data-quantity="1" class="cms-loop-atc product_type_simple out-of-stock" data-product_id="239" data-product_sku="ED56900073" aria-label="Read more about &ldquo;Double-Sided Hat&rdquo;" rel="nofollow" data-success_message="">Read more</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_239" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/double-sided-hat/index.html">Double-Sided Hat</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac79822"  data-product-id="239"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-218 status-publish instock product_cat-blouses product_cat-knitwear product_tag-blouses product_tag-knitwear has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Emerald-Turtleneck-Sweater5-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Emerald-Turtleneck-Sweater-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Emerald Turtleneck Sweater"  /></div>  
                <a href="../product/emerald-turtleneck-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index4e10.html?add-to-wishlist=218" class="cms-woosw-btn woosw-btn woosw-btn-218 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="218" data-product_name="Emerald Turtleneck Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Emerald-Turtleneck-Sweater-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexc0bc.html?quick-view=218" class="woosq-btn woosq-btn-218 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="218" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexa1f5.html?add-to-cart=218" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="218" data-product_sku="ED5690007-1" aria-label="Add to cart: &ldquo;Emerald Turtleneck Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Emerald Turtleneck Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_218" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/emerald-turtleneck-sweater/index.html">Emerald Turtleneck Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac7b184"  data-product-id="218"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>80.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 80.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>40.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 40.00&#036;.</span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-222 status-publish last instock product_cat-knitwear product_cat-t-shirts product_tag-shirts product_tag-skirts has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Printed-Cotton-T-Shirt3-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Printed-Cotton-T-Shirt4-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Printed Cotton T-Shirt"  /></div>  
                <a href="../product/printed-cotton-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index6f1b.html?add-to-wishlist=222" class="cms-woosw-btn woosw-btn woosw-btn-222 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="222" data-product_name="Printed Cotton T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index7f35.html?quick-view=222" class="woosq-btn woosq-btn-222 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="222" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index5f99.html?add-to-cart=222" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="222" data-product_sku="ED56900072" aria-label="Add to cart: &ldquo;Printed Cotton T-Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Printed Cotton T-Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_222" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/printed-cotton-t-shirt/index.html">Printed Cotton T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac7caaa"  data-product-id="222"><span class="woocommerce-Price-amount amount"><bdi>40.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-205 status-publish first instock product_cat-knitwear product_cat-outerwear product_tag-shirts product_tag-skirts has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">29% OFF</span>

	    <span class="cms-wc-badge new">New</span>
    </div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Blue-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Blue-Knitwear-Sweater9-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Blue Knitwear Sweater"  /></div>  
                <a href="../product/blue-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index8d09.html?add-to-wishlist=205" class="cms-woosw-btn woosw-btn woosw-btn-205 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="205" data-product_name="Blue Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Blue-Knitwear-Sweater9-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexa04d.html?quick-view=205" class="woosq-btn woosq-btn-205 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="205" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index274e.html?add-to-cart=205" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="205" data-product_sku="ED5690007" aria-label="Add to cart: &ldquo;Blue Knitwear Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Blue Knitwear Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_205" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/blue-knitwear-sweater/index.html">Blue Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac7e4de"  data-product-id="205"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>70.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 70.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>50.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 50.00&#036;.</span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-198 status-publish instock product_cat-shirts product_cat-skirts product_tag-shirts product_tag-skirts has-post-thumbnail sale shipping-taxable purchasable product-type-simple wooct-active wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Red-Pattern-Flowy-Shirt4-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Red-Pattern-Flowy-Shirt-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Red Pattern Flowy Shirt" /></div>  
                <a href="../product/red-pattern-flowy-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index07b8.html?add-to-wishlist=198" class="cms-woosw-btn woosw-btn woosw-btn-198 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="198" data-product_name="Red Pattern Flowy Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Red-Pattern-Flowy-Shirt-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexb467.html?quick-view=198" class="woosq-btn woosq-btn-198 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="198" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index6f15.html?add-to-cart=198" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="198" data-product_sku="ED5690006" aria-label="Add to cart: &ldquo;Red Pattern Flowy Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Red Pattern Flowy Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_198" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/red-pattern-flowy-shirt/index.html">Red Pattern Flowy Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac803c3"  data-product-id="198"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>100.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 100.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>50.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 50.00&#036;.</span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-184 status-publish instock product_cat-outerwear product_cat-t-shirts product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Printed-Semi-Fitted-T-Shirt-3-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt=""  /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Printed-Semi-Fitted-T-Shirt-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Printed Semi-Fitted T-Shirt"  /></div>  
                <a href="../product/printed-semi-fitted-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="indexfe17.html?add-to-wishlist=184" class="cms-woosw-btn woosw-btn woosw-btn-184 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="184" data-product_name="Printed Semi-Fitted T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Semi-Fitted-T-Shirt-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index3068.html?quick-view=184" class="woosq-btn woosq-btn-184 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="184" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="../product/printed-semi-fitted-t-shirt/index.html" data-quantity="1" class="cms-loop-atc product_type_variable in-stock add_to_cart_button" data-product_id="184" data-product_sku="ED5690004" aria-label="Select options for &ldquo;Printed Semi-Fitted T-Shirt&rdquo;" rel="nofollow">Select options</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_184" class="screen-reader-text">
		This product has multiple variants. The options may be chosen on the product page	</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/printed-semi-fitted-t-shirt/index.html">Printed Semi-Fitted T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac81bba"  data-product-id="184"><span class="woocommerce-Price-amount amount"><bdi>35.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
<div class="cms-product-2 product type-product post-159 status-publish last instock product_cat-outerwear product_tag-casual product_tag-yellow has-post-thumbnail shipping-taxable purchasable product-type-simple wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <div class="wpcbm-badges wpcbm-badges-flat "><div class="wpcbm-badge wpcbm-badge-674 wpcbm-pid-159 wpcbm-badge-style-cms-new wpcbm-badge-group-102 hint--top" aria-label=""><div class="wpcbm-badge-inner">New</div></div></div><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Button-Blazer-Jacket-4-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" /><img loading="lazy" decoding="async" width="400" height="524" src="../wp-content/uploads/Button-Blazer-Jacket-2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Button Blazer Jacket"  /></div>  
                <a href="../product/button-blazer-jacket/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index4b09.html?add-to-wishlist=159" class="cms-woosw-btn woosw-btn woosw-btn-159 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="159" data-product_name="Button Blazer Jacket" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Button-Blazer-Jacket-2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index56b3.html?quick-view=159" class="woosq-btn woosq-btn-159 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="159" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="indexe8b4.html?add-to-cart=159" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="159" data-product_sku="ED5690003" aria-label="Add to cart: &ldquo;Button Blazer Jacket&rdquo;" rel="nofollow" data-success_message="&ldquo;Button Blazer Jacket&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_159" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../product/button-blazer-jacket/index.html">Button Blazer Jacket</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efac83240"  data-product-id="159"><span class="woocommerce-Price-amount amount"><bdi>95.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></div>
						</div><nav class="woocommerce-pagination" aria-label="Product Pagination">
	<span aria-label="Page 1" aria-current="page" class="page-numbers current">1</span>
<a aria-label="Page 2" class="page-numbers" href="#2">2</a>
<a class="next page-numbers" href="#2"><i class="cmsi-chevron-right text-13 rtl-flip"></i></a></nav>
</div></div></div></div>				</div>
				</div>
					</div>
				</div>
				</div>
		</main>
    <Footer />
    </>


  );
};

export default Selling;
