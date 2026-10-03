import type { Metadata } from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";

export const metadata:Metadata={
  title:"Search Engine Optimization (SEO) | Phantom Marketing",
  description:"Phantom Marketing SEO services covering technical SEO, on-page optimization, content, authority, local SEO, e-commerce SEO and app store optimization.",
  alternates:{canonical:"/search-engine-optimization"}
};

const d:ServiceData={
relatedServices:[
{
  title:"Answer Engine Optimization",
  description:"Structure content to answer real questions clearly and strengthen visibility across answer-driven search experiences.",
  href:"/answer-engine-optimization"
},
{
  title:"Generative Engine Optimization",
  description:"Improve how your brand and content can be understood, referenced and surfaced across generative search experiences.",
  href:"/generative-engine-optimization"
},
{
  title:"LLM / AI Search",
  description:"Build stronger brand visibility and discoverability across AI assistants, LLM-powered search and emerging discovery journeys.",
  href:"/llm-ai-search-optimization"
}
],
  title:"Search Engine Optimization",
  eyebrow:"SEARCH ENGINE OPTIMIZATION",
  hero:"Conjure Up Digital Success.",
  introTitle:"The Haunting Truth of SEO",
  intro:"Lost in the digital shadows? Search visibility is not created by publishing more pages and hoping Google notices. Phantom connects technical foundations, search intent, content depth, internal architecture and authority into an organic growth system built for people and search engines.",
  services:[
    "Keyword Research & Strategy",
    "On-Page SEO",
    "Off-Page SEO & Link Building",
    "Technical SEO",
    "Content Marketing",
    "Local SEO",
    "E-Commerce SEO",
    "App Store Optimization (ASO)"
  ],
  failures:[
    "Chasing rankings without understanding search intent",
    "Publishing thin content instead of building topical depth",
    "Ignoring crawlability, indexation and technical hygiene",
    "Treating backlinks as volume instead of relevance and authority",
    "Optimizing pages once and never improving them with real performance data"
  ],
  process:[
    "Strategy Call",
    "SEO Audit",
    "Implementation",
    "Optimization",
    "Reporting"
  ],
  arsenal:[
    "Neuron Writer",
    "WordPress",
    "Shopify",
    "Drupal",
    "GTmetrix",
    "WebPageTest",
    "Rank Math",
    "Bing Webmaster"
  ],
  markets:["Thailand","Dubai","Australia","Malaysia","Pakistan","Beyond"],
  industries:["Real Estate","Healthcare","E-Commerce","SaaS","Finance & Legal","Home Services"],
  valueTitle:"SEO: Your 24/7 Sales Machine",
  valueIntro:"Organic search can keep creating discovery long after a campaign click disappears. The goal is not traffic for traffic's sake—it is sustainable visibility around the searches that matter to the business.",
  valueBullets:[
    "Capture relevant demand when people are actively searching.",
    "Build useful content and technical foundations that compound over time.",
    "Connect rankings to qualified visits, actions and measurable business growth."
  ],
  counterLabels:["SEO Strategy Coverage","Core SEO Process Stages","Organic Presence"],
  faqs:[
    ["How long does SEO take to show results?","SEO timelines depend on competition, site condition, authority and the work required. Technical fixes can be reflected relatively quickly, while competitive organic growth usually compounds over a longer period."],
    ["What is included in Phantom's SEO service?","Our SEO work can include technical auditing, keyword and intent research, on-page optimization, content strategy, internal linking, authority development, local or e-commerce SEO and performance reporting depending on the project."],
    ["Do you guarantee first-position Google rankings?","No responsible SEO strategy can guarantee a specific organic position. We focus on improving the factors we can control: technical quality, relevance, usefulness, authority, discoverability and continuous optimization."],
    ["Do you handle technical SEO?","Yes. Technical SEO can cover crawlability, indexation, canonicals, status codes, site architecture, internal links, structured data, performance and other issues that affect search discovery and user experience."],
    ["Can you optimize an existing website instead of rebuilding it?","Yes. SEO does not automatically require a redesign. We audit the existing site first and prioritize changes according to impact, feasibility and business goals."],
    ["How do AEO, GEO and AI search fit into SEO?","They extend search optimization into answer engines and generative discovery. Strong technical foundations, clear entities, useful content and verifiable expertise help both traditional search and emerging AI-assisted discovery."]
  ],
  choiceTitle:"The Choice is Yours… Stay Invisible or Dominate Your Market",
  choiceCopy:"The digital world waits for no one. The longer you wait, the more business you lose to competitors. It's time to step up. Let's craft an SEO strategy that makes you UNSTOPPABLE.",
  choiceButton:"HIT THAT DAMN BUTTON NOW!"
};

export default function SearchEngineOptimizationPage(){
  return <PhantomServicePage d={d}/>;
}
