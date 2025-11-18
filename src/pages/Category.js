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


import Header2 from "./Header2";
import PriceFilter from "./PriceFilter";
import ShipsFromFilter from "./ShipsFromFilter";
import SizeFilter from "./SizeFilter";

const Category = () => {

    const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [grandParents, setGrandParents] = useState([]);
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedGrandParent, setSelectedGrandParent] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
    const [priceFilter, setPriceFilter] = useState(null);

  const handlePriceChange = (value) => {
    console.log("Selected price filter:", value);
    // TODO: fetch products using value
  };

    const handleShipsFrom = (country) => {
    console.log("Ships From:", country);
    // TODO: Filter your products by country
  };

useEffect(() => {
  const fetchCategory = async () => {
    try {
      // 🔹 Fetch current category
      const { data: category } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/category/${id}`
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
}, [id]);





useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category/${id}`
      );
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  fetchProducts();
}, [id]);


 const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/brands`
        );
        setBrands(res.data); // ✅ API should return [{ _id, name, image }]
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchBrands();
  }, []);
  return (
    <div>
    <Header2 />
   <body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US USD NG bg-white guest wt-focus-visible" data-language="en-US" data-currency="USD" data-region="NG" data-hover-none="true" data-visual-focus-state="true" data-mobile-viewport-height="true">


     
        <main id="content">
            <div data-async-nlp-modules="" class="wt-pl-md-3 wt-pr-md-3 wt-pb-xs-4 wt-body-max-width">
    
    <div class="wt-display-flex-xs wt-mt-lg-4 wt-mt-xs-3 wt-align-items-baseline wt-justify-content-center">
        <h1 class="wt-text-black wt-text-heading-large">
        {name}
        </h1>
    </div>
    <h2 class="wt-text-body wt-text-black wt-text-center-xs wt-mt-xs-1">
    
        
</h2>
    
    
    <div class="wt-pb-xs-3 wt-pt-xs-3 wt-pt-lg-4">
        <div class="nlp-filters-rail wt-display-flex-xs wt-flex-direction-row ">
    <div data-clg-id="WtPanelAnchoredWithTrigger" id="nlp-price-pill" class="wt-panel-with-trigger wt-pr-xs-2" data-type="enclosing">
        
        <div class="wt-panel__trigger-container">
            
            {/* <button type="button" class="nlp-filter-pill wt-menu__trigger wt-btn wt-btn--small wt-btn--secondary wt-no-wrap top-filter-menu wt-height-full" data-wt-panel-trigger="" aria-expanded="false"><span class="wt-menu__trigger__label wt-text-truncate"><span data-menu-title="">Price</span></span> <span class="etsy-icon wt-menu__trigger__caret wt-icon--smaller top-filters__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></button>
            
             */}
            
            </div></div>
                 <PriceFilter onChange={handlePriceChange} />
    <button data-clg-id="WtButton" class="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2" id="nlp-sale-pill">
            On sale
</button>
    {/* <button data-clg-id="WtButton" class="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2" id="nlp-stash-pill">
            Etsy's Picks

</button> */}
<SizeFilter onChange={(size) => console.log("Selected size:", size)} />

    <div data-clg-id="WtPanelAnchoredWithTrigger" id="nlp-ships-from-pill" class="wt-panel-with-trigger wt-pr-xs-2" data-type="enclosing"><div class="wt-panel__trigger-container">
        
        
        {/* <button type="button" class="nlp-filter-pill wt-menu__trigger wt-btn wt-btn--small wt-btn--secondary wt-no-wrap top-filter-menu wt-height-full" data-wt-panel-trigger="" aria-expanded="false"><span class="wt-menu__trigger__label wt-text-truncate"><span data-menu-title="">Ships fro</span></span> <span class="etsy-icon wt-menu__trigger__caret wt-icon--smaller top-filters__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></button>
         */}
        
             <ShipsFromFilter onChange={handleShipsFrom} />
        </div></div>
    
</div>
    </div>
    <div id="nlp-listing-grid-container">
        <div class="wt-m-xs-0 wt-p-xs-0 wt-overflow-hidden">
    
    <ul class="responsive-listing-grid wt-grid wt-grid--block wt-justify-content-flex-start wt-list-unstyled wt-pl-xs-0">



{/* <li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1029734623" data-shop-id="22148353" data-listing-id="1029734623" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1029734623" data-palette-listing-image="" href="https://www.etsy.com/listing/1029734623/never-miss-a-chance-to-dance-gift-for?click_key=453996adee0323bbb17c068f1f702de1%3ALT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff&amp;click_sum=5ce43c1b&amp;ls=r&amp;ref=rlp-listing-grid-46&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff" data-listing-link="" data-impression-attribution-key="" data-impression-id="1029734623" data-impression-type="listing" data-display-loc="w.1-45" data-index="44" data-logging-key="453996adee0323bbb17c068f1f702de1:LT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff" target="etsy.1029734623" title="Never miss a chance to dance, Gift for Dancer, Dancer gifts, Dance gifts, Dancing wall art, Dance Studio Poster, gifts for her">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-46 wt-image--cover wt-image" src="https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_300x300.3707608055_exer.jpg" alt="Never miss a chance to dance, Gift for Dancer, Dancer gifts, Dance gifts, Dancing wall art, Dance Studio Poster, gifts for her" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_300x300.3707608055_exer.jpg 300w, https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_600x600.3707608055_exer.jpg 600w, https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_800x800.3707608055_exer.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1029734623">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/GRAND_LOVELY_2_dilubw.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1029734623">
                Never miss a chance to dance, Gift for Dancer, Dancer gifts, Dance gifts, Dancing wall art, Dance Studio Poster, gifts for her
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 4.6k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(4.6k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate x1BJkyn3hm wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by GrandandLovelyPrints
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop GrandandLovelyPrints</span>
              <span class="zecufapt1" aria-hidden="true">
                    GrandandLovelyPrints
              </span>
              <span class="zecufapt1 wt-screen-reader-only">From shop GrandandLovelyPrints</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 5.45
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">5.45</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">9.09</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 9.09
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1029734623" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</li>
 */}
{products.map((product) => (
  <li
    key={product._id}
    className="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg"
  >
    <div
      className="js-merch-stash-check-listing v2-listing-card wt-mr-xs-0 search-listing-card--desktop listing-card-experimental-style"
      data-listing-id={product._id}
    >
      <a
        className="listing-link wt-display-inline-block"
        href={`/single-product/${product._id}`}
        title={product.name}
      >
        {/* PRODUCT IMAGE */}
        <div className="v2-listing-card__img wt-position-relative">
          <div className="placeholder placeholder-square" tabIndex="0">
            <div className="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
       <img
  loading="lazy"
  width="300"
  style={{ height: "230px",}}
  height="300"
  src={
    product.images && product.images.length > 0
      ? product.images[0] // first image from array
      : "https://via.placeholder.com/300"
  } />
            </div>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="v2-listing-card__info wt-pt-xs-0">
          <div className="wt-grid wt-align-items-baseline">
            <div className="wt-grid__item-xs-12 wt-grid__item-xl-8">
              <h3 className="wt-text-title-small wt-text-truncate wt-mt-xs-1">
                {product.name}
              </h3>
            </div>
          </div>

          {/* PRICE */}
          <div className="n-listing-card__price wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-text-title-01">
            <p className="wt-text-title-01">
              ₦{product.price}
            </p>
          </div>
        </div>
      </a>
    </div>
  </li>
))}



</ul>
</div>
    </div>

        <div class="wt-display-flex-xs wt-justify-content-center">
            <nav data-clg-id="WtPagination" aria-label="Page results">
    <div class="wt-action-group wt-list-inline wt-flex-no-wrap  wt-mt-xs-4 wt-mb-xs-4">
            <div class="wt-action-group__item-container">
                <a class="wt-action-group__item wt-btn wt-btn--icon  wt-is-disabled" aria-disabled="true" role="link">
                    <span class="wt-screen-reader-only">Previous page</span>
                    <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z"></path>
</svg></span>
                </a>
            </div>



            <div class="wt-action-group__item-container">
                <a class="wt-action-group__item wt-btn wt-btn--icon " href="https://www.etsy.com/r/themes/1368497667979?anchor_listings=1542627936&amp;ref=pagination&amp;page=2" data-page="2">
                    <span class="wt-screen-reader-only">Next page</span>
                    <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path>
</svg></span>
                </a>
            </div>
    </div>
</nav>

        </div>
     
</div>
        </main>
<Footer />
   </body>
   </div>
  );
};

export default Category;
