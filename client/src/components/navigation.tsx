import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 400);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-background/90 backdrop-blur-sm border-b border-border'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick("#home")}
              className={`text-lg font-semibold transition-all duration-300 hover:text-primary ${
                scrolled ? 'text-foreground' : 'text-foreground/90'
              }`}
            >
              Sai Keerthana Arun
            </button>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(`#${id}`)}
                  className={`relative px-3 py-2 rounded-md transition-all duration-300 group ${
                    activeSection === id
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {label}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slideDown">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(`#${id}`)}
                    className={`px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === id
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5 hover:translate-x-1'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
