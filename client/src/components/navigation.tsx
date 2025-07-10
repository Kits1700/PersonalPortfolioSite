import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">
            Sai Keerthana Arun
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick("#home")}
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#about")}
              className="hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#projects")}
              className="hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
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
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("#home")}
                className="hover:text-primary transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("#about")}
                className="hover:text-primary transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("#projects")}
                className="hover:text-primary transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="hover:text-primary transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
