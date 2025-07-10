import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyLLM() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              UX Human LLM Overreliance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Exploring the psychological factors behind human overreliance on AI systems
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                UX Research
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Human-AI Interaction
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Thesis Project
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This master's thesis investigates the psychological mechanisms that lead to human overreliance on Large Language Models (LLMs) in decision-making contexts. Through mixed-methods research, we explored how users interact with AI systems and identified key factors contributing to inappropriate trust and dependency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Duration: 8 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Team: Individual Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Role: Lead Researcher</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Users overrely on AI when facing time pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Confidence indicators significantly impact trust levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Prior AI experience reduces overreliance behaviors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transparency features improve calibrated trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Research Methodology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Literature Review</h3>
                <p className="text-muted-foreground">
                  Comprehensive analysis of existing research on human-AI interaction and trust calibration
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">User Studies</h3>
                <p className="text-muted-foreground">
                  Controlled experiments with 120 participants across different AI interaction scenarios
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                <p className="text-muted-foreground">
                  Statistical analysis and qualitative coding to identify overreliance patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Insights */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Impact & Insights</h2>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-4">Key Contributions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Design Guidelines</h4>
                  <p className="text-muted-foreground">
                    Developed evidence-based guidelines for designing AI interfaces that promote appropriate trust
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Theoretical Framework</h4>
                  <p className="text-muted-foreground">
                    Proposed new model for understanding human-AI trust dynamics in decision-making contexts
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Empirical Evidence</h4>
                  <p className="text-muted-foreground">
                    Provided quantitative data on factors that influence overreliance in AI systems
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Practical Applications</h4>
                  <p className="text-muted-foreground">
                    Identified specific interventions that can reduce inappropriate AI overreliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-card/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Thesis
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}