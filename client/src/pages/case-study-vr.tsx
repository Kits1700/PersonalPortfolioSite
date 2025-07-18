import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Wrench, Target, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import gamePosterImage from "@assets/Group 12_1752654046089.png";
import hallwayImage from "@assets/Group 9_1752654264666.png";

export default function CaseStudyVR() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Portfolio
              </button>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg hover:bg-card transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Survival of the Fittest
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Mixed Reality Exergame - Transforming Constraint into Opportunity
            </p>
            
            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Calendar className="w-4 h-4" />
                <span>8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Users className="w-4 h-4" />
                <span>UX Designer, XR Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Wrench className="w-4 h-4" />
                <span>Unity 2021.3.45f1, Meta Quest 2</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="bg-gradient-to-br from-orange-500/40 via-red-500/30 to-amber-500/40 rounded-2xl p-8 border border-orange-500/20 relative overflow-hidden">
              <img 
                src={gamePosterImage} 
                alt="Survival of the Fittest - Mixed Reality Exergame showing a silhouette of a person in action pose against an apocalyptic cityscape"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              {/* VR/Gaming particles */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute top-16 right-12 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-12 left-16 w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-lg font-medium">"Survival of the Fittest" - Core Concept Poster</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview & Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 mb-8 border border-orange-500/20">
              <p className="text-foreground leading-relaxed text-lg mb-6">
                <strong>In a world confined by limited spaces, how can we unlock exhilarating, full-body VR fitness?</strong>
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                "Survival of the Fittest" transforms mundane hallways into menacing apocalyptic worlds. Players perform real-world exercises — squats, jumping jacks, shadow boxing — that translate into progress through a collapsing, post-apocalyptic virtual world, overlaid onto their physical environment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card/50 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">My Role</h3>
                <p className="text-foreground/80">Sole UX Designer, Interaction Designer, and Developer. Led concept development, spatial mapping, interaction design, prototyping, and user testing.</p>
              </div>
              <div className="bg-card/50 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Core Technologies</h3>
                <p className="text-foreground/80">Unity 2021.3.45f1, Meta Quest 2, XR Interaction Toolkit, Mixamo, Unity Asset Store</p>
              </div>
            </div>
            
            <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Problem Statement</h3>
              <p className="text-foreground text-lg">
                How can we create an engaging, active virtual reality experience that is accessible to users with limited physical space at home, transforming common indoor environments (like hallways) into dynamic play areas?
              </p>
            </div>
          </div>
        </section>

        {/* Research & Ideation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Research & Ideation: Forging the Apocalypse</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              The project embraced spatial constraints as a design opportunity. Rather than viewing the narrow domestic hallway as a limitation, I recognized it as a ubiquitous, accessible space that could be transformed into an immersive gaming environment.
            </p>
            
            {/* Hallway Analysis */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Spatial Analysis: The Narrow Domestic Passage</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Physical Constraints</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• Movement heavily restricted</li>
                    <li>• No room to turn or sidestep safely</li>
                    <li>• Real-world objects limit mobility</li>
                    <li>• Forward-facing progression only</li>
                    <li>• Ubiquitous but spatially limited</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Target Environment</h4>
                  <div className="relative rounded-lg overflow-hidden max-w-xs mx-auto">
                    <img 
                      src={hallwayImage} 
                      alt="Narrow domestic hallway showing spatial constraints and real-world objects"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm">
                      <p className="font-medium">3.2ft × 10ft × 8ft hallway</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">The Opportunity</h3>
              <p className="text-foreground">
                Instead of seeing these as barriers, I aimed to design for these limitations. Could a constrained space enhance immersion and encourage specific, impactful physical interactions? This led to the core concept: a mixed reality experience that uses the hallway as a stage for a high-intensity, forward-only progression game.
              </p>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Design Process & Ideation</h2>
          
          {/* Ideation Cards Placeholder */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Ideation Process</h3>
            <div className="aspect-[4/3] bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-foreground font-medium">Ideation Cards</p>
                <p className="text-foreground text-sm mt-2">Design process visualization will be added here</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-foreground italic">Opportunities, Questions, Challenges, and Player Actions mapping</p>
            </div>
          </div>
          
          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Core Opportunities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Virtual Reality (VR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Strong Narrative</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Compelling Audio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Standing / Exergaming</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Questions</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground">Theme & Story</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground">Experience Flow</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground">Player Actions</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground">Accessibility</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Concept Development */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 mb-8 border border-orange-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Concept Development: Mixed Reality Vision</h3>
            <p className="text-foreground leading-relaxed mb-6">
              The core mixed reality concept transforms the physical hallway into a collapsing city environment. As players perform exercises, they progress through an apocalyptic narrative where their real-world actions directly impact virtual survival. The sense of urgency conveyed by the collapsing environment motivates continued physical exertion.
            </p>
            
            <div className="bg-background/50 rounded-xl p-6 border border-border/30">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Core Mechanics & Interaction Design</h4>
              <p className="text-foreground/80 mb-4">
                To overcome the fixed forward progression limitation, I designed physically demanding actions that directly translate into virtual movement and obstacle interaction:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-4xl mb-3">🦵</div>
                  <h5 className="font-semibold text-foreground mb-2">Jumping Jacks</h5>
                  <p className="text-sm text-foreground/80">Activates forward movement through the collapsing environment</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-4xl mb-3">🏋️</div>
                  <h5 className="font-semibold text-foreground mb-2">Bodyweight Squats</h5>
                  <p className="text-sm text-foreground/80">Navigates under obstacles and debris in the virtual world</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-4xl mb-3">👊</div>
                  <h5 className="font-semibold text-foreground mb-2">Shadow Boxing</h5>
                  <p className="text-sm text-foreground/80">Destroys virtual barriers and clears path forward</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Addressing Challenges */}
          <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Addressing Key Challenges</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground font-medium">Cybersickness Prevention:</span>
                  <span className="text-foreground/80"> Consciously avoided 'roaming VR' to focus on stationary, deliberate actions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground font-medium">Clear Instructions:</span>
                  <span className="text-foreground/80"> Implemented real-time coaching cues and visual indicators</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground font-medium">Engagement:</span>
                  <span className="text-foreground/80"> Integrated gamification elements and post-workout stats</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototyping & Development Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Prototyping & Development: Building the Desolate Path</h2>
          
          {/* Technical Implementation */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Technical Implementation</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Unity Development Environment</h4>
                <p className="text-foreground/80 mb-4">
                  Built the post-apocalyptic world using Unity 2021.3.45f1 with optimized assets for Meta Quest 2 performance.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground text-sm">XR Interaction Toolkit integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground text-sm">Mixamo character animations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground text-sm">Unity Asset Store optimizations</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Spatial Mapping & Context-Aware Design</h4>
                <p className="text-foreground/80 mb-4">
                  The physical hallway was mapped to the virtual environment, allowing for context-aware interactions where the real space directly informed virtual constraints and expansions.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-foreground text-sm">XR Origin positioning calibration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-foreground text-sm">Real-to-virtual space mapping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-foreground text-sm">Animator sequence movement feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Unity Editor Screenshot Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">Unity Editor Development Environment</p>
              <p className="text-foreground/70 text-sm">Screenshot showing post-apocalyptic passage layout and development interface</p>
            </div>
          </div>
          
          {/* Mixed Reality Integration */}
          <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Mixed Reality Integration</h3>
            <p className="text-foreground leading-relaxed">
              The real environment became the stage for performance, enhancing immersion and blending realities. The hallway's physical constraints actually strengthened the narrative tension — players truly feel trapped in a collapsing world, making their escape more emotionally engaging.
            </p>
          </div>
        </section>

        {/* Prototype Walkthrough Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Prototype Walkthrough</h2>
          
          {/* Transformation Visual */}
          <div className="bg-gradient-to-r from-muted/20 to-primary/10 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-full h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-foreground/70">Real Hallway</span>
                </div>
                <h4 className="font-semibold text-foreground">Physical Space</h4>
                <p className="text-sm text-foreground/70">Narrow domestic hallway</p>
              </div>
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-foreground/70">Apocalyptic Scene</span>
                </div>
                <h4 className="font-semibold text-foreground">Virtual Environment</h4>
                <p className="text-sm text-foreground/70">Collapsing city survival scenario</p>
              </div>
            </div>
          </div>

          {/* Scene Breakdown */}
          <div className="space-y-8 mb-8">
            <div className="bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-amber-500/10 rounded-lg p-8 border border-orange-500/20 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute top-3 right-3 w-2 h-2 bg-orange-400/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-yellow-400/30 rounded-full animate-bounce delay-100"></div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Scene 1: Warm-up Sequence</h4>
              
              {/* Video Placeholder */}
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 mb-6">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">VIDEO PLACEHOLDER</div>
                  <p className="text-foreground font-medium">Scene 1: Warm-up Sequence</p>
                  <p className="text-foreground text-sm mt-2">Gameplay footage showing initial environment and gentle movement prompts</p>
                </div>
              </div>
              
              <p className="text-foreground mb-4">Introduction to the apocalyptic scenario with gentle movement prompts</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Jumping Jacks → 0.8m forward</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Squats → 1.5m forward</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/10 via-orange-500/5 to-yellow-500/10 rounded-lg p-8 border border-red-500/20 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute top-4 left-4 w-1 h-1 bg-red-400/30 rounded-full animate-bounce delay-150"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400/30 rounded-full animate-bounce delay-75"></div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Scene 2: Main Mission</h4>
              
              {/* Video Placeholder */}
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-secondary/30 mb-6">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">VIDEO PLACEHOLDER</div>
                  <p className="text-foreground font-medium">Scene 2: Main Mission</p>
                  <p className="text-foreground text-sm mt-2">Intense gameplay showing movement initiation and obstacle navigation</p>
                </div>
              </div>
              
              <p className="text-foreground mb-4">Intense survival scenario with increased difficulty and obstacle navigation</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-foreground">Shadow Boxing → Break barriers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-foreground">Combined movements → Survival</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 via-teal-500/5 to-blue-500/10 rounded-lg p-8 border border-green-500/20 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400/30 rounded-full animate-bounce delay-200"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-400/30 rounded-full animate-bounce delay-300"></div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Scene 3: Mission Accomplished</h4>
              
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-green-500/30 mb-6">
                <div className="text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-foreground font-medium">Scene 3 Video</p>
                  <p className="text-foreground text-sm mt-2">Mission completion and workout summary</p>
                </div>
              </div>
              
              <p className="text-foreground mb-4">Successful escape with workout statistics and achievement celebration</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-foreground">Workout stats display</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-foreground">Achievement unlocked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Testing & Validation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">User Testing & Validation: Surviving the Feedback</h2>
          
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Testing Methodology</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Participants</h4>
                <p className="text-foreground/80">Two individuals, representative of casual VR users interested in fitness</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Environment</h4>
                <p className="text-foreground/80">Conducted in a typical domestic hallway matching target constraints</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Evaluation Tools</h4>
                <p className="text-foreground/80">System Usability Scale (SUS) questionnaire + qualitative interviews</p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-8 mb-8 border border-green-500/20">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Key Findings</h3>
            
            {/* SUS Score */}
            <div className="bg-background/50 rounded-xl p-8 mb-8 border border-border/30 text-center">
              <div className="text-6xl font-bold text-green-500 mb-4">87.5</div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">System Usability Scale (SUS)</h4>
              <p className="text-foreground/80">Consistent high usability rating from both testers indicating excellent user satisfaction</p>
            </div>
            
            {/* Qualitative Insights */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Embodiment & Presence</h4>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-foreground italic">
                      "I didn't feel like exercise because I was so engrossed in the environment. I forgot I was moving that much."
                    </p>
                  </div>
                  <p className="text-foreground/80 text-sm">Users reported strong immersion and successful exergaming integration</p>
                </div>
              </div>
              
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Hallway as an Asset</h4>
                <div className="space-y-4">
                  <div className="bg-secondary/10 rounded-lg p-4">
                    <p className="text-foreground italic">
                      "It didn't feel limiting – it was designed to work with the space. It felt intentional, not restrictive."
                    </p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-foreground italic">
                      "The confined space made it feel suspenseful, like I had to escape quickly."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Testing Images Placeholder */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
              <div className="text-center">
                <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                <p className="text-foreground font-semibold text-lg mb-2">User Testing Footage</p>
                <p className="text-foreground/70 text-sm">Side-by-side videos of testers in VR headsets and real-world movement</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
              <div className="text-center">
                <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                <p className="text-foreground font-semibold text-lg mb-2">SUS Questionnaire Results</p>
                <p className="text-foreground/70 text-sm">Screenshots of completed System Usability Scale forms from both testers</p>
              </div>
            </div>
          </div>

          {/* Design Recommendations */}
          <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Design Recommendations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Improve Cue Clarity:</span>
                    <span className="text-foreground/80"> Add more voice prompts and visual indicators</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Subtitle Support:</span>
                    <span className="text-foreground/80"> Include text-based instructions for accessibility</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Leaderboard/Progress:</span>
                    <span className="text-foreground/80"> Add competitive and tracking elements</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Finalize Punch Interaction:</span>
                    <span className="text-foreground/80"> Refine shadow boxing mechanics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections & Future Directions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Reflections & Future Directions</h2>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Core Learning</h3>
            <div className="bg-background/50 rounded-xl p-6 border border-border/30">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Design from Limitations</h4>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>"Design is often born out of limitations, not just possibilities."</strong> This project exemplified that principle by turning a spatial constraint into a core design strength. The narrow hallway didn't limit the experience — it enhanced it.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Constraints spark creativity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Accessibility through limitation</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Intentional design decisions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Enhanced narrative tension</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Impact of Mixed Reality</h4>
              <p className="text-foreground/80 leading-relaxed">
                MR's power to blend physical and virtual realities makes experiences more accessible and immersive without requiring dedicated VR spaces. The real environment becomes part of the experience.
              </p>
            </div>
            
            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Embodiment in Exergaming</h4>
              <p className="text-foreground/80 leading-relaxed">
                Successfully integrated physical activity in a way that felt like engaging gameplay, not exercise. The apocalyptic narrative transformed workouts into survival scenarios.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Future Scope</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">More exercise types and interactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Different apocalyptic themes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Multiplayer survival scenarios</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Adaptive difficulty based on performance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Built for a Hallway. Designed for Survival.</h2>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              "Survival of the Fittest" demonstrates that immersive VR experiences don't require expansive spaces — they require creative vision, thoughtful design, and the courage to embrace constraints as opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">87.5</div>
                <p className="text-foreground font-medium">SUS Score</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <p className="text-foreground font-medium">Spatial Efficiency</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">∞</div>
                <p className="text-foreground font-medium">Creative Potential</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center py-8 border-t border-border/30">
          <Link href="/case-study-iot">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous: IoT Case Study
            </Button>
          </Link>
          <Link href="/case-study-llm">
            <Button variant="outline" className="flex items-center gap-2">
              Next: LLM Case Study
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
