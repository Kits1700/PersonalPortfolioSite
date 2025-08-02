import { useState, useEffect } from "react";
import { Search, Code, Palette, TrendingUp, Users, Brain, Zap, Target, Microscope, Bot, Laptop, Network } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "UX Research & Human Centered Design",
      description: "Mixed-methods research and intuitive design that puts people first",
      color: "hsl(158, 64%, 70%)"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Human AI Interaction",
      description: "Designing transparent, safe, and human aligned AI experiences",
      color: "hsl(195, 100%, 85%)"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Prototyping & Development",
      description: "Turning ideas into reality with full-stack code and functional systems",
      color: "hsl(158, 64%, 70%)"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "ML & IoT Systems",
      description: "Building smart, responsive systems with real-world impact",
      color: "hsl(195, 100%, 85%)"
    }
  ];

  const highlights = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "User centered approach"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      text: "Research driven decisions"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Rapid prototyping"
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Goal oriented solutions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Simplified static background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary/20" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-bl from-secondary/15 to-primary/15" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Hero quote */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
            <blockquote className="text-lg md:text-xl font-light text-center italic leading-relaxed">
              "I design technology that listens, adapts, and respects the people who use it."
            </blockquote>
          </div>
        </div>

        {/* Main content */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Background</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in Computer Science and Human-Computer Interaction, my work unites UX research, development, ML, and IoT to create technology that serves real people: intentionally and effectively.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Experience</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work spans interactive language learning platforms, immersive VR experiences, IoT-based safety systems, and explainable AI interfaces. I've led mixed-methods research, modelled user behaviour, and developed feedback pipelines that embed human insight into every stage of design and development.
              </p>
            </div>

          </div>
        </div>

        {/* Skills section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Core <span className="gradient-text">Competencies</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift cursor-pointer"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
                      border: `1px solid ${skill.color}30`
                    }}
                  />
                </div>
                
                <div className="relative z-10 text-center">
                  <div 
                    className="p-4 rounded-full transition-all duration-300 group-hover:scale-110 mb-4 mx-auto w-fit"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <div style={{ color: skill.color }}>{skill.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
