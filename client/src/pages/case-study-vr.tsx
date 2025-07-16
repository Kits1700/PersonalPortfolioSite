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
          <h2 className="text-3xl font-bold mb-6">Overview & Project Goal</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              "Survival of the Fittest" is a mixed reality exergaming prototype designed to transform a common household space – specifically a narrow domestic hallway – into an immersive, fitness-driven survival experience. The primary goal was to demonstrate how the physical constraints of a limited indoor environment could be leveraged, rather than overcome, to create an engaging and physically demanding virtual reality workout.
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Elevator Pitch</h3>
              <p className="text-foreground italic text-lg">
                "Train Hard. Outlast the Apocalypse. Experience a high-intensity, narrative-driven workout where your real-world hallway becomes the last stand against a collapsing city, pushing you to move, punch, and squat your way to survival."
              </p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge: Transforming Constraint into Opportunity</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              Traditional VR experiences often require large, unobstructed play spaces, limiting accessibility for users in smaller homes. My initial research focused on a ubiquitous yet spatially limited environment: the narrow domestic passage.
            </p>
            

            
            {/* Hallway Analysis */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Spatial Analysis</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Physical Constraints</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• Width: 3.2 ft (1m)</li>
                    <li>• Length: 10 ft (3m)</li>
                    <li>• Height: 8 ft (2.4m)</li>
                    <li>• Heavily restricted movement</li>
                    <li>• No space for lateral movements</li>
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
                  <span className="text-foreground">Camera Viewpoint</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground">Role of Physicality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Player Actions */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Core Player Actions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M7 8C6.4 8 6 8.4 6 9C6 9.6 6.4 10 7 10H8V14H7C6.4 14 6 14.4 6 15C6 15.6 6.4 16 7 16H8V20C8 20.6 8.4 21 9 21C9.6 21 10 20.6 10 20V16H14V20C14 20.6 14.4 21 15 21C15.6 21 16 20.6 16 20V16H17C17.6 16 18 15.6 18 15C18 14.4 17.6 14 17 14H16V10H17C17.6 10 18 9.6 18 9C18 8.4 17.6 8 17 8H7M10 10H14V14H10V10Z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Bodyweight Squats</h4>
                <p className="text-sm text-foreground">Propel forward 1.5m in virtual world</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M4 7C2.9 7 2 7.9 2 9C2 10.1 2.9 11 4 11C5.1 11 6 10.1 6 9C6 7.9 5.1 7 4 7M20 7C18.9 7 18 7.9 18 9C18 10.1 18.9 11 20 11C21.1 11 22 10.1 22 9C22 7.9 21.1 7 20 7M10 8C9.4 8 9 8.4 9 9V11C9 11.6 9.4 12 10 12C10.6 12 11 11.6 11 11V9C11 8.4 10.6 8 10 8M14 8C13.4 8 13 8.4 13 9V11C13 11.6 13.4 12 14 12C14.6 12 15 11.6 15 11V9C15 8.4 14.6 8 14 8M6 12C5.4 12 5 12.4 5 13V19C5 19.6 5.4 20 6 20C6.6 20 7 19.6 7 19V13C7 12.4 6.6 12 6 12M18 12C17.4 12 17 12.4 17 13V19C17 19.6 17.4 20 18 20C18.6 20 19 19.6 19 19V13C19 12.4 18.6 12 18 12M10 13C9.4 13 9 13.4 9 14V20C9 20.6 9.4 21 10 21C10.6 21 11 20.6 11 20V14C11 13.4 10.6 13 10 13M14 13C13.4 13 13 13.4 13 14V20C13 20.6 13.4 21 14 21C14.6 21 15 20.6 15 20V14C15 13.4 14.6 13 14 13"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Shadow Boxing</h4>
                <p className="text-sm text-foreground">Break through collapsed walls</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M5 7C3.9 7 3 7.9 3 9C3 10.1 3.9 11 5 11C6.1 11 7 10.1 7 9C7 7.9 6.1 7 5 7M19 7C17.9 7 17 7.9 17 9C17 10.1 17.9 11 19 11C20.1 11 21 10.1 21 9C21 7.9 20.1 7 19 7M6 12C5.4 12 5 12.4 5 13V19C5 19.6 5.4 20 6 20C6.6 20 7 19.6 7 19V13C7 12.4 6.6 12 6 12M18 12C17.4 12 17 12.4 17 13V19C17 19.6 17.4 20 18 20C18.6 20 19 19.6 19 19V13C19 12.4 18.6 12 18 12M10 8C9.4 8 9 8.4 9 9V11C9 11.6 9.4 12 10 12C10.6 12 11 11.6 11 11V9C11 8.4 10.6 8 10 8M14 8C13.4 8 13 8.4 13 9V11C13 11.6 13.4 12 14 12C14.6 12 15 11.6 15 11V9C15 8.4 14.6 8 14 8M12 13C11.4 13 11 13.4 11 14V20C11 20.6 11.4 21 12 21C12.6 21 13 20.6 13 20V14C13 13.4 12.6 13 12 13"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Jumping Jacks</h4>
                <p className="text-sm text-foreground">Move forward 0.8m quickly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Solution: The Prototype</h2>
          
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
                  <svg className="w-12 h-12 text-primary mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-foreground font-medium">Scene 1 Video</p>
                  <p className="text-foreground text-sm mt-2">Warm-up sequence demonstration</p>
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
                  <svg className="w-12 h-12 text-secondary mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-foreground font-medium">Scene 2 Video</p>
                  <p className="text-foreground text-sm mt-2">Main mission gameplay footage</p>
                </div>
              </div>
              
              <p className="text-foreground mb-4">High-intensity survival sequence with wall-breaking mechanics</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-foreground">Shadow Boxing → Break walls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-foreground">Escalating intensity</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 rounded-lg p-8 border border-green-500/20 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-400/30 rounded-full animate-bounce delay-200"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-emerald-400/30 rounded-full animate-bounce delay-50"></div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Scene 3: Mission Accomplished</h4>
              
              {/* Video Placeholder */}
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 mb-6">
                <div className="text-center">
                  <svg className="w-12 h-12 text-primary mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-foreground/80 font-medium">Scene 3 Video</p>
                  <p className="text-foreground/60 text-sm mt-2">Mission completion sequence</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-4">Successful escape sequence with celebratory feedback</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-foreground/70">Achievement unlocked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-foreground/70">Performance summary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Implementation</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>• <strong>Engine:</strong> Unity 2021.3.45f1</li>
                <li>• <strong>VR Hardware:</strong> Meta Quest 2</li>
                <li>• <strong>Interaction:</strong> XR Interaction Toolkit</li>
                <li>• <strong>Animation:</strong> Mixamo character systems</li>
                <li>• <strong>Assets:</strong> Unity Asset Store environments</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Behind the Scenes</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>• Warm-up animator sequence programming</li>
                <li>• Post-apocalyptic environment design</li>
                <li>• XR Origin positioning for hallway mapping</li>
                <li>• Real-time movement interpretation systems</li>
                <li>• Linear progression with narrative flow</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Testing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">User Testing & Validation</h2>
          
          {/* SUS Score Highlight */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-8 mb-8 text-center">
            <div className="inline-flex items-center gap-4 mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <div>
                <div className="text-4xl font-bold text-green-600">87.5/100</div>
                <div className="text-sm text-foreground/70">System Usability Scale (SUS) Score</div>
              </div>
            </div>
            <p className="text-foreground/80">Exceptionally good usability and user satisfaction</p>
          </div>

          {/* User Feedback */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Physical Movements</h3>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                  "I felt exhausted — but in a good way. It actually motivated me to keep going, like a real workout."
                </blockquote>
                <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground/80">
                  "I didn't feel like exercise because I was so engrossed in the environment. I forgot I was moving that much."
                </blockquote>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Hallway Setting & Immersion</h3>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                  "It didn't feel limiting – it was designed to work with the space. It felt intentional, not restrictive."
                </blockquote>
                <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground/80">
                  "It added to the overall excitement. The confined space made it feel suspenseful, like I had to escape quickly."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Design Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Design Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Immediate Improvements</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Enhance visual and audio cues for actions</li>
                <li>• Add subtitle support for accessibility</li>
                <li>• Refine punch interaction haptic feedback</li>
                <li>• Implement more explicit voice prompts</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Future Enhancements</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Add leaderboard and progress tracking</li>
                <li>• Include competitive elements</li>
                <li>• Implement countdown timers</li>
                <li>• Expand exercise variety</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reflection & Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Reflection & Key Learnings</h2>
          
          {/* Core Insights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-center text-foreground">Embodiment & Presence</h3>
              <blockquote className="text-sm text-foreground/80 italic text-center border-l-4 border-primary pl-4">
                "I didn't feel like exercise because I was so engrossed in the environment. I forgot I was moving that much."
              </blockquote>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3 text-center text-foreground">Context-Aware Design</h3>
              <p className="text-sm text-foreground/80 text-center">
                Physical space inspired virtual constraints and expansions - the real environment becomes a stage for performance
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-center text-foreground">Mixed Reality Architecture</h3>
              <p className="text-sm text-foreground/80 text-center">
                Narrative flow integrated with spatial mapping creates seamless transitions between real and virtual worlds
              </p>
            </div>
          </div>

          {/* Project Learnings */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center text-foreground">What I Learned from the Project</h3>
            <div className="text-center">
              <p className="text-lg text-foreground/80 italic font-medium mb-4">
                "Design is often born out of limitations, not just possibilities."
              </p>
              <p className="text-foreground/80">
                This project demonstrated that constraints can become creative catalysts. The narrow hallway didn't limit the experience - it defined and enhanced it, creating a unique survival scenario that wouldn't have been possible in a larger space.
              </p>
            </div>
          </div>

          {/* User Testing Insights */}
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-center text-foreground">What I Learned from User Testing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-foreground">Key Feedback</h4>
                <div className="space-y-3">
                  <blockquote className="text-sm text-foreground/80 italic">
                    "Captions would help along with audio." – Participant 1
                  </blockquote>
                  <blockquote className="text-sm text-foreground/80 italic">
                    "Didn't feel like a boring gym workout" – Participant 2
                  </blockquote>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-foreground">Impact</h4>
                <p className="text-sm text-foreground/80">
                  Users validated that the hallway setting enhanced rather than limited immersion, proving that thoughtful constraint-based design can create more engaging experiences than unrestricted spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Tagline */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-card/60 via-card/40 to-background/60 rounded-2xl p-8 text-center border border-border/30 backdrop-blur-sm shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Built for a hallway. Designed for survival.</h2>
            <p className="text-lg text-foreground/80 italic">Coming to a cramped space near you.</p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link href="/case-study/iot">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              IoT Case Study
            </Button>
          </Link>
          <Link href="/case-study/llm">
            <Button variant="outline" className="flex items-center gap-2">
              LLM Case Study
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}