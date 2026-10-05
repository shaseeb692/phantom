import {PageSpeedScan} from "../components/home/HomeInteractive";
import Link from "next/link";
import {imageAsset} from "@/lib/image-manifest";
import {CoreServices,Testimonials,AccreditationModal} from "@/components/home/HomeInteractive";

const projects=[1,2,3,4,5,6];
const partners=[
 ["Chatbase","Bootstrapped founder builds an AI app and scales with a focused digital product."],
 ["Mobbin","Design inspiration and product intelligence."],
 ["HappyTeams","People-first digital experiences."],
 ["Pebblely","Visual product content built for modern commerce."],
 ["Creatives","Campaign systems made to be remembered."],
 ["Growth","Search, social and performance working together."]
];
const accreditations=[
 ["G","Google Partner"],["M","Meta Partner"],["H","HubSpot"],["C","Clutch"],["S","Semrush"],["A","Ahrefs"]
];

export default function Home(){return <main>
<section className="hero" id="page-top"><video autoPlay loop muted playsInline className="hero-video"><source src="https://res.cloudinary.com/dhh2s3fzs/video/upload/v1753355639/hero-banner_jk3htc.mp4" type="video/mp4"/></video><div className="hero-overlay"/><div className="hero-content"><div className="eyebrow">✦ Unleash your business potential with us</div><h1><span>Unleash Your Brand&apos;s</span> Power:<br/>Digital Marketing <em>Expertise That Delivers</em></h1><h3>We craft engaging stories & strategic campaigns to captivate your audience.</h3><p>Phantom Marketing is a full-service digital agency specializing in bespoke solutions for SEO, AI search, social media, web development and more.</p><div className="hero-actions"><Link className="primary-btn" href="/contact-us">GET A FREE CONSULTATION →</Link><Link className="ghost-btn" href="/about">LEARN MORE ABOUT US ⓘ</Link></div></div></section>

<div className="shell">
<section className="glass scan"><div><small>Is Your Website Performance According to Google Algorithm?</small><h2>Let&apos;s Scan Your Website!</h2><p>Check performance, mobile experience, technical health and search-readiness.</p></div><PageSpeedScan/></section>

<section className="split" id="about"><div className="visual-card home-context-image"><img src={imageAsset("home/agency")} alt="Phantom Marketing digital strategy workspace"/><div className="orb"/><div className="screen"><span>PHANTOM</span><b>Your Digital Demons</b><i>Strategy • Search • Creative • Technology</i></div></div><div><small>Your Trustworthy Partner In Brand Visibility</small><h2>Proficient Digital Marketing Agency</h2><p><b>Phantom Marketing</b> is a creative digital agency built around bold ideas, strategic execution and measurable growth. We turn brand imagination into digital experiences people can discover, remember and act on.</p><Link className="gradient-btn" href="/about">Dive Into Our History →</Link></div></section>

<section className="audience-connect glass">
 <div className="audience-top"><div><small>Revolutionizing Audience Connections</small><h2>Unparalleled Brand Transformation</h2><p>Experience unparalleled brand transformation with <b>Phantom Marketing</b>, the strategic digital agency that revolutionizes audience connections. Our expert team creates impactful digital experiences infused with strategic understanding, delivering superior marketing services.</p><Link href="/contact-us" className="gradient-btn">Get A Free Consultation →</Link></div><div className="audience-visual home-context-image"><img src={imageAsset("home/audience")} alt="Digital audience connection and creative strategy"/><div className="audience-ring"/><b>Audience<br/>Connection</b></div></div>
 <div className="audience-points">
  <article><i>↗</i><h3>Cutting-Edge Technology</h3><p>Harness modern technology for stronger digital marketing execution.</p></article>
  <article><i>✦</i><h3>AI-Driven Strategies</h3><p>Use AI-assisted insight carefully to improve research, discovery and workflows.</p></article>
  <article><i>∞</i><h3>Seamless Integration</h3><p>Connect channels and technology into one cohesive digital ecosystem.</p></article>
  <article><i>⚡</i><h3>Innovative Automation</h3><p>Streamline repeatable processes while keeping strategy and judgment human-led.</p></article>
 </div>
</section>

<CoreServices/>

<section className="home-impact glass"><div className="home-heading"><small>Results That Haunt the Competition</small><h2>Our Spectral Impact</h2></div><div><article><b>36</b><span>Active Projects</span></article><article><b>51</b><span>Happy Clients</span></article><article><b>71</b><span>Achievements</span></article><article><b>90</b><span>Creativity</span></article></div></section>

<section className="project-video"><span className="project-watermark">PHANTOM</span><div><small>Let&apos;s Talk About</small><h2>Your NEXT Project</h2><a href="https://www.youtube.com/watch?v=dpdtV7WU6jE" target="_blank" rel="noreferrer" aria-label="Play Phantom Marketing video">▶</a></div></section>

<section className="partners glass"><div className="home-heading"><h2>Our Partners &amp; Clientele</h2></div><div className="partner-window"><div className="partner-track">
  {[0,1].map(loop=><div className="partner-sequence" key={loop} aria-hidden={loop===1}>
    <article className="partner-card partner-big"><b>Chatbase</b><p>AI product and digital growth.</p><span>↗</span></article>
    <div className="partner-stack"><article className="partner-card"><b>Mobbin</b><p>Design intelligence.</p><span>↗</span></article><article className="partner-card"><b>HappyTeams</b><p>People-first experiences.</p><span>↗</span></article></div>
    <article className="partner-card partner-big"><b>Pebblely</b><p>Visual commerce and product content.</p><span>↗</span></article>
    <div className="partner-four"><article className="partner-card"><b>Creatives</b><span>↗</span></article><article className="partner-card"><b>Growth</b><span>↗</span></article><article className="partner-card"><b>Search</b><span>↗</span></article><article className="partner-card"><b>Social</b><span>↗</span></article></div>
  </div>)}
</div></div></section>

<section id="portfolio"><div className="section-head"><small>Our Enchanting Portfolio</small><h2>Phantom Portfolio</h2><p>Selected work, campaigns and digital experiences from the Phantom realm.</p></div><div className="portfolio-grid">{projects.map((n)=><article className={`project-card p${n}`} key={n}><div className="project-number">0{n}</div><div><small>PROJECT</small><h3>Phantom Case Study</h3><p>Strategy, creative, search and measurable growth.</p></div><b>↗</b></article>)}</div></section>

<section className="why-choose glass"><div className="home-wide-image"><img src={imageAsset("home/why-phantom")} alt="Phantom Marketing creative and growth capabilities"/></div><div className="home-heading"><small>Your Trusted Partner</small><h2>Why Choose Us</h2></div><div className="why-grid"><div><p>Phantom Marketing is your marketing partner, driven by skilled professionals who craft strategies around the business, goals and audience. Our approach connects creative thinking with modern tools, transparent collaboration and execution built to produce meaningful outcomes.</p><p>From branding to social media, SEO, PPC, content and web experiences, we build connected solutions designed to make brands easier to discover, recognize and remember.</p></div><div className="why-reasons"><article><i>💡</i><div><h3>Creative And Smart Objective</h3><p>We create smart work while keeping the objective of every campaign and project the priority.</p></div></article><article><i>↗</i><div><h3>Result-Oriented Service</h3><p>Strategy and creative execution stay connected to the result the work is supposed to create.</p></div></article><article><i>♥</i><div><h3>Our Work Is Our Passion</h3><p>We value the craft, the collaboration and the relationships behind the work.</p></div></article></div></div><Link href="/contact-us" className="gradient-btn">Discover the Difference →</Link></section>

<section className="accreditations"><div className="home-heading"><small>Recognized Excellence, Proven Trust</small><h2>Accreditations</h2></div><AccreditationModal items={accreditations as [string,string][]}/></section>

<Testimonials/>

<section className="home-blogs" id="blogs"><div className="home-wide-image home-blog-image"><img src={imageAsset("home/insights")} alt="Digital marketing insights and analytics"/></div><div className="home-heading"><small>PHANTOM INSIGHTS</small><h2>From the Digital Shadows</h2><p>Ideas, strategy and practical insight across search, social, paid media, creative and technology.</p></div><div className="home-blog-grid">
<article className="glass"><span>SEO / AI SEARCH</span><h3>Search Is Evolving Beyond Ten Blue Links</h3><p>Explore how SEO, AEO, GEO and AI discovery connect without losing the fundamentals that make content useful.</p><Link href="/blogs" className="text-link">Read Phantom Insights →</Link></article>
<article className="glass"><span>SOCIAL / CREATIVE</span><h3>Attention Is Earned Before It Is Measured</h3><p>Why platform-native creative, recognizable branding and consistent execution matter across crowded feeds.</p><Link href="/blogs" className="text-link">Enter the Blog →</Link></article>
<article className="glass"><span>PERFORMANCE</span><h3>Clicks Are Not the Finish Line</h3><p>Campaign structure, landing experiences and measurement have to work together to turn paid reach into action.</p><Link href="/blogs" className="text-link">Explore Articles →</Link></article>
</div><div className="blog-all"><Link href="/blogs" className="gradient-btn">View All Blogs →</Link></div></section>
<section className="cta glass" id="contact"><small>Let&apos;s Talk About</small><h2>Your NEXT Project</h2><p>Tell Phantom what you want to grow. We&apos;ll shape the search, creative and digital experience around it.</p><Link className="primary-btn" href="/contact-us">HIT THE DAMN BUTTON! →</Link></section>
</div>
</main>}
