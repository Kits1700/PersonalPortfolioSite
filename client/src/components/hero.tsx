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
    "Human-Centered Designer",
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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 rounded-full animate-pulse-slow"
            style={{
              background: 'radial-gradient(circle, hsl(158, 64%, 70%) 0%, hsl(158, 64%, 70%, 0.5) 30%, transparent 70%)',
              left: `${20 + mousePosition.x * 0.03}px`,
              top: `${20 + mousePosition.y * 0.03}px`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(1px)'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full animate-pulse-slow"
            style={{
              background: 'radial-gradient(circle, hsl(195, 100%, 85%) 0%, hsl(195, 100%, 85%, 0.4) 40%, transparent 70%)',
              right: `${20 + mousePosition.x * 0.02}px`,
              top: `${40 + mousePosition.y * 0.02}px`,
              transform: 'translate(50%, -50%)',
              animationDelay: '1s',
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full animate-pulse-slow"
            style={{
              background: 'radial-gradient(circle, hsl(270, 50%, 60%) 0%, hsl(270, 50%, 60%, 0.3) 50%, transparent 70%)',
              left: `${50 + mousePosition.x * 0.01}%`,
              bottom: `${20 + mousePosition.y * 0.01}px`,
              transform: 'translate(-50%, 50%)',
              animationDelay: '2s',
              filter: 'blur(3px)'
            }}
          />
        </div>
        
        {/* Tech grid pattern */}
        <div 
          className="absolute inset-0 opacity-20 tech-grid"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            animation: 'grid-move 20s linear infinite'
          }}
        />
        
        {/* Binary code rain effect */}
        <div className="absolute inset-0 matrix-effect" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float ${i % 2 === 0 ? 'animate-spin-slow' : 'animate-reverse-spin'}`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i * 8) % 60}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.3}s`
              }}
            >
              {i % 3 === 0 && (
                <div className="w-3 h-3 bg-primary/40 rounded-full blur-sm" />
              )}
              {i % 3 === 1 && (
                <div className="w-2 h-2 bg-secondary/40 rotate-45 blur-sm" />
              )}
              {i % 3 === 2 && (
                <div className="w-1 h-4 bg-gradient-to-t from-primary/40 to-secondary/40 blur-sm" />
              )}
            </div>
          ))}
        </div>
        
        {/* Morphing blob animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20 animate-morph">
            <div className="w-full h-full bg-gradient-to-br from-primary/60 to-secondary/60 rounded-full blur-xl" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 opacity-15 animate-morph-reverse">
            <div className="w-full h-full bg-gradient-to-bl from-secondary/60 to-primary/60 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto px-6 relative z-10">
        {/* Main heading with staggered animation */}
        <div className="mb-8">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <span className="gradient-text animate-text-glow">Sai Keerthana</span>
            <br />
            <span className="text-foreground">Arun</span>
          </h1>
        </div>

        {/* Dynamic typewriter effect */}
        <div className={`mb-8 ${isVisible ? 'animate-slideInRight animate-delay-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-3xl md:text-4xl font-semibold text-primary min-h-[48px] flex items-center">
              <span className="typewriter-text">
                {typingTexts[textIndex].slice(0, charIndex)}
              </span>
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>
        </div>

        {/* Description with improved typography */}
        <div className={`mb-12 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Bridging the gap between human needs and technological possibilities through thoughtful design and research.
            I create digital experiences that are <span className="text-primary font-medium">intuitive</span>, 
            <span className="text-secondary font-medium">transparent</span>, and grounded in 
            <span className="text-orange-400 font-medium">empathy</span>.
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
        <div className={`flex justify-center animate-bounce ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
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
