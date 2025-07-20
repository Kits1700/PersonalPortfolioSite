import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Wrench, Target, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import gamePosterImage from "@assets/Group 12_1752654046089.png";
import hallwayImage from "@assets/Group 9_1752654264666.png";
import hallwayGif from "@assets/ezgif-4a330d431ea5db_1752844784535.gif";
import virtualEnvironmentImage from "@assets/virtual-env.png";
import unityEditorImage from "@assets/unity-editor.png";
import conceptArtImage from "@assets/concept-art.jpg";

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
              A Mixed Reality Game Redefining Fitness
            </p>
            
            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Calendar className="w-4 h-4" />
                <span>8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Users className="w-4 h-4" />
                <span>Lead Designer & Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Wrench className="w-4 h-4" />
                <span>Unity 2021.3.45f1, Meta Quest 2</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-orange-500/40 via-red-500/30 to-amber-500/40 rounded-2xl p-4 border border-orange-500/20 relative overflow-hidden">
              <img 
                src={hallwayGif} 
                alt="Hallway dimensions showing the 3.2 feet width and 5 feet length constraints used for the VR game design"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              {/* VR/Gaming particles */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-6 left-6 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-12 right-12 w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>



          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">87.5</div>
              <div className="text-sm text-foreground">SUS Score</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-secondary mb-2">3</div>
              <div className="text-sm text-foreground">Game Scenes</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">4.61ft</div>
              <div className="text-sm text-foreground">Hallway Width</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground leading-relaxed">
              Imagine turning a cramped hallway into a post-apocalyptic battleground where every squat and jump propels you through a collapsing city. This Virtual Reality survival game for Meta Quest 2 blends intense physical activity with immersive storytelling, demonstrating that limitations can fuel the most innovative solutions.
            </p>
          </div>
        </div>

        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">My Role</h2>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-foreground leading-relaxed mb-6">
              As a <strong>lead designer and developer</strong>, I drove ideation, prototyped gameplay mechanics, and conducted user testing. I crafted physical-to-virtual interactions (e.g., squats advancing 1.5m in-game), integrated narrative elements, and refined the experience based on tester insights.
            </p>
            <p className="text-foreground leading-relaxed">
              Collaborating with the team, I ensured the game's mechanics and story thrived within the hallway's spatial constraints, transforming limitations into core design strengths.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 mb-8 border border-orange-500/20">
            <p className="text-foreground leading-relaxed mb-6">
              Fitness routines often feel like a chore, and VR games can falter due to cybersickness, unclear mechanics, or lackluster engagement. Our goal was to create an MR game that:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Makes exercise feel effortless through immersive gameplay</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Fits seamlessly in a confined space, such as a hallway</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Avoids VR pitfalls such as cybersickness or feature creep</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Delivers a gripping narrative to keep players hooked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Design Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Design Process</h2>
          
          {/* Research & Discovery */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Research & Discovery</h3>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                We analyzed VR trends and exergaming principles to inform our design:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Spatial Constraints</h4>
                  <p className="text-foreground/80">Precise measurements (11 ft, 4.25 ft, 3.2 ft) shaped a virtual environment tailored to a hallway</p>
                </div>
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Risk Assessment</h4>
                  <p className="text-foreground/80">Identified challenges like cybersickness, navigation confusion, and audio clarity in noisy settings</p>
                </div>
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Core Mechanics</h4>
                  <p className="text-foreground/80">Focused on VR, strong narrative, compelling audio, exergaming, and time pressure to drive engagement</p>
                </div>
              </div>
            </div>
            
            {/* Spatial Design Mapping */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-6 border border-border/30">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Virtual Environment</h4>
                  <p className="text-foreground/70 text-sm">Post-apocalyptic cityscape mapped to hallway constraints</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-2 overflow-hidden">
                  <img 
                    src={virtualEnvironmentImage} 
                    alt="Post-apocalyptic virtual environment showing desert landscape with buildings and structures"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-6 border border-border/30">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Unity Editor Setup</h4>
                  <p className="text-foreground/70 text-sm">XR Origin positioning and spatial tracking configuration</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-2 overflow-hidden">
                  <img 
                    src={unityEditorImage} 
                    alt="Unity Editor interface showing hierarchy with XR Origin configuration, camera setup, and spatial tracking components"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Ideation</h3>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-secondary/20">
              <p className="text-foreground leading-relaxed mb-6">
                We brainstormed mechanics to merge physicality and storytelling:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-4xl mb-3">🏃</div>
                  <h4 className="font-semibold text-foreground mb-2">Player Actions</h4>
                  <p className="text-sm text-foreground/80">Jumping jacks (0.8m forward), squats (1.5m forward), shadow boxing (punching through walls)</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-4xl mb-3">🏙️</div>
                  <h4 className="font-semibold text-foreground mb-2">Narrative Hook</h4>
                  <p className="text-sm text-foreground/80">Collapsing city scenario urged players to "move fast to survive," creating urgency</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <div className="text-4xl mb-3">🎵</div>
                  <h4 className="font-semibold text-foreground mb-2">Immersion</h4>
                  <p className="text-sm text-foreground/80">Mobile soundtracks, NPC avatars, and standing gameplay enhanced the experience</p>
                </div>
              </div>
            </div>
            
            {/* Concept Art */}
            <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-6 mb-8 border border-border/30">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Concept Art</h4>
                <p className="text-foreground/70 text-sm">Post-apocalyptic city with NPC avatars and dynamic audio cues</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-2 overflow-hidden">
                <img 
                  src={conceptArtImage} 
                  alt="Post-apocalyptic cityscape with dramatic orange sky, damaged buildings, and an NPC character standing in the desert environment"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Prototyping */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Prototyping</h3>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
              <p className="text-foreground leading-relaxed mb-6">
                Using Unity 2021.3.45f1, Meta Quest 2, XR Interaction Toolkit, Mixamo animations, and Unity Asset Store assets, we built a three-scene prototype:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Warm-Up</h4>
                  <p className="text-foreground/80">Introduced mechanics like jumping jacks and squats</p>
                </div>
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Primary Mission</h4>
                  <p className="text-foreground/80">Players navigated a collapsing city through physical actions</p>
                </div>
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Mission Accomplished</h4>
                  <p className="text-foreground/80">Rewarded success with narrative closure</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <p className="text-foreground/80 text-sm">
                  <strong>XR Origin Positioning</strong> ensured fluid movement in the hallway, with a post-apocalyptic setting that set the stage for survival gameplay.
                </p>
              </div>
            </div>
            
            {/* Prototype Videos */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">VIDEO PLACEHOLDER</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Scene 1: Warm-Up</p>
                  <p className="text-foreground/70 text-sm">Introduction to jumping jacks and squats mechanics</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">VIDEO PLACEHOLDER</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Scene 2: Primary Mission</p>
                  <p className="text-foreground/70 text-sm">Player navigating collapsing city through physical actions</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">VIDEO PLACEHOLDER</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Scene 3: Mission Accomplished</p>
                  <p className="text-foreground/70 text-sm">Success state with narrative closure and rewards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Testing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">User Testing</h2>
          
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-8 mb-8 border border-green-500/20">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-green-500 mb-4">87.5/100</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Average SUS Score</h3>
              <p className="text-foreground/80">Two testers evaluated usability and immersion</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Immersion</h4>
                <blockquote className="text-foreground/80 italic">
                  "I didn't feel like I was working out—I was so engrossed in the environment"
                </blockquote>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Usability</h4>
                <blockquote className="text-foreground/80 italic">
                  "It was intuitive overall," though captions were suggested for noisy settings
                </blockquote>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Engagement</h4>
                <blockquote className="text-foreground/80 italic">
                  Physical movements felt motivating, like a "real workout" that didn't feel tedious
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* User Testing Image Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">User Testing Photo</p>
              <p className="text-foreground/70 text-sm">Tester wearing Meta Quest 2, performing a squat in the hallway, with feedback quote: "I forgot I was moving that much."</p>
            </div>
          </div>
        </section>

        {/* Iterations & Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Iterations & Recommendations</h2>
          
          <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Based on testing, we proposed:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Enhanced Cues:</span>
                    <span className="text-foreground/80"> Add captions for audio instructions to improve clarity in noisy environments</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Motivational Features:</span>
                    <span className="text-foreground/80"> Introduce a leaderboard or countdown clock to amplify time pressure</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Refined Mechanics:</span>
                    <span className="text-foreground/80"> Finalize punch interactions for smoother gameplay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Impact</h2>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 border border-primary/20">
            <p className="text-foreground leading-relaxed mb-6">
              "Survival of the Fittest" redefines fitness gaming by turning a hallway into a stage for survival. With an <strong>87.5/100 tester rating</strong>, the game proved that physical constraints can fuel creativity, delivering an immersive experience where players forget they're exercising.
            </p>
            <p className="text-foreground leading-relaxed">
              The project showcases how MR can merge fitness and fun, with potential for multiplayer roles or expanded environments in future iterations.
            </p>
          </div>
          
          {/* Impact Image Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">Success Metrics</p>
              <p className="text-foreground/70 text-sm">Bar chart showing tester scores (87.5/100) for immersion, usability, and engagement, highlighting the game's success</p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Key Learnings</h2>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Design from Limitations</h3>
            <p className="text-foreground leading-relaxed mb-4">
              This project taught me that <strong>design excels when embracing limitations</strong>. The hallway's 4.61-foot constraint inspired innovative mechanics, proving <em>"design is often born out of limitations, not just possibilities."</em>
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              User testing revealed the power of embodiment, with one tester noting, <em>"It didn't feel like a boring gym workout."</em> Balancing narrative, mechanics, and VR technology is crucial to creating seamless and engaging experiences.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Constraints Drive Innovation</h4>
                <p className="text-foreground/80 leading-relaxed">
                  The 4.61-foot hallway limitation became our greatest asset, forcing creative solutions that enhanced rather than restricted the experience.
                </p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Embodiment Power</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Players completely forgot they were exercising, proving that narrative and gameplay can transform mundane activities into engaging experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Built for a Hallway. Designed for Survival.</h2>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              "Survival of the Fittest" transforms cramped spaces into thrilling survival arenas, blending fitness and gaming in a way that feels effortless. This MR game is poised to inspire players in any constrained space, proving that innovation thrives within limitations.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              I'm excited to explore how this concept can evolve, bringing immersive exergaming to new audiences and redefining what's possible in small spaces.
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

        {/* Final Image Placeholder */}
        <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
          <div className="text-center">
            <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
            <p className="text-foreground font-semibold text-lg mb-2">Final Promotional Image</p>
            <p className="text-foreground/70 text-sm">Game's tagline: "Built for a hallway. Designed for survival. Coming to a cramped space near you."</p>
          </div>
        </div>

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