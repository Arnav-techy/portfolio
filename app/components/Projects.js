import Image from "next/image";

const projects = [
  {
    name: "Argus-AI",
    desc: "AI security copilot using Gemini and other AI APIs to scan and ",
    tag: "Agentic AI, Full Stack, DevSecOps",
    image: "/images/project1.png",
    live: "https://argus-ai-frontend.onrender.com",
    github: "https://github.com/Arnav-techy/Argus-AI",
  },
  {
    name: "PixelMart",
    desc: "Retro-styled e-commerce platform with cart management, payments integration, and pixel art product cards.",
    tag: "Next.js",
    image: "/images/project2.png",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    name: "ChatQuest",
    desc: "Real-time messaging app with emoji reactions, file sharing, and end-to-end encryption.",
    tag: "Node.js",
    image: "/images/project3.png",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    name: "WeatherBit",
    desc: "Pixel-themed weather forecast app with location tracking, weekly forecasts, and animated weather icons.",
    tag: "React",
    image: "/images/project4.png",
    live: "https://example.com",
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-thumbnail-wrapper">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={600}
                  height={375}
                  className="project-thumbnail"
                />
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-tag">{project.tag}</span>
              </div>

              <p className="project-desc">{project.desc}</p>

              <div className="project-actions">
                <a
                  href={project.live}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE
                </a>
                <a
                  href={project.github}
                  className="btn btn-filled"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
