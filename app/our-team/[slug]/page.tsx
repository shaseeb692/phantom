import type { Metadata } from "next";
import Link from "next/link";
import "../../../components/services/phantom-service.css";
import "../../about/about-layout-fix.css";
import "../team.css";

const team = [
  {
    slug: "team-member-01",
    name: "Team Member 01",
    role: "Founder and CEO",
    specialty: "Strategy | Growth | Leadership",
    intro:
      "Leading Phantom's direction by connecting business strategy, marketing and execution.",
    about:
      "This is temporary profile content. The final biography, experience and leadership story will be added with the real team information.",
    skills: ["Digital Strategy", "Growth", "Leadership", "Brand Direction"],
  },
  {
    slug: "team-member-02",
    name: "Team Member 02",
    role: "Creative Lead",
    specialty: "Branding | Creative | Design",
    intro:
      "Shaping the visual ideas and creative systems that make brands recognizable.",
    about:
      "This is temporary profile content. The final creative background, portfolio and experience will be added with the real team information.",
    skills: ["Creative Direction", "Branding", "Graphic Design", "Campaign Creative"],
  },
  {
    slug: "team-member-03",
    name: "Team Member 03",
    role: "Search Lead",
    specialty: "SEO | AEO | GEO | AI Search",
    intro:
      "Building organic visibility across traditional search, answer engines and AI discovery.",
    about:
      "This is temporary profile content. The final search experience, certifications and specialist background will be added later.",
    skills: ["SEO", "Technical SEO", "AEO", "GEO", "AI Search"],
  },
  {
    slug: "team-member-04",
    name: "Team Member 04",
    role: "Paid Media Lead",
    specialty: "PPC | Google Ads | Paid Social",
    intro:
      "Connecting paid media strategy, targeting and measurement to meaningful business outcomes.",
    about:
      "This is temporary profile content. The final paid media experience, platform expertise and campaign background will be added later.",
    skills: ["PPC", "Google Ads", "Paid Social", "Performance Marketing"],
  },
  {
    slug: "team-member-05",
    name: "Team Member 05",
    role: "Social Media Lead",
    specialty: "Social | Content | Community",
    intro:
      "Building social experiences that help brands earn attention and stay recognizable.",
    about:
      "This is temporary profile content. The final social media background, campaigns and platform experience will be added later.",
    skills: ["Social Strategy", "Content", "Community", "Campaign Planning"],
  },
  {
    slug: "team-member-06",
    name: "Team Member 06",
    role: "Web and Technology Lead",
    specialty: "Development | UX | Technology",
    intro:
      "Turning strategy and design into fast, usable and scalable digital experiences.",
    about:
      "This is temporary profile content. The final development background, technical expertise and project experience will be added later.",
    skills: ["Web Development", "UX", "Technology", "Performance"],
  },
];

export function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((item) => item.slug === slug);

  return {
    title: member
      ? `${member.name} | Phantom Marketing`
      : "Our Team | Phantom Marketing",
    description: member
      ? `${member.name}, ${member.role} at Phantom Marketing.`
      : "Meet the team behind Phantom Marketing.",
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((item) => item.slug === slug);

  if (!member) {
    return (
      <main className="svc phantom-service team-page">
        <section className="svc-hero">
          <div className="svc-glow" />

          <div className="svc-hero-in">
            <span>PHANTOM NOT FOUND</span>
            <h1>Team Member Not Found</h1>

            <div className="svc-actions">
              <Link href="/our-team" className="gradient-btn">
                BACK TO OUR TEAM
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="svc phantom-service team-page">

      <section className="svc-hero">
        <div className="svc-glow" />

        <div className="svc-hero-in">
          <span>MEET THIS PHANTOM</span>

          <h1>{member.name}</h1>

          <h2>{member.role}</h2>

          <p>{member.specialty}</p>

          <div className="svc-actions">
            <Link href="/contact-us" className="gradient-btn">
              WORK WITH THE PHANTOMS
            </Link>

            <Link href="/our-team" className="ghost-btn">
              BACK TO OUR TEAM
            </Link>
          </div>

          <div className="svc-trust">
            <b>Strategy</b>
            <b>Creativity</b>
            <b>Execution</b>
          </div>
        </div>
      </section>


      <section className="svc-split shell team-intro">

        <div>
          <small>BEHIND THE PHANTOM</small>

          <h2>{member.role}</h2>

          <p>{member.intro}</p>

          <p>{member.about}</p>

          <p>
            Every Phantom brings a different discipline to the table while
            working as part of one connected digital team.
          </p>
        </div>

        <div className="team-intro-visual">
          <span>TEAM</span>
          <strong>PHANTOM</strong>
          <b>{member.name}</b>
          <small>{member.role}</small>
        </div>

      </section>


      <section className="shell svc-section">

        <header>
          <small>DIGITAL ARSENAL</small>

          <h2>Areas Of Focus</h2>

          <p>
            The disciplines this Phantom brings into the wider Phantom
            Marketing ecosystem.
          </p>
        </header>

        <div className="svc-process about-principles-row">
          {member.skills.map((skill, index) => (
            <article key={skill}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{skill}</h3>
              <p>
                Part of the specialist knowledge used to support connected
                digital strategies and execution.
              </p>
            </article>
          ))}
        </div>

      </section>


      <section className="shell svc-why-panel">

        <small>HOW WE WORK</small>

        <h2>Specialist Thinking. Connected Execution.</h2>

        <div className="svc-why-top">

          <div>
            <h3>Part Of The Bigger Picture.</h3>

            <p>
              No discipline works in complete isolation. Search can influence
              content. Creative can influence paid media. Technology can affect
              almost every digital channel.
            </p>

            <ul>
              <li>Strategy comes before isolated tactics.</li>
              <li>Different specialists share context.</li>
              <li>The business objective stays bigger than the channel.</li>
            </ul>
          </div>

          <div>
            <h3>Built Around Collaboration.</h3>

            <p>
              The strongest work happens when different perspectives can
              challenge an idea, improve it and help turn it into something
              worth executing.
            </p>

            <ul>
              <li>Challenge ideas without protecting silos.</li>
              <li>Use data and judgment together.</li>
              <li>Keep learning across disciplines.</li>
            </ul>
          </div>

        </div>

      </section>


      <section className="shell svc-choice">

        <small>THE PHANTOM COLLECTIVE</small>

        <h2>One Phantom. Part Of A Bigger Digital Force.</h2>

        <p>
          Meet the strategists, marketers, creatives and technologists working
          together behind Phantom Marketing.
        </p>

        <Link className="gradient-btn" href="/our-team">
          MEET THE WHOLE TEAM
        </Link>

      </section>

    </main>
  );
}