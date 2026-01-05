import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import AppLoader from "./AppLoader";
import Header3 from "./Header3";
import Header2 from "./Header2";
import Banner2 from "./Banner2";

const Home = () => {
  const [loading, setLoading] = useState(true);



  return (
    <>
      <Header2 />
    <Banner2 />
     <Footer />
    </>
  );
};

export default Home;
