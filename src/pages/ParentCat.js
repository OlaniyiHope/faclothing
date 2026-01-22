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


import Header2 from "./Header2";
import PriceFilter from "./PriceFilter";
import ShipsFromFilter from "./ShipsFromFilter";
import SizeFilter from "./SizeFilter";

const ParentCat = () => {

    // const { id } = useParams();
const { parentSlug } = useParams();


  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
const ITEMS_PER_PAGE = 10;
const [currentPage, setCurrentPage] = useState(1);

  const [grandParents, setGrandParents] = useState([]);
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedGrandParent, setSelectedGrandParent] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
    const [priceFilter, setPriceFilter] = useState(null);
const [categoryId, setCategoryId] = useState(null);
const [subCategories, setSubCategories] = useState([]);

  const handlePriceChange = (value) => {
    console.log("Selected price filter:", value);
    // TODO: fetch products using value
  };

    const handleShipsFrom = (country) => {
    console.log("Ships From:", country);
    // TODO: Filter your products by country
  };

// useEffect(() => {
//   const fetchCategory = async () => {
//     try {
//       // 🔹 Fetch current category
//       const { data: category } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/category/slug/${slug}`
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
      // 1️⃣ Fetch category by slug
      const { data: category } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/category/slug/${parentSlug}`
      );

      setName(category.name);
      setPreview(category.image || "");
      setCategoryId(category._id);

      // 2️⃣ Fetch ALL categories (this contains children)
      const { data: allCats } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/categories`
      );

      // 3️⃣ Find THIS category inside allCats (FIXED)
      const fullCategory = allCats.find(
        (cat) => cat._id.toString() === category._id.toString()
      );

      // 4️⃣ SET SUBCATEGORIES ✅
      setSubCategories(fullCategory?.children || []);

      // 5️⃣ GRANDPARENTS (top-level)
      setGrandParents(allCats.filter((cat) => !cat.parent));

      // 6️⃣ Resolve grandparent
      let grandParentId;

      if (!category.parent) {
        grandParentId = category._id;
      } else {
        const { data: parentCat } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/category/${category.parent}`
        );

        if (!parentCat.parent) {
          grandParentId = parentCat._id;
        } else {
          const { data: grandCat } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/db/category/${parentCat.parent}`
          );
          grandParentId = grandCat._id;
        }
      }

      setSelectedGrandParent(grandParentId);

      // 7️⃣ Parents (siblings under same grandparent)
      const grandParentCategory = allCats.find(
        (cat) => cat._id.toString() === grandParentId.toString()
      );

      setParents(grandParentCategory?.children || []);
      setChildren([]);

    } catch (err) {
      console.error("❌ Failed to fetch category:", err);
    }
  };

  fetchCategory();
}, [parentSlug]);



// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/products/category/${id}`
//       );
//       setProducts(data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   };

//   fetchProducts();
// }, [id]);

// useEffect(() => {
//   if (!categoryId) return;

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/products/category/${categoryId}`
//       );
//       setProducts(data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   };

//   fetchProducts();
// }, [categoryId]);
useEffect(() => {
  if (!categoryId || subCategories.length > 0) return;

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category/${categoryId}`
      );
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  fetchProducts();
}, [categoryId, subCategories]);

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
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

const paginatedProducts = products.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);

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

{subCategories.length > 0 && (
  <div className="mobile-padding-wrapper">
    <ul className="wt-grid wt-list-unstyled">
      {subCategories.map((cat) => (
        <li
          key={cat._id}
          className="wt-grid__item-xs-12 wt-grid__item-md-4 wt-grid__item-lg-3"
        >
        <a href={`/featured/${parentSlug}/${cat.slug}`}>

            <div className="v2-listing-card">
              <img
                src={cat.image || "https://via.placeholder.com/300"}
                alt={cat.name}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <h3 className="wt-text-title-01 wt-text-center">{cat.name}</h3>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
)}





    <div className="wt-display-flex-xs wt-justify-content-center">
  <nav aria-label="Page results">
    <div className="wt-action-group wt-list-inline wt-flex-no-wrap wt-mt-xs-4 wt-mb-xs-4">

      {/* PREVIOUS */}
      <div className="wt-action-group__item-container">
        <button
          className={`wt-action-group__item wt-btn wt-btn--icon ${
            currentPage === 1 ? "wt-is-disabled" : ""
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          <span className="wt-screen-reader-only">Previous page</span>
          <span className="wt-icon">
            ←
          </span>
        </button>
      </div>

      {/* PAGE INFO */}
      <div className="wt-action-group__item-container wt-text-caption">
        Page {currentPage} of {totalPages}
      </div>

      {/* NEXT */}
      <div className="wt-action-group__item-container">
        <button
          className={`wt-action-group__item wt-btn wt-btn--icon ${
            currentPage === totalPages ? "wt-is-disabled" : ""
          }`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          <span className="wt-screen-reader-only">Next page</span>
          <span className="wt-icon">
            →
          </span>
        </button>
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

export default ParentCat;
