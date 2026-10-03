import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
title:"Google Shopping Ads",
eyebrow:"GOOGLE SHOPPING ADS",
hero:"Put Products in Sight. Turn Searches Into Sales.",
introTitle:"Product-Led Advertising Built to Sell",
intro:"Google Shopping Ads connect product data with commercial search intent. Phantom structures feeds, campaigns and measurement so shoppers see accurate products, useful information and stronger paths to purchase.",
services:["Merchant Center Setup","Product Feed Optimization","Shopping Campaign Structure","Product Grouping","Performance Max for Retail","Conversion Tracking","Feed Diagnostics","Shopping Remarketing"],
failures:["Incomplete or inaccurate product feeds","Poor product segmentation","Optimizing traffic without tracking revenue actions"],
process:["Commerce Audit","Merchant Center Setup","Feed Optimization","Campaign Architecture","Conversion Validation","Performance Optimization"],
arsenal:["Google Ads","Merchant Center","Google Analytics 4","Google Tag Manager","Looker Studio","Shopify"],
faqs:[
["What are Google Shopping Ads?","Shopping Ads use product-feed information to show relevant products to users searching or browsing across eligible Google surfaces."],
["Do I need Google Merchant Center?","Merchant Center is a core part of managing product data for Google Shopping campaigns."],
["Can you optimize product feeds?","Yes. Feed quality, titles, attributes, categorization and diagnostics can materially affect product eligibility and relevance."],
["Can Shopping Ads work with Shopify?","Shopify stores can integrate product data and measurement with Google's commerce advertising ecosystem."],
["Do you track purchases and revenue?","Where technically available, purchase and revenue measurement should be validated so optimization can focus on commercial outcomes."],
["Do you manage Performance Max for retail?","Performance Max can be part of a retail strategy when it fits the account, available assets, product feed and objectives."]
],
valueTitle:"Google Shopping Ads: Put the Right Product in Front of the Right Search",
valueIntro:"Successful shopping campaigns depend on more than bids. Product data, campaign structure and conversion measurement all influence performance.",
valueBullets:["Improve product visibility for commercially relevant searches.","Strengthen product feeds so Google receives clearer product information.","Connect advertising performance with purchase and revenue signals."],
choiceTitle:"The Choice is Yours… Hide the Catalog or Put Products in the Spotlight",
choiceCopy:"Transform your product feed into a measurable advertising engine designed around discovery and purchase intent.",
choiceButton:"SHOW THE PRODUCTS!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/shopping-ads"}};
export default function Page(){return <PhantomServicePage d={d}/>}