import type { Metadata } from "next";
import Link from "next/link";
import "../../components/services/phantom-service.css";
import "../about/about-layout-fix.css";

export const metadata: Metadata = {
  title: "Logo Journey | Phantom Marketing",
  description:
    "Explore the evolution of the Phantom Marketing identity from its first experimental mark to the digital world around it today.",
};

const eras = [
  {
    year: "2018",
    label: "THE FIRST FORM",
    title: "Before The Phantom Had A Face.",
    description: [
      "The idea behind Phantom already existed, but the work was still informal, independent and far from a polished agency identity.",
      "The earliest mark used separate P and M letters built from skeletal, circuit-inspired lines. Raw, technical and experimental, it reflected something that was still being constructed.",
    ],
    closing: "It represented something being built.",
  },
  {
    year: "2019",
    label: "FINDING A FACE",
    title: "The Phantom Becomes Recognizable.",
    description: [
      "As Phantom started developing a clearer personality, the identity became simpler and more recognizable.",
      "A white ghost appeared beside a bold golden P and grey M. The experimental framework was giving way to something people could actually recognize and remember.",
    ],
    closing: "The framework had become a face.",
  },
  {
    year: "2021",
    label: "THE PHANTOM TAKES SHAPE",
    title: "From Letters To A Symbol.",
    description: [
      "The next evolution pushed the identity further. A ghost sat at the center while eight geometric P symbols surrounded it, each outlined in a different color.",
      "It was more experimental, more expressive and the beginning of thinking beyond a single logo toward a broader visual language.",
    ],
    closing:
      "We were no longer just designing a logo. We were building a visual language.",
  },
  {
    year: "2023",
    label: "THE REBIRTH",
    title: "We Did Not Redesign The Logo. We Rebuilt The Phantom.",
    description: [
      "2023 became the defining rebrand. The logo, colors, visual language, motion and overall brand experience were rebuilt around a sharper and more confident identity.",
      "The current Phantom mark arrived alongside a darker digital world and an animated identity designed to work beyond a static logo.",
    ],
    closing: "Phantom had found its identity.",
  },
  {
    year: "2026",
    label: "THE DIGITAL EVOLUTION",
    title: "The Mark Stayed. The World Around It Evolved.",
    description: [
      "By 2026, the logo itself did not need another reinvention. Instead, the evolution moved into the digital experience surrounding it.",
      "The website, UI, UX, typography, motion, service architecture and visual environment evolved into a more mature Phantom ecosystem while the mark remained familiar.",
    ],
    closing: "The website itself became part of the identity.",
  },
];

function DummyImage({ label }: { label: string }) {
  return (
    <div
      className="svc-visual"
      style={{
        aspectRatio: "12 / 7",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,.10)",
        background:
          "radial-gradient(circle at 50% 45%, rgba(153,15,215,.20), transparent 42%), rgba(255,255,255,.025)",
      }}
    >
      <div>
        <b
          style={{
            display: "block",
            fontSize: "clamp(42px,7vw,88px)",
            color: "rgba(255,255,255,.14)",
          }}
        >
          {label}
        </b>

        <small>IMAGE PLACEHOLDER</small>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="svc phantom-service">

      <section className="svc-hero">
        <div className="svc-glow" />

        <div className="svc-hero-in">
          <span>THE EVOLUTION OF A PHANTOM</span>

          <h1>Logo Journey</h1>

          <h2>
            Every Phantom
            <br />
            Leaves A Mark.
          </h2>

          <p>
            A logo is more than a symbol. Ours evolved through experiments,
            ideas, redesigns and complete transformations as Phantom itself
            continued to evolve.
          </p>

          <div className="svc-actions">
            <a href="#logo-evolution" className="gradient-btn">
              Explore The Evolution
            </a>

            <Link href="/our-journey" className="ghost-btn">
              Our Journey
            </Link>
          </div>

          <div className="svc-trust">
            <b>2018 First Form</b>
            <b>2023 Rebirth</b>
            <b>Still Evolving</b>
          </div>
        </div>
      </section>


      <section className="svc-split shell">
        <div>
          <small>MORE THAN A LOGO</small>

          <h2>An Identity Built Through Evolution</h2>

          <p>
            Phantom did not begin with a finished brand manual or a perfectly
            polished identity. The mark evolved alongside the idea behind the
            company.
          </p>

          <p>
            Every version represents a different stage: experimentation,
            recognition, exploration, rebirth and finally a wider digital
            experience.
          </p>

          <p>
            We do not hide the rough beginnings. They are part of the mark we
            carry today.
          </p>
        </div>

        <DummyImage label="PM" />
      </section>


      <div id="logo-evolution" className="logo-evolution">
        {eras.map((era, index) => {
          const content = (
            <div>
              <small>
                {era.year} | {era.label}
              </small>

              <h2>{era.title}</h2>

              {era.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p>
                <strong>{era.closing}</strong>
              </p>
            </div>
          );

          const visual = <DummyImage label={era.year} />;

          return (
            <section className="svc-split shell logo-era-row" key={era.year}>
              {index % 2 === 0 ? (
                <>
                  {content}
                  {visual}
                </>
              ) : (
                <>
                  {visual}
                  {content}
                </>
              )}
            </section>
          );
        })}
      </div>


      <section className="shell svc-why-panel logo-evolution-glance">

        <small>THE EVOLUTION AT A GLANCE</small>

        <h2>One Mark. Different Chapters.</h2>

        <div className="svc-process about-principles-row">

          <article>
            <b>2018</b>
            <h3>A Framework</h3>
            <p>The first experimental trace of Phantom.</p>
          </article>

          <article>
            <b>2019</b>
            <h3>A Face</h3>
            <p>The ghost gave the identity a recognizable character.</p>
          </article>

          <article>
            <b>2021</b>
            <h3>A Symbol</h3>
            <p>The identity expanded into a more expressive visual system.</p>
          </article>

          <article>
            <b>2023</b>
            <h3>A Rebirth</h3>
            <p>The current Phantom identity emerged through a full rebrand.</p>
          </article>

          <article>
            <b>2026</b>
            <h3>A Digital World</h3>
            <p>The mark stayed while the experience around it evolved.</p>
          </article>

        </div>

      </section>


      <section className="svc-split shell logo-future-section">

        <DummyImage label="FUTURE" />

        <div className="logo-future-copy">
          <small>NEXT | THE HAUNTING CONTINUES</small>

          <h2>Evolution Was Never Supposed To End.</h2>

          <p>
            There will always be another screen, another platform, another
            technology and another way for people to experience a brand.
          </p>

          <p>
            Phantom will evolve with those changes without forgetting the
            identity that brought it here.
          </p>

          <p>
            <strong>
              The Phantom will evolve. The mark will remain. And the haunting
              continues.
            </strong>
          </p>
        </div>

      </section>


      <section className="shell svc-choice">

        <small>THE NEXT CHAPTER</small>

        <h2>The Haunting Continues.</h2>

        <p>
          The Phantom will evolve. The mark will remain. And the haunting
          continues.
        </p>

        <Link className="gradient-btn" href="/our-journey">
          EXPLORE OUR JOURNEY
        </Link>

      </section>

    </main>
  );
}