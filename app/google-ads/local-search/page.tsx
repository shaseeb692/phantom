import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,

title:"Google Ads Local Search",
eyebrow:"LOCAL SEARCH ADS",
hero:"Own the Local Moment. Turn Nearby Intent Into Action.",
introTitle:"Paid Search for Location-Driven Demand",
intro:"Local search advertising helps businesses connect with people looking for nearby products, services and locations. Phantom aligns geographic targeting, local intent, business information and conversion measurement around real customer actions.",
services:["Local Search Strategy","Location Targeting","Local Keyword Research","Google Business Profile Alignment","Call & Lead Tracking","Location Assets","Local Landing Pages","Campaign Optimization"],
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
}],failures:["Targeting areas the business cannot serve","Using generic messaging for local intent","Failing to measure calls, directions or qualified leads"],
process:["Local Market Audit","Geo & Intent Research","Tracking Setup","Campaign Build","Local Journey Alignment","Optimization & Expansion"],
arsenal:["Google Ads","Google Business Profile","Google Analytics 4","Google Tag Manager","Keyword Planner","Looker Studio"],
faqs:[
["What is local search advertising?","It focuses paid search strategy on location-driven queries and audiences relevant to the areas a business serves."],
["Can campaigns target specific locations?","Google Ads provides geographic targeting controls that can be configured around relevant service areas and campaign goals."],
["Is Google Business Profile important?","Accurate business and location information can support the wider local search journey and relevant advertising features."],
["Can phone calls be measured?","Call-related conversion measurement can be configured where technically and platform-supported."],
["Do local campaigns need dedicated landing pages?","Location-relevant landing experiences can improve message consistency and help users find the information needed to take action."],
["Can multiple service areas be advertised?","Yes, but campaign structure and targeting should reflect actual coverage, budget and differences between markets."]
],
valueTitle:"Google Local Search Ads: Capture Demand Close to the Business",
valueIntro:"Local campaigns become stronger when geography, search intent, business information and conversion journeys agree with each other.",
valueBullets:["Reach people searching within commercially relevant locations.","Align local messaging with the services and areas actually covered.","Measure calls, leads and other meaningful local actions where possible."],
choiceTitle:"The Choice is Yours… Stay Hidden Nearby or Own the Local Search",
choiceCopy:"Be present when nearby customers are actively looking for what your business provides.",
choiceButton:"OWN LOCAL SEARCH!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/local-search"}};
export default function Page(){return <PhantomServicePage d={d}/>}