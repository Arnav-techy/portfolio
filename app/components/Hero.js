import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-avatar-wrapper">
          <Image
            src="/images/Gemini_Generated_Image_fa4n0ofa4n0ofa4n.png"
            alt="Pixel art avatar of Arnav Mishra"
            width={300}
            height={300}
            className="hero-avatar"
            priority
          />
        </div>
      </div>

      <div className="hero-right">
        <span className="hero-greeting">Hi, I&apos;m Arnav 👾</span>
        <h1 className="hero-title">
          SOFTWARE
          <br />
          <span className="highlight">ENGINEER</span>
        </h1>
        <p className="hero-bio">
          I craft secure and scalable full-stack applications with a focus on agentic AI and DevSecOps. Specializing in building intelligent systems that protect and empower users.
        </p>
        <div className="hero-status">
          <span className="hero-status-dot" />
          Available for new projects
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-filled">
            HIRE ME
          </a>
          <a href="#projects" className="btn btn-ghost">
            SEE WORK
          </a>
        </div>
      </div>
    </section>
  );
}
