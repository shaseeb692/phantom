import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
title:"Google Ads Demand Gen",
eyebrow:"DEMAND GEN",
hero:"Create Demand Before the Search Begins.",
introTitle:"Visual Campaigns Built for Discovery",
intro:"Google Demand Gen campaigns help brands reach audiences through visual, discovery-led experiences across eligible Google surfaces. Phantom combines audience signals, creative testing and conversion measurement to move people from discovery toward action.",
services:["Demand Gen Strategy","Audience Segmentation","Lookalike & Signal Planning","Image & Video Creative","Product Feed Integration","Creative Testing","Conversion Tracking","Campaign Optimization"],
failures:["Generic creative with no audience relevance","Poor audience signal strategy","Judging discovery campaigns only by last-click conversions"],
process:["Audience Discovery","Journey Mapping","Creative Planning","Campaign Build","Measurement Setup","Optimization & Scaling"],
arsenal:["Google Ads","Google Analytics 4","Google Tag Manager","YouTube","Merchant Center","Looker Studio"],
faqs:[
["What are Demand Gen campaigns?","Demand Gen is a Google Ads campaign type designed around visual, audience-led discovery and demand creation across eligible Google surfaces."],
["How is Demand Gen different from Search Ads?","Search responds primarily to expressed search intent, while Demand Gen can reach audiences earlier in the discovery and consideration journey."],
["Do Demand Gen campaigns use video?","Campaign assets can include visual formats such as images and video depending on platform requirements and campaign configuration."],
["Can product feeds be used?","Product-feed functionality may be used where supported and relevant to the campaign."],
["How do you measure Demand Gen?","Measurement should consider the campaign objective, conversion signals and its role within the wider customer journey."],
["Is creative testing important?","Yes. Audience-led campaigns benefit from testing different messages, visuals and formats."]
],
valueTitle:"Demand Gen: Create Interest Before Competitors Capture It",
valueIntro:"Demand generation connects audience insight, creative storytelling and measurable journeys before a customer necessarily makes a direct search.",
valueBullets:["Reach potential customers during discovery and consideration.","Use richer visual creative to build relevance and interest.","Connect upper-funnel engagement with measurable downstream actions."],
choiceTitle:"The Choice is Yours… Wait for Demand or Help Create It",
choiceCopy:"Reach the right audiences earlier with visual campaigns designed to turn discovery into consideration and action.",
choiceButton:"GENERATE DEMAND!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/demand-gen"}};
export default function Page(){return <PhantomServicePage d={d}/>}