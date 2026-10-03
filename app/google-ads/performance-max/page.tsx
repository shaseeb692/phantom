import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
parentService:{title:"Google Ads",href:"/google-ads"},

title:"Google Ads Performance Max",
eyebrow:"PERFORMANCE MAX",
hero:"One Campaign. Multiple Surfaces. Relentless Optimization.",
introTitle:"Performance Max Without the Black-Box Chaos",
intro:"Performance Max combines Google's automation, audience signals, creative assets and conversion goals across multiple eligible Google surfaces. Phantom focuses on the inputs and measurement that give automation better direction.",
services:["Performance Max Strategy","Asset Group Planning","Audience Signals","Creative Asset Management","Product Feed Integration","Conversion Tracking","Search Theme Strategy","Performance Analysis"],
"relatedServices":[{
  "title":"Search Ads",
  "description":"Capture high-intent demand from people actively searching for your products, services or solutions.",
  "href":"/google-ads/search-ads"
},{
  "title":"Display Ads",
  "description":"Build visibility across Google's Display Network with audience-led visual campaigns and remarketing.",
  "href":"/google-ads/display-ads"
},{
  "title":"Shopping Ads",
  "description":"Put products directly in front of high-intent shoppers with feed-driven Google Shopping campaigns.",
  "href":"/google-ads/shopping-ads"
},{
  "title":"Video Ads",
  "description":"Reach and influence audiences through YouTube and Google's video advertising inventory.",
  "href":"/google-ads/video-ads"
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
}],failures:["Feeding automation weak conversion data","Using poor or incomplete creative assets","Launching without meaningful account structure or measurement"],
process:["Goal Definition","Tracking Audit","Signal & Asset Planning","Campaign Build","Launch & Learning","Continuous Optimization"],
arsenal:["Google Ads","Google Analytics 4","Google Tag Manager","Merchant Center","Looker Studio","Google Ads Editor"],
faqs:[
["What is Performance Max?","Performance Max is a goal-based Google Ads campaign type that uses automation across multiple eligible Google advertising surfaces."],
["Does Performance Max replace every campaign type?","Not necessarily. The right account structure depends on objectives, data, products, search strategy and the level of control required."],
["What are audience signals?","Audience signals provide useful information that can help Google's systems understand relevant audience characteristics and intent."],
["Does Performance Max need creative assets?","Strong text, image and video assets can improve the campaign's ability to communicate across different placements."],
["How important is conversion tracking?","It is critical because automated bidding and optimization depend heavily on the conversion signals provided to the platform."],
["Can Performance Max be used for e-commerce?","Yes. It can work with Merchant Center product feeds when appropriate for the retailer and campaign objectives."]
],
valueTitle:"Performance Max: Give Automation Better Signals",
valueIntro:"Automation is only as useful as the objectives, conversion data, feeds, audiences and creative signals guiding it.",
valueBullets:["Build campaigns around clearly defined business outcomes.","Give automation stronger audience, creative and conversion inputs.","Review performance signals instead of treating automation as set-and-forget."],
choiceTitle:"The Choice is Yours… Feed the Machine Noise or Give It Direction",
choiceCopy:"Make automation work from stronger signals, better assets and measurement tied to meaningful outcomes.",
choiceButton:"MAXIMIZE PERFORMANCE!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/performance-max"}};
export default function Page(){return <PhantomServicePage d={d}/>}