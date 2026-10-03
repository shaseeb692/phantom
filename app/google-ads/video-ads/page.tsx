import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
parentService:{title:"Google Ads",href:"/google-ads"},

title:"Google Ads Video Ads",
eyebrow:"GOOGLE VIDEO ADS",
hero:"Command Attention. Possess the Screen.",
introTitle:"Video Campaigns Built Beyond the View",
intro:"Google Video Ads help brands reach audiences through video-led advertising across eligible Google and YouTube placements. Phantom connects audience strategy, creative messaging and measurement so video supports real marketing objectives.",
services:["YouTube Advertising","Video Campaign Strategy","Audience Targeting","Video Action Campaigns","Creative Testing","Remarketing","Conversion Tracking","Campaign Optimization"],
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
}],failures:["Optimizing only for cheap views","Weak hooks and unclear calls to action","Using the same creative for every audience"],
process:["Audience Research","Creative Strategy","Campaign Setup","Tracking Validation","Creative Testing","Performance Optimization"],
arsenal:["Google Ads","YouTube","Google Analytics 4","Google Tag Manager","Looker Studio","Canva"],
faqs:[
["Where can Google Video Ads appear?","Video campaigns can serve across eligible Google and YouTube inventory depending on campaign type and settings."],
["Do video ads only build awareness?","Video can support awareness, consideration and action-oriented objectives depending on campaign strategy and available measurement."],
["How important is the opening of a video ad?","The opening moments are important because they establish relevance and give viewers a reason to continue watching."],
["Can video campaigns use remarketing?","Relevant audience strategies can include previous visitors or engaged users where platform and privacy requirements permit."],
["Do you measure conversions from video campaigns?","Yes. Measurement should reflect the campaign objective and available conversion signals."],
["Can different creatives be tested?","Yes. Testing hooks, messages, formats and calls to action can help identify stronger creative combinations."]
],
valueTitle:"Google Video Ads: Turn Attention Into Momentum",
valueIntro:"Video becomes more valuable when creative, audience and measurement are designed together instead of treating views as the final goal.",
valueBullets:["Reach audiences with richer storytelling and visual communication.","Test hooks and creative concepts against meaningful objectives.","Connect video engagement with the wider customer journey."],
choiceTitle:"The Choice is Yours… Get Skipped or Command Attention",
choiceCopy:"Build video campaigns that give the right audience a reason to watch, remember and act.",
choiceButton:"COMMAND THE SCREEN!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/video-ads"}};
export default function Page(){return <PhantomServicePage d={d}/>}