
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./Footer";
import Header from "./Header";


const ShipPolicy = () => {
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/popular`
        );
        setProducts(data);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div style={{backgroundColor: "white"}}>
  <Header />

<div id="cms-ptitle" class="cms-ptitle text-center" data-stellar-background-ratio="0.5">
        <div class="container-fluid relative z-top">
            <h1 class="title


        ">Shipping Policies</h1>			<ul class="cms-breadcrumb unstyled justify-content-center"><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/">Home</a></li><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/shop/">Shop</a></li><li><span class="breadcrumb-entry">Privacy Policies</span></li></ul>        </div>
    </div>
    <main id="cms-main" class="cms-main container no-sidebar" style={{color: "black"}}>
<p class="privacy-policy-tutorial">Shipping: Free shipping on $150 + within the united state.
  
</p>
<h2>International Shipping:</h2>
<p class="privacy-policy-tutorial">Buyers are responsible for shipping cost, customs and import taxes that may apply.</p>

<p class="privacy-policy-tutorial">I am not responsible for delays due to customs</p>
</main>

   <Footer />

    </div>
 
  );
};

export default ShipPolicy;
