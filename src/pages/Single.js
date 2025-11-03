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
import ProductTabs from "./ProductTabs";
import { FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Header2 from "./Header2";

const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const Single = () => {

    const { id } = useParams();
  const navigate = useNavigate();
const [currentImageIndex, setCurrentImageIndex] = useState(0); // <-- add this

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
 const [product, setProduct] = useState(null);
  const [grandParents, setGrandParents] = useState([]);
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedGrandParent, setSelectedGrandParent] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
   const { addToCart } = useCart();
    const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState("");
useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: product } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/product/${id}`
        );

        setProduct(product);

        // Category info
        const category = product.category;
        if (category) {
          setSelectedChild(category._id);
          if (category.parent) {
            setSelectedParent(category.parent._id);
            if (category.parent.parent) {
              setSelectedGrandParent(category.parent.parent._id);
            }
          }
        }

        // Debugging
        console.log("Fetched product:", product);
        console.log("Child:", category?.name);
        console.log("Parent:", category?.parent?.name);
        console.log("Grandparent:", category?.parent?.parent?.name);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);
const [selectedColor, setSelectedColor] = useState(null);

useEffect(() => {
  if (product?.color?.length > 0) {
    // pick the first color from DB as default
    setSelectedColor(product.color[0]);
  }
}, [product]);
useEffect(() => {
  const fetchRelatedProducts = async () => {
    if (!product?.category?._id) return;

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category/${product.category._id}`
      );

      // filter out the current product
      const filtered = data.filter((p) => p._id !== product._id);

      setProducts(filtered);
    } catch (err) {
      console.error("Failed to fetch related products:", err);
    }
  };

  fetchRelatedProducts();
}, [product]);

const availableColors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Green", hex: "#008000" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Purple", hex: "#800080" },
  { name: "Gray", hex: "#808080" },
  { name: "Navy", hex: "#001F54" },
  { name: "Orange", hex: "#FFA500" },
];
  return (
    <>

  <Header2 />
 	<main id="cms-main" class="cms-main cms-woo-content container-full single-product-full" style={{backgroundColor: "white", paddingTop: "300px"}}> <div class="woocommerce-notices-wrapper"></div><div id="product-222" class="product type-product post-222 status-publish first instock product_cat-knitwear product_cat-t-shirts product_tag-shirts product_tag-skirts has-post-thumbnail shipping-taxable purchasable product-type-simple cms-remove-msg-before-title cms-remove-msg-after-short-desc cms-remove-pickup-store cms-remove-stock-msg cms-remove-shipping-bar cms-remove-card-allowed wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-single-product-gal-content d-flex gutter gutter-grid">
		<div class="cms-woocommerce-product-gallery single-product-full cms-gallery-grid-mixed">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-0 images cms-gallery-grid-mixed cms-sticky" data-columns="grid-mixed"  style={{
    opacity: 0,
    transition: "opacity 0.25s ease-in-out",
  }}>
	<div class="woocommerce-product-gallery__wrapper">
		        <div data-thumb="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4-180x230.webp" data-thumb-alt="" class="woocommerce-product-gallery__image">
                        <a  class="cms-galleries-light-box" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="cms-product-gal-222" href="../../wp-content/uploads/Printed-Cotton-T-Shirt4.webp">
                <img loading="lazy" width="600" height="687" src="../../wp-content/uploads/Printed-Cotton-T-Shirt4-600x687.webp" class="" alt="" title="Printed Cotton T-Shirt4" data-caption="" data-src="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4.webp" data-large_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4.webp" data-large_image_width="600" data-large_image_height="900" decoding="async"  />            </a>
        </div>
            <div data-thumb="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt3-180x230.webp" data-thumb-alt="" class="woocommerce-product-gallery__image">
                        <a  class="cms-galleries-light-box" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="cms-product-gal-222" href="../../wp-content/uploads/Printed-Cotton-T-Shirt3.webp">
                <img loading="lazy" width="600" height="687" src="../../wp-content/uploads/Printed-Cotton-T-Shirt3-600x687.webp" class="" alt="" title="Printed Cotton T-Shirt3" data-caption="" data-src="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt3.webp" data-large_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt3.webp" data-large_image_width="600" data-large_image_height="900" decoding="async"  />            </a>
        </div>
            <div data-thumb="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt5-180x230.webp" data-thumb-alt="" class="woocommerce-product-gallery__image">
                        <a  class="cms-galleries-light-box" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="cms-product-gal-222" href="../../wp-content/uploads/Printed-Cotton-T-Shirt5.webp">
                <img loading="lazy" width="600" height="687" src="../../wp-content/uploads/Printed-Cotton-T-Shirt5-600x687.webp" class="" alt="" title="Printed Cotton T-Shirt5" data-caption="" data-src="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt5.webp" data-large_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt5.webp" data-large_image_width="600" data-large_image_height="900" decoding="async"  />            </a>
        </div>
            <div data-thumb="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt2-180x230.webp" data-thumb-alt="" class="woocommerce-product-gallery__image">
                        <a  class="cms-galleries-light-box" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="cms-product-gal-222" href="../../wp-content/uploads/Printed-Cotton-T-Shirt2.webp">
                <img loading="lazy" width="600" height="687" src="../../wp-content/uploads/Printed-Cotton-T-Shirt2-600x687.webp" class="" alt="" title="Printed Cotton T-Shirt2" data-caption="" data-src="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt2.webp" data-large_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt2.webp" data-large_image_width="600" data-large_image_height="900" decoding="async"  />            </a>
        </div>
            <div data-thumb="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt-180x230.webp" data-thumb-alt="" class="woocommerce-product-gallery__image">
                        <a  class="cms-galleries-light-box" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="cms-product-gal-222" href="../../wp-content/uploads/Printed-Cotton-T-Shirt.webp">
                <img loading="lazy" width="600" height="687" src="../../wp-content/uploads/Printed-Cotton-T-Shirt-600x687.webp" class="" alt="" title="Printed Cotton T-Shirt" data-caption="" data-src="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt.webp" data-large_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt.webp" data-large_image_width="600" data-large_image_height="900" decoding="async"  />            </a>
        </div>
    	</div>
</div>
</div>
		<div class="summary entry-summary">
			<div class="summary-inner cms-sticky">
				<ul class="cms-breadcrumb unstyled"><li><a class="breadcrumb-entry" href="../../index.html">Home</a></li><li><a class="breadcrumb-entry" href="../../shop/index.html">Products</a></li><li><span class="breadcrumb-entry" >Printed Cotton T-Shirt</span></li></ul><div class="wpcsm-message wpcsm-message-646 wpcsm-location-single_product_title_before cms-wpcsm-message-sold mb-15">928 sold in last 10 hours</div><h1 class="product_title text-45 text-tablet-40 text-mobile-30 mt-n8">Printed Cotton T-Shirt</h1><p class="cms-single-price price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efca88bf4"  data-product-id="222"><span class="woocommerce-Price-amount amount"><bdi>40.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></p>
            <div class="woocommerce-product-rating">
                                                                        <a href="index.html#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">0</span> customer reviews / Add review)</a>
                                                </div>
        <div class="woocommerce-product-details__short-description">
	<p>Transformative colours, bold textiles and unique prints, natural fibres with high our quality craftsmanship design remains at forefront. We believe in creating unique products, so we use finest materials and stunning design to create special items.</p>
</div>
<div class="wpcsm-message wpcsm-message-647 wpcsm-location-single_product_excerpt_after cms-wpcsm-message-viewing d-flex align-items-center gap-5"><span class="wpcsm-live-number" data-val="480" data-min="50" data-max="500" data-step="5" data-duration="10" data-text="%s"><span class="wpcsm-live-number-value">480</span></span> people are viewing this product right now.</div><div class="wooct-wrap-single" data-id="222"></div>            <div class="stock cms-product-stock stock-simple in-stock">
                <div class="cms-product-stock-label text-primary text-15 pb-10">Stock:  In stock, ready to be shipped</div>
                <div class="cms-product-stock-bar">
                    <div class="cms-product-stock-percent in-stock" style={{width:"100%"}}></div>
                </div>
            </div>
        
	
	<form class="cart" action="https://7oroofthemes.com/trevox/product/printed-cotton-t-shirt/" method="post" enctype='multipart/form-data'>
		
		<div class="quantity">
	  
<div class="cms-quantity cms-transition d-flex flex-nowrap justify-content-between align-items-center gap-20">
    <div class="cms-qty-text text-15 pl-20">Quantity</div>
    <div class="cms-qty-input relative d-flex align-items-center flex-nowrap">
        <span class="cms-qty-act cms-qty-down pl-10"></span>
	<label class="screen-reader-text" for="quantity_6906efca893b9">Printed Cotton T-Shirt quantity</label>
	<input
		type="number"
				id="quantity_6906efca893b9"
		class="input-text qty text"
		name="quantity"
		value="1"
		aria-label="Product quantity"
				min="1"
							step="1"
			placeholder=""
			inputmode="numeric"
			autocomplete="off"
			/>
	        <span class="cms-qty-act cms-qty-up pr-20"></span>
    </div>
</div>
</div>

		<button type="submit" name="add-to-cart" value="222" class="single_add_to_cart_button button alt">Add to cart</button>

			</form>

	    <div class="cms-after-add-to-cart-form empty-none"><a href="index6f1b.html?add-to-wishlist=222" class="cms-woosw-link woosw-btn woosw-btn-222 woosw-btn-has-icon d-flex gap-10 text-uppercase ls-06 cms-hover-underline  hint--bounce  hint--top" data-id="222" data-product_name="Printed Cotton T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span>Add to wishlist</a></div>

<div class="product_meta product-meta-simple">

	
			<span class="sku_wrapper">
      <span class="title">SKU:</span>
      <span class="content sku">ED56900072</span>
    </span>
	
	<span class="posted_in"><span class="title">Categories:</span><span class="content"><a href="../../product-category/knitwear/index.html" rel="tag">Knitwear</a>, <a href="../../product-category/t-shirts/index.html" rel="tag">T-shirts</a></span></span>
	<span class="tagged_as"><span class="title">Tags:</span><span class="content"><a href="../../product-tag/shirts/index.html" rel="tag">Shirts</a>, <a href="../../product-tag/skirts/index.html" rel="tag">Skirts</a></span></span>
	
</div>
    <div class="cms-product-share text-15">
        <span class="title pr-10">Share</span>
        <a class="fb-social hover-effect" title="Facebook" target="_blank"
           href="https://www.facebook.com/sharer/sharer.php?u=https://7oroofthemes.com/trevox/product/printed-cotton-t-shirt/"><i class="cmsi-facebook-circle-alt"></i></a>
        <a class="instagram-social hover-effect" title="Instagram" target="_blank"
           href="https://www.instagram.com/"><i class="cmsi-instagram"></i></a>
        <a class="tiktok-social hover-effect" title="Tiktok" target="_blank"
           href="https://www.tiktok.com/"><i class="cmsi-tik-tok"></i></a>
        <a class="tw-social hover-effect" title="Twitter" target="_blank"
           href="https://twitter.com/home?status=https://7oroofthemes.com/trevox/product/printed-cotton-t-shirt/"><i class="cmsi-twitter"></i></a>
    </div>
    			</div>
			
		</div>
	</div>
	
	<div class="woocommerce-tabs wc-tabs-wrapper">
		<ul class="tabs wc-tabs" role="tablist">
							<li role="presentation" class="description_tab" id="tab-title-description">
					<a href="#tab-description" role="tab" aria-controls="tab-description">
						Description					</a>
				</li>
							<li role="presentation" class="additional_information_tab" id="tab-title-additional_information">
					<a href="#tab-additional_information" role="tab" aria-controls="tab-additional_information">
						Additional information					</a>
				</li>
							<li role="presentation" class="reviews_tab" id="tab-title-reviews">
					<a href="#tab-reviews" role="tab" aria-controls="tab-reviews">
						Reviews (0)					</a>
				</li>
					</ul>
					<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
				

<p>Starting with our core, we are replacing the conventional composition of our Essentials Collection with more sustainable fibres in each product. An action only contributing to the longevity of the classic styles, designed to last and stand the test of time. Moving forward, we are committed to increasing percentage of the more sustainable fibres used in seasonal collections. Transformative colours partner bold textiles and unique prints, natural fibres paired with high our quality craftsmanship and thoughtful design remains at the forefront textile care labelling drying and taking care of our clothes.</p>
			</div>
					<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
				

<table class="woocommerce-product-attributes shop_attributes" aria-label="Product Details">
			<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
			<th class="woocommerce-product-attributes-item__label" scope="row">Color</th>
			<td class="woocommerce-product-attributes-item__value"><p><a href="../../color/blue/index.html" rel="tag">Blue</a>, <a href="../../color/white/index.html" rel="tag">White</a></p>
</td>
		</tr>
			<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
			<th class="woocommerce-product-attributes-item__label" scope="row">Size<div class="cms-charts-lists cms-charts-lists-combine d-flex gap-10 text-15"><a class="wpcsc-btn cms-list-item cms-hover-underline" href="#sc-222" data-id="222" data-pid="222">Size Charts</a></div></th>
			<td class="woocommerce-product-attributes-item__value"><p><a href="../../size/xs/index.html" rel="tag">XS</a>, <a href="../../size/s/index.html" rel="tag">S</a>, <a href="../../size/m/index.html" rel="tag">M</a>, <a href="../../size/l/index.html" rel="tag">L</a>, <a href="../../size/xl/index.html" rel="tag">XL</a>, <a href="../../size/2xl/index.html" rel="tag">2XL</a>, <a href="../../size/3xl/index.html" rel="tag">3XL</a></p>
</td>
		</tr>
	</table>
			</div>
					<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
				<div id="reviews" class="woocommerce-Reviews">
	<div id="comments">
		<h2 class="woocommerce-Reviews-title">
			Reviews		</h2>

					<p class="woocommerce-noreviews">There are no reviews yet.</p>
			</div>

			<div id="review_form_wrapper">
			<div id="review_form">
					<div id="respond" class="comment-respond">
		<h3 id="reply-title" class="comment-reply-title">Add A Review <small><a rel="nofollow" id="cancel-comment-reply-link" href="index.html#respond" style={{display:"none"}}>Cancel Review</a></small></h3><p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span class="required-field-message">Required fields are marked <span class="required">*</span></span></p><form action="https://7oroofthemes.com/trevox/wp-comments-post.php" method="post" id="commentform" class="comment-form"><div class="cms-comment-form-rating cms-comment-form-fields-wrap "><div class="comment-form-field">Your rating&nbsp;<span class="required text-red">*</span></div><div class="comment-form-field comments-rating"><select name="rating" id="rating" required>
                        <option value="">Rate&hellip;</option>
                        <option value="5">Perfect</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Not that bad</option>
                        <option value="1">Very poor</option>
                    </select></div></div><div class="comment-form-comment mb-30"><textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525"  required placeholder="Your Review *"></textarea></div><div class="d-flex gutter-40">
<div class="comment-form-author col-6 col-mobile-12"><input id="author" name="author" type="text" value="" size="30" maxlength="245" autocomplete="name" required placeholder="Your Name *"/></div>
<div class="comment-form-email col-6 col-mobile-1"><input id="email" name="email" type="email" value="" size="30" maxlength="100" autocomplete="email" required placeholder="Your Email *" /></div>
</div>
<p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
<p class="form-submit"><button name="submit" type="submit" id="submit" class="btn-cmt-submit" value="Submit">Submit</button> <input type='hidden' name='comment_post_ID' value='222' id='comment_post_ID' />
<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
</p></form>	</div>
				</div>
		</div>
	
	<div class="clear"></div>
</div>
			</div>
		
			</div>


	<section class="related products">

					<h2>Related products</h2>
				<ul class="products columns-4">

			
					<li class="cms-product-default product type-product post-280 status-publish first instock product_cat-knitwear product_cat-outerwear product_tag-knitwear product_tag-outerwear has-post-thumbnail sale shipping-taxable purchasable product-type-simple cms-remove-msg-before-title cms-remove-msg-after-short-desc cms-remove-pickup-store cms-remove-stock-msg cms-remove-shipping-bar cms-remove-card-allowed wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img width="400" height="524" src="../../wp-content/uploads/Yellow-Knitwear-Sweater-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async" loading="lazy" /><img width="400" height="524" src="../../wp-content/uploads/Yellow-Knitwear-Sweater4-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Yellow Knitwear Sweater" decoding="async" loading="lazy" /></div>  
                <a href="../yellow-knitwear-sweater/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index3969.html?add-to-wishlist=280" class="cms-woosw-btn woosw-btn woosw-btn-280 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="280" data-product_name="Yellow Knitwear Sweater" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Yellow-Knitwear-Sweater4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexaf03.html?quick-view=280" class="woosq-btn woosq-btn-280 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="280" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index700a.html?add-to-cart=280" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="280" data-product_sku="ED5690010-1" aria-label="Add to cart: &ldquo;Yellow Knitwear Sweater&rdquo;" rel="nofollow" data-success_message="&ldquo;Yellow Knitwear Sweater&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_280" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../yellow-knitwear-sweater/index.html">Yellow Knitwear Sweater</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efca90dc0"  data-product-id="280"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>90.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 90.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>45.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 45.00&#036;.</span></span></span>
</div></li>

			
					<li class="cms-product-default product type-product post-303 status-publish instock product_cat-pants product_cat-t-shirts product_tag-pants product_tag-t-shirts has-post-thumbnail featured shipping-taxable product-type-grouped cms-remove-msg-before-title cms-remove-msg-after-short-desc cms-remove-pickup-store cms-remove-stock-msg cms-remove-shipping-bar cms-remove-card-allowed wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
    <img width="400" height="524" src="../../wp-content/uploads/Wide-Leg-Trousers6-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async" loading="lazy" /><img width="400" height="524" src="../../wp-content/uploads/Wide-Leg-Trousers-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Wide Leg Trousers &amp; Navy Blue T-Shirt" decoding="async" loading="lazy" /></div>  
                <a href="../wide-leg-trousers-navy-blue-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="indexab60.html?add-to-wishlist=303" class="cms-woosw-btn woosw-btn woosw-btn-303 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="303" data-product_name="Wide Leg Trousers &amp; Navy Blue T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Wide-Leg-Trousers-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexf349.html?quick-view=303" class="woosq-btn woosq-btn-303 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="303" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="../wide-leg-trousers-navy-blue-t-shirt/index.html" data-quantity="1" class="cms-loop-atc product_type_grouped in-stock" data-product_id="303" data-product_sku="ED5690015" aria-label="View products in the &ldquo;Wide Leg Trousers &amp; Navy Blue T-Shirt&rdquo; group" rel="nofollow">View products</a>      <a href="../../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_303" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../wide-leg-trousers-navy-blue-t-shirt/index.html">Wide Leg Trousers &#038; Navy Blue T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efca94ff6"  data-product-id="303"><span class="woocommerce-Price-amount amount" aria-hidden="true"><bdi>25.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span> <span aria-hidden="true">&ndash;</span> <span class="woocommerce-Price-amount amount" aria-hidden="true"><bdi>55.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span><span class="screen-reader-text">Price range: 25.00&#36; through 55.00&#36;</span></span></span>
</div></li>

			
					<li class="cms-product-default product type-product post-198 status-publish instock product_cat-shirts product_cat-skirts product_tag-shirts product_tag-skirts has-post-thumbnail sale shipping-taxable purchasable product-type-simple cms-remove-msg-before-title cms-remove-msg-after-short-desc cms-remove-pickup-store cms-remove-shipping-bar cms-remove-card-allowed wooct-active wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">
	    <span class="cms-wc-badge sale">50% OFF</span>

	</div>
    <img width="400" height="524" src="../../wp-content/uploads/Red-Pattern-Flowy-Shirt4-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async" loading="lazy" /><img width="400" height="524" src="../../wp-content/uploads/Red-Pattern-Flowy-Shirt-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Red Pattern Flowy Shirt" decoding="async" loading="lazy" /></div>  
                <a href="../red-pattern-flowy-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index07b8.html?add-to-wishlist=198" class="cms-woosw-btn woosw-btn woosw-btn-198 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="198" data-product_name="Red Pattern Flowy Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Red-Pattern-Flowy-Shirt-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="indexb467.html?quick-view=198" class="woosq-btn woosq-btn-198 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="198" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index6f15.html?add-to-cart=198" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="198" data-product_sku="ED5690006" aria-label="Add to cart: &ldquo;Red Pattern Flowy Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Red Pattern Flowy Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_198" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../red-pattern-flowy-shirt/index.html">Red Pattern Flowy Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efca9685f"  data-product-id="198"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>100.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></del> <span class="screen-reader-text">Original price was: 100.00&#036;.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>50.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></ins><span class="screen-reader-text">Current price is: 50.00&#036;.</span></span></span>
</div></li>

			
					<li class="cms-product-default product type-product post-260 status-publish last instock product_cat-t-shirts product_tag-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple cms-remove-msg-before-title cms-remove-msg-after-short-desc cms-remove-pickup-store cms-remove-stock-msg cms-remove-shipping-bar cms-remove-card-allowed wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-products-content relative">    <div class="cms-products-loop-thumbs relative">
<div class="wpcbm-wrapper">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none">    <span class="cms-wc-badge new">New</span>
    </div>
    <div class="wpcbm-badges wpcbm-badges-flat "><div class="wpcbm-badge wpcbm-badge-674 wpcbm-pid-260 wpcbm-badge-style-cms-new wpcbm-badge-group-102 hint--top" aria-label=""><div class="wpcbm-badge-inner">New</div></div></div><img width="400" height="524" src="../../wp-content/uploads/Boyfriend-Knitted-T-Shirt5-400x524.webp" class="cms-overlay cms-second-image cms-transition" alt="" decoding="async" loading="lazy" /><img width="400" height="524" src="../../wp-content/uploads/Boyfriend-Knitted-T-Shirt2-400x524.webp" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Boyfriend Knitted T-Shirt" decoding="async" loading="lazy" /></div>  
                <a href="../boyfriend-knitted-t-shirt/index.html" class="cms-overlay"></a>
            <div class="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4"><a href="index16dc.html?add-to-wishlist=260" class="cms-woosw-btn woosw-btn woosw-btn-260 woosw-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="260" data-product_name="Boyfriend Knitted T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Boyfriend-Knitted-T-Shirt2-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span></a><a href="index4697.html?quick-view=260" class="woosq-btn woosq-btn-260 woosq-btn-has-icon cms-loop-thumbs-icon  hint--bounce  hint--left" data-id="260" data-effect="mfp-3d-unfold" data-context="default" rel="nofollow" data-hint="Quick view"><span class="woosq-btn-icon trevox-icon-eye"></span></a></div>
        <div class="cms-products-loop-thumbs-middle cms-transition absolute center z-top3 empty-none"></div>
        <div class="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10"><div class="cms-loop-addtocart"><a href="index84f3.html?add-to-cart=260" data-quantity="1" class="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart" data-product_id="260" data-product_sku="ED56900013" aria-label="Add to cart: &ldquo;Boyfriend Knitted T-Shirt&rdquo;" rel="nofollow" data-success_message="&ldquo;Boyfriend Knitted T-Shirt&rdquo; has been added to your cart" role="button">Add to cart</a>      <a href="../../shop/cart/index.html" class="added_to_cart cms-loop-atc" title="View Cart"> 
                  View Cart              </a>
    </div>	<span id="woocommerce_loop_add_to_cart_link_describedby_260" class="screen-reader-text">
			</span>
</div>
            </div> 
<h2 class="cms-loop-title text-18 pt-20 pb-3"><a href="../boyfriend-knitted-t-shirt/index.html">Boyfriend Knitted T-Shirt</a></h2>
	<span class="price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efca97994"  data-product-id="260"><span class="woocommerce-Price-amount amount"><bdi>35.00<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></span>
</div></li>

			
		</ul>

	</section>
	</div>

</main>
    <Footer />
    </>
  );
};

export default Single;
