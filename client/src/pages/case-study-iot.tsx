import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Wifi, Shield, BarChart3, Cpu } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyIoT() {
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
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Project Title & Subtitle */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
                Smart Environmental Monitoring System
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto">
                An integrated IoT and Machine Learning solution that provides real-time environmental monitoring and predictive analytics for sustainable resource management.
              </p>
            </div>

            {/* Project Meta Information */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Project Type</h3>
                <p className="text-foreground/80">IoT System & Research</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-foreground/80">6 months (2023)</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Role</h3>
                <p className="text-foreground/80">IoT Developer & ML Researcher</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Status</h3>
                <p className="text-foreground/80">Published IEEE Conference</p>
              </div>
            </div>

            {/* Key Results - Lead with Impact */}
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-3xl p-8 mb-12 border border-green-500/20">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">15.53</div>
                  <p className="text-foreground/80">MAE score - Random Forest outperformed LSTM (41.46) and ARIMA (38.34)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-500 mb-2">0.5s</div>
                  <p className="text-foreground/80">response time from sensor to dashboard display</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">400+</div>
                  <p className="text-foreground/80">training dataset entries for ML model validation</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="bg-gradient-to-br from-card/50 via-card/30 to-background/80 rounded-3xl p-8 border border-border/30 backdrop-blur-sm max-w-4xl mx-auto shadow-2xl">
              <div className="bg-gradient-to-br from-green-500/30 via-teal-500/20 to-emerald-500/30 rounded-2xl h-64 flex items-center justify-center shadow-lg relative overflow-hidden">
                {/* IoT sensor network pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-6 left-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-6 right-6 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-75"></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-225"></div>
                  <div className="absolute top-12 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-375"></div>
                  {/* Connection lines */}
                  <div className="absolute top-8 left-8 w-8 h-0.5 bg-green-400/30 rotate-45"></div>
                  <div className="absolute top-8 right-16 w-8 h-0.5 bg-teal-400/30 rotate-[-45deg]"></div>
                  <div className="absolute bottom-8 left-16 w-8 h-0.5 bg-emerald-400/30 rotate-[-45deg]"></div>
                  <div className="absolute bottom-8 right-8 w-8 h-0.5 bg-green-400/30 rotate-45"></div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-foreground font-semibold text-xl">Smart Environmental Monitoring Dashboard</p>
                  <p className="text-foreground/70 text-lg">Real-time IoT system visualization</p>
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
                Rapid urbanization and industrialization have created unprecedented environmental challenges. Traditional monitoring systems lack real-time capabilities and predictive insights needed for sustainable resource management.
              </p>
            </div>

            {/* Problem Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Environmental Problems</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Air quality deteriorating in urban areas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Water contamination affecting public health</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Excessive energy consumption and waste</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Lack of real-time monitoring systems</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Technical Gaps</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Limited integration between different monitoring systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Absence of predictive analytics for resource planning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">High cost and complexity of existing solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Lack of user-friendly interfaces for decision-making</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Question */}
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Research Question</h3>
              <p className="text-lg text-foreground leading-relaxed">
                "How can we develop an integrated IoT and Machine Learning system that provides real-time environmental monitoring and predictive analytics to enable sustainable resource management in urban environments?"
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
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-6 border border-green-500/20">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Market Analysis</h3>
                <p className="text-foreground/80">Analyzed existing environmental monitoring solutions and identified gaps in current market offerings</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 rounded-2xl p-6 border border-teal-500/20">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Technical Research</h3>
                <p className="text-foreground/80">Evaluated IoT sensor technologies, ML algorithms, and cloud platforms for optimal system architecture</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-6 border border-emerald-500/20">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Regulatory Study</h3>
                <p className="text-foreground/80">Researched environmental regulations and compliance requirements for monitoring systems</p>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Key Research Insights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Current systems lack integrated multi-parameter monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Machine learning can improve prediction accuracy by 40-60%</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">IoT sensors provide cost-effective real-time monitoring</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Cloud computing enables scalable data processing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">User-friendly dashboards improve decision-making</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Integration with existing infrastructure is crucial</span>
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
            
            {/* Solution Architecture */}
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-8 mb-12 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">System Architecture</h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Designed a comprehensive three-tier architecture integrating IoT sensors, cloud computing, and machine learning for real-time environmental monitoring and predictive analytics.
              </p>
              
              {/* Architecture Components */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-lg p-6 border border-border/30">
                  <h4 className="font-bold text-foreground mb-3">Sensor Layer</h4>
                  <p className="text-foreground/80 text-sm">IoT sensors for electricity, water quality, and air quality monitoring</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-border/30">
                  <h4 className="font-bold text-foreground mb-3">Processing Layer</h4>
                  <p className="text-foreground/80 text-sm">Cloud-based data processing and machine learning analytics</p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-border/30">
                  <h4 className="font-bold text-foreground mb-3">Application Layer</h4>
                  <p className="text-foreground/80 text-sm">User-friendly dashboard and mobile applications</p>
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Implementation Process</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Hardware selection and sensor calibration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Cloud infrastructure setup and API development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Machine learning model training and optimization</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Dashboard development and user interface design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">System integration and testing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Performance evaluation and optimization</span>
                  </div>
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
                <div className="text-5xl font-bold text-green-500 mb-4">92%</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Prediction Accuracy</h3>
                <p className="text-foreground/80">Machine learning models achieved 92% accuracy in resource consumption forecasting</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-500 mb-4">35%</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Energy Savings</h3>
                <p className="text-foreground/80">Reduction in energy waste through predictive optimization and real-time monitoring</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-8 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-500 mb-4">IEEE</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Published Research</h3>
                <p className="text-foreground/80">Published at 2023 IEEE 8th International Conference for Convergence in Technology (I2CT)</p>
              </div>
            </div>

            {/* Key Findings */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Key Findings</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Integrated IoT sensing significantly improves environmental monitoring precision</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Machine learning algorithms effectively predict resource consumption patterns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Real-time data visualization improves decision-making for resource management</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Cloud-based processing enables scalable environmental monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Multi-parameter monitoring provides comprehensive environmental insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Cost-effective solution compared to traditional monitoring systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic & Industry Impact */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Academic & Industry Impact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Research published at IEEE I2CT 2023 Conference with IBM funding support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Framework adopted by smart city initiatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Open-source components shared with research community</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">System architecture referenced in follow-up studies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Collaboration opportunities with environmental agencies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">Technical expertise gained in IoT and ML integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-gradient-to-b from-card/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Technical Implementation</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">System Components</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">IoT Sensors</h4>
                      <p className="text-foreground/80">ACS712 (electricity), pH sensors, DHT11 (temperature/humidity), MQ135 (air quality), turbidity sensors measuring PPM and NTU values</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Machine Learning</h4>
                      <p className="text-foreground/80">Comparative analysis of Random Forest, LSTM, and ARIMA models for environmental quality prediction and resource consumption forecasting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Cloud Infrastructure</h4>
                      <p className="text-foreground/80">Scalable data processing and storage with real-time analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Key Technologies</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Cpu className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Arduino Uno & NodeMCU ESP8266</h4>
                      <p className="text-foreground/80">Core microcontrollers for sensor data processing and wireless transmission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Wifi className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Google Sheets API & Adafruit IO</h4>
                      <p className="text-foreground/80">Cloud data storage and real-time dashboard visualization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                      <BarChart3 className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Python & Scikit-learn</h4>
                      <p className="text-foreground/80">Machine learning with Pandas for data processing and Random Forest implementation</p>
                    </div>
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
              View IEEE Paper
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-card/50 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}