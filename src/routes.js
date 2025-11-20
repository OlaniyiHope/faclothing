
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GoogleAuthHandler from "./GoogleAuthHandler";
import Selling from "./pages/Selling";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Policy from "./pages/Policy";
import ShipPolicy from "./pages/ShipPolicy";
import RefPolicy from "./pages/RefPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFailed from "./pages/OrderFailed";
import Category from "./pages/Category";
import Single2 from "./pages/Single2";
import Cart2 from "./pages/Cart2";
import Checkout2 from "./pages/Checkout2";
import ContinuePay from "./pages/Continue";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";


const routes = [
  { path: "/oauth-callback", element: <GoogleAuthHandler /> },


  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/shop-categories",
    element: <Selling />,
  },
  {
    path: "/shop-category/:id",
    element: <Category />,
  },
//   {
//  path: "/single-product/:id",
//     element: <Single />,
//   },
  {
 path: "/single-product/:id",
    element: <Single2 />,
  },
  {
 path: "/carts",
    element: <Cart />,
  },
  {
 path: "/cart",
    element: <Cart2 />,
  },
  {
 path: "/checkout",
    element: <Checkout />,
  },
  {
 path: "/login",
    element: <Login />,
  },
  {
 path: "/orders",
    element: <Orders />,
  },
  {
 path: "/order-details",
    element: <OrderDetails />,
  },
  {
 path: "/register",
    element: <Register />,
  },
  {
 path: "/continue",
    element: <ContinuePay />,
  },
  {
 path: "/checkouts",
    element: <Checkout2 />,
  },
  {
 path: "/privacy-policy",
    element: <Policy />,
  },
  {
 path: "/shipping-policy",
    element: <ShipPolicy />,
  },
  {
 path: "/refund-policy",
    element: <RefPolicy />,
  },
  {
 path: "/contact",
    element: <Contact />,
  },
  {
 path: "/terms-and-condition",
    element: <Terms />,
  },
  {
 path: "/category/:id",
    element: <ShopCategory />,
  },
  {
 path: "/order-success",
    element: <OrderSuccess />,
  },
  {
 path: "/order-failure",
    element: <OrderFailed />,
  },


   

];

export default routes;
