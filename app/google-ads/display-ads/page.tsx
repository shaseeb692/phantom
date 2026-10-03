import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,

title:"Google Display Ads",
eyebrow:"GOOGLE DISPLAY ADS",
hero:"Haunt the Web. Stay Impossible to Ignore.",
introTitle:"Visual Advertising Across the Web",
intro:"Google Display Ads help brands reach and re-engage audiences through visual placements across websites, apps and Google's advertising ecosystem. Phantom combines audience strategy, creative direction and measurement to make impressions work harder.",
services:["Display Campaign Strategy","Audience Targeting","Custom Segments","Responsive Display Ads","Creative Testing","Remarketing Campaigns","Placement Optimization","Conversion Measurement"],
"relatedServices":[{
  "title":"Search Ads",
  "description":"Capture high-intent demand from people actively searching for your products, services or solutions.",
  "href":"/google-ads/search-ads"
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
},{
  "title":"Local Search",
  "description":"Capture location-driven search demand from customers close to the business and ready to act.",
  "href":"/google-ads/local-search"
}],failures:["Targeting audiences too broadly","Running weak or repetitive creatives","Measuring impressions without business outcomes"],
process:["Audience Discovery","Campaign Architecture","Creative Development","Tracking Setup","Placement Optimization","Performance Refinement"],
arsenal:["Google Ads","Google Analytics 4","Google Tag Manager","Looker Studio","Canva","Google Ads Editor"],
faqs:[
["What are Google Display Ads?","Display Ads are visual advertisements delivered across eligible websites, apps and placements within Google's advertising ecosystem."],
["Are Display Ads useful for remarketing?","Yes. Remarketing can reconnect with people who previously interacted with your website or digital experience, subject to applicable privacy and platform requirements."],
["Do you create display creatives?","Creative requirements can be planned around campaign objectives, formats and available brand assets."],
["How do you control irrelevant placements?","Placement reporting, exclusions, audience refinement and campaign settings can be used to improve traffic quality."],
["Are Display Ads only for awareness?","No. Depending on the campaign and offer, Display can support awareness, consideration, remarketing and conversion objectives."],
["How is performance measured?","We align measurement with the campaign objective rather than judging success from impressions alone."]
],
valueTitle:"Google Display Ads: Make Visibility Work Harder",
valueIntro:"Display advertising becomes more useful when audience, creative, placement and measurement are treated as one system.",
valueBullets:["Reach relevant audiences beyond traditional search results.","Re-engage visitors with strategically planned remarketing.","Test creative and audience signals to improve campaign efficiency."],
choiceTitle:"The Choice is Yours… Fade Into the Web or Haunt Every Relevant Screen",
choiceCopy:"Turn visual reach into a deliberate advertising system built around audiences, creative and measurable outcomes.",
choiceButton:"HAUNT THE WEB!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/display-ads"}};
export default function Page(){return <PhantomServicePage d={d}/>}