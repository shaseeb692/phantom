import type { Metadata } from "next";
import Link from "next/link";
import "../../components/services/phantom-service.css";
import "./about-layout-fix.css";

export const metadata: Metadata = {
  title: "About Phantom Marketing | Your Digital Demons",
  description:
    "Meet Phantom Marketing, the digital demons behind connected search, AI visibility, paid media, social, creative, branding and web experiences.",
};

const principles = [
  {
    title: "Strategy Before Noise",
    description:
      "Every move needs a reason, an audience and a measurable purpose. We build the strategy before we create the noise.",
  },
  {
    title: "Creativity With Purpose",
    description:
      "Attention matters only when it leads somewhere. We connect creative thinking with real business objectives.",
  },
  {
    title: "Data Without Losing Humanity",
    description:
      "Data guides our decisions, but real people remain at the center of every campaign, experience and interaction.",
  },
  {
    title: "Built to Evolve",
    description:
      "Search changes. Platforms change. AI changes discovery. Phantom evolves without abandoning the fundamentals that make brands matter.",
  },
];

const phantomCode = [
  {
    title: "Be Visible, Not Noisy",
    description: "Attention without purpose means nothing.",
  },
  {
    title: "Earn Trust Before Action",
    description: "Strong marketing gives people a reason to choose.",
  },
  {
    title: "Never Stop Evolving",
    description:
      "Platforms, algorithms and audience behavior change. Strategy should evolve with them.",
  },
  {
    title: "Make Creativity Perform",
    description:
      "Beautiful work and measurable business outcomes should coexist.",
  },
  {
    title: "Stay Human in an AI World",
    description:
      "Technology should strengthen ideas and execution, not replace human thinking.",
  },
];

export default function Page() {
  return (
    <main className="svc phantom-service">

      <section className="svc-hero">
        <div className="svc-glow" />

        <div className="svc-hero-in">
          <span>MEET YOUR DIGITAL DEMONS</span>

          <h1>Phantom Marketing</h1>

          <h2>
            We Don't Just Market Brands.
            <br />
            We Make Them Haunt Their Market.
          </h2>

          <p>
            Strategy, creativity, search and technology brought together to
            build brands that are visible, memorable and difficult to ignore.
          </p>

          <div className="svc-actions">
            <Link href="/contact-us" className="gradient-btn">
              Conjure Your Strategy
            </Link>

            <a href="#who-we-are" className="ghost-btn">
              Meet the Phantoms
            </a>
          </div>

          <div className="svc-trust">
            <b>Strategy First</b>
            <b>Creativity With Purpose</b>
            <b>Built to Evolve</b>
          </div>
        </div>
      </section>

      <section className="svc-split shell" id="who-we-are">
        <div>
          <small>WHO WE ARE</small>

          <h2>Not Your Typical Digital Agency</h2>

          <p>
            Phantom Marketing was built around a simple belief: digital
            marketing should do more than generate impressions. It should
            create presence.
          </p>

          <p>
            We bring strategy, creativity, technology and performance together
            under one roof, connecting search, AI discovery, paid media,
            social, branding, design and web around the way modern audiences
            discover and choose brands.
          </p>

          <p>
            We call ourselves <strong>Your Digital Demons</strong> because we
            do not believe in quietly existing online. We build brands that
            haunt searches, possess feeds and leave a presence long after the
            first interaction.
          </p>
        </div>

        <div className="svc-visual svc-photo-visual">
          <img
            src="/images/about/About Us.webp"
            alt="Phantom Marketing digital agency - Your Digital Demons"
            loading="eager"
          />
        </div>
      </section>

      <section className="shell svc-why-panel">

        <small>WHY PHANTOM MARKETING</small>

        <h2>Built Around More Than Marketing Activity</h2>

        <div className="svc-why-top">

          <div>
            <h3>Our Mission</h3>

            <p>
              Turn digital presence into digital influence.
            </p>

            <ul>
              <li>
                Connect search, AI discovery, paid media, social, branding,
                design and web into one digital ecosystem.
              </li>
              <li>
                Build meaningful visibility instead of chasing empty activity.
              </li>
              <li>
                Help brands become discovered, remembered and chosen.
              </li>
            </ul>
          </div>

          <div>
            <h3>Our Vision</h3>

            <p>
              A digital world where great brands never go unnoticed.
            </p>

            <ul>
              <li>
                Build Phantom into a globally recognized digital agency.
              </li>
              <li>
                Challenge disconnected and conventional marketing thinking.
              </li>
              <li>
                Keep brands visible as search, platforms and AI discovery
                continue to evolve.
              </li>
            </ul>
          </div>

        </div>

        <h3 className="svc-process-title">
          What Makes a Phantom?
        </h3>

        <div className="svc-process about-principles-row">
          {principles.map((item, index) => (
            <article key={item.title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

      </section>

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

          <Link href="/our-journey" className="svc-related-card">
            <h3>Our Journey</h3>
            <p>
              From an idea in the shadows to a connected digital ecosystem.
              Discover how Phantom Marketing started and where the journey is
              heading.
            </p>
            <span>Explore Our Journey →</span>
          </Link>

          <div className="svc-related-card">
            <h3>Our Team</h3>
            <p>
              Strategists, marketers, creatives, designers, developers and
              problem-solvers. Different minds working together as one digital
              force.
            </p>
            <span>Meet the Phantoms - Coming Soon</span>
          </div>

          <div className="svc-related-card">
            <h3>Our Logo Journey</h3>
            <p>
              Every Phantom leaves a mark. Discover how our identity evolved
              alongside the brand and the story behind the Phantom mark.
            </p>
            <span>Logo Journey - Coming Soon</span>
          </div>

        </div>

      </section>

      <section className="shell svc-section">

        <header>
          <small>OUR CODE</small>
          <h2>The Rules We Haunt By</h2>
          <p>
            The principles we carry into every strategy, campaign and digital
            experience.
          </p>
        </header>

        <div className="svc-grid about-code-row">
          {phantomCode.map((item, index) => (
            <div key={item.title}>
              <article>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </div>
          ))}
        </div>

      </section>

      <section className="shell svc-choice">

        <small>THE CHOICE IS YOURS</small>

        <h2>
          The Next Chapter Could Be Yours.
        </h2>

        <p>
          You know who we are. Now let's see what your brand could become.
          Bring us the ambition. We'll bring the strategy, creativity and
          digital sorcery.
        </p>

        <Link className="gradient-btn" href="/contact-us">
          CONJURE YOUR STRATEGY
        </Link>

      </section>

    </main>
  );
}