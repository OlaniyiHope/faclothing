import React, {useState, useEffect, useRef} from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import "./Banner.css"
import d2 from "./web.jpg"
import d3 from "./ank.jpeg"
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
    const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
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


const scrollToIndex = (index) => {
  const container = sliderRef.current;
  if (!container) return;

  const card = container.querySelector(".daily-deal-card");
  if (!card) return;

  container.scrollTo({
    left: index * card.offsetWidth,
    behavior: "smooth",
  });

  setActiveIndex(index);
};

const handleNext = () => {
  if (activeIndex < trending.length - 1) {
    scrollToIndex(activeIndex + 1);
  }
};

const handlePrev = () => {
  if (activeIndex > 0) {
    scrollToIndex(activeIndex - 1);
  }
};

useEffect(() => {
  const container = sliderRef.current;
  if (!container) return;

  const onScroll = () => {
    const card = container.querySelector(".daily-deal-card");
    if (!card) return;

    const index = Math.round(container.scrollLeft / card.offsetWidth);
    setActiveIndex(index);
  };

  container.addEventListener("scroll", onScroll);
  return () => container.removeEventListener("scroll", onScroll);
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
            <div >


<div >
<div class="wt-grid wt-body-max-width wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3 appears-ready">
    
        <div class="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">
    
        <section class="shoppable-hero shoppable-hero--two-column wt-display-flex-xs " aria-labelledby="shoppable-hero-title">
        <div  class="wt-card wt-card--contained shoppable-hero-headline shoppable-hero-headline--xs-portrait wt-display-flex-xs wt-width-full wt-flex-grow-xs-1">
  
<div class="wt-width-full">
    <div class="shoppable-hero-headline__container  wt-display-flex-xs wt-overflow-hidden wt-height-full" style={{backgroundColor: "#8b023a"}}>
        <div class="shoppable-hero-headline__content wt-p-xs-4 wt-display-flex-xs wt-flex-direction-column-xs wt-flex-gap-xs-1 wt-align-items-center wt-justify-content-center wt-text-center-xs  wt-text-white">
            <p id="shoppable-hero-title" class="wt-text-display">Wear Your Heritage Proudly</p>
        
            <a href="/shop-categories"   type="button" class="wt-btn shoppable-hero-headline__content-cta wt-mt-xs-3 wt-btn--primary wt-btn--light ">
                Shop all products
            </a>
        </div>
        <div class="shoppable-hero-headline__image shoppable-hero-headline__image--spotlighted wt-flex-grow-xs-1">
            <img class="wt-height-full wt-object-fit-cover wt-image" src={d2} alt="wooden menorah on top of a gift wrapped in blue paper and a yellow gold ribbon"
			
			 style={{ aspectRatio: "1.25925925926" }} fetchpriority="high" sizes="(max-width: 639px) 100vw, (max-width: 899px) 45vw, (max-width: 1199px) 55vw, 33vw" srcset={d2} />

            <a href="/shop-categories" type="button"   class="wt-btn shoppable-hero-headline__image-cta wt-btn--primary wt-btn--light">
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
            <img  class="wt-height-full wt-object-fit-cover shoppable-hero-page__image wt-z-index-negative-1 wt-rounded-02 wt-image" src={d3} alt="Pieces that will start new traditions"  style={{ aspectRatio: "1" }} sizes="400px" srcset={d3} />


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
    
        
</div><div  class="recs-appears-logger">
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
<div class="recs-appears-logger">
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
<button  class="wt-btn wt-btn--transparent wt-btn--icon wt-ml-xs-1 wt-shadow-elevation-3"  aria-label="Previous section" disabled="" aria-describedby="daily-deals-y5d7ubb0qdg">
                        <span class="wt-icon wt-nudge-t-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16 21.002a1 1 0 0 1-.664-.253L5.5 12.002l9.841-8.748a1 1 0 0 1 1.328 1.494L8.5 12.002l8.159 7.252A1 1 0 0 1 16 21.002"></path></svg></span>

</button>
<button  class="wt-btn wt-btn--transparent wt-btn--icon wt-ml-xs-1 wt-shadow-elevation-3"  aria-label="Next section" aria-describedby="daily-deals-y5d7ubb0qdg">
                        <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path></svg></span>

</button>
            </div>
        </div>
        <div class="daily-deals-carousel__scrollable wt-position-relative overflow-clip-respect-box-shadow default-module-padding no-tv-up-padding">
            <button
    className="slider-arrow left"
    onClick={handlePrev}
    disabled={activeIndex === 0}
    aria-label="Previous product"
  >
    ‹
  </button>
            <div    ref={sliderRef} class="wt-grid wt-flex-nowrap wt-grid--block daily-deals-carousel__inner wt-pl-xs-3">
        


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
                <Link
   to={`/single-product/${product.slug}`}>
              <img
                className="wt-width-full wt-height-full wt-display-block wt-position-absolute daily-deal-card__placeholder--loud"
                alt={product.name}
              src={product.images && product.images.length > 0 ? product.images[0] : ""}

                loading="lazy"
              />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* INFO SECTION */}
      <div className="v2-listing-card__info wt-pt-xs-0 wt-pr-xs-2">

        <div className="wt-grid wt-align-items-baseline">
          <div className="wt-grid__item-xs-12 wt-grid__item-xl-8 wt-p-xs-0">
             <Link
   to={`/single-product/${product.slug}`}>
            <h3 className="wt-text-caption v2-listing-card__title wt-text-truncate currency-value3" >
              {product.name}
            </h3>
            </Link>
          </div>

          {/* Rating */}
          <div className="wt-grid__item-xs-12 wt-grid__item-xl-4 wt-p-xs-0">
            <div className="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
              <span className="wt-display-flex-xs wt-flex-nowrap wt-align-items-center">
                <span className="wt-text-title-small currency-value2"  >
                  {product.rating || 4.8}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* PRICE SECTION */}
        <div className="n-listing-card__price wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-text-title-large lc-price daily-deal-card__price">

          {/* Current Price */}
    <p className="wt-text-slime lc-price daily-deal-card__price" style={{color: "black"}}>
  <span aria-hidden="true" className="price-row">
    <span className="currency-symbol"  style={{color: "black"}}>$</span>
    <span className="currency-value"  style={{color: "black"}}>
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
             <button
    className="slider-arrow right"
    onClick={handleNext}
    disabled={activeIndex === trending.length - 1}
    aria-label="Next product"
  >
    ›
  </button>

            <div className="slider-dots mobile-only">
  {trending.map((_, index) => (
    <button
      key={index}
      className={`slider-dot ${index === activeIndex ? "active" : ""}`}
      onClick={() => scrollToIndex(index)}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>

        </div>
    </section>
</div>

<div class="hp-spacing-reduced-default">
    
        
</div>
<div   class="recs-appears-logger">
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
       href={`/featured/${cat.slug}`}
            className="shopping-window-interior"
          >
            <img
              className="wt-horizontal-center query-image-container wt-mb-xs-1 wt-rounded-02 wt-image--cover wt-image"
              src={cat.image}
              alt={cat.name}
            style={{
    aspectRatio: "0.8",
    maxHeight: "200px", // restrict height on mobile
    objectFit: "cover",
  }}
            />
 <Link
                  to={`/featured/${cat.slug}`}>
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


{/* 
<div class="hp-spacing-reduced-default" data-spacing-for-spec-name="Homepage_Vesta_ApiSpec_DailyDeals" data-spacing-for-spec-id="c8f326da2990ea5137ac795c163837b7">
    
        
</div> */}

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


<div >
<div className="wt-grid wt-body-max-width wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">

  <div className="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">

    <div>
      {/* SECTION HEADER */}
      <div className="simple-header wt-pb-xs-2 wt-pb-md-3 wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-justify-content-space-between">
        <div className="header-wrapper">
          <h2 className="wt-text-title-larger">
         Best sellers
          </h2>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <ul className="shop-our-selections-module wt-block-grid-xs-2 wt-block-grid-md-5 wt-p-xs-0">
        
        {bestsellers.map((item) => (
          <li key={item._id} className="wt-list-unstyled wt-block-grid__item">
            <div className="wt-card wt-card--transparent wt-height-full wt-width-full">
 <Link
   to={`/single-product/${product.slug}`}>
               
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
<div></div><div >
<div class="wt-grid wt-body-max-width appears-ready">
    <div class="wt-grid__item-xs-12">
        <div class="wt-bg-beeswax-tint vesta-hp-full-width-banner wt-position-relative wt-pb-xs-6 wt-overflow-hidden">
            <span class="wt-edge wt-fill-white wt-edge--smaller wt-edge--ratio-none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1400" height="48" viewBox="0 0 1400 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<rect x="0" width="1400" height="24"></rect>
</svg></span><span class="wt-edge wt-fill-white wt-edge--smaller wt-edge--ratio-slice" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1400" height="48" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
<rect x="0" width="1400" height="24"></rect>
</svg></span>
            <div class="wt-text-center-xs wt-body-max-width wt-pb-xs-6 wt-pt-xs-6 wt-pl-xs-5 wt-pr-xs-5 wt-pl-md-10 wt-pr-md-10 wt-pl-lg-9 wt-pr-lg-9">
                <h2 class="wt-text-heading-large wt-mb-xs-1 wt-text-center-xs"> What is Rayofaa? </h2>
                <a class="wt-text-link" href="/about"> Read our story </a>

                <div class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-lg wt-pt-xs-6 wt-text-center-xs wt-text-left-lg wt-mb-lg-7 wt-mb-xs-1">
                    <div class="wt-flex-xs-1 wt-mb-xs-5 wt-mb-lg-0">
                        <div >


    <p class="wt-text-body-01 wt-display-inline">
Welcome to fa&a African print everyday wear,<br/>
My name is Aderayo, also known as Ay, and I'm so happy you're here!<br />
FA&A designs empowers women to embrace cultural pride and beauty with Afro-centric fashion that is modest. modern and majestic<br />
Each piece in my store is carefully hand-patterned and made. A passionate seamstress who's  passionate to bring African print cloths to life, with it's bold, vibrant designs. I believe African print cloths it's more than a cultural clothing but  a wearable art , made to suits your everyday lifestyle perfectly. They are designed to celebrate heritage, elegance and contemporary style<br />
I take pride in working with African print clothes. one-of-a kind garments that celebrate individuality and culture. Whether you're looking for a stunning dress for a special event or a unique piece to elevate your everyday wardrobe, every item is sewn with love, just for you <br />
New designs are always in the works! Be sure to follow  FA&A on all social media platforms to stay updated and be the first to know when there's a new release fresh styles. You won't want to miss out on exclusive pieces that blend modern fashion with timeless African prints<br />If it's your first time here, I want to say thank you, there's something special for you at the checkout to save %15 on your purchase. It's my way of saying welcome to the fa&a clothing. If you have any questions or concerns please feel free to reach out to me f_a36n@yahoo.com and I will definitely respond promptly.
    </p>


</div>
                    </div>
               
               
                </div>
                <div class="wt-text-center-xs">
                    <h4 class="wt-text-title-large"> Have a question? Well, we’ve got some answers. </h4>
                    <a class="wt-mt-xs-2 button wt-btn wt-sem-text-primary wt-btn--outline" href="/help">Go to Help Center</a>
                </div>
            </div>

        </div>
    </div>
</div>
</div><div class="hp-spacing-none">
    
        
</div><div id="google-one-tap-modal-div" class="google-one-tap-modal-div">
</div><div class="hp-spacing-none">
    
        
</div><div class="hp-spacing-none">
    
        
</div>

</div>
        </main>     
    
    
    
    
    </>
  );
};

export default Banner2;
