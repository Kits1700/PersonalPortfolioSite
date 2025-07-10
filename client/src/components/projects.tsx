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
      title: "UX Research & Human-Centered Design",
      description: "Mixed-methods research and intuitive design that puts people first",
      tags: ["UX Research", "User Interviews", "Design Thinking"],
      gradient: "from-pink-500 via-rose-500 to-red-500",
      icon: "🧠",
      link: "#",
      github: "#",
      preview: "#"
    },
    {
      title: "Human-AI Interaction",
      description: "Designing transparent, safe, and human-aligned AI experiences",
      tags: ["AI/ML", "Ethics", "Explainable AI"],
      gradient: "from-yellow-500 via-orange-500 to-amber-500",
      icon: "🤖",
      link: "#",
      github: "#",
      preview: "#"
    },
    {
      title: "Prototyping & Development",
      description: "Turning ideas into reality with full-stack code and functional systems",
      tags: ["Full-Stack", "React", "Node.js"],
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      icon: "💻",
      link: "#",
      github: "#",
      preview: "#"
    },
    {
      title: "ML & IoT Systems",
      description: "Building smart, responsive systems with real-world impact",
      tags: ["IoT", "Machine Learning", "Systems"],
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      icon: "🌐",
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
            My <span className="gradient-text">Expertise</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 ${isVisible ? 'animate-scaleIn animate-delay-100' : 'opacity-0'}`} />
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            My core areas of focus where I bridge human insight with technical innovation.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift ${isVisible ? `animate-fadeInUp animate-delay-${300 + index * 100}` : 'opacity-0'}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project header with icon */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{project.icon}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        tag === "UX Research" || tag === "User Interviews" || tag === "Design Thinking"
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : tag === "AI/ML" || tag === "Ethics" || tag === "Explainable AI"
                          ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                          : tag === "Full-Stack" || tag === "React" || tag === "Node.js"
                          ? "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                          : tag === "IoT" || tag === "Machine Learning" || tag === "Systems"
                          ? "bg-secondary/20 text-secondary hover:bg-secondary/30"
                          : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
