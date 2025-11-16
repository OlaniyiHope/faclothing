import React, {useState, useEffect} from "react";

import axios from "axios";

const Footer2 = () => {
    const [categories, setCategories] = useState([]);
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

  return (
    <>
<footer id="cms-footer" class="cms-footer relative cms-footer-elementor">		<div data-elementor-type="wp-post" data-elementor-id="52" class="elementor elementor-52">
                <div class="elementor-element elementor-element-31a575a bdr-t-1 bdr-primary-regular e-flex e-con-boxed e-con e-parent" data-id="31a575a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                    <div class="e-con-inner">
                <div class="elementor-element elementor-element-f17aaeb elementor-widget elementor-widget-cms_fancy_box" data-id="f17aaeb" data-element_type="widget" data-widget_type="cms_fancy_box.default">
                <div class="elementor-widget-container">
                    <div class="cms-fancyboxs-2 d-flex gutter flex-col-4 flex-col-tablet-2 flex-col-smobile-1" style={{backgroundColor: "white"}}>
        <div class="cms-fancybox cms-fancybox-2 hover-icon-bounce cms-transition d-flex flex-nowrap gap-20 gap-smobile-10 align-items-center p-tb-35 p-tb-tablet-20 justify-content-start justify-content-tablet-start">
        <div class="cms-icon text-42 text-heading  trevoxicon- trevox-icon-box" aria-hidden="true"></div>		<div class="flex-auto">
            <div class="cms-title text-18 text-heading">Cheap Shipping </div>
        <div class="cms-desc text-body text-15 pt-5 empty-none"></div>
                    </div>
    </div>
        <div class="cms-fancybox cms-fancybox-2 hover-icon-bounce cms-transition d-flex flex-nowrap gap-20 gap-smobile-10 align-items-center p-tb-35 p-tb-tablet-20 justify-content-center justify-content-tablet-start">
        <div class="cms-icon text-42 text-heading  trevoxicon- trevox-icon-transaction" aria-hidden="true"></div>		<div class="flex-auto">
            <div class="cms-title text-18 text-heading">Buy Now Pay Later</div>
        <div class="cms-desc text-body text-15 pt-5 empty-none"></div>
                    </div>
    </div>
        <div class="cms-fancybox cms-fancybox-2 hover-icon-bounce cms-transition d-flex flex-nowrap gap-20 gap-smobile-10 align-items-center p-tb-35 p-tb-tablet-20 justify-content-center justify-content-tablet-start">
        <div class="cms-icon text-42 text-heading  trevoxicon- trevox-icon-cash" aria-hidden="true"></div>		<div class="flex-auto">
            <div class="cms-title text-18 text-heading">Money Back Guarantee</div>
        <div class="cms-desc text-body text-15 pt-5 empty-none"></div>
                    </div>
    </div>
        <div class="cms-fancybox cms-fancybox-2 hover-icon-bounce cms-transition d-flex flex-nowrap gap-20 gap-smobile-10 align-items-center p-tb-35 p-tb-tablet-20 justify-content-end justify-content-tablet-start">
        <div class="cms-icon text-42 text-heading  trevoxicon- trevox-icon-exchange" aria-hidden="true"></div>		<div class="flex-auto">
            <div class="cms-title text-18 text-heading">Exchanges & Returns </div>
        <div class="cms-desc text-body text-15 pt-5 empty-none"></div>
                    </div>
    </div>
    </div>
                </div>
                </div>
                    </div>
                </div>
        <div class="elementor-element elementor-element-4189ed7 bg-primary-darken pt-70 e-flex e-con-boxed e-con e-parent" data-id="4189ed7" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                    <div class="e-con-inner">
        <div class="elementor-element elementor-element-907966b e-con-full e-flex e-con e-child" data-id="907966b" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                <div class="elementor-element elementor-element-4b4b59c elementor-widget elementor-widget-cms_quickcontact" data-id="4b4b59c" data-element_type="widget" data-widget_type="cms_quickcontact.default">
                <div class="elementor-widget-container">
                    <div class="cms-eqc cms-eqc-3 ">
            <h2 class="cms-title font-700 mt-n3 text-white text-28 mb-25">Fa Clothing</h2>
                <div class="cms-desc text-white">Our collections are fashionable at an affordable price without compromising quality, always in style and with global latest outlook trends.</div>
    </div>				</div>
                </div>
                <div class="elementor-element elementor-element-9e41f49 elementor-widget elementor-widget-cms_social_icons" data-id="9e41f49" data-element_type="widget" data-widget_type="cms_social_icons.default">
                <div class="elementor-widget-container">
                    <div class="cms-social-icons cms-social-icons-1 d-flex align-items-center gap-20 text-13 ">
        <a class="cms-social-item d-flex align-items-center gap-10 cms-animate-icon elementor-animation-grow elementor-repeater-item-59db350 text-white text-hover-white" href="https://facebook.com/" target="_blank">
        <i class="cms-icon text-20    cmsi-facebook" aria-hidden="true"></i>			</a>
        <a class="cms-social-item d-flex align-items-center gap-10 cms-animate-icon elementor-animation-grow elementor-repeater-item-931d51e text-white text-hover-white" href="https://instagram.com/" target="_blank">
        <i class="cms-icon text-20    cmsi cmsi-instagram" aria-hidden="true"></i>			</a>
        <a class="cms-social-item d-flex align-items-center gap-10 cms-animate-icon elementor-animation-grow elementor-repeater-item-204b111 text-white text-hover-white" href="#" target="_blank">
        <i class="cms-icon text-20    cmsi cmsi-tik-tok" aria-hidden="true"></i>			</a>
        <a class="cms-social-item d-flex align-items-center gap-10 cms-animate-icon elementor-animation-grow elementor-repeater-item-3b2701f text-white text-hover-white" href="https://twitter.com/" target="_blank">
        <i class="cms-icon text-20    cmsi-twitter-circle" aria-hidden="true"></i>			</a>
    </div>				</div>
                </div>
                </div>
        <div class="elementor-element elementor-element-3b6d79d e-con-full e-flex e-con e-child" data-id="3b6d79d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                <div class="elementor-element elementor-element-f2e0699 elementor-widget__width-inherit elementor-widget-mobile__width-inherit pl-70 pl-tablet-extra-0 elementor-widget elementor-widget-cms_navigation_menu" data-id="f2e0699" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
                <div class="elementor-widget-container">
                        <div class="cms-emenu cms-emenu-1">
        <h2 class="cms-title text-18 text-white mb-25">
            Shop        </h2>
        <ul id="menu-shop-categories" class="cms-navigation-menu cms-menu text-15 text-uppercase ls-06"><li id="menu-item-58" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-58"><a href="product-category/dresses/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Dresses</span></a></li>
<li id="menu-item-62" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-62"><a href="product-category/t-shirts/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">T-shirts</span></a></li>
<li id="menu-item-57" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-57"><a href="product-category/blouses/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Blouses</span></a></li>
<li id="menu-item-60" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-60"><a href="product-category/outerwear/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Outerwear</span></a></li>
<li id="menu-item-56" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-56"><a href="product-category/accessories/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Accessories</span></a></li>
<li id="menu-item-59" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-59"><a href="product-category/knitwear/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Knitwear</span></a></li>
<li id="menu-item-61" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-61"><a href="product-category/pants/index.html" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Pants</span></a></li>
</ul>	</div>
                </div>
                </div>
                </div>
        <div class="elementor-element elementor-element-da2c58e e-con-full e-flex e-con e-child" data-id="da2c58e" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                <div class="elementor-element elementor-element-ef47f9b elementor-widget-mobile__width-inherit elementor-widget elementor-widget-cms_navigation_menu" data-id="ef47f9b" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
                <div class="elementor-widget-container">
                        <div class="cms-emenu cms-emenu-1">
        <h2 class="cms-title text-18 text-white mb-25">
            Links        </h2>
        <ul id="menu-links" class="cms-navigation-menu cms-menu text-15 text-uppercase ls-06"><li id="menu-item-89" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"><a href="/about-us" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">About Us</span></a></li>
<li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91"><a href="/shipping-policy" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Shipping &#038; Policy</span></a></li>
<li id="menu-item-92" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"><a href="/refund-policy" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Refund Policy</span></a></li>
<li id="menu-item-93" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a href="/help" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Help &#038; FAQs</span></a></li>
<li id="menu-item-94" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="/contact" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Contacts</span></a></li>
</ul>	</div>
                </div>
                </div>
                </div>
        <div class="elementor-element elementor-element-f7e53a2 e-con-full e-flex e-con e-child" data-id="f7e53a2" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                <div class="elementor-element elementor-element-f138cb0 elementor-widget elementor-widget-cms_newsletter" data-id="f138cb0" data-element_type="widget" data-widget_type="cms_newsletter.default">
                <div class="elementor-widget-container">
                    <div class="cms-newsletter cms-newsletter-1 ">
    <h2 class="cms-title cms-heading text-18 text-17 empty-none text-white pb-35">Newsletter</h2>
    <div class="cms-desc empty-none text-14 text-white pb-25"></div>
    <form method="post" action="https://7oroofthemes.com/trevox/wp-admin/admin-ajax.php?action=tnp&amp;na=s" class="cms-nlf-1 relative" >
<input type="hidden" name="nlang" value="" />
<div class="tnp-field tnp-field-email"><input class="tnp-email" type="email" name="ne" id="tnp-1" value="" placeholder="Your Email Address" required /></div>
<div class="tnp-field tnp-field-button" style={{textAlign: "left"}}><input class="tnp-submit" type="submit" value="Subscribe"  />
</div>
</form>    <div class="cms-pp empty-none text-14 text-white pt-15">
        <span class="pp-text">By subscribing, you accept the</span>
        <a class="pp-link cms-hover-underline text-white text-hover-white" href="/privacy-policy">Privacy Policy</a>    </div>
</div>				</div>
                </div>
                <div class="elementor-element elementor-element-f17ab62 pt-15 elementor-widget elementor-widget-cms_gallery" data-id="f17ab62" data-element_type="widget" data-widget_type="cms_gallery.default">
                <div class="elementor-widget-container">
                    <div class="cms-egallery cms-egallery-2" data-show="5" data-loadmore="5">
    <div class="cms-images-light-box d-flex gap-5 flex-col-auto flex-col-smobile-auto">
                    <div class="cms-gallery-item">
                <img width="38" height="24" src="wp-content/uploads/elementor/thumbs/Visa-Card-qyz0f11fb98kg8soiitci2q4yq7gmuk1h7ryhjh10w.png" alt="Visa-Card" class="cms-lazy lazy-loading" loading="lazy" />            </div>
                    <div class="cms-gallery-item">
                <img width="38" height="24" src="wp-content/uploads/elementor/thumbs/Master-Card-qyz0f11fb98kg8soiitci2q4yq7gmuk1h7ryhjh10w.png" alt="Master-Card" class="cms-lazy lazy-loading" loading="lazy" />            </div>
                    <div class="cms-gallery-item">
                <img width="38" height="24" src="wp-content/uploads/elementor/thumbs/American-Express-qyz0f11fb98kg8soiitci2q4yq7gmuk1h7ryhjh10w.png" alt="American-Express" class="cms-lazy lazy-loading" loading="lazy" />            </div>
                    <div class="cms-gallery-item">
                <img width="38" height="24" src="wp-content/uploads/elementor/thumbs/Dinner-Club-qyz0f11fb98kg8soiitci2q4yq7gmuk1h7ryhjh10w.png" alt="Dinner-Club" class="cms-lazy lazy-loading" loading="lazy" />            </div>
                    <div class="cms-gallery-item">
                <img width="38" height="24" src="wp-content/uploads/elementor/thumbs/Discover-qyz0f11fb98kg8soiitci2q4yq7gmuk1h7ryhjh10w.png" alt="Discover" class="cms-lazy lazy-loading" loading="lazy" />            </div>
            </div>
    </div>				</div>
                </div>
                </div>
                    </div>
                </div>
        <div class="elementor-element elementor-element-6756b22 bg-primary-darken pb-25 e-flex e-con-boxed e-con e-parent" data-id="6756b22" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                    <div class="e-con-inner">
                <div class="elementor-element elementor-element-4758e4e pb-30 elementor-widget__width-inherit elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="4758e4e" data-element_type="widget" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                            <div class="elementor-divider">
            <span class="elementor-divider-separator">
                        </span>
        </div>
                        </div>
                </div>
                <div class="elementor-element elementor-element-bd3ac48 text-15 pt-mobile-extra-20 elementor-widget__width-initial text-mobile_extra-center text-mobile-center elementor-widget-mobile_extra__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-cms_copyright" data-id="bd3ac48" data-element_type="widget" data-widget_type="cms_copyright.default">
                <div class="elementor-widget-container">
                    <div class="cms-ecopyright cms-ecopyright-1 text-white">
©2025 FaClothing, All Rights Reserved.  </div>				</div>
                </div>
                <div class="elementor-element elementor-element-ca5fb0a text-uppercase ls-06 text-15 elementor-widget__width-initial elementor-widget-mobile_extra__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-cms_navigation_menu" data-id="ca5fb0a" data-element_type="widget" data-widget_type="cms_navigation_menu.default">
                <div class="elementor-widget-container">
                        <div class="cms-emenu cms-emenu-3">
        <ul id="menu-footer-menu" class="cms-menu cms-menu-horz justify-content-end justify-content-mobile-extra-center justify-content-mobile-center"><li id="menu-item-98" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"><a href="/terms-and-condition" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Terms &#038; Conditions</span></a></li>
<li id="menu-item-99" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-99"><a rel="privacy-policy" href="/privacy-policy" class="cms-menu-link text-white text-hover-white"><span class="menu-title title">Privacy Policies</span></a></li>

</ul>	</div>
                </div>
                </div>
                    </div>
                </div>
                </div>
        </footer>
    </>
  );
};

export default Footer2;
