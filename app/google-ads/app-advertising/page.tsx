import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

const d:ServiceData={hideArsenal:true,
title:"Google Ads App Advertising",
eyebrow:"APP ADVERTISING",
hero:"More Installs. Better Users. Stronger App Growth.",
introTitle:"App Campaigns Built Around Valuable Actions",
intro:"Google App advertising can help promote mobile applications across eligible Google surfaces. Phantom aligns campaign objectives, creative assets and measurement around installs, engagement and valuable in-app actions.",
services:["App Campaign Strategy","Install Campaigns","In-App Action Campaigns","Audience & Goal Planning","Creative Asset Strategy","Conversion Measurement","Deep-Link Journey Review","Performance Optimization"],
failures:["Chasing installs without user quality","Weak in-app event measurement","Sending users into broken or confusing app journeys"],
process:["App Growth Audit","Goal Definition","Event Validation","Creative Planning","Campaign Launch","Performance Optimization"],
arsenal:["Google Ads","Google Analytics 4","Firebase","Google Tag Manager","Google Play","Looker Studio"],
faqs:[
["What are Google App campaigns?","Google App campaigns use automation to promote eligible apps across multiple Google advertising surfaces."],
["Can campaigns optimize beyond installs?","Where appropriate measurement and sufficient data are available, campaigns can focus on valuable in-app actions rather than installs alone."],
["Is Firebase useful for app advertising?","Firebase can support app analytics and event measurement that help teams understand user behavior and campaign outcomes."],
["Do app campaigns need creative assets?","Yes. Text, image and video assets can provide Google's systems with combinations to use across eligible placements."],
["Can you measure in-app actions?","Relevant app events should be configured and validated so campaign performance can be assessed beyond the initial install."],
["Do you work with Android and iOS apps?","Campaign planning depends on the app, platform setup, measurement stack and advertising objectives."]
],
valueTitle:"Google App Advertising: Acquire Users Who Actually Matter",
valueIntro:"App growth is not simply an install count. Stronger campaigns connect acquisition with engagement and valuable in-app behavior.",
valueBullets:["Promote apps across Google's eligible advertising inventory.","Measure meaningful events beyond the initial installation.","Use performance signals to improve acquisition quality over time."],
choiceTitle:"The Choice is Yours… Collect Installs or Build Real App Growth",
choiceCopy:"Connect app acquisition with the events and users that create meaningful value.",
choiceButton:"GROW THE APP!"
};

export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/google-ads/app-advertising"}};
export default function Page(){return <PhantomServicePage d={d}/>}