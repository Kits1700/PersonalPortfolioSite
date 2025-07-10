import { useState, useEffect } from "react";
import { Search, Code, Palette, TrendingUp, Users, Brain, Zap, Target } from "lucide-react";

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
      icon: <Search className="w-6 h-6" />,
      title: "UX Research",
      description: "User interviews, surveys, usability testing",
      color: "hsl(158, 64%, 70%)"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML, CSS",
      color: "hsl(195, 100%, 85%)"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Figma, Sketch, Adobe Creative Suite",
      color: "hsl(0, 0%, 96%)"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Analytics, A/B testing, insights",
      color: "hsl(158, 64%, 70%)"
    }
  ];

  const highlights = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "User-centered approach"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      text: "Research-driven decisions"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Rapid prototyping"
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Goal-oriented solutions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full ${isVisible ? 'animate-scaleIn animate-delay-100' : 'opacity-0'}`} />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Description */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInLeft animate-delay-200' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed">
              I design technology that listens, adapts, and respects the people who use it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in <span className="text-primary font-semibold">Computer Science</span> and a <span className="text-secondary font-semibold">Master's in Human-Computer Interaction</span>, I work at the intersection of UX research, software development, machine learning, and IoT, bridging the human and technical to build systems that are not only functional but also deeply intentional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans interactive language learning platforms, immersive VR experiences, IoT-based safety systems, and explainable AI interfaces. I've led mixed-methods research, modelled user behaviour, and developed feedback pipelines that embed human insight into every stage of design and development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in aligning emerging technologies with real-world needs, building digital experiences that are <span className="text-primary font-semibold">intuitive</span>, <span className="text-secondary font-semibold">transparent</span>, and grounded in empathy. I believe that innovation means nothing if it isn't meaningful, and my mission is to make that meaning felt in every interaction.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className={`${isVisible ? 'animate-slideInRight animate-delay-300' : 'opacity-0'}`}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover-glow">
              <h3 className="text-2xl font-bold mb-6 text-center">My Approach</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300 ${isVisible ? `animate-fadeInUp animate-delay-${400 + index * 100}` : 'opacity-0'}`}
                  >
                    <div className="text-primary">
                      {highlight.icon}
                    </div>
                    <span className="text-sm font-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover-lift cursor-pointer ${isVisible ? `animate-scaleIn animate-delay-${500 + index * 100}` : 'opacity-0'}`}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* Gradient background on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${skill.color} 0%, transparent 100%)` 
                }}
              />
              
              <div className="relative z-10 text-center">
                <div 
                  className="mb-4 flex justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    color: activeSkill === index ? skill.color : 'hsl(var(--primary))' 
                  }}
                >
                  {skill.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-foreground transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
