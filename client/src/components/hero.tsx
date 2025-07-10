import { Github, Linkedin, Dribbble } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Sai Keerthana Arun
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          UX Researcher
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Developer
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I am not only at developing beautiful interfaces but also in crafting intuitive user experiences. I transform digital 
          experiences to create delightful solutions that are both functional and aesthetically pleasing.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors duration-200"
          >
            <Github size={32} />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors duration-200"
          >
            <Dribbble size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
