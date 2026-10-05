import type { Metadata } from "next";
import Link from "next/link";
import "../../components/services/phantom-service.css";
import "../about/about-layout-fix.css";
import "./journey.css";

export const metadata: Metadata = {
  title: "Our Journey | Phantom Marketing",
  description:
    "Discover the journey behind Phantom Marketing and the moments that shaped Your Digital Demons.",
};

export default function Page() {
  return (
    <main className="svc phantom-service">

      {/* EXACT ABOUT HERO SYSTEM */}
      <section className="svc-hero">
        <div className="svc-glow" />

        <div className="svc-hero-in">
          <span>OUR JOURNEY</span>

          <h1>Phantom Marketing</h1>

          <h2>
            From An Idea To
            <br />
            Your Digital Demons.
          </h2>

          <p>
            A journey built with strategy, creativity and technology to make
            brands visible, memorable and difficult to ignore.
          </p>

          <div className="svc-actions">
            <a href="#our-timeline" className="gradient-btn">
              Explore Our Journey
            </a>

            <Link href="/about" className="ghost-btn">
              Back to About
            </Link>
          </div>

          <div className="svc-trust">
            <b>Strategy First</b>
            <b>Creativity With Purpose</b>
            <b>Built to Evolve</b>
          </div>
        </div>
      </section>



      {/* ORIGIN - ABOUT STYLE CONTENT + IMAGE */}
      <section
        className="svc-split shell journey-origin-split"
        id="journey-origin"
      >

        <div>
          <small>THE BEGINNING</small>

          <h2>Every Phantom Has An Origin</h2>

          <p>
            Phantom Marketing started with a simple belief: digital marketing
            should do more than generate impressions. It should create presence.
          </p>

          <p>
            We wanted to build something that connected strategy, creativity,
            technology and performance instead of treating every digital channel
            as a separate activity.
          </p>

          <p>
            That idea became <strong>Your Digital Demons</strong>: a digital
            identity built around making brands visible, memorable and difficult
            to ignore.
          </p>
        </div>


        <div className="svc-visual svc-photo-visual journey-origin-image">
          <img
            src="/images/about/our-journey.webp"
            alt="The journey of Phantom Marketing"
            loading="eager"
          />
        </div>

      </section>


      {/* FULL WIDTH PHANTOM STORY */}
      <section className="shell journey-system-wrap">

        <div className="journey-system-panel">

          <small>THE PHANTOM STORY</small>

          <h2>An Idea Became A Digital System.</h2>

          <p>
            Search, AI discovery, paid media, social, branding, creative, web
            and motion became parts of one connected ecosystem.
          </p>

          <p>
            The tools continue to evolve, but the purpose remains the same:
            build digital presence that matters.
          </p>

        </div>

      </section>


      {/* ONLY UNIQUE JOURNEY SECTION */}
      <section className="shell svc-section journey-timeline-section" id="our-timeline">

        <header>
          <small>OUR TIMELINE</small>

          <h2>Key Moments In Our Journey</h2>

          <p>
            From the first idea to a connected digital ecosystem, here are the
            moments that shaped Phantom Marketing.
          </p>
        </header>

        <div className="journey-timeline">

          <div className="journey-line" aria-hidden="true">
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>26</span>
            <span className="phantom-f">F</span>
          </div>


          <article className="journey-event journey-left journey-one">
            <b>2020 | THE SPARK</b>

            <h3>When The World Stopped, An Idea Started Moving.</h3>

            <p>
              COVID changed how businesses survived, sold and stayed connected.
              Somewhere in that uncertainty, one thing became clear to us.
              Digital was no longer the future. It was becoming the present.
            </p>

            <p>
              That realization planted the first seed of Phantom.
            </p>
          </article>


          <article className="journey-event journey-right journey-two">
            <b>2021 | PHANTOM TAKES FORM</b>

            <h3>An Idea Finally Found Its Identity.</h3>

            <p>
              Two different strengths came together with one shared belief.
              Marketing should not just make brands visible. It should make
              them difficult to ignore.
            </p>

            <p>
              Phantom Marketing began taking shape, and Your Digital Demons
              found a name.
            </p>
          </article>


          <article className="journey-event journey-left journey-three">
            <b>2022 | FINDING OUR GROUND</b>

            <h3>The Idea Was Real. Now We Had To Prove It.</h3>

            <p>
              New clients brought new expectations, challenges and lessons.
              Some things worked. Some forced us to rethink everything.
            </p>

            <p>
              Project by project, Phantom started becoming more than the idea
              we began with.
            </p>
          </article>


          <article className="journey-event journey-right journey-four">
            <b>2023 | FROM POTENTIAL TO PROGRESS</b>

            <h3>We Stopped Wondering What Phantom Could Become.</h3>

            <p>
              Our thinking became sharper, our capabilities grew and technology
              became a bigger part of how we worked.
            </p>

            <p>
              We were no longer just finding our way. We were creating one.
            </p>
          </article>


          <article className="journey-event journey-left journey-five">
            <b>2024 | BUILDING THE ECOSYSTEM</b>

            <h3>Separate Services Became One Connected Force.</h3>

            <p>
              Search, paid media, social, branding, creative and web were no
              longer isolated pieces.
            </p>

            <p>
              The vision became bigger. Build a digital ecosystem where every
              channel strengthens the next.
            </p>
          </article>


          <article className="journey-event journey-right journey-six">
            <b>2025 TO 2026 | ENTERING THE AI ERA</b>

            <h3>The Way People Discover Brands Changed. We Changed With It.</h3>

            <p>
              Search was no longer limited to a search results page. AI, answer
              engines and generative platforms started reshaping discovery.
            </p>

            <p>
              So Phantom evolved again, combining what we already knew with
              what the digital world was becoming.
            </p>
          </article>


          <article className="journey-event journey-left journey-seven">
            <b>FUTURE | THE HAUNTING CONTINUES</b>

            <h3>We Did Not Come This Far Just To Stop Here.</h3>

            <p>
              There are still markets we have not entered, ideas we have not
              built and challenges we have not faced.
            </p>

            <p>
              We do not know exactly where the journey ends.
            </p>

            <p>
              <strong>But we know the Phantom is only getting started.</strong>
            </p>
          </article>

        </div>

      </section>


      {/* SAME PHANTOM REALM */}
      <section className="shell svc-section">

        <header>
          <small>THE PHANTOM REALM</small>

          <h2>There Is More Behind the Phantom</h2>

          <p>
            Our story, our people and our identity each deserve a space of
            their own. Here is only a glimpse.
          </p>
        </header>

        <div className="svc-related-grid about-realm-grid">

          <Link href="/about" className="svc-related-card">
            <h3>About Phantom</h3>

            <p>
              Discover the mission, vision and principles behind Your Digital
              Demons.
            </p>

            <span>Explore About Us →</span>
          </Link>

          <Link href="/our-team" className="svc-related-card">
            <h3>Our Team</h3>

            <p>
              Strategists, marketers, creatives, designers, developers and
              problem-solvers working together as one digital force.
            </p>

            <span>Meet the Phantoms →</span>
          </Link>

          <div className="svc-related-card">
            <h3>Our Logo Journey</h3>

            <p>
              Every Phantom leaves a mark. Discover the story behind our
              identity and its evolution.
            </p>

            <span>Logo Journey - Coming Soon</span>
          </div>

        </div>

      </section>


      {/* EXACT ABOUT CTA */}
      <section className="shell svc-choice">

        <small>THE NEXT CHAPTER</small>

        <h2>The Story Is Still Being Written.</h2>

        <p>
          The Phantom journey continues. Bring us the ambition and we'll bring
          the strategy, creativity and digital sorcery.
        </p>

        <Link className="gradient-btn" href="/contact-us">
          BE PART OF THE NEXT CHAPTER
        </Link>

      </section>

    </main>
  );
}