const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Python", icon: "🐍" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "SQL", icon: "🗃️" },
      { name: "GraphQL", icon: "◈" },
      { name: "Rust", icon: "⚙️" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Vue.js", icon: "💚" },
      { name: "Django", icon: "🎸" },
      { name: "TailwindCSS", icon: "💨" },
      { name: "Redux", icon: "🔄" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Figma", icon: "🎯" },
      { name: "VS Code", icon: "💻" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Linux", icon: "🐧" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="skills-group-title">{group.title}</h3>
              <div className="skills-cloud">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill.name}>
                    <span className="skill-icon" aria-hidden="true">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
