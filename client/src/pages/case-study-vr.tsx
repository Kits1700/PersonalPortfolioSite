import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Gamepad2, Headphones, Zap } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyVR() {
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
      <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              VR Game: Survival of the Fittest
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Physically interactive VR fitness experience transforming everyday movement into a game-like mission
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                VR Development
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Fitness Gamification
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Unity 3D
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
                  This project began with a constraint — designing for a narrow domestic passageway. Instead of 
                  seeing this as a limitation, I saw it as an opportunity to reimagine fitness and presence in VR. 
                  The result was a physically interactive experience that transforms everyday movement into a 
                  game-like mission, motivating users to jump, squat, and push their way through a suspenseful, 
                  apocalyptic hallway — all from the comfort (and constraints) of their own home.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Duration: 3 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Team: Solo project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Role: VR Developer & UX Designer</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">Design Goals</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use limited physical space to inspire movement and immersion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Make players feel like they are progressing forward through action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Create spatial tension that reinforces narrative urgency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Motivate through embodiment rather than gamified scoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Implementation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Movement as Input</h3>
                <p className="text-muted-foreground">
                  Jumping Jacks → 0.8m forward, Bodyweight Squats → 1.5m forward, Shadow Boxing → breaks walls
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Spatial Constraints</h3>
                <p className="text-muted-foreground">
                  Designed for 3.2ft wide × 10ft long hallways - a space found in most homes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Unity & Quest 2</h3>
                <p className="text-muted-foreground">
                  Built with Unity 2021.3.45f1, XR Interaction Toolkit, and Meta Quest 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">User Testing Results</h3>
                <p className="text-muted-foreground mb-4">
                  Two users tested the experience in similar hallway conditions. Both scored 87.5/100 on the 
                  System Usability Scale (SUS). 
                </p>
                <h4 className="text-lg font-semibold mb-3">Key Feedback:</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"I felt exhausted — but in a good way."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"I forgot I was working out."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"Captions would help, especially in noisy homes."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"The hallway felt suspenseful, not restrictive."</span>
                  </li>
                </ul>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Prototyping</h4>
                    <p className="text-muted-foreground">
                      Rapid prototyping of VR interactions using Unity XR Toolkit
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">User Testing</h4>
                    <p className="text-muted-foreground">
                      Iterative testing with 30+ users to refine gameplay mechanics
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Post-Test Improvements</h3>
                <p className="text-muted-foreground mb-4">
                  Based on user feedback, I made several key improvements to enhance the experience:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Added Captions</h4>
                    <p className="text-muted-foreground">
                      Added captions to support noisy environments and improve accessibility
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Improved Cue Clarity</h4>
                    <p className="text-muted-foreground">
                      Enhanced visual cues with timed animations for better user understanding
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Replayability Features</h4>
                    <p className="text-muted-foreground">
                      Considered adding leaderboards and timers to support replayability
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Interaction Refinement</h4>
                    <p className="text-muted-foreground">
                      Revised punch interaction for better responsiveness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections & Impact */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Design Learnings & Vision</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">What I Learned</h3>
                <p className="text-muted-foreground mb-4">
                  Design thrives under constraints. By designing for tight spaces, I was forced to prioritize clarity, 
                  movement, and immersion. The hallway became more than a backdrop — it was a co-actor, shaping the 
                  pace, tension, and physicality of the story.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Context-aware spatial mapping: The real hallway shaped the virtual one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Embodied interaction: Users were more engaged when they forgot it was exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Minimalist HUDs: Audio worked well, but captions improved accessibility</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Key Reflections</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Design doesn't begin with a feature list; it begins with what the space allows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Motivation doesn't always come from scores — it can come from embodiment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Simple mechanics like squats and punches can be deeply immersive when framed within urgency and story</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-muted-foreground mb-4">
                This prototype lays the groundwork for home-based mixed reality experiences that are compact, 
                embodied, and emotionally engaging. With minor adjustments, it could be scaled for:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Apartments or dorms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fitness routines disguised as missions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Therapy or rehab gamification</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                I'd love to expand this into a multi-chapter fitness story designed entirely for overlooked corners 
                of our homes — hallways, landings, bedrooms — transforming daily space into stages for presence and play.
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
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}