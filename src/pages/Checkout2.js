import React from "react";
import Header2 from "./Header2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Checkout2 = ({ onNext }) => {

   const navigate = useNavigate();
const initialValues = {
  email: "",
  full_name: "",
  company_address: "",
  street_address: "",
  phone: "",
};


  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    street_address: Yup.string()
      .oneOf([Yup.ref("street_address"), null], "Street Address is required" )
      .required("Street Address is required"),
    full_name: Yup.string()
      .oneOf([Yup.ref("full_name"), null], "Full name is required" )
      .required("Full name is required"),
  
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
      .nullable()
      .notRequired(),
  });

  const handleSubmit = (values) => {
    console.log("Shipping info:", values);
    // Navigate to the next step
    navigate("/continue");
  };
  return (
    <div className="wt-bg-white">
      <Header2 />

      <main id="content">
        <div>
          <div>
            <div >
              <div className="wt-width-full">
                <div
                
                  className="wt-display-flex-xs checkout-sheet-navigation-container wt-width-full checkout-sheet-full-page-width"
                >
                  <div className="wt-width-full wt-flex-shrink-xs-0">
                    <div>
                      <div>
                        <div className="wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3 wt-p-md-5 wt-pt-xs-4 wt-pt-xs-0">
                          <div >
                            <div className="checkout-sheet-panel-header wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-mb-xs-2">
                              <h1
                           
                                className="checkout-sheet-panel-header-text wt-text-title-large wt-text-title-small wt-sem-text-secondary"
                              >
                                <div className="wt-display-flex-xs wt-align-items-center">
                                  <button className="wt-text-link">
                                    <span
                                     
                                      className="wt-icon--logo wt-icon--base-md wt-icon--smaller-xs wt-fill-orange etsy-icon"
                                    ></span>
                                  </button>

                                  <div className="wt-ml-xs-1 wt-display-flex-xs">
                                    <span
                                     
                                      className="wt-icon--smallest-xs wt-align-self-center etsy-icon"
                                    ></span>
                                    <div style={{ marginLeft: "2px" }}>
                                      Secure checkout
                                    </div>
                                  </div>
                                </div>
                              </h1>
                            </div>

                            {/* Subway Navigation */}
                            <ol className="wt-subway">
                              <li
                            
                       
                                className="wt-subway__stop wt-subway__stop--active"
                              >
                                <span className="wt-subway__stop__link">
                                  <div className="wt-subway__stop__dot"></div>
                                  <span className="wt-subway__stop__title">
                                    Shipping
                                  </span>
                                </span>
                              </li>

                              <li
                            
                                className="wt-subway__stop"
                              >
                                <span className="wt-subway__stop__link">
                                  <div className="wt-subway__stop__dot"></div>
                                  <span className="wt-subway__stop__title">
                                    Payment
                                  </span>
                                </span>
                              </li>

                              <li
                               
                                className="wt-subway__stop"
                              >
                                <span className="wt-subway__stop__link">
                                  <div className="wt-subway__stop__dot"></div>
                                  <span className="wt-subway__stop__title">
                                    Review
                                  </span>
                                </span>
                              </li>
                            </ol>

                            <h1 className="checkout-sheet-panel-header-text wt-text-title-large wt-mt-xs-3 wt-display-flex-xs wt-align-items-center wt-justify-content-center">
                          Delivery Details
                            </h1>
                          </div>

                          {/* Form */}
                          <div className="wt-mt-xs-4">
                          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="wt-form checkout-sheet-shipping-address-form">
              {/* Email */}
              <div className="wt-form__field wt-mb-xs-3">
                <label className="wt-label wt-label--small">
                  Email <span className="wt-label__required">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="wt-input wt-input--small"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="wt-text-red"
                />
              </div>

              {/* Confirm Email */}
              <div className="wt-form__field wt-mb-xs-3">
                <label className="wt-label wt-label--small">
                 Full Name<span className="wt-label__required">*</span>
                </label>
                <Field
                  type="name"
                  name="full_name"
                  className="wt-input wt-input--small"
                />
                <ErrorMessage
                  name="full_name"
                  component="div"
                  className="wt-text-red"
                />
              </div>
              {/* Confirm Email */}
              <div className="wt-form__field wt-mb-xs-3">
                <label className="wt-label wt-label--small">
                Company Address(optional)
                </label>
                <Field
                  type="name"
                  name="company_address"
                  className="wt-input wt-input--small"
                />
                <ErrorMessage
                  name="company_address"
                  component="div"
                  className="wt-text-red"
                />
              </div>
                    {/* Confirm Email */}
              <div className="wt-form__field wt-mb-xs-3">
                <label className="wt-label wt-label--small">
               Street Address<span className="wt-label__required">*</span>
                </label>
                <Field
                  type="name"
                  name="street_address"
                  className="wt-input wt-input--small"
                />
                <ErrorMessage
                  name="street_address"
                  component="div"
                  className="wt-text-red"
                />
              </div>
              {/* Phone */}
              <div className="wt-form__field wt-mb-xs-3">
                <label className="wt-label wt-label--small">
                  Phone number <span className="wt-label__optional"></span>
                </label>
                <Field
                  type="tel"
                  name="phone"
                  className="wt-input wt-input--small"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="wt-text-red"
                />
              </div>

              {/* Submit */}
              <div className="wt-display-flex-xs wt-justify-content-flex-end">
                <button
                  type="submit"
                  className="wt-btn wt-btn--primary"
                  disabled={isSubmitting}
                >
                  Continue to Payment
                </button>
              </div>
            </Form>
          )}
        </Formik>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

             

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout2;
