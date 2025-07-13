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
                
                {/* In-game hallway scene placeholder */}
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border mb-6">
                  <svg viewBox="0 0 800 400" className="w-full h-64 rounded-lg">
                    <defs>
                      <linearGradient id="hallwayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="400" fill="url(#hallwayGradient)" />
                    
                    {/* Hallway perspective */}
                    <polygon points="50,100 750,100 650,300 150,300" fill="#2a2a2a" opacity="0.8" />
                    <polygon points="50,300 750,300 750,350 50,350" fill="#1a1a1a" />
                    
                    {/* VR player silhouette */}
                    <circle cx="400" cy="280" r="25" fill="#6366f1" opacity="0.8" />
                    <rect x="390" y="305" width="20" height="40" fill="#6366f1" opacity="0.8" />
                    <rect x="375" y="315" width="15" height="25" fill="#6366f1" opacity="0.6" />
                    <rect x="410" y="315" width="15" height="25" fill="#6366f1" opacity="0.6" />
                    
                    {/* Debris and obstacles */}
                    <rect x="200" y="250" width="30" height="30" fill="#ef4444" opacity="0.7" transform="rotate(15 215 265)" />
                    <rect x="600" y="220" width="25" height="25" fill="#ef4444" opacity="0.7" transform="rotate(-20 612 232)" />
                    
                    {/* Motion lines */}
                    <line x1="350" y1="290" x2="320" y2="290" stroke="#10b981" strokeWidth="2" opacity="0.8" />
                    <line x1="450" y1="290" x2="480" y2="290" stroke="#10b981" strokeWidth="2" opacity="0.8" />
                    
                    <text x="400" y="380" textAnchor="middle" fill="#9ca3af" fontSize="14">
                      In-game hallway scene with player navigating through obstacles
                    </text>
                  </svg>
                </div>
                
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
            
            {/* Hallway dimensions layout placeholder */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border mt-12">
              <svg viewBox="0 0 800 500" className="w-full h-80 rounded-lg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="800" height="500" fill="#111827" />
                <rect width="800" height="500" fill="url(#grid)" />
                
                {/* Top view of hallway */}
                <rect x="300" y="150" width="200" height="300" fill="#1f2937" stroke="#6366f1" strokeWidth="2" />
                
                {/* Dimension lines and labels */}
                <line x1="280" y1="150" x2="280" y2="450" stroke="#10b981" strokeWidth="2" />
                <line x1="275" y1="150" x2="285" y2="150" stroke="#10b981" strokeWidth="2" />
                <line x1="275" y1="450" x2="285" y2="450" stroke="#10b981" strokeWidth="2" />
                <text x="260" y="305" textAnchor="middle" fill="#10b981" fontSize="12" transform="rotate(-90 260 305)">
                  3m (10 ft)
                </text>
                
                <line x1="300" y1="470" x2="500" y2="470" stroke="#10b981" strokeWidth="2" />
                <line x1="300" y1="465" x2="300" y2="475" stroke="#10b981" strokeWidth="2" />
                <line x1="500" y1="465" x2="500" y2="475" stroke="#10b981" strokeWidth="2" />
                <text x="400" y="485" textAnchor="middle" fill="#10b981" fontSize="12">
                  1m (3.2 ft)
                </text>
                
                {/* Player position */}
                <circle cx="400" cy="300" r="15" fill="#6366f1" opacity="0.8" />
                <text x="400" y="330" textAnchor="middle" fill="#9ca3af" fontSize="10">
                  Player
                </text>
                
                {/* Movement indicators */}
                <polygon points="400,200 410,220 390,220" fill="#f59e0b" opacity="0.7" />
                <text x="400" y="190" textAnchor="middle" fill="#f59e0b" fontSize="10">
                  Forward
                </text>
                
                <text x="400" y="50" textAnchor="middle" fill="#e5e7eb" fontSize="16" fontWeight="bold">
                  Hallway Spatial Constraints (Top View)
                </text>
                
                {/* Additional annotations */}
                <text x="150" y="100" fill="#9ca3af" fontSize="12">
                  • Found in most homes
                </text>
                <text x="150" y="120" fill="#9ca3af" fontSize="12">
                  • Safe for in-place movement
                </text>
                <text x="150" y="140" fill="#9ca3af" fontSize="12">
                  • Standing/seated/squat input
                </text>
                
                <text x="550" y="100" fill="#9ca3af" fontSize="12">
                  Ceiling: 2.4m (8 ft)
                </text>
                <text x="550" y="120" fill="#9ca3af" fontSize="12">
                  Width: 1m (3.2 ft)
                </text>
                <text x="550" y="140" fill="#9ca3af" fontSize="12">
                  Length: 3m (10 ft)
                </text>
              </svg>
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
              {/* Avatar actions/movement animations placeholder */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border mb-8">
                <svg viewBox="0 0 900 300" className="w-full h-64 rounded-lg">
                  <rect width="900" height="300" fill="#0f172a" />
                  
                  {/* Jumping Jacks */}
                  <g transform="translate(100, 50)">
                    <circle cx="50" cy="30" r="15" fill="#6366f1" opacity="0.8" />
                    <rect x="45" y="45" width="10" height="25" fill="#6366f1" opacity="0.8" />
                    <rect x="30" y="55" width="12" height="20" fill="#6366f1" opacity="0.6" />
                    <rect x="58" y="55" width="12" height="20" fill="#6366f1" opacity="0.6" />
                    <rect x="25" y="35" width="12" height="20" fill="#6366f1" opacity="0.6" />
                    <rect x="63" y="35" width="12" height="20" fill="#6366f1" opacity="0.6" />
                    
                    <text x="50" y="100" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">
                      Jumping Jacks
                    </text>
                    <text x="50" y="115" textAnchor="middle" fill="#10b981" fontSize="10">
                      → 0.8m forward
                    </text>
                    
                    <polygon points="50,130 60,145 40,145" fill="#10b981" opacity="0.7" />
                    <line x1="50" y1="145" x2="50" y2="165" stroke="#10b981" strokeWidth="2" />
                  </g>
                  
                  {/* Bodyweight Squats */}
                  <g transform="translate(350, 50)">
                    <circle cx="50" cy="30" r="15" fill="#6366f1" opacity="0.8" />
                    <rect x="45" y="45" width="10" height="20" fill="#6366f1" opacity="0.8" />
                    <rect x="35" y="65" width="15" height="15" fill="#6366f1" opacity="0.6" />
                    <rect x="50" y="65" width="15" height="15" fill="#6366f1" opacity="0.6" />
                    <rect x="40" y="35" width="8" height="15" fill="#6366f1" opacity="0.6" />
                    <rect x="52" y="35" width="8" height="15" fill="#6366f1" opacity="0.6" />
                    
                    <text x="50" y="100" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
                      Bodyweight Squats
                    </text>
                    <text x="50" y="115" textAnchor="middle" fill="#f59e0b" fontSize="10">
                      → 1.5m forward
                    </text>
                    
                    <polygon points="50,130 60,145 40,145" fill="#f59e0b" opacity="0.7" />
                    <line x1="50" y1="145" x2="50" y2="180" stroke="#f59e0b" strokeWidth="2" />
                  </g>
                  
                  {/* Shadow Boxing */}
                  <g transform="translate(650, 50)">
                    <circle cx="50" cy="30" r="15" fill="#6366f1" opacity="0.8" />
                    <rect x="45" y="45" width="10" height="25" fill="#6366f1" opacity="0.8" />
                    <rect x="35" y="55" width="12" height="20" fill="#6366f1" opacity="0.6" />
                    <rect x="53" y="55" width="12" height="20" fill="#6366f1" opacity="0.6" />
                    <rect x="20" y="40" width="15" height="8" fill="#6366f1" opacity="0.6" />
                    <rect x="65" y="40" width="15" height="8" fill="#6366f1" opacity="0.6" />
                    
                    {/* Breaking effect */}
                    <rect x="85" y="45" width="20" height="15" fill="#ef4444" opacity="0.4" />
                    <rect x="88" y="48" width="14" height="9" fill="#ef4444" opacity="0.6" />
                    <polygon points="105,52 115,48 115,57" fill="#ef4444" opacity="0.7" />
                    
                    <text x="50" y="100" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">
                      Shadow Boxing
                    </text>
                    <text x="50" y="115" textAnchor="middle" fill="#ef4444" fontSize="10">
                      → breaks walls
                    </text>
                  </g>
                  
                  <text x="450" y="230" textAnchor="middle" fill="#e5e7eb" fontSize="14" fontWeight="bold">
                    Movement as Input: Avatar Actions and Animation Triggers
                  </text>
                  
                  <text x="450" y="250" textAnchor="middle" fill="#9ca3af" fontSize="12">
                    Each movement serves as a mechanic, not just a fitness goal
                  </text>
                </svg>
              </div>
              
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
                    <span>"I felt exhausted — but in a good way. It actually motivated me to keep going, like a real workout."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"I didn't feel like exercise because I was so engrossed in the environment. I forgot I was moving that much."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"It didn't feel limiting — it was designed to work with the space. It felt intentional, not restrictive."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>"The confined space made it feel suspenseful, like I had to escape quickly."</span>
                  </li>
                </ul>
                {/* SUS Score and Quote Cards placeholder */}
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border mt-6">
                  <svg viewBox="0 0 800 300" className="w-full h-64 rounded-lg">
                    <rect width="800" height="300" fill="#0f172a" />
                    
                    {/* SUS Score Display */}
                    <rect x="50" y="50" width="300" height="200" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="2" rx="10" />
                    <text x="200" y="80" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">
                      System Usability Scale
                    </text>
                    <text x="200" y="130" textAnchor="middle" fill="#10b981" fontSize="48" fontWeight="bold">
                      87.5
                    </text>
                    <text x="200" y="160" textAnchor="middle" fill="#10b981" fontSize="24">
                      / 100
                    </text>
                    <text x="200" y="185" textAnchor="middle" fill="#9ca3af" fontSize="12">
                      Both testers scored identically
                    </text>
                    <text x="200" y="200" textAnchor="middle" fill="#9ca3af" fontSize="12">
                      High usability rating
                    </text>
                    
                    {/* Quote Cards */}
                    <rect x="400" y="50" width="350" height="90" fill="#6366f1" opacity="0.1" stroke="#6366f1" strokeWidth="1" rx="8" />
                    <text x="410" y="70" fill="#6366f1" fontSize="12" fontWeight="bold">
                      Tester 1:
                    </text>
                    <text x="410" y="88" fill="#e5e7eb" fontSize="11">
                      "I felt exhausted — but in a good way. It actually
                    </text>
                    <text x="410" y="103" fill="#e5e7eb" fontSize="11">
                      motivated me to keep going, like a real workout."
                    </text>
                    <text x="410" y="125" fill="#9ca3af" fontSize="10">
                      Focus: Physical engagement and motivation
                    </text>
                    
                    <rect x="400" y="160" width="350" height="90" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" strokeWidth="1" rx="8" />
                    <text x="410" y="180" fill="#f59e0b" fontSize="12" fontWeight="bold">
                      Tester 2:
                    </text>
                    <text x="410" y="198" fill="#e5e7eb" fontSize="11">
                      "I didn't feel like exercise because I was so engrossed
                    </text>
                    <text x="410" y="213" fill="#e5e7eb" fontSize="11">
                      in the environment. I forgot I was moving that much."
                    </text>
                    <text x="410" y="235" fill="#9ca3af" fontSize="10">
                      Focus: Immersion and embodiment
                    </text>
                    
                    <text x="400" y="280" textAnchor="middle" fill="#e5e7eb" fontSize="14" fontWeight="bold">
                      User Testing Results: SUS Scores and Key Feedback
                    </text>
                  </svg>
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
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Key Insight: Embodiment & Presence</h4>
                  <blockquote className="text-lg italic text-center mb-4">
                    "I didn't feel like exercise because I was so engrossed in the environment. I forgot I was moving that much."
                  </blockquote>
                  <p className="text-muted-foreground text-center">
                    The most powerful feedback came from users who forgot they were exercising - 
                    true embodiment through immersive design.
                  </p>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Design is often born out of limitations, not just possibilities. By designing for tight spaces, I was forced to prioritize clarity, 
                  movement, and immersion. The hallway became more than a backdrop — it was a co-actor, shaping the 
                  pace, tension, and physicality of the story.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Context-aware spatial mapping: Physical space inspired virtual constraints + expansions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mixed reality architecture: Real environment becomes stage for performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Embodied interaction: Users were more engaged when they forgot it was exercise</span>
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