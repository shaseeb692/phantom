import type { Metadata } from "next";
import Link from "next/link";
import "../../components/services/phantom-service.css";

export const metadata: Metadata = {
  title: "Our Journey | Phantom Marketing",
  description:
    "Explore the journey of Phantom Marketing, from the first idea to building Your Digital Demons.",
};

const milestones = [
  {
    number: "01",
    label: "THE BEGINNING",
    title: "An Idea Entered the Digital Shadows",
    copy:
      "Phantom Marketing began with an idea: build a digital agency that does more than make brands visible. Build one that makes them memorable.",
  },
  {
    number: "02",
    label: "BUILDING THE SYSTEM",
    title: "The Phantom Realm Took Shape",
    copy:
      "Strategy, search, paid media, social, creative, web and motion came together as connected capabilities built around one purpose: meaningful digital growth.",
  },
  {
    number: "03",
    label: "THE NEXT CHAPTER",
    title: "The Haunting Continues",
    copy:
      "Phantom continues to evolve across services, capabilities and markets while staying true to the idea behind Your Digital Demons.",
  },
];

export default function Page() {
  return (
    <main className="svc phantom-service">

      <section className="svc-hero">
        <div className="svc-glow" />

        <div className="svc-hero-in shell">
          <small>OUR JOURNEY</small>

          <h1>
            From An Idea To
            <br />
            <span>Your Digital Demons.</span>
          </h1>

          <p>
            Every phantom has an origin. This is the story of how an idea
            stepped into the digital shadows and began becoming something
            bigger.
          </p>

          <div className="svc-actions">
            <a href="#journey">Explore Our Journey</a>
            <Link href="/about">About Phantom</Link>
          </div>

          <div className="svc-trust">
            <span>Born From An Idea</span>
            <span>Built With Purpose</span>
            <span>Still Evolving</span>
          </div>
        </div>
      </section>


      <section id="journey" className="shell svc-section">
        <header>
          <small>THE PHANTOM TIMELINE</small>
          <h2>Every Haunting Has A Beginning.</h2>
          <p>
            Phantom Marketing was not built to become another name in the
            digital crowd. The journey is about building an identity,
            expanding the system and continuously evolving what a digital
            agency can deliver.
          </p>
        </header>

        <div className="svc-grid">
          {milestones.map((item) => (
            <article key={item.number}>
              <b>{item.number}</b>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="shell svc-why-panel">
        <div className="svc-why-top">

          <div>
            <small>WHERE WE STARTED</small>

            <h2>
              More Than A Name.
              <br />
              An Identity.
            </h2>

            <p>
              Phantom was built around a simple belief: digital marketing
              should leave an impression after the scroll, search or click
              is over.
            </p>

            <ul>
              <li>Strategy before noise</li>
              <li>Creativity with a purpose</li>
              <li>Connected digital capabilities</li>
              <li>A brand identity designed to be remembered</li>
            </ul>
          </div>


          <div>
            <small>WHERE WE ARE GOING</small>

            <h2>
              The Story Is Still
              <br />
              Being Written.
            </h2>

            <p>
              The next chapter is not about abandoning what Phantom started
              as. It is about expanding the realm while keeping the same
              identity at its core.
            </p>

            <ul>
              <li>Deeper digital capabilities</li>
              <li>Stronger connected service journeys</li>
              <li>New markets and audiences</li>
              <li>Continuous evolution of the Phantom brand</li>
            </ul>
          </div>

        </div>


        <h3 className="svc-process-title">
          The Phantom Evolution
        </h3>

        <div className="svc-process">
          <article>
            <b>01</b>
            <h3>Imagine</h3>
            <p>
              Start with an idea strong enough to challenge the ordinary.
            </p>
          </article>

          <article>
            <b>02</b>
            <h3>Build</h3>
            <p>
              Turn that idea into strategy, services, systems and identity.
            </p>
          </article>

          <article>
            <b>03</b>
            <h3>Evolve</h3>
            <p>
              Keep adapting as platforms, audiences and digital behavior
              change.
            </p>
          </article>

          <article>
            <b>04</b>
            <h3>Haunt</h3>
            <p>
              Build a presence people remember long after the interaction.
            </p>
          </article>
        </div>
      </section>


      <section className="shell svc-section svc-related">
        <header>
          <small>BEYOND THE TIMELINE</small>
          <h2>Explore The Phantom Story</h2>
          <p>
            The journey is only one part of the story. Discover the people,
            identity and thinking behind Phantom Marketing.
          </p>
        </header>

        <div className="svc-related-grid">

          <Link href="/about" className="svc-related-card">
            <h3>About Phantom</h3>
            <p>
              Discover the mission, vision and principles behind Your
              Digital Demons.
            </p>
            <span>Explore About Us →</span>
          </Link>

          <div className="svc-related-card">
            <h3>Our Team</h3>
            <p>
              Meet the people behind the strategy, creativity and digital
              execution.
            </p>
            <span>Coming Next</span>
          </div>

          <div className="svc-related-card">
            <h3>Our Logo Journey</h3>
            <p>
              Explore how the Phantom identity and visual mark evolved.
            </p>
            <span>Coming Next</span>
          </div>

        </div>
      </section>


      <section className="svc-choice">
        <div className="shell">
          <small>THE NEXT CHAPTER</small>

          <h2>
            The Journey Isn't Over.
            <br />
            Neither Is The Haunting.
          </h2>

          <p>
            Phantom keeps evolving. Your brand can be part of what comes
            next.
          </p>

          <Link href="/contact-us">
            Enter The Phantom Realm
          </Link>
        </div>
      </section>

    </main>
  );
}