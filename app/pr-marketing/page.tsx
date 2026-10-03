import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";
const d:ServiceData={
relatedServices:[
{
  title:"Branding",
  description:"Build the positioning, identity and brand foundation that supports stronger public perception.",
  href:"/branding"
},
{
  title:"Social Media Marketing",
  description:"Extend brand communication through social content, community engagement and always-on audience interaction.",
  href:"/social-media-marketing"
},
{
  title:"Search Engine Optimization",
  description:"Support digital PR with organic visibility, authority-building content and stronger search discoverability.",
  href:"/search-engine-optimization"
}
],"title": "PR Marketing", "eyebrow": "PR MARKETING", "hero": "Turn Whispers Into Authority.", "introTitle": "Attention Is Rented. Reputation Compounds.", "intro": "Phantom shapes stories, assets and outreach around what is genuinely newsworthy, useful or authoritative about your brand.", "services": ["PR Strategy", "Media Angle Development", "Press Releases", "Digital PR", "Media Outreach", "Thought Leadership", "Brand Mention Campaigns", "Reputation Support"], "failures": ["Sending generic releases to everyone", "Confusing publicity with credibility", "Pitching stories with no audience value"], "process": ["Story Discovery", "Angle & Asset Creation", "Media Mapping", "Outreach", "Coverage & Mention Review"], "arsenal": ["Media Lists", "Digital PR Research", "Brand Monitoring", "Search", "Analytics", "Content Assets"], "faqs": [["Can PR guarantee coverage?", "No credible PR process can guarantee independent editorial coverage. We can improve the story, targeting and outreach quality."], ["How does digital PR support SEO?", "Relevant earned mentions can strengthen discovery, authority and referral visibility; link outcomes depend on publishers."], ["Do you write press releases?", "Yes, when a release is appropriate for the story and distribution plan."], ["How does Phantom approach PR Marketing?", "We start with the audience, market, objective and current digital setup, then build the PR Marketing plan around those realities rather than a copied template."], ["How soon can PR Marketing be launched?", "Timing depends on access, tracking, creative or technical requirements, and the scope agreed during discovery."], ["How do you measure PR Marketing performance?", "We define relevant success signals before execution and review them alongside the quality of traffic, leads, engagement or visibility generated."]], "valueTitle": "PR Marketing: Turn Stories Into Trust", "valueIntro": "PR Marketing is not just about being present. The businesses that win use it to create stronger visibility, a clearer customer journey and a repeatable path from attention to meaningful action.", "valueBullets": ["Find the story worth telling — shape angles around real relevance instead of empty publicity.", "Build credible visibility — connect outreach and digital PR with the audiences and publications that matter.", "Extend the value of coverage — turn earned attention into authority signals and reusable brand assets."], "choiceTitle": "The Choice is Yours… Stay Unheard or Become the Story People Talk About", "choiceCopy": "Attention is temporary; credibility can compound. Shape stories and outreach that give your expertise a stronger reason to be noticed and remembered.", "choiceButton": "MAKE SOME NOISE!"};
export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/pr-marketing"}};
export default function Page(){return <PhantomServicePage d={d}/>}
