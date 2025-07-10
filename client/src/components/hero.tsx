import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(158, 64%, 70%) 0%, transparent 70%)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(195, 100%, 85%) 0%, transparent 70%)',
            right: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
            transform: 'translate(50%, -50%)',
            animationDelay: '1s'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto px-6 relative z-10">
        {/* Main heading with staggered animation */}
        <div className="mb-8">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <span className="gradient-text">Sai Keerthana</span>
            <br />
            <span className="text-foreground">Arun</span>
          </h1>
        </div>

        {/* Role titles with typewriter effect */}
        <div className={`mb-8 ${isVisible ? 'animate-slideInRight animate-delay-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              UX Researcher
            </h2>
            <span className="text-4xl md:text-5xl font-light text-muted-foreground">×</span>
            <p className="text-3xl md:text-4xl text-secondary font-semibold">
              Software Developer
            </p>
          </div>
        </div>

        {/* Description with improved typography */}
        <div className={`mb-12 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            I tell the story of technology through people. By weaving together UX research and software development, 
            I create digital experiences that are <span className="text-primary font-medium">intuitive</span>, 
            <span className="text-secondary font-medium">purposeful</span>, and rooted in real human needs.
          </p>
        </div>

        {/* Enhanced social links */}
        <div className={`flex justify-center space-x-8 mb-12 ${isVisible ? 'animate-scaleIn animate-delay-300' : 'opacity-0'}`}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-full bg-card/50 border border-border hover:border-primary transition-all duration-300 hover-lift hover-glow"
          >
            <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-full bg-card/50 border border-border hover:border-primary transition-all duration-300 hover-lift hover-glow"
          >
            <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="group p-4 rounded-full bg-card/50 border border-border hover:border-primary transition-all duration-300 hover-lift hover-glow"
          >
            <Mail className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        {/* Call to action buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
          <button
            onClick={() => handleNavClick('#projects')}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => handleNavClick('#contact')}
            className="group px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
          >
            Get In Touch
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`animate-bounce ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
          <button
            onClick={() => handleNavClick('#about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm mb-2 group-hover:text-primary">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
