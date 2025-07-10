import { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A comprehensive user research study and interface design for a modern e-commerce platform, focusing on conversion optimization and user journey mapping.",
      tags: ["UX Research", "React", "Figma"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      link: "#",
      github: "#",
      preview: "#"
    },
    {
      title: "Mobile Health App",
      description: "User-centered design approach for a health tracking application, including user interviews, persona development, and prototype testing.",
      tags: ["User Research", "Figma", "Prototyping"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      link: "#",
      github: "#",
      preview: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data-driven interface design for a business analytics platform, featuring complex data visualization and user workflow optimization.",
      tags: ["Data Viz", "D3.js", "React"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      link: "#",
      github: "#",
      preview: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/10 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            Relevant <span className="gradient-text">Projects</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 ${isVisible ? 'animate-scaleIn animate-delay-100' : 'opacity-0'}`} />
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            A showcase of my work spanning UX research, web development, and UI applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift ${isVisible ? `animate-fadeInUp animate-delay-${300 + index * 100}` : 'opacity-0'}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project preview */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 animate-pulse" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                
                {/* Browser mockup */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <div className="w-4 h-4 border-2 border-white/40 rounded animate-spin" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/40 rounded w-3/4 animate-shimmer" />
                      <div className="h-2 bg-white/30 rounded w-1/2 animate-shimmer" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay with actions */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-all duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={project.preview}
                    className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors hover:scale-110 transform duration-200"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-card rounded-full text-foreground hover:bg-card/80 transition-colors hover:scale-110 transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/90 transition-colors hover:scale-110 transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        tag === "UX Research" || tag === "User Research"
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : tag === "React"
                          ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                          : tag === "Figma"
                          ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                          : tag === "Data Viz"
                          ? "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
                          : tag === "D3.js"
                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                          : "bg-secondary/20 text-secondary hover:bg-secondary/30"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Learn more link */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="group/link flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
