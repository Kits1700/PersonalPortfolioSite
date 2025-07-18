import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Wrench, Target, CheckCircle, AlertCircle, Brain, Eye, Shield, BarChart3, TrendingUp, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CaseStudyLLM() {
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
              Encouraging Thought Before Completion
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Redefining AI Interaction Through Selective Friction
            </p>
            
            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Calendar className="w-4 h-4" />
                <span>HCI Project</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Users className="w-4 h-4" />
                <span>25 Participants</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Wrench className="w-4 h-4" />
                <span>Figma, Replit, GPT-4 API</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">Web Application Home Screen</p>
              <p className="text-foreground/70 text-sm">Clean, intuitive interface with "Start Task" button for selective friction research platform</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground leading-relaxed">
              As large language models (LLMs) like ChatGPT dominate academic and professional workflows, overreliance risks undermining critical thinking. This HCI project introduces selective friction—task-specific interface barriers—to promote reflective engagement with AI outputs.
            </p>
          </div>
        </div>

        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">My Role</h2>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-foreground leading-relaxed mb-6">
              As <strong>lead researcher and UX designer</strong>, I conceptualized the selective friction approach, developed the web application, and designed a mixed-methods user study. I crafted task protocols, integrated the GPT-4 API, and am currently conducting data collection with 25 participants.
            </p>
            <p className="text-foreground leading-relaxed">
              My work ensures the platform balances usability and cognitive engagement, with analysis pending to validate friction's impact on critical thinking in AI-assisted workflows.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 mb-8 border border-orange-500/20">
            <p className="text-foreground leading-relaxed mb-6">
              LLMs streamline tasks but often lead to uncritical acceptance of outputs, reducing thoughtful engagement. The challenge was to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Design task-specific frictions that enhance critical thinking without eroding trust</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Create intuitive interfaces for literature reviews and argument brainstorming</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Balance cognitive effort with usability in AI-assisted workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Validate the approach through a robust user study</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Design Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Design Process</h2>
          
          {/* Research & Insights */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Research & Insights</h3>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                Literature on cognitive forcing functions showed generic frictions reduce overreliance but increase cognitive load. My approach innovates by embedding task-relevant frictions (e.g., ranking abstracts, formulating counterarguments) to scaffold thinking, tailored to open-ended creative tasks.
              </p>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <p className="text-foreground/80 text-sm">
                  <strong>Key Innovation:</strong> Unlike generic barriers, selective friction integrates meaningfully with user workflows, creating cognitive scaffolding rather than arbitrary obstacles.
                </p>
              </div>
            </div>
            
            {/* Research Image Placeholder */}
            <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
              <div className="text-center">
                <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                <p className="text-foreground font-semibold text-lg mb-2">Selective Friction Workflow</p>
                <p className="text-foreground/70 text-sm">Diagram showing user tasks like abstract ranking before AI output display</p>
              </div>
            </div>
          </div>

          {/* System Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">System Design</h3>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-secondary/20">
              <p className="text-foreground leading-relaxed mb-6">
                I designed a web application using Figma for UX and Replit with the GPT-4 API. It supports two experimental conditions:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-blue-500" />
                    <h4 className="text-lg font-semibold text-foreground">No-Friction Control</h4>
                  </div>
                  <p className="text-foreground/80 text-sm">Immediate AI assistance with standard interface patterns for baseline comparison</p>
                </div>
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-green-500" />
                    <h4 className="text-lg font-semibold text-foreground">Friction Experimental</h4>
                  </div>
                  <p className="text-foreground/80 text-sm">Users complete preparatory tasks before AI output is revealed, promoting reflection</p>
                </div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <p className="text-foreground/80 text-sm">
                  <strong>Validation:</strong> A pilot study with two participants validated usability and data logging systems before full deployment.
                </p>
              </div>
            </div>
            
            {/* System Design Image Placeholder */}
            <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
              <div className="text-center">
                <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                <p className="text-foreground font-semibold text-lg mb-2">Onboarding Screen</p>
                <p className="text-foreground/70 text-sm">Informed consent and task instructions interface</p>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Implementation</h3>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
              <p className="text-foreground leading-relaxed mb-6">
                The application includes carefully designed key screens that guide users through the research protocol:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Onboarding</h4>
                    <p className="text-foreground/80 text-sm">Guides users through consent and task setup with clear instructions</p>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Literature Review Task</h4>
                    <p className="text-foreground/80 text-sm">Users rank abstracts before AI-generated review is displayed</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Argument Brainstorming</h4>
                    <p className="text-foreground/80 text-sm">Users input counterarguments before AI suggestions are revealed</p>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Results Screen</h4>
                    <p className="text-foreground/80 text-sm">Displays AI output post-friction tasks with data logging</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Implementation Image Placeholders */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Literature Review Task Screen</p>
                  <p className="text-foreground/70 text-sm">Abstract ranking interface before AI review display</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Argument Brainstorming Screen</p>
                  <p className="text-foreground/70 text-sm">Counterargument input field interface</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 border border-border/30">
                <div className="text-center">
                  <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Results Screen</p>
                  <p className="text-foreground/70 text-sm">AI-generated output display after friction tasks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Study Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">User Study</h2>
          
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-8 mb-8 border border-green-500/20">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-green-500 mb-4">25</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">LLM-Experienced Participants</h3>
              <p className="text-foreground/80">Counterbalanced within-subjects design</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Tasks</h4>
                <p className="text-foreground/80 text-sm">Completed by each participant in controlled conditions</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">3</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Data Types</h4>
                <p className="text-foreground/80 text-sm">Behavioral logs, questionnaires, interviews</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">Mixed</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Methods</h4>
                <p className="text-foreground/80 text-sm">Quantitative and qualitative analysis</p>
              </div>
            </div>
            
            <div className="mt-8 bg-background/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Data Collection Includes:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <span className="text-foreground/80 text-sm">Behavioral logs: Time spent on friction tasks</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span className="text-foreground/80 text-sm">Questionnaires: Trust, cognitive effort, overreliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-purple-500" />
                  <span className="text-foreground/80 text-sm">Interviews: Qualitative insights on experiences</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* User Study Image Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">User Testing Session</p>
              <p className="text-foreground/70 text-sm">Participant interacting with the app on laptop during research protocol</p>
            </div>
          </div>
        </section>

        {/* Analysis Plan Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Analysis Plan</h2>
          
          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-secondary/20">
            <p className="text-foreground leading-relaxed mb-6">
              Post-data collection, I'll conduct comprehensive analysis combining quantitative metrics with qualitative insights:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h4 className="text-lg font-semibold text-foreground">Quantitative Analysis</h4>
                </div>
                <p className="text-foreground/80 text-sm">Repeated measures ANOVA for friction vs. no-friction conditions, analyzing overreliance and trust metrics</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                  <h4 className="text-lg font-semibold text-foreground">Qualitative Analysis</h4>
                </div>
                <p className="text-foreground/80 text-sm">Thematic analysis of interviews using Braun & Clarke's framework for user experience insights</p>
              </div>
            </div>
            <div className="mt-6 bg-background/50 rounded-lg p-4">
              <p className="text-foreground/80 text-sm">
                <strong>Triangulation:</strong> Combining behavioral metrics with thematic insights to comprehensively assess friction's impact on critical thinking and AI interaction patterns.
              </p>
            </div>
          </div>
          
          {/* Analysis Plan Image Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">ANOVA Results Mock-up</p>
              <p className="text-foreground/70 text-sm">Chart comparing overreliance metrics across friction conditions</p>
            </div>
          </div>
        </section>

        {/* Anticipated Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Anticipated Impact</h2>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 border border-primary/20">
            <p className="text-foreground leading-relaxed mb-6">
              This project hypothesizes that <strong>friction reduces overreliance, enhances critical engagement, and maintains trust</strong> (H1–H3). Pilot feedback suggests friction encourages reflection without compromising usability.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Reduced Overreliance</h3>
                <p className="text-foreground/80 text-sm">Users develop more critical evaluation skills for AI outputs</p>
              </div>
              <div className="text-center">
                <Brain className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Enhanced Engagement</h3>
                <p className="text-foreground/80 text-sm">Selective friction promotes deeper cognitive processing</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Maintained Trust</h3>
                <p className="text-foreground/80 text-sm">Thoughtful barriers preserve user confidence in AI systems</p>
              </div>
            </div>
            <div className="mt-8 bg-background/50 rounded-lg p-6">
              <p className="text-foreground/80 text-sm">
                <strong>Future Applications:</strong> If validated, this approach could redefine AI-assisted interfaces, promoting responsible collaboration in education, professional workflows, and creative tasks.
              </p>
            </div>
          </div>
          
          {/* Impact Image Placeholder */}
          <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
            <div className="text-center">
              <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
              <p className="text-foreground font-semibold text-lg mb-2">Pilot Data Preview</p>
              <p className="text-foreground/70 text-sm">Graph showing increased time spent on critical tasks in friction condition</p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Key Learnings</h2>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Balancing Usability and Cognitive Engagement</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Designing task-specific frictions highlighted the delicate balance between usability and cognitive engagement. <strong>Pilot testing emphasized clear instructions</strong> to prevent frustration while maintaining the reflective benefits of selective friction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Design Insights</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Task-relevant friction proves more effective than generic barriers, creating meaningful cognitive scaffolding that integrates with user workflows rather than disrupting them.
                </p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">HCI Implications</h4>
                <p className="text-foreground/80 leading-relaxed">
                  This project underscores HCI's role in ensuring AI tools amplify human agency rather than replace it, promoting responsible human-AI collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Think Deeper, Create Smarter</h2>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              "Encouraging Thought Before Completion" pioneers selective friction to enhance human-AI collaboration. As data collection continues, this project promises to shape UX design for AI tools, with applications in education and professional workflows.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Future work could explore adaptive frictions tailored to diverse user expertise levels, creating personalized cognitive scaffolding that evolves with user competence and task complexity.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">25</div>
                <p className="text-foreground font-medium">Participants</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
                <p className="text-foreground font-medium">Tasks per User</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">3</div>
                <p className="text-foreground font-medium">Hypotheses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Image Placeholder */}
        <div className="bg-gradient-to-br from-card/50 to-background/80 rounded-xl p-8 mb-8 border border-border/30">
          <div className="text-center">
            <div className="text-xs text-foreground/60 mb-2 bg-foreground/10 px-3 py-1 rounded inline-block">IMAGE PLACEHOLDER</div>
            <p className="text-foreground font-semibold text-lg mb-2">Promotional Image</p>
            <p className="text-foreground/70 text-sm">App in use with tagline: "Think deeper, create smarter."</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center py-8 border-t border-border/30">
          <Link href="/case-study-vr">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous: VR Case Study
            </Button>
          </Link>
          <Link href="/case-study-iot">
            <Button variant="outline" className="flex items-center gap-2">
              Next: IoT Case Study
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}