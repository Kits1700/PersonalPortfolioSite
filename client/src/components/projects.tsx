import { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

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
      title: "UX Human LLM Overreliance Thesis",
      description: "Research investigating user overreliance on large language models and designing interventions to promote more balanced human-AI collaboration.",
      tags: ["UX Research", "Human-AI Interaction", "Thesis"],
      gradient: "from-primary via-primary/80 to-primary/60",
      icon: "🧠",
      link: "/case-study/llm",
      github: "#",
      preview: "#"
    },
    {
      title: "VR Game: Survival of the Fittest",
      description: "Immersive virtual reality game exploring evolutionary concepts through interactive gameplay and user-centered design principles.",
      tags: ["VR/AR", "Game Design", "Unity"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      icon: "🎮",
      link: "/case-study/vr",
      github: "#",
      preview: "#"
    },
    {
      title: "Smart Environmental Monitoring System",
      description: "IoT-based environmental monitoring system providing real-time data and insights for sustainable resource management.",
      tags: ["IoT", "Environmental Tech", "Data Analytics"],
      gradient: "from-secondary via-secondary/80 to-secondary/60",
      icon: "🌱",
      link: "/case-study/iot",
      github: "#",
      preview: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects that demonstrate my approach to human-centered technology design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project preview */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-80">{project.icon}</div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                
                {/* Hover overlay with case study link */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <Link href={project.link}>
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors hover:scale-105 transform duration-200">
                      View Case Study
                    </button>
                  </Link>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        tag === "UX Research" || tag === "Human-AI Interaction" || tag === "Thesis"
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : tag === "VR/AR" || tag === "Game Design" || tag === "Unity"
                          ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                          : tag === "IoT" || tag === "Environmental Tech" || tag === "Data Analytics"
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
