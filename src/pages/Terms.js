
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./Footer";
import Header from "./Header";


const Terms = () => {
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

<div id="cms-ptitle" class="cms-ptitle text-center" >
        <div class="container-fluid relative z-top">
            <h1 class="title


        ">Terms & Conditions</h1>			<ul class="cms-breadcrumb unstyled justify-content-center"><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/">Home</a></li><li><a class="breadcrumb-entry" href="https://7oroofthemes.com/trevox/shop/">Shop</a></li><li><span class="breadcrumb-entry">Privacy Policies</span></li></ul>        </div>
    </div>
    <main id="cms-main" class="cms-main container no-sidebar" style={{color: "black"}} ><h2>Who we are</h2>
<p class="privacy-policy-tutorial">In this section you should note your site URL, as well as the name of the company, organization, or individual behind it, and some accurate contact information.</p>
<p class="privacy-policy-tutorial">The amount of information you may be required to show will vary depending on your local or national business regulations. You may, for example, be required to display a physical address, a registered address, or your company registration number.</p>
<h2>What personal data we collect and why we collect it</h2>
<p class="privacy-policy-tutorial">In this section you should note what personal data you collect from users and site visitors. This may include personal data, such as name, email address, personal account preferences; transactional data, such as purchase information; and technical data, such as information about cookies.</p>
<p class="privacy-policy-tutorial">You should also note any collection and retention of sensitive personal data, such as data concerning health.</p>
<p class="privacy-policy-tutorial">In addition to listing what personal data you collect, you need to note why you collect it. These explanations must note either the legal basis for your data collection and retention or the active consent the user has given.</p>
<p class="privacy-policy-tutorial">Personal data is not just created by a user’s interactions with your site. Personal data is also generated from technical processes such as contact forms, comments, cookies, analytics, and third party embeds.</p>
<p class="privacy-policy-tutorial">By default WordPress does not collect any personal data about visitors, and only collects the data shown on the User Profile screen from registered users. However some of your plugins may collect personal data. You should add the relevant information below.</p>
<h2>Comments</h2>
<p class="privacy-policy-tutorial">In this subsection you should note what information is captured through comments. We have noted the data which WordPress collects by default.</p>
<h2>Media</h2>
<p class="privacy-policy-tutorial">In this subsection you should note what information may be disclosed by users who can upload media files. All uploaded files are usually publicly accessible.</p>
<h2>Contact forms</h2>
<p class="privacy-policy-tutorial">By default, WordPress does not include a contact form. If you use a contact form plugin, use this subsection to note what personal data is captured when someone submits a contact form, and how long you keep it. For example, you may note that you keep contact form submissions for a certain period for customer service purposes, but you do not use the information submitted through them for marketing purposes.</p>
<h2>Cookies</h2>
<p class="privacy-policy-tutorial">In this subsection you should list the cookies your web site uses, including those set by your plugins, social media, and analytics. We have provided the cookies which WordPress installs by default.</p>
<h2>Analytics</h2>
<p class="privacy-policy-tutorial">In this subsection you should note what analytics package you use, how users can opt out of analytics tracking, and a link to your analytics provider’s privacy policy, if any.</p>
<p class="privacy-policy-tutorial">By default WordPress does not collect any analytics data. However, many web hosting accounts collect some anonymous analytics data. You may also have installed a WordPress plugin that provides analytics services. In that case, add information from that plugin here.</p>
<h2>Who we share your data with</h2>
<p class="privacy-policy-tutorial">In this section you should name and list all third party providers with whom you share site data, including partners, cloud-based services, payment processors, and third party service providers, and note what data you share with them and why. Link to their own privacy policies if possible.</p>
<p class="privacy-policy-tutorial">By default WordPress does not share any personal data with anyone.</p>
<h2>How long we retain your data</h2>
<p class="privacy-policy-tutorial">In this section you should explain how long you retain personal data collected or processed by the web site. While it is your responsibility to come up with the schedule of how long you keep each dataset for and why you keep it, that information does need to be listed here. For example, you may want to say that you keep contact form entries for six months, analytics records for a year, and customer purchase records for ten years.</p>
<h2>What rights you have over your data</h2>
<p class="privacy-policy-tutorial">In this section you should explain what rights your users have over their data and how they can invoke those rights.</p>
<h2>Where your data is sent</h2>
<p class="privacy-policy-tutorial">In this section you should list all transfers of your site data outside the European Union and describe the means by which that data is safeguarded to European data protection standards. This could include your web hosting, cloud storage, or other third party services.</p>
<p class="privacy-policy-tutorial">European data protection law requires data about European residents which is transferred outside the European Union to be safeguarded to the same standards as if the data was in Europe. So in addition to listing where data goes, you should describe how you ensure that these standards are met either by yourself or by your third party providers, whether that is through an agreement such as Privacy Shield, model clauses in your contracts, or binding corporate rules.</p>
<h2>Contact information</h2>
<p class="privacy-policy-tutorial">In this section you should provide a contact method for privacy-specific concerns. If you are required to have a Data Protection Officer, list their name and full contact details here as well.</p>
<h2>Additional information</h2>
<p class="privacy-policy-tutorial">If you use your site for commercial purposes and you engage in more complex collection or processing of personal data, you should note the following information in your privacy policy in addition to the information we have already discussed.</p>
<h2>How we protect your data</h2>
<p class="privacy-policy-tutorial">In this section you should explain what measures you have taken to protect your users’ data. This could include technical measures such as encryption; security measures such as two factor authentication; and measures such as staff training in data protection. If you have carried out a Privacy Impact Assessment, you can mention it here too.</p>
<h2>What data breach procedures we have in place</h2>
<p class="privacy-policy-tutorial">In this section you should explain what procedures you have in place to deal with data breaches, either potential or real, such as internal reporting systems, contact mechanisms, or bug bounties.</p>
<h2>What third parties we receive data from</h2>
<p class="privacy-policy-tutorial">If your web site receives data about users from third parties, including advertisers, this information must be included within the section of your privacy policy dealing with third party data.</p>
<h2>What automated decision making and/or profiling we do with user data</h2>
<p class="privacy-policy-tutorial">If your web site provides a service which includes automated decision making – for example, allowing customers to apply for credit, or aggregating their data into an advertising profile – you must note that this is taking place, and include information about how that information is used, what decisions are made with that aggregated data, and what rights users have over decisions made without human intervention.</p>
<h2>Industry regulatory disclosure requirements</h2>
<p class="privacy-policy-tutorial">If you are a member of a regulated industry, or if you are subject to additional privacy laws, you may be required to disclose that information here.</p>
</main>

   <Footer />

    </div>
 
  );
};

export default Terms;
