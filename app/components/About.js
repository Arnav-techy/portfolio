import Image from "next/image";

export default function About() {
  const stats = [
    { number: "1+", label: "Year Exp" },
    { number: "4+", label: "Projects" },
    { number: "2+", label: "Clients" },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <Image
              src="/images/avatar.png"
              alt="Arnav Mishra - software engineer"
              width={360}
              height={360}
              className="about-image"
            />
          </div>

          <div className="about-content">
            <p className="about-bio">
              I&apos;m a software engineer with a passion for building
              beautiful, functional, and user-centered digital experiences. With
              a little more than a year of experience in the field, I&apos;ve worked with
              startups and established companies to ship products that people
              love.
            </p>
            <p className="about-bio">
              When I&apos;m not coding, you&apos;ll find me exploring retro
              gaming, tinkering with pixel art, or contributing to open source
              projects. I believe great software is built at the intersection of
              design and engineering.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
