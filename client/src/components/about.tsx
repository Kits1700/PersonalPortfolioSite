import { Search, Code, Palette, TrendingUp } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "UX Research",
      description: "User interviews, surveys, usability testing"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML, CSS"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Figma, Sketch, Adobe Creative Suite"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Analytics, A/B testing, insights"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a passionate UX Researcher and Software Developer with expertise in creating intuitive and engaging digital experiences. My journey in technology spans across frontend development, user research, and interface design, allowing me to bridge the gap between user needs and technical implementation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My work goes beyond just creating beautiful interfaces. I believe in understanding user behavior, conducting thorough research, and translating insights into design solutions that not only look great but also solve real problems. I'm constantly exploring new technologies and methodologies to enhance user experience.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              As a creative problem-solver, I enjoy working on projects that challenge me to think differently and push the boundaries of what's possible in web development and user experience design. I'm always eager to collaborate with teams who share my passion for creating meaningful digital experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors duration-200"
            >
              <div className="text-center">
                <div className="text-primary mb-3 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
