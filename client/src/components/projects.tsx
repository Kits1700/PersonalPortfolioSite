import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A comprehensive user research study and interface design for a modern e-commerce platform, focusing on conversion optimization and user journey mapping.",
      tags: ["UX Research", "React"],
      colors: "from-purple-600 to-blue-600",
      link: "#"
    },
    {
      title: "Mobile Health App",
      description: "User-centered design approach for a health tracking application, including user interviews, persona development, and prototype testing.",
      tags: ["User Research", "Figma"],
      colors: "from-green-600 to-teal-600",
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data-driven interface design for a business analytics platform, featuring complex data visualization and user workflow optimization.",
      tags: ["Data Viz", "D3.js"],
      colors: "from-orange-600 to-red-600",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Relevant Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning UX research, web development, and UI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-br ${project.colors} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tag === "UX Research" || tag === "User Research"
                            ? "bg-primary/20 text-primary"
                            : tag === "React"
                            ? "bg-blue-500/20 text-blue-400"
                            : tag === "Figma"
                            ? "bg-purple-500/20 text-purple-400"
                            : tag === "Data Viz"
                            ? "bg-primary/20 text-primary"
                            : "bg-indigo-500/20 text-indigo-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
