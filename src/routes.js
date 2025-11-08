
import { Navigate } from "react-router-dom";
import AdminRoute from "./components/admindashboard/AdminRoute";
import sessionRoutes from "./components/sessions/SessionRoutes";
import SalesRoute from "./components/salesdashboard/SalesRoute";
import ManagerRoute from "./components/managerdashboard/ManagerRoute";
import AuthGuard from "./auth/AuthGuard";
import Home from "./pages/Home";
import GoogleAuthHandler from "./GoogleAuthHandler";
import Selling from "./pages/Selling";
import Single from "./pages/Single";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Policy from "./pages/Policy";
import ShipPolicy from "./pages/ShipPolicy";
import RefPolicy from "./pages/RefPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";


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
 path: "/single-product/:id",
    element: <Single />,
  },
  {
 path: "/cart",
    element: <Cart />,
  },
  {
 path: "/checkout",
    element: <Checkout />,
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


   

];

export default routes;
