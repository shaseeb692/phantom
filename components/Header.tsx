import Image from "next/image";
import Link from "next/link";

type NavItem = {
  name:string;
  href:string;
  children?:{name:string;href:string}[];
};

type NavGroup = {
  name:string;
  items:NavItem[];
};

const groups:NavGroup[]=[
  {
    name:"Search & AI",
    items:[
      {name:"SEO",href:"/search-engine-optimization"},
      {name:"AEO",href:"/answer-engine-optimization"},
      {name:"GEO",href:"/generative-engine-optimization"},
      {name:"LLM / AI Search",href:"/llm-ai-search-optimization"}
    ]
  },
  {
    name:"Paid Media",
    items:[
      {name:"PPC",href:"/pay-per-click"},
      {name:"SEM",href:"/search-engine-marketing"},
      {
        name:"Google Ads",
        href:"/google-ads",
        children:[
          {name:"Search Ads",href:"/google-ads/search-ads"},
          {name:"Display Ads",href:"/google-ads/display-ads"},
          {name:"Shopping Ads",href:"/google-ads/shopping-ads"},
          {name:"Video Ads",href:"/google-ads/video-ads"},
          {name:"Performance Max",href:"/google-ads/performance-max"},
          {name:"Demand Gen",href:"/google-ads/demand-gen"},
          {name:"App Advertising",href:"/google-ads/app-advertising"},
          {name:"Local Search",href:"/google-ads/local-search"}
        ]
      },
      {name:"LINE Ads",href:"/line-app-advertising"}
    ]
  },
  {
    name:"Social & Creative",
    items:[
      {name:"Social Media Marketing",href:"/social-media-marketing"},
      {
        name:"Paid Social",
        href:"/social-media-paid-marketing",
        children:[
          {name:"Meta Ads",href:"/meta-ads"},
          {name:"LinkedIn Ads",href:"/linkedin-paid-advertising"},
          {name:"TikTok Ads",href:"/tiktok-advertising"},
          {name:"Pinterest Ads",href:"/pinterest-ads"},
          {name:"Snapchat Ads",href:"/snapchat-ads"}
        ]
      },
      {name:"Graphics Designing",href:"/graphics-designing"},
      {name:"Branding",href:"/branding"},
      {name:"PR Marketing",href:"/pr-marketing"}
    ]
  },
  {
    name:"Web & Motion",
    items:[
      {name:"Web Development",href:"/web-development"},
      {name:"Web Designing",href:"/web-designing"},
      {name:"Print Services",href:"/print-services"},
      {
        name:"Animation",
        href:"/animation",
        children:[
          {name:"2D Animation",href:"/2d-animation"},
          {name:"3D Animation",href:"/3d-animation"}
        ]
      }
    ]
  }
];

export default function Header(){
  return (
    <header className="desktop-header">
      <nav className="nav-side">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <div className="mega-wrap">
          <Link href="/services">Services</Link>

          <div className="mega-menu">
            {groups.map(group=>(
              <div className="mega-group" key={group.name}>
                <b>{group.name}</b>

                {group.items.map(item=>(
                  <div
                    className={`mega-item${item.children ? " has-children" : ""}`}
                    key={item.href}
                  >
                    <Link href={item.href}>
                      {item.name}
                      {item.children && <span className="mega-arrow">›</span>}
                    </Link>

                    {item.children && (
                      <div className="mega-children">
                        {item.children.map(child=>(
                          <Link key={child.href} href={child.href}>
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <Link href="/" className="desktop-logo">
        <Image
          src="/assets/logo/logo-white.gif"
          alt="Phantom Marketing"
          width={120}
          height={48}
          unoptimized
        />
      </Link>

      <nav className="nav-side right">
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact-us">Contact</Link>
      </nav>
    </header>
  );
}