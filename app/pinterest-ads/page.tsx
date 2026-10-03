import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";
const d:ServiceData={
relatedServices:[
{
  title:"Meta Ads",
  description:"Reach and convert audiences across Facebook and Instagram through targeting, creative testing and measurable paid campaigns.",
  href:"/meta-ads"
},
{
  title:"LinkedIn Ads",
  description:"Reach professional and B2B audiences through company, role, industry and business-context targeting.",
  href:"/linkedin-paid-advertising"
},
{
  title:"TikTok Ads",
  description:"Build mobile-first acquisition campaigns around native creative, rapid testing and audience signals.",
  href:"/tiktok-advertising"
},
{
  title:"Snapchat Ads",
  description:"Reach mobile-first audiences through vertical creative, targeting and direct-response campaign journeys.",
  href:"/snapchat-ads"
}
],hideArsenal:true,"title": "Pinterest Ads", "eyebrow": "PINTEREST ADS", "hero": "Turn Discovery Into Desire.", "introTitle": "People Pin the Future Before They Buy It", "intro": "Phantom uses visual intent, keywords, interests and product discovery behavior to connect brands with people while they are planning what comes next.", "services": ["Promoted Pins", "Keyword Targeting", "Interest & Audience Targeting", "Shopping Campaign Support", "Catalog Strategy", "Retargeting", "Creative Optimization", "Conversion Measurement"], "failures": ["Treating Pinterest like a social feed", "Ignoring search-style intent", "Using imagery with no save or click value"], "process": ["Intent & Category Audit", "Keyword / Audience Mapping", "Pin Creative System", "Tracking Setup", "Campaign Launch", "Optimization"], "arsenal": ["Pinterest Ads Manager", "Pinterest Tag", "Catalogs", "GA4", "GTM", "Creative Testing"], "faqs": [["Which businesses fit Pinterest Ads?", "Visual, planning-led and commerce categories often have natural use cases, but fit should be checked against audience and market data."], ["Is Pinterest advertising keyword-based?", "Pinterest supports multiple targeting approaches, including keyword and interest signals."], ["Can you run shopping campaigns?", "Commerce campaign support depends on catalog readiness, market availability and platform eligibility."], ["How does Phantom approach Pinterest Ads?", "We start with the audience, market, objective and current digital setup, then build the Pinterest Ads plan around those realities rather than a copied template."], ["How soon can Pinterest Ads be launched?", "Timing depends on access, tracking, creative or technical requirements, and the scope agreed during discovery."], ["How do you measure Pinterest Ads performance?", "We define relevant success signals before execution and review them alongside the quality of traffic, leads, engagement or visibility generated."]], "valueTitle": "Pinterest Ads: Turn Paid Attention Into Measurable Action", "valueIntro": "Pinterest Ads is not just about being present. The businesses that win use it to create stronger visibility, a clearer customer journey and a repeatable path from attention to meaningful action.", "valueBullets": ["Reach high-value audiences — put budget behind people and moments with real commercial potential.", "Turn clicks and views into leads or customers — because paid traffic without a next step only burns budget.", "Test, learn and scale deliberately — use campaign signals to improve creative, targeting, landing journeys and spend."], "choiceTitle": "The Choice is Yours… Stay Hidden or Own the Moment of Discovery", "choiceCopy": "Pinterest users are planning, saving and discovering what comes next. Put your brand inside that journey while intent is taking shape.", "choiceButton": "OWN THE DISCOVERY!"};
export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/pinterest-ads"}};
export default function Page(){return <PhantomServicePage d={d}/>}
