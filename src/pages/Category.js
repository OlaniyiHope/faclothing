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
   <body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US USD NG bg-white guest wt-focus-visible" >


     
        <main id="content">
            <div  class="wt-pl-md-3 wt-pr-md-3 wt-pb-xs-4 wt-body-max-width">
    
    <div class="wt-display-flex-xs wt-mt-lg-4 wt-mt-xs-3 wt-align-items-baseline wt-justify-content-center">
        <h1 class="wt-text-black wt-text-heading-large">
        {name}
        </h1>
    </div>
    <h2 class="wt-text-body wt-text-black wt-text-center-xs wt-mt-xs-1">
    
        
</h2>
    
    
    <div class="wt-pb-xs-3 wt-pt-xs-3 wt-pt-lg-4">
        <div class="nlp-filters-rail wt-display-flex-xs wt-flex-direction-row ">
    <div  id="nlp-price-pill" class="wt-panel-with-trigger wt-pr-xs-2" >
        
        <div class="wt-panel__trigger-container">
            
            {/* <button type="button" class="nlp-filter-pill wt-menu__trigger wt-btn wt-btn--small wt-btn--secondary wt-no-wrap top-filter-menu wt-height-full" data-wt-panel-trigger="" aria-expanded="false"><span class="wt-menu__trigger__label wt-text-truncate"><span data-menu-title="">Price</span></span> <span class="etsy-icon wt-menu__trigger__caret wt-icon--smaller top-filters__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></button>
            
             */}
            
            </div></div>
                 <PriceFilter onChange={handlePriceChange} />
    <button  class="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2" id="nlp-sale-pill">
            On sale
</button>
    {/* <button data-clg-id="WtButton" class="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2" id="nlp-stash-pill">
            Etsy's Picks

</button> */}
<SizeFilter onChange={(size) => console.log("Selected size:", size)} />

    <div  id="nlp-ships-from-pill" class="wt-panel-with-trigger wt-pr-xs-2" ><div class="wt-panel__trigger-container">
        
        
        {/* <button type="button" class="nlp-filter-pill wt-menu__trigger wt-btn wt-btn--small wt-btn--secondary wt-no-wrap top-filter-menu wt-height-full" data-wt-panel-trigger="" aria-expanded="false"><span class="wt-menu__trigger__label wt-text-truncate"><span data-menu-title="">Ships fro</span></span> <span class="etsy-icon wt-menu__trigger__caret wt-icon--smaller top-filters__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></button>
         */}
        
             <ShipsFromFilter onChange={handleShipsFrom} />
        </div></div>
    
</div>
    </div>
<div className="mobile-padding-wrapper">
  <ul className="wt-grid wt-list-unstyled">
    {products.map((product) => (
      <li
        key={product._id}
        className="wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3
                   wt-order-xs-4 wt-order-md-4 wt-order-lg-4"
      >
        <div
          className="js-merch-stash-check-listing v2-listing-card 
                     wt-mr-xs-0 search-listing-card--desktop listing-card-experimental-style"
          data-listing-id={product._id}
        >
          <a
            className="listing-link wt-display-inline-block"
            href={`/single-product/${product._id}`}
            title={product.name}
          >
            {/* PRODUCT IMAGE */}
            <div className="v2-listing-card__img wt-position-relative">
              <div className="placeholder placeholder-square">
                <div className="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
                  <img
                    loading="lazy"
                    width="300"
                    height="300"
                    style={{ height: "230px" }}
                    src={
                      product.images?.length > 0
                        ? product.images[0]
                        : "https://via.placeholder.com/300"
                    }
                    alt={product.name}
                  />
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
                <p className="wt-text-title-01">₦{product.price}</p>
              </div>
            </div>
          </a>
        </div>
      </li>
    ))}
  </ul>
</div>





        <div class="wt-display-flex-xs wt-justify-content-center">
            <nav aria-label="Page results">
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
                <a class="wt-action-group__item wt-btn wt-btn--icon " href="https://www.etsy.com/r/themes/1368497667979?anchor_listings=1542627936&amp;ref=pagination&amp;page=2" >
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
