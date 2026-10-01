"use client";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";
import "./phantom-service.css";
export type ServiceData={title:string;eyebrow:string;hero:string;introTitle:string;intro:string;services:string[];failures:string[];process:string[];arsenal:string[];faqs:[string,string][];markets?:string[];marketsTitle?:string;marketsIntro?:string;industries?:string[];counterLabels?:string[];valueTitle?:string;valueIntro?:string;valueBullets?:string[];choiceTitle?:string;choiceCopy?:string;choiceButton?:string};
const DEFAULT_INDUSTRIES=['Real Estate','Healthcare','E-Commerce','SaaS','Finance & Legal','Home Services'];
function Counter({to,suffix,label}:{to:number;suffix:string;label:string}){const [n,setN]=useState(0);const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el)return;let done=false;const ob=new IntersectionObserver(([e])=>{if(!e.isIntersecting||done)return;done=true;const start=performance.now(),dur=1200;const tick=(t:number)=>{const q=Math.min(1,(t-start)/dur);setN(Math.round(to*(1-Math.pow(1-q,3))));if(q<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)},{threshold:.35});ob.observe(el);return()=>ob.disconnect()},[to]);return <div ref={ref} className="svc-counter"><strong>{n}{suffix}</strong><span>{label}</span></div>}

const TOOL_META:Record<string,{logo:string;title:string;description:string;color?:string;color2?:string}>={
  "Neuron Writer":{logo:"https://cdn.simpleicons.org/semanticweb",title:"Neuron Writer: AI-Powered Content Optimization",description:"We use content intelligence to study search intent, topical coverage and semantic gaps so content can answer the query clearly and compete with stronger relevance."},
  "WordPress":{logo:"https://cdn.simpleicons.org/wordpress",title:"WordPress: CMS Mastery",description:"We use WordPress as a flexible publishing and website platform, combining clean implementation, performance work and marketing integrations with a manageable editorial workflow."},
  "Shopify":{logo:"https://cdn.simpleicons.org/shopify",title:"Shopify: E-commerce Growth Stack",description:"We use Shopify for commerce experiences where product discovery, merchandising, analytics, conversion journeys and scalable store management need to work together."},
  "Drupal":{logo:"https://cdn.simpleicons.org/drupal",title:"Drupal: Enterprise Content Platform",description:"Drupal supports complex content models and enterprise requirements. We use its flexibility where structured publishing, permissions and scalable digital experiences matter."},
  "GTmetrix":{logo:"https://cdn.simpleicons.org/speedtest",title:"GTmetrix: Performance Demystified",description:"We use performance diagnostics to uncover loading bottlenecks and opportunities that affect user experience, Core Web Vitals and conversion journeys."},
  "WebPageTest":{logo:"https://cdn.simpleicons.org/webpagetest",title:"WebPageTest: Deep Performance Testing",description:"WebPageTest helps us inspect loading behavior, rendering and performance from different conditions so optimization decisions are based on evidence rather than guesswork."},
  "Rank Math":{logo:"https://cdn.simpleicons.org/rankmath",title:"Rank Math: WordPress SEO Control",description:"We use Rank Math where appropriate for metadata, schema and on-page implementation while keeping the strategy focused on the site itself rather than depending on a plugin score."},
  "Bing Webmaster":{logo:"https://cdn.simpleicons.org/microsoftbing",title:"Bing Webmaster Tools: Search Visibility Beyond Google",description:"We use Bing Webmaster Tools for indexing, crawl and search performance insights across Microsoft search properties and to broaden technical search visibility."},
  "Google Search Console":{logo:"https://cdn.simpleicons.org/googlesearchconsole",title:"Google Search Console: Organic Search Intelligence",description:"Search Console gives us first-party visibility into queries, pages, indexing and search performance so technical and content decisions can be tied to real search behavior."},
  "Google Analytics 4":{logo:"https://cdn.simpleicons.org/googleanalytics",title:"Google Analytics 4: Journey & Conversion Measurement",description:"GA4 helps us understand acquisition, engagement and conversion behavior so channel activity can be connected to what visitors actually do after arriving."},
  "Google Tag Manager":{logo:"https://cdn.simpleicons.org/googletagmanager",title:"Google Tag Manager: Measurement Infrastructure",description:"We use GTM to manage marketing and analytics tags in a controlled way, helping validate events and conversion measurement across campaigns and websites."},
  "Google Ads":{logo:"https://cdn.simpleicons.org/googleads",title:"Google Ads: High-Intent Paid Acquisition",description:"We use Google Ads to capture relevant demand across suitable Google inventory, with campaign structure, query control, conversion tracking and budget optimization aligned to business goals."},
  "Meta Ads":{logo:"https://cdn.simpleicons.org/meta",title:"Meta Ads: Paid Social Acquisition",description:"Meta Ads supports audience-led acquisition across Facebook and Instagram. We combine targeting, creative testing, retargeting and measurement to improve campaign efficiency."},
  "Meta Business Suite":{logo:"https://cdn.simpleicons.org/meta",title:"Meta Business Suite: Social Operations",description:"We use Meta's business tools to coordinate Facebook and Instagram publishing, account management, audience activity and campaign workflows."},
  "LinkedIn":{logo:"https://cdn.simpleicons.org/linkedin",title:"LinkedIn: Professional Audience Reach",description:"LinkedIn helps us reach professional and B2B audiences using company, role and professional context while aligning campaigns and content with longer consideration journeys."},
  "LinkedIn Campaign Manager":{logo:"https://cdn.simpleicons.org/linkedin",title:"LinkedIn Campaign Manager: B2B Paid Media",description:"We use Campaign Manager to structure LinkedIn advertising, professional audience targeting, lead generation and campaign measurement for B2B objectives."},
  "TikTok Ads":{logo:"https://cdn.simpleicons.org/tiktok",title:"TikTok Ads: Native-First Paid Creative",description:"TikTok Ads is used for vertical, native-feeling campaigns where rapid creative testing, audience signals and mobile-first conversion journeys are essential."},
  "TikTok":{logo:"https://cdn.simpleicons.org/tiktok",title:"TikTok: Short-Form Discovery",description:"We use TikTok's native content language to develop short-form creative that earns attention rather than feeling transplanted from another platform."},
  "Pinterest Ads":{logo:"https://cdn.simpleicons.org/pinterest",title:"Pinterest Ads: Visual Discovery Advertising",description:"Pinterest Ads helps brands reach people while they are actively planning and discovering ideas, products and future purchases through visual intent."},
  "Pinterest":{logo:"https://cdn.simpleicons.org/pinterest",title:"Pinterest: Visual Discovery",description:"Pinterest is useful for evergreen visual discovery and planning-led journeys, connecting searchable creative with products, ideas and inspiration."},
  "Snapchat Ads":{logo:"https://cdn.simpleicons.org/snapchat",title:"Snapchat Ads: Mobile-First Reach",description:"Snapchat Ads supports vertical creative and audience targeting for mobile-first campaigns designed around fast attention and direct action."},
  "Snapchat":{logo:"https://cdn.simpleicons.org/snapchat",title:"Snapchat: Camera-First Social",description:"Snapchat gives brands access to a camera-first environment where vertical storytelling and platform-native creative matter."},
  "LINE Ads":{logo:"https://cdn.simpleicons.org/line",title:"LINE Ads: Market-Specific Messaging Reach",description:"LINE advertising is planned around markets where LINE has meaningful adoption. We align audience, creative and measurement with the local role the platform plays."},
  "LINE":{logo:"https://cdn.simpleicons.org/line",title:"LINE: Messaging-Led Digital Ecosystem",description:"LINE is especially relevant in selected Asian markets. We use it only where audience adoption and the local customer journey justify the channel."},
  "Semrush":{logo:"https://cdn.simpleicons.org/semrush",title:"Semrush: Competitive Search Intelligence",description:"We use Semrush for keyword, competitor, content and visibility research to identify opportunities and benchmark changes across search."},
  "Ahrefs":{logo:"https://cdn.simpleicons.org/ahrefs",title:"Ahrefs: Search & Link Intelligence",description:"Ahrefs supports competitor research, content discovery and backlink analysis, helping us understand authority, gaps and opportunities in organic search."},
  "Screaming Frog":{logo:"https://cdn.simpleicons.org/screamingfrog",title:"Screaming Frog: Technical SEO Crawling",description:"We crawl websites to inspect status codes, canonicals, metadata, internal links and other technical signals at scale."},
  "Canva":{logo:"https://cdn.simpleicons.org/canva",title:"Canva: Fast Creative Production",description:"Canva supports efficient production of social, campaign and brand assets when speed, consistency and collaborative editing are priorities."},
  "Figma":{logo:"https://cdn.simpleicons.org/figma",title:"Figma: Collaborative Interface Design",description:"We use Figma for interface systems, wireframes, prototypes and collaborative design workflows before development."},
  "Adobe Photoshop":{logo:"https://cdn.simpleicons.org/adobephotoshop",title:"Adobe Photoshop: Image & Creative Craft",description:"Photoshop supports detailed image editing, compositing and campaign creative where precise visual control is required."},
  "Adobe Illustrator":{logo:"https://cdn.simpleicons.org/adobeillustrator",title:"Adobe Illustrator: Vector Design",description:"Illustrator is used for scalable vector artwork, identity systems, icons, print assets and brand graphics."},
  "After Effects":{logo:"https://cdn.simpleicons.org/adobeaftereffects",title:"After Effects: Motion Design",description:"After Effects powers motion graphics, compositing, animated brand assets and campaign visuals."},
  "Blender":{logo:"https://cdn.simpleicons.org/blender",title:"Blender: 3D Creation Suite",description:"Blender supports modeling, materials, lighting, animation and rendering for 3D product and campaign work."},
  "Looker Studio":{logo:"https://cdn.simpleicons.org/looker",title:"Looker Studio: Performance Reporting",description:"We use reporting dashboards to bring channel and business signals together so stakeholders can see what is changing and why."},
  "ChatGPT":{logo:"https://cdn.simpleicons.org/openai",title:"ChatGPT: LLM Research & Workflow Support",description:"We use LLM tools carefully for research support, ideation and workflow acceleration while keeping strategy, factual validation and original expertise human-led."},

  "Google Analytics 4":{logo:"https://cdn.simpleicons.org/googleanalytics",title:"Google Analytics 4",description:"GA4 supports acquisition, engagement and conversion measurement where analytics is relevant to the service.",color:"#F9AB00",color2:"#E37400"},
  "GA4":{logo:"https://cdn.simpleicons.org/googleanalytics",title:"Google Analytics 4",description:"GA4 supports acquisition, engagement and conversion measurement where analytics is relevant to the service.",color:"#F9AB00",color2:"#E37400"},
  "GTM":{logo:"https://cdn.simpleicons.org/googletagmanager",title:"Google Tag Manager",description:"Google Tag Manager supports controlled event and conversion-tag implementation when the campaign requires it.",color:"#4285F4",color2:"#8AB4F8"},
  "Meta":{logo:"https://cdn.simpleicons.org/meta",title:"Meta",description:"Meta's ecosystem supports Facebook and Instagram publishing, community and advertising workflows.",color:"#0866FF",color2:"#00C6FF"},
  "Meta Ads Manager":{logo:"https://cdn.simpleicons.org/meta",title:"Meta Ads Manager",description:"The central workspace for campaign structure, audiences, placements, budgets and optimization across Meta advertising.",color:"#0866FF",color2:"#00C6FF"},
  "Meta Pixel":{logo:"https://cdn.simpleicons.org/meta",title:"Meta Pixel",description:"Meta Pixel supports website event measurement and audience signals for Meta campaigns.",color:"#0866FF",color2:"#8B5CF6"},
  "Conversions API":{logo:"https://cdn.simpleicons.org/meta",title:"Meta Conversions API",description:"Conversions API can strengthen server-side event signals used for Meta campaign measurement and optimization.",color:"#0866FF",color2:"#7C3AED"},
  "TikTok Ads Manager":{logo:"https://cdn.simpleicons.org/tiktok",title:"TikTok Ads Manager",description:"TikTok Ads Manager controls campaign setup, audiences, budgets, placements and performance for TikTok advertising.",color:"#25F4EE",color2:"#FE2C55"},
  "TikTok Pixel":{logo:"https://cdn.simpleicons.org/tiktok",title:"TikTok Pixel",description:"TikTok Pixel supports website-event measurement and optimization signals for TikTok campaigns.",color:"#25F4EE",color2:"#FE2C55"},
  "Pinterest Ads Manager":{logo:"https://cdn.simpleicons.org/pinterest",title:"Pinterest Ads Manager",description:"Pinterest Ads Manager is used to structure and optimize paid discovery campaigns across Pinterest.",color:"#E60023",color2:"#FF5A73"},
  "Pinterest Tag":{logo:"https://cdn.simpleicons.org/pinterest",title:"Pinterest Tag",description:"Pinterest Tag supports conversion measurement and audience signals for Pinterest advertising.",color:"#E60023",color2:"#FF5A73"},
  "Snap Ads Manager":{logo:"https://cdn.simpleicons.org/snapchat",title:"Snap Ads Manager",description:"Snap Ads Manager controls Snapchat campaign setup, audiences, creative delivery and optimization.",color:"#FFFC00",color2:"#FFF27A"},
  "Snap Pixel":{logo:"https://cdn.simpleicons.org/snapchat",title:"Snap Pixel",description:"Snap Pixel supports website event measurement and optimization for Snapchat campaigns.",color:"#FFFC00",color2:"#FFFFFF"},
  "LINE Ads Platform":{logo:"https://cdn.simpleicons.org/line",title:"LINE Ads Platform",description:"LINE Ads Platform is the paid-media system used to reach relevant audiences within LINE's advertising ecosystem in supported markets.",color:"#06C755",color2:"#00E676"},
  "LINE Official Account":{logo:"https://cdn.simpleicons.org/line",title:"LINE Official Account",description:"LINE Official Account supports brand communication, audience relationships and messaging-led customer journeys.",color:"#06C755",color2:"#00E676"},
  "LINE Tag":{logo:"https://cdn.simpleicons.org/line",title:"LINE Tag",description:"LINE Tag supports website conversion measurement and audience signals for LINE advertising workflows.",color:"#06C755",color2:"#A7F3D0"},
  "LINE VOOM":{logo:"https://cdn.simpleicons.org/line",title:"LINE VOOM",description:"LINE VOOM is LINE's content discovery surface and can support platform-native creative and audience reach where relevant.",color:"#06C755",color2:"#14B8A6"},
  "LINE Business Manager":{logo:"https://cdn.simpleicons.org/line",title:"LINE Business Manager",description:"LINE Business Manager supports business-side management of LINE marketing assets and audience operations.",color:"#06C755",color2:"#22C55E"},
  "Talk Head View":{logo:"https://cdn.simpleicons.org/line",title:"Talk Head View",description:"Talk Head View is a high-impact LINE ad format designed for prominent attention within eligible LINE inventory.",color:"#06C755",color2:"#84CC16"},
  "LinkedIn Ads":{logo:"https://cdn.simpleicons.org/linkedin",title:"LinkedIn Ads",description:"LinkedIn advertising reaches professional audiences using role, company and business context.",color:"#0A66C2",color2:"#38BDF8"},
  "Insight Tag":{logo:"https://cdn.simpleicons.org/linkedin",title:"LinkedIn Insight Tag",description:"The Insight Tag supports website conversion measurement, retargeting and audience insights for LinkedIn campaigns.",color:"#0A66C2",color2:"#60A5FA"},
  "TikTok Ads":{logo:"https://cdn.simpleicons.org/tiktok",title:"TikTok Ads",description:"TikTok Ads supports native vertical paid campaigns built around creative testing and mobile-first behavior.",color:"#25F4EE",color2:"#FE2C55"},
  "Pinterest Ads":{logo:"https://cdn.simpleicons.org/pinterest",title:"Pinterest Ads",description:"Pinterest Ads reaches users during visual discovery and planning-led journeys.",color:"#E60023",color2:"#FF5A73"},
  "Snapchat Ads":{logo:"https://cdn.simpleicons.org/snapchat",title:"Snapchat Ads",description:"Snapchat Ads supports camera-first, vertical advertising for mobile audiences.",color:"#FFFC00",color2:"#FFFFFF"},
  "Search Ads":{logo:"https://cdn.simpleicons.org/googleads",title:"Google Search Ads",description:"Search campaigns capture active demand around relevant queries and commercial intent.",color:"#4285F4",color2:"#34A853"},
  "Display Ads":{logo:"https://cdn.simpleicons.org/googleads",title:"Google Display Ads",description:"Display campaigns use visual inventory for reach, remarketing and audience-led advertising.",color:"#4285F4",color2:"#FBBC04"},
  "Shopping Ads":{logo:"https://cdn.simpleicons.org/googleads",title:"Google Shopping Ads",description:"Shopping campaigns connect product feeds with commercial searches and product discovery.",color:"#34A853",color2:"#FBBC04"},
  "YouTube":{logo:"https://cdn.simpleicons.org/youtube",title:"YouTube Advertising",description:"YouTube combines video storytelling with Google's audience and campaign ecosystem.",color:"#FF0000",color2:"#FF5A5A"},
  "Performance Max":{logo:"https://cdn.simpleicons.org/googleads",title:"Performance Max",description:"Performance Max coordinates eligible Google inventory around goals, creative assets and conversion signals.",color:"#4285F4",color2:"#EA4335"},
  "Keyword Planner":{logo:"https://cdn.simpleicons.org/googleads",title:"Google Keyword Planner",description:"Keyword Planner supports paid-search demand research and campaign planning.",color:"#4285F4",color2:"#34A853"},
  "Merchant Center":{logo:"https://cdn.simpleicons.org/google",title:"Google Merchant Center",description:"Merchant Center manages product data used across eligible Google commerce and advertising surfaces.",color:"#34A853",color2:"#4285F4"},
  "Looker Studio":{logo:"https://cdn.simpleicons.org/looker",title:"Looker Studio",description:"Looker Studio turns campaign and business data into reporting dashboards.",color:"#4285F4",color2:"#FBBC04"},
  "Next.js":{logo:"https://cdn.simpleicons.org/nextdotjs/FFFFFF",title:"Next.js",description:"Next.js powers modern React applications with routing, rendering and production-focused web capabilities.",color:"#FFFFFF",color2:"#777777"},
  "React":{logo:"https://cdn.simpleicons.org/react",title:"React",description:"React provides the component model used to build interactive web interfaces.",color:"#61DAFB",color2:"#0EA5E9"},
  "Clarity":{logo:"https://cdn.simpleicons.org/microsoft",title:"Microsoft Clarity",description:"Clarity supports behavior analysis through session and interaction insights.",color:"#5E5CE6",color2:"#00A4EF"},
  "PageSpeed Insights":{logo:"https://cdn.simpleicons.org/googlechrome",title:"PageSpeed Insights",description:"PageSpeed Insights helps assess web performance and Core Web Vitals using lab and field signals where available.",color:"#4285F4",color2:"#34A853"},
  "Illustrator":{logo:"https://cdn.simpleicons.org/adobeillustrator",title:"Adobe Illustrator",description:"Illustrator is used for vector artwork, identities, icons and production-ready graphics.",color:"#FF9A00",color2:"#FFB84D"},
  "Photoshop":{logo:"https://cdn.simpleicons.org/adobephotoshop",title:"Adobe Photoshop",description:"Photoshop supports image editing, compositing and high-control creative production.",color:"#31A8FF",color2:"#001E36"},
  "InDesign":{logo:"https://cdn.simpleicons.org/adobeindesign",title:"Adobe InDesign",description:"InDesign supports structured print layouts, brochures, catalogues and production-ready documents.",color:"#FF3366",color2:"#A51C30"},
  "Adobe Creative Cloud":{logo:"https://cdn.simpleicons.org/adobecreativecloud",title:"Adobe Creative Cloud",description:"Adobe Creative Cloud supports professional visual production across design and media workflows.",color:"#FF0000",color2:"#FF61F6"},
  "ChatGPT Search":{logo:"https://cdn.simpleicons.org/openai",title:"ChatGPT Search",description:"We study how brands and sources surface in AI-assisted search experiences while prioritizing verifiable, useful information.",color:"#10A37F",color2:"#5EEAD4"},
  "Gemini":{logo:"https://cdn.simpleicons.org/googlegemini",title:"Google Gemini",description:"Gemini is part of the AI discovery landscape we assess for entity clarity, retrieval and brand visibility.",color:"#8E75B2",color2:"#4E8CFF"},
  "Copilot":{logo:"https://cdn.simpleicons.org/githubcopilot",title:"Copilot",description:"Copilot-style answer experiences are part of the broader AI discovery layer considered in LLM visibility work.",color:"#7C3AED",color2:"#38BDF8"},
  "Perplexity":{logo:"https://cdn.simpleicons.org/perplexity",title:"Perplexity",description:"Perplexity is a citation-led AI answer environment useful for assessing source visibility and retrievability.",color:"#20B8CD",color2:"#7DD3FC"},
};
function fallbackTool(name:string){return {logo:"https://cdn.simpleicons.org/googlechrome",title:`${name}: Part of Our Digital Arsenal`,description:`${name} supports our ${name.toLowerCase()} workflow where it is relevant to the service. We choose tools for the job they perform, then connect their output to strategy, execution and measurable business goals.`}}
function toolColors(name:string,meta:any){
  if(meta.color) return [meta.color,meta.color2||meta.color];
  const n=name.toLowerCase();
  if(n.includes("shopify")||n.includes("line")) return ["#06C755","#95BF47"];
  if(n.includes("analytics")||n==="ga4") return ["#F9AB00","#E37400"];
  if(n.includes("youtube")) return ["#FF0000","#FF5A5A"];
  if(n.includes("tiktok")) return ["#25F4EE","#FE2C55"];
  if(n.includes("pinterest")) return ["#E60023","#FF5A73"];
  if(n.includes("snap")) return ["#FFFC00","#FFFFFF"];
  if(n.includes("linkedin")) return ["#0A66C2","#38BDF8"];
  if(n.includes("meta")||n.includes("facebook")||n.includes("instagram")) return ["#0866FF","#00C6FF"];
  if(n.includes("google")||n.includes("search")||n.includes("merchant")||n.includes("performance max")) return ["#4285F4","#34A853"];
  if(n.includes("wordpress")||n.includes("drupal")) return ["#21759B","#00AEEF"];
  if(n.includes("figma")) return ["#A259FF","#F24E1E"];
  if(n.includes("photoshop")) return ["#31A8FF","#001E36"];
  if(n.includes("illustrator")) return ["#FF9A00","#FFB84D"];
  if(n.includes("after effects")) return ["#9999FF","#5B5BD6"];
  if(n.includes("blender")||n.includes("3d")) return ["#F5792A","#EA7600"];
  if(n.includes("canva")) return ["#00C4CC","#7D2AE8"];
  return ["#8B5CF6","#22D3EE"];
}

function DigitalArsenal({tools}:{tools:string[]}){
  const [active,setActive]=useState<string|null>(null);
  useEffect(()=>{if(!active)return;const esc=(e:KeyboardEvent)=>{if(e.key==="Escape")setActive(null)};document.addEventListener("keydown",esc);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",esc);document.body.style.overflow=""}},[active]);
  const detail=active?(TOOL_META[active]||fallbackTool(active)):null;
  return <section className="svc-arsenal"><div className="shell"><header><small>OUR DIGITAL ARSENAL</small><h2>Tools & Platforms We Command</h2><p>We combine specialist platforms with human strategy to navigate the digital realm with more clarity, speed and precision.</p></header></div>
    <div className="svc-ticker-window"><div className="svc-ticker-fade left"/><div className="svc-ticker-fade right"/>
      <div className="svc-ticker-track">{[...tools,...tools,...tools,...tools].map((name,i)=>{const meta=TOOL_META[name]||fallbackTool(name);return <div className="svc-arsenal-item" key={`${name}-${i}`}><button className="svc-arsenal-card" style={{"--tool-color":toolColors(name,meta)[0],"--tool-color-2":toolColors(name,meta)[1]} as React.CSSProperties} onClick={()=>setActive(name)} aria-label={`Open details for ${name}`}><span className="svc-tool-img"><img src={meta.logo} alt={`${name} logo`} loading="lazy"/></span><span className="svc-tool-glow"/></button><span className="svc-tool-name">{name}</span></div>})}</div>
    </div>
    {detail&&<div className="svc-tool-modal" role="dialog" aria-modal="true" aria-label={detail.title} onMouseDown={e=>{if(e.target===e.currentTarget)setActive(null)}}><div className="svc-tool-modal-content"><button className="svc-tool-close" onClick={()=>setActive(null)} aria-label="Close tool details">×</button><div className="svc-modal-logo"><img src={detail.logo} alt="" /></div><h3>{detail.title}</h3><p>{detail.description}</p></div></div>}
  </section>
}
export default function PhantomServicePage({d}:{d:ServiceData}){
  const industries=d.industries||DEFAULT_INDUSTRIES;
  const marketTitle=d.marketsTitle||"Who We Help: Global Domination Starts Here";
  const marketIntro=d.marketsIntro||"From local startups to global powerhouses, we don't just get you seen, we make you the top choice.";
  const markets=(d.markets&&d.markets.length?d.markets:["Thailand","Dubai","Australia","Malaysia","Pakistan","Beyond"]).slice(0,6);
  const values=d.valueBullets||[
    "Attract the right audience — focus effort where real demand and opportunity exist.",
    "Turn attention into action — connect visibility to a clearer customer journey.",
    "Build an advantage that compounds — test, learn and improve instead of repeating disconnected tactics."
  ];
  return <main className="svc phantom-service">
    <section className="svc-hero"><div className="svc-glow"/><div className="svc-hero-in">
      <span>{d.eyebrow}</span><h1>{d.title}</h1><h2>{d.hero}</h2><p>{d.intro}</p>
      <div className="svc-actions"><Link href="/contact-us" className="gradient-btn">Conjure Your Strategy</Link><a href="#sorcery" className="ghost-btn">Explore Our Sorcery</a></div>
      <div className="svc-trust"><b>Strategy First</b><b>Transparent Execution</b><b>Built to Evolve</b></div>
    </div></section>

    <section className="svc-split shell"><div><small>THE HAUNTING TRUTH</small><h2>{d.introTitle}</h2><p>{d.intro}</p><p>We turn complexity into a clear, actionable system—connecting strategy, execution, experience and measurement instead of treating isolated tactics as growth.</p></div>
      <div className="svc-visual"><i/><strong>PHANTOM</strong><em>{d.eyebrow}</em></div>
    </section>

    <section className="shell svc-section" id="sorcery"><header><small>OUR SORCERY</small><h2>Services That Drive Results</h2><p>A complete spellbook built around the work this service actually requires.</p></header>
      <div className="svc-grid">{d.services.map((x,i)=><article key={x}><b>{String(i+1).padStart(2,"0")}</b><h3>{x}</h3><p>Strategy, execution and optimization aligned to your audience, goals and digital journey.</p></article>)}</div>
    </section>

    <section className="shell svc-why-panel">
      <small>WHY PHANTOM MARKETING</small><h2>{d.valueTitle||`${d.title}: Built to Drive Business, Not Vanity`}</h2>
      <div className="svc-why-top">
        <div><h3>{d.title}: Your Digital Growth Machine</h3><p>{d.valueIntro||`${d.title} should do more than create activity. It should connect visibility and attention to meaningful business action.`}</p><ul>{values.map(x=><li key={x}>{x}</li>)}</ul></div>
        <div><h3>Why Most Businesses Fail at {d.title}</h3><p>Most businesses struggle because access to tools is confused with having a strategy.</p><ul>{d.failures.map(x=><li key={x}>{x}</li>)}</ul></div>
      </div>
      <h3 className="svc-process-title">Our Winning {d.title} Process: A Data-Driven Approach</h3>
      <div className="svc-process">{d.process.map((x,i)=><article key={x}><b>{String(i+1).padStart(2,"0")}</b><h3>{x}</h3><p>We define the objective, execute deliberately, validate the signals and refine what happens next.</p></article>)}</div>
    </section>

    <section className="shell svc-section svc-markets"><header><small>WHO WE HELP</small><h2>{marketTitle}</h2><p>{marketIntro}</p></header>
      <div className="svc-market-grid">{markets.map((x,i)=><article key={x}><b>✦</b><h3>{x}</h3><p>{i===5?"Beyond borders, wherever the channel and audience fit.":"Strategy shaped around local audience behavior and market opportunity."}</p></article>)}</div>
    </section>

    <section className="shell svc-section svc-industries-section"><header><small>INDUSTRIES WE SERVE</small><h2>We Haunt Every Industry That Needs to Be Found</h2><p>Different markets. Different customers. One obsession: making your brand impossible to ignore.</p></header>
      <div className="svc-industries">{industries.slice(0,6).map(x=><article key={x}><b>✦</b><h3>{x}</h3><p>Built around the way this audience discovers, evaluates and chooses.</p></article>)}</div>
      <div className="svc-industry-tail"><h3>Not seeing your industry? No problem!</h3><p>If your customers are searching, we ensure they find YOU.</p></div>
    </section>

    <DigitalArsenal tools={d.arsenal}/>

    <section className="shell svc-impact"><header><small>OUR SPECTRAL IMPACT</small><h2>Our Spectral Impact</h2><p>Clear strategy. Relevant execution. Measurable signals. We build systems designed to move from digital activity toward business impact.</p></header>
      <div className="svc-counters"><Counter to={100} suffix="%" label={(d.counterLabels||[])[0]||"Strategy Aligned"}/><Counter to={6} suffix="+" label={(d.counterLabels||[])[1]||"Core Process Stages"}/><Counter to={24} suffix="/7" label={(d.counterLabels||[])[2]||"Digital Presence"}/></div>
    </section>

    <section className="shell svc-faq"><header><small>WHISPERS FROM THE VOID</small><h2>Whispers from the Void: FAQs</h2><p>Questions about {d.title}? We&apos;ve got answers that cut through the digital fog.</p></header>
      {d.faqs.slice(0,Math.max(6,d.faqs.length)).map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
    </section>

    <section className="shell svc-choice"><small>THE CHOICE IS YOURS</small><h2>{d.choiceTitle||`The Choice is Yours… Make ${d.title} Impossible to Ignore`}</h2>
      <p>{d.choiceCopy||`Your audience has options. Phantom Marketing helps make sure your brand does not disappear into the digital shadows.`}</p>
      <Link className="gradient-btn" href="/contact-us">{d.choiceButton||"HIT THAT DAMN BUTTON!"}</Link>
    </section>
  </main>
}