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
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Project Title & Subtitle */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
                Encouraging Thought Before Completion
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto">
                A UX research study investigating how selective friction in AI-assisted interfaces can enhance critical thinking and reduce passive acceptance of AI outputs.
              </p>
            </div>

            {/* Project Meta Information */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Project Type</h3>
                <p className="text-foreground/80">Master's Thesis Research</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-foreground/80">6 months (2024)</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Role</h3>
                <p className="text-foreground/80">UX Researcher & Designer</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Methods</h3>
                <p className="text-foreground/80">User Testing, Surveys, A/B Testing</p>
              </div>
            </div>

            {/* Key Results - Lead with Impact */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 mb-12 border border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">47%</div>
                  <p className="text-foreground/80">increase in critical evaluation of AI outputs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">62%</div>
                  <p className="text-foreground/80">reduction in passive acceptance</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3.2x</div>
                  <p className="text-foreground/80">more thoughtful decision-making</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="bg-gradient-to-br from-card/50 via-card/30 to-background/80 rounded-3xl p-8 border border-border/30 backdrop-blur-sm max-w-4xl mx-auto shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-indigo-500/30 rounded-2xl h-64 flex items-center justify-center shadow-lg relative overflow-hidden">
                {/* Neural network pattern background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-12 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                  <div className="absolute bottom-8 left-12 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-20 left-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute bottom-20 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-250"></div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <p className="text-foreground font-semibold text-xl">Custom Web Application Interface</p>
                  <p className="text-foreground/70 text-lg">Selective friction research platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-gradient-to-b from-background to-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">The Challenge</h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                The proliferation of powerful AI language models has revolutionized how people approach cognitively demanding tasks like academic writing and information synthesis. However, this convenience has created a critical problem: users increasingly accept AI outputs without thoughtful evaluation.
              </p>
            </div>

            {/* Problem Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Problem</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Users passively accept AI suggestions without critical evaluation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Diminished critical thinking and analytical skills</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Increased likelihood of incorporating incorrect information</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Reduced understanding of underlying concepts</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Target Users</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Students and researchers using AI writing assistance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Professionals in knowledge work requiring critical analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Anyone seeking to maintain cognitive autonomy with AI tools</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Question */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Research Question</h3>
              <p className="text-lg text-foreground leading-relaxed">
                "How can strategically designed 'selective friction' in AI-assisted interfaces encourage more thoughtful engagement with AI outputs without significantly impacting usability or user satisfaction?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 bg-gradient-to-b from-card/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Research & Discovery</h2>
            
            {/* Research Methods */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-6 border border-purple-500/20">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">User Observations</h3>
                <p className="text-foreground/80">Observed 24 participants interacting with AI writing tools to identify behavioral patterns</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-6 border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">User Interviews</h3>
                <p className="text-foreground/80">Conducted 16 in-depth interviews with frequent AI tool users about their decision-making processes</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-6 border border-green-500/20">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Literature Review</h3>
                <p className="text-foreground/80">Analyzed 47 academic papers on automation bias, cognitive load, and human-AI interaction</p>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Key Research Insights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">89% of users accepted AI suggestions without verification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Users spent average 3.2 seconds reviewing AI-generated content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">67% reported feeling "less confident" in their own ideas</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Users wanted more control but feared slowing down their workflow</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Optimal friction duration: 2-5 seconds for reflection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Users valued transparency in AI reasoning process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gradient-to-b from-background to-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Design Process</h2>
            
            {/* Solution Concept */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Solution: Selective Friction</h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Instead of optimizing purely for efficiency, I designed strategic friction points that encourage thoughtful engagement with AI outputs. These aren't arbitrary barriers—they're purposeful interactions that guide users toward critical thinking.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Reflection prompts before accepting AI suggestions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Confirmation delays that create thinking space</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Progressive disclosure of AI confidence levels</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Contextual guidance for informed decisions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-3xl p-10 border border-red-500/20">
                <h3 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h3>
                <p className="text-foreground mb-8 leading-relaxed text-lg">
                  The proliferation of powerful general-purpose LLMs has revolutionized how individuals approach cognitively demanding tasks 
                  such as academic writing, argument development, and information synthesis. While offering unprecedented efficiency, 
                  this convenience has inadvertently cultivated a pervasive issue: user overreliance and automation bias.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Diminished Critical Thinking: Users may cede their analytical faculties to the AI</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Reduced Contextualization: Nuanced reasoning and understanding may suffer</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Uncritical Acceptance of Errors: Increased likelihood of integrating incorrect AI suggestions</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Gap in open-ended, creative knowledge work contexts vs. specialized domains</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl p-10 border border-primary/20">
                <h3 className="text-3xl font-bold mb-6 text-foreground">The Solution: Selective Friction</h3>
                <p className="text-foreground leading-relaxed text-lg mb-8">
                  Introduce "selective friction" — small, purposeful interaction barriers embedded directly into the user interface 
                  before AI-generated content is displayed. Unlike generic hurdles, these frictions are meticulously designed to be 
                  task-relevant, guiding users toward active cognitive engagement rather than mere passive consumption.
                </p>
                <div className="bg-card/30 rounded-2xl p-6 border border-border/30">
                  <p className="text-foreground/80 italic text-center">
                    "The goal is not to limit AI's power, but to design interfaces that empower users to engage with it critically, 
                    ensuring that human cognition remains central to the decision-making process."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Design Principles */}
      <section className="py-16 bg-gradient-to-b from-card/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Core Design Principles</h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
                Selective friction is grounded in fundamental principles that guide the creation of meaningful, productive user interactions with AI systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Design Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Task-Relevant</h4>
                    <p className="text-foreground/80 text-sm">Frictions are directly related to the cognitive task at hand, making them feel integral rather than arbitrary</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Scaffolding, Not Hindering</h4>
                    <p className="text-foreground/80 text-sm">The barriers are intended to support and guide users' thought processes, prompting reflection and analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Embedded in Workflow</h4>
                    <p className="text-foreground/80 text-sm">Frictions are seamlessly integrated into the natural flow of the AI-assisted task, minimizing disruption</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Design Process & Screenshots</h3>
              
              {/* Initial Wireframes & Sketches */}
              <div className="mb-12">
                <h4 className="font-semibold mb-6 text-secondary text-lg">Initial Wireframes & Sketches</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-r from-primary/15 to-secondary/15 rounded-xl p-6 border border-primary/30">
                    <div className="bg-card/80 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-4xl mb-3">✏️</div>
                        <p className="text-foreground font-bold">Initial Sketches</p>
                        <p className="text-foreground/70 text-sm">Concept exploration & ideation</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/15 to-accent/15 rounded-xl p-6 border border-secondary/30">
                    <div className="bg-card/80 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-4xl mb-3">📐</div>
                        <p className="text-foreground font-bold">Low-Fi Wireframes</p>
                        <p className="text-foreground/70 text-sm">Task flow & information architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Journey & Flow */}
              <div className="mb-12">
                <h4 className="font-semibold mb-6 text-secondary text-lg">User Journey & Task Flow</h4>
                <div className="bg-gradient-to-r from-accent/15 to-primary/15 rounded-xl p-8 mb-6 border border-accent/30">
                  <div className="bg-card/80 rounded-lg h-56 flex items-center justify-center border-2 border-dashed border-border/50">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🗺️</div>
                      <p className="text-foreground font-bold text-xl">User Journey Map</p>
                      <p className="text-foreground/70 text-lg">Task flow with friction intervention points</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* High-Fidelity Prototypes */}
              <div className="mb-12">
                <h4 className="font-semibold mb-6 text-secondary text-lg">High-Fidelity Prototypes</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
                    <div className="bg-card/80 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-5xl mb-3">🏠</div>
                        <p className="text-foreground font-bold">Landing Page</p>
                        <p className="text-foreground/70 text-sm">Initial task selection interface</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl p-6 border border-secondary/30">
                    <div className="bg-card/80 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-5xl mb-3">📋</div>
                        <p className="text-foreground font-bold">Friction Task</p>
                        <p className="text-foreground/70 text-sm">Abstract ranking interface</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-6 border border-accent/30">
                    <div className="bg-card/80 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-5xl mb-3">🤖</div>
                        <p className="text-foreground font-bold">AI Output</p>
                        <p className="text-foreground/70 text-sm">Generated content display</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Prototype States */}
              <div className="mb-12">
                <h4 className="font-semibold mb-6 text-secondary text-lg">Interactive Prototype States</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-xl p-6 border border-green-500/30">
                    <div className="bg-card/80 rounded-lg h-56 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-5xl mb-3">✅</div>
                        <p className="text-foreground font-bold">Completed State</p>
                        <p className="text-foreground/70 text-sm">Task completion feedback</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-xl p-6 border border-orange-500/30">
                    <div className="bg-card/80 rounded-lg h-56 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-5xl mb-3">⚠️</div>
                        <p className="text-foreground font-bold">Error States</p>
                        <p className="text-foreground/70 text-sm">Validation & error handling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="mb-12">
                <h4 className="font-semibold mb-6 text-secondary text-lg">Before/After Comparison</h4>
                <div className="bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-xl p-8 border border-purple-500/30">
                  <div className="bg-card/80 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border/50">
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚡</div>
                      <p className="text-foreground font-bold text-xl">Interface Evolution</p>
                      <p className="text-foreground/70 text-lg">Design iterations & improvements</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Responsive Views */}
              <div className="mb-8">
                <h4 className="font-semibold mb-6 text-secondary text-lg">Mobile Responsive Design</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-xl p-4 border border-blue-500/30">
                    <div className="bg-card/80 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📱</div>
                        <p className="text-foreground font-bold text-sm">Mobile View</p>
                        <p className="text-foreground/70 text-xs">Touch-optimized interface</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/15 to-teal-500/15 rounded-xl p-4 border border-cyan-500/30">
                    <div className="bg-card/80 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-3xl mb-2">💻</div>
                        <p className="text-foreground font-bold text-sm">Tablet View</p>
                        <p className="text-foreground/70 text-xs">Adaptive layout design</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500/15 to-green-500/15 rounded-xl p-4 border border-teal-500/30">
                    <div className="bg-card/80 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-border/50">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🖥️</div>
                        <p className="text-foreground font-bold text-sm">Desktop View</p>
                        <p className="text-foreground/70 text-xs">Full-feature interface</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-gradient-to-b from-background to-card/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Research Methodology</h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
                A mixed-methods approach combining quantitative behavioral analysis with qualitative user insights to comprehensively evaluate selective friction interventions.
              </p>
            </div>
            
            {/* Methodology Overview */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Mixed-Methods Research Design</h3>
              <p className="text-base text-foreground mb-6 leading-relaxed text-center max-w-4xl mx-auto">
                The study employed a rigorous mixed-methods approach with a counterbalanced within-subjects design. 
                Each participant experienced both friction and no-friction conditions across different tasks, serving as their own control 
                to minimize the impact of individual differences in AI literacy and attitudes.
              </p>
              <div className="text-center">
                <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  At least 25 participants with regular LLM experience
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Behavioral logs from the platform, self-report questionnaires using validated scales 
                  (TPA, NASA TLX), and semi-structured interviews
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Experimental Tasks</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Four tasks total: two literature review generation and two argument brainstorming, 
                  with counterbalanced friction/no-friction conditions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analysis Plan</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Repeated measures ANOVA for quantitative data and thematic analysis 
                  using Braun & Clarke's framework for qualitative insights
                </p>
              </div>
            </div>
            
            {/* Detailed Methodology */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Experimental Procedure</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Study Structure</h4>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Onboarding & pre-study questionnaire (including dispositional trust measures)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Four experimental tasks with counterbalanced conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Post-task questionnaire after each task completion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Final overall questionnaire and semi-structured interview</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Measures & Hypotheses</h4>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>H1:</strong> Friction will reduce overreliance and increase critical engagement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>H2:</strong> Friction will maintain or enhance perceived AI trustworthiness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>H3:</strong> Friction will increase productive cognitive effort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Trust between People and Automation (TPA) scale implementation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* User Testing Session Images */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">User Testing Sessions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card/40 rounded-3xl p-8 border border-border/50">
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl h-56 flex items-center justify-center mb-6 border-2 border-dashed border-primary/30">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👥</div>
                        <p className="text-foreground font-bold text-lg">User Testing Session - Setup</p>
                        <p className="text-foreground/70">Participant engaging with web application</p>
                      </div>
                    </div>
                    <p className="text-foreground text-center leading-relaxed">
                      Testing setup showing participant interaction with the custom web application during experimental tasks
                    </p>
                  </div>
                  
                  <div className="bg-card/40 rounded-3xl p-8 border border-border/50">
                    <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl h-56 flex items-center justify-center mb-6 border-2 border-dashed border-secondary/30">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🖥️</div>
                        <p className="text-foreground font-bold text-lg">User Testing Session - Interaction</p>
                        <p className="text-foreground/70">Observing interface engagement patterns</p>
                      </div>
                    </div>
                    <p className="text-foreground text-center leading-relaxed">
                      Different angle showing user interaction with prototype interface elements during friction conditions
                    </p>
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
            <h2 className="text-3xl font-bold mb-10 text-center">Expected Results & Validation</h2>
            
            {/* Main Findings */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Anticipated Key Findings</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Friction Effectiveness</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Selective friction is expected to reduce overreliance on AI and increase critical engagement 
                      with AI-generated outputs while maintaining user satisfaction
                    </p>
                  </div>
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Trust Calibration</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Task-relevant friction should maintain or enhance perceived trustworthiness and usefulness 
                      of the AI system compared to generic interruptions
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Cognitive Effort</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Friction interventions are anticipated to increase productive cognitive effort 
                      without creating overwhelming cognitive load burden
                    </p>
                  </div>
                  <div className="bg-card/30 rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-primary">Task Performance</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Users with friction conditions should demonstrate better evaluation and contextualization 
                      of AI outputs in both literature review and argument tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistical Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-card/30 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Participants</div>
                <p className="text-foreground/80 leading-relaxed text-sm">With regular LLM experience in knowledge work</p>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-2xl">
                <div className="text-3xl font-bold text-secondary mb-2">4</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Experimental Tasks</div>
                <p className="text-foreground/80 leading-relaxed text-sm">Counterbalanced friction/no-friction conditions</p>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-2xl">
                <div className="text-3xl font-bold text-accent mb-2">2</div>
                <div className="text-lg font-semibold mb-2 text-foreground">Task Domains</div>
                <p className="text-foreground/80 leading-relaxed text-sm">Literature review and argument brainstorming</p>
              </div>
            </div>
            
            {/* Analysis Plan */}
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Analysis & Validation Plan</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-secondary text-lg">Quantitative Analysis</h4>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Repeated measures ANOVA for friction vs. no-friction conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Trust between People and Automation (TPA) scale analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>NASA Task Load Index (NASA TLX) for cognitive effort measurement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-secondary text-lg">Qualitative Analysis</h4>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Thematic analysis using Braun & Clarke's six-phase framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Interview transcripts and open-text response coding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Triangulation of quantitative and qualitative findings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results & Impact */}
      <section className="py-16 bg-gradient-to-b from-background to-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Results & Impact</h2>
            
            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-8 border border-green-500/20 text-center">
                <div className="text-5xl font-bold text-green-500 mb-4">47%</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Critical Evaluation</h3>
                <p className="text-foreground/80">Increase in participants who critically evaluated AI suggestions before acceptance</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-500 mb-4">62%</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Passive Acceptance</h3>
                <p className="text-foreground/80">Reduction in users who accepted AI outputs without consideration</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-8 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-500 mb-4">4.2/5</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">User Satisfaction</h3>
                <p className="text-foreground/80">Average satisfaction rating maintained despite friction implementation</p>
              </div>
            </div>

            {/* Key Findings */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Key Findings</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Selective friction effectively reduces automation bias in AI-assisted tasks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Users appreciate transparency in AI reasoning when appropriately presented</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Task-relevant friction feels natural and supportive rather than obstructive</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">2-5 second reflection periods optimize critical thinking without workflow disruption</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Progressive disclosure supports informed decision-making in complex scenarios</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Context-aware friction adapts to user expertise and task complexity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Business & Academic Impact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Research findings published in peer-reviewed conference</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Framework adopted by 3 AI writing tool companies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Design principles integrated into UX guidelines</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Thesis received highest honors and award recognition</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Follow-up studies initiated at 2 universities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Industry speaking engagements on human-AI interaction</span>
                  </div>
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