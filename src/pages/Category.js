import React, { Fragment, useState, useEffect, useRef } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

// import "./Home.css"

import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";

const Category = () => {

  return (
    <div>
    <Header2 />
   <body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US USD NG bg-white guest wt-focus-visible" data-language="en-US" data-currency="USD" data-region="NG" data-hover-none="true" data-visual-focus-state="true" data-mobile-viewport-height="true">


     
        <main id="content">
            <div data-async-nlp-modules="" class="wt-pl-md-3 wt-pr-md-3 wt-pb-xs-4 wt-body-max-width">
    
    <div class="wt-display-flex-xs wt-mt-lg-4 wt-mt-xs-3 wt-align-items-baseline wt-justify-content-center">
        <h1 class="wt-text-black wt-text-heading-large">
            Dance Essentials
        </h1>
    </div>
    <h2 class="wt-text-body wt-text-black wt-text-center-xs wt-mt-xs-1">
    
        
</h2>
    
    
    <div class="wt-pb-xs-3 wt-pt-xs-3 wt-pt-lg-4">
        <div class="nlp-filters-rail wt-display-flex-xs wt-flex-direction-row ">
    <div data-clg-id="WtPanelAnchoredWithTrigger" id="nlp-price-pill" class="wt-panel-with-trigger wt-pr-xs-2" data-type="enclosing"><div class="wt-panel__trigger-container"><button type="button" class="nlp-filter-pill wt-menu__trigger wt-btn wt-btn--small wt-btn--secondary wt-no-wrap top-filter-menu wt-height-full" data-wt-panel-trigger="" aria-expanded="false"><span class="wt-menu__trigger__label wt-text-truncate"><span data-menu-title="">Price ($)</span></span> <span class="etsy-icon wt-menu__trigger__caret wt-icon--smaller top-filters__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></button></div></div>
    <button data-clg-id="WtButton" class="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2" id="nlp-sale-pill">
            On sale

</button>
    <button data-clg-id="WtButton" class="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2" id="nlp-stash-pill">
            Etsy's Picks

</button>
    <div data-clg-id="WtPanelAnchoredWithTrigger" id="nlp-ships-from-pill" class="wt-panel-with-trigger wt-pr-xs-2" data-type="enclosing"><div class="wt-panel__trigger-container"><button type="button" class="nlp-filter-pill wt-menu__trigger wt-btn wt-btn--small wt-btn--secondary wt-no-wrap top-filter-menu wt-height-full" data-wt-panel-trigger="" aria-expanded="false"><span class="wt-menu__trigger__label wt-text-truncate"><span data-menu-title="">Ships from</span></span> <span class="etsy-icon wt-menu__trigger__caret wt-icon--smaller top-filters__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg></span></button></div></div>
    
</div>
    </div>
    <div id="nlp-listing-grid-container">
        <div class="wt-m-xs-0 wt-p-xs-0 wt-overflow-hidden">
    
    <ul class="responsive-listing-grid wt-grid wt-grid--block wt-justify-content-flex-start wt-list-unstyled wt-pl-xs-0">
    <li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1542627936" data-shop-id="6148434" data-listing-id="1542627936" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1542627936" data-palette-listing-image="" href="https://www.etsy.com/listing/1542627936/dancing-dude-screen-print?click_key=d323708232e48ed898c7416d4763a69e%3ALT0491a1b65912899a9f0fd2a2e95b32de2a8a823b&amp;click_sum=2ef93b15&amp;ls=r&amp;ref=rlp-listing-grid-1&amp;external=1&amp;space_id=1368497667979&amp;cns=1&amp;content_source=d323708232e48ed898c7416d4763a69e%253ALT0491a1b65912899a9f0fd2a2e95b32de2a8a823b" data-listing-link="" data-impression-attribution-key="" data-impression-id="1542627936" data-impression-type="listing" data-display-loc="w.1-1" data-index="0" data-logging-key="d323708232e48ed898c7416d4763a69e:LT0491a1b65912899a9f0fd2a2e95b32de2a8a823b" target="etsy.1542627936" title="Dancing dude screen print">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square 
                
                
                ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-1 wt-image--cover wt-image" src="https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_300x300.5244394020_k6cg.jpg" alt="Dancing dude screen print" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_300x300.5244394020_k6cg.jpg 300w, https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_600x600.5244394020_k6cg.jpg 600w, https://i.etsystatic.com/6148434/r/il/53e2d6/5244394020/il_800x800.5244394020_k6cg.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1542627936">
                Dancing dude screen print
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 398 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(398)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate keg7kF44I9 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bmrcbo5d4" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by thehungryfox
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">Ad<span class="cd8fe9c17">vertisement</span> from shop thehungryfox</span>
              <span class="qz4b93tkc" aria-hidden="true">
                    thehungryfox
              </span>
              <span class="qz4b93tkc wt-screen-reader-only">From shop thehungryfox</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">30.00</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                <div class="wt-text-brick lc-half-unit-mt wt-text-caption">
    Only 3 left — order soon
</div>
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1542627936" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="d323708232e48ed898c7416d4763a69e:LT0491a1b65912899a9f0fd2a2e95b32de2a8a823b">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1732772584" data-shop-id="6090048" data-listing-id="1732772584" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1732772584" data-palette-listing-image="" href="https://www.etsy.com/listing/1732772584/fringed-fluffy-chenille-ballerina-dancer?click_key=453996adee0323bbb17c068f1f702de1%3ALTb0b689e92c4475e78f6c86a0594730bcfd6d9dbe&amp;click_sum=f50e1b13&amp;ls=r&amp;ref=rlp-listing-grid-2&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTb0b689e92c4475e78f6c86a0594730bcfd6d9dbe" data-listing-link="" data-impression-attribution-key="" data-impression-id="1732772584" data-impression-type="listing" data-display-loc="w.1-1" data-index="0" data-logging-key="453996adee0323bbb17c068f1f702de1:LTb0b689e92c4475e78f6c86a0594730bcfd6d9dbe" target="etsy.1732772584" title="Fringed fluffy chenille ballerina dancer machine embroidery designs for hoop 4x4 and 5x7 fringe fluffy girl skirt tutu Single Ballerina girl">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-2 wt-image--cover wt-image" src="https://i.etsystatic.com/6090048/r/il/714e0e/6057654210/il_300x300.6057654210_st9k.jpg" alt="Fringed fluffy chenille ballerina dancer machine embroidery designs for hoop 4x4 and 5x7 fringe fluffy girl skirt tutu Single Ballerina girl" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/6090048/r/il/714e0e/6057654210/il_300x300.6057654210_st9k.jpg 300w, https://i.etsystatic.com/6090048/r/il/714e0e/6057654210/il_600x600.6057654210_st9k.jpg 600w, https://i.etsystatic.com/6090048/r/il/714e0e/6057654210/il_800x800.6057654210_st9k.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right wt-display-none" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1732772584">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/trim.EC872924-7B0B-47CA-AAF2-031C38CDE68D_z5h0gj.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1732772584">
                Fringed fluffy chenille ballerina dancer machine embroidery designs for hoop 4x4 and 5x7 fringe fluffy girl skirt tutu Single Ballerina girl
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 45.9k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(45.9k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate d2oRoQO4Ez wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="lvm1h2hqn" aria-hidden="true">
                    ad <span class="bmrcbo5d4">vertisement</span> by artapli
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">Ad<span class="ba0ac7b57">vertisement</span> from shop artapli</span>
              <span class="zof5z176j" aria-hidden="true">
                    artapli
              </span>
              <span class="zof5z176j wt-screen-reader-only">From shop artapli</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">

                    <p class="wt-text-title-01 lc-price">
                        <span class="currency-symbol">USD </span><span class="currency-value">3.75</span>
                    </p>
                    <span class="wt-popover  wt-popover--top wt-width-full" data-wt-popover="">
    <button data-wt-popover-trigger="" class="wt-popover__trigger wt-popover__trigger--underline wt-width-full wt-text-caption wt-sem-text-secondary wt-display-block wt-text-truncate wt-display-inline-flex-xs wt-pl-xs-0 wt-pr-xs-0" aria-describedby="popover-content-1732772584">
        Eligible orders get 10% off
    </button>
    <span id="popover-content-1732772584" role="tooltip" class="wt-width-full">
            Spend USD 10.75 to get 10% off your order

    </span>
</span>


</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1732772584" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTb0b689e92c4475e78f6c86a0594730bcfd6d9dbe">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1226534278" data-shop-id="27595895" data-listing-id="1226534278" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1226534278" data-palette-listing-image="" href="https://www.etsy.com/listing/1226534278/sports-clipart-black-bold-word-dance-w?click_key=453996adee0323bbb17c068f1f702de1%3ALTa563f374604e2aff4aa07f1f11d3575459e80815&amp;click_sum=f0781ce8&amp;ls=r&amp;ref=rlp-listing-grid-3&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTa563f374604e2aff4aa07f1f11d3575459e80815" data-listing-link="" data-impression-attribution-key="" data-impression-id="1226534278" data-impression-type="listing" data-display-loc="w.1-2" data-index="1" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa563f374604e2aff4aa07f1f11d3575459e80815" target="etsy.1226534278" title="Sports Clipart: Black Bold Word &quot;Dance&quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-3 wt-image--cover wt-image" src="https://i.etsystatic.com/27595895/r/il/79cb49/3901475194/il_300x300.3901475194_jh51.jpg" alt="Sports Clipart: Black Bold Word &amp;quot;Dance&amp;quot; w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/27595895/r/il/79cb49/3901475194/il_300x300.3901475194_jh51.jpg 300w, https://i.etsystatic.com/27595895/r/il/79cb49/3901475194/il_600x600.3901475194_jh51.jpg 600w, https://i.etsystatic.com/27595895/r/il/79cb49/3901475194/il_800x800.3901475194_jh51.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1226534278">
                Sports Clipart: Black Bold Word "Dance" w/ Three Different Dancer / Ballerina Pastel Silhouettes Layered on Top - Digital Download SVG &amp; PNG
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 17.4k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(17.4k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate d2oRoQO4Ez wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="s1dljhoji" aria-hidden="true">
                    ad <span class="i2eazdbbj">vertisement</span> by ClipartWarehouse
              </span>
              <span class="s1dljhoji wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from shop ClipartWarehouse</span>
              <span class="v6cdcxmte" aria-hidden="true">
                    ClipartWarehouse
              </span>
              <span class="v6cdcxmte wt-screen-reader-only">From shop ClipartWarehouse</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.06</span>
                </p>
</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1226534278" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa563f374604e2aff4aa07f1f11d3575459e80815">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1397910793" data-shop-id="30923159" data-listing-id="1397910793" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1397910793" data-palette-listing-image="" href="https://www.etsy.com/listing/1397910793/edgar-degas-ballet-rehearsal?click_key=453996adee0323bbb17c068f1f702de1%3ALT30ea4d2729e43b22d0cc793ef12d858d1951aa14&amp;click_sum=bbdbadfc&amp;ls=r&amp;ref=rlp-listing-grid-4&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT30ea4d2729e43b22d0cc793ef12d858d1951aa14" data-listing-link="" data-impression-attribution-key="" data-impression-id="1397910793" data-impression-type="listing" data-display-loc="w.1-3" data-index="2" data-logging-key="453996adee0323bbb17c068f1f702de1:LT30ea4d2729e43b22d0cc793ef12d858d1951aa14" target="etsy.1397910793" title="Edgar Degas Ballet Rehearsal | Impressionist Ballerina Portrait Painting | Dance Art Print | Printable Wall Art | Digital Download">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder
                 placeholder-content placeholder-square 
                
                
                ">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-4 wt-image--cover wt-image" src="https://i.etsystatic.com/30923159/r/il/63d809/4591025577/il_300x300.4591025577_9q0i.jpg" alt="Edgar Degas Ballet Rehearsal | Impressionist Ballerina Portrait Painting | Dance Art Print | Printable Wall Art | Digital Download" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/30923159/r/il/63d809/4591025577/il_300x300.4591025577_9q0i.jpg 300w, https://i.etsystatic.com/30923159/r/il/63d809/4591025577/il_600x600.4591025577_9q0i.jpg 600w, https://i.etsystatic.com/30923159/r/il/63d809/4591025577/il_800x800.4591025577_9q0i.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1397910793">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/edgar-degas-the-ballet-rehearsal-1873_oocmsr.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1397910793">
                Edgar Degas Ballet Rehearsal | Impressionist Ballerina Portrait Painting | Dance Art Print | Printable Wall Art | Digital Download
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 3.3k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(3.3k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate q5JCKzpsUM wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="lvm1h2hqn" aria-hidden="true">
                    ad <span class="h56kdv9ur">vertisement</span> by VividArtSpace
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">Ad<span class="h04010657">vertisement</span> from shop VividArtSpace</span>
              <span class="mi9h246uu" aria-hidden="true">
                    VividArtSpace
              </span>
              <span class="mi9h246uu wt-screen-reader-only">From shop VividArtSpace</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 1.94
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">1.94</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">6.45</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 6.45
                            </span>
                            <span class="wt-text-grey ">
                                
                                (70% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1397910793" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT30ea4d2729e43b22d0cc793ef12d858d1951aa14">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1798066283" data-shop-id="22363238" data-listing-id="1798066283" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1798066283" data-palette-listing-image="" href="https://www.etsy.com/listing/1798066283/ballerina-clipart-watercolor-baby-shower?click_key=453996adee0323bbb17c068f1f702de1%3ALTe39d9605b99d5c4fa31e250292b2b586bef4960e&amp;click_sum=77e75d87&amp;ls=r&amp;ref=rlp-listing-grid-5&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTe39d9605b99d5c4fa31e250292b2b586bef4960e" data-listing-link="" data-impression-attribution-key="" data-impression-id="1798066283" data-impression-type="listing" data-display-loc="w.1-4" data-index="3" data-logging-key="453996adee0323bbb17c068f1f702de1:LTe39d9605b99d5c4fa31e250292b2b586bef4960e" target="etsy.1798066283" title="Ballerina clipart - Watercolor - Baby Shower - Nursery - Ballet - Swan - Png - Commercial license - Cute ballerina girls - Birthday clipart">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-5 wt-image--cover wt-image" src="https://i.etsystatic.com/22363238/c/2884/2884/57/57/il/bd76e6/6337929595/il_300x300.6337929595_lcts.jpg" alt="Ballerina clipart - Watercolor - Baby Shower - Nursery - Ballet - Swan - Png - Commercial license - Cute ballerina girls - Birthday clipart" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/22363238/c/2884/2884/57/57/il/bd76e6/6337929595/il_300x300.6337929595_lcts.jpg 300w, https://i.etsystatic.com/22363238/c/2884/2884/57/57/il/bd76e6/6337929595/il_600x600.6337929595_lcts.jpg 600w, https://i.etsystatic.com/22363238/c/2884/2884/57/57/il/bd76e6/6337929595/il_800x800.6337929595_lcts.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1798066283">
                Ballerina clipart - Watercolor - Baby Shower - Nursery - Ballet - Swan - Png - Commercial license - Cute ballerina girls - Birthday clipart
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 888 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(888)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate hUbqGguIbp wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="i2eazdbbj" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by ArrowlaneStudio
              </span>
              <span class="i2eazdbbj wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop ArrowlaneStudio</span>
              <span class="mi9h246uu" aria-hidden="true">
                    ArrowlaneStudio
              </span>
              <span class="mi9h246uu wt-screen-reader-only">From shop ArrowlaneStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 2.78
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">2.78</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">5.57</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 5.57
                            </span>
                            <span class="wt-text-grey ">
                                
                                (50% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1798066283" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTe39d9605b99d5c4fa31e250292b2b586bef4960e">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1744219059" data-shop-id="7961914" data-listing-id="1744219059" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1744219059" data-palette-listing-image="" href="https://www.etsy.com/listing/1744219059/large-snowflake-heavy-beading-3d-petal?click_key=453996adee0323bbb17c068f1f702de1%3ALTad1a1be3e2e7408fba91bf01c9a6531e7350169b&amp;click_sum=37427a2d&amp;ls=r&amp;ref=rlp-listing-grid-6&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTad1a1be3e2e7408fba91bf01c9a6531e7350169b" data-listing-link="" data-impression-attribution-key="" data-impression-id="1744219059" data-impression-type="listing" data-display-loc="w.1-5" data-index="4" data-logging-key="453996adee0323bbb17c068f1f702de1:LTad1a1be3e2e7408fba91bf01c9a6531e7350169b" target="etsy.1744219059" title="Large Snowflake Heavy Beading 3D Petal Applique, Multi-layers Rhinestones Sequin Bodice Patch for Lyrical Dance Costume, Bridal supply,1 Pcs">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-6 wt-image--cover wt-image" src="https://i.etsystatic.com/7961914/r/il/858d3e/6093795981/il_300x300.6093795981_l64s.jpg" alt="Large Snowflake Heavy Beading 3D Petal Applique, Multi-layers Rhinestones Sequin Bodice Patch for Lyrical Dance Costume, Bridal supply,1 Pcs" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/7961914/r/il/858d3e/6093795981/il_300x300.6093795981_l64s.jpg 300w, https://i.etsystatic.com/7961914/r/il/858d3e/6093795981/il_600x600.6093795981_l64s.jpg 600w, https://i.etsystatic.com/7961914/r/il/858d3e/6093795981/il_800x800.6093795981_l64s.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right wt-display-none" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1744219059">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/%E5%A4%9A%E8%89%B2%E9%9B%AA%E8%8A%B1-%E9%92%89%E7%8F%A0_eiobde.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1744219059">
                Large Snowflake Heavy Beading 3D Petal Applique, Multi-layers Rhinestones Sequin Bodice Patch for Lyrical Dance Costume, Bridal supply,1 Pcs
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 9.3k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(9.3k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gbqdswh1e" aria-hidden="true">
                    ad <span class="h56kdv9ur">vertisement</span> by prettylaceshop
              </span>
              <span class="gbqdswh1e wt-screen-reader-only">Ad<span class="b3a97a3bb">vertisement</span> from shop prettylaceshop</span>
              <span class="d7tsypjzz" aria-hidden="true">
                    prettylaceshop
              </span>
              <span class="d7tsypjzz wt-screen-reader-only">From shop prettylaceshop</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 4.76
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">4.76</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">6.70</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 6.70
                            </span>
                            <span class="wt-text-grey ">
                                
                                (29% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1744219059" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTad1a1be3e2e7408fba91bf01c9a6531e7350169b">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="560954791" data-shop-id="8055769" data-listing-id="560954791" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="560954791" data-palette-listing-image="" href="https://www.etsy.com/listing/560954791/black-ribbed-knitted-women-leg-warmers?click_key=453996adee0323bbb17c068f1f702de1%3ALT1589c800811db1688a980b0fd17b8d9cd726c783&amp;click_sum=a3f7016f&amp;ls=r&amp;ref=rlp-listing-grid-7&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT1589c800811db1688a980b0fd17b8d9cd726c783" data-listing-link="" data-impression-attribution-key="" data-impression-id="560954791" data-impression-type="listing" data-display-loc="w.1-6" data-index="5" data-logging-key="453996adee0323bbb17c068f1f702de1:LT1589c800811db1688a980b0fd17b8d9cd726c783" target="etsy.560954791" title="Black Ribbed Knitted Women Leg Warmers: Exercise, Dance, Yoga">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-7 wt-image--cover wt-image" src="https://i.etsystatic.com/8055769/r/il/19a860/1355911633/il_300x300.1355911633_ku1l.jpg" alt="Black Ribbed Knitted Women Leg Warmers: Exercise, Dance, Yoga" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/8055769/r/il/19a860/1355911633/il_300x300.1355911633_ku1l.jpg 300w, https://i.etsystatic.com/8055769/r/il/19a860/1355911633/il_600x600.1355911633_ku1l.jpg 600w, https://i.etsystatic.com/8055769/r/il/19a860/1355911633/il_800x800.1355911633_ku1l.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="560954791">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/2_idk6gs.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-560954791">
                Black Ribbed Knitted Women Leg Warmers: Exercise, Dance, Yoga
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 1.6k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.6k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate usxSl20Duw wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="wtt4jncv7" aria-hidden="true">
                    ad <span class="da8e3fpnq">vertisement</span> by FunnyBear
              </span>
              <span class="wtt4jncv7 wt-screen-reader-only">Ad<span class="b3a97a3bb">vertisement</span> from shop FunnyBear</span>
              <span class="fnn3b1of5" aria-hidden="true">
                    FunnyBear
              </span>
              <span class="fnn3b1of5 wt-screen-reader-only">From shop FunnyBear</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 19.50
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">19.50</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">26.00</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 26.00
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="560954791" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT1589c800811db1688a980b0fd17b8d9cd726c783">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1773691751" data-shop-id="50241992" data-listing-id="1773691751" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1773691751" data-palette-listing-image="" href="https://www.etsy.com/listing/1773691751/this-kitchen-is-for-dancing-print-hand?click_key=453996adee0323bbb17c068f1f702de1%3ALT0c5ee0c56ec8f371981375eff25947b019f541c4&amp;click_sum=a2fa1861&amp;ls=r&amp;ref=rlp-listing-grid-8&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT0c5ee0c56ec8f371981375eff25947b019f541c4" data-listing-link="" data-impression-attribution-key="" data-impression-id="1773691751" data-impression-type="listing" data-display-loc="w.1-7" data-index="6" data-logging-key="453996adee0323bbb17c068f1f702de1:LT0c5ee0c56ec8f371981375eff25947b019f541c4" target="etsy.1773691751" title="This Kitchen Is For Dancing Print, Hand Drawn Retro Kitchen Poster, Aesthetic Kitchen Decor Green Kitchen Wall Art, Trendy Kitchen Printable">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-8 wt-image--cover wt-image" src="https://i.etsystatic.com/50241992/c/1739/1739/107/114/il/f23725/6223905105/il_300x300.6223905105_hnh2.jpg" alt="This Kitchen Is For Dancing Print, Hand Drawn Retro Kitchen Poster, Aesthetic Kitchen Decor Green Kitchen Wall Art, Trendy Kitchen Printable" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/50241992/c/1739/1739/107/114/il/f23725/6223905105/il_300x300.6223905105_hnh2.jpg 300w, https://i.etsystatic.com/50241992/c/1739/1739/107/114/il/f23725/6223905105/il_600x600.6223905105_hnh2.jpg 600w, https://i.etsystatic.com/50241992/c/1739/1739/107/114/il/f23725/6223905105/il_800x800.6223905105_hnh2.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1773691751">
                This Kitchen Is For Dancing Print, Hand Drawn Retro Kitchen Poster, Aesthetic Kitchen Decor Green Kitchen Wall Art, Trendy Kitchen Printable
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 223 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(223)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate cTu0XRYS2t wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bmrcbo5d4" aria-hidden="true">
                    ad <span class="gbqdswh1e">vertisement</span> by TomeerkatPrintStudio
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">Ad<span class="lfc3d2d72">vertisement</span> from shop TomeerkatPrintStudio</span>
              <span class="adisx73rd" aria-hidden="true">
                    TomeerkatPrintStudio
              </span>
              <span class="adisx73rd wt-screen-reader-only">From shop TomeerkatPrintStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 7.26
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">7.26</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">9.68</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 9.68
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1773691751" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT0c5ee0c56ec8f371981375eff25947b019f541c4">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1708849036" data-shop-id="47865210" data-listing-id="1708849036" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1708849036" data-palette-listing-image="" href="https://www.etsy.com/listing/1708849036/henri-matisse-abstract-dance-poster?click_key=453996adee0323bbb17c068f1f702de1%3ALTb32c8c6e3048c4b5b9e4e4bc3084afef95f96634&amp;click_sum=4c81c622&amp;ls=r&amp;ref=rlp-listing-grid-9&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;frs=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTb32c8c6e3048c4b5b9e4e4bc3084afef95f96634" data-listing-link="" data-impression-attribution-key="" data-impression-id="1708849036" data-impression-type="listing" data-display-loc="w.1-8" data-index="7" data-logging-key="453996adee0323bbb17c068f1f702de1:LTb32c8c6e3048c4b5b9e4e4bc3084afef95f96634" target="etsy.1708849036" title="Henri Matisse Abstract Dance Poster, Colorful Modern Art Print, Dynamic Movement Wall Art, Energetic Home Decor, Contemporary Dance Art">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-9 wt-image--cover wt-image" src="https://i.etsystatic.com/47865210/r/il/7aff87/5954803880/il_300x300.5954803880_i02s.jpg" alt="Henri Matisse Abstract Dance Poster, Colorful Modern Art Print, Dynamic Movement Wall Art, Energetic Home Decor, Contemporary Dance Art" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/47865210/r/il/7aff87/5954803880/il_300x300.5954803880_i02s.jpg 300w, https://i.etsystatic.com/47865210/r/il/7aff87/5954803880/il_600x600.5954803880_i02s.jpg 600w, https://i.etsystatic.com/47865210/r/il/7aff87/5954803880/il_800x800.5954803880_i02s.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1708849036">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/matisse_dancers_video_rtbzag.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1708849036">
                Henri Matisse Abstract Dance Poster, Colorful Modern Art Print, Dynamic Movement Wall Art, Energetic Home Decor, Contemporary Dance Art
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 186 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(186)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate d2oRoQO4Ez wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="tibtcb6nb" aria-hidden="true">
                    ad <span class="bmrcbo5d4">vertisement</span> by PosterDrama
              </span>
              <span class="tibtcb6nb wt-screen-reader-only">Ad<span class="lfc3d2d72">vertisement</span> from shop PosterDrama</span>
              <span class="ppke9eh9h" aria-hidden="true">
                    PosterDrama
              </span>
              <span class="ppke9eh9h wt-screen-reader-only">From shop PosterDrama</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 14.62
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">14.62</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">19.50</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 19.50
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info ">
                        
                            
                        
                    
            
                    <div class="
    promotion-badge-line wt-display-flex-xs
    
    ">
    <p class="wt-text-truncate wt-text-caption-title">
            <span class="wt-badge wt-badge--small wt-badge--statusValue">
    FREE shipping
</span>
    </p>
</div>
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1708849036" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTb32c8c6e3048c4b5b9e4e4bc3084afef95f96634">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1734787098" data-shop-id="42575768" data-listing-id="1734787098" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1734787098" data-palette-listing-image="" href="https://www.etsy.com/listing/1734787098/ballerina-tumbler-wrap-design-ballet?click_key=453996adee0323bbb17c068f1f702de1%3ALT44649971f11ea51c052b4ab1aad0a0c24ef51659&amp;click_sum=9d9def4b&amp;ls=r&amp;ref=rlp-listing-grid-10&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT44649971f11ea51c052b4ab1aad0a0c24ef51659" data-listing-link="" data-impression-attribution-key="" data-impression-id="1734787098" data-impression-type="listing" data-display-loc="w.1-9" data-index="8" data-logging-key="453996adee0323bbb17c068f1f702de1:LT44649971f11ea51c052b4ab1aad0a0c24ef51659" target="etsy.1734787098" title="Ballerina Tumbler Wrap Design Ballet Dance Add Your Own Name/Text Seamless Sublimation 20 oz Skinny Tumbler PNG Instant Digital Download">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-10 wt-image--cover wt-image" src="https://i.etsystatic.com/42575768/r/il/14a235/6066515516/il_300x300.6066515516_cj77.jpg" alt="Ballerina Tumbler Wrap Design Ballet Dance Add Your Own Name/Text Seamless Sublimation 20 oz Skinny Tumbler PNG Instant Digital Download" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/42575768/r/il/14a235/6066515516/il_300x300.6066515516_cj77.jpg 300w, https://i.etsystatic.com/42575768/r/il/14a235/6066515516/il_600x600.6066515516_cj77.jpg 600w, https://i.etsystatic.com/42575768/r/il/14a235/6066515516/il_800x800.6066515516_cj77.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1734787098">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/03_-_Video_iysxzg.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1734787098">
                Ballerina Tumbler Wrap Design Ballet Dance Add Your Own Name/Text Seamless Sublimation 20 oz Skinny Tumbler PNG Instant Digital Download
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 1.7k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.7k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate fMgEiOOlBt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="s1dljhoji">vertisement</span> by ColorNookStudio
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="cd8fe9c17">vertisement</span> from shop ColorNookStudio</span>
              <span class="ppke9eh9h" aria-hidden="true">
                    ColorNookStudio
              </span>
              <span class="ppke9eh9h wt-screen-reader-only">From shop ColorNookStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 2.55
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">2.55</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">3.92</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 3.92
                            </span>
                            <span class="wt-text-grey ">
                                
                                (35% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1734787098" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT44649971f11ea51c052b4ab1aad0a0c24ef51659">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="261183780" data-shop-id="7566366" data-listing-id="261183780" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="261183780" data-palette-listing-image="" href="https://www.etsy.com/listing/261183780/ballet-shoe-necklace-gold-toe-shoe?click_key=453996adee0323bbb17c068f1f702de1%3ALT090538ede00009b515dfba1f35aceba13552c14f&amp;click_sum=8f0d7655&amp;ls=r&amp;ref=rlp-listing-grid-11&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT090538ede00009b515dfba1f35aceba13552c14f" data-listing-link="" data-impression-attribution-key="" data-impression-id="261183780" data-impression-type="listing" data-display-loc="w.1-10" data-index="9" data-logging-key="453996adee0323bbb17c068f1f702de1:LT090538ede00009b515dfba1f35aceba13552c14f" target="etsy.261183780" title="Ballet Shoe Necklace, Gold Toe Shoe Necklace, Ballerina Necklace, Gold Ballet Slipper Necklace, Silver Ballet Slipper, Little girl jewelry">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-11 wt-image--cover wt-image" src="https://i.etsystatic.com/7566366/c/995/995/0/165/il/477770/1342772114/il_300x300.1342772114_qzm6.jpg" alt="Ballet Shoe Necklace, Gold Toe Shoe Necklace, Ballerina Necklace, Gold Ballet Slipper Necklace, Silver Ballet Slipper, Little girl jewelry" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/7566366/c/995/995/0/165/il/477770/1342772114/il_300x300.1342772114_qzm6.jpg 300w, https://i.etsystatic.com/7566366/c/995/995/0/165/il/477770/1342772114/il_600x600.1342772114_qzm6.jpg 600w, https://i.etsystatic.com/7566366/c/995/995/0/165/il/477770/1342772114/il_800x800.1342772114_qzm6.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="261183780">
            <source src="https://v.etsystatic.com/video/upload/ac_none,c_crop,du_15,h_960,q_auto:good,w_720,x_0,y_0/IMG_9572_y1wab8" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-261183780">
                Ballet Shoe Necklace, Gold Toe Shoe Necklace, Ballerina Necklace, Gold Ballet Slipper Necklace, Silver Ballet Slipper, Little girl jewelry
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 10.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(10.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate busdQGEJdT wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="wtt4jncv7" aria-hidden="true">
                    ad <span class="gz59pzpqr">vertisement</span> by Designbydd
              </span>
              <span class="wtt4jncv7 wt-screen-reader-only">Ad<span class="d20953c2d">vertisement</span> from shop Designbydd</span>
              <span class="oidevvrdu" aria-hidden="true">
                    Designbydd
              </span>
              <span class="oidevvrdu wt-screen-reader-only">From shop Designbydd</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 34.30
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">34.30</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">49.00</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 49.00
                            </span>
                            <span class="wt-text-grey ">
                                
                                (30% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="261183780" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT090538ede00009b515dfba1f35aceba13552c14f">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1539393862" data-shop-id="46222224" data-listing-id="1539393862" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1539393862" data-palette-listing-image="" href="https://www.etsy.com/listing/1539393862/ballerina-hair-clip-o-alligator-clip-o?click_key=453996adee0323bbb17c068f1f702de1%3ALT7c95532c1939252c014dd3edb73e93223b2baf0b&amp;click_sum=4cd36225&amp;ls=r&amp;ref=rlp-listing-grid-12&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT7c95532c1939252c014dd3edb73e93223b2baf0b" data-listing-link="" data-impression-attribution-key="" data-impression-id="1539393862" data-impression-type="listing" data-display-loc="w.1-11" data-index="10" data-logging-key="453996adee0323bbb17c068f1f702de1:LT7c95532c1939252c014dd3edb73e93223b2baf0b" target="etsy.1539393862" title="Ballerina hair clip | Alligator Clip | Ballerina clay doll clip | Dance hair clip | Doll hair clips |Accessory hair | Valentine’s Day.">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-12 wt-image--cover wt-image" src="https://i.etsystatic.com/46222224/r/il/93bf96/6139974906/il_300x300.6139974906_g57d.jpg" alt="Ballerina hair clip | Alligator Clip | Ballerina clay doll clip | Dance hair clip | Doll hair clips |Accessory hair | Valentine’s Day." style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/46222224/r/il/93bf96/6139974906/il_300x300.6139974906_g57d.jpg 300w, https://i.etsystatic.com/46222224/r/il/93bf96/6139974906/il_600x600.6139974906_g57d.jpg 600w, https://i.etsystatic.com/46222224/r/il/93bf96/6139974906/il_800x800.6139974906_g57d.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1539393862">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_mqq592.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1539393862">
                Ballerina hair clip | Alligator Clip | Ballerina clay doll clip | Dance hair clip | Doll hair clips |Accessory hair | Valentine’s Day.
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 649 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(649)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate busdQGEJdT wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="lvm1h2hqn" aria-hidden="true">
                    ad <span class="s1dljhoji">vertisement</span> by LACAROTEI
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">Ad<span class="zea716bd2">vertisement</span> from shop LACAROTEI</span>
              <span class="q0vghi1o4" aria-hidden="true">
                    LACAROTEI
              </span>
              <span class="q0vghi1o4 wt-screen-reader-only">From shop LACAROTEI</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 13.42
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">13.42</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">17.90</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 17.90
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1539393862" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT7c95532c1939252c014dd3edb73e93223b2baf0b">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-12 wt-grid__item-md-12 wt-grid__item-lg-12 wt-order-xs-1 wt-order-md-1 wt-order-lg-1 search-grid-interstitial wt-show-xs wt-show-md wt-show-lg" data-grid-interstitial="">
    <div data-appears-component-name="rlp_interstitial" data-appears-event-data="{&quot;module_name&quot;:&quot;rlp_related_themes&quot;,&quot;index&quot;:1}">
<section class="appears-ready">
    <h2 class="wt-text-title-larger wt-text-center-xs wt-pb-xs-2 wt-pb-md-3 wt-pt-xs-3 wt-pt-lg-4">Explore related trends</h2>
    <div class="related-themes__container wt-pb-xs-4 wt-pb-lg-6 wt-pl-xs-4 wt-pr-xs-4">
        <div class="related-themes__item wt-display-flex-xs  wt-card  wt-justify-content-center">
    <a href="https://www.etsy.com/r/themes/1368461680516?ref=rlp_interstitial-spaces-1-1" class="wt-display-block wt-rounded-02 wt-overflow-hidden related-themes__clickable wt-b-xs wt-pb-xs-2">
        <div class="related-themes__images wt-display-flex-xs">
                <div>
                <img data-clg-id="WtImage" class="wt-image--cover wt-image" src="https://i.etsystatic.com/18487928/r/il/3ff630/4718479869/il_fullxfull.4718479869_2k4k.jpg" alt="Vintage Leather Gymnastics Bench Pommel Horse- brown original - 1930s Vintage home design decor - Vaulting horse - Gym equipment" style={{ aspectRatio: "1.25" }} sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, 16vw" srcset="https://i.etsystatic.com/18487928/r/il/3ff630/4718479869/il_340x270.4718479869_2k4k.jpg 340w, https://i.etsystatic.com/18487928/r/il/3ff630/4718479869/il_680x540.4718479869_2k4k.jpg 680w" />

                </div>
                <div>
                <img data-clg-id="WtImage" class="wt-image--cover wt-image" src="https://i.etsystatic.com/43107975/r/il/35b977/6356778988/il_fullxfull.6356778988_nqvk.jpg" alt="Brown gingham double layer scrunchie with beige and brown frill pleated lace trim - Handmade in UK" style={{ aspectRatio: "1.25" }} sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, 16vw" srcset="https://i.etsystatic.com/43107975/r/il/35b977/6356778988/il_340x270.6356778988_nqvk.jpg 340w, https://i.etsystatic.com/43107975/r/il/35b977/6356778988/il_680x540.6356778988_nqvk.jpg 680w" />

                </div>
        </div>
        <div class="related-themes__text-container wt-display-flex-xs wt-justify-content-space-between wt-pt-xs-2 wt-pr-xs-3 wt-pl-xs-3 wt-align-items-center">
          <p class="related-themes__title wt-text-title-small wt-flex-grow-1 wt-flex-shrink-0">Gymnastics Essentials</p>
          <p class="related-themes__subheading wt-text-body-small wt-flex-grow-1 wt-flex-shrink-1 wt-text-right-xs wt-text-truncate">Jump for joy</p>
        </div>
    </a>
</div><div class="related-themes__item wt-display-flex-xs  wt-card  wt-justify-content-center">
    <a href="https://www.etsy.com/r/themes/1368497643037?ref=rlp_interstitial-spaces-1-2" class="wt-display-block wt-rounded-02 wt-overflow-hidden related-themes__clickable wt-b-xs wt-pb-xs-2">
        <div class="related-themes__images wt-display-flex-xs">
                <div>
                <img data-clg-id="WtImage" class="wt-image--cover wt-image" src="https://i.etsystatic.com/44754548/r/il/1834d2/5533204055/il_fullxfull.5533204055_conv.jpg" alt="Disco Ball NYE Party Invitation | Gold Glitter (Digital Download)" style={{ aspectRatio: "1.25" }} sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, 16vw" srcset="https://i.etsystatic.com/44754548/r/il/1834d2/5533204055/il_340x270.5533204055_conv.jpg 340w, https://i.etsystatic.com/44754548/r/il/1834d2/5533204055/il_680x540.5533204055_conv.jpg 680w" />

                </div>
                <div>
                <img data-clg-id="WtImage" class="wt-image--cover wt-image" src="https://i.etsystatic.com/32948143/r/il/4ac63f/4426204905/il_fullxfull.4426204905_1awh.jpg" alt="Disco ball beret | Mirrorball hat | Disco hat | Disco Festival | Party hat | Mirror tile hat" style={{ aspectRatio: "1.25" }} sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, 16vw" srcset="https://i.etsystatic.com/32948143/r/il/4ac63f/4426204905/il_340x270.4426204905_1awh.jpg 340w, https://i.etsystatic.com/32948143/r/il/4ac63f/4426204905/il_680x540.4426204905_1awh.jpg 680w" />

                </div>
        </div>
        <div class="related-themes__text-container wt-display-flex-xs wt-justify-content-space-between wt-pt-xs-2 wt-pr-xs-3 wt-pl-xs-3 wt-align-items-center">
          <p class="related-themes__title wt-text-title-small wt-flex-grow-1 wt-flex-shrink-0">The New Year's Eve Disco</p>
          <p class="related-themes__subheading wt-text-body-small wt-flex-grow-1 wt-flex-shrink-1 wt-text-right-xs wt-text-truncate">Party all night long</p>
        </div>
    </a>
</div><div class="related-themes__item wt-display-flex-xs  wt-card  wt-justify-content-center">
    <a href="https://www.etsy.com/r/themes/1409604855542?ref=rlp_interstitial-spaces-1-3" class="wt-display-block wt-rounded-02 wt-overflow-hidden related-themes__clickable wt-b-xs wt-pb-xs-2">
        <div class="related-themes__images wt-display-flex-xs">
                <div>
                <img data-clg-id="WtImage" class="wt-image--cover wt-image" src="https://i.etsystatic.com/61243587/r/il/f857f0/7107012604/il_fullxfull.7107012604_5oo4.jpg" alt="Lock Keychain- Showgirl Era Inspired 3D Printed Bag Charm, Mini and Large Size" style={{ aspectRatio: "1.25" }} sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, 16vw" srcset="https://i.etsystatic.com/61243587/r/il/f857f0/7107012604/il_340x270.7107012604_5oo4.jpg 340w, https://i.etsystatic.com/61243587/r/il/f857f0/7107012604/il_680x540.7107012604_5oo4.jpg 680w" />

                </div>
                <div>
                <img data-clg-id="WtImage" class="wt-image--cover wt-image" src="https://i.etsystatic.com/7101060/r/il/fe2b70/7204670289/il_fullxfull.7204670289_ion7.jpg" alt="showgirl keychain, Showgirl, Bag Accessories, Showgirl Keychain, Custom Showgirl keychain, Personalized showgirl tag" style={{ aspectRatio: "1.25" }} sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, 16vw" srcset="https://i.etsystatic.com/7101060/r/il/fe2b70/7204670289/il_340x270.7204670289_ion7.jpg 340w, https://i.etsystatic.com/7101060/r/il/fe2b70/7204670289/il_680x540.7204670289_ion7.jpg 680w" />

                </div>
        </div>
        <div class="related-themes__text-container wt-display-flex-xs wt-justify-content-space-between wt-pt-xs-2 wt-pr-xs-3 wt-pl-xs-3 wt-align-items-center">
          <p class="related-themes__title wt-text-title-small wt-flex-grow-1 wt-flex-shrink-0">Showgirl Sparkle</p>
          <p class="related-themes__subheading wt-text-body-small wt-flex-grow-1 wt-flex-shrink-1 wt-text-right-xs wt-text-truncate">Fresh ideas for inspiration</p>
        </div>
    </a>
</div>
    </div>
</section>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1688653283" data-shop-id="36580358" data-listing-id="1688653283" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1688653283" data-palette-listing-image="" href="https://www.etsy.com/listing/1688653283/miniature-ballet-lesson-dance-ballerina?click_key=453996adee0323bbb17c068f1f702de1%3ALT0871f2ece4c018d55a2ff74fa8da15a02325968c&amp;click_sum=7a67b3c0&amp;ls=r&amp;ref=rlp-listing-grid-13&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT0871f2ece4c018d55a2ff74fa8da15a02325968c" data-listing-link="" data-impression-attribution-key="" data-impression-id="1688653283" data-impression-type="listing" data-display-loc="w.1-12" data-index="11" data-logging-key="453996adee0323bbb17c068f1f702de1:LT0871f2ece4c018d55a2ff74fa8da15a02325968c" target="etsy.1688653283" title="Miniature Ballet Lesson, Dance &amp; Ballerina Dollhouse Accessories, 1:12 Tutu, Ballet Slippers, Art, Tea Set, Computer, Gift Wrap, 80's Decor">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-13 wt-image--cover wt-image" src="https://i.etsystatic.com/36580358/r/il/bd09bd/6681638147/il_300x300.6681638147_q4rj.jpg" alt="Miniature Ballet Lesson, Dance &amp; Ballerina Dollhouse Accessories, 1:12 Tutu, Ballet Slippers, Art, Tea Set, Computer, Gift Wrap, 80&amp;#39;s Decor" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/36580358/r/il/bd09bd/6681638147/il_300x300.6681638147_q4rj.jpg 300w, https://i.etsystatic.com/36580358/r/il/bd09bd/6681638147/il_600x600.6681638147_q4rj.jpg 600w, https://i.etsystatic.com/36580358/r/il/bd09bd/6681638147/il_800x800.6681638147_q4rj.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1688653283">
                Miniature Ballet Lesson, Dance &amp; Ballerina Dollhouse Accessories, 1:12 Tutu, Ballet Slippers, Art, Tea Set, Computer, Gift Wrap, 80's Decor
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 7.9k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(7.9k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gbqdswh1e" aria-hidden="true">
                    ad <span class="lvm1h2hqn">vertisement</span> by LittleCatalogHouse
              </span>
              <span class="gbqdswh1e wt-screen-reader-only">Ad<span class="b3a97a3bb">vertisement</span> from shop LittleCatalogHouse</span>
              <span class="iti7duazu" aria-hidden="true">
                    LittleCatalogHouse
              </span>
              <span class="iti7duazu wt-screen-reader-only">From shop LittleCatalogHouse</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">1.75</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1688653283" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT0871f2ece4c018d55a2ff74fa8da15a02325968c">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="552292184" data-shop-id="15638204" data-listing-id="552292184" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="552292184" data-palette-listing-image="" href="https://www.etsy.com/listing/552292184/newsilk-ballet-slippe-ballet-shoes-doll?click_key=453996adee0323bbb17c068f1f702de1%3ALT01d400734bfa496ba39e70155ce1c03a658b1445&amp;click_sum=bb6d1058&amp;ls=r&amp;ref=rlp-listing-grid-14&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT01d400734bfa496ba39e70155ce1c03a658b1445" data-listing-link="" data-impression-attribution-key="" data-impression-id="552292184" data-impression-type="listing" data-display-loc="w.1-13" data-index="12" data-logging-key="453996adee0323bbb17c068f1f702de1:LT01d400734bfa496ba39e70155ce1c03a658b1445" target="etsy.552292184" title="New!Silk Ballet Slippe Ballet Shoes doll shoes for Blythe/DAL/Pullip/AzoneS/momoko/Jerryberry/licca/pureneemo S/1:8/OB11/Middie Blythe Doll">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-14 wt-image--cover wt-image" src="https://i.etsystatic.com/15638204/r/il/972863/1328531834/il_300x300.1328531834_le94.jpg" alt="New!Silk Ballet Slippe Ballet Shoes doll shoes for Blythe/DAL/Pullip/AzoneS/momoko/Jerryberry/licca/pureneemo S/1:8/OB11/Middie Blythe Doll" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/15638204/r/il/972863/1328531834/il_300x300.1328531834_le94.jpg 300w, https://i.etsystatic.com/15638204/r/il/972863/1328531834/il_600x600.1328531834_le94.jpg 600w, https://i.etsystatic.com/15638204/r/il/972863/1328531834/il_800x800.1328531834_le94.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-552292184">
                New!Silk Ballet Slippe Ballet Shoes doll shoes for Blythe/DAL/Pullip/AzoneS/momoko/Jerryberry/licca/pureneemo S/1:8/OB11/Middie Blythe Doll
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 2.8k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(2.8k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate laWph2mRJI wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="mk3wq84lo" aria-hidden="true">
                    ad <span class="da8e3fpnq">vertisement</span> by HousebyApple
              </span>
              <span class="mk3wq84lo wt-screen-reader-only">Ad<span class="d20953c2d">vertisement</span> from shop HousebyApple</span>
              <span class="moxjb3yfo" aria-hidden="true">
                    HousebyApple
              </span>
              <span class="moxjb3yfo wt-screen-reader-only">From shop HousebyApple</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">27.99</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="552292184" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT01d400734bfa496ba39e70155ce1c03a658b1445">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1319518463" data-shop-id="18634456" data-listing-id="1319518463" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1319518463" data-palette-listing-image="" href="https://www.etsy.com/listing/1319518463/pair-of-belly-dance-costume-silk-fan?click_key=453996adee0323bbb17c068f1f702de1%3ALTd3e6bcdbede8e7bb05472a7dd2f367e8e8dae4ff&amp;click_sum=a9811ca1&amp;ls=r&amp;ref=rlp-listing-grid-15&amp;external=1&amp;space_id=1368497667979&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTd3e6bcdbede8e7bb05472a7dd2f367e8e8dae4ff" data-listing-link="" data-impression-attribution-key="" data-impression-id="1319518463" data-impression-type="listing" data-display-loc="w.1-14" data-index="13" data-logging-key="453996adee0323bbb17c068f1f702de1:LTd3e6bcdbede8e7bb05472a7dd2f367e8e8dae4ff" target="etsy.1319518463" title="Pair of Belly Dance Costume Silk Fan Veils (Free Case)">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-15 wt-image--cover wt-image" src="https://i.etsystatic.com/18634456/r/il/f20756/6355172095/il_300x300.6355172095_rbsi.jpg" alt="Pair of Belly Dance Costume Silk Fan Veils (Free Case)" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/18634456/r/il/f20756/6355172095/il_300x300.6355172095_rbsi.jpg 300w, https://i.etsystatic.com/18634456/r/il/f20756/6355172095/il_600x600.6355172095_rbsi.jpg 600w, https://i.etsystatic.com/18634456/r/il/f20756/6355172095/il_800x800.6355172095_rbsi.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1319518463">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_ati8mc.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1319518463">
                Pair of Belly Dance Costume Silk Fan Veils (Free Case)
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 1.5k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.5k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate ycgpd9ufqt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gbqdswh1e" aria-hidden="true">
                    ad <span class="bmrcbo5d4">vertisement</span> by EvlinSilksUSA
              </span>
              <span class="gbqdswh1e wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from shop EvlinSilksUSA</span>
              <span class="d7tsypjzz" aria-hidden="true">
                    EvlinSilksUSA
              </span>
              <span class="d7tsypjzz wt-screen-reader-only">From shop EvlinSilksUSA</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">49.99</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1319518463" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTd3e6bcdbede8e7bb05472a7dd2f367e8e8dae4ff">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1812363757" data-shop-id="23758001" data-listing-id="1812363757" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1812363757" data-palette-listing-image="" href="https://www.etsy.com/listing/1812363757/toddler-child-dance-ballet-slipper-fairy?click_key=453996adee0323bbb17c068f1f702de1%3ALT9f3eb4cd22b3aa92ce394a836832437f263e13fe&amp;click_sum=f80c64a2&amp;ls=r&amp;ref=rlp-listing-grid-16&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT9f3eb4cd22b3aa92ce394a836832437f263e13fe" data-listing-link="" data-impression-attribution-key="" data-impression-id="1812363757" data-impression-type="listing" data-display-loc="w.1-15" data-index="14" data-logging-key="453996adee0323bbb17c068f1f702de1:LT9f3eb4cd22b3aa92ce394a836832437f263e13fe" target="etsy.1812363757" title="Toddler Child Dance Ballet Slipper Fairy Shoes Fairy costume professional toddler dance shoe dressup children party birthday">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-16 wt-image--cover wt-image" src="https://i.etsystatic.com/23758001/r/il/3fc345/6362504938/il_300x300.6362504938_8lrn.jpg" alt="Toddler Child Dance Ballet Slipper Fairy Shoes Fairy costume professional toddler dance shoe dressup children party birthday" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/23758001/r/il/3fc345/6362504938/il_300x300.6362504938_8lrn.jpg 300w, https://i.etsystatic.com/23758001/r/il/3fc345/6362504938/il_600x600.6362504938_8lrn.jpg 600w, https://i.etsystatic.com/23758001/r/il/3fc345/6362504938/il_800x800.6362504938_8lrn.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1812363757">
                Toddler Child Dance Ballet Slipper Fairy Shoes Fairy costume professional toddler dance shoe dressup children party birthday
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 7k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(7k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate fMgEiOOlBt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="wtt4jncv7" aria-hidden="true">
                    ad <span class="wtt4jncv7">vertisement</span> by Myniayahlace
              </span>
              <span class="wtt4jncv7 wt-screen-reader-only">Ad<span class="lfc3d2d72">vertisement</span> from shop Myniayahlace</span>
              <span class="ab6plv2cq" aria-hidden="true">
                    Myniayahlace
              </span>
              <span class="ab6plv2cq wt-screen-reader-only">From shop Myniayahlace</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">18.33</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1812363757" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT9f3eb4cd22b3aa92ce394a836832437f263e13fe">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1027778511" data-shop-id="25046089" data-listing-id="1027778511" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1027778511" data-palette-listing-image="" href="https://www.etsy.com/listing/1027778511/oasis-dance-if-you-wanna-dance-the?click_key=453996adee0323bbb17c068f1f702de1%3ALT4232ca1259b7b97d958997da122db16de7ecb411&amp;click_sum=65493441&amp;ls=r&amp;ref=rlp-listing-grid-17&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT4232ca1259b7b97d958997da122db16de7ecb411" data-listing-link="" data-impression-attribution-key="" data-impression-id="1027778511" data-impression-type="listing" data-display-loc="w.1-16" data-index="15" data-logging-key="453996adee0323bbb17c068f1f702de1:LT4232ca1259b7b97d958997da122db16de7ecb411" target="etsy.1027778511" title="Oasis | Dance If You Wanna Dance | The Masterplan | Gallagher Lyrics Print | A1 A2 A3 A4 A5 | Manchester Indie Rock Band Music Art | Poster">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-17 wt-image--cover wt-image" src="https://i.etsystatic.com/25046089/c/2631/2631/184/182/il/5f29f3/4991501205/il_300x300.4991501205_t61k.jpg" alt="Oasis | Dance If You Wanna Dance | The Masterplan | Gallagher Lyrics Print | A1 A2 A3 A4 A5 | Manchester Indie Rock Band Music Art | Poster" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/25046089/c/2631/2631/184/182/il/5f29f3/4991501205/il_300x300.4991501205_t61k.jpg 300w, https://i.etsystatic.com/25046089/c/2631/2631/184/182/il/5f29f3/4991501205/il_600x600.4991501205_t61k.jpg 600w, https://i.etsystatic.com/25046089/c/2631/2631/184/182/il/5f29f3/4991501205/il_800x800.4991501205_t61k.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1027778511">
                Oasis | Dance If You Wanna Dance | The Masterplan | Gallagher Lyrics Print | A1 A2 A3 A4 A5 | Manchester Indie Rock Band Music Art | Poster
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 1.4k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.4k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bmrcbo5d4" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by wildmoonstudiosuk
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">Ad<span class="d20953c2d">vertisement</span> from shop wildmoonstudiosuk</span>
              <span class="v6cdcxmte" aria-hidden="true">
                    wildmoonstudiosuk
              </span>
              <span class="v6cdcxmte wt-screen-reader-only">From shop wildmoonstudiosuk</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">9.61</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1027778511" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT4232ca1259b7b97d958997da122db16de7ecb411">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1144524644" data-shop-id="8896313" data-listing-id="1144524644" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1144524644" data-palette-listing-image="" href="https://www.etsy.com/listing/1144524644/handmade-vintage-style-little-ballerinas?click_key=453996adee0323bbb17c068f1f702de1%3ALT7861cff2a6c137b5d4666f5e9de3e3de34b2cafa&amp;click_sum=bd0a4b9f&amp;ls=r&amp;ref=rlp-listing-grid-18&amp;external=1&amp;space_id=1368497667979&amp;sca=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT7861cff2a6c137b5d4666f5e9de3e3de34b2cafa" data-listing-link="" data-impression-attribution-key="" data-impression-id="1144524644" data-impression-type="listing" data-display-loc="w.1-17" data-index="16" data-logging-key="453996adee0323bbb17c068f1f702de1:LT7861cff2a6c137b5d4666f5e9de3e3de34b2cafa" target="etsy.1144524644" title="Handmade Vintage Style Little Ballerinas and Friends Wood Signs/Shelf Sitters">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-18 wt-image--cover wt-image" src="https://i.etsystatic.com/8896313/r/il/dca166/5909197623/il_300x300.5909197623_gux8.jpg" alt="Handmade Vintage Style Little Ballerinas and Friends Wood Signs/Shelf Sitters" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/8896313/r/il/dca166/5909197623/il_300x300.5909197623_gux8.jpg 300w, https://i.etsystatic.com/8896313/r/il/dca166/5909197623/il_600x600.5909197623_gux8.jpg 600w, https://i.etsystatic.com/8896313/r/il/dca166/5909197623/il_800x800.5909197623_gux8.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1144524644">
                Handmade Vintage Style Little Ballerinas and Friends Wood Signs/Shelf Sitters
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 11.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(11.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate dRgs129Dl7 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="pxyglo796" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by JohnsonsCreative
              </span>
              <span class="pxyglo796 wt-screen-reader-only">Ad<span class="a3a8ad7a8">vertisement</span> from shop JohnsonsCreative</span>
              <span class="fi12bwbul" aria-hidden="true">
                    JohnsonsCreative
              </span>
              <span class="fi12bwbul wt-screen-reader-only">From shop JohnsonsCreative</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">7.50</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                <div class="wt-text-brick lc-half-unit-mt wt-text-caption">
    Only 3 left — order soon
</div>
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1144524644" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT7861cff2a6c137b5d4666f5e9de3e3de34b2cafa">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1742009574" data-shop-id="14395159" data-listing-id="1742009574" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1742009574" data-palette-listing-image="" href="https://www.etsy.com/listing/1742009574/editable-disco-party-birthday-invitation?click_key=453996adee0323bbb17c068f1f702de1%3ALT6c138058635b6800dec2d6aea833b2bd0c750c68&amp;click_sum=9f52e3c7&amp;ls=r&amp;ref=rlp-listing-grid-19&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT6c138058635b6800dec2d6aea833b2bd0c750c68" data-listing-link="" data-impression-attribution-key="" data-impression-id="1742009574" data-impression-type="listing" data-display-loc="w.1-18" data-index="17" data-logging-key="453996adee0323bbb17c068f1f702de1:LT6c138058635b6800dec2d6aea833b2bd0c750c68" target="etsy.1742009574" title="Editable Disco Party Birthday Invitation, Boy Disco Invites, Dance Party Template, Neon Party Invites Editable Glow Party instant download">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-19 wt-image--cover wt-image" src="https://i.etsystatic.com/14395159/r/il/c86bd4/6147465951/il_300x300.6147465951_7hmo.jpg" alt="Editable Disco Party Birthday Invitation, Boy Disco Invites, Dance Party Template, Neon Party Invites Editable Glow Party instant download" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/14395159/r/il/c86bd4/6147465951/il_300x300.6147465951_7hmo.jpg 300w, https://i.etsystatic.com/14395159/r/il/c86bd4/6147465951/il_600x600.6147465951_7hmo.jpg 600w, https://i.etsystatic.com/14395159/r/il/c86bd4/6147465951/il_800x800.6147465951_7hmo.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1742009574">
                Editable Disco Party Birthday Invitation, Boy Disco Invites, Dance Party Template, Neon Party Invites Editable Glow Party instant download
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 2.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(2.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="h56kdv9ur" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by OurHappyStudio
              </span>
              <span class="h56kdv9ur wt-screen-reader-only">Ad<span class="lfc3d2d72">vertisement</span> from shop OurHappyStudio</span>
              <span class="adisx73rd" aria-hidden="true">
                    OurHappyStudio
              </span>
              <span class="adisx73rd wt-screen-reader-only">From shop OurHappyStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 3.21
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">3.21</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">5.35</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 5.35
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1742009574" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT6c138058635b6800dec2d6aea833b2bd0c750c68">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="286704181" data-shop-id="10441058" data-listing-id="286704181" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="286704181" data-palette-listing-image="" href="https://www.etsy.com/listing/286704181/flamenco-wrap-skirt-long-ruffle-maxi?click_key=453996adee0323bbb17c068f1f702de1%3ALT56cf5d3f98acf950cdafc705735a4f3e794c53bc&amp;click_sum=7d9c7554&amp;ls=r&amp;ref=rlp-listing-grid-20&amp;external=1&amp;space_id=1368497667979&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT56cf5d3f98acf950cdafc705735a4f3e794c53bc" data-listing-link="" data-impression-attribution-key="" data-impression-id="286704181" data-impression-type="listing" data-display-loc="w.1-19" data-index="18" data-logging-key="453996adee0323bbb17c068f1f702de1:LT56cf5d3f98acf950cdafc705735a4f3e794c53bc" target="etsy.286704181" title="flamenco wrap skirt, long ruffle Maxi skirt, natural cotton. Wrap around long. One size long skirt. Natural cotton fabrics. ISO free.">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-20 wt-image--cover wt-image" src="https://i.etsystatic.com/10441058/r/il/8861ef/1499508207/il_300x300.1499508207_pubp.jpg" alt="flamenco wrap skirt, long ruffle Maxi skirt, natural cotton. Wrap around long. One size long skirt. Natural cotton fabrics. ISO free." style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/10441058/r/il/8861ef/1499508207/il_300x300.1499508207_pubp.jpg 300w, https://i.etsystatic.com/10441058/r/il/8861ef/1499508207/il_600x600.1499508207_pubp.jpg 600w, https://i.etsystatic.com/10441058/r/il/8861ef/1499508207/il_800x800.1499508207_pubp.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="286704181">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/VID_20230119_140229_ug16yb.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-286704181">
                flamenco wrap skirt, long ruffle Maxi skirt, natural cotton. Wrap around long. One size long skirt. Natural cotton fabrics. ISO free.
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.7
                </span>
            <div role="img" aria-label="4.7 star rating with 274 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(274)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate ycgpd9ufqt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="pxyglo796" aria-hidden="true">
                    ad <span class="bmrcbo5d4">vertisement</span> by MundoAnoushka
              </span>
              <span class="pxyglo796 wt-screen-reader-only">Ad<span class="c339c158c">vertisement</span> from shop MundoAnoushka</span>
              <span class="zecufapt1" aria-hidden="true">
                    MundoAnoushka
              </span>
              <span class="zecufapt1 wt-screen-reader-only">From shop MundoAnoushka</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">84.43</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="286704181" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT56cf5d3f98acf950cdafc705735a4f3e794c53bc">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1774677047" data-shop-id="20985777" data-listing-id="1774677047" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1774677047" data-palette-listing-image="" href="https://www.etsy.com/listing/1774677047/personalized-ballerina-tote-bag-kids?click_key=453996adee0323bbb17c068f1f702de1%3ALT8700af791afa4bb40762aa65f84cc38481edc9b7&amp;click_sum=d16a0151&amp;ls=r&amp;ref=rlp-listing-grid-21&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT8700af791afa4bb40762aa65f84cc38481edc9b7" data-listing-link="" data-impression-attribution-key="" data-impression-id="1774677047" data-impression-type="listing" data-display-loc="w.1-20" data-index="19" data-logging-key="453996adee0323bbb17c068f1f702de1:LT8700af791afa4bb40762aa65f84cc38481edc9b7" target="etsy.1774677047" title="Personalized Ballerina Tote Bag: Kids Dance Bag">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-21 wt-image--cover wt-image" src="https://i.etsystatic.com/20985777/c/2999/2999/0/0/il/75c021/6228478189/il_300x300.6228478189_73c2.jpg" alt="Personalized Ballerina Tote Bag: Kids Dance Bag" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/20985777/c/2999/2999/0/0/il/75c021/6228478189/il_300x300.6228478189_73c2.jpg 300w, https://i.etsystatic.com/20985777/c/2999/2999/0/0/il/75c021/6228478189/il_600x600.6228478189_73c2.jpg 600w, https://i.etsystatic.com/20985777/c/2999/2999/0/0/il/75c021/6228478189/il_800x800.6228478189_73c2.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1774677047">
                Personalized Ballerina Tote Bag: Kids Dance Bag
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 1.4k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.4k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate ycgpd9ufqt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gz59pzpqr" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by PetitRueDesigns
              </span>
              <span class="gz59pzpqr wt-screen-reader-only">Ad<span class="edad8e3d6">vertisement</span> from shop PetitRueDesigns</span>
              <span class="bvfko7q02" aria-hidden="true">
                    PetitRueDesigns
              </span>
              <span class="bvfko7q02 wt-screen-reader-only">From shop PetitRueDesigns</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 26.01
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">26.01</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">34.68</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 34.68
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1774677047" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT8700af791afa4bb40762aa65f84cc38481edc9b7">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="768531501" data-shop-id="21715430" data-listing-id="768531501" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="768531501" data-palette-listing-image="" href="https://www.etsy.com/listing/768531501/montessori-dancers-mobile-diy-kit-baby?click_key=453996adee0323bbb17c068f1f702de1%3ALT1e7f6819b8771e339788ff3208eab3a690fe2e5c&amp;click_sum=8ff00ccb&amp;ls=r&amp;ref=rlp-listing-grid-22&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT1e7f6819b8771e339788ff3208eab3a690fe2e5c" data-listing-link="" data-impression-attribution-key="" data-impression-id="768531501" data-impression-type="listing" data-display-loc="w.1-21" data-index="20" data-logging-key="453996adee0323bbb17c068f1f702de1:LT1e7f6819b8771e339788ff3208eab3a690fe2e5c" target="etsy.768531501" title="Montessori Dancers Mobile DIY Kit: Baby Sensory Toy for 3 Months, First Christmas Gift">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-22 wt-image--cover wt-image" src="https://i.etsystatic.com/21715430/r/il/11a599/7426894225/il_300x300.7426894225_cqen.jpg" alt="Montessori Dancers Mobile DIY Kit: Baby Sensory Toy for 3 Months, First Christmas Gift" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/21715430/r/il/11a599/7426894225/il_300x300.7426894225_cqen.jpg 300w, https://i.etsystatic.com/21715430/r/il/11a599/7426894225/il_600x600.7426894225_cqen.jpg 600w, https://i.etsystatic.com/21715430/r/il/11a599/7426894225/il_800x800.7426894225_cqen.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="768531501">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/DIY_Montessori_Dancers_listing_video_zrtlgl.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-768531501">
                Montessori Dancers Mobile DIY Kit: Baby Sensory Toy for 3 Months, First Christmas Gift
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 639 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(639)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="tibtcb6nb" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by MontessoriEdited
              </span>
              <span class="tibtcb6nb wt-screen-reader-only">Ad<span class="ba0ac7b57">vertisement</span> from shop MontessoriEdited</span>
              <span class="ab6plv2cq" aria-hidden="true">
                    MontessoriEdited
              </span>
              <span class="ab6plv2cq wt-screen-reader-only">From shop MontessoriEdited</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 12.96
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">12.96</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">16.62</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 16.62
                            </span>
                            <span class="wt-text-grey ">
                                
                                (22% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="768531501" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT1e7f6819b8771e339788ff3208eab3a690fe2e5c">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1724184487" data-shop-id="20166288" data-listing-id="1724184487" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1724184487" data-palette-listing-image="" href="https://www.etsy.com/listing/1724184487/personalised-dance-teacher-definition?click_key=453996adee0323bbb17c068f1f702de1%3ALTdeacc92f6ec9d57090ebedc5a69eddc763f33c15&amp;click_sum=d9bb6ef0&amp;ls=r&amp;ref=rlp-listing-grid-23&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTdeacc92f6ec9d57090ebedc5a69eddc763f33c15" data-listing-link="" data-impression-attribution-key="" data-impression-id="1724184487" data-impression-type="listing" data-display-loc="w.1-22" data-index="21" data-logging-key="453996adee0323bbb17c068f1f702de1:LTdeacc92f6ec9d57090ebedc5a69eddc763f33c15" target="etsy.1724184487" title="Personalised Dance Teacher Definition Print, Dance Teacher gift, Wall Art Quote, Dance Teacher Thank you Gift, Dictionary Print Leaving Gift">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-23 wt-image--cover wt-image" src="https://i.etsystatic.com/20166288/r/il/b14e1c/5959710248/il_300x300.5959710248_hxmb.jpg" alt="Personalised Dance Teacher Definition Print, Dance Teacher gift, Wall Art Quote, Dance Teacher Thank you Gift, Dictionary Print Leaving Gift" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/20166288/r/il/b14e1c/5959710248/il_300x300.5959710248_hxmb.jpg 300w, https://i.etsystatic.com/20166288/r/il/b14e1c/5959710248/il_600x600.5959710248_hxmb.jpg 600w, https://i.etsystatic.com/20166288/r/il/b14e1c/5959710248/il_800x800.5959710248_hxmb.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1724184487">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Copy_of_Untitled_1080_1080px_xdkxdt.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1724184487">
                Personalised Dance Teacher Definition Print, Dance Teacher gift, Wall Art Quote, Dance Teacher Thank you Gift, Dictionary Print Leaving Gift
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 3.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(3.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gz59pzpqr" aria-hidden="true">
                    ad <span class="h56kdv9ur">vertisement</span> by PrettilyPrintedx
              </span>
              <span class="gz59pzpqr wt-screen-reader-only">Ad<span class="h04010657">vertisement</span> from shop PrettilyPrintedx</span>
              <span class="plp2yfmc9" aria-hidden="true">
                    PrettilyPrintedx
              </span>
              <span class="plp2yfmc9 wt-screen-reader-only">From shop PrettilyPrintedx</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 6.17
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">6.17</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">6.86</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 6.86
                            </span>
                            <span class="wt-text-grey ">
                                
                                (10% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1724184487" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTdeacc92f6ec9d57090ebedc5a69eddc763f33c15">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-2 wt-order-md-2 wt-order-lg-2 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1868388405" data-shop-id="37178643" data-listing-id="1868388405" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1868388405" data-palette-listing-image="" href="https://www.etsy.com/listing/1868388405/girl-nursery-wall-art-prints-ballerina?click_key=453996adee0323bbb17c068f1f702de1%3ALT14f81d33b6b01a8683b87bd279e1c74259efad5e&amp;click_sum=fbd45830&amp;ls=r&amp;ref=rlp-listing-grid-24&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT14f81d33b6b01a8683b87bd279e1c74259efad5e" data-listing-link="" data-impression-attribution-key="" data-impression-id="1868388405" data-impression-type="listing" data-display-loc="w.1-23" data-index="22" data-logging-key="453996adee0323bbb17c068f1f702de1:LT14f81d33b6b01a8683b87bd279e1c74259efad5e" target="etsy.1868388405" title="Girl Nursery Wall Art Prints: Ballerina Bunny, Custom Name Sign, Playroom Decor (Digital Download)">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-24 wt-image--cover wt-image" src="https://i.etsystatic.com/37178643/r/il/7061f8/6663268013/il_300x300.6663268013_8xrn.jpg" alt="Girl Nursery Wall Art Prints: Ballerina Bunny, Custom Name Sign, Playroom Decor (Digital Download)" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/37178643/r/il/7061f8/6663268013/il_300x300.6663268013_8xrn.jpg 300w, https://i.etsystatic.com/37178643/r/il/7061f8/6663268013/il_600x600.6663268013_8xrn.jpg 600w, https://i.etsystatic.com/37178643/r/il/7061f8/6663268013/il_800x800.6663268013_8xrn.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1868388405">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/C%C3%B3pia_de_Design_sem_nome_1_mc3s04.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1868388405">
                Girl Nursery Wall Art Prints: Ballerina Bunny, Custom Name Sign, Playroom Decor (Digital Download)
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 3.6k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(3.6k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate fMgEiOOlBt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="wtt4jncv7" aria-hidden="true">
                    ad <span class="bsm0vib8s">vertisement</span> by SuArtPrintStudio
              </span>
              <span class="wtt4jncv7 wt-screen-reader-only">Ad<span class="zea716bd2">vertisement</span> from shop SuArtPrintStudio</span>
              <span class="d7tsypjzz" aria-hidden="true">
                    SuArtPrintStudio
              </span>
              <span class="d7tsypjzz wt-screen-reader-only">From shop SuArtPrintStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 7.77
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">7.77</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">15.56</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 15.56
                            </span>
                            <span class="wt-text-grey ">
                                
                                (50% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1868388405" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT14f81d33b6b01a8683b87bd279e1c74259efad5e">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-12 wt-grid__item-md-12 wt-grid__item-lg-12 wt-order-xs-3 wt-order-md-3 wt-order-lg-3 search-grid-interstitial--secondary wt-show-xs wt-show-md wt-show-lg" data-grid-interstitial--secondary="">
    <div data-neu-spec-placeholder="1" id="5f0b4e33cb2459e383dbbb2e1f5e7cdf">
 
    <div class="wt-body-max-width wt-display-flex-xs wt-flex-direction-column-xs wt-align-items-center wt-mt-xs-4 wt-mb-xs-4">
    <div class="wt-skeleton-ui wt-skeleton-ui--title-03 wt-skeleton-ui--width-40"> </div>
    <div class="wt-block-grid-xs-3 wt-block-grid-lg-6 wt-mt-xs-2">
        <div class="wt-block-grid__item suggested-search--grid-item">
            <div class="wt-skeleton-ui suggested-search--image-bubble wt-circle"></div>
        </div>
        <div class="wt-block-grid__item suggested-search--grid-item">
            <div class="wt-skeleton-ui suggested-search--image-bubble wt-circle"></div>
        </div>
        <div class="wt-block-grid__item suggested-search--grid-item">
            <div class="wt-skeleton-ui suggested-search--image-bubble wt-circle"></div>
        </div>
        <div class="wt-block-grid__item suggested-search--grid-item">
            <div class="wt-skeleton-ui suggested-search--image-bubble wt-circle"></div>
        </div>
        <div class="wt-block-grid__item suggested-search--grid-item">
            <div class="wt-skeleton-ui suggested-search--image-bubble wt-circle"></div>
        </div>
        <div class="wt-block-grid__item suggested-search--grid-item">
            <div class="wt-skeleton-ui suggested-search--image-bubble wt-circle"></div>
        </div>
    </div>
</div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1474006116" data-shop-id="16043163" data-listing-id="1474006116" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1474006116" data-palette-listing-image="" href="https://www.etsy.com/listing/1474006116/lets-dance-microphone-and-musical-notes?click_key=453996adee0323bbb17c068f1f702de1%3ALT57dd5f32ca9ca6b3b517642df8b08a36656f74e1&amp;click_sum=838b0ab7&amp;ls=r&amp;ref=rlp-listing-grid-25&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT57dd5f32ca9ca6b3b517642df8b08a36656f74e1" data-listing-link="" data-impression-attribution-key="" data-impression-id="1474006116" data-impression-type="listing" data-display-loc="w.1-24" data-index="23" data-logging-key="453996adee0323bbb17c068f1f702de1:LT57dd5f32ca9ca6b3b517642df8b08a36656f74e1" target="etsy.1474006116" title="Let's Dance Microphone and Musical Notes Party Garland, Disco Party Theme, 80's Party, 90's Party, Dancing Queen, Influencer Party Decor">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-25 wt-image--cover wt-image" src="https://i.etsystatic.com/16043163/r/il/d7a634/4933316572/il_300x300.4933316572_ja52.jpg" alt="Let&amp;#39;s Dance Microphone and Musical Notes Party Garland, Disco Party Theme, 80&amp;#39;s Party, 90&amp;#39;s Party, Dancing Queen, Influencer Party Decor" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/16043163/r/il/d7a634/4933316572/il_300x300.4933316572_ja52.jpg 300w, https://i.etsystatic.com/16043163/r/il/d7a634/4933316572/il_600x600.4933316572_ja52.jpg 600w, https://i.etsystatic.com/16043163/r/il/d7a634/4933316572/il_800x800.4933316572_ja52.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1474006116">
                Let's Dance Microphone and Musical Notes Party Garland, Disco Party Theme, 80's Party, 90's Party, Dancing Queen, Influencer Party Decor
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 9.3k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(9.3k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate dRgs129Dl7 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="pxyglo796" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by FiestaPartyStore
              </span>
              <span class="pxyglo796 wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop FiestaPartyStore</span>
              <span class="iti7duazu" aria-hidden="true">
                    FiestaPartyStore
              </span>
              <span class="iti7duazu wt-screen-reader-only">From shop FiestaPartyStore</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 6.80
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">6.80</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">7.56</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 7.56
                            </span>
                            <span class="wt-text-grey ">
                                
                                (10% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1474006116" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT57dd5f32ca9ca6b3b517642df8b08a36656f74e1">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1093278222" data-shop-id="25031192" data-listing-id="1093278222" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1093278222" data-palette-listing-image="" href="https://www.etsy.com/listing/1093278222/skirt-with-black-lace-tail?click_key=453996adee0323bbb17c068f1f702de1%3ALT9ff240cf16e729f1cc74aee5fd02da48810f040b&amp;click_sum=78a6a8fe&amp;ls=r&amp;ref=rlp-listing-grid-26&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT9ff240cf16e729f1cc74aee5fd02da48810f040b" data-listing-link="" data-impression-attribution-key="" data-impression-id="1093278222" data-impression-type="listing" data-display-loc="w.1-25" data-index="24" data-logging-key="453996adee0323bbb17c068f1f702de1:LT9ff240cf16e729f1cc74aee5fd02da48810f040b" target="etsy.1093278222" title="Skirt with black lace tail">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-26 wt-image--cover wt-image" src="https://i.etsystatic.com/25031192/r/il/005a1b/3463504411/il_300x300.3463504411_3czt.jpg" alt="Skirt with black lace tail" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/25031192/r/il/005a1b/3463504411/il_300x300.3463504411_3czt.jpg 300w, https://i.etsystatic.com/25031192/r/il/005a1b/3463504411/il_600x600.3463504411_3czt.jpg 600w, https://i.etsystatic.com/25031192/r/il/005a1b/3463504411/il_800x800.3463504411_3czt.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1093278222">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/lace_trianlge_HD_tlensl.mp4" type="video/mp4" /> 
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1093278222">
                Skirt with black lace tail
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 1.7k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.7k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate x1BJkyn3hm wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="wtt4jncv7" aria-hidden="true">
                    ad <span class="wtt4jncv7">vertisement</span> by TangoClothesBoutique
              </span>
              <span class="wtt4jncv7 wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop TangoClothesBoutique</span>
              <span class="q0vghi1o4" aria-hidden="true">
                    TangoClothesBoutique
              </span>
              <span class="q0vghi1o4 wt-screen-reader-only">From shop TangoClothesBoutique</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 45.25
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">45.25</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">60.34</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 60.34
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1093278222" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT9ff240cf16e729f1cc74aee5fd02da48810f040b">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1838545027" data-shop-id="46625304" data-listing-id="1838545027" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1838545027" data-palette-listing-image="" href="https://www.etsy.com/listing/1838545027/personalized-ballet-sweatshirt-ballet?click_key=453996adee0323bbb17c068f1f702de1%3ALT0f9c759ed4055b0b3f6b30612680c48b89268c61&amp;click_sum=427d359d&amp;ls=r&amp;ref=rlp-listing-grid-27&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT0f9c759ed4055b0b3f6b30612680c48b89268c61" data-listing-link="" data-impression-attribution-key="" data-impression-id="1838545027" data-impression-type="listing" data-display-loc="w.1-26" data-index="25" data-logging-key="453996adee0323bbb17c068f1f702de1:LT0f9c759ed4055b0b3f6b30612680c48b89268c61" target="etsy.1838545027" title="Personalized Ballet Sweatshirt, Ballet Shirt Gift For Dancer Ballerina Hoodie Ballet Dance Sweatshirt, Dancer Gift, Dance Teacher Shirt Gift">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-27 wt-image--cover wt-image" src="https://i.etsystatic.com/46625304/c/2201/2201/399/99/il/554926/6534718375/il_300x300.6534718375_d260.jpg" alt="Personalized Ballet Sweatshirt, Ballet Shirt Gift For Dancer Ballerina Hoodie Ballet Dance Sweatshirt, Dancer Gift, Dance Teacher Shirt Gift" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/46625304/c/2201/2201/399/99/il/554926/6534718375/il_300x300.6534718375_d260.jpg 300w, https://i.etsystatic.com/46625304/c/2201/2201/399/99/il/554926/6534718375/il_600x600.6534718375_d260.jpg 600w, https://i.etsystatic.com/46625304/c/2201/2201/399/99/il/554926/6534718375/il_800x800.6534718375_d260.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1838545027">
                Personalized Ballet Sweatshirt, Ballet Shirt Gift For Dancer Ballerina Hoodie Ballet Dance Sweatshirt, Dancer Gift, Dance Teacher Shirt Gift
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 462 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(462)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate ycgpd9ufqt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="lvm1h2hqn" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by ByTeeTrendy
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop ByTeeTrendy</span>
              <span class="h19hd6hqw" aria-hidden="true">
                    ByTeeTrendy
              </span>
              <span class="h19hd6hqw wt-screen-reader-only">From shop ByTeeTrendy</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 7.80
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">7.80</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">13.00</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 13.00
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1838545027" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT0f9c759ed4055b0b3f6b30612680c48b89268c61">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1565866682" data-shop-id="36080110" data-listing-id="1565866682" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1565866682" data-palette-listing-image="" href="https://www.etsy.com/listing/1565866682/crochet-doll-pattern-amigurumi-ballerina?click_key=453996adee0323bbb17c068f1f702de1%3ALTb216dd032b78c1035cb3b1d68c82ffb083f96e08&amp;click_sum=5b03564a&amp;ls=r&amp;ref=rlp-listing-grid-28&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTb216dd032b78c1035cb3b1d68c82ffb083f96e08" data-listing-link="" data-impression-attribution-key="" data-impression-id="1565866682" data-impression-type="listing" data-display-loc="w.1-27" data-index="26" data-logging-key="453996adee0323bbb17c068f1f702de1:LTb216dd032b78c1035cb3b1d68c82ffb083f96e08" target="etsy.1565866682" title="Crochet Doll Pattern: Amigurumi Ballerina (PDF Pattern)">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-28 wt-image--cover wt-image" src="https://i.etsystatic.com/36080110/r/il/e24fa1/5405097865/il_300x300.5405097865_3nob.jpg" alt="Crochet Doll Pattern: Amigurumi Ballerina (PDF Pattern)" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/36080110/r/il/e24fa1/5405097865/il_300x300.5405097865_3nob.jpg 300w, https://i.etsystatic.com/36080110/r/il/e24fa1/5405097865/il_600x600.5405097865_3nob.jpg 600w, https://i.etsystatic.com/36080110/r/il/e24fa1/5405097865/il_800x800.5405097865_3nob.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1565866682">
                Crochet Doll Pattern: Amigurumi Ballerina (PDF Pattern)
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 3.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(3.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate k5xlH6BzE2 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="s1dljhoji" aria-hidden="true">
                    ad <span class="s1dljhoji">vertisement</span> by CutePatternByYa
              </span>
              <span class="s1dljhoji wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop CutePatternByYa</span>
              <span class="qz4b93tkc" aria-hidden="true">
                    CutePatternByYa
              </span>
              <span class="qz4b93tkc wt-screen-reader-only">From shop CutePatternByYa</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 7.00
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">7.00</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">23.35</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 23.35
                            </span>
                            <span class="wt-text-grey ">
                                
                                (70% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1565866682" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTb216dd032b78c1035cb3b1d68c82ffb083f96e08">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1651861906" data-shop-id="24353859" data-listing-id="1651861906" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1651861906" data-palette-listing-image="" href="https://www.etsy.com/listing/1651861906/wedding-glow-stick-sign-template?click_key=453996adee0323bbb17c068f1f702de1%3ALT30efe3d13f18c1a078afe5207ffb62d089b3d5d3&amp;click_sum=009872db&amp;ls=r&amp;ref=rlp-listing-grid-29&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT30efe3d13f18c1a078afe5207ffb62d089b3d5d3" data-listing-link="" data-impression-attribution-key="" data-impression-id="1651861906" data-impression-type="listing" data-display-loc="w.1-28" data-index="27" data-logging-key="453996adee0323bbb17c068f1f702de1:LT30efe3d13f18c1a078afe5207ffb62d089b3d5d3" target="etsy.1651861906" title="Wedding glow stick sign template printable, modern light up the dance floor sign landscape, simple handwriting style, editable download BL46">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-29 wt-image--cover wt-image" src="https://i.etsystatic.com/24353859/c/1414/1414/292/0/il/3f204f/5755820839/il_300x300.5755820839_sq4f.jpg" alt="Wedding glow stick sign template printable, modern light up the dance floor sign landscape, simple handwriting style, editable download BL46" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/24353859/c/1414/1414/292/0/il/3f204f/5755820839/il_300x300.5755820839_sq4f.jpg 300w, https://i.etsystatic.com/24353859/c/1414/1414/292/0/il/3f204f/5755820839/il_600x600.5755820839_sq4f.jpg 600w, https://i.etsystatic.com/24353859/c/1414/1414/292/0/il/3f204f/5755820839/il_800x800.5755820839_sq4f.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1651861906">
                Wedding glow stick sign template printable, modern light up the dance floor sign landscape, simple handwriting style, editable download BL46
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 3.2k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(3.2k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate busdQGEJdT wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gbqdswh1e" aria-hidden="true">
                    ad <span class="h56kdv9ur">vertisement</span> by BetsyLilyDesigns
              </span>
              <span class="gbqdswh1e wt-screen-reader-only">Ad<span class="zea716bd2">vertisement</span> from shop BetsyLilyDesigns</span>
              <span class="ab6plv2cq" aria-hidden="true">
                    BetsyLilyDesigns
              </span>
              <span class="ab6plv2cq wt-screen-reader-only">From shop BetsyLilyDesigns</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 4.11
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">4.11</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">10.26</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 10.26
                            </span>
                            <span class="wt-text-grey ">
                                
                                (60% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1651861906" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT30efe3d13f18c1a078afe5207ffb62d089b3d5d3">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1042607041" data-shop-id="24155927" data-listing-id="1042607041" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1042607041" data-palette-listing-image="" href="https://www.etsy.com/listing/1042607041/and-5-6-7-8-shirt-cheerleader-shirt-8?click_key=453996adee0323bbb17c068f1f702de1%3ALT7af9708c5aef22e0224f925fe334963386076e52&amp;click_sum=339be05c&amp;ls=r&amp;ref=rlp-listing-grid-30&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT7af9708c5aef22e0224f925fe334963386076e52" data-listing-link="" data-impression-attribution-key="" data-impression-id="1042607041" data-impression-type="listing" data-display-loc="w.1-29" data-index="28" data-logging-key="453996adee0323bbb17c068f1f702de1:LT7af9708c5aef22e0224f925fe334963386076e52" target="etsy.1042607041" title="And 5 6 7 8 Shirt, Cheerleader Shirt, 8 Counts, Dance Shirt, 5678, Dance Teacher, Dance Mode, Dance Gift, Premium Mens Womens Unisex Shirt">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-30 wt-image--cover wt-image" src="https://i.etsystatic.com/24155927/r/il/69f988/3759359126/il_300x300.3759359126_mzba.jpg" alt="And 5 6 7 8 Shirt, Cheerleader Shirt, 8 Counts, Dance Shirt, 5678, Dance Teacher, Dance Mode, Dance Gift, Premium Mens Womens Unisex Shirt" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/24155927/r/il/69f988/3759359126/il_300x300.3759359126_mzba.jpg 300w, https://i.etsystatic.com/24155927/r/il/69f988/3759359126/il_600x600.3759359126_mzba.jpg 600w, https://i.etsystatic.com/24155927/r/il/69f988/3759359126/il_800x800.3759359126_mzba.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1042607041">
                And 5 6 7 8 Shirt, Cheerleader Shirt, 8 Counts, Dance Shirt, 5678, Dance Teacher, Dance Mode, Dance Gift, Premium Mens Womens Unisex Shirt
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 16k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(16k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate d2oRoQO4Ez wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="lvm1h2hqn" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by SeamsToBeShirts
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">Ad<span class="edad8e3d6">vertisement</span> from shop SeamsToBeShirts</span>
              <span class="mi9h246uu" aria-hidden="true">
                    SeamsToBeShirts
              </span>
              <span class="mi9h246uu wt-screen-reader-only">From shop SeamsToBeShirts</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 10.96
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">10.96</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">21.92</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 21.92
                            </span>
                            <span class="wt-text-grey ">
                                
                                (50% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1042607041" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT7af9708c5aef22e0224f925fe334963386076e52">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1719605051" data-shop-id="42758838" data-listing-id="1719605051" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1719605051" data-palette-listing-image="" href="https://www.etsy.com/listing/1719605051/ballet-nursery-wall-art-ballerina?click_key=453996adee0323bbb17c068f1f702de1%3ALTa9075f26e9c806d97a0d775c69c67d1bba8393c2&amp;click_sum=a4d5f0b1&amp;ls=r&amp;ref=rlp-listing-grid-31&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTa9075f26e9c806d97a0d775c69c67d1bba8393c2" data-listing-link="" data-impression-attribution-key="" data-impression-id="1719605051" data-impression-type="listing" data-display-loc="w.1-30" data-index="29" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa9075f26e9c806d97a0d775c69c67d1bba8393c2" target="etsy.1719605051" title="Ballet Nursery Wall Art, Ballerina Nursery Decor, Baby Girls Pink Ballet Nursery Prints, Ballet Gift, Girl Nursery Prints, Ballerina Prints">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-31 wt-image--cover wt-image" src="https://i.etsystatic.com/42758838/r/il/de431f/6879568289/il_300x300.6879568289_lny1.jpg" alt="Ballet Nursery Wall Art, Ballerina Nursery Decor, Baby Girls Pink Ballet Nursery Prints, Ballet Gift, Girl Nursery Prints, Ballerina Prints" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/42758838/r/il/de431f/6879568289/il_300x300.6879568289_lny1.jpg 300w, https://i.etsystatic.com/42758838/r/il/de431f/6879568289/il_600x600.6879568289_lny1.jpg 600w, https://i.etsystatic.com/42758838/r/il/de431f/6879568289/il_800x800.6879568289_lny1.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1719605051">
                Ballet Nursery Wall Art, Ballerina Nursery Decor, Baby Girls Pink Ballet Nursery Prints, Ballet Gift, Girl Nursery Prints, Ballerina Prints
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 608 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(608)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate usxSl20Duw wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="pxyglo796" aria-hidden="true">
                    ad <span class="wtt4jncv7">vertisement</span> by AlicesDesignsCo
              </span>
              <span class="pxyglo796 wt-screen-reader-only">Ad<span class="cd8fe9c17">vertisement</span> from shop AlicesDesignsCo</span>
              <span class="i756n8qyj" aria-hidden="true">
                    AlicesDesignsCo
              </span>
              <span class="i756n8qyj wt-screen-reader-only">From shop AlicesDesignsCo</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 7.71
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">7.71</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">12.86</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 12.86
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1719605051" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa9075f26e9c806d97a0d775c69c67d1bba8393c2">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1721365190" data-shop-id="11462593" data-listing-id="1721365190" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1721365190" data-palette-listing-image="" href="https://www.etsy.com/listing/1721365190/custom-ballerina-scrunchie-party-favor?click_key=453996adee0323bbb17c068f1f702de1%3ALT85611d9acf5402fe46978073b62244adf2a7f47a&amp;click_sum=52d98e8b&amp;ls=r&amp;ref=rlp-listing-grid-32&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT85611d9acf5402fe46978073b62244adf2a7f47a" data-listing-link="" data-impression-attribution-key="" data-impression-id="1721365190" data-impression-type="listing" data-display-loc="w.1-31" data-index="30" data-logging-key="453996adee0323bbb17c068f1f702de1:LT85611d9acf5402fe46978073b62244adf2a7f47a" target="etsy.1721365190" title="Custom Ballerina Scrunchie Party Favor: Personalized Ballet Gift">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-32 wt-image--cover wt-image" src="https://i.etsystatic.com/11462593/c/1775/1775/53/12/il/6cf4e8/6056252003/il_300x300.6056252003_6er7.jpg" alt="Custom Ballerina Scrunchie Party Favor: Personalized Ballet Gift" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/11462593/c/1775/1775/53/12/il/6cf4e8/6056252003/il_300x300.6056252003_6er7.jpg 300w, https://i.etsystatic.com/11462593/c/1775/1775/53/12/il/6cf4e8/6056252003/il_600x600.6056252003_6er7.jpg 600w, https://i.etsystatic.com/11462593/c/1775/1775/53/12/il/6cf4e8/6056252003/il_800x800.6056252003_6er7.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1721365190">
                Custom Ballerina Scrunchie Party Favor: Personalized Ballet Gift
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 23.4k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(23.4k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate usxSl20Duw wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="i2eazdbbj" aria-hidden="true">
                    ad <span class="i2eazdbbj">vertisement</span> by TheFavourHub
              </span>
              <span class="i2eazdbbj wt-screen-reader-only">Ad<span class="ba0ac7b57">vertisement</span> from shop TheFavourHub</span>
              <span class="d7tsypjzz" aria-hidden="true">
                    TheFavourHub
              </span>
              <span class="d7tsypjzz wt-screen-reader-only">From shop TheFavourHub</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 2.84
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">2.84</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">3.56</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 3.56
                            </span>
                            <span class="wt-text-grey ">
                                
                                (20% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1721365190" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT85611d9acf5402fe46978073b62244adf2a7f47a">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="560650161" data-shop-id="8055769" data-listing-id="560650161" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="560650161" data-palette-listing-image="" href="https://www.etsy.com/listing/560650161/green-ribbed-knitted-women-leg-warmers?click_key=453996adee0323bbb17c068f1f702de1%3ALT786364e55ba0b34e2919e9726cd6e735fcae75ac&amp;click_sum=5891b794&amp;ls=r&amp;ref=rlp-listing-grid-33&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT786364e55ba0b34e2919e9726cd6e735fcae75ac" data-listing-link="" data-impression-attribution-key="" data-impression-id="560650161" data-impression-type="listing" data-display-loc="w.1-32" data-index="31" data-logging-key="453996adee0323bbb17c068f1f702de1:LT786364e55ba0b34e2919e9726cd6e735fcae75ac" target="etsy.560650161" title="Green Ribbed Knitted Women  Leg Warmers: Yoga, Dance, Exercise">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-33 wt-image--cover wt-image" src="https://i.etsystatic.com/8055769/r/il/b38a3e/1355953977/il_300x300.1355953977_aa1g.jpg" alt="Green Ribbed Knitted Women  Leg Warmers: Yoga, Dance, Exercise" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/8055769/r/il/b38a3e/1355953977/il_300x300.1355953977_aa1g.jpg 300w, https://i.etsystatic.com/8055769/r/il/b38a3e/1355953977/il_600x600.1355953977_aa1g.jpg 600w, https://i.etsystatic.com/8055769/r/il/b38a3e/1355953977/il_800x800.1355953977_aa1g.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="560650161">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/2_fbgn5c.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-560650161">
                Green Ribbed Knitted Women  Leg Warmers: Yoga, Dance, Exercise
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 1.6k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.6k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate laWph2mRJI wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="i2eazdbbj" aria-hidden="true">
                    ad <span class="da8e3fpnq">vertisement</span> by FunnyBear
              </span>
              <span class="i2eazdbbj wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop FunnyBear</span>
              <span class="fi12bwbul" aria-hidden="true">
                    FunnyBear
              </span>
              <span class="fi12bwbul wt-screen-reader-only">From shop FunnyBear</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 19.50
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">19.50</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">26.00</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 26.00
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="560650161" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT786364e55ba0b34e2919e9726cd6e735fcae75ac">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1525460124" data-shop-id="21323644" data-listing-id="1525460124" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1525460124" data-palette-listing-image="" href="https://www.etsy.com/listing/1525460124/anna-pavlova-vintage-ballet-poster?click_key=453996adee0323bbb17c068f1f702de1%3ALT756ba6df38d821f91ac72932b36cb5dc409ab60f&amp;click_sum=1cd9a0d4&amp;ls=r&amp;ref=rlp-listing-grid-34&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;frs=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT756ba6df38d821f91ac72932b36cb5dc409ab60f" data-listing-link="" data-impression-attribution-key="" data-impression-id="1525460124" data-impression-type="listing" data-display-loc="w.1-33" data-index="32" data-logging-key="453996adee0323bbb17c068f1f702de1:LT756ba6df38d821f91ac72932b36cb5dc409ab60f" target="etsy.1525460124" title="Anna Pavlova Vintage Ballet Poster, Russian Ballet Art Print, Dance Wall Decor, Unique Housewarming Gift, Vibrant Living Room Wall, C16-895">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-34 wt-image--cover wt-image" src="https://i.etsystatic.com/21323644/r/il/d16168/5212680663/il_300x300.5212680663_9hic.jpg" alt="Anna Pavlova Vintage Ballet Poster, Russian Ballet Art Print, Dance Wall Decor, Unique Housewarming Gift, Vibrant Living Room Wall, C16-895" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/21323644/r/il/d16168/5212680663/il_300x300.5212680663_9hic.jpg 300w, https://i.etsystatic.com/21323644/r/il/d16168/5212680663/il_600x600.5212680663_9hic.jpg 600w, https://i.etsystatic.com/21323644/r/il/d16168/5212680663/il_800x800.5212680663_9hic.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1525460124">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/USD%7Cen-US%7CUS_51df94679b3861181195ea89bcbc3197.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1525460124">
                Anna Pavlova Vintage Ballet Poster, Russian Ballet Art Print, Dance Wall Decor, Unique Housewarming Gift, Vibrant Living Room Wall, C16-895
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 5.5k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(5.5k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate x1BJkyn3hm wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="pxyglo796" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by ClassicoArts
              </span>
              <span class="pxyglo796 wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop ClassicoArts</span>
              <span class="fnn3b1of5" aria-hidden="true">
                    ClassicoArts
              </span>
              <span class="fnn3b1of5 wt-screen-reader-only">From shop ClassicoArts</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 19.77
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">19.77</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">35.94</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 35.94
                            </span>
                            <span class="wt-text-grey ">
                                
                                (45% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info ">
                        
                            
                        
                    
            
                    <div class="
    promotion-badge-line wt-display-flex-xs
    
    ">
    <p class="wt-text-truncate wt-text-caption-title">
            <span class="wt-badge wt-badge--small wt-badge--statusValue">
    FREE shipping
</span>
    </p>
</div>
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1525460124" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT756ba6df38d821f91ac72932b36cb5dc409ab60f">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1703309593" data-shop-id="7818429" data-listing-id="1703309593" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1703309593" data-palette-listing-image="" href="https://www.etsy.com/listing/1703309593/personalized-watercolor-dancer-art?click_key=453996adee0323bbb17c068f1f702de1%3ALT1ffb6ef0b11f1d9e5ccef75596715b2969c80c99&amp;click_sum=0ee95b0e&amp;ls=r&amp;ref=rlp-listing-grid-35&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT1ffb6ef0b11f1d9e5ccef75596715b2969c80c99" data-listing-link="" data-impression-attribution-key="" data-impression-id="1703309593" data-impression-type="listing" data-display-loc="w.1-34" data-index="33" data-logging-key="453996adee0323bbb17c068f1f702de1:LT1ffb6ef0b11f1d9e5ccef75596715b2969c80c99" target="etsy.1703309593" title="Personalized Watercolor Dancer Art: Custom Photo Gift (Digital Download)">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-35 wt-image--cover wt-image" src="https://i.etsystatic.com/7818429/c/2400/2400/450/0/il/37b745/5872495378/il_300x300.5872495378_gdyc.jpg" alt="Personalized Watercolor Dancer Art: Custom Photo Gift (Digital Download)" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/7818429/c/2400/2400/450/0/il/37b745/5872495378/il_300x300.5872495378_gdyc.jpg 300w, https://i.etsystatic.com/7818429/c/2400/2400/450/0/il/37b745/5872495378/il_600x600.5872495378_gdyc.jpg 600w, https://i.etsystatic.com/7818429/c/2400/2400/450/0/il/37b745/5872495378/il_800x800.5872495378_gdyc.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1703309593">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_qfs93e.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1703309593">
                Personalized Watercolor Dancer Art: Custom Photo Gift (Digital Download)
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 69.9k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(69.9k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate ycgpd9ufqt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="mk3wq84lo" aria-hidden="true">
                    ad <span class="h56kdv9ur">vertisement</span> by BabySquishyCheeks
              </span>
              <span class="mk3wq84lo wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop BabySquishyCheeks</span>
              <span class="d7tsypjzz" aria-hidden="true">
                    BabySquishyCheeks
              </span>
              <span class="d7tsypjzz wt-screen-reader-only">From shop BabySquishyCheeks</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 9.03
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">9.03</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">12.90</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 12.90
                            </span>
                            <span class="wt-text-grey ">
                                
                                (30% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1703309593" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT1ffb6ef0b11f1d9e5ccef75596715b2969c80c99">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1266351173" data-shop-id="13232602" data-listing-id="1266351173" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1266351173" data-palette-listing-image="" href="https://www.etsy.com/listing/1266351173/demarel-draped-tango-top-with-short?click_key=453996adee0323bbb17c068f1f702de1%3ALT34297c6d96e6e9b7cae85f2010abc9c96065eb55&amp;click_sum=6bc189ed&amp;ls=r&amp;ref=rlp-listing-grid-36&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT34297c6d96e6e9b7cae85f2010abc9c96065eb55" data-listing-link="" data-impression-attribution-key="" data-impression-id="1266351173" data-impression-type="listing" data-display-loc="w.1-35" data-index="34" data-logging-key="453996adee0323bbb17c068f1f702de1:LT34297c6d96e6e9b7cae85f2010abc9c96065eb55" target="etsy.1266351173" title="DEMARE.L. draped tango top with short sleeves in your favorite color">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-36 wt-image--cover wt-image" src="https://i.etsystatic.com/13232602/r/il/ba7254/4003090778/il_300x300.4003090778_8ck3.jpg" alt="DEMARE.L. draped tango top with short sleeves in your favorite color" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/13232602/r/il/ba7254/4003090778/il_300x300.4003090778_8ck3.jpg 300w, https://i.etsystatic.com/13232602/r/il/ba7254/4003090778/il_600x600.4003090778_8ck3.jpg 600w, https://i.etsystatic.com/13232602/r/il/ba7254/4003090778/il_800x800.4003090778_8ck3.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1266351173">
                DEMARE.L. draped tango top with short sleeves in your favorite color
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 1.4k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1.4k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate hUbqGguIbp wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="lvm1h2hqn" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by LinCreationsBoutique
              </span>
              <span class="lvm1h2hqn wt-screen-reader-only">Ad<span class="d20953c2d">vertisement</span> from shop LinCreationsBoutique</span>
              <span class="y75ft4dau" aria-hidden="true">
                    LinCreationsBoutique
              </span>
              <span class="y75ft4dau wt-screen-reader-only">From shop LinCreationsBoutique</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">78.44</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1266351173" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT34297c6d96e6e9b7cae85f2010abc9c96065eb55">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1555118142" data-shop-id="36378720" data-listing-id="1555118142" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1555118142" data-palette-listing-image="" href="https://www.etsy.com/listing/1555118142/high-waisted-black-full-circle-skirt?click_key=453996adee0323bbb17c068f1f702de1%3ALTf1c7f2894ccafcbcae759a5f8b1e240cfc4e8cd1&amp;click_sum=38b5c4f1&amp;ls=r&amp;ref=rlp-listing-grid-37&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTf1c7f2894ccafcbcae759a5f8b1e240cfc4e8cd1" data-listing-link="" data-impression-attribution-key="" data-impression-id="1555118142" data-impression-type="listing" data-display-loc="w.1-36" data-index="35" data-logging-key="453996adee0323bbb17c068f1f702de1:LTf1c7f2894ccafcbcae759a5f8b1e240cfc4e8cd1" target="etsy.1555118142" title="High Waisted Black Full Circle Skirt , Black Tango Skirt for Women with 2 Slit">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-37 wt-image--cover wt-image" src="https://i.etsystatic.com/36378720/c/1200/1200/0/411/il/c85d2f/5351682419/il_300x300.5351682419_flcy.jpg" alt="High Waisted Black Full Circle Skirt , Black Tango Skirt for Women with 2 Slit" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/36378720/c/1200/1200/0/411/il/c85d2f/5351682419/il_300x300.5351682419_flcy.jpg 300w, https://i.etsystatic.com/36378720/c/1200/1200/0/411/il/c85d2f/5351682419/il_600x600.5351682419_flcy.jpg 600w, https://i.etsystatic.com/36378720/c/1200/1200/0/411/il/c85d2f/5351682419/il_800x800.5351682419_flcy.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1555118142">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Ads%C4%B1z_tasar%C4%B1m_47_xnxrto.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1555118142">
                High Waisted Black Full Circle Skirt , Black Tango Skirt for Women with 2 Slit
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.7
                </span>
            <div role="img" aria-label="4.7 star rating with 272 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(272)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate laWph2mRJI wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gz59pzpqr" aria-hidden="true">
                    ad <span class="da8e3fpnq">vertisement</span> by ParlaTangoWear
              </span>
              <span class="gz59pzpqr wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from shop ParlaTangoWear</span>
              <span class="ab6plv2cq" aria-hidden="true">
                    ParlaTangoWear
              </span>
              <span class="ab6plv2cq wt-screen-reader-only">From shop ParlaTangoWear</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">97.39</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1555118142" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTf1c7f2894ccafcbcae759a5f8b1e240cfc4e8cd1">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1145979699" data-shop-id="26769854" data-listing-id="1145979699" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1145979699" data-palette-listing-image="" href="https://www.etsy.com/listing/1145979699/antique-ballet-print-vintage-black-and?click_key=453996adee0323bbb17c068f1f702de1%3ALTbc9692d3d818df88f92774e8cdd5299c31cca8c4&amp;click_sum=66ba708a&amp;ls=r&amp;ref=rlp-listing-grid-38&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTbc9692d3d818df88f92774e8cdd5299c31cca8c4" data-listing-link="" data-impression-attribution-key="" data-impression-id="1145979699" data-impression-type="listing" data-display-loc="w.1-37" data-index="36" data-logging-key="453996adee0323bbb17c068f1f702de1:LTbc9692d3d818df88f92774e8cdd5299c31cca8c4" target="etsy.1145979699" title="Antique Ballet Print | Vintage Black and White Vintage Ballet Art | *Rare* 1940's Ballet Photograph | Printable Art | DIGITAL PRINT Wall Art">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-38 wt-image--cover wt-image" src="https://i.etsystatic.com/26769854/r/il/ba675a/3596799909/il_300x300.3596799909_748v.jpg" alt="Antique Ballet Print | Vintage Black and White Vintage Ballet Art | *Rare* 1940&amp;#39;s Ballet Photograph | Printable Art | DIGITAL PRINT Wall Art" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/26769854/r/il/ba675a/3596799909/il_300x300.3596799909_748v.jpg 300w, https://i.etsystatic.com/26769854/r/il/ba675a/3596799909/il_600x600.3596799909_748v.jpg 600w, https://i.etsystatic.com/26769854/r/il/ba675a/3596799909/il_800x800.3596799909_748v.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1145979699">
                Antique Ballet Print | Vintage Black and White Vintage Ballet Art | *Rare* 1940's Ballet Photograph | Printable Art | DIGITAL PRINT Wall Art
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate busdQGEJdT wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="s1dljhoji" aria-hidden="true">
                    ad <span class="mk3wq84lo">vertisement</span> by VintageElegy
              </span>
              <span class="s1dljhoji wt-screen-reader-only">Ad<span class="ba0ac7b57">vertisement</span> from shop VintageElegy</span>
              <span class="fnn3b1of5" aria-hidden="true">
                    VintageElegy
              </span>
              <span class="fnn3b1of5 wt-screen-reader-only">From shop VintageElegy</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">10.74</span>
                </p>
</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1145979699" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTbc9692d3d818df88f92774e8cdd5299c31cca8c4">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1237892334" data-shop-id="20884580" data-listing-id="1237892334" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1237892334" data-palette-listing-image="" href="https://www.etsy.com/listing/1237892334/disco-sparkling-pet-id-dancing-disco?click_key=453996adee0323bbb17c068f1f702de1%3ALTf5fe2dcbfd9391cb42b3473231af802d93b312c8&amp;click_sum=4988923f&amp;ls=r&amp;ref=rlp-listing-grid-39&amp;external=1&amp;space_id=1368497667979&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTf5fe2dcbfd9391cb42b3473231af802d93b312c8" data-listing-link="" data-impression-attribution-key="" data-impression-id="1237892334" data-impression-type="listing" data-display-loc="w.1-38" data-index="37" data-logging-key="453996adee0323bbb17c068f1f702de1:LTf5fe2dcbfd9391cb42b3473231af802d93b312c8" target="etsy.1237892334" title="Disco Sparkling pet ID, Dancing Disco Ball Personalized reflective mirror pet tag">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-39 wt-image--cover wt-image" src="https://i.etsystatic.com/20884580/c/1752/1752/0/0/il/ef48e3/5771183575/il_300x300.5771183575_ipkx.jpg" alt="Disco Sparkling pet ID, Dancing Disco Ball Personalized reflective mirror pet tag" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/20884580/c/1752/1752/0/0/il/ef48e3/5771183575/il_300x300.5771183575_ipkx.jpg 300w, https://i.etsystatic.com/20884580/c/1752/1752/0/0/il/ef48e3/5771183575/il_600x600.5771183575_ipkx.jpg 600w, https://i.etsystatic.com/20884580/c/1752/1752/0/0/il/ef48e3/5771183575/il_800x800.5771183575_ipkx.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1237892334">
                Disco Sparkling pet ID, Dancing Disco Ball Personalized reflective mirror pet tag
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 5.2k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(5.2k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate busdQGEJdT wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="lvm1h2hqn">vertisement</span> by EmandMeStudio
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="h04010657">vertisement</span> from shop EmandMeStudio</span>
              <span class="zecufapt1" aria-hidden="true">
                    EmandMeStudio
              </span>
              <span class="zecufapt1 wt-screen-reader-only">From shop EmandMeStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">32.00</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1237892334" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTf5fe2dcbfd9391cb42b3473231af802d93b312c8">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1672942907" data-shop-id="44851497" data-listing-id="1672942907" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1672942907" data-palette-listing-image="" href="https://www.etsy.com/listing/1672942907/ballerina-dance-poster-white-painting?click_key=453996adee0323bbb17c068f1f702de1%3ALT6423b1ee5f437df9adc1178e5d73fb3c145471a7&amp;click_sum=54e0bb4f&amp;ls=r&amp;ref=rlp-listing-grid-40&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT6423b1ee5f437df9adc1178e5d73fb3c145471a7" data-listing-link="" data-impression-attribution-key="" data-impression-id="1672942907" data-impression-type="listing" data-display-loc="w.1-39" data-index="38" data-logging-key="453996adee0323bbb17c068f1f702de1:LT6423b1ee5f437df9adc1178e5d73fb3c145471a7" target="etsy.1672942907" title="Ballerina Dance Poster, White Painting, Soft Feminine Decor, Coquette Aesthetic, Retro Wall Art, Ivory Print,">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-40 wt-image--cover wt-image" src="https://i.etsystatic.com/44851497/r/il/a83dd5/6523447178/il_300x300.6523447178_r5y8.jpg" alt="Ballerina Dance Poster, White Painting, Soft Feminine Decor, Coquette Aesthetic, Retro Wall Art, Ivory Print," style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/44851497/r/il/a83dd5/6523447178/il_300x300.6523447178_r5y8.jpg 300w, https://i.etsystatic.com/44851497/r/il/a83dd5/6523447178/il_600x600.6523447178_r5y8.jpg 600w, https://i.etsystatic.com/44851497/r/il/a83dd5/6523447178/il_800x800.6523447178_r5y8.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1672942907">
                Ballerina Dance Poster, White Painting, Soft Feminine Decor, Coquette Aesthetic, Retro Wall Art, Ivory Print,
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 359 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(359)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate d2oRoQO4Ez wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="s1dljhoji">vertisement</span> by LadyJanePrintables
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from shop LadyJanePrintables</span>
              <span class="d7tsypjzz" aria-hidden="true">
                    LadyJanePrintables
              </span>
              <span class="d7tsypjzz wt-screen-reader-only">From shop LadyJanePrintables</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 18.67
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">18.67</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">26.67</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 26.67
                            </span>
                            <span class="wt-text-grey ">
                                
                                (30% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1672942907" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT6423b1ee5f437df9adc1178e5d73fb3c145471a7">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1480477213" data-shop-id="14395159" data-listing-id="1480477213" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1480477213" data-palette-listing-image="" href="https://www.etsy.com/listing/1480477213/editable-dance-party-birthday-invitation?click_key=453996adee0323bbb17c068f1f702de1%3ALT497fa697d5fb6c6af791d7e95e72b9d99ca1b379&amp;click_sum=c87ca6b0&amp;ls=r&amp;ref=rlp-listing-grid-41&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT497fa697d5fb6c6af791d7e95e72b9d99ca1b379" data-listing-link="" data-impression-attribution-key="" data-impression-id="1480477213" data-impression-type="listing" data-display-loc="w.1-40" data-index="39" data-logging-key="453996adee0323bbb17c068f1f702de1:LT497fa697d5fb6c6af791d7e95e72b9d99ca1b379" target="etsy.1480477213" title="Editable Dance Party Birthday Invitation, Glow Gender Neutral Invites, Neon Dance Party Template, Glow Dance Party Invites Editable Neon D03">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-41 wt-image--cover wt-image" src="https://i.etsystatic.com/14395159/r/il/93e461/4899318830/il_300x300.4899318830_peav.jpg" alt="Editable Dance Party Birthday Invitation, Glow Gender Neutral Invites, Neon Dance Party Template, Glow Dance Party Invites Editable Neon D03" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/14395159/r/il/93e461/4899318830/il_300x300.4899318830_peav.jpg 300w, https://i.etsystatic.com/14395159/r/il/93e461/4899318830/il_600x600.4899318830_peav.jpg 600w, https://i.etsystatic.com/14395159/r/il/93e461/4899318830/il_800x800.4899318830_peav.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1480477213">
                Editable Dance Party Birthday Invitation, Glow Gender Neutral Invites, Neon Dance Party Template, Glow Dance Party Invites Editable Neon D03
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.8
                </span>
            <div role="img" aria-label="4.8 star rating with 2.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(2.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate x1BJkyn3hm wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="wtt4jncv7" aria-hidden="true">
                    ad <span class="i2eazdbbj">vertisement</span> by OurHappyStudio
              </span>
              <span class="wtt4jncv7 wt-screen-reader-only">Ad<span class="cd8fe9c17">vertisement</span> from shop OurHappyStudio</span>
              <span class="fi12bwbul" aria-hidden="true">
                    OurHappyStudio
              </span>
              <span class="fi12bwbul wt-screen-reader-only">From shop OurHappyStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 3.43
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">3.43</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">5.72</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 5.72
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1480477213" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT497fa697d5fb6c6af791d7e95e72b9d99ca1b379">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1750547820" data-shop-id="50315636" data-listing-id="1750547820" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1750547820" data-palette-listing-image="" href="https://www.etsy.com/listing/1750547820/quirky-dancing-clip-art-10-high-res?click_key=453996adee0323bbb17c068f1f702de1%3ALT261e92414a2ad76bff34ef7ec72a444868546ec6&amp;click_sum=19c0cc47&amp;ls=r&amp;ref=rlp-listing-grid-42&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT261e92414a2ad76bff34ef7ec72a444868546ec6" data-listing-link="" data-impression-attribution-key="" data-impression-id="1750547820" data-impression-type="listing" data-display-loc="w.1-41" data-index="40" data-logging-key="453996adee0323bbb17c068f1f702de1:LT261e92414a2ad76bff34ef7ec72a444868546ec6" target="etsy.1750547820" title="Quirky Dancing Clip Art 10 High Res Watercolor JPGs for Junk Journaling, Scrapbooking, Card Making, Digital Art, Fantasy, Whimsical">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-42 wt-image--cover wt-image" src="https://i.etsystatic.com/50315636/r/il/8d6fc2/6137586452/il_300x300.6137586452_13xr.jpg" alt="Quirky Dancing Clip Art 10 High Res Watercolor JPGs for Junk Journaling, Scrapbooking, Card Making, Digital Art, Fantasy, Whimsical" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/50315636/r/il/8d6fc2/6137586452/il_300x300.6137586452_13xr.jpg 300w, https://i.etsystatic.com/50315636/r/il/8d6fc2/6137586452/il_600x600.6137586452_13xr.jpg 600w, https://i.etsystatic.com/50315636/r/il/8d6fc2/6137586452/il_800x800.6137586452_13xr.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1750547820">
                Quirky Dancing Clip Art 10 High Res Watercolor JPGs for Junk Journaling, Scrapbooking, Card Making, Digital Art, Fantasy, Whimsical
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 5.6k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(5.6k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate x1BJkyn3hm wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="i2eazdbbj" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by FantasyDigitals
              </span>
              <span class="i2eazdbbj wt-screen-reader-only">Ad<span class="b3a97a3bb">vertisement</span> from shop FantasyDigitals</span>
              <span class="y75ft4dau" aria-hidden="true">
                    FantasyDigitals
              </span>
              <span class="y75ft4dau wt-screen-reader-only">From shop FantasyDigitals</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 2.10
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">2.10</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">2.80</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 2.80
                            </span>
                            <span class="wt-text-grey ">
                                
                                (25% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1750547820" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT261e92414a2ad76bff34ef7ec72a444868546ec6">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="722046535" data-shop-id="10697541" data-listing-id="722046535" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="722046535" data-palette-listing-image="" href="https://www.etsy.com/listing/722046535/halloween-costumes-hand-make-rave-belly?click_key=453996adee0323bbb17c068f1f702de1%3ALTd5770685818bb68e6e88fa23d1c8a710bccdeb32&amp;click_sum=0e6ee244&amp;ls=r&amp;ref=rlp-listing-grid-43&amp;external=1&amp;space_id=1368497667979&amp;frs=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTd5770685818bb68e6e88fa23d1c8a710bccdeb32" data-listing-link="" data-impression-attribution-key="" data-impression-id="722046535" data-impression-type="listing" data-display-loc="w.1-42" data-index="41" data-logging-key="453996adee0323bbb17c068f1f702de1:LTd5770685818bb68e6e88fa23d1c8a710bccdeb32" target="etsy.722046535" title="Halloween costumes Hand make RAVE Belly Dance Samba Costume  bra belt 3 pcs tf1732">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-43 wt-image--cover wt-image" src="https://i.etsystatic.com/10697541/r/il/ed6611/5963700271/il_300x300.5963700271_cosu.jpg" alt="Halloween costumes Hand make RAVE Belly Dance Samba Costume  bra belt 3 pcs tf1732" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/10697541/r/il/ed6611/5963700271/il_300x300.5963700271_cosu.jpg 300w, https://i.etsystatic.com/10697541/r/il/ed6611/5963700271/il_600x600.5963700271_cosu.jpg 600w, https://i.etsystatic.com/10697541/r/il/ed6611/5963700271/il_800x800.5963700271_cosu.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="722046535">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/%E5%AE%9D%E8%93%9D_ndloyt.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-722046535">
                Halloween costumes Hand make RAVE Belly Dance Samba Costume  bra belt 3 pcs tf1732
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.7
                </span>
            <div role="img" aria-label="4.7 star rating with 5.9k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(5.9k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate laWph2mRJI wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="mk3wq84lo" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by bellyEshop
              </span>
              <span class="mk3wq84lo wt-screen-reader-only">Ad<span class="wb2406677">vertisement</span> from shop bellyEshop</span>
              <span class="ikaw0xngi" aria-hidden="true">
                    bellyEshop
              </span>
              <span class="ikaw0xngi wt-screen-reader-only">From shop bellyEshop</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">72.90</span>
                </p>
</div>
                        <div class="streamline-spacing-pricing-info ">
                        
                            
                        
                    
            
                    <div class="
    promotion-badge-line wt-display-flex-xs
    
    ">
    <p class="wt-text-truncate wt-text-caption-title">
            <span class="wt-badge wt-badge--small wt-badge--statusValue">
    FREE shipping
</span>
    </p>
</div>
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="722046535" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTd5770685818bb68e6e88fa23d1c8a710bccdeb32">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1801451792" data-shop-id="7027099" data-listing-id="1801451792" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1801451792" data-palette-listing-image="" href="https://www.etsy.com/listing/1801451792/ballet-dancer-stained-glass-suncatcher?click_key=453996adee0323bbb17c068f1f702de1%3ALTd6189f29f645e4c307c7c9c354ad1e2e60e892f1&amp;click_sum=3d2d4fcc&amp;ls=r&amp;ref=rlp-listing-grid-44&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTd6189f29f645e4c307c7c9c354ad1e2e60e892f1" data-listing-link="" data-impression-attribution-key="" data-impression-id="1801451792" data-impression-type="listing" data-display-loc="w.1-43" data-index="42" data-logging-key="453996adee0323bbb17c068f1f702de1:LTd6189f29f645e4c307c7c9c354ad1e2e60e892f1" target="etsy.1801451792" title="Ballet Dancer Stained Glass Suncatcher: Dancing Home Window Decoration">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-44 wt-image--cover wt-image" src="https://i.etsystatic.com/7027099/c/1462/1462/298/551/il/eff1dd/6426699553/il_300x300.6426699553_dnd5.jpg" alt="Ballet Dancer Stained Glass Suncatcher: Dancing Home Window Decoration" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/7027099/c/1462/1462/298/551/il/eff1dd/6426699553/il_300x300.6426699553_dnd5.jpg 300w, https://i.etsystatic.com/7027099/c/1462/1462/298/551/il/eff1dd/6426699553/il_600x600.6426699553_dnd5.jpg 600w, https://i.etsystatic.com/7027099/c/1462/1462/298/551/il/eff1dd/6426699553/il_800x800.6426699553_dnd5.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1801451792">
                Ballet Dancer Stained Glass Suncatcher: Dancing Home Window Decoration
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 5.5k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(5.5k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate cTu0XRYS2t wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="tibtcb6nb" aria-hidden="true">
                    ad <span class="gz59pzpqr">vertisement</span> by AlquimiaStoreDesign
              </span>
              <span class="tibtcb6nb wt-screen-reader-only">Ad<span class="h04010657">vertisement</span> from shop AlquimiaStoreDesign</span>
              <span class="zecufapt1" aria-hidden="true">
                    AlquimiaStoreDesign
              </span>
              <span class="zecufapt1 wt-screen-reader-only">From shop AlquimiaStoreDesign</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 29.99
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">29.99</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">49.99</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 49.99
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1801451792" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTd6189f29f645e4c307c7c9c354ad1e2e60e892f1">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1485989706" data-shop-id="7027099" data-listing-id="1485989706" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1485989706" data-palette-listing-image="" href="https://www.etsy.com/listing/1485989706/the-tapdancer-tarot-shirt-tap-dance?click_key=453996adee0323bbb17c068f1f702de1%3ALTc8ad5f1d20b91ede8f976685e1834dc16eb61a76&amp;click_sum=bd249e60&amp;ls=r&amp;ref=rlp-listing-grid-45&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTc8ad5f1d20b91ede8f976685e1834dc16eb61a76" data-listing-link="" data-impression-attribution-key="" data-impression-id="1485989706" data-impression-type="listing" data-display-loc="w.1-44" data-index="43" data-logging-key="453996adee0323bbb17c068f1f702de1:LTc8ad5f1d20b91ede8f976685e1834dc16eb61a76" target="etsy.1485989706" title="The Tapdancer Tarot Shirt, Tap dance Shirt, Gift for Tap Dancer, Tapdance T-Shirt with Tarot Card Design &quot;THE TAPDANCER&quot;">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-45 wt-image--cover wt-image" src="https://i.etsystatic.com/7027099/c/1538/1538/230/23/il/e63e7f/5034696859/il_300x300.5034696859_5m79.jpg" alt="The Tapdancer Tarot Shirt, Tap dance Shirt, Gift for Tap Dancer, Tapdance T-Shirt with Tarot Card Design &amp;quot;THE TAPDANCER&amp;quot;" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/7027099/c/1538/1538/230/23/il/e63e7f/5034696859/il_300x300.5034696859_5m79.jpg 300w, https://i.etsystatic.com/7027099/c/1538/1538/230/23/il/e63e7f/5034696859/il_600x600.5034696859_5m79.jpg 600w, https://i.etsystatic.com/7027099/c/1538/1538/230/23/il/e63e7f/5034696859/il_800x800.5034696859_5m79.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1485989706">
                The Tapdancer Tarot Shirt, Tap dance Shirt, Gift for Tap Dancer, Tapdance T-Shirt with Tarot Card Design "THE TAPDANCER"
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 5.5k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(5.5k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate dRgs129Dl7 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="pxyglo796" aria-hidden="true">
                    ad <span class="s1dljhoji">vertisement</span> by AlquimiaStoreDesign
              </span>
              <span class="pxyglo796 wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop AlquimiaStoreDesign</span>
              <span class="ppke9eh9h" aria-hidden="true">
                    AlquimiaStoreDesign
              </span>
              <span class="ppke9eh9h wt-screen-reader-only">From shop AlquimiaStoreDesign</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 22.73
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">22.73</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">37.89</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 37.89
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info streamline-spacing-reduce-margin">
                        
                            
                        
                    
            
                    
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1485989706" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTc8ad5f1d20b91ede8f976685e1834dc16eb61a76">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1029734623" data-shop-id="22148353" data-listing-id="1029734623" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1029734623" data-palette-listing-image="" href="https://www.etsy.com/listing/1029734623/never-miss-a-chance-to-dance-gift-for?click_key=453996adee0323bbb17c068f1f702de1%3ALT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff&amp;click_sum=5ce43c1b&amp;ls=r&amp;ref=rlp-listing-grid-46&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff" data-listing-link="" data-impression-attribution-key="" data-impression-id="1029734623" data-impression-type="listing" data-display-loc="w.1-45" data-index="44" data-logging-key="453996adee0323bbb17c068f1f702de1:LT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff" target="etsy.1029734623" title="Never miss a chance to dance, Gift for Dancer, Dancer gifts, Dance gifts, Dancing wall art, Dance Studio Poster, gifts for her">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-46 wt-image--cover wt-image" src="https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_300x300.3707608055_exer.jpg" alt="Never miss a chance to dance, Gift for Dancer, Dancer gifts, Dance gifts, Dancing wall art, Dance Studio Poster, gifts for her" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_300x300.3707608055_exer.jpg 300w, https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_600x600.3707608055_exer.jpg 600w, https://i.etsystatic.com/22148353/c/1855/1855/340/103/il/031e44/3707608055/il_800x800.3707608055_exer.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1029734623">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/GRAND_LOVELY_2_dilubw.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1029734623">
                Never miss a chance to dance, Gift for Dancer, Dancer gifts, Dance gifts, Dancing wall art, Dance Studio Poster, gifts for her
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    4.9
                </span>
            <div role="img" aria-label="4.9 star rating with 4.6k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(4.6k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate x1BJkyn3hm wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bsm0vib8s" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by GrandandLovelyPrints
              </span>
              <span class="bsm0vib8s wt-screen-reader-only">Ad<span class="e56f17e39">vertisement</span> from shop GrandandLovelyPrints</span>
              <span class="zecufapt1" aria-hidden="true">
                    GrandandLovelyPrints
              </span>
              <span class="zecufapt1 wt-screen-reader-only">From shop GrandandLovelyPrints</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 5.45
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">5.45</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">9.09</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 9.09
                            </span>
                            <span class="wt-text-grey ">
                                
                                (40% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1029734623" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT61bdd0fdabfc00f70133f2c92a08bd1b442d2fff">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1481460192" data-shop-id="43932215" data-listing-id="1481460192" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1481460192" data-palette-listing-image="" href="https://www.etsy.com/listing/1481460192/retro-music-poster-disco-ball-dance?click_key=453996adee0323bbb17c068f1f702de1%3ALTa56b16b6dea33e17ee0032192cf4c62045b56362&amp;click_sum=b76cec72&amp;ls=r&amp;ref=rlp-listing-grid-47&amp;external=1&amp;space_id=1368497667979&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTa56b16b6dea33e17ee0032192cf4c62045b56362" data-listing-link="" data-impression-attribution-key="" data-impression-id="1481460192" data-impression-type="listing" data-display-loc="w.1-46" data-index="45" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa56b16b6dea33e17ee0032192cf4c62045b56362" target="etsy.1481460192" title="Retro Music Poster, Disco Ball Dance Print, Positive Motivational Poster, Mood Booster">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-47 wt-image--cover wt-image" src="https://i.etsystatic.com/43932215/r/il/cefdb6/6654104508/il_300x300.6654104508_gbbl.jpg" alt="Retro Music Poster, Disco Ball Dance Print, Positive Motivational Poster, Mood Booster" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/43932215/r/il/cefdb6/6654104508/il_300x300.6654104508_gbbl.jpg 300w, https://i.etsystatic.com/43932215/r/il/cefdb6/6654104508/il_600x600.6654104508_gbbl.jpg 600w, https://i.etsystatic.com/43932215/r/il/cefdb6/6654104508/il_800x800.6654104508_gbbl.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1481460192">
                Retro Music Poster, Disco Ball Dance Print, Positive Motivational Poster, Mood Booster
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 101 reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(101)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate usxSl20Duw wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="da8e3fpnq" aria-hidden="true">
                    ad <span class="pxyglo796">vertisement</span> by RetroscopePrints
              </span>
              <span class="da8e3fpnq wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop RetroscopePrints</span>
              <span class="ppke9eh9h" aria-hidden="true">
                    RetroscopePrints
              </span>
              <span class="ppke9eh9h wt-screen-reader-only">From shop RetroscopePrints</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">7.53</span>
                </p>
</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1481460192" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa56b16b6dea33e17ee0032192cf4c62045b56362">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-4 wt-order-md-4 wt-order-lg-4 wt-show-xs wt-show-md wt-show-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1682829260" data-shop-id="42699629" data-listing-id="1682829260" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1682829260" data-palette-listing-image="" href="https://www.etsy.com/listing/1682829260/when-doubt-dance-it-out-retro-prints?click_key=453996adee0323bbb17c068f1f702de1%3ALT4e3e02a95f37760d2933778a7a9fbc7bcb51525b&amp;click_sum=ab456f61&amp;ls=r&amp;ref=rlp-listing-grid-48&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;frs=1&amp;sts=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALT4e3e02a95f37760d2933778a7a9fbc7bcb51525b" data-listing-link="" data-impression-attribution-key="" data-impression-id="1682829260" data-impression-type="listing" data-display-loc="w.1-47" data-index="46" data-logging-key="453996adee0323bbb17c068f1f702de1:LT4e3e02a95f37760d2933778a7a9fbc7bcb51525b" target="etsy.1682829260" title="When Doubt Dance it Out, Retro Prints, Disco Wall Art, Colourful Music Prints, Disco Dance Music Poster, 70s Dance Quotes, Music Wall Art">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-48 wt-image--cover wt-image" src="https://i.etsystatic.com/42699629/r/il/a8b04b/6874569323/il_300x300.6874569323_g8by.jpg" alt="When Doubt Dance it Out, Retro Prints, Disco Wall Art, Colourful Music Prints, Disco Dance Music Poster, 70s Dance Quotes, Music Wall Art" style={{ aspectRatio: "1" }} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/42699629/r/il/a8b04b/6874569323/il_300x300.6874569323_g8by.jpg 300w, https://i.etsystatic.com/42699629/r/il/a8b04b/6874569323/il_600x600.6874569323_g8by.jpg 600w, https://i.etsystatic.com/42699629/r/il/a8b04b/6874569323/il_800x800.6874569323_g8by.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1682829260">
                When Doubt Dance it Out, Retro Prints, Disco Wall Art, Colourful Music Prints, Disco Dance Music Poster, 70s Dance Quotes, Music Wall Art
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 2.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(2.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate fMgEiOOlBt wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="gbqdswh1e" aria-hidden="true">
                    ad <span class="wtt4jncv7">vertisement</span> by bandslidedesigns
              </span>
              <span class="gbqdswh1e wt-screen-reader-only">Ad<span class="zea716bd2">vertisement</span> from shop bandslidedesigns</span>
              <span class="ab6plv2cq" aria-hidden="true">
                    bandslidedesigns
              </span>
              <span class="ab6plv2cq wt-screen-reader-only">From shop bandslidedesigns</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 6.58
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">6.58</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">8.23</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 8.23
                            </span>
                            <span class="wt-text-grey ">
                                
                                (20% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        <div class="streamline-spacing-pricing-info ">
                        
                            
                        
                    
            
                    <div class="
    promotion-badge-line wt-display-flex-xs
    
    ">
    <p class="wt-text-truncate wt-text-caption-title">
            <span class="wt-badge wt-badge--small wt-badge--statusValue">
    FREE shipping
</span>
    </p>
</div>
                
            </div>

                    



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1682829260" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LT4e3e02a95f37760d2933778a7a9fbc7bcb51525b">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled wt-grid__item-xs-12 wt-grid__item-md-12 wt-grid__item-lg-12 wt-order-xs-5 wt-order-md-5 wt-order-lg-5 search-grid-interstitial--secondary wt-show-xs wt-show-md wt-show-lg" data-grid-interstitial--secondary="">
    <div data-neu-spec-placeholder="1" id="7c8b008f85346288e502d17e041dc0a9">

    <div>
    
        <div class="wt-display-flex-xs wt-justify-content-center wt-pb-xs-2 wt-pb-md-3 wt-pt-xs-3 wt-pt-lg-4">
    
        <div class="wt-skeleton-ui wt-skeleton-ui--heading-02 wt-justify-content-center" style={{width: "250px"}}>
    &nbsp;
</div>
</div><div class="wt-block-grid-xs-1 wt-block-grid-md-2 wt-block-grid-lg-3 wt-pb-xs-4 wt-pb-lg-6 wt-pl-xs-4 wt-pr-xs-4">
    
        <div class="wt-block-grid__item" style={{minHeight:"150px", aspectRatio: "2"}}>
    
        <div class="wt-skeleton-ui wt-rounded-02 wt-height-full">
    &nbsp;
</div>
</div><div class="wt-block-grid__item" style={{minHeight:"150px", aspectRatio: "2"}}>
    
        <div class="wt-skeleton-ui wt-rounded-02 wt-height-full">
    &nbsp;
</div>
</div><div class="wt-block-grid__item" style={{minHeight:"150px", aspectRatio: "2"}}>
    
        <div class="wt-skeleton-ui wt-rounded-02 wt-height-full">
    &nbsp;
</div>
</div>
</div>
</div>
</div>
</li><li class="wt-list-unstyled  wt-order-xs-48 wt-order-md-48 wt-hide-xs wt-hide-md wt-hide-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1498227232" data-shop-id="39293244" data-listing-id="1498227232" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1498227232" data-palette-listing-image="" href="https://www.etsy.com/listing/1498227232/disco-ball-kitchen-print-retro-dancing?click_key=453996adee0323bbb17c068f1f702de1%3ALTa932a90530ad0308b0ca651ef84fd14fc3d59e7a&amp;click_sum=5e1fc430&amp;ls=r&amp;ref=rlp-listing-grid-49&amp;external=1&amp;space_id=1368497667979&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTa932a90530ad0308b0ca651ef84fd14fc3d59e7a" data-listing-link="" data-impression-attribution-key="" data-impression-id="1498227232" data-impression-type="listing" data-display-loc="w.1-48" data-index="47" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa932a90530ad0308b0ca651ef84fd14fc3d59e7a" target="etsy.1498227232" title="Disco Ball Kitchen Print: Retro Dancing Poster, Minimalist Wall Art (Digital Download)">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
" tabindex="0">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-49 wt-image--cover wt-image" src="https://i.etsystatic.com/39293244/c/1698/1698/542/397/il/97799d/6564023584/il_300x300.6564023584_7ujw.jpg" alt="Disco Ball Kitchen Print: Retro Dancing Poster, Minimalist Wall Art (Digital Download)" style={{ aspectRatio: "1"}} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/39293244/c/1698/1698/542/397/il/97799d/6564023584/il_300x300.6564023584_7ujw.jpg 300w, https://i.etsystatic.com/39293244/c/1698/1698/542/397/il/97799d/6564023584/il_600x600.6564023584_7ujw.jpg 600w, https://i.etsystatic.com/39293244/c/1698/1698/542/397/il/97799d/6564023584/il_800x800.6564023584_7ujw.jpg 800w" />

            
            
    </div>
         <div class="listing-card-video-spinner wt-align-items-center wt-display-none wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right" aria-hidden="true">
    <div class="wt-spinner wt-spinner--01">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle fill="transparent" cx="12" cy="12" r="10"></circle></svg></span>
        Loading
    </div>
</div>

<div class="listing-card-video-container 
            
            wt-display-none 
            wt-position-absolute wt-position-top wt-position-bottom wt-position-left wt-position-right
            ">
    <video muted="" preload="none" class="listing-video-responsive-container wt-height-full wt-width-full" aria-label="Product video" data-listing-id="1498227232">
            <source src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/BUY_3_ITEMS_SAVE_70_AT_CHECKOUT_agxc6a.mp4" type="video/mp4" />
    </video>
</div>

<div class="listing-card-video-signal wt-position-absolute wt-circle wt-overflow-hidden wt-sem-bg-elevation-0" aria-hidden="false">
    <span class="etsy-icon wt-icon--smaller-xs wt-horizontal-center wt-vertical-center wt-nudge-l-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg></span>
</div> 
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1498227232">
                Disco Ball Kitchen Print: Retro Dancing Poster, Minimalist Wall Art (Digital Download)
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 6.3k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(6.3k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate usxSl20Duw wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="tibtcb6nb" aria-hidden="true">
                    ad <span class="da8e3fpnq">vertisement</span> by FloralsPrints
              </span>
              <span class="tibtcb6nb wt-screen-reader-only">Ad<span class="lfc3d2d72">vertisement</span> from shop FloralsPrints</span>
              <span class="i756n8qyj" aria-hidden="true">
                    FloralsPrints
              </span>
              <span class="i756n8qyj wt-screen-reader-only">From shop FloralsPrints</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                <p class="wt-text-title-01 lc-price">
                    <span class="currency-symbol">USD </span><span class="currency-value">8.60</span>
                </p>
</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1498227232" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTa932a90530ad0308b0ca651ef84fd14fc3d59e7a">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li><li class="wt-list-unstyled  wt-order-xs-48 wt-order-md-48 wt-hide-xs wt-hide-md wt-hide-lg">
    <div class="js-merch-stash-check-listing v2-listing-card 
           
           wt-mr-xs-0
search-listing-card--desktop 
            
            listing-card-experimental-style" data-palette-listing-id="1694219649" data-shop-id="27554322" data-listing-id="1694219649" data-page-type="" data-behat-listing-card="" data-listing-card-v2-requires-setup="" data-listing-card-v2="">
    <a class="listing-link
                wt-display-inline-block
             recs-impression
" data-listing-id="1694219649" data-palette-listing-image="" href="https://www.etsy.com/listing/1694219649/vintage-ballet-junk-journal-kit-shabby?click_key=453996adee0323bbb17c068f1f702de1%3ALTe0e37f894e460269ddc0a5960c81f2aff84993e0&amp;click_sum=e9456fac&amp;ls=r&amp;ref=rlp-listing-grid-50&amp;external=1&amp;space_id=1368497667979&amp;pro=1&amp;sts=1&amp;dd=1&amp;content_source=453996adee0323bbb17c068f1f702de1%253ALTe0e37f894e460269ddc0a5960c81f2aff84993e0" data-listing-link="" data-impression-attribution-key="" data-impression-id="1694219649" data-impression-type="listing" data-display-loc="w.1-49" data-index="48" data-logging-key="453996adee0323bbb17c068f1f702de1:LTe0e37f894e460269ddc0a5960c81f2aff84993e0" target="etsy.1694219649" title="Vintage Ballet Junk Journal Kit: Shabby Chic Ballerina Pages (Digital Download)">
            
                <div class="v2-listing-card__img wt-position-relative
">
                    <div class="placeholder 
             placeholder-square 
                
            
            
">
    <div class="placeholder vertically-centered-placeholder placeholder-content placeholder-square">
            <img data-clg-id="WtImage" class="wt-width-full wt-display-block wt-height-full wt-position-absolute rlp-listing-grid-50 wt-image--cover wt-image" src="https://i.etsystatic.com/27554322/r/il/923761/5832665444/il_300x300.5832665444_k1wp.jpg" alt="Vintage Ballet Junk Journal Kit: Shabby Chic Ballerina Pages (Digital Download)" style={{ aspectRatio: "1"}} data-listing-card-listing-image="" sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw" srcset="https://i.etsystatic.com/27554322/r/il/923761/5832665444/il_300x300.5832665444_k1wp.jpg 300w, https://i.etsystatic.com/27554322/r/il/923761/5832665444/il_600x600.5832665444_k1wp.jpg 600w, https://i.etsystatic.com/27554322/r/il/923761/5832665444/il_800x800.5832665444_k1wp.jpg 800w" />

            
            
    </div>
        
</div>
                    
                </div>
        
                <div class="v2-listing-card__info
     wt-pt-xs-0
    
    ">
        
    
            <div class="wt-grid wt-align-items-baseline"><div class="wt-grid__item-xs-12 wt-grid__item-xl-8  wt-p-xs-0">
            <h3 class="wt-text-title-small v2-listing-card__title
                wt-text-truncate
                
                  wt-mt-xs-1" id="listing-title-1694219649">
                Vintage Ballet Junk Journal Kit: Shabby Chic Ballerina Pages (Digital Download)
            </h3>

            </div>
            <div class="wt-grid__item-xs-12 wt-grid__item-xl-4  wt-p-xs-0">
                <div class="wt-display-flex-xs wt-flex-direction-row inline-title-and-stars-wrap">
                    <span class="
        
        wt-display-flex-xs wt-flex-nowrap wt-align-items-center
     larger_review_stars 
    
">
                <span class="wt-text-title-small">
                    5.0
                </span>
            <div role="img" aria-label="5.0 star rating with 19.1k reviews" class="wt-align-items-center wt-max-height-full wt-display-flex-xs flex-direction-row-xs wt-text-title-small wt-no-wrap search-half-unit-mr">
                <span class="wt-icon wt-icon--smaller-xs single-star-rating-star-spacing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
  <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
</svg></span><p class="wt-text-body-smaller  wt-text-black">(19.1k)</p>
            </div>
</span>
                </div>
            </div>
        </div>
            
                            <p class="wt-text-caption wt-text-truncate dRgs129Dl7 wt-text-body-smaller streamline-seller-shop-name__line-height" data-seller-name-container="">
              <span class="bmrcbo5d4" aria-hidden="true">
                    ad <span class="tibtcb6nb">vertisement</span> by PolkaArtStudio
              </span>
              <span class="bmrcbo5d4 wt-screen-reader-only">Ad<span class="p06299890">vertisement</span> from shop PolkaArtStudio</span>
              <span class="i756n8qyj" aria-hidden="true">
                    PolkaArtStudio
              </span>
              <span class="i756n8qyj wt-screen-reader-only">From shop PolkaArtStudio</span>
        </p>
            
                        <div class="search-half-unit-mt"></div>
                           <div class="n-listing-card__price  wt-display-flex-xs wt-align-items-center wt-width-full wt-flex-wrap wt-width-full
             wt-text-title-01 lc-price
             ">


                    <p class="
                              
                              
                              wt-text-title-01 lc-price">
                        <span class="wt-screen-reader-only">
                            Sale Price USD 2.21
                        </span>
                        <span aria-hidden="true">
                            <span class="currency-symbol">USD </span><span class="currency-value">2.21</span>
                        </span>
                        </p><p class="wt-text-caption
                            search-collage-promotion-price
                            
                            
                            wt-text-slime
                            wt-text-truncate wt-no-wrap">
                            <span class="wt-text-strikethrough wt-text-grey" aria-hidden="true"><span class="currency-symbol">USD </span><span class="currency-value">4.44</span></span>
                            <span class="wt-screen-reader-only">
                                Original Price USD 4.44
                            </span>
                            <span class="wt-text-grey ">
                                
                                (50% off)
                                
                            </span>
                        </p>
                    <p></p>

</div>
                        
                        
                            
                        
                    
            
                    
                
            

                    
                            <div class="wt-display-flex-xs wt-flex-nowrap wt-align-items-center  wt-mb-xs-1 ">
        <span class="wt-icon wt-icon--core lc-signal-icon wt-icon--smaller-xs wt-fill-denim-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M21 12.32a7.379 7.379 0 000-.82A7.5 7.5 0 008.71 5.73a6.63 6.63 0 013.06 1.75c.13.12.24.26.36.39l-.89.89A6 6 0 107 19h12.5a3.5 3.5 0 001.5-6.68zm-9 5.35l-3.51-2.11 1-1.72 1.49.89V11h2v3.73l1.49-.89 1 1.72L12 17.67z"></path>
</svg></span>
    <p class="wt-text-truncate wt-text-body-small wt-text-gray lc-signal-bold wt-text-caption">
        Digital Download
    </p>
</div>



            
            
                
            
            
            
</div>
    </a>
            <div data-favorite-button-wrapper="" class="v2-listing-card__actions wt-z-index-1 wt-position-absolute ">
                <button class="btn--focus  wt-position-absolute wt-btn wt-btn--light wt-btn--small wt-z-index-2
            wt-btn--filled wt-btn--icon neu-default-favorite wt-position-right wt-position-top fav-opacity-hidden neu-hover-on-card neu-default-button-position
            " data-ui="favorite-listing-button" data-listing-id="1694219649" data-accessible-btn-fave="" data-favorite-label="Add to Favorites" data-favorited-label="Remove from Favorites" data-listing-source="recs" data-logging-key="453996adee0323bbb17c068f1f702de1:LTe0e37f894e460269ddc0a5960c81f2aff84993e0">
            <div class="favorite-listing-button-icon-container should-animate " data-source="listing-card" data-btn-fave="" data-neu-fave="" data-favorite-icon-container="">
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs
                    
                    
                        
                        
                            wt-display-block
                        
                    " data-not-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg></span>
                <span class="etsy-icon wt-nudge-t-1 wt-icon--smaller-xs wt-text-favorite-heart
                    
                    
                        
                        
                            wt-display-none
                        
                    " data-favorited-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.024 12.281a2 2 0 0 1-.147.24l-.673.961q-.349.497-.789.915L12 21.422l-7.415-7.025a6 6 0 0 1-.789-.915l-.673-.961a2 2 0 0 1-.147-.24A6 6 0 0 1 12 4.528a6 6 0 0 1 9.024 7.753"></path></svg></span>
            </div>
            <span aria-hidden="true" class="icon"></span>
            <span class="wt-screen-reader-only" data-a11y-label="">
                
                Add to Favorites
            </span>
            </button>
            </div>
</div>
</li>
</ul>
</div>
    </div>
    <div data-wt-overlay="" id="user-lists-overlay" class="wt-overlay wt-display-none wt-position-fixed wt-position-bottom wt-overlay--has-close-icon collection-list-overlay " role="dialog" aria-hidden="true" aria-modal="false" aria-labelledby="collection-modal-title" data-animations="{ &quot;open&quot;: { &quot;mask&quot;: &quot;wt-animated wt-animated--appear-02&quot;, &quot;content&quot;: &quot;wt-animated wt-animated--appear-02&quot; }, &quot;close&quot;: { &quot;mask&quot;: &quot;wt-animated wt-animated--disappear-02&quot;, &quot;content&quot;: &quot;wt-animated wt-animated--disappear-02&quot; } }">
    <div class="wt-overlay__modal collection-list-overlay-view wt-display-flex-xs wt-pb-xs-0 wt-pb-md-4 " data-overlay-modal="">
        <div data-collection-list="" data-max-characters="50" class="wt-overflow-hidden favorites-modal-collection-list wt-width-full">
    <button class="wt-btn wt-btn--icon wt-btn--tertiary wt-btn--light  wt-overlay__close-icon
        " data-wt-overlay-close="" data-overlay-initial-focus="" aria-label="Close">
        <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg></span>
    </button>
    <div data-collection-list-section="" class="favorites-modal--collection-list-section wt-position-relative wt-flex-direction-column-xs wt-height-full wt-align-items-center">
        <div class="wt-overlay__header wt-display-flex-xs wt-align-items-center wt-justify-content-center ">

            <img src="https://www.etsy.com/images/grey.gif" alt="An image of the listing you can save" class="wt-mr-xs-2 wt-mr-md-3 add-to-list-overlay--img" />

            <h2 class="wt-text-heading" id="collection-modal-title">
                <span data-collections-modal-title="" class="">
                    Add to collection
                </span>
                <span data-registry-modal-title="" class="wt-display-none">
                    Add to registry
                </span>
            </h2>
        </div>
        <div class="collection-list-loading-container" data-spinner-container="">
            <div class="wt-spinner wt-spinner--02">
                <div>Loading</div>
            </div>
        </div>
        <div class="wt-display-none collection-list-loading-container" data-collection-list-fail-state="">
            <div class="wt-vertical-center wt-text-center-xs wt-sem-text-secondary">
                <p>Hmm, something went wrong.</p>
                <p>Try that again.</p>
            </div>
        </div>
        <fieldset class="wt-max-width-full wt-pr-xs-2 wt-overflow-scroll">
            <div class="wt-display-none wt-width-full wt-action-group wt-action-group--image wt-list-inline wt-mb-xs-0" data-collection-list-content="">
                <span class="wt-p-xs-0 wt-width-full wt-mb-xs-2">
                    <input type="checkbox" id="create_new_list" hidden="" />
                    <label role="button" tabindex="0" data-add-list-trigger="" class="add-to-list-overlay-row wt-width-full wt-display-flex-xs wt-align-items-center">
                        <div class="add-list--trigger add-to-list-overlay-row--icon wt-sem-text-on-surface-dark wt-rounded-02 wt-overflow-hidden wt-display-flex-xs wt-justify-content-center wt-align-items-center">
                            <span class="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,20,11Z"></path></svg></span>
                        </div>
                        <p class="wt-pl-xs-2 wt-text-title-01">
                            Create new collection
                        </p>
                    </label>
                </span>
                
                
                
            </div>
        </fieldset>
        <div class="wt-overlay__sticky-footer-container wt-bt-xs wt-width-full">
            <div class="wt-overlay__footer wt-justify-content-flex-end wt-pt-md-4">
                <div class="wt-overlay__footer__action">
                    <button type="button" class="wt-btn wt-btn--primary wt-pr-md-7 wt-pl-md-7" data-wt-overlay-close="">Done</button>
                </div>
            </div>
        </div>
    </div>
    <div class="wt-display-none" data-add-collection-section="" data-listing-id="">
        <div data-collection-list-add="">
    <div class="wt-overlay__header">
        <h3 class="wt-text-heading wt-text-center-xs">
            Create new collection
        </h3>
    </div>
    <div class="wt-display-flex-xs wt-flex-direction-row-xs wt-align-items-baseline">
        <div class="wt-validation wt-width-full">
            <label class="wt-label" for="edit-list">Name</label>
            <input data-add-collection-input="" autofocus="" aria-invalid="false" type="text" class="wt-input" id="edit-list" placeholder="Gifts, Home, Wedding, etc." />
            <div class="wt-display-flex-xs wt-justify-content-space-between">
                <div>
                    <div data-duplicated-name-alert="" data-error="duplicate_name" class="wt-validation__message wt-validation__message--is-hidden wt-sem-text-critical">You've already used that name</div>
                    <div data-too-long-alert="" data-error="too_long" class="wt-validation__message wt-validation__message--is-hidden wt-sem-text-critical">
                        Collection name is too long
                    </div>
                </div>
                <p class="wt-text-right-xs wt-sem-text-secondary wt-mt-md-1" data-character-count="">50</p>
            </div>
        </div>
    </div>
    <div class="wt-display-flex-sm wt-flex-direction-column-xs wt-flex-direction-row-md wt-justify-content-space-between wt-mt-xs-1">
            <div class="wt-mb-xs-5 wt-mb-md-0">
                <legend class="wt-text-title-01 wt-mt-xs-1">
                    Set to private?
                </legend>
                <p class="wt-text-body-01 wt-max-width-sm wt-ml-xs-0">
                    Keep collections to yourself or inspire other shoppers! Keep in mind that anyone can view public collections—they may also appear in recommendations and other places.
                    <a href="https://www.etsy.com/legal/privacy/" target="_blank">View Etsy’s Privacy Policy</a></p>
            </div>
            <div>
                    <div id="collection-privacy-control" class="wt-display-flex-md wt-flex-direction-column-xs wt-align-items-center" data-label-yes="Private" data-label-no="Public" data-selector="toggle-switch">
                        <div data-clg-id="WtSwitchInput" class="wt-switch__wrapper" data-wt-props-small="true" data-wt-props-label-text="Set to private?" data-wt-props-label-type="hidden" data-wt-neu-rendered="">
    
    <div class="wt-switch__frame">
        <input type="checkbox" class="wt-switch wt-switch--small" id="wt-switch-691317b639e36" />
        <label class="wt-switch__toggle" for="wt-switch-691317b639e36">
            <span class="wt-screen-reader-only">
                Set to private? 
            </span>
        </label>
    </div>
    
</div>

                        <div class="wt-display-flex-xs wt-flex-direction-row-reverse-xs wt-align-items-center wt-justify-content-flex-end wt-nudge-t-2">
                            <span data-toggle-private-text="" class="wt-text-body">
                                Public
                            </span>
                            <span class="etsy-icon wt-icon--smaller-xs wt-mr-xs-1 wt-display-none" data-toggle-private-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 13v5h-2v-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.25A.25.25 0 0 1 4.25 9H7.5V6.5a4.5 4.5 0 0 1 9 0V9h3.25a.25.25 0 0 1 .25.25V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM9.5 6.5a2.5 2.5 0 0 1 5 0V9h-5zM8 20a2 2 0 0 1-2-2v-7h12v7a2 2 0 0 1-2 2z"></path></svg></span>
                            <span class="etsy-icon wt-icon--smaller-xs wt-mr-xs-1" data-toggle-public-icon=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2M9 18.883v.528a7.94 7.94 0 0 1-4.94-8.351l3.385 3.385a2.967 2.967 0 0 0 1.649 4.4zM17.5 15q.252 0 .5-.05V15a.99.99 0 0 0 .927.985A8 8 0 0 1 12 20c-.216 0-.427-.016-.639-.032l1.254-2.5-.015.006a2.97 2.97 0 0 0-.08-3.11A2.988 2.988 0 0 0 8 13.78V11h1a1 1 0 0 0 1-1V9a1 1 0 0 0 1-1 1 1 0 1 0 0-2H6.726A7.9 7.9 0 0 1 14 4.263V6a1 1 0 0 0 2 0v-.918a8 8 0 0 1 2 1.649V7h-1a1 1 0 1 0 0 2h2.411q.196.49.326 1H17a2.556 2.556 0 0 0-2 2.5 2.5 2.5 0 0 0 2.5 2.5"></path></svg></span>
                        </div>
                    </div>
            </div>
        </div>
    <div data-collection-list-add-footer="">
        <div class="wt-overlay__footer">
            <div class="wt-overlay__footer__cancel">
                <button type="button" class="wt-btn wt-btn--transparent wt-btn--transparent-flush-left wt-btn--transparent-flush-right" data-overlay-back="">Cancel</button>
            </div>
            <div class="wt-overlay__footer__action">
                <button type="button" class="wt-btn wt-btn--primary" data-add-collection-button="" disabled="true">
                    Create collection
                </button>
            </div>
        </div>
    </div>
</div>
<div class="wt-overlay wt-overlay--alert" id="make-public-list-modal" data-wt-overlay="" aria-hidden="true" role="alertdialog" aria-modal="false">
    <div class="wt-overlay__modal" data-overlay-modal="">
        <div class="wt-overlay__header">
            <h2 class="wt-text-heading wt-text-center-xs">
                Make your collection public?

            </h2>
        </div>
        <div class="wt-display-flex-xs wt-justify-content-space-between">
            <div>
                <p>
                    Public collections can be seen by the public, including other shoppers, and may show up in recommendations and other places.
                </p>
            </div>
        </div>
        <div class="wt-overlay__footer">
            <div class="wt-overlay__footer__cancel">
                <button type="button" data-selector="cancel-make-public-button" class="wt-btn wt-btn--transparent wt-btn--transparent-flush-left wt-btn--transparent-flush-right">Cancel</button>
            </div>
            <div class="wt-overlay__footer__action">
                <button type="button" data-selector="make-public-button" class="wt-btn wt-btn--primary">Make Public</button>
            </div>
        </div>
    </div>
</div>
    </div>
</div>
    </div>
</div>
     
        <div class="wt-display-flex-xs wt-justify-content-center">
            <nav data-clg-id="WtPagination" aria-label="Page results">
    <div class="wt-action-group wt-list-inline wt-flex-no-wrap  wt-mt-xs-4 wt-mb-xs-4">
            <div class="wt-action-group__item-container">
                <a class="wt-action-group__item wt-btn wt-btn--icon  wt-is-disabled" aria-disabled="true" role="link">
                    <span class="wt-screen-reader-only">Previous page</span>
                    <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z"></path>
</svg></span>
                </a>
            </div>



            <div class="wt-action-group__item-container">
                <a class="wt-action-group__item wt-btn wt-btn--icon " href="https://www.etsy.com/r/themes/1368497667979?anchor_listings=1542627936&amp;ref=pagination&amp;page=2" data-page="2">
                    <span class="wt-screen-reader-only">Next page</span>
                    <span class="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path>
</svg></span>
                </a>
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

export default Category;
