import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";
const d:ServiceData={
relatedServices:[
  {
    title:"Paid Social",
    description:"Scale audience acquisition through paid campaigns across Meta, LinkedIn, TikTok, Pinterest and Snapchat.",
    href:"/social-media-paid-marketing"
  },
  {
    title:"Branding",
    description:"Build a distinctive brand identity and positioning that strengthens recognition across every social touchpoint.",
    href:"/branding"
  },
  {
    title:"Graphics Designing",
    description:"Create scroll-stopping visual assets that keep your social content consistent, recognizable and platform-ready.",
    href:"/graphics-designing"
  }
],"title": "Social Media Marketing", "eyebrow": "SOCIAL MEDIA MARKETING EXPERTS", "hero": "Don't Just Compete, Dominate.", "introTitle": "Our Social Media Sorcery: Services That Drive Engagement", "intro": "The digital realm is crowded. Phantom turns social presence into a deliberate system of strategy, storytelling, community and platform-specific execution.", "services": ["Social Media Strategy & Consulting", "Content Creation & Management", "Paid Social Advertising", "Community Engagement", "Influencer Marketing", "Social Media Audits", "Platform-Specific Mastery", "Reporting & Optimization"], "serviceCards":[
  {
    "title":"Organic Social Media Marketing",
    "description":"Build an always-on brand presence through content, community, platform-native storytelling and consistent audience engagement.",
    "href":"#organic-social"
  },
  {
    "title":"Paid Social",
    "description":"Amplify reach and acquisition through paid campaigns across Meta, LinkedIn, TikTok, Pinterest and Snapchat.",
    "href":"/social-media-paid-marketing"
  }
],"whySectionId":"organic-social","failures": ["Posting without a strategy", "Chasing engagement with no business objective", "Using the same voice and format on every platform"], "process": ["Audience & Brand Audit", "Channel Strategy", "Content Spellbook", "Publishing & Community", "Campaign Testing", "Reporting & Evolution"], "arsenal": ["Meta", "LinkedIn", "TikTok", "Pinterest", "Snapchat", "Analytics"], "faqs": [["What does social media management include?", "Scope can include strategy, planning, content, publishing, community and reporting depending on the engagement."], ["Do you manage paid social too?", "Yes. Paid social can be integrated or handled through dedicated platform services."], ["Do you create platform-specific content?", "Yes. Format, tone and creative should respect how each platform is actually used."], ["How does Phantom approach Social Media Marketing?", "We start with the audience, market, objective and current digital setup, then build the Social Media Marketing plan around those realities rather than a copied template."], ["How soon can Social Media Marketing be launched?", "Timing depends on access, tracking, creative or technical requirements, and the scope agreed during discovery."], ["How do you measure Social Media Marketing performance?", "We define relevant success signals before execution and review them alongside the quality of traffic, leads, engagement or visibility generated."]], "valueTitle": "Social Media: Your Always-On Brand Presence", "valueIntro": "Social Media Marketing is not just about being present. The businesses that win use it to create stronger visibility, a clearer customer journey and a repeatable path from attention to meaningful action.", "valueBullets": ["Earn attention in crowded feeds — create a recognizable presence instead of posting for the sake of activity.", "Turn engagement into brand demand — connect content, community and campaigns to meaningful customer actions.", "Build consistency across platforms — use a repeatable content system that can learn and evolve."], "choiceTitle": "The Choice is Yours… Stay Invisible or Become a Social Sensation", "choiceCopy": "You can keep blending in, or you can own the conversation. Step into the spotlight with a social presence built to earn attention, engagement and lasting recognition.", "choiceButton": "LET'S DOMINATE SOCIAL MEDIA!"};
export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/social-media-marketing"}};
export default function Page(){return <PhantomServicePage d={d}/>}
