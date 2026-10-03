import type {Metadata} from "next";
import PhantomServicePage,{type ServiceData} from "@/components/services/PhantomServicePage";
const d:ServiceData={
relatedServices:[
{
  title:"Graphics Designing",
  description:"Build the visual assets, compositions and creative direction that support stronger animation and motion work.",
  href:"/graphics-designing"
},
{
  title:"Branding",
  description:"Connect animation with a consistent brand identity, visual language and recognizable personality.",
  href:"/branding"
},
{
  title:"Social Media Marketing",
  description:"Put animated creative to work across social content, campaigns and platform-native audience experiences.",
  href:"/social-media-marketing"
}
],
"title": "Animation", "eyebrow": "ANIMATION", "hero": "Make the Brand Move.", "introTitle": "Static Ideas Sometimes Need a Pulse", "intro": "Phantom turns concepts into motion systems for campaigns, explainers, social media and brand storytelling.", "services": ["2D Animation", "3D Animation", "Motion Graphics", "Explainer Videos", "Animated Ads", "Logo Animation", "Social Motion", "Campaign Visuals"],
"serviceCards":[
{"title":"2D Animation","description":"Bring ideas to life through illustration, motion graphics, characters, typography and story-led movement.","href":"/2d-animation"},
{"title":"3D Animation","description":"Create dimensional product visuals, environments and motion experiences built around depth, lighting and realism.","href":"/3d-animation"}
], "failures": ["Animating before the story is clear", "Using motion with no visual hierarchy", "Forgetting where and how the asset will be viewed"], "process": ["Concept & Script", "Storyboard", "Styleframes", "Animation", "Sound & Refinement", "Final Delivery"], "arsenal": ["After Effects", "Illustrator", "Photoshop", "3D Tools", "Storyboards", "Motion Systems"], "faqs": [["Do you create both 2D and 3D animation?", "Yes. The approach depends on the story, visual style, production scope and intended use."], ["Can animation be used in ads?", "Yes. Motion assets can be designed around social and paid placements."], ["Do you handle storyboards?", "Storyboarding is an important step for sequences where narrative and timing need approval before production."], ["How does Phantom approach Animation?", "We start with the audience, market, objective and current digital setup, then build the Animation plan around those realities rather than a copied template."], ["How soon can Animation be launched?", "Timing depends on access, tracking, creative or technical requirements, and the scope agreed during discovery."], ["How do you measure Animation performance?", "We define relevant success signals before execution and review them alongside the quality of traffic, leads, engagement or visibility generated."]], "valueTitle": "Animation: Make Complex Ideas Impossible to Ignore", "valueIntro": "Animation is not just about being present. The businesses that win use it to create stronger visibility, a clearer customer journey and a repeatable path from attention to meaningful action.", "valueBullets": ["Explain faster through motion — turn products, concepts and stories into experiences audiences can follow.", "Create scroll-stopping assets — design movement for campaigns, social feeds, presentations and branded experiences.", "Make motion feel like your brand — connect style, pacing and storytelling to the identity behind the message."], "choiceTitle": "The Choice is Yours… Stay Still or Make the Brand Move", "choiceCopy": "Motion can explain, entertain and transform ordinary campaign assets into experiences worth watching.", "choiceButton": "MAKE IT MOVE!"};
export const metadata:Metadata={title:`${d.title} | Phantom Marketing`,description:d.intro,alternates:{canonical:"/animation"}};
export default function Page(){return <PhantomServicePage d={d}/>}
