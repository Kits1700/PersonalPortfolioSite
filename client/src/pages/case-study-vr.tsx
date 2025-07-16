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
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Calendar className="w-4 h-4" />
                <span>8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Users className="w-4 h-4" />
                <span>UX Designer, XR Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Wrench className="w-4 h-4" />
                <span>Unity 2021.3.45f1, Meta Quest 2</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img 
              src={gamePosterImage} 
              alt="Survival of the Fittest - Mixed Reality Exergame showing a silhouette of a person in action pose against an apocalyptic cityscape"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-lg font-medium">"Survival of the Fittest" - Core Concept Poster</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview & Project Goal</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              "Survival of the Fittest" is a mixed reality exergaming prototype designed to transform a common household space – specifically a narrow domestic hallway – into an immersive, fitness-driven survival experience. The primary goal was to demonstrate how the physical constraints of a limited indoor environment could be leveraged, rather than overcome, to create an engaging and physically demanding virtual reality workout.
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Elevator Pitch</h3>
              <p className="text-foreground/80 italic text-lg">
                "Train Hard. Outlast the Apocalypse. Experience a high-intensity, narrative-driven workout where your real-world hallway becomes the last stand against a collapsing city, pushing you to move, punch, and squat your way to survival."
              </p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge: Transforming Constraint into Opportunity</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              Traditional VR experiences often require large, unobstructed play spaces, limiting accessibility for users in smaller homes. My initial research focused on a ubiquitous yet spatially limited environment: the narrow domestic passage.
            </p>
            

            
            {/* Hallway Analysis */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Spatial Analysis</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Physical Constraints</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Width: 3.2 ft (1m)</li>
                    <li>• Length: 10 ft (3m)</li>
                    <li>• Height: 8 ft (2.4m)</li>
                    <li>• Heavily restricted movement</li>
                    <li>• No space for lateral movements</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Target Environment</h4>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={hallwayImage} 
                      alt="Narrow domestic hallway showing spatial constraints and real-world objects"
                      className="w-full h-48 object-cover rounded-lg"
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
              <p className="text-foreground/80">
                Instead of seeing these as barriers, I aimed to design for these limitations. Could a constrained space enhance immersion and encourage specific, impactful physical interactions? This led to the core concept: a mixed reality experience that uses the hallway as a stage for a high-intensity, forward-only progression game.
              </p>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Design Process & Ideation</h2>
          
          {/* Ideation Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Core Opportunities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Virtual Reality (VR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground/80">Strong Narrative</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Compelling Audio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground/80">Standing / Exergaming</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Questions</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground/80">Theme & Story</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground/80">Experience Flow</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground/80">Camera Viewpoint</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-foreground/80">Role of Physicality</span>
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Bodyweight Squats</h4>
                <p className="text-sm text-foreground/70">Propel forward 1.5m in virtual world</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Shadow Boxing</h4>
                <p className="text-sm text-foreground/70">Break through collapsed walls</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Jumping Jacks</h4>
                <p className="text-sm text-foreground/70">Move forward 0.8m quickly</p>
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

          {/* Demo Video Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">Prototype Demo</h3>
            <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-foreground/80 font-medium">Demo Video Placeholder</p>
                <p className="text-foreground/60 text-sm mt-2">Video will be added here showing the prototype in action</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-foreground/80 italic">Experience the hallway transformation from mundane passage to survival arena</p>
            </div>
          </div>

          {/* Scene Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="font-semibold mb-3 text-foreground">Scene 1: Warm-up Sequence</h4>
              <p className="text-foreground/80 text-sm mb-3">Introduction to the apocalyptic scenario with gentle movement prompts</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/70 text-sm">Jumping Jacks → 0.8m forward</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground/70 text-sm">Squats → 1.5m forward</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="font-semibold mb-3 text-foreground">Scene 2: Main Mission</h4>
              <p className="text-foreground/80 text-sm mb-3">High-intensity survival sequence with wall-breaking mechanics</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-foreground/70 text-sm">Shadow Boxing → Break walls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-foreground/70 text-sm">Escalating intensity</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="font-semibold mb-3 text-foreground">Scene 3: Mission Accomplished</h4>
              <p className="text-foreground/80 text-sm mb-3">Successful escape sequence with celebratory feedback</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground/70 text-sm">Achievement unlocked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-foreground/70 text-sm">Performance summary</span>
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
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
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