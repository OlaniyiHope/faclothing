
import React, {useState, useEffect} from "react";
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
import ProductTabs from "./ProductTabs";
import { FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Header2 from "./Header2";
import Header3 from "./Header3";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const Single2 = () => {

const { slug } = useParams();
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
  const [selectedQuantity, setSelectedQuantity] = useState(1); // default quantity 1
  const [selectedColor, setSelectedColor] = useState(null);
console.log("Selected Color:", selectedColor);
console.log("Selected Size:", selectedSize);
console.log("Selected Qty:", selectedQuantity);

    // NEXT & PREV buttons
  const goNext = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: product } = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/db/product/slug/${slug}`
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
  }, [slug]);

// useEffect(() => {
//   const fetchCategory = async () => {
//     try {
//       // 🔹 Fetch current category
//       const { data: category } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/category/${id}`
//       );
//       console.log("📌 Current category:", category);

//       setName(category.name);
//       setPreview(category.image || "");

//       // 🔹 Fetch all categories (with nested children)
//       const { data: allCats } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/categories`
//       );
//       console.log("📌 All categories:", allCats);

//       // Get all grandparent-level categories (no parent)
//       setGrandParents(allCats.filter((cat) => !cat.parent));

//       let grandParentId;

//       if (!category.parent) {
//         // Current category IS a grandparent
//         grandParentId = category._id;
//         console.log("✅ Current category is a GRANDPARENT:", grandParentId);
//       } else {
//         // Walk up one level
//         const { data: parentCat } = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/category/${category.parent}`
//         );
//         console.log("📌 Parent category:", parentCat);

//         if (!parentCat.parent) {
//           grandParentId = parentCat._id;
//           console.log("✅ Parent is GRANDPARENT:", grandParentId);
//         } else {
//           const { data: grandCat } = await axios.get(
//             `${process.env.REACT_APP_API_URL}/api/db/category/${parentCat.parent}`
//           );
//           console.log("📌 Resolved grandparent category:", grandCat);
//           grandParentId = grandCat._id;
//         }
//       }

//       setSelectedGrandParent(grandParentId);
//       console.log("🎯 Final grandParentId:", grandParentId);

//       // ✅ Find the grandparent inside allCats (this one has children populated!)
//       const grandParentCategory = allCats.find(
//         (cat) => cat._id.toString() === grandParentId.toString()
//       );

//       // ✅ Use children of grandparent
//       let resolvedParents = [];
//       if (grandParentCategory && grandParentCategory.children) {
//         resolvedParents = grandParentCategory.children.filter(
//           (child) => !child.price // optional filter: exclude products
//         );
//       }

//       console.log(
//         "📌 Parents to display (from grandparent.children):",
//         resolvedParents
//       );

//       setParents(resolvedParents);
//       setChildren([]);
//     } catch (err) {
//       console.error("❌ Failed to fetch category:", err);
//     }
//   };

//   fetchCategory();
// }, [slug]);


useEffect(() => {
  const fetchCategory = async () => {
    try {
      // 🔹 Fetch current category by slug
      const { data: category } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/category/slug/${slug}`
      );
      console.log("📌 Current category:", category);

      setName(category.name);
      setPreview(category.image || "");

      // 🔹 Fetch all categories (with nested children)
      const { data: allCats } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/categories`
      );
      console.log("📌 All categories:", allCats);

      // Get all grandparent-level categories (no parent)
      setGrandParents(allCats.filter((cat) => !cat.parent));

      let grandParentId;

      if (!category.parent) {
        // Current category IS a grandparent
        grandParentId = category._id;
        console.log("✅ Current category is a GRANDPARENT:", grandParentId);
      } else {
        // Walk up one level
        const { data: parentCat } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/category/${category.parent}`
        );
        console.log("📌 Parent category:", parentCat);

        if (!parentCat.parent) {
          grandParentId = parentCat._id;
          console.log("✅ Parent is GRANDPARENT:", grandParentId);
        } else {
          const { data: grandCat } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/db/category/${parentCat.parent}`
          );
          console.log("📌 Resolved grandparent category:", grandCat);
          grandParentId = grandCat._id;
        }
      }

      setSelectedGrandParent(grandParentId);
      console.log("🎯 Final grandParentId:", grandParentId);

      // ✅ Find the grandparent inside allCats (this one has children populated!)
      const grandParentCategory = allCats.find(
        (cat) => cat._id.toString() === grandParentId.toString()
      );

      // ✅ Use children of grandparent
      let resolvedParents = [];
      if (grandParentCategory && grandParentCategory.children) {
        resolvedParents = grandParentCategory.children.filter(
          (child) => !child.price // optional filter: exclude products
        );
      }

      console.log(
        "📌 Parents to display (from grandparent.children):",
        resolvedParents
      );

      setParents(resolvedParents);
      setChildren([]);
    } catch (err) {
      console.error("❌ Failed to fetch category:", err);
    }
  };

  fetchCategory();
}, [slug]); // ✅ make sure dependency is slug


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
const normalizedSizes = React.useMemo(() => {
  if (!product?.size) return [];

  // product.size = ["s, l, m"]
  if (Array.isArray(product.size)) {
    return product.size
      .flatMap((s) => s.split(","))
      .map((s) => s.trim())
      .filter(Boolean);
  }

  return [];
}, [product]);

useEffect(() => {
  if (product?.color?.length > 0) {
    setSelectedColor(product.color[0]);
  }

  if (normalizedSizes.length > 0) {
    setSelectedSize(normalizedSizes[0]);
  }

  // setSelectedQuantity(1);
}, [product, normalizedSizes]);

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
  

     <body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US USD NG bg-white guest wt-focus-visible" >
 <main id="content" style={{marginBottom: "200px"}}>


           <div  class="wt-banner wt-banner--informational-01 trust-suite-banner wt-max-width-full wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-p-xs-3" id="etsywebtoolkitbannerswtbanner6914871a8e928"  >
        <div class="wt-banner__layout wt-display-flex-xs wt-align-items-center wt-justify-content-space-evenly wt-flex-nowrap">
        <div class="wt-show-lg wt-show-xl wt-show-tv wt-hide-md wt-hide-sm">
            <div class="wt-display-flex-xs wt-align-items-center">
                <p class="wt-text-title">
                    Shop confidently on Rayofaa
                </p>
            </div>
        </div>
        <div class="">
            <div class="wt-display-flex-xs wt-align-items-center">
             
                <div class="wt-popover" id="trust-suite-banner-epp-popover" >
                    <button type="button"  class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-epp-popover-overlay">
                        <span class="wt-text-title">
                            Rayofaa Purchase Protection
                        </span>
                    </button>
                    <div id="trust-suite-banner-epp-popover-overlay" role="tooltip">
                        <h4 class="wt-mb-xs-1">
                            Rayofaa Purchase Protection
                        </h4>
                        <p class="wt-mb-xs-3">
                            <strong>
                                If something goes wrong with your order, you'll get a full refund.
                            </strong>
                        </p>
                        <p class="wt-mb-xs-1">
                            <strong>
                                Here's what's eligible:
                            </strong>
                        </p>
<ul  class="wt-list wt-mb-xs-1 wt-text-body-small" >                            <li>
                                Your order doesn't match the item description or photos
                            </li>
                            <li>
                                Your item arrived damaged
                            </li>
                            <li>
                                Your item arrived after the estimated arrival window
                            </li>
                            <li>
                                Your item didn't arrive or was lost in the mail
                            </li>
</ul>
                        <p class="wt-text-body-small">
                            <a href="https://www.etsy.com/etsy-purchase-protection"   target="_blank">
                                View program terms
                            </a>
                        </p>
    
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="wt-display-flex-xs wt-align-items-center">
                <div class="wt-pr-xs-1" aria-hidden="true">
                    <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 13v5h-2v-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.25A.25.25 0 0 1 4.25 9H7.5V6.5a4.5 4.5 0 0 1 9 0V9h3.25a.25.25 0 0 1 .25.25V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM9.5 6.5a2.5 2.5 0 0 1 5 0V9h-5zM8 20a2 2 0 0 1-2-2v-7h12v7a2 2 0 0 1-2 2z"></path></svg></span>
                </div>
                <div class="wt-popover" id="trust-suite-banner-spo-popover" >
                    <button type="button"  class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-spo-popover-overlay">
                        <span class="wt-text-title">
                    Secure payment options
                        </span>
                    </button>
                    <div id="trust-suite-banner-spo-popover-overlay" role="tooltip">
                        <p class="wt-mb-xs-1">
                            
                                Etsy keeps your payment information secure.
                            
                        </p>
                        <p class="wt-mb-xs-1">

                                Etsy shops never receive your credit card information.
                            
                        </p>
                        <span class="wt-popover__arrow"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="wt-display-flex-xs wt-align-items-center">
                <div class="wt-pr-xs-1" aria-hidden="true">
                    <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path></svg></span>
                </div>
                <div class="wt-popover" id="trust-suite-banner-vr-popover" >
                    <button type="button"  class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-vr-popover-overlay">
                        <span class="wt-text-title">
                            Verified reviews
                        </span>
                    </button>
                    <div id="trust-suite-banner-vr-popover-overlay" role="tooltip">
                        <p class="wt-mb-xs-1">
                            
                                All reviews are from verified buyers—real people who actually bought the item they're talking about.
                            
                        </p>
                        <span class="wt-popover__arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<div  class="wt-hide-xs wt-show-lg breadcrumb_nav">
    <div  id="desktop-category-nav" class="cat-nav  v2-toolkit-cat-nav wt-ml-xs-0 wt-mr-xs-0">
     <div className="wt-text-caption wt-position-relative wt-z-index-5 wt-pt-xs-2">
  <div className="wt-grid wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-6 wt-pr-lg-6">
    
    <ul className="wt-list-unstyled wt-grid__item-xs-12 wt-body-max-width wt-display-flex-xs wt-justify-content-center">
      
      {/* HOME */}
      <li className="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
        <Link to="/">Homepage</Link>
        <span className="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path>
          </svg>
        </span>
      </li>

      {/* CATEGORY NAME FROM DATABASE */}
      <li className="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
        <span>{product?.category?.name}</span>
      </li>

    </ul>

  </div>
</div>

    </div>
</div>
  



<div  class="content-wrap ">


   <div class="wt-pt-xs-5  wt-horizontal-center">


 <div id="listing-right-column" class="listing-buy-box-experiment">
<div className="body-wrap wt-body-max-width flex flex-col md:flex-row md:gap-6">


<div
  className="
    image-col 
    wt-order-xs-1 wt-mb-xs-2 wt-mb-lg-6
    wt-pl-md-4 wt-pl-lg-5 
    wt-pr-md-4 wt-pr-lg-0
    left-section
    no-mobile-padding
  "
>
  <div className="wt-flex-lg-6 wt-mr-lg-3 wt-pr-xl-3">

    <div
      className="image-wrapper wt-position-relative carousel-container-responsive"
      id="photos"
   style={{
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    overflow: "hidden",
  }}
    >
      {/* ❤️ Favorite */}
      <button
        className="btn--focus wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
        wt-btn--filled wt-btn--icon wt-btn--fixed-floating wt-position-right wt-mr-xs-2 wt-mt-xs-2"
      >
        {/* SVG remains same */}
      </button>

      {/* 🎠 CAROUSEL */}
      {product && product.images?.length > 0 ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={false}
          emulateTouch={true}
          swipeable={true}
          showIndicators={true}
          dynamicHeight={false}
          renderIndicator={(onClick, isSelected, index) => (
            <span
              onClick={onClick}
              key={index}
              style={{
                display: "inline-block",
                width: isSelected ? "12px" : "8px",
                height: isSelected ? "12px" : "8px",
                margin: "0 5px",
                borderRadius: "50%",
                background: isSelected ? "#333" : "#bbb",
                cursor: "pointer",
              }}
            />
          )}
        >
          {product.images.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`${product.name} ${i}`}
                className="carousel-image w-full"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-center text-gray-400 py-8">Loading product...</p>
      )}

    </div>
  </div>
</div>

  <div class="right-section">
<div className="cart-col wt-order-xs-2 wt-mb-lg-5">
  <div
    id="listing-page-cart"
    className="wt-display-flex-lg wt-flex-direction-column-md wt-flex-lg-3 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2"
  >


    {/* PRICE SECTION */}
    <div className="wt-display-flex-xs wt-align-items-center wt-flex-wrap">
      <div>
        <div className="wt-display-flex-xs wt-align-items-baseline wt-flex-wrap">
          <p className="wt-text-title-larger wt-mr-xs-1 wt-text-black">
            USD {product?.discountPrice ?? product?.price}
          </p>

          {product?.discountPrice && (
            <p className="wt-text-caption">
              <span className="wt-text-strikethrough wt-nudge-b-1">
                USD {product.price}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>

    {/* DISCOUNT LABEL */}
    {product?.discountPrice && (
      <div className="wt-mb-xs-1 wt-display-flex-xs">
        <div>
          <p className="wt-text-title-small wt-sem-text-monetary-value">
            {Math.floor(
              ((product.price - product.discountPrice) / product.price) * 100
            )}
            % off
          </p>
        </div>

        <span className="wt-sem-text-monetary-value wt-mr-xs-1 wt-ml-xs-1">
          •
        </span>

        <div>
          <p className="wt-text-title-small wt-sem-text-monetary-value">
            Limited time sale
          </p>
        </div>
      </div>
    )}

    {/* VAT Section */}
    <div>
      <div className="wt-sem-text-secondary wt-text-caption wt-pt-xs-1 wt-pb-xs-1">
        VAT Included
      </div>
    </div>

    {/* PRODUCT NAME */}
    <div className="wt-mt-xs-1 wt-mb-xs-1">
      <h1
        className="wt-line-height-tight wt-break-word wt-text-body"
        tabIndex={0}
      >
        {product?.name}
      </h1>
    </div>

{/* COLOR, SIZE & QUANTITY SELECT */}
<div
  className="wt-mb-xs-6 wt-p-xs-3 wt-p-lg-4"
  style={{ border: "1px solid #e0e0e0", borderRadius: "6px" }}
>
  {/* COLOR SELECT */}
  {product?.color?.length > 0 && (
    <div className="wt-mb-xs-3">
      <label className="wt-text-caption wt-mb-xs-1 wt-display-block">
        Color
      </label>
      <select
        className="wt-select wt-width-full"
        value={selectedColor || ""}
        onChange={(e) => setSelectedColor(e.target.value)}
        style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
      >
        <option value="" disabled>
          Select color
        </option>
        {product.color.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  )}

{/* SIZE SELECT */}
{normalizedSizes.length > 0 && (
  <div className="wt-mb-xs-3">
    <label className="wt-text-caption wt-mb-xs-1 wt-display-block">
      Size
    </label>

    <select
      className="wt-select wt-width-full"
      value={selectedSize}
      onChange={(e) => setSelectedSize(e.target.value)}
      style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
    >
      {normalizedSizes.map((size) => (
        <option key={size} value={size}>
          {size.toUpperCase()}
        </option>
      ))}
    </select>
  </div>
)}


  {/* QUANTITY SELECT */}
  <div className="wt-mb-xs-3">
    <label className="wt-text-caption wt-mb-xs-1 wt-display-block">
      Quantity
    </label>
    <input
      type="number"
      min={1}
      value={selectedQuantity}
      onChange={(e) => setSelectedQuantity(Number(e.target.value))}
      className="wt-select wt-width-full"
      style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
    />
  </div>
</div>






{/* ADD TO CART SECTION */}
<button
  className="wt-btn wt-btn--filled wt-no-wrap"
  onClick={() => {
    if (!selectedColor) {
      alert("Please select a color");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    if (selectedQuantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    addToCart({
      product: {
        _id: product._id,
        name: product.name,
        price: product.price,
        discountPrice: product.discountPrice,
        image: product.images?.[0],
      },
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
    });

    navigate("/cart");
  }}
>
  Add to cart
</button>



    {/* STOCK / BESTSELLER NOTICE */}
    <div className="wt-mt-xs-3">
      {product?.isBestSeller && (
        <p className="wt-text-caption">
          ⭐ This item is a Bestseller — selling fast!
        </p>
      )}
      {product?.quantityAvailable <= 5 && (
        <p className="wt-text-caption wt-text-critical">
          Only {product.quantityAvailable} left in stock
        </p>
      )}
    </div>
  </div>
</div>


<div className="listing-info info-col description-right wt-order-xs-5">
  <div className="wt-flex-lg-3 wt-order-xs-1 wt-order-lg-3 wt-max-width-full wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2">
    <div >
      <div id="product_details" className="appears-ready">

        <div className="wt-content-toggle">
          <button
            className="wt-btn wt-btn--transparent wt-content-toggle--btn  wt-content-toggle--flush"
           
          >
            <span className="wt-flex-xs-auto  wt-text-title">
              <h2 style={{fontWeight: "800"}}>Item Details</h2>
            </span>
          </button>

          <div >

            {/* ----------- HIGHLIGHTS ------------ */}
            <div className="wt-mb-xs-6">
              <div className="wt-mt-xs-2">
                <h3 className="wt-text-title" style={{fontWeight: "800"}}>Highlights</h3>
                <ul>

                  {/* MATERIAL */}
                  {product?.material && (
                    <li className="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
                      <div className="wt-ml-xs-1">Material: {product.material}</div>
                    </li>
                  )}

                  {/* WEIGHT */}
                  {product?.weight && (
                    <li className="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
                      <div className="wt-ml-xs-1">Weight: {product.weight}</div>
                    </li>
                  )}

                  {/* CLOSURE TYPE */}
                  {product?.closureType && (
                    <li className="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
                      <div className="wt-ml-xs-1">Closure type: {product.closureType}</div>
                    </li>
                  )}

                  {/* COLORS */}
                  {product?.color?.length > 0 && (
                    <li className="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
                      <div className="wt-ml-xs-1">
                        Available Colors: {product.color.join(", ")}
                      </div>
                    </li>
                  )}

                  {/* SIZES */}
                  {product?.size?.length > 0 && (
                    <li className="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
                      <div className="wt-ml-xs-1">
                        Sizes: {product.size.join(", ")}
                      </div>
                    </li>
                  )}

                </ul>
              </div>

              {/* ----------- FEATURES (comma separated) ------------ */}
              {product?.features?.length > 0 && (
                <div className="wt-mt-xs-2">
                  <h3 className="wt-text-title" style={{fontWeight: "800"}} >Features</h3>
                  <ul >
                    {product.features[0]
                      .split(",")
                      .map((item, index) => (
                        <li
                          key={index}
                          className="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start"
                        >
                          <div className="wt-ml-xs-1">{item.trim()}</div>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* ----------- DESCRIPTION ------------ */}
              <div  className="wt-mt-xs-4">
                <div className="wt-content-toggle__body wt-content-toggle__body--truncated wt-content-toggle__body--truncated-02">
                      <h3 className="wt-text-title" style={{fontWeight: "800"}}>Description</h3>
                  <p className="wt-text-body-01 wt-break-word">
                    {product?.description}
                  </p>
                </div>

             
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>

</div>
     

    <div className="wt-pl-md-4 wt-pr-md-4 wt-pl-lg-5 wt-pr-lg-5 wt-order-xs-3 related-section">
  <div>
    <h2 className="wt-line-height-tight wt-text-heading-small" style={{fontWeight: "800"}}>
      Related Products
    </h2>

    <div className="wt-grid wt-mt-xs-3">
      {products.length === 0 && (
        <p>No related products found.</p>
      )}

      {products.map((item) => (
        <div
          key={item._id}
          className="wt-mb-xs-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-xs-6"
        >
          <div className="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">

            <Link
              to={`/single-product/${item._id}`}
              className="wt-card__action-link"
            >
              <div className="wt-card__inner">
                <div className="wt-grid wt-flex-nowrap wt-rounded-02">

                  <div className="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-align-items-center">

                    <img
                      className="wt-rounded-01 wt-image--cover wt-image"
                      src={item.images?.[0]}
                      alt={item.name}
                      style={{ aspectRatio: "1", width: "75px", height: "75px" }}
                    />

                    <p className="wt-text-title-small wt-text-truncate--multi-line">
                      {item.name}
                    </p>
                  </div>

                </div>
              </div>
            </Link>

          </div>
        </div>
      ))}
    </div>
  </div>
</div>

     </div>
 </div>
   </div>
</div>
 </main>

</body>
    <Footer />
    </>
  );
};

export default Single2;

