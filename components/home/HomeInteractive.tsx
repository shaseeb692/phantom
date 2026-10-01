"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

const tabs=[
 {key:"digital",label:"Digital Marketing",title:"Digital Marketing",copy:"Strategy, search, paid media, social, content and technology work best when they operate as one connected growth system.",href:"/services"},
 {key:"seo",label:"SEO",title:"Search Engine Optimization",copy:"Technical SEO, search intent, content architecture and authority engineered to turn organic visibility into qualified discovery.",href:"/search-engine-optimization"},
 {key:"smm",label:"Social Media Marketing",title:"Social Media Marketing",copy:"Platform-aware strategy, creative systems and community thinking built to make brands recognizable in crowded feeds.",href:"/social-media-marketing"},
 {key:"web",label:"Web Development",title:"Web Development",copy:"Fast, responsive and search-ready web experiences built around the actions your audience and business need.",href:"/web-development"},
 {key:"ppc",label:"Pay Per Click",title:"Pay Per Click",copy:"Intent-led paid campaigns with creative, landing-page alignment and measurement designed around meaningful outcomes.",href:"/pay-per-click"},
 {key:"graphics",label:"Graphics Designing",title:"Graphics Designing",copy:"Campaign visuals, brand assets and digital creative designed as one recognizable visual system instead of disconnected templates.",href:"/graphics-designing"},
];

export function CoreServices(){
 const [active,setActive]=useState("digital");
 const item=tabs.find(x=>x.key===active)!;
 return <section className="home-core-services" id="services">
  <div className="home-heading"><small>Delivering Excellence, Always</small><h2>Our Core Services</h2></div>
  <div className="home-service-tabs">{tabs.map(x=><button key={x.key} className={active===x.key?"active":""} onClick={()=>setActive(x.key)}>{x.label}</button>)}</div>
  <div className="home-service-pane glass">
    <div className="home-service-art"><div className="service-art-orb"/><span>{item.label}</span><b>PHANTOM</b></div>
    <div className="home-service-copy"><small>OUR SORCERY</small><h3>{item.title}</h3><p>{item.copy}</p><Link href={item.href} className="primary-btn">Take a Closer Look →</Link></div>
  </div>
 </section>
}

const testimonials=[
 ["Martin Smith","Phantom Marketing brought structure to our digital presence and made the strategy easier to understand, execute and measure."],
 ["Steve Austin","The team combines creative thinking with a practical performance mindset. Communication stayed clear throughout the work."],
 ["Gisselse","From the first discussion to execution, the process felt collaborative, focused and built around the brand rather than a generic template."]
];
const accreditationInfo:Record<string,string>={
 "Google Partner":"Google advertising and measurement capabilities represented in Phantom's broader performance-marketing toolkit.",
 "Meta Partner":"Meta ecosystem capabilities for paid social, audience strategy, creative testing and campaign operations.",
 "HubSpot":"CRM, marketing and customer-journey workflows used where they fit the client's stack.",
 "Clutch":"Agency discovery and reputation platform presence.",
 "Semrush":"Search, competitor, keyword and visibility intelligence used across SEO and research workflows.",
 "Ahrefs":"Organic search, content and backlink intelligence used for research and opportunity analysis."
};
export function AccreditationModal({items}:{items:[string,string][]}){
 const [active,setActive]=useState<string|null>(null);
 useEffect(()=>{if(!active)return;const esc=(e:KeyboardEvent)=>e.key==="Escape"&&setActive(null);document.addEventListener("keydown",esc);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",esc);document.body.style.overflow=""}},[active]);
 return <><div className="accredit-window"><div className="accredit-track">{[...items,...items].map(([mark,name],i)=><button onClick={()=>setActive(name)} key={`${name}-${i}`}><b>{mark}</b><span>{name}</span></button>)}</div></div>
 {active&&<div className="home-modal" onMouseDown={e=>e.target===e.currentTarget&&setActive(null)}><div className="home-modal-card"><button className="home-modal-close" onClick={()=>setActive(null)}>×</button><small>ACCREDITATION / PLATFORM</small><h3>{active}</h3><p>{accreditationInfo[active]||"Part of Phantom Marketing's digital platform and professional toolkit."}</p></div></div>}</>
}

export function Testimonials(){
 const [i,setI]=useState(0);
 useEffect(()=>{const t=setInterval(()=>setI(v=>(v+1)%testimonials.length),5500);return()=>clearInterval(t)},[]);
 return <section className="home-testimonials">
  <div className="home-heading"><small>Raving Reviews!</small><h2>Testimonials</h2></div>
  <div className="testimonial-stage glass">
   <button onClick={()=>setI((i-1+testimonials.length)%testimonials.length)} aria-label="Previous testimonial">‹</button>
   <div><p>“{testimonials[i][1]}”</p><strong>{testimonials[i][0]}</strong><span>Phantom Client</span></div>
   <button onClick={()=>setI((i+1)%testimonials.length)} aria-label="Next testimonial">›</button>
  </div>
  <div className="testimonial-dots">{testimonials.map((_,n)=><button aria-label={`Show testimonial ${n+1}`} className={i===n?"active":""} key={n} onClick={()=>setI(n)}/>)}</div>
 </section>
}
