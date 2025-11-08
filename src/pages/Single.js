import React, {useState, useEffect} from "react";
import white from "./home.png";
import young from "./a1.jpeg";
import old from "./a3.jpg";
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
import Header3 from "./Header3";

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
    <div>

  <Header3 />
 	<main id="cms-main" class="cms-main cms-woo-content container-full single-product-full" style={{backgroundColor: "white", }}> <div class="woocommerce-notices-wrapper"></div><div id="product-222" class="product type-product post-222 status-publish first instock product_cat-knitwear product_cat-t-shirts product_tag-shirts product_tag-skirts has-post-thumbnail shipping-taxable purchasable product-type-simple cms-remove-msg-before-title cms-remove-msg-after-short-desc cms-remove-pickup-store cms-remove-stock-msg cms-remove-shipping-bar cms-remove-card-allowed wooct-ended wpcvs-active wpcvs-single-replacement-enable">
	<div class="cms-single-product-gal-content d-flex gutter gutter-grid">
		{/* <div class="cms-woocommerce-product-gallery single-product-full cms-gallery-grid-mixed">        <div class="cms-wc-badges absolute d-flex gap-5 empty-none"></div>
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
</div> */}


{product && product.images?.length > 0 ? (
  <div className="cms-woocommerce-product-gallery single-product-full cms-gallery-grid-mixed relative">
    <div className="cms-wc-badges absolute d-flex gap-5 empty-none"></div>

    <div
      className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-0 images cms-gallery-grid-mixed cms-sticky"
      data-columns="grid-mixed"
      style={{
        opacity: 1,
        transition: "opacity 0.25s ease-in-out",
        display: "flex",
        gap: "20px",
      }}
    >
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {product.images.map((img, index) => (
          <div
            key={index}
            className={`woocommerce-product-gallery__image cursor-pointer ${
              index === currentImageIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              width: "90px",
              height: "110px",
            }}
          >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="woocommerce-product-gallery__wrapper flex-1">
        <div className="woocommerce-product-gallery__image">
          <a
            className="cms-galleries-light-box"
            data-elementor-open-lightbox="yes"
            data-elementor-lightbox-slideshow={`cms-product-gal-${product?._id || "gallery"}`}
            href={product.images[currentImageIndex]}
          >
            <img
              loading="lazy"
              width="600"
              height="687"
              src={product.images[currentImageIndex]}
              alt={product.name}
              title={product.name}
              data-caption=""
              data-src={product.images[currentImageIndex]}
              data-large_image={product.images[currentImageIndex]}
              data-large_image_width="600"
              data-large_image_height="900"
              decoding="async"
              className="rounded-lg shadow-lg object-contain max-h-[700px] w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
) : (
  <p className="text-center text-gray-400 py-8">Loading product...</p>
)}

		<div class="summary entry-summary">
			<div class="summary-inner cms-sticky">
				<ul class="cms-breadcrumb unstyled"><li><a class="breadcrumb-entry" href="../../index.html">Home</a></li><li><a class="breadcrumb-entry" href="../../shop/index.html">Products</a></li><li><span class="breadcrumb-entry" > {product?.name || "Loading..."}</span></li></ul>
        
{/*         
        <div class="wpcsm-message wpcsm-message-646 wpcsm-location-single_product_title_before cms-wpcsm-message-sold mb-15">928 sold in last 10 hours</div> */}
        
        <h1 class="product_title text-45 text-tablet-40 text-mobile-30 mt-n8"> {product?.name || "Loading..."}</h1><p class="cms-single-price price"><span class="woocs_price_code" data-currency="" data-redraw-id="6906efca88bf4"  data-product-id="222"><span class="woocommerce-Price-amount amount"><bdi> {product?.discountPrice || "Loading..."}<span class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span></p>
           
           
           {/* 🧢 Size Selection */}
{Array.isArray(product?.size) &&
  product.size.length > 0 &&
  product.size[0].split(",").length > 0 && (
    <div className="product-size mt-6">
      <h4 className="text-gray-800 font-semibold mb-3">Select Size:</h4>

      <div className="flex flex-wrap gap-3">
        {product.size[0]
          .split(",")
          .map((size) => size.trim())
          .map((size) => (
            <button
              key={size}
              type="button"
              style={{backgroundColor: "#8b023a", color: "white"}}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border rounded-md text-sm font-medium transition-all
                ${
                  selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                }`}
            >
              {size.toUpperCase()}
            </button>
          ))}
      </div>

      {/* Optional: Show selected size */}
      {selectedSize && (
        <p className="text-sm text-gray-600 mt-3">
          Selected Size: <span className="font-semibold">{selectedSize}</span>
        </p>
      )}
    </div>
  )}

           <div class="woocommerce-product-rating">
                                                                        <a href="index.html#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count"></span> customer reviews / Add review)</a>
                                                </div>
        <div class="woocommerce-product-details__short-description">
	<p> {product?.description || "Loading..."}.</p>
</div>
{/* <div class="wpcsm-message wpcsm-message-647 wpcsm-location-single_product_excerpt_after cms-wpcsm-message-viewing d-flex align-items-center gap-5"><span class="wpcsm-live-number" data-val="480" data-min="50" data-max="500" data-step="5" data-duration="10" data-text="%s">
  
  <span class="wpcsm-live-number-value">480</span></span> people are viewing this product right now.</div> */}


<div class="wooct-wrap-single" data-id="222"></div>            <div class="">
                <div class="cms-product-stock-label text-primary text-15 pb-10">Stock:  In stock, ready to be shipped</div>
                {/* <div class="cms-product-stock-bar">
                    <div class="cms-product-stock-percent in-stock" style={{width:"100%"}}></div>
                </div> */}
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

		<button type="submit" name="add-to-cart" value="222" class="single_add_to_cart_button button alt"          onClick={() => {
    addToCart(product);
    navigate("/cart"); // redirects to cart page
  }} >Add to cart</button>

			</form>

	    <div class="cms-after-add-to-cart-form empty-none"><a href="index6f1b.html?add-to-wishlist=222" class="cms-woosw-link woosw-btn woosw-btn-222 woosw-btn-has-icon d-flex gap-10 text-uppercase ls-06 cms-hover-underline  hint--bounce  hint--top" data-id="222" data-product_name="Printed Cotton T-Shirt" data-product_image="https://7oroofthemes.com/trevox/wp-content/uploads/Printed-Cotton-T-Shirt4-77x70.webp" rel="nofollow" aria-label="Add to wishlist" data-hint="Add to wishlist"><span class="cms-woosw-btn-icon trevox-icon-love cms-normal"></span>Add to wishlist</a></div>

<div class="product_meta product-meta-simple">

{/* 	
			<span class="sku_wrapper">
      <span class="title">SKU:</span>
      <span class="content sku">ED56900072</span>
    </span> */}
	
	<span class="posted_in"><span class="title">Categories:</span><span class="content"><a href="../../product-category/knitwear/index.html" rel="tag">{product?.category?.name}</a></span></span>
	<span class="tagged_as"><span class="title">Tags:</span><span class="content"><a href="../../product-tag/shirts/index.html" rel="tag">{product?.tag}</a></span></span>
	
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
	
	{/* <div class="woocommerce-tabs wc-tabs-wrapper">
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
		
			</div> */}
<ProductTabs />

	<section class="related products">

					<h2>Related products</h2>
		

  <ul className="products columns-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {products.length > 0 ? (
      products.map((p, index) => (
        <li
          key={p._id}
          className={`cms-product-default product type-product post-${p._id} status-publish ${
            index === 0 ? "first" : index === products.length - 1 ? "last" : ""
          } instock has-post-thumbnail sale shipping-taxable purchasable product-type-simple`}
        >
          <div className="cms-products-content relative">
            {/* ---- Product Images ---- */}
            <div className="cms-products-loop-thumbs relative">
              <div className="wpcbm-wrapper">
                {/* Sale badge */}
                {p.discountPrice && (
                  <div className="cms-wc-badges absolute d-flex gap-5 empty-none">
                    <span className="cms-wc-badge sale">
                      {Math.round(
                        ((p.price - p.discountPrice) / p.price) * 100
                      )}
                      % OFF
                    </span>
                  </div>
                )}

                {/* Secondary and Primary images */}
                {p.images?.[1] && (
                  <img
                    width="400"
                    height="524"
                    src={p.images[1]}
                    className="cms-overlay cms-second-image cms-transition"
                    alt={p.name}
                    loading="lazy"
                  />
                )}
                <img
                  width="400"
                  height="524"
                  src={p.images?.[0]}
                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                  alt={p.name}
                  loading="lazy"
                />
              </div>

              {/* Overlay link */}
              <a href={`/product/${p._id}`} className="cms-overlay"></a>

              {/* Wishlist and Quick View buttons */}
              <div className="cms-products-loop-thumbs-top cms-transition absolute top-right z-top3 empty-none mt-10 mr-10 d-flex flex-column gap-4">
                <a
                  href="#"
                  className="cms-woosw-btn woosw-btn woosw-btn-has-icon cms-loop-thumbs-icon hint--bounce hint--left"
                  aria-label="Add to wishlist"
                  data-hint="Add to wishlist"
                >
                  <span className="cms-woosw-btn-icon trevox-icon-love cms-normal"></span>
                </a>

                <a
                  href={`/product/${p._id}`}
                  className="woosq-btn woosq-btn-has-icon cms-loop-thumbs-icon hint--bounce hint--left"
                  data-hint="Quick view"
                >
                  <span className="woosq-btn-icon trevox-icon-eye"></span>
                </a>
              </div>

              {/* Add to Cart button */}
              <div className="cms-products-loop-thumbs-bot cms-transition absolute bottom z-top3 empty-none w-100 pb-10 p-lr-10">
                <div className="cms-loop-addtocart">
                  <a
                    href={`/product/${p._id}`}
                    data-quantity="1"
                    className="cms-loop-atc product_type_simple in-stock add_to_cart_button ajax_add_to_cart"
                    data-product_id={p._id}
                    rel="nofollow"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>

            {/* ---- Product Title and Price ---- */}
            <h2 className="cms-loop-title text-18 pt-20 pb-3">
              <a href={`/product/${p._id}`}>{p.name}</a>
            </h2>

            <span className="price">
              <span className="woocs_price_code">
                {p.discountPrice ? (
                  <>
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {p.price}
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {p.discountPrice}
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                        </bdi>
                      </span>
                    </ins>
                  </>
                ) : (
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {p.price}
                      <span className="woocommerce-Price-currencySymbol">
                        &#36;
                      </span>
                    </bdi>
                  </span>
                )}
              </span>
            </span>
          </div>
        </li>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-4">
        No related products found.
      </p>
    )}
  </ul>
	</section>
	</div>

</main>
    <Footer />
    </div>
  );
};

export default Single;
