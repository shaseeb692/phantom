import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
title:"Google Search Ads",
eyebrow:"GOOGLE SEARCH ADS",
hero:"Own the Search. Capture the Intent.",
introTitle:"High-Intent Search Advertising",
intro:"Google Search Ads put your brand in front of people actively searching for products, services and solutions like yours. Phantom builds intent-led campaigns designed around relevance, conversion journeys and measurable action.",
services:["Keyword Research & Intent Mapping","Search Campaign Architecture","Responsive Search Ads","Negative Keyword Management","Audience & Demographic Layering","Conversion Tracking","Landing Page Alignment","Remarketing for Search"],
failures:["Targeting broad or irrelevant keywords","Weak ad-to-landing-page relevance","Optimizing clicks instead of meaningful conversions"],
process:["Search Intent Discovery","Keyword Architecture","Campaign & Ad Creation","Conversion Tracking","Landing Page Alignment","Continuous Optimization"],
arsenal:["Google Ads","Keyword Planner","Google Analytics 4","Google Tag Manager","Looker Studio","Google Search Console"],
faqs:[
["What are Google Search Ads?","Search Ads are paid placements that can appear when users search Google for relevant keywords and queries."],
["How are keywords selected?","We evaluate search intent, relevance, commercial value, competition and the relationship between the query, ad and landing page."],
["Do you manage negative keywords?","Yes. Negative keyword management helps reduce irrelevant traffic and protect campaign efficiency."],
["Can Search Ads generate leads quickly?","Search campaigns can begin generating traffic after launch, while sustainable efficiency normally requires testing and optimization."],
["Do you set up conversion tracking?","Yes. Reliable conversion measurement is essential for understanding which campaigns, ads and queries contribute to meaningful actions."],
["Do you optimize landing pages too?","We review landing-page alignment and identify improvements that can strengthen the journey from search query to conversion."]
],
valueTitle:"Google Search Ads: Turn Search Intent Into Action",
valueIntro:"Search advertising works best when keyword intent, messaging, landing pages and measurement operate as one connected system.",
valueBullets:["Capture people already searching for relevant solutions.","Connect each search with focused messaging and landing journeys.","Use conversion data to refine keywords, ads and budget allocation."],
choiceTitle:"The Choice is Yours… Watch Searches Pass or Capture the Intent",
choiceCopy:"Your customers are already searching. Put your brand in the right searches with campaigns built around relevance and measurable action.",
choiceButton:"CAPTURE THE SEARCH!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/search-ads"}};
export default function Page(){return <PhantomServicePage d={d}/>}