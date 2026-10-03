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
  title:"Pinterest Ads",
  description:"Reach people during visual discovery, planning and product consideration with intent-led paid campaigns.",
  href:"/pinterest-ads"
},
{
  title:"Snapchat Ads",
  description:"Reach mobile-first audiences through vertical creative, targeting and direct-response campaign journeys.",
  href:"/snapchat-ads"
}
],hideArsenal:true,"title": "TikTok Advertising", "eyebrow": "TIKTOK ADS", "hero": "Stop the Scroll Before It Escapes.", "introTitle": "TikTok Creative Has to Feel Native Before It Feels Like an Ad", "intro": "Phantom builds TikTok campaigns around hooks, vertical storytelling, rapid creative iteration and measurable actions.", "services": ["TikTok In-Feed Ads", "Spark Ads Strategy", "Vertical Creative Concepts", "Audience Targeting", "Creator-Led Ad Concepts", "Retargeting", "Conversion Tracking", "Creative Testing"], "failures": ["Recycling polished TV-style ads", "Waiting too long to reveal the hook", "Testing audiences without testing creative"], "process": ["Audience & Trend Recon", "Hook & Creative Matrix", "Tracking Setup", "Campaign Casting", "Rapid Test Cycles", "Scale Winners"], "arsenal": ["TikTok Ads Manager", "TikTok Pixel", "GA4", "GTM", "Creative Analytics", "Creator Assets"], "faqs": [["Do we need TikTok-style videos?", "Usually yes. Native vertical creative and strong opening hooks are central to the platform experience."], ["What are Spark Ads?", "Spark Ads can amplify eligible organic TikTok content through paid distribution."], ["Can TikTok work beyond Gen Z?", "Audience fit depends on market and offer; campaign decisions should be based on actual audience availability and economics."], ["How does Phantom approach TikTok Advertising?", "We start with the audience, market, objective and current digital setup, then build the TikTok Advertising plan around those realities rather than a copied template."], ["How soon can TikTok Advertising be launched?", "Timing depends on access, tracking, creative or technical requirements, and the scope agreed during discovery."], ["How do you measure TikTok Advertising performance?", "We define relevant success signals before execution and review them alongside the quality of traffic, leads, engagement or visibility generated."]], "valueTitle": "TikTok Advertising: Turn Paid Attention Into Measurable Action", "valueIntro": "TikTok Advertising is not just about being present. The businesses that win use it to create stronger visibility, a clearer customer journey and a repeatable path from attention to meaningful action.", "valueBullets": ["Reach high-value audiences — put budget behind people and moments with real commercial potential.", "Turn clicks and views into leads or customers — because paid traffic without a next step only burns budget.", "Test, learn and scale deliberately — use campaign signals to improve creative, targeting, landing journeys and spend."], "choiceTitle": "The Choice is Yours… Get Scrolled Past or Become Impossible to Ignore", "choiceCopy": "TikTok rewards creative that feels native, fast and worth watching. Build ideas for the way people actually consume the platform.", "choiceButton": "STOP THE SCROLL!"};
export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/tiktok-advertising"}};
export default function Page(){return <PhantomServicePage d={d}/>}
