// import React, {useState, useEffect} from "react";
// import white from "./home.png";
// import young from "./a1.jpeg";
// import old from "./a3.jpg";
// import step from "./newsprint.png";
// import oil from "./safe.png";
// import hiab from "./ran.png";
// import "./home.css";
// import "./style.css";
// import Footer from "./Footer";
// import Banner from "./Banner";
// import Header from "./Header";
// import axios from "axios"
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import ProductTabs from "./ProductTabs";
// import { FaChevronRight } from "react-icons/fa";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import Header2 from "./Header2";
// import Header3 from "./Header3";


// const bgImage = `url("data:image/svg+xml;utf8,
//   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
//     <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
//   </svg>")`;
// const Single2 = () => {

//       const { id } = useParams();
//   const navigate = useNavigate();
// const [currentImageIndex, setCurrentImageIndex] = useState(0); // <-- add this

//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");
//  const [product, setProduct] = useState(null);
//   const [grandParents, setGrandParents] = useState([]);
//   const [parents, setParents] = useState([]);
//   const [children, setChildren] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedGrandParent, setSelectedGrandParent] = useState("");
//   const [selectedParent, setSelectedParent] = useState("");
//   const [selectedChild, setSelectedChild] = useState("");
//    const { addToCart } = useCart();
//     const [activeTab, setActiveTab] = useState("description");
//   const [selectedSize, setSelectedSize] = useState("");
//     // NEXT & PREV buttons
//   const goNext = () => {
//     setCurrentImageIndex((prev) =>
//       prev === product.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goPrev = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? product.images.length - 1 : prev - 1
//     );
//   };

// useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const { data: product } = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/product/${id}`
//         );

//         setProduct(product);

//         // Category info
//         const category = product.category;
//         if (category) {
//           setSelectedChild(category._id);
//           if (category.parent) {
//             setSelectedParent(category.parent._id);
//             if (category.parent.parent) {
//               setSelectedGrandParent(category.parent.parent._id);
//             }
//           }
//         }

//         // Debugging
//         console.log("Fetched product:", product);
//         console.log("Child:", category?.name);
//         console.log("Parent:", category?.parent?.name);
//         console.log("Grandparent:", category?.parent?.parent?.name);
//       } catch (err) {
//         console.error("Failed to fetch product:", err);
//       }
//     };

//     fetchProduct();
//   }, [id]);
// const [selectedColor, setSelectedColor] = useState(null);

// useEffect(() => {
//   if (product?.color?.length > 0) {
//     // pick the first color from DB as default
//     setSelectedColor(product.color[0]);
//   }
// }, [product]);
// useEffect(() => {
//   const fetchRelatedProducts = async () => {
//     if (!product?.category?._id) return;

//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/products/category/${product.category._id}`
//       );

//       // filter out the current product
//       const filtered = data.filter((p) => p._id !== product._id);

//       setProducts(filtered);
//     } catch (err) {
//       console.error("Failed to fetch related products:", err);
//     }
//   };

//   fetchRelatedProducts();
// }, [product]);

// const availableColors = [
//   { name: "Black", hex: "#000000" },
//   { name: "White", hex: "#FFFFFF" },
//   { name: "Red", hex: "#FF0000" },
//   { name: "Blue", hex: "#0000FF" },
//   { name: "Green", hex: "#008000" },
//   { name: "Yellow", hex: "#FFFF00" },
//   { name: "Purple", hex: "#800080" },
//   { name: "Gray", hex: "#808080" },
//   { name: "Navy", hex: "#001F54" },
//   { name: "Orange", hex: "#FFA500" },
// ];
//   return (
//     <div>

//   <Header2 />
  

//      <body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US USD NG bg-white guest wt-focus-visible" data-language="en-US" data-currency="USD" data-region="NG" data-hover-none="true" data-visual-focus-state="true" data-mobile-viewport-height="true">
//  <main id="content">


//            <div data-clg-id="WtBanner" class="wt-banner wt-banner--informational-01 trust-suite-banner wt-max-width-full wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-p-xs-3" id="etsywebtoolkitbannerswtbanner6914871a8e928" data-prop-id="etsywebtoolkitbannerswtbanner6914871a8e928" data-prop-type="static" data-prop-style-type="informational-01" data-prop-is-open="true" data-wt-neu-rendered="">
//         <div class="wt-banner__layout wt-display-flex-xs wt-align-items-center wt-justify-content-space-evenly wt-flex-nowrap">
//         <div class="wt-show-lg wt-show-xl wt-show-tv wt-hide-md wt-hide-sm">
//             <div class="wt-display-flex-xs wt-align-items-center">
//                 <p class="wt-text-title">
//                     Shop confidently on Rayofaa
//                 </p>
//             </div>
//         </div>
//         <div class="">
//             <div class="wt-display-flex-xs wt-align-items-center">
             
//                 <div class="wt-popover" id="trust-suite-banner-epp-popover" >
//                     <button type="button"  class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-epp-popover-overlay">
//                         <span class="wt-text-title">
//                             Rayofaa Purchase Protection
//                         </span>
//                     </button>
//                     <div id="trust-suite-banner-epp-popover-overlay" role="tooltip">
//                         <h4 class="wt-mb-xs-1">
//                             Rayofaa Purchase Protection
//                         </h4>
//                         <p class="wt-mb-xs-3">
//                             <strong>
//                                 If something goes wrong with your order, you'll get a full refund.
//                             </strong>
//                         </p>
//                         <p class="wt-mb-xs-1">
//                             <strong>
//                                 Here's what's eligible:
//                             </strong>
//                         </p>
// <ul data-clg-id="WtList" class="wt-list wt-mb-xs-1 wt-text-body-small" >                            <li>
//                                 Your order doesn't match the item description or photos
//                             </li>
//                             <li>
//                                 Your item arrived damaged
//                             </li>
//                             <li>
//                                 Your item arrived after the estimated arrival window
//                             </li>
//                             <li>
//                                 Your item didn't arrive or was lost in the mail
//                             </li>
// </ul>
//                         <p class="wt-text-body-small">
//                             <a href="https://www.etsy.com/etsy-purchase-protection"  data-listings-track-click="" data-event-name="trust_suite_banner_purchase_protection_banner_link_clicked" target="_blank">
//                                 View program terms
//                             </a>
//                         </p>
    
                       
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="">
//             <div class="wt-display-flex-xs wt-align-items-center">
//                 <div class="wt-pr-xs-1" aria-hidden="true">
//                     <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 13v5h-2v-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.25A.25.25 0 0 1 4.25 9H7.5V6.5a4.5 4.5 0 0 1 9 0V9h3.25a.25.25 0 0 1 .25.25V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM9.5 6.5a2.5 2.5 0 0 1 5 0V9h-5zM8 20a2 2 0 0 1-2-2v-7h12v7a2 2 0 0 1-2 2z"></path></svg></span>
//                 </div>
//                 <div class="wt-popover" id="trust-suite-banner-spo-popover" data-wt-popover="">
//                     <button type="button" data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-spo-popover-overlay">
//                         <span class="wt-text-title">
//                     Secure payment options
//                         </span>
//                     </button>
//                     <div id="trust-suite-banner-spo-popover-overlay" role="tooltip">
//                         <p class="wt-mb-xs-1">
                            
//                                 Etsy keeps your payment information secure.
                            
//                         </p>
//                         <p class="wt-mb-xs-1">

//                                 Etsy shops never receive your credit card information.
                            
//                         </p>
//                         <span class="wt-popover__arrow"></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="">
//             <div class="wt-display-flex-xs wt-align-items-center">
//                 <div class="wt-pr-xs-1" aria-hidden="true">
//                     <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path></svg></span>
//                 </div>
//                 <div class="wt-popover" id="trust-suite-banner-vr-popover" data-wt-popover="">
//                     <button type="button" data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-vr-popover-overlay">
//                         <span class="wt-text-title">
//                             Verified reviews
//                         </span>
//                     </button>
//                     <div id="trust-suite-banner-vr-popover-overlay" role="tooltip">
//                         <p class="wt-mb-xs-1">
                            
//                                 All reviews are from verified buyers—real people who actually bought the item they're talking about.
                            
//                         </p>
//                         <span class="wt-popover__arrow"></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>

// <div data-ui="listing-breadcrumbs" class="wt-hide-xs wt-show-lg breadcrumb_nav">
//     <div data-ui="cat-nav" id="desktop-category-nav" class="cat-nav  v2-toolkit-cat-nav wt-ml-xs-0 wt-mr-xs-0">
//         <div class="wt-text-caption wt-position-relative wt-z-index-5 wt-pt-xs-2">
//                 <div class="wt-grid wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-6 wt-pr-lg-6">
//                 <ul class="wt-list-unstyled wt-grid__item-xs-12 wt-body-max-width wt-display-flex-xs wt-justify-content-center" data-menu-ui="menubar" data-ui="top-nav-category-list">
//                         <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
//                             <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/?ref=catnav_breadcrumb-home">Homepage</a>
//                                 <span class="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>
//                         </li>
//                         <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
//                             <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/c/art-and-collectibles?ls=r&amp;ref=catnav_breadcrumb-0&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1">Art &amp; Collectibles</a>
//                                 <span class="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>
//                         </li>
//                         <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
//                             <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/c/art-and-collectibles/prints?ls=r&amp;ref=catnav_breadcrumb-1&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1">Prints</a>
//                                 <span class="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>
//                         </li>
//                         <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
//                             <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/c/art-and-collectibles/prints/digital-prints?ls=r&amp;ref=catnav_breadcrumb-2&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1">Digital Prints</a>
//                         </li>
//                 </ul>
//                 <span class="active-nav-item-indicator wt-position-absolute wt-display-inline-block" data-ui="active-nav-item-indicator"></span>
//         </div>
//         </div>
//     </div>
// </div>
  
//     {/* <div data-appears-component-name="Listzilla_ApiSpecs_SimilarListingsRow" data-appears-event-data="{&quot;module_placement&quot;:&quot;external_top&quot;,&quot;datasets&quot;:[&quot;organic&quot;],&quot;targets&quot;:[],&quot;logging_class&quot;:&quot;Listzilla_ApiSpecs_SimilarListingsRow&quot;,&quot;page_listing_id&quot;:1629181619,&quot;
//     mmx_request_uuid_map&quot;:[],&quot;candidate_source_map&quot;:[],&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;
//         :{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;https:\/\/www.etsy.com\/r\/themes\/1368461677904?anchor_listings=1772270430\u0026ref=hp_themes_module-2&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;3&quot;,&quot;hourOfDay&quot;:&quot;13&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;organic&quot;:[0,1,2,3,4,5,6,7,8]},&quot;target_listing_id&quot;:1629181619,&quot;sash_flavor&quot;:&quot;spaces&quot;,&quot;refTag&quot;:&quot;landingpage_similar_listing_top&quot;,&quot;listing_ids&quot;:[1772270430,1254144636,1043229566,557997966,746185432,974826767,1174180936,1650949737,1393678802],&quot;listing_prices_usd&quot;:[29.989999999999998436805981327779591083526611328125,11.03999999999999914734871708787977695465087890625,57.52000000000000312638803734444081783294677734375,36,29.949999999999999289457264239899814128875732421875,49.99000000000000198951966012828052043914794921875,53.9500000000000028421709430404007434844970703125,11.9900000000000002131628207280300557613372802734375,42.2000000000000028421709430404007434844970703125],&quot;taxonomy_ids&quot;:[2350,180,1062,1005,1667,6346,1027,7020,482],&quot;taxo_paths&quot;:[&quot;toys_and_games.games_and_puzzles.dice_and_tile_games.dice&quot;,&quot;bags_and_purses.market_bags&quot;,&quot;home_and_living.kitchen_and_dining.drink_and_barware.drinkware.mugs&quot;,&quot;home_and_living.home_decor.candles_and_home_fragrances.candles.container_candles&quot;,&quot;weddings.gifts_and_mementos.gifts_for_the_couple&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.kits&quot;,&quot;home_and_living.home_decor.wall_decor&quot;,&quot;craft_supplies_and_tools.blanks.hat_and_hair_blanks.hair_clip_blanks&quot;,&quot;clothing.gender_neutral_adult_clothing.tops_and_tees.tshirts&quot;],&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
    

// <div class="wt-pt-xs-4 wt-pr-xs-2 wt-pl-xs-2 wt-pr-md-4 wt-pl-md-4 wt-pr-lg-5 wt-pl-lg-5 wt-body-max-width wt-bb-md appears-ready">
//     <div data-similar-listings-row="">
  
//         <div class="wt-pl-xs-1 wt-display-flex-xs wt-align-items-center wt-justify-content-space-between" data-similar-target-heading="">
//             <div class="wt-pr-xs-2 wt-display-flex-xs wt-align-items-baseline wt-break-word wt-flex-xs-6 wt-mb-xs-2">
//                 <h2 class="wt-text-title-large--tight">
//                     Chemistry Essentials
//                 </h2>
                    
                    
//                 </div>

//                 <a class="wt-arrow-link wt-arrow-link--forward wt-mb-xs-3 wt-text-caption" href="https://www.etsy.com/search?ls=r&amp;ref=hp_themes_module-1&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1&amp;q=Chemistry+Essentials&amp;anchor_listing_id=1629181619&amp;is_merch_library=1" data-see-more-link="">
//                     <span aria-label="See more listings like this">
//                     See more
//                     </span>
//                 </a>
            
        
//         </div>
//             <div class="wt-grid negative-mr-xs">
//                 <div class="wt-grid__item-xs-12 wt-grid__item-lg-9"><ul class="responsive-listing-grid wt-grid wt-grid--block wt-justify-content-flex-start wt-list-unstyled wt-ml-xs-0 wt-pl-xs-0 wt-mr-xs-0 wt-width-full">
//     <div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-2
//                 wt-grid__item-lg-2
//                 wt-grid__item-md-2
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="1772270430" data-shop-id="15975158" data-listing-id="1772270430" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="1772270430" data-palette-listing-image="" href="https://www.etsy.com/listing/1772270430/periodic-table-dice-118-element-20-dice?click_key=1eda215a6db1cad0eea27700f773322fc39e83f3%3A1772270430&amp;click_sum=9cb666d9&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-1&amp;cns=1&amp;sts=1" data-listing-link="" target="etsy.1772270430" title="Periodic Table Dice - 118 Element, 20 Dice Full Set">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-1 wt-image--cover wt-image" src="https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_340x270.6235256128_lcnn.jpg" alt="Periodic Table Dice - 118 Element, 20 Dice Full Set"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_170x135.6235256128_lcnn.jpg 170w, https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_340x270.6235256128_lcnn.jpg 340w, https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_680x540.6235256128_lcnn.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-1772270430">
//                 Periodic Table Dice - 118 Element, 20 Dice Full Set
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                 <p class="wt-text-title-01 wt-pr-xs-1">
//                     <span class="currency-symbol">USD </span><span class="currency-value">29.99</span>
//                 </p>
// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
//                 <div class="wt-text-brick lc-half-unit-mt wt-text-caption">
//     Only 1 available and it's in <span class="wt-display-inline-block">9 people's carts</span>
// </div>
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="1772270430" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-2
//                 wt-grid__item-lg-2
//                 wt-grid__item-md-2
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="1254144636" data-shop-id="30394554" data-listing-id="1254144636" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="1254144636" data-palette-listing-image="" href="https://www.etsy.com/listing/1254144636/science-tote-bag-chemistry-gift-physics?click_key=8e4b5513afbc89508e70caf5abaf6e110036a11f%3A1254144636&amp;click_sum=84f025e9&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-2&amp;pro=1&amp;sts=1" data-listing-link="" target="etsy.1254144636" title="Science Tote Bag | Chemistry Gift, Physics Gift | Science Teacher Gift">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-2 wt-image--cover wt-image" src="https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_340x270.4063614491_9ukp.jpg" alt="Science Tote Bag | Chemistry Gift, Physics Gift | Science Teacher Gift"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_170x135.4063614491_9ukp.jpg 170w, https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_340x270.4063614491_9ukp.jpg 340w, https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_680x540.4063614491_9ukp.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-1254144636">
//                 Science Tote Bag | Chemistry Gift, Physics Gift | Science Teacher Gift
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                     <p class="
                              
//                                wt-text-slime
//                               wt-text-title-01 wt-pr-xs-1">
//                         <span class="wt-screen-reader-only">
//                             Sale Price USD 11.04
//                         </span>
//                         <span aria-hidden="true">
//                             <span class="currency-symbol">USD </span><span class="currency-value">11.04</span>
//                         </span><br />
//                         </p><p class="wt-text-caption
//                             search-collage-promotion-price
                            
                            
//                             wt-text-gray
//                             ">
//                             <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">12.99</span></span>
//                             <span class="wt-screen-reader-only">
//                                 Original Price USD 12.99
//                             </span>
//                             <span class="wt-text-grey wt-no-wrap">
                                
                                
                                
//                             </span>
//                         </p>
//                     <p></p>

// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="1254144636" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-2
//                 wt-grid__item-lg-2
//                 wt-grid__item-md-2
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="1043229566" data-shop-id="17179263" data-listing-id="1043229566" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="1043229566" data-palette-listing-image="" href="https://www.etsy.com/listing/1043229566/custom-science-teacher-mug-handmade?click_key=0c7ac0c23647957f26524b733574a0c4dd98eb23%3A1043229566&amp;click_sum=a5b6a35f&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-3&amp;pro=1&amp;sts=1" data-listing-link="" target="etsy.1043229566" title="Custom Science Teacher Mug: Handmade Chemist Coffee Cup">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-3 wt-image--cover wt-image" src="https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_340x270.6240679351_9q60.jpg" alt="Custom Science Teacher Mug: Handmade Chemist Coffee Cup"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_170x135.6240679351_9q60.jpg 170w, https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_340x270.6240679351_9q60.jpg 340w, https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_680x540.6240679351_9q60.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-1043229566">
//                 Custom Science Teacher Mug: Handmade Chemist Coffee Cup
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                     <p class="
                              
//                                wt-text-slime
//                               wt-text-title-01 wt-pr-xs-1">
//                         <span class="wt-screen-reader-only">
//                             Sale Price USD 57.52
//                         </span>
//                         <span aria-hidden="true">
//                             <span class="currency-symbol">USD </span><span class="currency-value">57.52</span>
//                         </span><br />
//                         </p><p class="wt-text-caption
//                             search-collage-promotion-price
                            
                            
//                             wt-text-gray
//                             ">
//                             <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">88.50</span></span>
//                             <span class="wt-screen-reader-only">
//                                 Original Price USD 88.50
//                             </span>
//                             <span class="wt-text-grey wt-no-wrap">
                                
                                
                                
//                             </span>
//                         </p>
//                     <p></p>

// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="1043229566" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-2
//                 wt-grid__item-lg-2
//                 wt-grid__item-md-2
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="557997966" data-shop-id="16104738" data-listing-id="557997966" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="557997966" data-palette-listing-image="" href="https://www.etsy.com/listing/557997966/candle-kit-make-your-own-candles-with?click_key=bc6287c5bff673cb378c8aee463a4ff0427416ac%3A557997966&amp;click_sum=eadaffb4&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-4" data-listing-link="" target="etsy.557997966" title="Candle Kit, Make Your Own Candles with Soy Wax and Essential Oils">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-4 wt-image--cover wt-image" src="https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_340x270.3436796761_69s1.jpg" alt="Candle Kit, Make Your Own Candles with Soy Wax and Essential Oils"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_170x135.3436796761_69s1.jpg 170w, https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_340x270.3436796761_69s1.jpg 340w, https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_680x540.3436796761_69s1.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-557997966">
//                 Candle Kit, Make Your Own Candles with Soy Wax and Essential Oils
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                 <p class="wt-text-title-01 wt-pr-xs-1">
//                     <span class="currency-symbol">USD </span><span class="currency-value">36.00</span>
//                 </p>
// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="557997966" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-2
//                 wt-grid__item-lg-2
//                 wt-grid__item-md-2
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="746185432" data-shop-id="14509506" data-listing-id="746185432" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="746185432" data-palette-listing-image="" href="https://www.etsy.com/listing/746185432/periodic-table-cutting-board-engraved?click_key=29b0d4be7f331f043896f62cfc3db5465f1872c2%3A746185432&amp;click_sum=a05bdb9c&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-5&amp;cns=1" data-listing-link="" target="etsy.746185432" title="PERIODIC Table CUTTING BOARD, Engraved Cutting Board, Periodic Table of Elements, Teacher Gift, Charcuterie Board">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-5 wt-image--cover wt-image" src="https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_340x270.2073203023_rzul.jpg" alt="PERIODIC Table CUTTING BOARD, Engraved Cutting Board, Periodic Table of Elements, Teacher Gift, Charcuterie Board"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_170x135.2073203023_rzul.jpg 170w, https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_340x270.2073203023_rzul.jpg 340w, https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_680x540.2073203023_rzul.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-746185432">
//                 PERIODIC Table CUTTING BOARD, Engraved Cutting Board, Periodic Table of Elements, Teacher Gift, Charcuterie Board
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                 <p class="wt-text-title-01 wt-pr-xs-1">
//                     <span class="currency-symbol">USD </span><span class="currency-value">29.95</span>
//                 </p>
// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
//                 <div class="wt-text-brick lc-half-unit-mt wt-text-caption">
//     Only 1 available and it's in <span class="wt-display-inline-block">2 people's carts</span>
// </div>
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="746185432" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-2
//                 wt-grid__item-lg-2
//                 wt-grid__item-md-2
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="974826767" data-shop-id="27788297" data-listing-id="974826767" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="974826767" data-palette-listing-image="" href="https://www.etsy.com/listing/974826767/craft-soap-kit-soap-soap-kit-handmade?click_key=f6cc45bc32a1aaef6f5bd45ccc8f7e71ae2b626a%3A974826767&amp;click_sum=3a5ec1ac&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-6" data-listing-link="" target="etsy.974826767" title="Craft Soap Kit, Soap, Soap kit, Handmade Soap, Toy Soap, Hand Craft Soap, Craft Kits, DIY Soap, DIY Soap Kit, Beginner DIY Kit, Gift Soap">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-6 wt-image--cover wt-image" src="https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_340x270.2918589072_qsh3.jpg" alt="Craft Soap Kit, Soap, Soap kit, Handmade Soap, Toy Soap, Hand Craft Soap, Craft Kits, DIY Soap, DIY Soap Kit, Beginner DIY Kit, Gift Soap"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_170x135.2918589072_qsh3.jpg 170w, https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_340x270.2918589072_qsh3.jpg 340w, https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_680x540.2918589072_qsh3.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-974826767">
//                 Craft Soap Kit, Soap, Soap kit, Handmade Soap, Toy Soap, Hand Craft Soap, Craft Kits, DIY Soap, DIY Soap Kit, Beginner DIY Kit, Gift Soap
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                 <p class="wt-text-title-01 wt-pr-xs-1">
//                     <span class="currency-symbol">USD </span><span class="currency-value">49.99</span>
//                 </p>
// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="974826767" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div>
// </ul></div>
//                 <div class="wt-grid__item-lg-3 wt-show-lg"><ul class="responsive-listing-grid wt-grid wt-grid--block wt-justify-content-flex-start wt-list-unstyled wt-ml-xs-0 wt-pl-xs-0 wt-mr-xs-0 wt-width-full">
//     <div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-6
//                 wt-grid__item-lg-6
//                 wt-grid__item-md-6
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="1174180936" data-shop-id="7408963" data-listing-id="1174180936" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="1174180936" data-palette-listing-image="" href="https://www.etsy.com/listing/1174180936/wash-periodic-table-wood-sign-bathroom?click_key=fd08c4678307db22b861f4c29b666070058bafa1%3A1174180936&amp;click_sum=1e411490&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-7&amp;sts=1" data-listing-link="" target="etsy.1174180936" title="Wash Periodic Table Wood Sign | Bathroom Decor | Laundry | Industrial Style | 3D | Engraved Signs | Gift Idea | Science | Home Decor | 17x7">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-7 wt-image--cover wt-image" src="https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_340x270.3703966488_3dbb.jpg" alt="Wash Periodic Table Wood Sign | Bathroom Decor | Laundry | Industrial Style | 3D | Engraved Signs | Gift Idea | Science | Home Decor | 17x7"  style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_170x135.3703966488_3dbb.jpg 170w, https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_340x270.3703966488_3dbb.jpg 340w, https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_680x540.3703966488_3dbb.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-1174180936">
//                 Wash Periodic Table Wood Sign | Bathroom Decor | Laundry | Industrial Style | 3D | Engraved Signs | Gift Idea | Science | Home Decor | 17x7
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                 <p class="wt-text-title-01 wt-pr-xs-1">
//                     <span class="currency-symbol">USD </span><span class="currency-value">53.95</span>
//                 </p>
// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="1174180936" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
//            wt-position-relative
//                 wt-grid__item-xs-3 wt-flex-shrink-xs-1
//                 wt-grid__item-xl-6
//                 wt-grid__item-lg-6
//                 wt-grid__item-md-6
           
// listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
//             listing-card-experimental-style" data-palette-listing-id="1650949737" data-shop-id="47543410" data-listing-id="1650949737" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
//     <a class="listing-link
//                 wt-display-inline-block
            
//                 wt-transparent-card
// " data-listing-id="1650949737" data-palette-listing-image="" href="https://www.etsy.com/listing/1650949737/beaker-hair-clip-scientist-stem-chemist?click_key=594d0f8e24ba997d96fdcb9674d1641210b92996%3A1650949737&amp;click_sum=522b6a72&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-8&amp;sts=1" data-listing-link="" target="etsy.1650949737" title="Beaker Hair Clip, Scientist, Stem, Chemist, Physicist">
            
//                 <div class="v2-listing-card__img wt-position-relative
//                         listing-card-image-no-shadow
//                         listing-card-rounded-corners
//                     ">
//                     <div class="placeholder 
//              placeholder-landscape wt-rounded-02 wt-overflow-hidden 
//                  wt-mb-xs-1 
            
            
//                 listing-card-rounded-corners
//             ">
//     <div class="placeholder vertically-centered-placeholder
//                  placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
//                  listing-card-rounded-corners ">
//             <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-8 wt-image--cover wt-image" src="https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_340x270.6162776269_p4y9.jpg" alt="Beaker Hair Clip, Scientist, Stem, Chemist, Physicist"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_170x135.6162776269_p4y9.jpg 170w, https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_340x270.6162776269_p4y9.jpg 340w, https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_680x540.6162776269_p4y9.jpg 680w" />

            
            
//     </div>
        
// </div>
                    
//                 </div>
        
//                 <div class="v2-listing-card__info
    
    
//     ">
        
    
//             <h3 class="wt-text-caption v2-listing-card__title
//                 wt-text-truncate
                
//                  wt-mb-xs-1" id="listing-title-1650949737">
//                 Beaker Hair Clip, Scientist, Stem, Chemist, Physicist
//             </h3>

                    
            
                        
            
//                            <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
//              wt-text-title-01 wt-pr-xs-1
//              ">


//                 <p class="wt-text-title-01 wt-pr-xs-1">
//                     <span class="currency-symbol">USD </span><span class="currency-value">11.99</span>
//                 </p>
// </div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
// </div>
//     </a>
//             <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
//                 <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
//             " data-ui="favorite-listing-button" data-listing-id="1650949737" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
//                             wt-display-none
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
//             </div>
// </div>
// </ul></div>
//             </div>
        
//     </div>
// </div>
//     </div> */}


// <div data-selector="listing-page-content" class="content-wrap listing-page-content">


//    <div class="wt-pt-xs-5 listing-page-content-container-wider wt-horizontal-center">


//  <div id="listing-right-column" class="listing-buy-box-experiment">

//      <div class="body-wrap wt-body-max-width wt-display-flex-md wt-flex-direction-column-xs">

//              <div class="image-col wt-order-xs-1 wt-mb-xs-2 wt-mb-lg-6 wt-pl-md-4 wt-pl-lg-5 wt-pl-xs-2 wt-pr-xs-2 wt-pr-xl-2 wt-pr-md-4 wt-pr-lg-0">
//                         <div class="wt-flex-lg-6 wt-mr-lg-3 wt-pr-xl-3">
//                             <div class="image-wrapper wt-position-relative carousel-container-responsive" id="photos">
    

//         <div data-listing-page-badge="" style={{marginLeft: "78px;"}} class="wt-position-absolute wt-z-index-2 wt-position-top wt-position-left wt-mt-xs-1">
//             <div class="wt-popover" data-wt-popover="">
//     <button data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-display-inline-flex-xs wt-align-items-center wt-text-caption" aria-disabled="true" aria-describedby="bestseller">

//     </button>
//     <div id="bestseller" role="tooltip">
//         This item has had a high sales volume over the past 6 months.
//     <span class="wt-popover__arrow"></span></div>
// </div>
//         </div>

    
//         <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
//             wt-btn--filled wt-btn--icon wt-btn--fixed-floating wt-position-right wt-mr-xs-2 wt-mt-xs-2
//             " data-ui="favorite-listing-button" data-listing-id="1629181619" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-always-show="true">
//             <div class="favorite-listing-button-icon-container should-animate " data-source="lp_image_carousel" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
//                 <span class="etsy-icon wt-nudge-t-1
                    
                    
                        
                        
//                             wt-display-block
                        
//                     " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
//                 <span class="etsy-icon wt-nudge-t-1 wt-text-favorite-heart
                    
                    
                        
                        
                      
                        
//                     " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
//             </div>
//             <span aria-hidden="true" class="icon"></span>
//             <span class="wt-screen-reader-only" data-a11y-label="">
                
//                 Add to Favorites
//             </span>
//             </button>
        
    
// {product && product.images?.length > 0 ? (
//   <div className="cms-woocommerce-product-gallery single-product-full cms-gallery-grid-mixed relative">
//     <div className="cms-wc-badges absolute d-flex gap-5 empty-none"></div>

//     <div
//       className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-0 images cms-gallery-grid-mixed cms-sticky"
//       data-columns="grid-mixed"
//       style={{
//         opacity: 1,
//         transition: "opacity 0.25s ease-in-out",
//         display: "flex",
//         gap: "20px",
//       }}
//     >
//       {/* Thumbnails */}
//       <div className="flex flex-col gap-3">
//         {product.images.map((img, index) => (
//           <div
//             key={index}
//             className={`woocommerce-product-gallery__image cursor-pointer ${
//               index === currentImageIndex ? "border-2 border-blue-500" : ""
//             }`}
//             onClick={() => setCurrentImageIndex(index)}
//             style={{
//               borderRadius: "8px",
//               overflow: "hidden",
//               width: "90px",
//               height: "110px",
//             }}
//           >
//             <img
//               src={img}
//               alt={`Thumbnail ${index}`}
//               className="object-cover w-full h-full"
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//      {/* Main Image */}
// <div
//   className="woocommerce-product-gallery__wrapper flex-1"
//   style={{
//     position: "relative",
//     // width: "100%",
//     // height: "800px", // <<< MAKE IT VERY BIG
//     background: "#f6f6f6",
//     borderRadius: "12px",
//     overflow: "hidden",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <img
//     src={product.images[currentImageIndex]}
//     alt={product.name}
//     loading="lazy"
//     decoding="async"
//     // style={{
//     //   width: "100%",
//     //   height: "100%",
//     //   objectFit: "contain", // <<< Make it BIG but NOT distorted
//     // }}
//   />
// </div>

//     </div>
//   </div>
// ) : (
//   <p className="text-center text-gray-400 py-8">Loading product...</p>
// )}
// </div>



//                         </div>
//                     </div>

//                     <div class="cart-col wt-order-xs-2 wt-mb-lg-5">
//     <div id="listing-page-cart" class="wt-display-flex-lg wt-flex-direction-column-md wt-flex-lg-3 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2">
//             <div class="
//             wt-mt-xs-1">
//                 <p class="wt-text-title-small wt-sem-text-critical">20+ views in the last 24 hours</p>
//             </div>
//         <div class="wt-display-flex-xs wt-align-items-center wt-flex-wrap">
//             <div data-appears-component-name="price">
// <div class="wt-display-flex-xs      wt-align-items-baseline          wt-flex-wrap appears-ready" data-selector="price-only" data-buy-box-region="price">
//         <p class="wt-text-title-larger wt-mr-xs-1
//                     wt-text-black
//             ">
//         <span class="wt-screen-reader-only">Price:</span>{product.price}
//     </p>
//         <p class="wt-text-caption
//         ">
//             <span class="wt-screen-reader-only">Original Price:</span>
//             <span class="wt-text-strikethrough
                
//                 lp_toffers_v2_original_price wt-nudge-b-1">
//       {product.discountPrice}
//             </span>
//         </p>
    
//     <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" data-buy-box-price-spinner="">
//         <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
//         Loading
//     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-1 
//                 wt-display-flex-xs
//                 ">
//                             <div>
//     <p class="wt-text-title-small wt-sem-text-monetary-value">
//         60% off
//     </p>
// </div>
//                             <span id="discount-and-countdown-separator" class="wt-sem-text-monetary-value wt-mr-xs-1 wt-ml-xs-1">•</span> 
//                         <div id="sale-ending-soon-countdown">
//     <p class="wt-text-title-small wt-sem-text-monetary-value">
//         Limited time sale
//     </p>
// </div>
                
//             </div>
        
//         <div data-buy-box-region="vat_messaging">
//         <div class="wt-sem-text-secondary wt-text-caption wt-pt-xs-1 wt-pb-xs-1">
//             VAT Included
//         </div>
// </div>
        
        
        
//             <div class="wt-mt-xs-1 wt-mb-xs-1">
//                 <h1 data-buy-box-listing-title="true" tabindex="0" class="wt-line-height-tight wt-break-word wt-text-body">
//  {product.description}
// </h1>
//             </div>
//         <div class="wt-mb-xs-3">
//             <div class="wt-display-inline-flex-xs wt-align-items-center wt-flex-wrap wt-flex-gap-xs-1 lp-shop-header">
//     <div class="wt-display-inline-flex-xs wt-align-items-center
        
//     ">
//         <span class="wt-text-title-small">
//         <a href="https://www.etsy.com/shop/DaysAndColours?ref=shop-header-name&amp;listing_id=1629181619&amp;from_page=listing" class="wt-text-link-no-underline wt-sem-text-primary">
//             DaysAndColours
//         </a>
//     </span>
//             &nbsp;<div class="wt-popover star-seller-badge-listing-page" data-wt-popover="">
//     <button data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline" aria-label="Star Seller" aria-describedby="star-seller-popover">
//         <span class="wt-icon wt-icon--smaller-xs wt-icon--core wt-fill-star-seller-dark" alt="star_seller"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
//     </button>
//     <div class="wt-p-xs-3" id="star-seller-popover" role="tooltip">
//         <p class="wt-mb-xs-1 wt-text-title-01">
//             Star Seller
//         </p>
//         <p class="wt-text-caption">
//             Star Sellers have an outstanding track record for providing a great customer experience—they consistently earned 5-star reviews, shipped orders on time, and replied quickly to any messages they received.
//         </p>
//     <span class="wt-popover__arrow"></span></div>
// </div>
//     </div>
//         <div class="wt-text-link-no-underline review-stars-text-decoration-none">
//     <a href="#reviews" data-click-source="review_stars" aria-label="5 out of 5 stars. See reviews."><span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
//     <input type="hidden" name="initial-rating" value="4.9711" />
//     <input type="hidden" name="rating" value="4.9711" />
//     <span class="wt-screen-reader-only">5 out of 5 stars</span>

//     <span>
//             <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
//             <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
//             <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
//             <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
//             <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
//     </span>
// </span></a>
// </div>
    
// </div>
//         </div>
//         <div class="wt-mb-xs-6 wt-mb-lg-0">
//             <div data-buy-box="">
//     <div class="wt-mb-xs-3">
        
        
//         <div data-appears-component-name="variations">
// <div data-selector="listing-page-variations" class="appears-ready">
    
// </div>
// </div>
        
        
//     </div>
    
 
//         <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-wrap wt-flex-direction-column-lg wt-flex-gap-xs-2">


            
            

//         <div  id="mao-button-disabled-text-div">
//             <p class="wt-text-body-body wt-sem-text-secondary wt-text-center-xs">
//                 You can only make an offer when buying a single item
//             </p>
//         </div>
//         <div data-appears-component-name="add_to_cart_form">
// <div class="wt-validation wt-flex-xs-1 appears-ready" data-buy-box-region="add_to_cart_form">
//         <form action="/cart/listing.php" method="post" class="add-to-cart-form" data-buy-box-add-to-cart-form="">
//             <input type="hidden" name="listing_id" value="1629181619" />
//             <input type="hidden" name="ref" value="listing_page" />
//             <input type="hidden" name="_nnc" value="3:1762952986:U0Su2AKqiNrzYiW2MEyOogYcUazs:687b293a66a02bf3d94b5b0a16be1a6860111af6f43e95969f9b4f96fc600d09"  />
//                 <input type="hidden" name="listing_inventory_id" value="19441100920" />
//                 <input type="hidden" name="shipping_method_id" value="" />
//                 <input type="hidden" name="quantity" value="1" />
//                 <input type="hidden" name="_nnc" value="3:1762952986:U0Su2AKqiNrzYiW2MEyOogYcUazs:687b293a66a02bf3d94b5b0a16be1a6860111af6f43e95969f9b4f96fc600d09"  />
//             <div class="wt-width-full" data-add-to-cart-button="" data-selector="add-to-cart-button">
// <button data-clg-id="WtButton" class="wt-btn wt-btn--filled wt-width-full wt-no-wrap" type="submit">
//             <span >Add to cart
        
//     <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
//         <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
//         Loading
//     </div>


// </span></button>
// </div>
//         </form>
        
//         <p class="purchase-accept-terms  wt-mt-xs-2 wt-sem-text-primary wt-text-body-small wt-width-full"></p>
// </div>
// </div>
//     </div>
// </div>
//             <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-flex-direction-column-lg wt-flex-gap-md-2 wt-flex-gap-lg-0 wt-justify-content-space-between">
                
                
                
//             </div>
            
//                 <div class="wt-mt-xs-3">
//                     <div data-appears-component-name="secondary_nudges">
// <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 appears-ready">
//         <div class="wt-pr-xs-2 is-in-view" data-add-class-when-in-view="is-in-view">
//             <span class="inline-svg wt-display-flex-xs">
                
// </span>
//         </div>
//     <div class="wt-display-flex-xs wt-flex-direction-column-xs">
        
//         <p class="wt-text-caption">
//             <strong>Star Seller.</strong> This seller consistently earned 5-star reviews, shipped on time, and replied quickly to any messages they received.
//         </p>
//     </div>
// </div>
// </div>
//                 </div>
//         </div>
        
//     </div>
// </div>

// <div class="listing-info info-col description-right wt-order-xs-5">
//     <div class="wt-flex-lg-3 wt-order-xs-1 wt-order-lg-3 wt-max-width-full wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2">
//             <div data-appears-component-name="product_details">
// <div id="product_details" class="appears-ready">
//     <div class="wt-content-toggle " data-selector="info-section-content-toggle">
// <button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-content-toggle--btn wt-content-toggle--with-icon wt-width-full wt-content-toggle--flush" data-wt-content-toggle="true" data-animate="true" data-default-open="true" aria-controls="product_details_content_toggle" aria-expanded="true">
//                 <span class="wt-flex-xs-auto wt-width-full wt-text-title">
//                 <h2>
//                     Item details
//                 </h2>
//             </span>
//             <span class="wt-content-toggle--btn__icon"></span>

// </button>

//         <div id="product_details_content_toggle" class="wt-content-toggle__body" aria-hidden="false">
//             <div class="wt-mb-xs-6">
//                 <div class="wt-mt-xs-2">
//     <h3 class="wt-text-title">Highlights</h3>
//     <ul class="wt-block-grid-xs-1 wt-text-body-01 show-icons wt-mt-xs-1 wt-pl-xs-0 wt-mb-xs-3" data-selector="product-details-highlights">
        
        
        
        
        
        
        
//         <li class="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
//             <div><span class="wt-icon wt-nudge-b-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 12.32a7 7 0 0 0 0-.82A7.5 7.5 0 0 0 8.71 5.73a6.63 6.63 0 0 1 3.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 1 0 7 19h12.5a3.5 3.5 0 0 0 1.5-6.68m-9 5.35-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72z"></path></svg></span></div>
//         <div class="wt-ml-xs-1">
//                 Digital download
//         </div>
// </li>
//         <li class="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
//             <div><span class="wt-icon wt-nudge-b-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 2c2.21 0 4 1.79 4 4v10.5c0 3.03-2.47 5.5-5.5 5.5A5.51 5.51 0 0 1 7 16.5V7c0-.55.45-1 1-1s1 .45 1 1v9.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V6c0-1.1-.9-2-2-2s-2 .9-2 2v9.5c0 .28.22.5.5.5s.5-.22.5-.5V7c0-.55.45-1 1-1s1 .45 1 1v8.5a2.5 2.5 0 0 1-5 0V6c0-2.21 1.79-4 4-4"></path></svg></span></div>
//         <div class="wt-ml-xs-1">
//                 Digital file type(s): 1 ZIP
//         </div>
// </li>
        
        
        
        
        
        
//     </ul>
// </div>
// <div class="wt-mt-xs-2">
    
// </div>
// <div data-id="description-text">
//     <div id="content-toggle-product-details-read-more" class="wt-content-toggle__body wt-content-toggle__body--truncated wt-content-toggle__body--truncated-02" aria-hidden="true" tabindex="-1">
//         <p data-product-details-description-text-content="" class="wt-text-body-01 wt-break-word">
//             Happy Chemicals Poster.
//         </p>
        
//     </div>
//     <div class="wt-text-center-xs">
//         <button type="button" class="wt-content-toggle--btn wt-btn wt-btn--small wt-btn--transparent" data-wt-content-toggle="" data-read-more-label-closed="Learn more about this item" data-read-more="true" aria-controls="content-toggle-product-details-read-more" data-default-open="false" aria-describedby="">Learn more about this item</button>
//     </div>

// </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
            
//             <div data-appears-component-name="digital_delivery">
// <div id="digital_delivery" class="appears-ready">
//     <div class="wt-content-toggle " data-selector="info-section-content-toggle">
// <button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-content-toggle--btn wt-content-toggle--with-icon wt-width-full wt-content-toggle--flush" data-wt-content-toggle="true" data-animate="true" data-default-open="true" aria-controls="digital_delivery_content_toggle" aria-expanded="true">
//                 <span class="wt-flex-xs-auto wt-width-full wt-text-title">
//                 <h2>
//                     Delivery
//                 </h2>
//             </span>
//             <span class="wt-content-toggle--btn__icon"></span>

// </button>

//         <div id="digital_delivery_content_toggle" class="wt-content-toggle__body" aria-hidden="false">
//             <div class="wt-mb-xs-6">
//                 <div id="digital-download-delivery-div" class="wt-grid wt-mb-xs-5">
//     <div class="wt-grid__item-xs-12">
//             <p class="wt-text-title-large wt-mt-xs-1 wt-mb-xs-3 wt-line-height-tight">Instant Download</p>
//             <p class="wt-text-body wt-mb-xs-3">
//                 Your files will be available to download once payment is confirmed.&nbsp;
//                 <a href="https://www.etsy.com/help/article/3949" target="_blank" data-listings-track-click="" data-event-name="digital_download_delivery_link_clicked">
//                     Here's how.
//                 </a>
//             </p>
//             <p class="wt-text-body">Instant download items don’t accept returns, exchanges or cancellations. Please contact the seller about any problems with your order.</p>



//     </div>
    
// </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
//             <div data-appears-component-name="did_you_know_toggle">
// <div id="did_you_know_toggle" class="appears-ready">
//     <div class="wt-content-toggle " data-selector="info-section-content-toggle">
// <button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-content-toggle--btn wt-content-toggle--with-icon wt-width-full wt-content-toggle--flush" data-wt-content-toggle="true" data-animate="true" data-default-open="true" aria-controls="did_you_know_toggle_content_toggle" aria-expanded="true">
//                 <span class="wt-flex-xs-auto wt-width-full wt-text-title">
//                 <h2>
//                     Did you know?
//                 </h2>
//             </span>
//             <span class="wt-content-toggle--btn__icon"></span>

// </button>

//         <div id="did_you_know_toggle_content_toggle" class="wt-content-toggle__body" aria-hidden="false">
//             <div class="wt-mb-xs-6">
//                 <div class="wt-mt-xs-1 wt-mb-xs-3">
//     <div class="wt-grid__item-xs-12
//         wt-mt-xs-4 wt-mt-md-2 wt-mb-xs-6 wt-mb-md-0
//     ">
//     <div class="wt-display-inline-flex-xs wt-align-items-center">
//         <div class="wt-mr-xs-2 is-in-view" data-add-class-when-in-view="is-in-view">
//             <span class="inline-svg">
                
//   </span>
//         </div>
//         <p class="wt-sem-text-primary wt-text-caption">
//             <strong>Etsy Purchase Protection</strong>
//             <br />
//             Shop confidently on Etsy knowing if something goes wrong with an order, we've got your back for all eligible purchases —
//             <a href="https://www.etsy.com/etsy-purchase-protection" target="_blank" class="wt-text-link">
//                 see program terms
//             </a>
//         </p>
//     </div>    
// </div>
// </div>



// <button data-clg-id="WtButton" class="wt-btn wt-btn--secondary wt-btn--transparent-flush-left wt-btn--small wt-width-full" data-overlay-trigger="true" aria-controls="policies-overlay">
//         View additional shop policies 

// </button>

// <div class="js-promotion-description ">
    
// </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>

//         <div data-appears-component-name="faqs">
// <div id="faqs" class="appears-ready">
//     <div class="wt-content-toggle " data-selector="info-section-content-toggle">
// <button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-content-toggle--btn wt-content-toggle--with-icon wt-width-full wt-content-toggle--flush" data-wt-content-toggle="true" data-animate="true" aria-controls="faqs_content_toggle" aria-expanded="false">
//                 <span class="wt-flex-xs-auto wt-width-full wt-text-title">
//                 <h2>
//                     FAQs
//                 </h2>
//             </span>
//             <span class="wt-content-toggle--btn__icon"></span>

// </button>

//         <div id="faqs_content_toggle" class="wt-content-toggle__body" aria-hidden="true" tabindex="-1">
//             <div class="wt-mb-xs-6">
//                 <div class="shop-faqs-container" data-faqs-container="">
    
//         <div data-faq-id="1232400559799" class="wt-ml-xs-2 wt-nudge-r-3">
//             <button id="faq-0" class="wt-content-toggle--btn
//                         wt-btn
//                         wt-content-toggle--with-icon
//                         wt-btn--transparent
//                         shop-faq-accordion
//                         wt-width-full
//                         wt-content-toggle--flush
//                         wt-mb-xs-2
//                         wt-btn--small" data-wt-content-toggle="" aria-controls="faq-content-0" aria-expanded="false">
//                 <span class="wt-sem-text-primary wt-flex-xs-auto wt-width-full" data-region="faq-question-text">
//                     How do I download my files?
//                 </span>
//                 <span class="wt-content-toggle--btn__icon"></span>
//             </button>
//             <div id="faq-content-0" class="wt-content-toggle__body" aria-labelledby="faq-0" aria-hidden="true" role="contentinfo" tabindex="-1">
//                 <p class="wt-mb-xs-2 wt-text-caption" data-region="faq-answer-text">
//                     1. Navigate to You &gt; Purchases and Reviews on Etsy.<br />
// 2. Locate your order and click the "Download Files" button on the right.<br />
// 3. Save the files to your computer by selecting "Download."<br />
// <br />
// If you made a purchase as a guest, Etsy will automatically send you download links for the printable resources.
//                 </p>
//             </div>
//         </div>
//         <div data-faq-id="1232400799465" class="wt-ml-xs-2 wt-nudge-r-3">
//             <button id="faq-1" class="wt-content-toggle--btn
//                         wt-btn
//                         wt-content-toggle--with-icon
//                         wt-btn--transparent
//                         shop-faq-accordion
//                         wt-width-full
//                         wt-content-toggle--flush
//                         wt-mb-xs-2
//                         wt-btn--small" data-wt-content-toggle="" aria-controls="faq-content-1" aria-expanded="false">
//                 <span class="wt-sem-text-primary wt-flex-xs-auto wt-width-full" data-region="faq-question-text">
//                     Do you accept personalized requests?
//                 </span>
//                 <span class="wt-content-toggle--btn__icon"></span>
//             </button>
//             <div id="faq-content-1" class="wt-content-toggle__body" aria-labelledby="faq-1" aria-hidden="true" role="contentinfo" tabindex="-1">
//                 <p class="wt-mb-xs-2 wt-text-caption" data-region="faq-answer-text">
//                     Regrettably, at this time, I am not taking custom orders. Etsy is not my main focus, and due to time constraints, I'm unable to accommodate individual requests.
//                 </p>
//             </div>
//         </div>
//         <div data-faq-id="1232420772926" class="wt-ml-xs-2 wt-nudge-r-3">
//             <button id="faq-2" class="wt-content-toggle--btn
//                         wt-btn
//                         wt-content-toggle--with-icon
//                         wt-btn--transparent
//                         shop-faq-accordion
//                         wt-width-full
//                         wt-content-toggle--flush
//                         wt-mb-xs-2
//                         wt-btn--small" data-wt-content-toggle="" aria-controls="faq-content-2" aria-expanded="false">
//                 <span class="wt-sem-text-primary wt-flex-xs-auto wt-width-full" data-region="faq-question-text">
//                     Is it permissible to sell printed posters?
//                 </span>
//                 <span class="wt-content-toggle--btn__icon"></span>
//             </button>
//             <div id="faq-content-2" class="wt-content-toggle__body" aria-labelledby="faq-2" aria-hidden="true" role="contentinfo" tabindex="-1">
//                 <p class="wt-mb-xs-2 wt-text-caption" data-region="faq-answer-text">
//                     These files are intended for personal use exclusively. Commercial resale of posters and files is not permitted.<br />
// <br />
// Copyright (c) DaysAndColours
//                 </p>
//             </div>
//         </div>
// </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>

//             <div class="wt-mb-xs-3">
//                 <div data-appears-component-name="shop_owners">
// <div id="shop_owners" class="appears-ready">
//     <div class="wt-content-toggle " data-selector="info-section-content-toggle">
// <button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-content-toggle--btn wt-content-toggle--with-icon wt-width-full wt-content-toggle--flush" data-wt-content-toggle="true" data-animate="true" aria-controls="shop_owners_content_toggle" aria-expanded="false">
//                 <span class="wt-flex-xs-auto wt-width-full wt-text-title">
//                 <h2>
//                     Meet your seller
//                 </h2>
//             </span>
//             <span class="wt-content-toggle--btn__icon"></span>

// </button>

//         <div id="shop_owners_content_toggle" class="wt-content-toggle__body" aria-hidden="true" tabindex="-1">
//             <div class="wt-mb-xs-6">
//                 <div class="wt-display-flex-xs wt-align-items-center wt-mb-xs-2">
//     <div class="wt-thumbnail-larger wt-mr-xs-3">
//         <img data-clg-id="WtImage" class="wt-height-full wt-width-full wt-rounded-01 wt-overflow-hidden wt-image--cover wt-image" src="https://i.etsystatic.com/46787910/r/isla/cca372/65309690/isla_75x75.65309690_egwzrzpr.jpg" alt="Marina"  style={{ aspectRatio: "1" }} loading="lazy" sizes="75px" srcset="https://i.etsystatic.com/46787910/r/isla/cca372/65309690/isla_100x100.65309690_egwzrzpr.jpg 100w, https://i.etsystatic.com/46787910/r/isla/cca372/65309690/isla_200x200.65309690_egwzrzpr.jpg 200w" />

//     </div>
//     <div>
//         <p class="wt-text-heading-small wt-line-height-tight wt-mb-lg-1">Marina</p>
//         <p class=" wt-sem-text-primary wt-text-caption">
//             Owner of <a href="https://www.etsy.com/shop/DaysAndColours?ref=l2-about-shopname&amp;from_page=listing" class="wt-text-link">DaysAndColours</a>
//         </p>
//         <div data-follow-shop-region="">
//     <div data-action="follow-shop-button-container" class="wt-display-flex-xs wt-align-items-center">
//         <input type="hidden" class="id" name="user_id" value="833699117" />
//             <a href="https://www.etsy.com/signin?workflow=ZmF2b3JpdGVfdXNlcl9pZDo4MzM2OTkxMTc6MTc2Mjk1MzU4NTo3OTA4ZGYyNzhjN2Q4ZTE4ZTFlYWQwMzY0Njk5OTg3OA%3D%3D&amp;use_follow_text=1&amp;from_page=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1629181619%2Fhappy-chemicals-poster-therapy-office%3Fls%3Dr%26ref%3Drlp-listing-grid-2%26external%3D1%26space_id%3D1368461677904%26pro%3D1%26sts%3D1%26dd%3D1%26content_source%3D2dd9b4ba02a841000d243d2781f9d5d2%25253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb%26logging_key%3D2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb" rel="nofollow" data-downtime-overlay-type="favorite" data-supplemental-state--use_follow_text="true" class="inline-overlay-trigger favorite-shop-action wt-btn wt-btn--small wt-btn--transparent follow-shop-button-listing-header-v3 wt-btn--transparent-flush-left" aria-label="Follow shop" data-action="follow-shop-button" data-shop-id="46787910" data-source-name="listing_header" data-module-name="">
//                 <span class="etsy-icon wt-icon--smaller-xs" data-not-following-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg></span>
//                 <span class="etsy-icon wt-icon--smaller-xs wt-text-brick" data-following-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg></span>
//                         <span data-following-message="" class="wt-ml-xs-1 listing-header-v3-message wt-display-inline-block wt-position-relative">
//                             Following
//                         </span>
//                         <span data-not-following-message="" class="wt-ml-xs-1 listing-header-v3-message wt-display-inline-block wt-position-relative ">
//                             Follow shop
//                         </span>
        
//         </a>
//     </div>
    
// </div>
//     </div>
// </div>
// <a rel="nofollow" href="https://www.etsy.com/messages/new?with_id=833699117&amp;referring_id=1629181619&amp;referring_type=listing&amp;recipient_id=833699117&amp;from_action=contact-seller" class="wt-btn wt-btn--outline wt-width-full contact-action convo-overlay-trigger inline-overlay-trigger" role="button" data-to_username="hs02z3smkvtthxc8" data-to_user_id="833699117" data-to_user_display_name="Marina" data-referring_type="listing" data-referring_id="1629181619" data-subject="" data-message="" aria-label="Message Marina">
    
    
//     <span>Message Marina</span> 
    
    
// </a>
//     <p class="wt-text-caption wt-text-center-xs wt-pt-xs-2 wt-sem-text-secondary">
//         This seller usually responds <b>within a few hours.</b>
//     </p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
//             </div>
//         <div data-appears-component-name="listing_page_seller_details">

// </div>
//     </div>
// </div>

//             <div class="raised-tags-col wt-pl-md-4 wt-pr-md-4 wt-pr-lg-5 wt-pl-lg-5 wt-order-xs-3">
//         <div data-appears-component-name="Listzilla_ApiSpecs_Tags_MultiChannelLanding" data-appears-event-data="{&quot;module_placement&quot;:&quot;lp_queries_external_top&quot;,&quot;datasets&quot;:[&quot;Common_Query_VMEPoweredSSQU2L&quot;],&quot;targets&quot;:[],&quot;logging_class&quot;:&quot;Listzilla_ApiSpecs_Tags_MultiChannelLanding&quot;,&quot;page_listing_id&quot;:1629181619,&quot;mmx_request_uuid_map&quot;:{&quot;7a6c6c6a-7e80-4d0e-9af3-e53b35c3e15c&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},&quot;candidate_source_map&quot;:[],&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;:{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;https:\/\/www.etsy.com\/r\/themes\/1368461677904?anchor_listings=1772270430\u0026ref=hp_themes_module-2&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;3&quot;,&quot;hourOfDay&quot;:&quot;13&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;Common_Query_VMEPoweredSSQU2L&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},&quot;target_listing_id&quot;:1629181619,&quot;refTag&quot;:&quot;lp_queries_external_top&quot;,&quot;queries&quot;:[&quot;Therapy Poster&quot;,&quot;Psychology Poster&quot;,&quot;Mental Health Poster&quot;,&quot;Therapy Wall Art&quot;,&quot;Psychiatry&quot;,&quot;Therapy Office Decor&quot;,&quot;Psychiatry Poster&quot;,&quot;Mental Health Wall Decor&quot;],&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
// <div class="tags-section-container tag-cards-section-container-with-images appears-ready" role="region" id="image-tags" data-appears-component-name="VisualTags">
//     <h2 class="wt-line-height-tight wt-text-heading-small appears-ready">
//         Related searches
//     </h2>

//     <div class="wt-grid wt-mt-xs-3 appears-ready">
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/therapy_poster?ref=lp_queries_external_top-1">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/60823802/r/il/67d011/7226033173/il_75x75.7226033173_r9kk.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/60823802/r/il/67d011/7226033173/il_100x100.7226033173_r9kk.jpg 100w, https://i.etsystatic.com/60823802/r/il/67d011/7226033173/il_200x200.7226033173_r9kk.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Therapy Poster
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/psychology_poster?ref=lp_queries_external_top-2">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/43462962/r/il/9d3230/6998055782/il_75x75.6998055782_b8d3.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/43462962/r/il/9d3230/6998055782/il_100x100.6998055782_b8d3.jpg 100w, https://i.etsystatic.com/43462962/r/il/9d3230/6998055782/il_200x200.6998055782_b8d3.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Psychology Poster
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/mental_health_poster?ref=lp_queries_external_top-3">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/33875645/r/il/9f43b1/6954356432/il_75x75.6954356432_agfc.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/33875645/r/il/9f43b1/6954356432/il_100x100.6954356432_agfc.jpg 100w, https://i.etsystatic.com/33875645/r/il/9f43b1/6954356432/il_200x200.6954356432_agfc.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Mental Health Poster
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/therapy_wall_art?ref=lp_queries_external_top-4">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/43422200/r/il/86a29f/7047515192/il_75x75.7047515192_e9x8.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/43422200/r/il/86a29f/7047515192/il_100x100.7047515192_e9x8.jpg 100w, https://i.etsystatic.com/43422200/r/il/86a29f/7047515192/il_200x200.7047515192_e9x8.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Therapy Wall Art
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/psychiatry?ref=lp_queries_external_top-5">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/16073018/r/il/27f972/7232822132/il_75x75.7232822132_bq69.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/16073018/r/il/27f972/7232822132/il_100x100.7232822132_bq69.jpg 100w, https://i.etsystatic.com/16073018/r/il/27f972/7232822132/il_200x200.7232822132_bq69.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Psychiatry
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/therapy_office_decor?ref=lp_queries_external_top-6">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/9647391/r/il/8f0a3c/6984424220/il_75x75.6984424220_ev99.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/9647391/r/il/8f0a3c/6984424220/il_100x100.6984424220_ev99.jpg 100w, https://i.etsystatic.com/9647391/r/il/8f0a3c/6984424220/il_200x200.6984424220_ev99.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Therapy Office Decor
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 wt-hide-md wt-show-lg">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/psychiatry_poster?ref=lp_queries_external_top-7">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/10609453/r/il/7e7f54/2376597190/il_75x75.2376597190_nvgr.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/10609453/r/il/7e7f54/2376597190/il_100x100.2376597190_nvgr.jpg 100w, https://i.etsystatic.com/10609453/r/il/7e7f54/2376597190/il_200x200.2376597190_nvgr.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Psychiatry Poster
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//             <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 wt-hide-md wt-show-lg">
// <div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
//     <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/mental_health_wall_decor?ref=lp_queries_external_top-8">
//     <span class="wt-screen-reader-only"></span>
// </a>
// <div data-clg-id="WtCardContent" class="wt-card__inner">
//                         <div class="wt-grid wt-flex-nowrap wt-rounded-02">
//                         <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
//                             <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/33875645/r/il/19e32e/7223750860/il_75x75.7223750860_1j2e.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/33875645/r/il/19e32e/7223750860/il_100x100.7223750860_1j2e.jpg 100w, https://i.etsystatic.com/33875645/r/il/19e32e/7223750860/il_200x200.7223750860_1j2e.jpg 200w" />

//                             <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
//                             Mental Health Wall Decor
//                             </p>
//                         </div>
//                     </div>

// </div>
// </div>
//         </div>
//     </div>
// </div>
// </div>
//     </div>
//      </div>
//  </div>
//    </div>
// </div>
//  </main>

// </body>
//     <Footer />
//     </div>
//   );
// };

// export default Single2;
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
const Single2 = () => {

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

  <Header2 />
  

     <body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US USD NG bg-white guest wt-focus-visible" data-language="en-US" data-currency="USD" data-region="NG" data-hover-none="true" data-visual-focus-state="true" data-mobile-viewport-height="true">
 <main id="content">


           <div data-clg-id="WtBanner" class="wt-banner wt-banner--informational-01 trust-suite-banner wt-max-width-full wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-p-xs-3" id="etsywebtoolkitbannerswtbanner6914871a8e928" data-prop-id="etsywebtoolkitbannerswtbanner6914871a8e928" data-prop-type="static" data-prop-style-type="informational-01" data-prop-is-open="true" data-wt-neu-rendered="">
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
<ul data-clg-id="WtList" class="wt-list wt-mb-xs-1 wt-text-body-small" >                            <li>
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
                            <a href="https://www.etsy.com/etsy-purchase-protection"  data-listings-track-click="" data-event-name="trust_suite_banner_purchase_protection_banner_link_clicked" target="_blank">
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
                <div class="wt-popover" id="trust-suite-banner-spo-popover" data-wt-popover="">
                    <button type="button" data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-spo-popover-overlay">
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
                <div class="wt-popover" id="trust-suite-banner-vr-popover" data-wt-popover="">
                    <button type="button" data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-text-link wt-display-inline-flex-xs wt-align-items-center" aria-describedby="trust-suite-banner-vr-popover-overlay">
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

<div data-ui="listing-breadcrumbs" class="wt-hide-xs wt-show-lg breadcrumb_nav">
    <div data-ui="cat-nav" id="desktop-category-nav" class="cat-nav  v2-toolkit-cat-nav wt-ml-xs-0 wt-mr-xs-0">
        <div class="wt-text-caption wt-position-relative wt-z-index-5 wt-pt-xs-2">
                <div class="wt-grid wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-6 wt-pr-lg-6">
                <ul class="wt-list-unstyled wt-grid__item-xs-12 wt-body-max-width wt-display-flex-xs wt-justify-content-center" data-menu-ui="menubar" data-ui="top-nav-category-list">
                        <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
                            <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/?ref=catnav_breadcrumb-home">Homepage</a>
                                <span class="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>
                        </li>
                        <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
                            <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/c/art-and-collectibles?ls=r&amp;ref=catnav_breadcrumb-0&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1">Art &amp; Collectibles</a>
                                <span class="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>
                        </li>
                        <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
                            <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/c/art-and-collectibles/prints?ls=r&amp;ref=catnav_breadcrumb-1&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1">Prints</a>
                                <span class="etsy-icon arrow-separator wt-sem-text-primary wt-icon--smallest-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>
                        </li>
                        <li data-ui="list-item-breadcrumbs" class="top-nav-item wt-sem-text-primary wt-text-body-small--tight wt-pb-xs-2">
                            <a data-breadcrumb-link="" data-menu-ui="menuitem" tabindex="0" href="https://www.etsy.com/c/art-and-collectibles/prints/digital-prints?ls=r&amp;ref=catnav_breadcrumb-2&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1">Digital Prints</a>
                        </li>
                </ul>
                <span class="active-nav-item-indicator wt-position-absolute wt-display-inline-block" data-ui="active-nav-item-indicator"></span>
        </div>
        </div>
    </div>
</div>
  
    {/* <div data-appears-component-name="Listzilla_ApiSpecs_SimilarListingsRow" data-appears-event-data="{&quot;module_placement&quot;:&quot;external_top&quot;,&quot;datasets&quot;:[&quot;organic&quot;],&quot;targets&quot;:[],&quot;logging_class&quot;:&quot;Listzilla_ApiSpecs_SimilarListingsRow&quot;,&quot;page_listing_id&quot;:1629181619,&quot;
    mmx_request_uuid_map&quot;:[],&quot;candidate_source_map&quot;:[],&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;
        :{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;https:\/\/www.etsy.com\/r\/themes\/1368461677904?anchor_listings=1772270430\u0026ref=hp_themes_module-2&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;3&quot;,&quot;hourOfDay&quot;:&quot;13&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;organic&quot;:[0,1,2,3,4,5,6,7,8]},&quot;target_listing_id&quot;:1629181619,&quot;sash_flavor&quot;:&quot;spaces&quot;,&quot;refTag&quot;:&quot;landingpage_similar_listing_top&quot;,&quot;listing_ids&quot;:[1772270430,1254144636,1043229566,557997966,746185432,974826767,1174180936,1650949737,1393678802],&quot;listing_prices_usd&quot;:[29.989999999999998436805981327779591083526611328125,11.03999999999999914734871708787977695465087890625,57.52000000000000312638803734444081783294677734375,36,29.949999999999999289457264239899814128875732421875,49.99000000000000198951966012828052043914794921875,53.9500000000000028421709430404007434844970703125,11.9900000000000002131628207280300557613372802734375,42.2000000000000028421709430404007434844970703125],&quot;taxonomy_ids&quot;:[2350,180,1062,1005,1667,6346,1027,7020,482],&quot;taxo_paths&quot;:[&quot;toys_and_games.games_and_puzzles.dice_and_tile_games.dice&quot;,&quot;bags_and_purses.market_bags&quot;,&quot;home_and_living.kitchen_and_dining.drink_and_barware.drinkware.mugs&quot;,&quot;home_and_living.home_decor.candles_and_home_fragrances.candles.container_candles&quot;,&quot;weddings.gifts_and_mementos.gifts_for_the_couple&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.kits&quot;,&quot;home_and_living.home_decor.wall_decor&quot;,&quot;craft_supplies_and_tools.blanks.hat_and_hair_blanks.hair_clip_blanks&quot;,&quot;clothing.gender_neutral_adult_clothing.tops_and_tees.tshirts&quot;],&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
    

<div class="wt-pt-xs-4 wt-pr-xs-2 wt-pl-xs-2 wt-pr-md-4 wt-pl-md-4 wt-pr-lg-5 wt-pl-lg-5 wt-body-max-width wt-bb-md appears-ready">
    <div data-similar-listings-row="">
  
        <div class="wt-pl-xs-1 wt-display-flex-xs wt-align-items-center wt-justify-content-space-between" data-similar-target-heading="">
            <div class="wt-pr-xs-2 wt-display-flex-xs wt-align-items-baseline wt-break-word wt-flex-xs-6 wt-mb-xs-2">
                <h2 class="wt-text-title-large--tight">
                    Chemistry Essentials
                </h2>
                    
                    
                </div>

                <a class="wt-arrow-link wt-arrow-link--forward wt-mb-xs-3 wt-text-caption" href="https://www.etsy.com/search?ls=r&amp;ref=hp_themes_module-1&amp;external=1&amp;space_id=1368461677904&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=2dd9b4ba02a841000d243d2781f9d5d2%253ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;logging_key=2dd9b4ba02a841000d243d2781f9d5d2%3ALT2b5414eacb64225d919d2a55b4c835af680d0ffb&amp;explicit=1&amp;q=Chemistry+Essentials&amp;anchor_listing_id=1629181619&amp;is_merch_library=1" data-see-more-link="">
                    <span aria-label="See more listings like this">
                    See more
                    </span>
                </a>
            
        
        </div>
            <div class="wt-grid negative-mr-xs">
                <div class="wt-grid__item-xs-12 wt-grid__item-lg-9"><ul class="responsive-listing-grid wt-grid wt-grid--block wt-justify-content-flex-start wt-list-unstyled wt-ml-xs-0 wt-pl-xs-0 wt-mr-xs-0 wt-width-full">
    <div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-2
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="1772270430" data-shop-id="15975158" data-listing-id="1772270430" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="1772270430" data-palette-listing-image="" href="https://www.etsy.com/listing/1772270430/periodic-table-dice-118-element-20-dice?click_key=1eda215a6db1cad0eea27700f773322fc39e83f3%3A1772270430&amp;click_sum=9cb666d9&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-1&amp;cns=1&amp;sts=1" data-listing-link="" target="etsy.1772270430" title="Periodic Table Dice - 118 Element, 20 Dice Full Set">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-1 wt-image--cover wt-image" src="https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_340x270.6235256128_lcnn.jpg" alt="Periodic Table Dice - 118 Element, 20 Dice Full Set"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_170x135.6235256128_lcnn.jpg 170w, https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_340x270.6235256128_lcnn.jpg 340w, https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_680x540.6235256128_lcnn.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-1772270430">
                Periodic Table Dice - 118 Element, 20 Dice Full Set
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                <p class="wt-text-title-01 wt-pr-xs-1">
                    <span class="currency-symbol">USD </span><span class="currency-value">29.99</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                <div class="wt-text-brick lc-half-unit-mt wt-text-caption">
    Only 1 available and it's in <span class="wt-display-inline-block">9 people's carts</span>
</div>
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="1772270430" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-2
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="1254144636" data-shop-id="30394554" data-listing-id="1254144636" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="1254144636" data-palette-listing-image="" href="https://www.etsy.com/listing/1254144636/science-tote-bag-chemistry-gift-physics?click_key=8e4b5513afbc89508e70caf5abaf6e110036a11f%3A1254144636&amp;click_sum=84f025e9&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-2&amp;pro=1&amp;sts=1" data-listing-link="" target="etsy.1254144636" title="Science Tote Bag | Chemistry Gift, Physics Gift | Science Teacher Gift">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-2 wt-image--cover wt-image" src="https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_340x270.4063614491_9ukp.jpg" alt="Science Tote Bag | Chemistry Gift, Physics Gift | Science Teacher Gift"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_170x135.4063614491_9ukp.jpg 170w, https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_340x270.4063614491_9ukp.jpg 340w, https://i.etsystatic.com/30394554/c/1986/1579/602/1375/il/954ff8/4063614491/il_680x540.4063614491_9ukp.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-1254144636">
                Science Tote Bag | Chemistry Gift, Physics Gift | Science Teacher Gift
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                    <p class="
                              
                               wt-text-slime
                              wt-text-title-01 wt-pr-xs-1">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 11.04
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">11.04</span>
                        </span><br />
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-gray
                            ">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">12.99</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 12.99
                            </span>
                            <span class="wt-text-grey wt-no-wrap">
                                
                                
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="1254144636" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-2
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="1043229566" data-shop-id="17179263" data-listing-id="1043229566" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="1043229566" data-palette-listing-image="" href="https://www.etsy.com/listing/1043229566/custom-science-teacher-mug-handmade?click_key=0c7ac0c23647957f26524b733574a0c4dd98eb23%3A1043229566&amp;click_sum=a5b6a35f&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-3&amp;pro=1&amp;sts=1" data-listing-link="" target="etsy.1043229566" title="Custom Science Teacher Mug: Handmade Chemist Coffee Cup">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-3 wt-image--cover wt-image" src="https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_340x270.6240679351_9q60.jpg" alt="Custom Science Teacher Mug: Handmade Chemist Coffee Cup"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_170x135.6240679351_9q60.jpg 170w, https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_340x270.6240679351_9q60.jpg 340w, https://i.etsystatic.com/17179263/c/2019/1603/197/494/il/13f4f4/6240679351/il_680x540.6240679351_9q60.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-1043229566">
                Custom Science Teacher Mug: Handmade Chemist Coffee Cup
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                    <p class="
                              
                               wt-text-slime
                              wt-text-title-01 wt-pr-xs-1">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 57.52
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">57.52</span>
                        </span><br />
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-gray
                            ">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">88.50</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 88.50
                            </span>
                            <span class="wt-text-grey wt-no-wrap">
                                
                                
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="1043229566" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-2
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="557997966" data-shop-id="16104738" data-listing-id="557997966" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="557997966" data-palette-listing-image="" href="https://www.etsy.com/listing/557997966/candle-kit-make-your-own-candles-with?click_key=bc6287c5bff673cb378c8aee463a4ff0427416ac%3A557997966&amp;click_sum=eadaffb4&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-4" data-listing-link="" target="etsy.557997966" title="Candle Kit, Make Your Own Candles with Soy Wax and Essential Oils">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-4 wt-image--cover wt-image" src="https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_340x270.3436796761_69s1.jpg" alt="Candle Kit, Make Your Own Candles with Soy Wax and Essential Oils"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_170x135.3436796761_69s1.jpg 170w, https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_340x270.3436796761_69s1.jpg 340w, https://i.etsystatic.com/16104738/r/il/8320e0/3436796761/il_680x540.3436796761_69s1.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-557997966">
                Candle Kit, Make Your Own Candles with Soy Wax and Essential Oils
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                <p class="wt-text-title-01 wt-pr-xs-1">
                    <span class="currency-symbol">USD </span><span class="currency-value">36.00</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="557997966" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-2
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="746185432" data-shop-id="14509506" data-listing-id="746185432" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="746185432" data-palette-listing-image="" href="https://www.etsy.com/listing/746185432/periodic-table-cutting-board-engraved?click_key=29b0d4be7f331f043896f62cfc3db5465f1872c2%3A746185432&amp;click_sum=a05bdb9c&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-5&amp;cns=1" data-listing-link="" target="etsy.746185432" title="PERIODIC Table CUTTING BOARD, Engraved Cutting Board, Periodic Table of Elements, Teacher Gift, Charcuterie Board">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-5 wt-image--cover wt-image" src="https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_340x270.2073203023_rzul.jpg" alt="PERIODIC Table CUTTING BOARD, Engraved Cutting Board, Periodic Table of Elements, Teacher Gift, Charcuterie Board"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_170x135.2073203023_rzul.jpg 170w, https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_340x270.2073203023_rzul.jpg 340w, https://i.etsystatic.com/14509506/r/il/476865/2073203023/il_680x540.2073203023_rzul.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-746185432">
                PERIODIC Table CUTTING BOARD, Engraved Cutting Board, Periodic Table of Elements, Teacher Gift, Charcuterie Board
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                <p class="wt-text-title-01 wt-pr-xs-1">
                    <span class="currency-symbol">USD </span><span class="currency-value">29.95</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                <div class="wt-text-brick lc-half-unit-mt wt-text-caption">
    Only 1 available and it's in <span class="wt-display-inline-block">2 people's carts</span>
</div>
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="746185432" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-2
                wt-grid__item-lg-2
                wt-grid__item-md-2
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="974826767" data-shop-id="27788297" data-listing-id="974826767" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="974826767" data-palette-listing-image="" href="https://www.etsy.com/listing/974826767/craft-soap-kit-soap-soap-kit-handmade?click_key=f6cc45bc32a1aaef6f5bd45ccc8f7e71ae2b626a%3A974826767&amp;click_sum=3a5ec1ac&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-6" data-listing-link="" target="etsy.974826767" title="Craft Soap Kit, Soap, Soap kit, Handmade Soap, Toy Soap, Hand Craft Soap, Craft Kits, DIY Soap, DIY Soap Kit, Beginner DIY Kit, Gift Soap">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-6 wt-image--cover wt-image" src="https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_340x270.2918589072_qsh3.jpg" alt="Craft Soap Kit, Soap, Soap kit, Handmade Soap, Toy Soap, Hand Craft Soap, Craft Kits, DIY Soap, DIY Soap Kit, Beginner DIY Kit, Gift Soap"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_170x135.2918589072_qsh3.jpg 170w, https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_340x270.2918589072_qsh3.jpg 340w, https://i.etsystatic.com/27788297/r/il/61603f/2918589072/il_680x540.2918589072_qsh3.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-974826767">
                Craft Soap Kit, Soap, Soap kit, Handmade Soap, Toy Soap, Hand Craft Soap, Craft Kits, DIY Soap, DIY Soap Kit, Beginner DIY Kit, Gift Soap
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                <p class="wt-text-title-01 wt-pr-xs-1">
                    <span class="currency-symbol">USD </span><span class="currency-value">49.99</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="974826767" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</ul></div>
                <div class="wt-grid__item-lg-3 wt-show-lg"><ul class="responsive-listing-grid wt-grid wt-grid--block wt-justify-content-flex-start wt-list-unstyled wt-ml-xs-0 wt-pl-xs-0 wt-mr-xs-0 wt-width-full">
    <div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-6
                wt-grid__item-lg-6
                wt-grid__item-md-6
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="1174180936" data-shop-id="7408963" data-listing-id="1174180936" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="1174180936" data-palette-listing-image="" href="https://www.etsy.com/listing/1174180936/wash-periodic-table-wood-sign-bathroom?click_key=fd08c4678307db22b861f4c29b666070058bafa1%3A1174180936&amp;click_sum=1e411490&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-7&amp;sts=1" data-listing-link="" target="etsy.1174180936" title="Wash Periodic Table Wood Sign | Bathroom Decor | Laundry | Industrial Style | 3D | Engraved Signs | Gift Idea | Science | Home Decor | 17x7">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-7 wt-image--cover wt-image" src="https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_340x270.3703966488_3dbb.jpg" alt="Wash Periodic Table Wood Sign | Bathroom Decor | Laundry | Industrial Style | 3D | Engraved Signs | Gift Idea | Science | Home Decor | 17x7"  style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_170x135.3703966488_3dbb.jpg 170w, https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_340x270.3703966488_3dbb.jpg 340w, https://i.etsystatic.com/7408963/c/2100/1400/0/0/il/198715/3703966488/il_680x540.3703966488_3dbb.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-1174180936">
                Wash Periodic Table Wood Sign | Bathroom Decor | Laundry | Industrial Style | 3D | Engraved Signs | Gift Idea | Science | Home Decor | 17x7
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                <p class="wt-text-title-01 wt-pr-xs-1">
                    <span class="currency-symbol">USD </span><span class="currency-value">53.95</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="1174180936" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div><div class="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
           wt-position-relative
                wt-grid__item-xs-3 wt-flex-shrink-xs-1
                wt-grid__item-xl-6
                wt-grid__item-lg-6
                wt-grid__item-md-6
           
listing-card-deemphasized-sash wt-pl-xs-1 wt-pr-xs-1 no-atc-spacing cnc-enhanced-border-radius 
            
            listing-card-experimental-style" data-palette-listing-id="1650949737" data-shop-id="47543410" data-listing-id="1650949737" data-page-type="listing_page_similar_listings_row" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
            
                wt-transparent-card
" data-listing-id="1650949737" data-palette-listing-image="" href="https://www.etsy.com/listing/1650949737/beaker-hair-clip-scientist-stem-chemist?click_key=594d0f8e24ba997d96fdcb9674d1641210b92996%3A1650949737&amp;click_sum=522b6a72&amp;external=1&amp;rec_type=cs&amp;ref=landingpage_similar_listing_top-8&amp;sts=1" data-listing-link="" target="etsy.1650949737" title="Beaker Hair Clip, Scientist, Stem, Chemist, Physicist">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
                        listing-card-rounded-corners
                    ">
                    <div class="placeholder 
             placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                 wt-mb-xs-1 
            
            
                listing-card-rounded-corners
            ">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-landscape wt-rounded-02 wt-overflow-hidden 
                
                
                 listing-card-rounded-corners ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute listing-card-rounded-corners landingpage_similar_listing_top-8 wt-image--cover wt-image" src="https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_340x270.6162776269_p4y9.jpg" alt="Beaker Hair Clip, Scientist, Stem, Chemist, Physicist"  style={{ aspectRatio: "1.25925925926" }} data-listing-card-listing-image="" sizes="(max-width: 479px) 33vw, (max-width: 639px) 25vw, (max-width: 899px) 17vw, 13vw" srcset="https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_170x135.6162776269_p4y9.jpg 170w, https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_340x270.6162776269_p4y9.jpg 340w, https://i.etsystatic.com/47543410/c/1779/1412/0/198/il/92d2b9/6162776269/il_680x540.6162776269_p4y9.jpg 680w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
    
    
    ">
        
    
            <h3 class="wt-text-caption v2-listing-card__title
                wt-text-truncate
                
                 wt-mb-xs-1" id="listing-title-1650949737">
                Beaker Hair Clip, Scientist, Stem, Chemist, Physicist
            </h3>

                    
            
                        
            
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 wt-pr-xs-1
             ">


                <p class="wt-text-title-01 wt-pr-xs-1">
                    <span class="currency-symbol">USD </span><span class="currency-value">11.99</span>
                </p>
</div>
                        
                        
                            
                        
            
                    
                
            



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position--grid
            " data-ui="favorite-listing-button" data-listing-id="1650949737" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing_page_similar_listings_row" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</ul></div>
            </div>
        
    </div>
</div>
    </div> */}


<div data-selector="listing-page-content" class="content-wrap listing-page-content">


   <div class="wt-pt-xs-5 listing-page-content-container-wider wt-horizontal-center">


 <div id="listing-right-column" class="listing-buy-box-experiment">

     <div class="body-wrap wt-body-max-width wt-display-flex-md wt-flex-direction-column-xs">

             <div class="image-col wt-order-xs-1 wt-mb-xs-2 wt-mb-lg-6 wt-pl-md-4 wt-pl-lg-5 wt-pl-xs-2 wt-pr-xs-2 wt-pr-xl-2 wt-pr-md-4 wt-pr-lg-0">
                        <div class="wt-flex-lg-6 wt-mr-lg-3 wt-pr-xl-3">
                            <div class="image-wrapper wt-position-relative carousel-container-responsive" id="photos">
    

        <div data-listing-page-badge="" style={{marginLeft: "78px;"}} class="wt-position-absolute wt-z-index-2 wt-position-top wt-position-left wt-mt-xs-1">
            <div class="wt-popover" data-wt-popover="">
    <button data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-display-inline-flex-xs wt-align-items-center wt-text-caption" aria-disabled="true" aria-describedby="bestseller">

    </button>
    <div id="bestseller" role="tooltip">
        This item has had a high sales volume over the past 6 months.
    <span class="wt-popover__arrow"></span></div>
</div>
        </div>

    
        <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon wt-btn--fixed-floating wt-position-right wt-mr-xs-2 wt-mt-xs-2
            " data-ui="favorite-listing-button" data-listing-id="1629181619" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-always-show="true">
            <div class="favorite-listing-button-icon-container should-animate " data-source="lp_image_carousel" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-text-favorite-heart
                    
                    
                        
                        
                      
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
        
    
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
     {/* Main Image */}
<div
  className="woocommerce-product-gallery__wrapper flex-1"
  style={{
    position: "relative",
    // width: "100%",
    // height: "800px", // <<< MAKE IT VERY BIG
    background: "#f6f6f6",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <img
    src={product.images[currentImageIndex]}
    alt={product.name}
    loading="lazy"
    decoding="async"
    // style={{
    //   width: "100%",
    //   height: "100%",
    //   objectFit: "contain", // <<< Make it BIG but NOT distorted
    // }}
  />
</div>

    </div>
  </div>
) : (
  <p className="text-center text-gray-400 py-8">Loading product...</p>
)}
</div>



                        </div>
                    </div>

                    <div class="cart-col wt-order-xs-2 wt-mb-lg-5">
    <div id="listing-page-cart" class="wt-display-flex-lg wt-flex-direction-column-md wt-flex-lg-3 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2">
            <div class="
            wt-mt-xs-1">
                <p class="wt-text-title-small wt-sem-text-critical">20+ views in the last 24 hours</p>
            </div>
        <div class="wt-display-flex-xs wt-align-items-center wt-flex-wrap">
            <div data-appears-component-name="price">
<div class="wt-display-flex-xs      wt-align-items-baseline          wt-flex-wrap appears-ready" data-selector="price-only" data-buy-box-region="price">
        <p class="wt-text-title-larger wt-mr-xs-1
                    wt-text-black
            ">
        <span class="wt-screen-reader-only">Price:</span>USD 3.25
    </p>
        <p class="wt-text-caption
        ">
            <span class="wt-screen-reader-only">Original Price:</span>
            <span class="wt-text-strikethrough
                
                lp_toffers_v2_original_price wt-nudge-b-1">
                USD 8.12
            </span>
        </p>
    
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" data-buy-box-price-spinner="">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-1 
                wt-display-flex-xs
                ">
                            <div>
    <p class="wt-text-title-small wt-sem-text-monetary-value">
        60% off
    </p>
</div>
                            <span id="discount-and-countdown-separator" class="wt-sem-text-monetary-value wt-mr-xs-1 wt-ml-xs-1">•</span> 
                        <div id="sale-ending-soon-countdown">
    <p class="wt-text-title-small wt-sem-text-monetary-value">
        Limited time sale
    </p>
</div>
                
            </div>
        
        <div data-buy-box-region="vat_messaging">
        <div class="wt-sem-text-secondary wt-text-caption wt-pt-xs-1 wt-pb-xs-1">
            VAT Included
        </div>
</div>
        
        
        
            <div class="wt-mt-xs-1 wt-mb-xs-1">
                <h1 data-buy-box-listing-title="true" tabindex="0" class="wt-line-height-tight wt-break-word wt-text-body">
    Happy Chemicals Poster, Therapy Office Decor, Mental Health Poster, Anxiety Relief, Calming Corner, School Psychology, Digital Download
</h1>
            </div>
        <div class="wt-mb-xs-3">
            <div class="wt-display-inline-flex-xs wt-align-items-center wt-flex-wrap wt-flex-gap-xs-1 lp-shop-header">
    <div class="wt-display-inline-flex-xs wt-align-items-center
        
    ">
        <span class="wt-text-title-small">
        <a href="https://www.etsy.com/shop/DaysAndColours?ref=shop-header-name&amp;listing_id=1629181619&amp;from_page=listing" class="wt-text-link-no-underline wt-sem-text-primary">
            DaysAndColours
        </a>
    </span>
            &nbsp;<div class="wt-popover star-seller-badge-listing-page" data-wt-popover="">
    <button data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline" aria-label="Star Seller" aria-describedby="star-seller-popover">
        <span class="wt-icon wt-icon--smaller-xs wt-icon--core wt-fill-star-seller-dark" alt="star_seller"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg></span>
    </button>
    <div class="wt-p-xs-3" id="star-seller-popover" role="tooltip">
        <p class="wt-mb-xs-1 wt-text-title-01">
            Star Seller
        </p>
        <p class="wt-text-caption">
            Star Sellers have an outstanding track record for providing a great customer experience—they consistently earned 5-star reviews, shipped orders on time, and replied quickly to any messages they received.
        </p>
    <span class="wt-popover__arrow"></span></div>
</div>
    </div>
        <div class="wt-text-link-no-underline review-stars-text-decoration-none">
    <a href="#reviews" data-click-source="review_stars" aria-label="5 out of 5 stars. See reviews."><span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
    <input type="hidden" name="initial-rating" value="4.9711" />
    <input type="hidden" name="rating" value="4.9711" />
    <span class="wt-screen-reader-only">5 out of 5 stars</span>

    <span>
            <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
            <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
            <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
            <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
            <span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
    </span>
</span></a>
</div>
    
</div>
        </div>
        <div class="wt-mb-xs-6 wt-mb-lg-0">
            <div data-buy-box="">
    <div class="wt-mb-xs-3">
        
        
        <div data-appears-component-name="variations">
<div data-selector="listing-page-variations" class="appears-ready">
    
</div>
</div>
        
        
    </div>
    
 
        <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-wrap wt-flex-direction-column-lg wt-flex-gap-xs-2">


            
            

        <div  id="mao-button-disabled-text-div">
            <p class="wt-text-body-body wt-sem-text-secondary wt-text-center-xs">
                You can only make an offer when buying a single item
            </p>
        </div>
        <div data-appears-component-name="add_to_cart_form">
<div class="wt-validation wt-flex-xs-1 appears-ready" data-buy-box-region="add_to_cart_form">
        <form action="/cart/listing.php" method="post" class="add-to-cart-form" data-buy-box-add-to-cart-form="">
            <input type="hidden" name="listing_id" value="1629181619" />
            <input type="hidden" name="ref" value="listing_page" />
            <input type="hidden" name="_nnc" value="3:1762952986:U0Su2AKqiNrzYiW2MEyOogYcUazs:687b293a66a02bf3d94b5b0a16be1a6860111af6f43e95969f9b4f96fc600d09"  />
                <input type="hidden" name="listing_inventory_id" value="19441100920" />
                <input type="hidden" name="shipping_method_id" value="" />
                <input type="hidden" name="quantity" value="1" />
                <input type="hidden" name="_nnc" value="3:1762952986:U0Su2AKqiNrzYiW2MEyOogYcUazs:687b293a66a02bf3d94b5b0a16be1a6860111af6f43e95969f9b4f96fc600d09"  />
            <div class="wt-width-full" data-add-to-cart-button="" data-selector="add-to-cart-button">
<button data-clg-id="WtButton" class="wt-btn wt-btn--filled wt-width-full wt-no-wrap" type="submit">
            <span>Add to cart
        
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive" role="alert">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>


</span></button>
</div>
        </form>
        
        <p class="purchase-accept-terms  wt-mt-xs-2 wt-sem-text-primary wt-text-body-small wt-width-full"></p>
</div>
</div>
    </div>
</div>
            <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-flex-direction-column-lg wt-flex-gap-md-2 wt-flex-gap-lg-0 wt-justify-content-space-between">
                
                
                
            </div>
            
                <div class="wt-mt-xs-3">
                    <div data-appears-component-name="secondary_nudges">
<div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 appears-ready">
        <div class="wt-pr-xs-2 is-in-view" data-add-class-when-in-view="is-in-view">
            <span class="inline-svg wt-display-flex-xs">
                
</span>
        </div>
    <div class="wt-display-flex-xs wt-flex-direction-column-xs">
        
        <p class="wt-text-caption">
            <strong>Star Seller.</strong> This seller consistently earned 5-star reviews, shipped on time, and replied quickly to any messages they received.
        </p>
    </div>
</div>
</div>
                </div>
        </div>
        
    </div>
</div>

<div class="listing-info info-col description-right wt-order-xs-5">
    <div class="wt-flex-lg-3 wt-order-xs-1 wt-order-lg-3 wt-max-width-full wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2">
            <div data-appears-component-name="product_details">
<div id="product_details" class="appears-ready">
    <div class="wt-content-toggle " data-selector="info-section-content-toggle">
<button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-content-toggle--btn wt-content-toggle--with-icon wt-width-full wt-content-toggle--flush" data-wt-content-toggle="true" data-animate="true" data-default-open="true" aria-controls="product_details_content_toggle" aria-expanded="true">
                <span class="wt-flex-xs-auto wt-width-full wt-text-title">
                <h2>
                    Item details
                </h2>
            </span>
            <span class="wt-content-toggle--btn__icon"></span>

</button>

        <div id="product_details_content_toggle" class="wt-content-toggle__body" aria-hidden="false">
            <div class="wt-mb-xs-6">
                <div class="wt-mt-xs-2">
    <h3 class="wt-text-title">Highlights</h3>
    <ul class="wt-block-grid-xs-1 wt-text-body-01 show-icons wt-mt-xs-1 wt-pl-xs-0 wt-mb-xs-3" data-selector="product-details-highlights">
        
        
        
        
        
        
        
        <li class="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
            <div><span class="wt-icon wt-nudge-b-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 12.32a7 7 0 0 0 0-.82A7.5 7.5 0 0 0 8.71 5.73a6.63 6.63 0 0 1 3.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 1 0 7 19h12.5a3.5 3.5 0 0 0 1.5-6.68m-9 5.35-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72z"></path></svg></span></div>
        <div class="wt-ml-xs-1">
                Digital download
        </div>
</li>
        <li class="wt-block-grid__item wt-display-flex-xs wt-align-items-flex-start">
            <div><span class="wt-icon wt-nudge-b-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 2c2.21 0 4 1.79 4 4v10.5c0 3.03-2.47 5.5-5.5 5.5A5.51 5.51 0 0 1 7 16.5V7c0-.55.45-1 1-1s1 .45 1 1v9.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V6c0-1.1-.9-2-2-2s-2 .9-2 2v9.5c0 .28.22.5.5.5s.5-.22.5-.5V7c0-.55.45-1 1-1s1 .45 1 1v8.5a2.5 2.5 0 0 1-5 0V6c0-2.21 1.79-4 4-4"></path></svg></span></div>
        <div class="wt-ml-xs-1">
                Digital file type(s): 1 ZIP
        </div>
</li>
        
        
        
        
        
        
    </ul>
</div>
<div class="wt-mt-xs-2">
    
</div>
<div data-id="description-text">
    <div id="content-toggle-product-details-read-more" class="wt-content-toggle__body wt-content-toggle__body--truncated wt-content-toggle__body--truncated-02" aria-hidden="true" tabindex="-1">
        <p data-product-details-description-text-content="" class="wt-text-body-01 wt-break-word">
            Happy Chemicals Poster.
        </p>
        
    </div>
    <div class="wt-text-center-xs">
        <button type="button" class="wt-content-toggle--btn wt-btn wt-btn--small wt-btn--transparent" data-wt-content-toggle="" data-read-more-label-closed="Learn more about this item" data-read-more="true" aria-controls="content-toggle-product-details-read-more" data-default-open="false" aria-describedby="">Learn more about this item</button>
    </div>

</div>
            </div>
        </div>
    </div>
</div>
</div>


         
        <div data-appears-component-name="listing_page_seller_details">

</div>
    </div>
</div>

            <div class="raised-tags-col wt-pl-md-4 wt-pr-md-4 wt-pr-lg-5 wt-pl-lg-5 wt-order-xs-3">
        <div data-appears-component-name="Listzilla_ApiSpecs_Tags_MultiChannelLanding" data-appears-event-data="{&quot;module_placement&quot;:&quot;lp_queries_external_top&quot;,&quot;datasets&quot;:[&quot;Common_Query_VMEPoweredSSQU2L&quot;],&quot;targets&quot;:[],&quot;logging_class&quot;:&quot;Listzilla_ApiSpecs_Tags_MultiChannelLanding&quot;,&quot;page_listing_id&quot;:1629181619,&quot;mmx_request_uuid_map&quot;:{&quot;7a6c6c6a-7e80-4d0e-9af3-e53b35c3e15c&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},&quot;candidate_source_map&quot;:[],&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;:{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;https:\/\/www.etsy.com\/r\/themes\/1368461677904?anchor_listings=1772270430\u0026ref=hp_themes_module-2&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;3&quot;,&quot;hourOfDay&quot;:&quot;13&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;Common_Query_VMEPoweredSSQU2L&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},&quot;target_listing_id&quot;:1629181619,&quot;refTag&quot;:&quot;lp_queries_external_top&quot;,&quot;queries&quot;:[&quot;Therapy Poster&quot;,&quot;Psychology Poster&quot;,&quot;Mental Health Poster&quot;,&quot;Therapy Wall Art&quot;,&quot;Psychiatry&quot;,&quot;Therapy Office Decor&quot;,&quot;Psychiatry Poster&quot;,&quot;Mental Health Wall Decor&quot;],&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
<div class="tags-section-container tag-cards-section-container-with-images appears-ready" role="region" id="image-tags" data-appears-component-name="VisualTags">
    <h2 class="wt-line-height-tight wt-text-heading-small appears-ready">
        Related searches
    </h2>

    <div class="wt-grid wt-mt-xs-3 appears-ready">
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/therapy_poster?ref=lp_queries_external_top-1">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/60823802/r/il/67d011/7226033173/il_75x75.7226033173_r9kk.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/60823802/r/il/67d011/7226033173/il_100x100.7226033173_r9kk.jpg 100w, https://i.etsystatic.com/60823802/r/il/67d011/7226033173/il_200x200.7226033173_r9kk.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Therapy Poster
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/psychology_poster?ref=lp_queries_external_top-2">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/43462962/r/il/9d3230/6998055782/il_75x75.6998055782_b8d3.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/43462962/r/il/9d3230/6998055782/il_100x100.6998055782_b8d3.jpg 100w, https://i.etsystatic.com/43462962/r/il/9d3230/6998055782/il_200x200.6998055782_b8d3.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Psychology Poster
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/mental_health_poster?ref=lp_queries_external_top-3">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/33875645/r/il/9f43b1/6954356432/il_75x75.6954356432_agfc.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/33875645/r/il/9f43b1/6954356432/il_100x100.6954356432_agfc.jpg 100w, https://i.etsystatic.com/33875645/r/il/9f43b1/6954356432/il_200x200.6954356432_agfc.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Mental Health Poster
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/therapy_wall_art?ref=lp_queries_external_top-4">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/43422200/r/il/86a29f/7047515192/il_75x75.7047515192_e9x8.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/43422200/r/il/86a29f/7047515192/il_100x100.7047515192_e9x8.jpg 100w, https://i.etsystatic.com/43422200/r/il/86a29f/7047515192/il_200x200.7047515192_e9x8.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Therapy Wall Art
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/psychiatry?ref=lp_queries_external_top-5">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/16073018/r/il/27f972/7232822132/il_75x75.7232822132_bq69.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/16073018/r/il/27f972/7232822132/il_100x100.7232822132_bq69.jpg 100w, https://i.etsystatic.com/16073018/r/il/27f972/7232822132/il_200x200.7232822132_bq69.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Psychiatry
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 ">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/therapy_office_decor?ref=lp_queries_external_top-6">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/9647391/r/il/8f0a3c/6984424220/il_75x75.6984424220_ev99.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/9647391/r/il/8f0a3c/6984424220/il_100x100.6984424220_ev99.jpg 100w, https://i.etsystatic.com/9647391/r/il/8f0a3c/6984424220/il_200x200.6984424220_ev99.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Therapy Office Decor
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 wt-hide-md wt-show-lg">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/psychiatry_poster?ref=lp_queries_external_top-7">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/10609453/r/il/7e7f54/2376597190/il_75x75.2376597190_nvgr.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/10609453/r/il/7e7f54/2376597190/il_100x100.2376597190_nvgr.jpg 100w, https://i.etsystatic.com/10609453/r/il/7e7f54/2376597190/il_200x200.2376597190_nvgr.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Psychiatry Poster
                            </p>
                        </div>
                    </div>

</div>
</div>
        </div>
            <div class="wt-mb-xs-2 wt-grid__item-tv-2 wt-grid__item-lg-3 wt-grid__item-md-4 wt-grid__item-tv-3 wt-grid__item-xl-4 wt-grid__item-lg-6 wt-hide-md wt-show-lg">
<div data-clg-id="WtCard" class="wt-card wt-card--contained wt-mr-xs-2 wt-display-block">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/market/mental_health_wall_decor?ref=lp_queries_external_top-8">
    <span class="wt-screen-reader-only"></span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                        <div class="wt-grid wt-flex-nowrap wt-rounded-02">
                        <div class="wt-display-flex-xs wt-flex-gap-xs-2 wt-p-xs-1 wt-pr-xs-2 wt-align-items-center">
                            <img data-clg-id="WtImage" class="wt-rounded-01 visual-search-tags-bubbles__image wt-image--cover wt-image" src="https://i.etsystatic.com/33875645/r/il/19e32e/7223750860/il_75x75.7223750860_1j2e.jpg" alt=""  style={{ aspectRatio: "1" }} sizes="60px" srcset="https://i.etsystatic.com/33875645/r/il/19e32e/7223750860/il_100x100.7223750860_1j2e.jpg 100w, https://i.etsystatic.com/33875645/r/il/19e32e/7223750860/il_200x200.7223750860_1j2e.jpg 200w" />

                            <p class="wt-text-title-small visual-search-tags-bubbles__title wt-text-truncate--multi-line">
                            Mental Health Wall Decor
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
 </div>
   </div>
</div>
 </main>

</body>
    <Footer />
    </div>
  );
};

export default Single2;
