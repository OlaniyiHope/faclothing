import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";

const Checkout2 = () => {
  return (
    <div className="wt-bg-white">
      <Header2 />

      <main id="content">
        <div id="checkout-sheet-container">
          <div id="checkout-sheet" data-testid="checkout-sheet">
            <div data-selector="checkout-sheet">
              <div className="wt-width-full checkout-sheet-full-height-container">
                <div
                  data-testid="checkout-sheet-navigation-container"
                  className="wt-display-flex-xs checkout-sheet-navigation-container wt-width-full checkout-sheet-full-page-width"
                >
                  <div className="wt-width-full wt-flex-shrink-xs-0">
                    <div>
                      <div data-selector="checkout-sheet-panel-add-shipping-address">
                        <div className="wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3 wt-p-md-5 wt-pt-xs-4 wt-pt-xs-0">
                          <div data-testid="subway-nav-panel-header">
                            <div className="checkout-sheet-panel-header wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-mb-xs-2">
                              <h1
                                data-testid="panel-header"
                                className="checkout-sheet-panel-header-text wt-text-title-large wt-text-title-small wt-sem-text-secondary"
                              >
                                <div className="wt-display-flex-xs wt-align-items-center">
                                  <button className="wt-text-link">
                                    <span
                                      data-testid="etsy-logo"
                                      className="wt-icon--logo wt-icon--base-md wt-icon--smaller-xs wt-fill-orange etsy-icon"
                                    ></span>
                                  </button>

                                  <div className="wt-ml-xs-1 wt-display-flex-xs">
                                    <span
                                      data-testid="lock-icon"
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
                            <ol data-clg-id="WtSubway" className="wt-subway">
                              <li
                                data-clg-id="WtSubwayStop"
                                aria-current="step"
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
                                data-clg-id="WtSubwayStop"
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
                                data-clg-id="WtSubwayStop"
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
                              Enter an address
                            </h1>
                          </div>

                          {/* Form */}
                          <div className="wt-mt-xs-4">
                            <form
                              action="#"
                              data-clg-id="WtForm"
                              noValidate
                              className="wt-form checkout-sheet-shipping-address-form"
                            >
                              <div
                                data-clg-id="WtAnnouncement"
                                role="status"
                                aria-atomic="false"
                                className="wt-screen-reader-only"
                              ></div>

                              {/* Email */}
                              <div className="wt-form__field wt-mb-xs-3">
                                <label
                                  data-clg-id="WtFormFieldLabel"
                                  className="wt-label wt-label--small"
                                >
                                  Email<span> </span>
                                  <span aria-hidden="true" className="wt-label__required"></span>
                                  <span className="wt-screen-reader-only">
                                    Required
                                  </span>
                                </label>
                                <input
                                  type="email"
                                  autoComplete="on"
                                  autoCorrect="off"
                                  name="email"
                                  className="wt-input wt-input--small"
                                />
                              </div>

                              {/* Confirm Email */}
                              <div className="wt-form__field wt-mb-xs-3">
                                <label className="wt-label wt-label--small">
                                  Confirm Email<span> </span>
                                  <span aria-hidden="true" className="wt-label__required"></span>
                                  <span className="wt-screen-reader-only">
                                    Required
                                  </span>
                                </label>
                                <input
                                  type="email"
                                  autoComplete="on"
                                  autoCorrect="off"
                                  name="email_confirmation"
                                  className="wt-input wt-input--small"
                                />
                              </div>

                              {/* Phone Number */}
                              <div className="wt-display-flex-xs">
                                <div className="wt-form__field wt-flex-xs-1 wt-mb-xs-3">
                                  <label className="wt-label wt-label--small">
                                    Phone number<span> </span>
                                    <span className="wt-label__optional">
                                      (optional)
                                    </span>
                                  </label>
                                  <input
                                    type="tel"
                                    autoComplete="tel"
                                    autoCorrect="off"
                                    name="phone"
                                    className="wt-input wt-input--small"
                                  />
                                </div>
                              </div>

                              {/* Submit */}
                              <div className="wt-display-flex-xs wt-justify-content-flex-end">
                                <button
                                  type="submit"
                                  data-clg-id="WtButton"
                                  className="wt-btn wt-btn--primary"
                                >
                                  Continue to Payment
                                </button>
                              </div>
                            </form>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hidden fallback form */}
                <form
                  id="checkout-sheet-fallback-checkout-start-form"
                  method="post"
                  action="/cart/12541074043/checkout?payment_method=cc&force_flex_pay=1"
                  style={{ display: "none" }}
                >
                  <input type="hidden" name="cart_nonce" value="6917366ac29f2" />
                  <input type="hidden" name="has_estimated_shipping" value="false" />
                  <input type="hidden" name="cart_ids[]" value="12541074043" />
                  <input
                    type="hidden"
                    name="_nnc"
                    value="3:1763128938:sk3u9MJSW0Alof-ymitJLcpwpPk8:c691dd029c5f92c754574ce3a4feb677aaefaf3ba7188f774486d672247e444e"
                  />
                  <input type="hidden" name="force_flex_pay" value="1" />
                  <input type="hidden" name="payment_method" value="cc" />
                  <input
                    type="hidden"
                    name="bypass_fullpage_checkout_sheet"
                    value="true"
                  />
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

export default Checkout2;
