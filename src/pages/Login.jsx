import React, {useState, useContext} from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import {toast} from "react-toastify";

const Login = () => {
   const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    dispatch({ type: "LOGIN_START" });

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful!");

      navigate("/"); // redirect to home
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      dispatch({ type: "LOGIN_FAILURE", payload: message });
      toast.error(message);
    }
  };
  return (
    <div className="wt-bg-white">
      <Header2 />

      <main id="content">
        <div id="checkout-sheet-container">
          <div id="checkout-sheet" >
            <div >
              <div className="wt-width-full checkout-sheet-full-height-container">
                <div
              
                  className="wt-display-flex-xs checkout-sheet-navigation-container wt-width-full checkout-sheet-full-page-width"
                >
                  <div className="wt-width-full wt-flex-shrink-xs-0">
                    <div>
                      <div >
                        <div className="wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3 wt-p-md-5 wt-pt-xs-4 wt-pt-xs-0">

                          {/* HEADER */}
                          <div >
                            <div className="checkout-sheet-panel-header wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-mb-xs-2">

                              <h1
                          
                                className="checkout-sheet-panel-header-text wt-text-title-large wt-text-title-small wt-sem-text-secondary"
                              >
                                <div className="wt-display-flex-xs wt-align-items-center">
                                  <button className="wt-text-link"  >
                           <Link to="/" className="wt-text-link" style={{ textDecoration: "none" }}>
  <span
    style={{
      fontSize: "26px",
      fontWeight: "700",
      color: "#8b023a"
    }}
  >
    Rayofaa
  </span>
</Link>

                                  </button>

                                  <div className="wt-ml-xs-1 wt-display-flex-xs">
                                    <span
                                
                                      className="wt-icon--smallest-xs wt-align-self-center etsy-icon"
                                    ></span>

                                    <div style={{ marginLeft: "2px" }}>
                                      Secure Login
                                    </div>
                                  </div>
                                </div>
                              </h1>

                            </div>

                            <h1 className="checkout-sheet-panel-header-text wt-text-title-large wt-mt-xs-3 wt-display-flex-xs wt-align-items-center wt-justify-content-center">
                              Log in to your account
                            </h1>
                          </div>

                          {/* LOGIN FORM */}
                          <div className="wt-mt-xs-4">
                            <form className="wt-form checkout-sheet-payment-form" onSubmit={handleLogin}>

                              {/* EMAIL */}
                              <div className="wt-form__field wt-mb-xs-3">
                                <label className="wt-label wt-label--small">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="wt-input wt-input--small"
                                  placeholder="you@example.com"
                                     value={email}
                        onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>

                              {/* PASSWORD */}
                              <div className="wt-form__field wt-mb-xs-4">
                                <label className="wt-label wt-label--small">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="wt-input wt-input--small"
                                  placeholder="••••••••"
                                   value={password}
                        onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>

                              {/* LOGIN BUTTON */}
                              <div className="wt-display-flex-xs wt-justify-content-flex-end wt-mb-xs-4">
                                <button className="wt-btn wt-btn--primary">
                                  Login
                                </button>
                              </div>

                              {/* DIVIDER */}
                              <div
                                style={{
                                  textAlign: "center",
                                  borderBottom: "1px solid #ddd",
                                  lineHeight: "0.1em",
                                  margin: "20px 0"
                                }}
                              >
                                <span style={{ background: "#fff", padding: "0 10px", color: "#777" }}>
                                  OR
                                </span>
                              </div>

                              {/* CONTINUE WITH GOOGLE */}
                              <div className="wt-mb-xs-3">
                                <button
                                  className="wt-btn wt-btn--small wt-btn--transparent wt-width-full"
                                  style={{
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "10px"
                                  }}
                                >
                                  <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    width="20"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Continue with Google
                                </button>
                              </div>

                              {/* CONTINUE WITH FACEBOOK */}
                              <div className="wt-mb-xs-3">
                                <button
                                  className="wt-btn wt-btn--small wt-btn--transparent wt-width-full"
                                  style={{
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "10px"
                                  }}
                                >
                                  <img
                                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                                    alt="Facebook"
                                    width="20"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Continue with Facebook
                                </button>
                              </div>
    {/* SIGN UP LINK */}
                      <div style={{ textAlign: "center", marginTop: "15px" }}>
                        <span style={{ color: "#444" }}>Don't have an account? </span>
                        <Link to="/register" style={{ color: "#8b023a", fontWeight: "600" }}>
                          Create an account
                        </Link>
                      </div>

                            </form>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HIDDEN FALLBACK */}
                <form
                  id="checkout-sheet-fallback-checkout-start-form"
                  className="wt-display-none"
                  method="post"
                  action=""
                >
                  <input type="hidden" name="bypass_fullpage_checkout_sheet" value="true" />
                </form>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
