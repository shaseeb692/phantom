import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
parentService:{title:"Google Ads",href:"/google-ads"},

title:"Google Shopping Ads",
eyebrow:"GOOGLE SHOPPING ADS",
hero:"Put Products in Sight. Turn Searches Into Sales.",
introTitle:"Product-Led Advertising Built to Sell",
intro:"Google Shopping Ads connect product data with commercial search intent. Phantom structures feeds, campaigns and measurement so shoppers see accurate products, useful information and stronger paths to purchase.",
services:["Merchant Center Setup","Product Feed Optimization","Shopping Campaign Structure","Product Grouping","Performance Max for Retail","Conversion Tracking","Feed Diagnostics","Shopping Remarketing"],
"relatedServices":[{
  "title":"Search Ads",
  "description":"Capture high-intent demand from people actively searching for your products, services or solutions.",
  "href":"/google-ads/search-ads"
},{
  "title":"Display Ads",
  "description":"Build visibility across Google's Display Network with audience-led visual campaigns and remarketing.",
  "href":"/google-ads/display-ads"
},{
  "title":"Video Ads",
  "description":"Reach and influence audiences through YouTube and Google's video advertising inventory.",
  "href":"/google-ads/video-ads"
},{
  "title":"Performance Max",
  "description":"Drive goal-based performance across Google's channels through automated cross-channel campaigns.",
  "href":"/google-ads/performance-max"
},{
  "title":"Demand Gen",
  "description":"Create demand with visual campaigns designed for discovery-focused placements across Google.",
  "href":"/google-ads/demand-gen"
},{
  "title":"App Advertising",
  "description":"Promote app installs, engagement and valuable in-app actions across Google's advertising ecosystem.",
  "href":"/google-ads/app-advertising"
},{
  "title":"Local Search",
  "description":"Capture location-driven search demand from customers close to the business and ready to act.",
  "href":"/google-ads/local-search"
}],failures:["Incomplete or inaccurate product feeds","Poor product segmentation","Optimizing traffic without tracking revenue actions"],
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