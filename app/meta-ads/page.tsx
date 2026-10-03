import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";
const d:ServiceData={
relatedServices:[
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
  title:"Pinterest Ads",
  description:"Reach people during visual discovery, planning and product consideration with intent-led paid campaigns.",
  href:"/pinterest-ads"
},
{
  title:"Snapchat Ads",
  description:"Reach mobile-first audiences through vertical creative, targeting and direct-response campaign journeys.",
  href:"/snapchat-ads"
}
],hideArsenal:true,"title": "Meta Ads", "eyebrow": "META ADS", "hero": "Haunt Facebook. Possess Instagram.", "introTitle": "The Feed Is Crowded. Your Creative Cannot Be Ordinary.", "intro": "Phantom combines audience strategy, creative testing, event data and funnel thinking to turn Meta campaigns into a controlled experimentation system.", "services": ["Facebook Ads", "Instagram Ads", "Reels & Stories Ads", "Lead Generation Campaigns", "Retargeting Rituals", "Custom & Lookalike Audiences", "Creative Testing", "Pixel / CAPI Planning"], "failures": ["Running one creative until it dies", "Broad targeting without a funnel hypothesis", "Optimizing without reliable conversion signals"], "process": ["Account & Funnel Audit", "Audience Mapping", "Creative Spellbook", "Tracking Validation", "Campaign Launch", "Testing & Scale"], "arsenal": ["Meta Ads Manager", "Meta Pixel", "Conversions API", "GA4", "GTM", "Creative Testing"], "faqs": [["Do Meta Ads include Facebook and Instagram?", "Yes. Meta advertising can use placements across Facebook and Instagram depending on campaign goals and eligibility."], ["Do you create ad creatives?", "Creative strategy and testing can be included because performance depends heavily on the message and asset."], ["Can you retarget website visitors?", "Retargeting can be configured where tracking, consent and platform policies allow it."], ["How does Phantom approach Meta Ads?", "We start with the audience, market, objective and current digital setup, then build the Meta Ads plan around those realities rather than a copied template."], ["How soon can Meta Ads be launched?", "Timing depends on access, tracking, creative or technical requirements, and the scope agreed during discovery."], ["How do you measure Meta Ads performance?", "We define relevant success signals before execution and review them alongside the quality of traffic, leads, engagement or visibility generated."]], "valueTitle": "Meta Ads: Turn Paid Attention Into Measurable Action", "valueIntro": "Meta Ads is not just about being present. The businesses that win use it to create stronger visibility, a clearer customer journey and a repeatable path from attention to meaningful action.", "valueBullets": ["Reach high-value audiences — put budget behind people and moments with real commercial potential.", "Turn clicks and views into leads or customers — because paid traffic without a next step only burns budget.", "Test, learn and scale deliberately — use campaign signals to improve creative, targeting, landing journeys and spend."], "choiceTitle": "The Choice is Yours… Keep Scrolling Past Customers or Possess Their Feed", "choiceCopy": "Facebook and Instagram move fast. Build audience strategy, creative testing and conversion journeys that earn attention before it disappears.", "choiceButton": "POSSESS THE FEED!"};
export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/meta-ads"}};
export default function Page(){return <PhantomServicePage d={d}/>}
