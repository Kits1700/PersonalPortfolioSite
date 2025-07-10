import { Github, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            &copy; 2024 Sai Keerthana Arun. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Dribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
