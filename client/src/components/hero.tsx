import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const typingTexts = [
    "UX Researcher",
    "Software Developer",
    "Human Centered Designer",
    "Technology Storyteller"
  ];

  useEffect(() => {
    // Simulate loading complete
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 500);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex < typingTexts[textIndex].length) {
          setCharIndex(charIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex, isTyping, typingTexts]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Simplified static background elements */}
      <div className="absolute inset-0 z-0">
        {/* Static gradient mesh */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(158, 64%, 70%) 0%, hsl(158, 64%, 70%, 0.3) 30%, transparent 70%)',
              left: '20px',
              top: '20px',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(1px)'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(195, 100%, 85%) 0%, hsl(195, 100%, 85%, 0.3) 40%, transparent 70%)',
              right: '20px',
              top: '40px',
              transform: 'translate(50%, -50%)',
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(270, 50%, 60%) 0%, hsl(270, 50%, 60%, 0.2) 50%, transparent 70%)',
              left: '50%',
              bottom: '20px',
              transform: 'translate(-50%, 50%)',
              filter: 'blur(3px)'
            }}
          />
        </div>
        
        {/* Static tech grid pattern */}
        <div className="absolute inset-0 opacity-10 tech-grid" />
      </div>

      <div className="text-center max-w-5xl mx-auto px-6 relative z-10">
        {/* Main heading with staggered animation */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading mb-6 leading-tight">
            <span className="gradient-text">Sai Keerthana</span>
            <br />
            <span className="text-foreground">Arun</span>
          </h1>
        </div>

        {/* Dynamic typewriter effect */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-primary min-h-[48px] flex items-center">
              <span className="typewriter-text">
                {typingTexts[textIndex].slice(0, charIndex)}
              </span>
              <span className="text-primary">|</span>
            </div>
          </div>
        </div>

        {/* Description with improved typography */}
        <div className="mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            From user insights to usable interfaces, then I code them too.
          </p>
        </div>

        {/* Enhanced social links */}
        <div className="flex justify-center space-x-4 sm:space-x-8 mb-12">
          <a
            href="https://www.linkedin.com/in/saikeerthanaarun/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-full bg-card/50 border border-border hover:border-primary transition-all duration-300 hover-lift hover-glow"
          >
            <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/Kits1700"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-full bg-card/50 border border-border hover:border-primary transition-all duration-300 hover-lift hover-glow"
          >
            <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="mailto:saikeerthana.arun@gmail.com"
            className="group p-4 rounded-full bg-card/50 border border-border hover:border-primary transition-all duration-300 hover-lift hover-glow"
          >
            <Mail className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => handleNavClick('#projects')}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg hover:bg-primary/90 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => handleNavClick('#contact')}
            className="group px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
          >
            Get In Touch
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <button
            onClick={() => handleNavClick('#about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm mb-2 group-hover:text-primary">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
