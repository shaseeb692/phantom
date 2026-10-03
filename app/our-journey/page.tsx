import type { Metadata } from "next";
import Link from "next/link";
import "../../components/services/phantom-service.css";
import "./journey.css";

export const metadata: Metadata = {
  title: "Our Journey | Phantom Marketing",
  description:
    "Explore the Phantom Marketing journey, our evolution, milestones and the thinking that continues to shape Your Digital Demons.",
};

export default function OurJourneyPage() {
  return (
    <main className="svc-page journey-page">

      {/* HERO - NO IMAGE */}
      <section className="svc-hero journey-hero">
        <div className="shell svc-hero-inner">
          <small>OUR JOURNEY</small>

          <h1>
            From An Idea To
            <br />
            <span>Your Digital Demons.</span>
          </h1>

          <p>
            A journey built with strategy, creativity and technology to make
            brands visible, memorable and unignorable.
          </p>

          <div className="svc-actions">
            <a href="#journey-timeline" className="svc-btn primary">
              Explore Our Journey
            </a>

            <Link href="/about" className="svc-btn secondary">
              Back to About
            </Link>
          </div>

          <div className="svc-trust">
            <span>An Idea</span>
            <span>A System</span>
            <span>A Growing Legacy</span>
          </div>
        </div>
      </section>


      {/* THE BEGINNING */}
      <section className="shell journey-beginning">
        <div className="journey-origin-copy">
          <small>THE BEGINNING</small>

          <h2>
            Every Phantom
            <br />
            Has An Origin.
          </h2>

          <p>
            Phantom Marketing started with a simple idea: to create a digital
            agency that does more than market brands. We wanted to build brands
            that haunt searches, possess feeds and leave a presence long after
            the first interaction.
          </p>
        </div>

        <div className="journey-origin-visual">
          <div className="journey-mark">P</div>
        </div>
      </section>


      {/* TIMELINE */}
      <section id="journey-timeline" className="shell journey-section">
        <header className="journey-heading">
          <small>OUR TIMELINE</small>
          <h2>Key Moments In Our Journey</h2>
          <p>
            From the first idea to a connected digital ecosystem, here are the
            moments that shaped Phantom Marketing.
          </p>
        </header>

        <div className="journey-timeline">

          <div className="journey-line" aria-hidden="true">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>

          <article className="journey-event event-left event-1">
            <div className="journey-event-icon">✦</div>
            <div>
              <small>THE BEGINNING</small>
              <h3>The Beginning</h3>
              <p>
                An idea to build a modern digital agency that creates real
                impact. Phantom Marketing was born with a clear purpose:
                make brands unignorable.
              </p>
            </div>
          </article>

          <article className="journey-event event-right event-2">
            <div className="journey-event-icon">◆</div>
            <div>
              <small>BUILDING THE SYSTEM</small>
              <h3>Building The System</h3>
              <p>
                We developed a connected ecosystem of services across search,
                paid media, social, creative, web, animation and digital
                consulting.
              </p>
            </div>
          </article>

          <article className="journey-event event-left event-3">
            <div className="journey-event-icon">↗</div>
            <div>
              <small>EXPANDING OUR REACH</small>
              <h3>Expanding Our Reach</h3>
              <p>
                We expanded our capabilities across strategy, content, design,
                development, performance marketing and emerging search
                experiences.
              </p>
            </div>
          </article>

          <article className="journey-event event-right event-4">
            <div className="journey-event-icon">▲</div>
            <div>
              <small>THE NEXT CHAPTER</small>
              <h3>The Next Chapter</h3>
              <p>
                We continue to evolve, explore new markets and build new
                opportunities while staying true to our identity as
                Your Digital Demons.
              </p>
            </div>
          </article>

        </div>
      </section>


      {/* LESSONS */}
      <section className="shell journey-section">
        <div className="journey-panel">

          <header className="journey-heading">
            <small>WHAT WE LEARNED</small>
            <h2>Lessons That Shaped Us</h2>
            <p>
              Every milestone taught us something. These lessons continue to
              guide the way we think, work and grow.
            </p>
          </header>

          <div className="journey-lessons">
            <article>
              <b>01</b>
              <h3>Focus On Impact</h3>
              <p>
                It has always been about creating real value, not just activity.
              </p>
            </article>

            <article>
              <b>02</b>
              <h3>Adapt Continuously</h3>
              <p>
                Platforms change, trends evolve and we keep adapting.
              </p>
            </article>

            <article>
              <b>03</b>
              <h3>Build For The Long Term</h3>
              <p>
                Lasting brands are built with patience, consistency and purpose.
              </p>
            </article>

            <article>
              <b>04</b>
              <h3>People Make It Real</h3>
              <p>
                Our team, clients and collaborators turn ideas into meaningful
                outcomes.
              </p>
            </article>
          </div>

        </div>
      </section>


      {/* NUMBERS */}
      <section className="shell journey-section">
        <header className="journey-heading">
          <small>OUR JOURNEY IN NUMBERS</small>
          <h2>From Milestones To Momentum</h2>
          <p>
            A glimpse of our journey through numbers that represent our growth
            and progress.
          </p>
        </header>

        <div className="journey-numbers">
          <article>
            <strong>3+</strong>
            <span>Years Of Growth</span>
          </article>

          <article>
            <strong>50+</strong>
            <span>Projects Delivered</span>
          </article>

          <article>
            <strong>15+</strong>
            <span>Industries Served</span>
          </article>

          <article>
            <strong>100+</strong>
            <span>Ideas In Motion</span>
          </article>
        </div>
      </section>


      {/* MORE STORY */}
      <section className="shell journey-section">
        <header className="journey-heading">
          <small>BEYOND THE TIMELINE</small>
          <h2>More Of The Phantom Story</h2>
          <p>
            Our journey is one part of the story. Discover the people, identity
            and thinking behind Phantom Marketing.
          </p>
        </header>

        <div className="journey-related">

          <Link href="/about">
            <h3>About Phantom</h3>
            <p>
              Discover the mission, vision and principles behind Your Digital
              Demons.
            </p>
            <span>Explore About Us →</span>
          </Link>

          <div>
            <h3>Our Team</h3>
            <p>
              Meet the strategists, creatives, designers, developers and
              problem-solvers.
            </p>
            <span>Meet the Phantoms →</span>
          </div>

          <div>
            <h3>Our Logo Journey</h3>
            <p>
              Explore how our identity evolved alongside the brand and the
              story behind the Phantom mark.
            </p>
            <span>Explore Logo Journey →</span>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="shell journey-section journey-last-section">
        <div className="journey-cta">
          <small>THE NEXT CHAPTER</small>

          <h2>The Story Is Still Being Written.</h2>

          <p>
            We keep evolving, exploring new opportunities and helping more
            brands become visible, memorable and unignorable.
          </p>

          <Link href="/contact-us" className="svc-btn primary">
            Be Part Of The Next Chapter
          </Link>
        </div>
      </section>

    </main>
  );
}