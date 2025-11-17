import React, {useState, useEffect} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import d2 from "./d2.jpeg"
import d3 from "./d3.jpeg"
const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const Banner2 = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
      const [bestsellers, setBestSellers] = useState([]);
          const [trending, setTrending] = useState([]);
          const [special, setSpecial] = useState([]);
      const [product, setProduct] = useState([]);
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
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/best-sellers`
        );
        setBestSellers(data);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      }
    };

    fetchBestSellers();
  }, []);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/trending`
        );
        setTrending(data);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      }
    };

    fetchTrending();
  }, []);
  useEffect(() => {
    const fetchSpecial = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/special`
        );
        setSpecial(data);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      }
    };

    fetchSpecial();
  }, []);
  // Render submenu
// Only keep children that are categories (ignore products)
const isCategory = (item) => {
  // A category has a 'children' property (array) and no 'price' property
  return item.children && Array.isArray(item.children) && !item.price;
};
useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? `${process.env.REACT_APP_API_URL}/api/db/products`
            : `${process.env.REACT_APP_API_URL}/api/db/products/category/${selectedCategory}`;
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [selectedCategory]);


const renderSubmenu = (category) => {
  if (!category.children || category.children.length === 0) return null;

  const categoryChildren = category.children.filter(isCategory);

  const isGrandparent = categoryChildren.some(
    (child) => child.children && child.children.filter(isCategory).length > 0
  );

 if (!isGrandparent) {
  // Simple vertical dropdown
  return (
    <div
      className={`absolute top-full mt-2 z-50 rounded-md bg-white text-gray-800 shadow-lg
      ${categoryChildren.length > 8 ? "right-0" : "left-0"}`}
    >
      <ul className="px-4 py-2 bg-white min-w-[220px]">
        {categoryChildren.map((child) => (
          <li key={child._id}>
            <a
              href={`/category/${child._id}`}
              className="block px-4 py-2 whitespace-nowrap text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded bg-white"
            >
              {child.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


  // Flex layout for grandparent categories
return (
  <div
    className="absolute left-1/2 top-full -translate-x-1/2 mt-2 z-50 rounded-md bg-white text-gray-800 shadow-lg"
  >
    <ul className="flex justify-between gap-12 px-8 py-6 bg-white">
      {categoryChildren.map((parent) => (
        <li key={parent._id} className="min-w-[150px] bg-white">
          <a
            href={`/category/${parent._id}`}
            className="block font-semibold mb-3 text-gray-900 hover:text-blue-600 bg-white"
          >
            {parent.name}
          </a>
          {parent.children && parent.children.filter(isCategory).length > 0 && (
            <ul className="flex flex-col gap-1 border-t pt-2 bg-white">
              {parent.children
                .filter(isCategory)
                .map((child) => (
                  <li key={child._id}>
                    <a
                      href={`/category/${child._id}`}
                      className="flex items-center gap-2 whitespace-nowrap rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 bg-white"
                    >
                      {child.name}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

};
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

  return (
    <>

  
                  <main id="content">
            <div data-async-homepage-modules="">


<div data-appears-component-name="hp_shoppable_hero" data-appears-event-data="{&quot;image_url&quot;:&quot;https:\/\/i.etsystatic.com\/ij\/6b6698\/7316241243\/ij_fullxfull.7316241243_3bsney2g.jpg?version=0&quot;,&quot;panels&quot;:[{&quot;title&quot;:&quot;Pieces that will start new traditions&quot;,&quot;entry_id&quot;:&quot;4RtraSdenNjYc5UT3RNiFT&quot;}]}">
<div class="wt-grid wt-body-max-width wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3 appears-ready">
    
        <div class="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">
    
        <section class="shoppable-hero shoppable-hero--two-column wt-display-flex-xs " aria-labelledby="shoppable-hero-title">
        <div data-clg-id="WtCard" class="wt-card wt-card--contained shoppable-hero-headline shoppable-hero-headline--xs-portrait wt-display-flex-xs wt-width-full wt-flex-grow-xs-1">
    <a class="wt-card__action-link" href="https://www.etsy.com/featured/hub/holiday?ref=hp_shoppable_hero_primary" aria-label="Gifts that show you care Shop original pieces"></a>
<div class="wt-width-full">
    <div class="shoppable-hero-headline__container  wt-display-flex-xs wt-overflow-hidden wt-height-full" style={{backgroundColor: "#384124"}}>
        <div class="shoppable-hero-headline__content wt-p-xs-4 wt-display-flex-xs wt-flex-direction-column-xs wt-flex-gap-xs-1 wt-align-items-center wt-justify-content-center wt-text-center-xs  wt-text-white">
            <p id="shoppable-hero-title" class="wt-text-display">Wear Your Heritage Proudly</p>
            <p class="wt-text-title-large">
                
            </p>
            <a href="/shop-categories" type="button" class="wt-btn shoppable-hero-headline__content-cta wt-mt-xs-3 wt-btn--primary wt-btn--light ">
                Shop all products
            </a>
        </div>
        <div class="shoppable-hero-headline__image shoppable-hero-headline__image--spotlighted wt-flex-grow-xs-1">
            <img data-clg-id="WtImage" class="wt-height-full wt-object-fit-cover wt-image" src={d2} alt="wooden menorah on top of a gift wrapped in blue paper and a yellow gold ribbon"
			
			 style={{ aspectRatio: "1.25925925926" }} fetchpriority="high" sizes="(max-width: 639px) 100vw, (max-width: 899px) 45vw, (max-width: 1199px) 55vw, 33vw" srcset={d2} />

            <a href="/shop-categories" type="button" class="wt-btn shoppable-hero-headline__image-cta wt-btn--primary wt-btn--light">
                Shop all products
            </a>
        </div>
    </div>
</div>

</div>
        <div class="shoppable-hero-section wt-width-full  wt-show-xl"><div class="shoppable-hero-page wt-flex-grow-xs-1 wt-flex-basis-xs-full">
    <div class="shoppable-hero-page__container wt-height-full">
        <div class="wt-card wt-card--contained shoppable-hero-page__item shoppable-hero-page__item--primary shoppable-hero-page__item--primary-gradient wt-display-flex-xs wt-flex-direction-column-xs wt-position-relative wt-justify-content-flex-end">
            <a class="wt-card__action-link" href="" aria-label="Pieces that will start new traditions Shop now"></a>
            <img data-clg-id="WtImage" class="wt-height-full wt-object-fit-cover shoppable-hero-page__image wt-z-index-negative-1 wt-rounded-02 wt-image" src={d3} alt="Pieces that will start new traditions"  style={{ aspectRatio: "1" }} sizes="400px" srcset={d3} />


                                <div class="wt-position-absolute wt-width-full wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3">
                <p class="wt-text-white wt-text-title-larger">Authentic African Styles for Every Moment</p>
                <span class="wt-text-white wt-text-title">
                    Shop now
                </span>
            </div>
    
        </div>
    </div>
</div></div>
</section>
</div>
</div>
</div>

<div class="hp-spacing-reduced-default">
    
        
</div><div data-appears-component-name="Etsy-Modules-Themes-ThemesIngress-ApiSpec" data-appears-event-data="{&quot;module_placement&quot;:&quot;hp_themes_ingress&quot;,&quot;datasets&quot;:[&quot;Bazaar_Listing_Spaces_V2&quot;],&quot;targets&quot;:[&quot;1368497667979&quot;,&quot;1368461677904&quot;,&quot;1368461671864&quot;,&quot;1368461662588&quot;],&quot;logging_class&quot;:&quot;Etsy\\Modules\\Themes\\ThemesIngress\\ApiSpec&quot;,&quot;page_listing_id&quot;:null,&quot;mmx_request_uuid_map&quot;:[],&quot;candidate_source_map&quot;:[],&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;:{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;directLanding&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;2&quot;,&quot;hourOfDay&quot;:&quot;10&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;Bazaar_Listing_Spaces_V2&quot;:[0,1,2,3]},&quot;space_titles&quot;:[&quot;Dance Essentials&quot;,&quot;Chemistry Essentials&quot;,&quot;Board Games&quot;,&quot;History Essentials&quot;],&quot;has_recent_activity&quot;:false,&quot;space_ids&quot;:[&quot;1368497667979&quot;,&quot;1368461677904&quot;,&quot;1368461671864&quot;,&quot;1368461662588&quot;],&quot;listing_ids&quot;:[1542627936,1772270430,1604375963,1429878747],&quot;refTag&quot;:&quot;hp_themes_ingress&quot;,&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
{/* <section class="wt-body-max-width wt-pr-xs-0 wt-pl-xs-2 wt-pr-md-4 wt-pl-md-4 wt-pr-lg-6 wt-pl-lg-6 appears-ready">
<h2 class="
    wt-text-title-larger 
    wt-text-primary 
    wt-mb-xs-2 wt-mb-lg-3
    ">Featured Product</h2>
    
    <ul class="themes-ingress-carousel wt-block-grid-xs-2 wt-block-grid-md-4 wt-p-xs-0 wt-align-items-flex-start">
            <li class="themes-ingress-card wt-list-unstyled wt-block-grid__item  wt-mr-lg-0 ">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" target="_blank" href="https://www.etsy.com/r/themes/1368497667979?anchor_listings=1542627936&amp;ref=hp_themes_module-1">
    <span class="wt-screen-reader-only">                            Dance Essentials
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                                <img data-clg-id="WtImage" class="themes-ingress-1 wt-height-full wt-object-fit-cover wt-rounded-02 wt-image" src="https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_fullxfull.5244394020_k6cg.jpg" alt="Dance Essentials"  style={{ aspectRatio: "0.8" }} sizes="(max-width: 639px) 50vw, 25vw" srcset="https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_255x340.5244394020_k6cg.jpg 255w, https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_510x680.5244394020_k6cg.jpg 510w, https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_765x1020.5244394020_k6cg.jpg 765w" />

                            <p class="wt-text-title wt-text-center-xs wt-justify-content-center wt-display-flex-xs wt-mt-xs-1 wt-mt-md-2">Dance Essentials</p>
                            <p class="wt-hide-xs wt-show-lg wt-text-body-small wt-text-center-xs wt-mt-xs-1">Freestyle finds</p>

</div>
</div>
            </li>
            <li class="themes-ingress-card wt-list-unstyled wt-block-grid__item  wt-mr-lg-0 ">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" target="_blank" href="https://www.etsy.com/r/themes/1368461677904?anchor_listings=1772270430&amp;ref=hp_themes_module-2">
    <span class="wt-screen-reader-only">                            Chemistry Essentials
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                                <img data-clg-id="WtImage" class="themes-ingress-2 wt-height-full wt-object-fit-cover wt-rounded-02 wt-image" src="https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_fullxfull.6235256128_lcnn.jpg" alt="Chemistry Essentials"  style={{ aspectRatio: "0.8" }} sizes="(max-width: 639px) 50vw, 25vw" srcset="https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_255x340.6235256128_lcnn.jpg 255w, https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_510x680.6235256128_lcnn.jpg 510w, https://i.etsystatic.com/15975158/r/il/771cf4/6235256128/il_765x1020.6235256128_lcnn.jpg 765w" />

                            <p class="wt-text-title wt-text-center-xs wt-justify-content-center wt-display-flex-xs wt-mt-xs-1 wt-mt-md-2">Chemistry Essentials</p>
                            <p class="wt-hide-xs wt-show-lg wt-text-body-small wt-text-center-xs wt-mt-xs-1">Let's nerd out</p>

</div>
</div>
            </li>
            <li class="themes-ingress-card wt-list-unstyled wt-block-grid__item  wt-mr-lg-0 ">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" target="_blank" href="https://www.etsy.com/r/themes/1368461671864?anchor_listings=1604375963&amp;ref=hp_themes_module-3">
    <span class="wt-screen-reader-only">                            Board Games
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                                <img data-clg-id="WtImage" class="themes-ingress-3 wt-height-full wt-object-fit-cover wt-rounded-02 wt-image" src="https://i.etsystatic.com/47720678/r/il/5b4f19/5900597883/il_fullxfull.5900597883_oepn.jpg" alt="Board Games"  style={{ aspectRatio: "0.8" }} sizes="(max-width: 639px) 50vw, 25vw" srcset="https://i.etsystatic.com/47720678/r/il/5b4f19/5900597883/il_255x340.5900597883_oepn.jpg 255w, https://i.etsystatic.com/47720678/r/il/5b4f19/5900597883/il_510x680.5900597883_oepn.jpg 510w, https://i.etsystatic.com/47720678/r/il/5b4f19/5900597883/il_765x1020.5900597883_oepn.jpg 765w" />

                            <p class="wt-text-title wt-text-center-xs wt-justify-content-center wt-display-flex-xs wt-mt-xs-1 wt-mt-md-2">Board Games</p>
                            <p class="wt-hide-xs wt-show-lg wt-text-body-small wt-text-center-xs wt-mt-xs-1">Game night ideas</p>

</div>
</div>
            </li>
            <li class="themes-ingress-card wt-list-unstyled wt-block-grid__item  wt-mr-lg-0 ">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" target="_blank" href="https://www.etsy.com/r/themes/1368461662588?anchor_listings=1429878747&amp;ref=hp_themes_module-4">
    <span class="wt-screen-reader-only">                            History Essentials
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                                <img data-clg-id="WtImage" class="themes-ingress-4 wt-height-full wt-object-fit-cover wt-rounded-02 wt-image" src="https://i.etsystatic.com/31660228/r/il/3d786f/4683710962/il_fullxfull.4683710962_ovcr.jpg" alt="History Essentials"  style={{ aspectRatio: "0.8" }} sizes="(max-width: 639px) 50vw, 25vw" srcset="https://i.etsystatic.com/31660228/r/il/3d786f/4683710962/il_255x340.4683710962_ovcr.jpg 255w, https://i.etsystatic.com/31660228/r/il/3d786f/4683710962/il_510x680.4683710962_ovcr.jpg 510w, https://i.etsystatic.com/31660228/r/il/3d786f/4683710962/il_765x1020.4683710962_ovcr.jpg 765w" />

                            <p class="wt-text-title wt-text-center-xs wt-justify-content-center wt-display-flex-xs wt-mt-xs-1 wt-mt-md-2">History Essentials</p>
                            <p class="wt-hide-xs wt-show-lg wt-text-body-small wt-text-center-xs wt-mt-xs-1">For the buffs</p>

</div>
</div>
            </li>
    </ul>
</section> */}

</div>
{/* <div class="wt-grid wt-body-max-width wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3 appears-ready">
    
        <div class="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">
    
        <div>
    <div class="simple-header wt-pb-xs-2 wt-pb-md-3 wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-justify-content-space-between">
    <div class="header-wrapper ">
            <h2 class="wt-text-title-larger">
                Discover our best of fall 2025
            </h2>
    </div>
        
    
</div>
    <ul class="shop-our-selections-module wt-block-grid-xs-2 wt-block-grid-md-5 wt-p-xs-0">
            <li class="wt-list-unstyled wt-block-grid__item">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/r/curated/best-of-family-traditions?sections=1410717528977&amp;ref=hp_g-1">
    <span class="wt-screen-reader-only">                        Best of Family Traditions
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                            <div class="wt-skeleton-ui--image-square wt-position-relative wt-height-full wt-rounded-02 wt-overflow-hidden">
                            <img class="wt-position-absolute wt-position-top wt-height-full wt-object-fit-cover" loading="lazy" src="https://i.etsystatic.com/ij/17657d/7294307243/ij_300x300.7294307243_oa8ve538.jpg?version=0" alt="" />
                        </div>
                        <p class="wt-text-title wt-mt-xs-1 wt-ml-xs-1 wt-mr-xs-1">Best of Family Traditions</p>
                        

</div>
</div>
            </li>
            <li class="wt-list-unstyled wt-block-grid__item">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/r/curated/fall-hosting-and-decor?sections=1407721696144&amp;ref=hp_g-2">
    <span class="wt-screen-reader-only">                        Fall Hosting Favorites
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                            <div class="wt-skeleton-ui--image-square wt-position-relative wt-height-full wt-rounded-02 wt-overflow-hidden">
                            <img class="wt-position-absolute wt-position-top wt-height-full wt-object-fit-cover" loading="lazy" src="https://i.etsystatic.com/ij/0a5885/7293154157/ij_300x300.7293154157_b63t9qn5.jpg?version=0" alt="" />
                        </div>
                        <p class="wt-text-title wt-mt-xs-1 wt-ml-xs-1 wt-mr-xs-1">Fall Hosting Favorites</p>
                        

</div>
</div>
            </li>
            <li class="wt-list-unstyled wt-block-grid__item">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/r/curated/best-of-cozy-finds?sections=1419863565948%2C1423332183977%2C1423570965718&amp;ref=hp_g-3">
    <span class="wt-screen-reader-only">                        Best of Cozy Finds
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                            <div class="wt-skeleton-ui--image-square wt-position-relative wt-height-full wt-rounded-02 wt-overflow-hidden">
                            <img class="wt-position-absolute wt-position-top wt-height-full wt-object-fit-cover" loading="lazy" src="https://i.etsystatic.com/ij/6e8e5a/7340774456/ij_300x300.7340774456_dhs07n0b.jpg?version=0" alt="" />
                        </div>
                        <p class="wt-text-title wt-mt-xs-1 wt-ml-xs-1 wt-mr-xs-1">Best of Cozy Finds</p>
                        

</div>
</div>
            </li>
            <li class="wt-list-unstyled wt-block-grid__item">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/r/curated/new-arrivals?sections=1412353280132%2C1412667487298&amp;ref=hp_g-4">
    <span class="wt-screen-reader-only">                        New Arrivals
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                            <div class="wt-skeleton-ui--image-square wt-position-relative wt-height-full wt-rounded-02 wt-overflow-hidden">
                            <img class="wt-position-absolute wt-position-top wt-height-full wt-object-fit-cover" loading="lazy" src="https://i.etsystatic.com/ij/5687ba/7358130618/ij_300x300.7358130618_bowyox7g.jpg?version=0" alt="" />
                        </div>
                        <p class="wt-text-title wt-mt-xs-1 wt-ml-xs-1 wt-mr-xs-1">New Arrivals</p>
                        

</div>
</div>
            </li>
            <li class="wt-list-unstyled wt-block-grid__item">
<div data-clg-id="WtCard" class="wt-card wt-card--transparent wt-height-full wt-width-full">
    <a data-clg-id="WtCardAction" class="wt-card__action-link" href="https://www.etsy.com/r/curated/top-100-gifts?sections=1412989769685&amp;ref=hp_g-5">
    <span class="wt-screen-reader-only">                        Top 100 Gifts
</span>
</a>
<div data-clg-id="WtCardContent" class="wt-card__inner">
                            <div class="wt-skeleton-ui--image-square wt-position-relative wt-height-full wt-rounded-02 wt-overflow-hidden">
                            <img class="wt-position-absolute wt-position-top wt-height-full wt-object-fit-cover" loading="lazy" src="https://i.etsystatic.com/ij/fd1258/7342458729/ij_300x300.7342458729_1vslfn44.jpg?version=0" alt="" />
                        </div>
                        <p class="wt-text-title wt-mt-xs-1 wt-ml-xs-1 wt-mr-xs-1">Top 100 Gifts</p>
                        

</div>
</div>
            </li>
    </ul>
</div>
</div>
</div> */}

<div data-appears-component-name="Homepage_Vesta_ApiSpec_DailyDeals" data-appears-event-data="{&quot;module_placement&quot;:&quot;home_daily_deals&quot;,&quot;datasets&quot;:[&quot;Common_Listing_DailyDealsListings&quot;],&quot;targets&quot;:[],&quot;logging_class&quot;:&quot;Homepage_Vesta_ApiSpec_DailyDeals&quot;,&quot;page_listing_id&quot;:null,&quot;mmx_request_uuid_map&quot;:{&quot;72d04706-5cbc-455d-a695-2909641aa8b4&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93]},&quot;candidate_source_map&quot;:{&quot;arizona:daily_deals_listings_migrated&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93]},&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;:{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;directLanding&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;2&quot;,&quot;hourOfDay&quot;:&quot;10&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;Common_Listing_DailyDealsListings&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93]},&quot;region_id&quot;:&quot;NG&quot;,&quot;user_id&quot;:0,&quot;limit&quot;:15,&quot;listing_ids&quot;:[1554579312,1558106140,1778630263,1275026920,1806681962,4333767364,1895313425,1490503424,1660348743,1811620349,1217354784,1639687880,1208309840,1693473321,1092702703,1859896209,1268615771,1579015837,4301825628,4370018901,1683201881,1786839649,887755550,1830883275,1799278658,1772191538,1801449863,1200489887,1806776138,4369183618,1706218238,1760174793,1803755127,1856983733,953599040,1687432605,1753668990,965245133,1754875706,1651487996,1817281685,1559634006,4344786926,1818897311,1813509350,1083414610,1564934453,889071937,1822499711,1021132911,1788449800,1775539641,1810659441,1782789165,768656512,4356479072,1623683213,1609802633,1804638172,1694868202,902970767,1624829479,1788140643,1820266638,1656546341,1480371199,4391684141,1687932493,1669644555,1540119376,4302947751,4356405095,1696621683,1855801765,1873355764,1652021866,1798894213,1337248891,1802967382,4362401182,1227735580,1504687221,1552380871,1420552889,1800616256,1256533541,4295011799,1906432319,1866444395,4378729147,1237647786,1544885822,1800764501,4321329650],&quot;dedupe_taxo_level&quot;:2,&quot;refTag&quot;:&quot;hp_daily_deals&quot;,&quot;listing_prices_usd&quot;:[8.9900000000000002131628207280300557613372802734375,3,14,5.5800000000000000710542735760100185871124267578125,21.980000000000000426325641456060111522674560546875,21,12.3699999999999992184029906638897955417633056640625,16.260000000000001563194018672220408916473388671875,10.7599999999999997868371792719699442386627197265625,13.9700000000000006394884621840901672840118408203125,6.6500000000000003552713678800500929355621337890625,12.3699999999999992184029906638897955417633056640625,5.13999999999999968025576890795491635799407958984375,26.699999999999999289457264239899814128875732421875,42.219999999999998863131622783839702606201171875,26.989999999999998436805981327779591083526611328125,9.03999999999999914734871708787977695465087890625,15.46000000000000085265128291212022304534912109375,9.0099999999999997868371792719699442386627197265625,6.82000000000000028421709430404007434844970703125,16.82000000000000028421709430404007434844970703125,18.989999999999998436805981327779591083526611328125,16.5,17.32000000000000028421709430404007434844970703125,24.39999999999999857891452847979962825775146484375,13.519999999999999573674358543939888477325439453125,29,32.8299999999999982946974341757595539093017578125,13.0600000000000004973799150320701301097869873046875,2,13.730000000000000426325641456060111522674560546875,21,19.89999999999999857891452847979962825775146484375,24.489999999999998436805981327779591083526611328125,44.93999999999999772626324556767940521240234375,10.2200000000000006394884621840901672840118408203125,10.1199999999999992184029906638897955417633056640625,11.25,39.96000000000000085265128291212022304534912109375,8.589999999999999857891452847979962825775146484375,23.35000000000000142108547152020037174224853515625,14.839999999999999857891452847979962825775146484375,23.14999999999999857891452847979962825775146484375,6.79999999999999982236431605997495353221893310546875,7.5999999999999996447286321199499070644378662109375,8.25,14.78999999999999914734871708787977695465087890625,2,22.160000000000000142108547152020037174224853515625,20.1700000000000017053025658242404460906982421875,36,1.20999999999999996447286321199499070644378662109375,1.4899999999999999911182158029987476766109466552734375,35.50999999999999801048033987171947956085205078125,7.53000000000000024868995751603506505489349365234375,3.9900000000000002131628207280300557613372802734375,17.96000000000000085265128291212022304534912109375,21.6700000000000017053025658242404460906982421875,3.720000000000000195399252334027551114559173583984375,8.589999999999999857891452847979962825775146484375,17.800000000000000710542735760100185871124267578125,22.809999999999998721023075631819665431976318359375,13.0600000000000004973799150320701301097869873046875,11.019999999999999573674358543939888477325439453125,18.370000000000000994759830064140260219573974609375,4.29000000000000003552713678800500929355621337890625,3.4900000000000002131628207280300557613372802734375,1.70999999999999996447286321199499070644378662109375,7.5,11,6.660000000000000142108547152020037174224853515625,16.17999999999999971578290569595992565155029296875,17.10000000000000142108547152020037174224853515625,6.79999999999999982236431605997495353221893310546875,9.949999999999999289457264239899814128875732421875,49.97999999999999687361196265555918216705322265625,9.6899999999999995026200849679298698902130126953125,23.910000000000000142108547152020037174224853515625,25.969999999999998863131622783839702606201171875,35.25,3.70999999999999996447286321199499070644378662109375,16.260000000000001563194018672220408916473388671875,9.17999999999999971578290569595992565155029296875,2.399999999999999911182158029987476766109466552734375,16.3599999999999994315658113919198513031005859375,3.45000000000000017763568394002504646778106689453125,6.79999999999999982236431605997495353221893310546875,26.190000000000001278976924368180334568023681640625,6.79999999999999982236431605997495353221893310546875,28,10.7599999999999997868371792719699442386627197265625,18.60000000000000142108547152020037174224853515625,4.839999999999999857891452847979962825775146484375,13.5],&quot;taxonomy_ids&quot;:[1017,1666,2844,2099,1197,328,175,1666,2078,1229,6343,175,367,347,197,1197,1858,11196,1026,12643,143,6102,1858,6365,12197,1166,2844,2353,6109,1858,1222,1222,12622,1167,1668,2078,1197,2844,2811,6343,1227,1023,469,6343,6343,173,2815,1857,6365,1229,338,1858,1349,6396,322,1671,2385,1226,173,6343,1671,2124,1093,1023,2078,1350,2078,328,326,6665,1668,1857,1020,6343,1029,114,25,326,338,2638,6343,1666,1349,12420,2124,6343,6343,2078,6343,1030,2078,326,6343,2202],&quot;taxo_paths&quot;:[&quot;home_and_living.home_decor.throw_pillows&quot;,&quot;weddings.gifts_and_mementos.bridesmaids_gifts&quot;,&quot;home_and_living.home_decor.wall_decor.wall_hangings.signs&quot;,&quot;books_movies_and_music.music.picks_and_slides.picks&quot;,&quot;jewelry.bracelets.charm_bracelets&quot;,&quot;books_movies_and_music.books.book_accessories&quot;,&quot;bags_and_purses.luggage_and_travel.passport_covers&quot;,&quot;weddings.gifts_and_mementos.bridesmaids_gifts&quot;,&quot;art_and_collectibles.prints.digital_prints&quot;,&quot;jewelry.necklaces.pendant_necklaces&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;bags_and_purses.luggage_and_travel.passport_covers&quot;,&quot;books_movies_and_music.music.musical_instruments.tuning_and_accessories&quot;,&quot;books_movies_and_music.books.literature_and_fiction&quot;,&quot;bags_and_purses.wallets_and_money_clips.wallets&quot;,&quot;jewelry.bracelets.charm_bracelets&quot;,&quot;home_and_living.home_decor.seasonal_decor.stockings&quot;,&quot;clothing.gender_neutral_adult_clothing.pajamas_and_robes.pajamas.sets&quot;,&quot;home_and_living.home_decor.home_accents.vases&quot;,&quot;accessories.aprons&quot;,&quot;bags_and_purses.cosmetic_and_toiletry_storage.cosmetic_bags&quot;,&quot;jewelry.jewelry_storage.jewelry_boxes&quot;,&quot;home_and_living.home_decor.seasonal_decor.stockings&quot;,&quot;craft_supplies_and_tools.stamps_and_seals.stamps&quot;,&quot;electronics_and_accessories.video_games.stands_and_displays&quot;,&quot;home_and_living.storage_and_organization.baskets&quot;,&quot;home_and_living.home_decor.wall_decor.wall_hangings.signs&quot;,&quot;toys_and_games.games_and_puzzles.puzzles.jigsaw_puzzles&quot;,&quot;home_and_living.home_decor.seasonal_decor.christmas_trees&quot;,&quot;home_and_living.home_decor.seasonal_decor.stockings&quot;,&quot;jewelry.necklaces.charm_necklaces&quot;,&quot;jewelry.necklaces.charm_necklaces&quot;,&quot;toys_and_games.games_and_puzzles.puzzles.name_puzzles&quot;,&quot;home_and_living.storage_and_organization.boxes_and_bins&quot;,&quot;weddings.gifts_and_mementos.groomsmen_gifts&quot;,&quot;art_and_collectibles.prints.digital_prints&quot;,&quot;jewelry.bracelets.charm_bracelets&quot;,&quot;home_and_living.home_decor.wall_decor.wall_hangings.signs&quot;,&quot;art_and_collectibles.glass_art.suncatchers&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;jewelry.necklaces.monogram_and_name_necklaces&quot;,&quot;home_and_living.home_decor.seasonal_decor&quot;,&quot;clothing.gender_neutral_adult_clothing.hoodies_and_sweatshirts&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;bags_and_purses.luggage_and_travel.luggage_tags&quot;,&quot;home_and_living.lighting.lamps_shades_and_bases.lamps.table_lamps&quot;,&quot;home_and_living.home_decor.seasonal_decor.ornaments&quot;,&quot;craft_supplies_and_tools.stamps_and_seals.stamps&quot;,&quot;jewelry.necklaces.pendant_necklaces&quot;,&quot;books_movies_and_music.books.childrens_books&quot;,&quot;home_and_living.home_decor.seasonal_decor.stockings&quot;,&quot;paper_and_party_supplies.party_supplies.party_favors_and_games.party_favors&quot;,&quot;craft_supplies_and_tools.tools_and_equipment.tools&quot;,&quot;bath_and_beauty.spa_and_relaxation.spa_kits_and_gifts&quot;,&quot;weddings.gifts_and_mementos.wedding_favors&quot;,&quot;toys_and_games.games_and_puzzles.card_games.trading_card_games&quot;,&quot;jewelry.necklaces.lockets&quot;,&quot;bags_and_purses.luggage_and_travel.luggage_tags&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;weddings.gifts_and_mementos.wedding_favors&quot;,&quot;clothing.gender_neutral_kids_clothing.gender_neutral_baby_clothing.bodysuits&quot;,&quot;home_and_living.lighting.light_fixtures.wall_lights.night_lights&quot;,&quot;home_and_living.home_decor.seasonal_decor&quot;,&quot;art_and_collectibles.prints.digital_prints&quot;,&quot;paper_and_party_supplies.party_supplies.party_favors_and_games.party_games&quot;,&quot;art_and_collectibles.prints.digital_prints&quot;,&quot;books_movies_and_music.books.book_accessories&quot;,&quot;books_movies_and_music.books.blank_books.journals_and_notebooks&quot;,&quot;craft_supplies_and_tools.stamps_and_seals.seals.wax_seals&quot;,&quot;weddings.gifts_and_mementos.groomsmen_gifts&quot;,&quot;home_and_living.home_decor.seasonal_decor.ornaments&quot;,&quot;home_and_living.home_decor.flower_arrangements&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;home_and_living.home_decor.wall_decor.wall_hangings&quot;,&quot;art_and_collectibles.painting.watercolor&quot;,&quot;accessories.hats_and_head_coverings.hats_and_caps&quot;,&quot;books_movies_and_music.books.blank_books.journals_and_notebooks&quot;,&quot;books_movies_and_music.books.childrens_books&quot;,&quot;pet_supplies.urns_and_memorials.pet_portraits&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;weddings.gifts_and_mementos.bridesmaids_gifts&quot;,&quot;paper_and_party_supplies.party_supplies.party_favors_and_games.party_favors&quot;,&quot;electronics_and_accessories.car_parts_and_accessories.car_accessories.car_charms&quot;,&quot;clothing.gender_neutral_kids_clothing.gender_neutral_baby_clothing.bodysuits&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;art_and_collectibles.prints.digital_prints&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;home_and_living.home_decor.wreaths_and_door_hangers&quot;,&quot;art_and_collectibles.prints.digital_prints&quot;,&quot;books_movies_and_music.books.blank_books.journals_and_notebooks&quot;,&quot;craft_supplies_and_tools.patterns_and_how_to.patterns_and_blueprints&quot;,&quot;clothing.gender_neutral_adult_clothing.hoodies_and_sweatshirts.sweatshirts&quot;],&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
<section class="wt-body-max-width wt-pr-xs-0 wt-pl-xs-2 wt-pr-md-4 wt-pl-md-4 wt-pr-lg-6 wt-pl-lg-6 daily-deals-carousel   daily-deals-carousel--initialized appears-ready">
        <div class="wt-display-flex-xs wt-justify-content-space-between wt-align-items-flex-end wt-mb-xs-3">
            <div class="wt-display-flex-xs">
                <h2 class="wt-text-title-larger wt-text-primary daily-deals-carousel__label wt-mr-xs-2" id="daily-deals-y5d7ubb0qdg">
                    Today's Popular Products
                </h2>
                {/* <div class="daily-deals-countdown-clock-container wt-display-flex-xs wt-align-items-center wt-text-body wt-text-gray">
    <span class="etsy-icon wt-icon--small-xs wt-mr-xs-1"><svg xmlns="http://www.w3.org/2000/svg" class="spinnable-clock-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" stroke="#595959" stroke-width="2"></circle>
    <line class="big-hand" x1="12" y1="6.5" x2="12" y2="12" stroke="#595959" stroke-width="2" stroke-linecap="round"></line> 
    <line class="small-hand" x1="12" y1="12" x2="16.5" y2="12" stroke="#595959" stroke-width="2" stroke-linecap="round"></line> 
</svg></span> <div class="daily-deals-countdown-clock">Fresh deals in 05:38:14</div>
</div> */}
            </div>
            <div class="daily-deals-carousel__arrows">
<button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-btn--icon wt-ml-xs-1 wt-shadow-elevation-3" data-daily-deals-prev="1" aria-label="Previous section" disabled="" aria-describedby="daily-deals-y5d7ubb0qdg">
                        <span class="wt-icon wt-nudge-t-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16 21.002a1 1 0 0 1-.664-.253L5.5 12.002l9.841-8.748a1 1 0 0 1 1.328 1.494L8.5 12.002l8.159 7.252A1 1 0 0 1 16 21.002"></path></svg></span>

</button>
<button data-clg-id="WtButton" class="wt-btn wt-btn--transparent wt-btn--icon wt-ml-xs-1 wt-shadow-elevation-3" data-daily-deals-next="1" aria-label="Next section" aria-describedby="daily-deals-y5d7ubb0qdg">
                        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>

</button>
            </div>
        </div>
        <div class="daily-deals-carousel__scrollable wt-position-relative overflow-clip-respect-box-shadow default-module-padding no-tv-up-padding">
            <div class="wt-grid wt-flex-nowrap wt-grid--block daily-deals-carousel__inner wt-pl-xs-3">
        


{trending.map((product) => (
  <div
    key={product._id}
    className="js-merch-stash-check-listing v2-listing-card wt-mb-xs-2
      wt-position-relative wt-mr-xs-0 daily-deal-card daily-deal-card--loud
      disable-img-hover-wt-card wt-rounded-02 wt-b-xs wt-mr-xs-3
      wt-mt-xs-2 listing-card-experimental-style"
  >

    <a className="listing-link wt-display-inline-block">
      
      {/* IMAGE SECTION */}
      <div className="v2-listing-card__img wt-position-relative listing-card-image-no-shadow">
        <div className="placeholder wt-rounded-01 placeholder-square daily-deal-card__placeholder--loud wt-overflow-hidden daily-deal-card__image-margin--loud wt-mb-xs-1">

          <div
            className="placeholder vertically-centered-placeholder placeholder-content placeholder-square daily-deal-card__placeholder--loud wt-overflow-hidden daily-deal-card__image-margin--loud"
            style={{ backgroundColor: "#CCB797" }}
          >
            <div className="height-placeholder">
              <img
                className="wt-width-full wt-height-full wt-display-block wt-position-absolute daily-deal-card__placeholder--loud"
                alt={product.name}
              src={product.images && product.images.length > 0 ? product.images[0] : ""}

                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* INFO SECTION */}
      <div className="v2-listing-card__info wt-pt-xs-0 wt-pr-xs-2">

        <div className="wt-grid wt-align-items-baseline">
          <div className="wt-grid__item-xs-12 wt-grid__item-xl-8 wt-p-xs-0">
             <Link
                              to={`/single-product/${product._id}`}>
            <h3 className="wt-text-caption v2-listing-card__title wt-text-truncate">
              {product.name}
            </h3>
            </Link>
          </div>

          {/* Rating */}
          <div className="wt-grid__item-xs-12 wt-grid__item-xl-4 wt-p-xs-0">
            <div className="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
              <span className="wt-display-flex-xs wt-flex-nowrap wt-align-items-center">
                <span className="wt-text-title-small">
                  {product.rating || 4.8}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* PRICE SECTION */}
        <div className="n-listing-card__price wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-text-title-large lc-price daily-deal-card__price">

          {/* Current Price */}
          <p className="wt-text-slime wt-text-title-large lc-price daily-deal-card__price">
            <span aria-hidden="true">
              <span className="currency-symbol">₦ </span>
              <span className="currency-value">
                {product.price.toLocaleString()}
              </span>
            </span>
          </p>

          {/* Old Price */}
          {product.oldPrice && (
            <p className="wt-text-caption search-collage-promotion-price wt-text-red wt-text-truncate wt-no-wrap">
              <span className="wt-text-strikethrough wt-text-grey">
                ₦ {product.oldPrice.toLocaleString()}
              </span>
              <span className="wt-text-grey">
                <span className="wt-badge wt-nudge-r-1 wt-badge--statusValue wt-badge--small price-discount--larger wt-ml-xs-1">
                  {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% off
                </span>
              </span>
            </p>
          )}

        </div>

      </div>

    </a>
  </div>
))}

            </div>
        </div>
    </section>
</div>

<div class="hp-spacing-reduced-default">
    
        
</div>
<div data-appears-component-name="Homepage_Vesta_ApiSpec_TopInTaxonomy" data-appears-event-data="{&quot;module_placement&quot;:&quot;home_top_in_taxo_categories&quot;,&quot;datasets&quot;:[&quot;Etsy\\Web\\Recsys\\ReactorRecs\\Registry\\Web\\Category\\RivuletTopSearchedTaxos&quot;],&quot;targets&quot;:[],&quot;logging_class&quot;:&quot;Homepage_Vesta_ApiSpec_TopInTaxonomy&quot;,&quot;page_listing_id&quot;:null,&quot;mmx_request_uuid_map&quot;:[],&quot;candidate_source_map&quot;:[],&quot;second_pass_ranker_map&quot;:[],&quot;client_provided_features&quot;:{&quot;browser&quot;:{&quot;acceptLanguage&quot;:&quot;en-US&quot;,&quot;browser&quot;:&quot;Chrome&quot;,&quot;currency&quot;:&quot;USD&quot;,&quot;localeRegion&quot;:&quot;NG&quot;,&quot;operatingSystem&quot;:&quot;macOS&quot;,&quot;platform&quot;:&quot;desktop&quot;,&quot;platformEtsyApp&quot;:&quot;web&quot;,&quot;platformMobileDevice&quot;:&quot;unidentified&quot;,&quot;source&quot;:&quot;directLanding&quot;},&quot;date_time&quot;:{&quot;dayOfWeek&quot;:&quot;2&quot;,&quot;hourOfDay&quot;:&quot;10&quot;},&quot;user&quot;:{&quot;locationLatitude&quot;:null,&quot;locationLongitude&quot;:null,&quot;locationZip&quot;:&quot;unidentified&quot;,&quot;userPreferredLanguage&quot;:&quot;en-US&quot;}},&quot;scores&quot;:[],&quot;datasets_map&quot;:{&quot;Etsy\\Web\\Recsys\\ReactorRecs\\Registry\\Web\\Category\\RivuletTopSearchedTaxos&quot;:[0,1,2,3,4,5]},&quot;taxonomy_ids&quot;:[1229,2844,11371,77,7103,1857],&quot;refTag&quot;:&quot;hp_top_in_taxo_categories&quot;,&quot;queries&quot;:[&quot;pendant necklaces&quot;,&quot;signs&quot;,&quot;prints&quot;,&quot;digital drawings and illustrations&quot;,&quot;party and gifting&quot;,&quot;christmas ornaments&quot;],&quot;rec_event_name&quot;:&quot;recommendations_module&quot;}" class="recs-appears-logger">
<div class="wt-body-max-width wt-pr-xs-0 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3 appears-ready">
    <div class="wt-pr-xs-0 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">
<h2 className="wt-text-title-larger wt-text-black">
  Shop our most-loved categories
</h2>

<div className="updated-category-module wt-pt-xs-2 wt-pt-md-3 wt-pl-xs-1 wt-pb-xs-1 wt-mr-xs-2 wt-mr-md-0">
  <div className="updated-category-module__container wt-display-flex-xs wt-align-items-flex-start wt-block-grid-md-3 wt-block-grid-lg-6">

    {categories.map((cat) => (
      <li
        key={cat._id}
        className="homepage_search_rectangle wt-display-flex-xs wt-block-grid__item wt-mr-xs-2 wt-mr-md-0"
      >
        <div className="updated-category-module__listing wt-rounded-02 wt-card wt-card--transparent">
          <a
            href={`/category/${cat._id}`}
            className="shopping-window-interior"
          >
            <img
              className="wt-horizontal-center query-image-container wt-mb-xs-1 wt-rounded-02 wt-image--cover wt-image"
              src={cat.image}
              alt={cat.name}
              style={{ aspectRatio: "0.8" }}
            />
 <Link
                  to={`/category/${cat._id}`}>
            <p className="wt-text-title wt-sem-text-primary wt-pt-xs-0 wt-pb-xs-1 wt-pl-xs-1 wt-pr-xs-1">
              {cat.icon} {cat.name}
            </p>

            </Link>
          </a>
        </div>
      </li>
    ))}

  </div>
</div>

    </div>
</div>
</div><div class="hp-spacing-reduced-default">
    
        
</div>
<div class="hp-spacing-reduced-default">
    
        
</div>

<div data-appears-component-name="hp_gifting_occasion_container">
  <div className="new-missions-gifting wt-body-max-width wt-pr-xs-0 wt-pl-xs-2 wt-pr-md-4 wt-pl-md-4 wt-pr-lg-6 wt-pl-lg-6 appears-ready">
    
    {/* SECTION HEADER */}
    <div className="wt-pb-xs-3">
      <div className="new-missions-gifting__hero_section wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-xl wt-flex-gap-xs-3">
        
        <div className="wt-flex-xs-1 wt-flex-gap-xl-3 wt-display-flex-xs wt-align-items-center wt-flex-direction-row-xs wt-flex-direction-column-xl">
          <h2 className="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-grow-xs-1 wt-flex-grow-xl-0">
            <p className="wt-text-title-larger wt-show-md">Rayofaa Special Christmas Sales</p>
            <p className="wt-text-title-large wt-show-xs">Rayofaa Special Christmas Sales</p>
          </h2>

          <a
            href="#"
            className="wt-btn wt-btn--tertiary wt-align-self-flex-start"
          >
            Get inspired
          </a>
        </div>

        {/* DYNAMIC PRODUCTS ROW */}
        <div className="wt-flex-xl-3 wt-flex-lg-1">
          <ul className="new-missions-gifting__gift_ideas wt-flex-gap-xs-3 wt-list wt-list-unstyled wt-display-flex-xs wt-align-items-flex-start appears-ready">

            {special.slice(0, 3).map((item) => (
              <li key={item._id} className="wt-flex-xs-1">
 <Link
                  to={`/single-product/${product._id}`}>

                <div className="wt-card wt-card--contained wt-rounded-02 new-missions-gifting__gift_ideas--gradient-bg wt-display-flex-xs wt-flex-direction-column-xs wt-position-relative wt-justify-content-flex-end">
                  
                  <a
                    className="wt-card__action-link"
                    href={`/product/${item._id}`}
                    aria-label={item.name}
                  ></a>

                  <img
                    className="square-category-module__listing wt-horizontal-center query-image-container wt-rounded-02 wt-z-index-negative-1 wt-image--cover wt-image"
                    src={item.images[0]}
                    alt={item.name}
                    style={{ aspectRatio: "1.259259" }}
                  />

                  <div className="wt-position-absolute wt-width-full wt-pl-xs-2 wt-pr-xs-2 wt-pb-xs-2">
                    <p className="wt-text-title wt-sem-text-on-surface-dark balanced-wrap">
                      {item.name}
                    </p>
                  </div>
                </div>
                </Link>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </div>

    {/* PRODUCT GRID BELOW */}
    <div className="wt-pb-md-4 wt-pb-xs-3">
      <div className="consolidated-gifting__listing-picks">
        <div>
          <ul className="wt-block-grid wt-list-unstyled wt-block-grid-xs-2 wt-block-grid-md-4 wt-block-grid-lg-5 wt-block-grid-xl-6">

            {special.map((item) => (
              <li key={item._id} className="wt-block-grid__item">
                <div className="v2-listing-card wt-position-relative wt-rounded-02">
                   <Link
                                    to={`/single-product/${product._id}`}>
                  <a
                    className="listing-link wt-display-inline-block wt-height-full"
                    href={`/product/${item._id}`}
                  >
                    <div className="v2-listing-card__img wt-position-relative wt-height-full">
                      <img
                        className="wt-width-full wt-display-block wt-height-full wt-rounded-02 wt-image--cover wt-image"
                        src={item.images[0]}
                        alt={item.name}
                        style={{ aspectRatio: "1.259259" }}
                      />
                    </div>
                  </a>

                  <p className="listing-card-price-badge wt-pl-xs-1 wt-pr-xs-1 wt-mb-xs-1 wt-sem-text-primary wt-position-absolute wt-position-bottom">
                    <span className="wt-badge wt-badge--default wt-badge--border wt-width-full">
                      <span>₦ {item.price}</span>
                    </span>
                  </p>
</Link>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>

  </div>
</div>



<div class="hp-spacing-reduced-default" data-spacing-for-spec-name="Homepage_Vesta_ApiSpec_DailyDeals" data-spacing-for-spec-id="c8f326da2990ea5137ac795c163837b7">
    
        
</div>

{/* <div data-appears-component-name="hp_editors_picks_primary" data-appears-event-data="{&quot;title&quot;:&quot;Etsy\u2019s Guide to Vintage&quot;}">
<div class="wt-grid wt-body-max-width wt-pl-xs-1 wt-pl-md-2 wt-pl-lg-3 appears-ready">
    
        <div class="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">
    
        <div class="wt-grid primary-editors-picks-grid--refresh wt-width-full" data-hp-editor-picks="">

        <div class="primary-editors-picks-element wt-grid__item-md-6 wt-grid__item-xs-12 wt-display-flex-md wt-flex-direction-column-md wt-justify-content-flex-end wt-text-left-md wt-align-self-center wt-mb-md-3 wt-mb-lg-0 wt-pl-xs-3 wt-pl-lg-7">
            <p class="wt-text-body--tight wt-sem-text-secondary">Editors’ Picks</p>
            <h2 class="primary-editors-picks-title--refresh wt-text-title-larger wt-sem-text-primary wt-mt-xs-1 wt-mb-xs-2 wt-mb-md-1">Etsy’s Guide to Vintage</h2>
            <p class="primary-editors-picks-subtitle--refresh wt-text-body--tight wt-sem-text-primary wt-pb-xs-4">Discover timeless denim, heirloom jewelry, antique decor, and more from small shops.</p>
            <a href="https://www.etsy.com/featured/hub/the-vintage-edit?ref=hp_editors_picks_primary" class="wt-btn wt-btn--tertiary discover-more-button  wt-show-md" title="Shop these unique finds"> Shop these unique finds </a>
        </div>
        <div class="primary-editors-picks-element wt-flex-shrink-xs-0 wt-grid__item-xs-6 wt-grid__item-lg-3 primary-editors-picks-listing--refresh">
    
        <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
wt-position-relative wt-width-full wt-rounded-02 
            
            listing-card-experimental-style" data-palette-listing-id="1403208898" data-shop-id="14364014" data-listing-id="1403208898" data-page-type="homepage_merch_collection" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-block
            
" data-listing-id="1403208898" data-palette-listing-image="" href="https://www.etsy.com/listing/1403208898/set-of-4-stacking-bubble-glasses?click_key=1db3288d39c9b0e9bb3253c01cd6a9f965bee037%3A1403208898&amp;click_sum=fb573d3b&amp;ref=hp_editors_picks_primary-1" data-listing-link="" target="etsy.1403208898" title="Set of 4 Stacking Bubble Glasses">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01 wt-height-full
             placeholder-square wt-rounded-02 wt-overflow-hidden 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square wt-rounded-02 wt-overflow-hidden 
                
                
              "style={{backgroundColor: "#D6D8DD"}}>
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute  wt-rounded-02 listing-card--hp-refresh-2024
         
        
        
        hp_editors_picks_primary-1" alt="Set of 4 Stacking Bubble Glasses" src="https://i.etsystatic.com/14364014/r/il/cade29/4675471079/il_600x600.4675471079_8l2k.jpg" loading="lazy" />


        <p class="listing-card-price-badge wt-animated wt-animated--appear-02 wt-mb-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-max-width-full wt-sem-text-primary wt-text-truncate wt-position-absolute wt-position-bottom wt-z-index-1">
<span data-clg-id="WtBadge" class="wt-badge wt-badge--default wt-badge--border wt-width-full wt-text-truncate">
                                <span><span class="currency-symbol">USD </span><span class="currency-value">24.50</span></span>

</span>
            </p>
            </div>
    </div>
        
</div>
                    
                </div>
        
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1403208898" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="homepage_merch_collection" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</div><div class="primary-editors-picks-element wt-flex-shrink-xs-0 wt-grid__item-xs-6 wt-grid__item-lg-3 primary-editors-picks-listing--refresh">
    
        <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
wt-position-relative wt-width-full wt-rounded-02 
            
            listing-card-experimental-style" data-palette-listing-id="4391746026" data-shop-id="50190921" data-listing-id="4391746026" data-page-type="homepage_merch_collection" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-block
            
" data-listing-id="4391746026" data-palette-listing-image="" href="https://www.etsy.com/listing/4391746026/vintage-coastal-studio-pottery-shell?click_key=4d279c29e40d7fd71bfd0e62f93784678f354a2a%3A4391746026&amp;click_sum=331daa8d&amp;ref=hp_editors_picks_primary-2&amp;sts=1" data-listing-link="" target="etsy.4391746026" title="Vintage Coastal Studio Pottery Shell Sculpture // Cream Toned Ceramic Sea Shell Art Object">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01 wt-height-full
             placeholder-square wt-rounded-02 wt-overflow-hidden 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square wt-rounded-02 wt-overflow-hidden 
                
                
                "style={{backgroundColor: "#E2E5E4"}} >
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute  wt-rounded-02 listing-card--hp-refresh-2024
         
        
        
        hp_editors_picks_primary-2" alt="Vintage Coastal Studio Pottery Shell Sculpture // Cream Toned Ceramic Sea Shell Art Object" src="https://i.etsystatic.com/50190921/c/1678/1678/229/722/il/3e94f1/7363315901/il_600x600.7363315901_7pst.jpg" loading="lazy" />


        <p class="listing-card-price-badge wt-animated wt-animated--appear-02 wt-mb-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-max-width-full wt-sem-text-primary wt-text-truncate wt-position-absolute wt-position-bottom wt-z-index-1">
<span data-clg-id="WtBadge" class="wt-badge wt-badge--default wt-badge--border wt-width-full wt-text-truncate">
                                <span><span class="currency-symbol">USD </span><span class="currency-value">78.00</span></span>

</span>
            </p>
            </div>
    </div>
        
</div>
                    
                </div>
        
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="4391746026" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="homepage_merch_collection" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</div><div class="primary-editors-picks-element wt-flex-shrink-xs-0 wt-grid__item-xs-6 wt-grid__item-lg-3 primary-editors-picks-listing--refresh">
    
        <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
wt-position-relative wt-width-full wt-rounded-02 
            
            listing-card-experimental-style" data-palette-listing-id="4340539349" data-shop-id="23954225" data-listing-id="4340539349" data-page-type="homepage_merch_collection" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-block
            
" data-listing-id="4340539349" data-palette-listing-image="" href="https://www.etsy.com/listing/4340539349/vintage-shell-shaped-sugar-bowl-for?click_key=e3c74848e20bba3bc072ad279dfcfa3e84a07fa5%3A4340539349&amp;click_sum=16c4c7ec&amp;ref=hp_editors_picks_primary-3" data-listing-link="" target="etsy.4340539349" title="Vintage Shell-Shaped Sugar Bowl - For Sugar, Sauces, Butter, or Jam - with Shell-Shaped Spoon - Italy 1960s - elegant Table Decor, Gift Idea">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01 wt-height-full
             placeholder-square wt-rounded-02 wt-overflow-hidden 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square wt-rounded-02 wt-overflow-hidden 
                
                
            "style={{backgroundColor: "#D7D6D5"}} >
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute  wt-rounded-02 listing-card--hp-refresh-2024
         
        
        
        hp_editors_picks_primary-3" alt="Vintage Shell-Shaped Sugar Bowl - For Sugar, Sauces, Butter, or Jam - with Shell-Shaped Spoon - Italy 1960s - elegant Table Decor, Gift Idea" src="https://i.etsystatic.com/23954225/r/il/49c34c/7095837339/il_600x600.7095837339_ledv.jpg" loading="lazy" />


        <p class="listing-card-price-badge wt-animated wt-animated--appear-02 wt-mb-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-max-width-full wt-sem-text-primary wt-text-truncate wt-position-absolute wt-position-bottom wt-z-index-1">
<span data-clg-id="WtBadge" class="wt-badge wt-badge--default wt-badge--border wt-width-full wt-text-truncate">
                                <span class="">
                                <span class="currency-symbol">USD </span><span class="currency-value">279.96</span>
                            </span>
                            <span class="wt-text-strikethrough 
                            wt-text-body--small-tight font-weight-normal ">
                                <span class="currency-symbol">USD </span><span class="currency-value">349.95</span>
                            </span>

</span>
            </p>
            </div>
    </div>
                <div data-clg-id="WtVideoPreview" class="wt-video wt-video--preview wt-display-flex-xs " data-listing-id="4340539349">
            <div class="wt-video__spinner">
                
    <div data-clg-id="WtSpinner" class="wt-spinner wt-spinner--01" aria-live="assertive">
        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>

            </div>

            <video tabindex="-1" muted="" preload="none" class="wt-video__element wt-video__element--hidden" aria-label="Vintage Shell-Shaped Sugar Bowl - For Sugar, Sauces, Butter, or Jam - with Shell-Shaped Spoon - Italy 1960s - elegant Table Decor, Gift Idea">
                    <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_5092_gzceno.mp4" type="video/mp4" />
            </video>

            <div class="wt-video__signal" aria-hidden="false">
                <span class="wt-icon wt-icon--smaller-xs wt-nudge-l-2" data-wt-video-play-signal=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
                
            </div>
        </div>

</div>
                    
                </div>
        
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="4340539349" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="homepage_merch_collection" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</div><div class="primary-editors-picks-element wt-flex-shrink-xs-0 wt-grid__item-xs-6 wt-grid__item-lg-3 primary-editors-picks-listing--refresh">
    
        <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
wt-position-relative wt-width-full wt-rounded-02 
            
            listing-card-experimental-style" data-palette-listing-id="1439547961" data-shop-id="6071918" data-listing-id="1439547961" data-page-type="homepage_merch_collection" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-block
            
" data-listing-id="1439547961" data-palette-listing-image="" href="https://www.etsy.com/listing/1439547961/vintage-john-galliano-handbag?click_key=c9b08835c06c5ade9abe872c33af4c21c37d4d3e%3A1439547961&amp;click_sum=53f3293f&amp;ref=hp_editors_picks_primary-4" data-listing-link="" target="etsy.1439547961" title="vintage John Galliano handbag">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01 wt-height-full
             placeholder-square wt-rounded-02 wt-overflow-hidden 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square wt-rounded-02 wt-overflow-hidden 
                
                
                "style={{backgroundColor: "#7E4B2E"}} >
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute  wt-rounded-02 listing-card--hp-refresh-2024
         
        
        
        hp_editors_picks_primary-4" alt="vintage John Galliano handbag" src="https://i.etsystatic.com/6071918/r/il/2d943f/4725152760/il_600x600.4725152760_441t.jpg" loading="lazy" />


        <p class="listing-card-price-badge wt-animated wt-animated--appear-02 wt-mb-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-max-width-full wt-sem-text-primary wt-text-truncate wt-position-absolute wt-position-bottom wt-z-index-1">
<span data-clg-id="WtBadge" class="wt-badge wt-badge--default wt-badge--border wt-width-full wt-text-truncate">
                                <span><span class="currency-symbol">USD </span><span class="currency-value">540.00</span></span>

</span>
            </p>
            </div>
    </div>
        
</div>
                    
                </div>
        
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1439547961" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="homepage_merch_collection" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</div><div class="primary-editors-picks-element wt-flex-shrink-xs-0 wt-grid__item-xs-6 wt-grid__item-lg-3 primary-editors-picks-listing--refresh">
    
        <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
wt-position-relative wt-width-full wt-rounded-02 
            
            listing-card-experimental-style" data-palette-listing-id="4306194318" data-shop-id="14693778" data-listing-id="4306194318" data-page-type="homepage_merch_collection" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-block
            
" data-listing-id="4306194318" data-palette-listing-image="" href="https://www.etsy.com/listing/4306194318/very-beautiful-vintage-wall-lamp-with?click_key=4e7b3a1549d4b1a4dc2ebc037333c01f854f8339%3A4306194318&amp;click_sum=e271084e&amp;ref=hp_editors_picks_primary-5" data-listing-link="" target="etsy.4306194318" title="Very beautiful vintage wall lamp with fabric shade, 80s">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01 wt-height-full
             placeholder-square wt-rounded-02 wt-overflow-hidden 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square wt-rounded-02 wt-overflow-hidden 
                
                
             "style={{backgroundColor: "#D2CDCE"}}>
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute  wt-rounded-02 listing-card--hp-refresh-2024
         
        
        
        hp_editors_picks_primary-5" alt="Very beautiful vintage wall lamp with fabric shade, 80s" src="https://i.etsystatic.com/14693778/r/il/512c22/6913951165/il_600x600.6913951165_10eq.jpg" loading="lazy" />


        <p class="listing-card-price-badge wt-animated wt-animated--appear-02 wt-mb-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-max-width-full wt-sem-text-primary wt-text-truncate wt-position-absolute wt-position-bottom wt-z-index-1">
<span data-clg-id="WtBadge" class="wt-badge wt-badge--default wt-badge--border wt-width-full wt-text-truncate">
                                <span><span class="currency-symbol">USD </span><span class="currency-value">114.64</span></span>

</span>
            </p>
            </div>
    </div>
        
</div>
                    
                </div>
        
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="4306194318" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="homepage_merch_collection" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</div><div class="primary-editors-picks-element wt-flex-shrink-xs-0 wt-grid__item-xs-6 wt-grid__item-lg-3 primary-editors-picks-listing--refresh">
    
        <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
wt-position-relative wt-width-full wt-rounded-02 
            
            listing-card-experimental-style" data-palette-listing-id="4369520150" data-shop-id="30836518" data-listing-id="4369520150" data-page-type="homepage_merch_collection" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-block
            
" data-listing-id="4369520150" data-palette-listing-image="" href="https://www.etsy.com/listing/4369520150/antique-french-large-terracotta-cheese?click_key=4c4f582c3eda714aed67bd947f1db1b1bd03b628%3A4369520150&amp;click_sum=62504a5a&amp;ref=hp_editors_picks_primary-6&amp;sts=1" data-listing-link="" target="etsy.4369520150" title="Antique French Large Terracotta Cheese Molds or Faisselle: Yellow Glazed Kitchenalia">
            
                <div class="v2-listing-card__img wt-position-relative
                        listing-card-image-no-shadow
">
                    <div class="placeholder  wt-rounded-01 wt-height-full
             placeholder-square wt-rounded-02 wt-overflow-hidden 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square wt-rounded-02 wt-overflow-hidden 
                
                
              "style={{backgroundColor: "#D2CDCE"}}>
            <div class="height-placeholder">
                    <img data-listing-card-listing-image="" class="wt-width-full wt-height-full wt-display-block wt-position-absolute  wt-rounded-02 listing-card--hp-refresh-2024
         
        
        
        hp_editors_picks_primary-6" alt="Antique French Large Terracotta Cheese Molds or Faisselle: Yellow Glazed Kitchenalia" src="https://i.etsystatic.com/30836518/r/il/e6f7dc/7246740815/il_600x600.7246740815_tupe.jpg" loading="lazy" />


        <p class="listing-card-price-badge wt-animated wt-animated--appear-02 wt-mb-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-max-width-full wt-sem-text-primary wt-text-truncate wt-position-absolute wt-position-bottom wt-z-index-1">
<span data-clg-id="WtBadge" class="wt-badge wt-badge--default wt-badge--border wt-width-full wt-text-truncate">
                                <span><span class="currency-symbol">USD </span><span class="currency-value">99.00</span></span>

</span>
            </p>
            </div>
    </div>
        
</div>
                    
                </div>
        
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="4369520150" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites">
            <div class="favorite-listing-button-icon-container should-animate " data-source="homepage_merch_collection" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
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
</div>
        <a href="https://www.etsy.com/featured/hub/the-vintage-edit?ref=hp_editors_picks_primary" class="wt-btn wt-btn--tertiary discover-more-button wt-mt-xs-2 wt-ml-xs-3" title="Shop these unique finds"> Shop these unique finds </a>

    </div>
</div>
</div>
</div> */}


<div data-appears-component-name="hp_shop_our_selections">
<div className="wt-grid wt-body-max-width wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">

  <div className="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">

    <div>
      {/* SECTION HEADER */}
      <div className="simple-header wt-pb-xs-2 wt-pb-md-3 wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-justify-content-space-between">
        <div className="header-wrapper">
          <h2 className="wt-text-title-larger">
            Save now on standout styles
          </h2>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <ul className="shop-our-selections-module wt-block-grid-xs-2 wt-block-grid-md-5 wt-p-xs-0">
        
        {bestsellers.map((item) => (
          <li key={item._id} className="wt-list-unstyled wt-block-grid__item">
            <div className="wt-card wt-card--transparent wt-height-full wt-width-full">
 <Link
                  to={`/single-product/${product._id}`}>
                                  {/* LINK */}
              <a className="wt-card__action-link" >
                <span className="wt-screen-reader-only">
                  {item.name}
                </span>
              </a>
</Link>
              {/* CARD CONTENT */}
              <div className="wt-card__inner">
                <div className="wt-skeleton-ui--image-square wt-position-relative wt-height-full wt-rounded-02 wt-overflow-hidden">
                  
                  <img
                    className="wt-position-absolute wt-position-top wt-height-full wt-object-fit-cover"
                    loading="lazy"
                    src={item.images?.[0]}
                    alt={item.name}
                  />

                </div>

                {/* NAME */}
                <p className="wt-text-title wt-mt-xs-1 wt-ml-xs-1 wt-mr-xs-1">
                  {item.name}
                </p>

                {/* DISCOUNT (IF ANY) */}
                {item.discountPrice ? (
                  <p className="wt-text-title wt-ml-xs-1 wt-mr-xs-1">
                    up to {Math.round(((item.price - item.discountPrice) / item.price) * 100)}% off
                  </p>
                ) : (
                  <p className="wt-text-title wt-ml-xs-1 wt-mr-xs-1">
                    ₦ {item.price.toLocaleString()}
                  </p>
                )}

              </div>
            </div>
          </li>
        ))}

      </ul>

    </div>
  </div>
</div>



</div><div class="hp-spacing-reduced-default">
    
        
</div>
<div class="hp-spacing-reduced-default">
    
        
</div>
<div></div><div data-appears-component-name="Homepage_Vesta_ApiSpec_WhatIsEtsy">
<div class="wt-grid wt-body-max-width appears-ready">
    <div class="wt-grid__item-xs-12">
        <div class="wt-bg-beeswax-tint vesta-hp-full-width-banner wt-position-relative wt-pb-xs-6 wt-overflow-hidden" data-selector="what-is-etsy-container">
            <span class="wt-edge wt-fill-white wt-edge--smaller wt-edge--ratio-none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1400" height="48" viewBox="0 0 1400 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<rect x="0" width="1400" height="24"></rect>
</svg></span><span class="wt-edge wt-fill-white wt-edge--smaller wt-edge--ratio-slice" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1400" height="48" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
<rect x="0" width="1400" height="24"></rect>
</svg></span>
            <div class="wt-text-center-xs wt-body-max-width wt-pb-xs-6 wt-pt-xs-6 wt-pl-xs-5 wt-pr-xs-5 wt-pl-md-10 wt-pr-md-10 wt-pl-lg-9 wt-pr-lg-9">
                <h2 class="wt-text-heading-large wt-mb-xs-1 wt-text-center-xs"> What is Rayofaa? </h2>
                <a class="wt-text-link" href="/about"> Read our wonderfully weird story </a>

                <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-lg wt-pt-xs-6 wt-text-center-xs wt-text-left-lg wt-mb-lg-7 wt-mb-xs-1">
                    <div class="wt-flex-xs-1 wt-mb-xs-5 wt-mb-lg-0">
                        <div data-selector="what-is-etsy-community-impact-container" id="what-is-etsy-community-impact-container">
    <h3 class="wt-text-title-larger wt-mb-xs-3"> A community doing good </h3>

    <p class="wt-text-body-01 wt-display-inline">
        Rayofaa is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.
    </p>

    <div class="wt-popover wt-popover--top wt-display-inline" data-wt-popover="">
        <a data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-align-items-center" aria-describedby="what-is-etsy-community-impact-popover">
            <span class="wt-text-body-01">Here are some of the ways we’re making a positive impact, together.</span>
        </a>

        <div id="what-is-etsy-community-impact-popover" role="tooltip" class="wt-text-left-xs">
            <div data-appears-component-name="impact_message" data-appears-event-data="{&quot;impact_name&quot;:&quot;hp_whatisetsy_community&quot;,&quot;impact_themes&quot;:[&quot;general&quot;],&quot;impact_audiences&quot;:[&quot;buyers&quot;]}">
<ul class="appears-ready"><li>Your purchases on Etsy in 2020 generated nearly $4 billion in income for small businesses.</li>
<li>We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.</li>
<li>We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.</li>
</ul>
</div>
        <span class="wt-popover__arrow"></span></div>
    </div>
</div>
                    </div>
                    <div class="wt-ml-lg-6 wt-mr-lg-6 wt-flex-xs-1 wt-mb-xs-5 wt-mb-lg-0">
                        <h3 class="wt-text-title-larger wt-mb-xs-3"> Support independent creators </h3>
                        <p class="wt-text-body-01"> There’s no Etsy warehouse – just millions of people selling the things they love. We make the
            whole process easy, helping you connect directly with makers to find something extraordinary. </p>
                    </div>
                    <div class="wt-flex-xs-1 wt-mb-xs-5 wt-mb-lg-0">
                        <h3 class="wt-text-title-larger wt-mb-xs-3"> Peace of mind </h3>
                        <p class="wt-text-body-01"> Your privacy is the highest priority of our dedicated team. And if you ever need assistance,
            we are always ready to step in for support. </p>
                    </div>
                </div>
                <div class="wt-text-center-xs">
                    <h4 class="wt-text-title-large"> Have a question? Well, we’ve got some answers. </h4>
                    <a class="wt-mt-xs-2 button wt-btn wt-sem-text-primary wt-btn--outline" href="https://www.etsy.com/help?ref=hp_what_is_etsy_help_center">Go to Help Center</a>
                </div>
            </div>

        </div>
    </div>
</div>
</div><div class="hp-spacing-none">
    
        
</div><div id="google-one-tap-modal-div" class="google-one-tap-modal-div">
</div><div class="hp-spacing-none">
    
        
</div><div class="hp-spacing-none">
    
        
</div><div data-wt-overlay="" id="user-lists-overlay" class="wt-overlay wt-display-none wt-position-fixed wt-position-bottom wt-overlay--has-close-icon collection-list-overlay " role="dialog" aria-hidden="true" aria-modal="false" aria-labelledby="collection-modal-title" data-animations="{ &quot;open&quot;: { &quot;mask&quot;: &quot;wt-animated wt-animated--appear-02&quot;, &quot;content&quot;: &quot;wt-animated wt-animated--appear-02&quot; }, &quot;close&quot;: { &quot;mask&quot;: &quot;wt-animated wt-animated--disappear-02&quot;, &quot;content&quot;: &quot;wt-animated wt-animated--disappear-02&quot; } }">
    <div class="wt-overlay__modal collection-list-overlay-view wt-display-flex-xs wt-pb-xs-0 wt-pb-md-4 " data-overlay-modal="">
        <div data-collection-list="" data-max-characters="50" class="wt-overflow-hidden favorites-modal-collection-list wt-width-full">
    <button class="wt-btn wt-btn--icon wt-btn--tertiary wt-btn--light  wt-overlay__close-icon
        " data-wt-overlay-close="" data-overlay-initial-focus="" aria-label="Close">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg></span>
    </button>
    <div data-collection-list-section="" class="favorites-modal--collection-list-section wt-position-relative wt-flex-direction-column-xs wt-height-full wt-align-items-center">
        <div class="wt-overlay__header wt-display-flex-xs wt-align-items-center wt-justify-content-center ">

            <img src="https://www.etsy.com/images/grey.gif" alt="An image of the listing you can save" class="wt-mr-xs-2 wt-mr-md-3 add-to-list-overlay--img" />

            <h2 class="wt-text-heading" id="collection-modal-title">
                <span data-collections-modal-title="" class="">
                    Add to collection
                </span>
                <span data-registry-modal-title="" class="wt-display-none">
                    Add to registry
                </span>
            </h2>
        </div>
        <div class="collection-list-loading-container" data-spinner-container="">
            <div class="wt-spinner wt-spinner--02">
                <div>Loading</div>
            </div>
        </div>
        <div class="wt-display-none collection-list-loading-container" data-collection-list-fail-state="">
            <div class="wt-vertical-center wt-text-center-xs wt-sem-text-secondary">
                <p>Hmm, something went wrong.</p>
                <p>Try that again.</p>
            </div>
        </div>
        <fieldset class="wt-max-width-full wt-pr-xs-2 wt-overflow-scroll">
            <div class="wt-display-none wt-width-full wt-action-group wt-action-group--image wt-list-inline wt-mb-xs-0" data-collection-list-content="">
                <span class="wt-p-xs-0 wt-width-full wt-mb-xs-2">
                    <input type="checkbox" id="create_new_list" hidden="" />
                    <label role="button" tabindex="0" data-add-list-trigger="" class="add-to-list-overlay-row wt-width-full wt-display-flex-xs wt-align-items-center">
                        <div class="add-list--trigger add-to-list-overlay-row--icon wt-sem-text-on-surface-dark wt-rounded-02 wt-overflow-hidden wt-display-flex-xs wt-justify-content-center wt-align-items-center">
                            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,20,11Z"></path></svg></span>
                        </div>
                        <p class="wt-pl-xs-2 wt-text-title-01">
                            Create new collection
                        </p>
                    </label>
                </span>
                
                
                
            </div>
        </fieldset>
        <div class="wt-overlay__sticky-footer-container wt-bt-xs wt-width-full">
            <div class="wt-overlay__footer wt-justify-content-flex-end wt-pt-md-4">
                <div class="wt-overlay__footer__action">
                    <button type="button" class="wt-btn wt-btn--primary wt-pr-md-7 wt-pl-md-7" data-wt-overlay-close="">Done</button>
                </div>
            </div>
        </div>
    </div>
    <div class="wt-display-none" data-add-collection-section="" data-listing-id="">
        <div data-collection-list-add="">
    <div class="wt-overlay__header">
        <h3 class="wt-text-heading wt-text-center-xs">
            Create new collection
        </h3>
    </div>
    <div class="wt-display-flex-xs wt-flex-direction-row-xs wt-align-items-baseline">
        <div class="wt-validation wt-width-full">
            <label class="wt-label" for="edit-list">Name</label>
            <input data-add-collection-input="" autofocus="" aria-invalid="false" type="text" class="wt-input" id="edit-list" placeholder="Gifts, Home, Wedding, etc." />
            <div class="wt-display-flex-xs wt-justify-content-space-between">
                <div>
                    <div data-duplicated-name-alert="" data-error="duplicate_name" class="wt-validation__message wt-validation__message--is-hidden wt-sem-text-critical">You've already used that name</div>
                    <div data-too-long-alert="" data-error="too_long" class="wt-validation__message wt-validation__message--is-hidden wt-sem-text-critical">
                        Collection name is too long
                    </div>
                </div>
                <p class="wt-text-right-xs wt-sem-text-secondary wt-mt-md-1" data-character-count="">50</p>
            </div>
        </div>
    </div>
    <div class="wt-display-flex-sm wt-flex-direction-column-xs wt-flex-direction-row-md wt-justify-content-space-between wt-mt-xs-1">
            <div class="wt-mb-xs-5 wt-mb-md-0">
                <legend class="wt-text-title-01 wt-mt-xs-1">
                    Set to private?
                </legend>
                <p class="wt-text-body-01 wt-max-width-sm wt-ml-xs-0">
                    Keep collections to yourself or inspire other shoppers! Keep in mind that anyone can view public collections—they may also appear in recommendations and other places.
                    <a href="https://www.etsy.com/legal/privacy/" target="_blank">View Etsy’s Privacy Policy</a></p>
            </div>
            <div>
                    <div id="collection-privacy-control" class="wt-display-flex-md wt-flex-direction-column-xs wt-align-items-center" data-label-yes="Private" data-label-no="Public" data-selector="toggle-switch">
                        <div data-clg-id="WtSwitchInput" class="wt-switch__wrapper" data-wt-props-small="true" data-wt-props-label-text="Set to private?" data-wt-props-label-type="hidden" data-wt-neu-rendered="">
    
    <div class="wt-switch__frame">
        <input type="checkbox" class="wt-switch wt-switch--small" id="wt-switch-691314626a575" />
        <label class="wt-switch__toggle" for="wt-switch-691314626a575">
            <span class="wt-screen-reader-only">
                Set to private? 
            </span>
        </label>
    </div>
    
</div>

                        <div class="wt-display-flex-xs wt-flex-direction-row-reverse-xs wt-align-items-center wt-justify-content-flex-end wt-nudge-t-2">
                            <span data-toggle-private-text="" class="wt-text-body">
                                Public
                            </span>
                            <span class="etsy-icon wt-icon--smaller-xs wt-mr-xs-1 wt-display-none" data-toggle-private-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 13v5h-2v-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.25A.25.25 0 0 1 4.25 9H7.5V6.5a4.5 4.5 0 0 1 9 0V9h3.25a.25.25 0 0 1 .25.25V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM9.5 6.5a2.5 2.5 0 0 1 5 0V9h-5zM8 20a2 2 0 0 1-2-2v-7h12v7a2 2 0 0 1-2 2z"></path></svg></span>
                            <span class="etsy-icon wt-icon--smaller-xs wt-mr-xs-1" data-toggle-public-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2M9 18.883v.528a7.94 7.94 0 0 1-4.94-8.351l3.385 3.385a2.967 2.967 0 0 0 1.649 4.4zM17.5 15q.252 0 .5-.05V15a.99.99 0 0 0 .927.985A8 8 0 0 1 12 20c-.216 0-.427-.016-.639-.032l1.254-2.5-.015.006a2.97 2.97 0 0 0-.08-3.11A2.988 2.988 0 0 0 8 13.78V11h1a1 1 0 0 0 1-1V9a1 1 0 0 0 1-1 1 1 0 1 0 0-2H6.726A7.9 7.9 0 0 1 14 4.263V6a1 1 0 0 0 2 0v-.918a8 8 0 0 1 2 1.649V7h-1a1 1 0 1 0 0 2h2.411q.196.49.326 1H17a2.556 2.556 0 0 0-2 2.5 2.5 2.5 0 0 0 2.5 2.5"></path></svg></span>
                        </div>
                    </div>
            </div>
        </div>
    <div data-collection-list-add-footer="">
        <div class="wt-overlay__footer">
            <div class="wt-overlay__footer__cancel">
                <button type="button" class="wt-btn wt-btn--transparent wt-btn--transparent-flush-left wt-btn--transparent-flush-right" data-overlay-back="">Cancel</button>
            </div>
            <div class="wt-overlay__footer__action">
                <button type="button" class="wt-btn wt-btn--primary" data-add-collection-button="" disabled="true">
                    Create collection
                </button>
            </div>
        </div>
    </div>
</div>
<div class="wt-overlay wt-overlay--alert" id="make-public-list-modal" data-wt-overlay="" aria-hidden="true" role="alertdialog" aria-modal="false">
    <div class="wt-overlay__modal" data-overlay-modal="">
        <div class="wt-overlay__header">
            <h2 class="wt-text-heading wt-text-center-xs">
                Make your collection public?

            </h2>
        </div>
        <div class="wt-display-flex-xs wt-justify-content-space-between">
            <div>
                <p>
                    Public collections can be seen by the public, including other shoppers, and may show up in recommendations and other places.
                </p>
            </div>
        </div>
        <div class="wt-overlay__footer">
            <div class="wt-overlay__footer__cancel">
                <button type="button" data-selector="cancel-make-public-button" class="wt-btn wt-btn--transparent wt-btn--transparent-flush-left wt-btn--transparent-flush-right">Cancel</button>
            </div>
            <div class="wt-overlay__footer__action">
                <button type="button" data-selector="make-public-button" class="wt-btn wt-btn--primary">Make Public</button>
            </div>
        </div>
    </div>
</div>
    </div>
</div>
    </div>
</div><div class="hp-spacing-none">
    
        
</div><div class="hp-spacing-none">
    
        
</div>
</div>
        </main>     
    
    
    
    
    </>
  );
};

export default Banner2;
