import type { Metadata } from "next";
import Link from "next/link";
import "../../components/services/phantom-service.css";
import "../about/about-layout-fix.css";
import "./team.css";

export const metadata: Metadata = {
  title: "Our Team | Phantom Marketing",
  description:
    "Meet the people behind Phantom Marketing and Your Digital Demons.",
};

const team = [
  {
    slug: "team-member-01",
    name: "Team Member 01",
    role: "Founder and CEO",
    specialty: "Strategy | Growth | Leadership",
    initials: "TM",
  },
  {
    slug: "team-member-02",
    name: "Team Member 02",
    role: "Creative Lead",
    specialty: "Branding | Creative | Design",
    initials: "TM",
  },
  {
    slug: "team-member-03",
    name: "Team Member 03",
    role: "Search Lead",
    specialty: "SEO | AEO | GEO | AI Search",
    initials: "TM",
  },
  {
    slug: "team-member-04",
    name: "Team Member 04",
    role: "Paid Media Lead",
    specialty: "PPC | Google Ads | Paid Social",
    initials: "TM",
  },
  {
    slug: "team-member-05",
    name: "Team Member 05",
    role: "Social Media Lead",
    specialty: "Social | Content | Community",
    initials: "TM",
  },
  {
    slug: "team-member-06",
    name: "Team Member 06",
    role: "Web and Technology Lead",
    specialty: "Development | UX | Technology",
    initials: "TM",
  },
];

const culture = [
  {
    number: "01",
    title: "Different Minds. One Direction.",
    copy:
      "Strategy, creative, search, media and technology bring different perspectives to the table, but the goal stays shared.",
  },
  {
    number: "02",
    title: "Ideas Can Come From Anywhere.",
    copy:
      "A title does not make an idea valuable. The strongest thinking wins, no matter where in the team it begins.",
  },
  {
    number: "03",
    title: "Challenge The Comfortable.",
    copy:
      "We question familiar answers, test assumptions and keep looking for a stronger way to solve the problem.",
  },
  {
    number: "04",
    title: "Grow Together.",
    copy:
      "Knowledge becomes more valuable when it moves across the team. What one Phantom learns can make every Phantom stronger.",
  },
];

export default function OurTeamPage() {
  return (
    <main className="svc phantom-service team-page">

      <section className="svc-hero">
        <div className="svc-glow" />

        <div className="svc-hero-in">
          <span>MEET THE PHANTOMS</span>

          <h1>Our Team</h1>

          <h2>
            Different Minds.
            <br />
            One Digital Force.
          </h2>

          <p>
            Behind every strategy, campaign, design and digital experience is a
            team of people bringing different skills to the same mission.
          </p>

          <div className="svc-actions">
            <a href="#meet-the-team" className="gradient-btn">
              Meet The Team
            </a>

            <Link href="/about" className="ghost-btn">
              About Phantom
            </Link>
          </div>

          <div className="svc-trust">
            <b>Strategy</b>
            <b>Creativity</b>
            <b>Technology</b>
          </div>
        </div>
      </section>


      <section className="svc-split shell team-intro">

        <div>
          <small>THE PEOPLE BEHIND THE PHANTOM</small>

          <h2>Great Work Is Never A One Person Story.</h2>

          <p>
            Phantom brings together different ways of thinking under one
            digital roof. Strategists see the direction. Creatives give it a
            voice. Marketers create momentum. Developers turn ideas into
            experiences.
          </p>

          <p>
            The disciplines may be different, but the work becomes stronger
            when those disciplines stop operating in isolation.
          </p>

          <p>
            That is where the real Phantom begins. Not with one person, but
            with what happens when the right people build together.
          </p>
        </div>

        <div className="team-intro-visual">
          <span>YOUR</span>
          <strong>DIGITAL</strong>
          <b>DEMONS</b>
          <small>Different skills. Shared ambition.</small>
        </div>

      </section>


      <section className="shell svc-section" id="meet-the-team">

        <header>
          <small>OUR DIGITAL DEMONS</small>

          <h2>Meet The Minds Behind The Work</h2>

          <p>
            Different disciplines. Different perspectives. One team working
            together to make brands harder to ignore.
          </p>
        </header>

        <div className="team-grid">
          {team.map((member) => (
            <Link
              href={`/our-team/${member.slug}`}
              className="team-card"
              key={member.slug}
            >
              <div className="team-photo-placeholder">
                <span>{member.initials}</span>
              </div>

              <div className="team-card-copy">
                <small>{member.role}</small>
                <h3>{member.name}</h3>
                <p>{member.specialty}</p>
                <b>Meet This Phantom</b>
              </div>
            </Link>
          ))}
        </div>

      </section>


      <section className="shell svc-why-panel">

        <small>HOW WE WORK TOGETHER</small>

        <h2>No Silos. No Lone Wolves. No Disconnected Thinking.</h2>

        <div className="svc-why-top">

          <div>
            <h3>One Problem. Multiple Perspectives.</h3>

            <p>
              A search problem may also be a content problem. A paid campaign
              may expose a landing page problem. A brand challenge may begin
              with the experience, not the logo.
            </p>

            <ul>
              <li>Strategy connects the disciplines before execution begins.</li>
              <li>Ideas are challenged from more than one point of view.</li>
              <li>Teams share context instead of protecting separate silos.</li>
            </ul>
          </div>

          <div>
            <h3>The Best Idea Gets The Room.</h3>

            <p>
              Good collaboration is not everyone agreeing. It is giving the
              strongest idea enough room to survive questions, improve and
              become something worth executing.
            </p>

            <ul>
              <li>Challenge the idea, not the person behind it.</li>
              <li>Use data where it helps and judgment where it matters.</li>
              <li>Keep the final business goal bigger than individual channels.</li>
            </ul>
          </div>

        </div>

      </section>


      <section className="shell svc-section">

        <header>
          <small>PHANTOM CULTURE</small>

          <h2>What Makes A Digital Demon?</h2>

          <p>
            Skills get someone through the door. The way we think, collaborate
            and evolve is what makes the team work.
          </p>
        </header>

        <div className="svc-process about-principles-row">
          {culture.map((item) => (
            <article key={item.number}>
              <b>{item.number}</b>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

      </section>


      <section className="shell svc-choice">

        <small>WORK WITH THE PHANTOMS</small>

        <h2>Bring The Challenge. We Will Bring The Team.</h2>

        <p>
          Tell us what you are trying to build, fix or grow. We will bring the
          right minds together around it.
        </p>

        <Link className="gradient-btn" href="/contact-us">
          CONJURE YOUR TEAM
        </Link>

      </section>

    </main>
  );
}
