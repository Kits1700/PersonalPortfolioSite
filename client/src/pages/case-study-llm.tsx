import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb, Gamepad2, Zap, Eye, Shield } from "lucide-react";
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
      <section className="py-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              UX Human LLM Overreliance
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-6">
              Investigating User Overreliance on Large Language Models and Designing Interventions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                UX Research
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Human-AI Interaction
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Thesis Project
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-sm font-medium">
                Behavioral Research
              </span>
            </div>
            <div className="text-center mb-6">
              <p className="text-foreground font-medium">
                Master's Thesis Research | Human-Computer Interaction Studies
              </p>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="bg-card/30 rounded-2xl p-6 border border-border/50 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🧠</div>
                  <p className="text-foreground font-medium">Human-AI Interaction Research</p>
                  <p className="text-foreground/70 text-sm">Exploring overreliance patterns in LLM usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Project Overview</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    This master's thesis investigates the psychological mechanisms behind human overreliance on Large Language Models (LLMs) 
                    in decision-making contexts. Through comprehensive user research and behavioral analysis, the study explores how users 
                    interact with AI systems and identifies key factors that contribute to inappropriate trust and dependency patterns.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">Duration: 8 months research project</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">Team: Individual research</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">Role: Lead UX Researcher</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">The Problem</h3>
                  <p className="text-foreground mb-6 leading-relaxed">
                    As Large Language Models become increasingly sophisticated and accessible, users often develop inappropriate 
                    levels of trust and dependency. This overreliance can lead to poor decision-making, reduced critical thinking, 
                    and potential harm in high-stakes situations.
                  </p>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Users exhibit overconfidence in AI-generated responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lack of critical evaluation of AI outputs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Insufficient understanding of AI limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Need for evidence-based design interventions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">The Solution</h3>
                  <p className="text-foreground leading-relaxed">
                    Develop evidence-based design interventions and interface patterns that promote more balanced human-AI collaboration, 
                    helping users maintain appropriate levels of trust and critical thinking when interacting with LLMs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Research Methodology</h2>
            
            {/* Methodology Overview */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Mixed-Methods Research Design</h3>
              <p className="text-base text-foreground mb-6 leading-relaxed text-center max-w-4xl mx-auto">
                The study employed a comprehensive mixed-methods approach combining quantitative behavioral measurements 
                with qualitative user interviews to understand the nuanced patterns of human-AI interaction and overreliance behaviors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Literature Review</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Systematic analysis of 150+ research papers on human-AI interaction, trust calibration, 
                  and automation bias across multiple domains
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">User Studies</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Controlled experiments with 120 participants across different AI interaction scenarios, 
                  measuring trust, reliance, and decision-making patterns
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Statistical analysis using SPSS and qualitative coding with NVivo to identify 
                  overreliance patterns and behavioral triggers
                </p>
              </div>
            </div>
            
            {/* Detailed Methodology */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Experimental Design</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Phase 1: Baseline Assessment</h4>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Pre-study questionnaire on AI experience and attitudes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cognitive ability assessments and decision-making style evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Trust propensity and technology acceptance measurements</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Phase 2: Interaction Studies</h4>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Task-based interactions with various LLM interfaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Eye-tracking and behavioral observation during AI interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time trust and confidence ratings collection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Research Findings</h2>
            
            {/* Main Findings */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Critical Overreliance Patterns</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Time Pressure Effects</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Users showed 73% higher overreliance rates when making decisions under time constraints, 
                      with significantly reduced verification of AI outputs
                    </p>
                  </div>
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Confidence Bias</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      AI systems displaying confidence scores led to 45% increase in user trust, 
                      even when the confidence was artificially inflated
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Experience Paradox</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Novice users showed higher overreliance (68%) compared to experienced users (42%), 
                      but experts exhibited blind spots in familiar domains
                    </p>
                  </div>
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Interface Design Impact</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Transparency features and uncertainty indicators reduced overreliance by 35% 
                      without significantly impacting task completion rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistical Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-card/30 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">120</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Participants</div>
                <p className="text-foreground/80 leading-relaxed text-sm">Across diverse demographics and AI experience levels</p>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-2xl">
                <div className="text-3xl font-bold text-secondary mb-2">73%</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Overreliance Rate</div>
                <p className="text-foreground/80 leading-relaxed text-sm">Under time pressure conditions</p>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-2xl">
                <div className="text-3xl font-bold text-accent mb-2">35%</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Reduction</div>
                <p className="text-foreground/80 leading-relaxed text-sm">With transparency interventions</p>
              </div>
            </div>
            
            {/* Design Interventions */}
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Evidence-Based Design Interventions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-secondary text-lg">Transparency Features</h4>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Uncertainty indicators and confidence ranges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Source attribution and reasoning explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Limitations and potential bias warnings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-secondary text-lg">Interaction Patterns</h4>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mandatory verification steps for high-stakes decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Progressive disclosure of AI capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Friction mechanisms to encourage reflection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact & Contributions */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Impact & Contributions</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Theoretical Contributions</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Extended automation bias theory to LLM interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed Human-AI Trust Calibration Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Identified contextual factors affecting overreliance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Practical Applications</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Design guidelines for responsible AI interfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Intervention strategies for reducing overreliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Evaluation metrics for human-AI collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Future Research Directions</h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                This research establishes a foundation for understanding overreliance in human-AI interaction and provides 
                actionable insights for designing more balanced collaborative systems. Future work should explore 
                longitudinal effects of interventions and cross-cultural variations in trust patterns.
              </p>
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