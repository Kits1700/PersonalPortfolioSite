import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Wrench, Target, CheckCircle, AlertCircle, Zap, Droplets, Wind } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
// IoT images temporarily disabled due to import path issues
// import iotDashboardImage from "@assets/Screenshot 2025-07-10 at 3.03.56 PM_1752140043714.png";
// import iotSystemImage from "@assets/Screenshot 2025-07-10 at 5.03.22 PM_1752147209652.png";

export default function CaseStudyIoT() {
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
              Smart Resource Monitoring
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Revolutionizing Sustainability Through IoT and Machine Learning
            </p>
            
            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Calendar className="w-4 h-4" />
                <span>28 Days Testing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Users className="w-4 h-4" />
                <span>Lead Developer & Researcher</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Wrench className="w-4 h-4" />
                <span>IoT, ML, Arduino, NodeMCU</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
            <img 
              src="/images/webapp-dashboard.gif" 
              alt="Smart Resource Monitoring Web Dashboard" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-card/50">
              <h4 className="font-semibold text-foreground text-xl mb-2">Web Application Dashboard</h4>
              <p className="text-foreground/70">Real-time monitoring interface showing electricity, water quality, and air quality metrics with live data visualization</p>
            </div>
          </div>

          {/* System Architecture */}
          <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
            <img 
              src="/images/proposed-system.gif" 
              alt="IoT System Architecture" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-card/50">
              <h4 className="font-semibold text-foreground text-xl mb-2">System Architecture</h4>
              <p className="text-foreground/70">Complete IoT system showing sensor integration, data flow through Google Sheets, machine learning model, and user interfaces</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">2.94</div>
              <div className="text-sm text-foreground">RMSE Accuracy</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-secondary mb-2">0.58%</div>
              <div className="text-sm text-foreground">Electricity Error</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">~0.5s</div>
              <div className="text-sm text-foreground">Update Delay</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground leading-relaxed">
              As urbanization strains resources and degrades air and water quality, this IoT and machine learning system uses affordable sensors and a Random Forest Regressor to deliver real-time insights and predictive analytics, empowering sustainable resource management.
            </p>
          </div>
        </div>

        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">My Role</h2>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-foreground leading-relaxed mb-6">
              As <strong>lead developer and researcher</strong>, I designed the IoT architecture, integrated sensors with Arduino Uno and NodeMCU, and built the machine learning pipeline for forecasting. I conducted comparative model analysis (LSTM, ARIMA, Random Forest), developed the web application's backend, and ensured seamless data flow.
            </p>
            <p className="text-foreground leading-relaxed">
              Collaborating with <strong>Dr. Anala M R</strong> under an IBM Shared University Research grant, I led the project from ideation to deployment, presenting our findings at the 2023 IEEE 8th International Conference for Convergence in Technology.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 mb-8 border border-orange-500/20">
            <p className="text-foreground leading-relaxed mb-6">
              Manual resource monitoring is costly, error-prone, and lacks predictive capabilities, leaving users unaware of overconsumption or quality issues. The goal was to create a system that:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Monitors electricity, water, and air quality affordably and accurately</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Predicts future trends for proactive management</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Provides intuitive, real-time insights via mobile and web interfaces</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Overcomes the high costs of traditional smart meters</span>
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
                We analyzed Automated Meter Reading (AMR) and IoT-based systems, identifying gaps in multi-resource monitoring and user accessibility. Affordable sensors and cloud-based analytics offered opportunities to address health risks and economic losses from poor resource quality.
              </p>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <p className="text-foreground/80 text-sm">
                  <strong>Key Insight:</strong> Our research aligned with global sustainability goals like the EU's energy efficiency plans, highlighting the need for accessible monitoring solutions that combine affordability with accuracy.
                </p>
              </div>
            </div>
            
            {/* Circuit Diagram */}
            <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
              <img 
                src="/images/circuit-diagram.gif" 
                alt="IoT Circuit Diagram" 
                className="w-full h-auto"
              />
              <div className="p-6 bg-card/50">
                <h4 className="font-semibold text-foreground text-xl mb-2">Hardware Circuit Diagram</h4>
                <p className="text-foreground/70">Complete circuit setup showing Arduino Uno, sensors, and NodeMCU connections for multi-resource monitoring</p>
              </div>
            </div>
          </div>

          {/* System Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">System Design</h3>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-secondary/20">
              <p className="text-foreground leading-relaxed mb-6">
                The system integrates comprehensive IoT framework and machine learning capabilities:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <h4 className="text-lg font-semibold text-foreground">IoT Framework</h4>
                  </div>
                  <p className="text-foreground/80 text-sm">ACS712 (electricity), MQ135 (air quality), pH, turbidity, and DHT11 sensors connect to Arduino Uno and NodeMCU, sending data to Google Sheets and Adafruit dashboards via APIs.</p>
                </div>
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-blue-500" />
                    <h4 className="text-lg font-semibold text-foreground">Machine Learning</h4>
                  </div>
                  <p className="text-foreground/80 text-sm">Random Forest Regressor predicts air and water quality (PPM, NTU) for 7 days, trained on a dynamic dataset of ~400 entries with 2.94 RMSE accuracy.</p>
                </div>
              </div>
            </div>
            
            {/* Sensor Data */}
            <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
              <img 
                src="/images/sensor-data.gif" 
                alt="Automatic Sensor Data Collection" 
                className="w-full h-auto"
              />
              <div className="p-6 bg-card/50">
                <h4 className="font-semibold text-foreground text-xl mb-2">Real-time Sensor Data</h4>
                <p className="text-foreground/70">Automatic data collection showing temperature, humidity, air quality, and turbidity measurements over time</p>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Implementation</h3>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
              <p className="text-foreground leading-relaxed mb-6">
                We deployed a comprehensive solution combining hardware, data processing, and user interfaces:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Hardware</h4>
                    <p className="text-foreground/80 text-sm">Cost-effective sensors and NodeMCU for real-time data collection</p>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Data Pipeline</h4>
                    <p className="text-foreground/80 text-sm">Sensor data cleaned (removing NaN, converting to float/datetime) and stored securely via Google API</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Predictive Model</h4>
                    <p className="text-foreground/80 text-sm">Random Forest outperformed LSTM (48.304 RMSE) and ARIMA (97.49 RMSE) with 2.94 RMSE</p>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Interface</h4>
                    <p className="text-foreground/80 text-sm">Web dashboard displays real-time and predicted values with Adafruit dashboard for electricity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Electricity Dashboard */}
            <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
              <img 
                src="/images/electricity-dashboard.gif" 
                alt="Adafruit Electricity Dashboard" 
                className="w-full h-auto"
              />
              <div className="p-6 bg-card/50">
                <h4 className="font-semibold text-foreground text-xl mb-2">Electricity Monitoring Dashboard</h4>
                <p className="text-foreground/70">Adafruit dashboard showing real-time electricity usage monitoring with gauge visualization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Validation</h2>
          
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-8 mb-8 border border-green-500/20">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-green-500 mb-4">28 Days</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Residential Testing Period</h3>
              <p className="text-foreground/80">Comprehensive validation in real-world conditions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">~0.5s</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Update Delay</h4>
                <p className="text-foreground/80 text-sm">Near-instantaneous updates for real-time monitoring</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">2.94</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">RMSE Accuracy</h4>
                <p className="text-foreground/80 text-sm">Random Forest model performance</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">0.58%</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Electricity Error</h4>
                <p className="text-foreground/80 text-sm">High accuracy in electricity forecasting</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-background/50 rounded-lg">
              <p className="text-foreground/80 text-sm">
                <strong>Key Achievement:</strong> Users received instant alerts for threshold breaches, significantly enhancing resource control and enabling proactive management.
              </p>
            </div>
          </div>
          
          {/* ARIMA Prediction Results */}
          <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
            <img 
              src="/images/arima-prediction.gif" 
              alt="ARIMA Predicted vs Expected Results" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-card/50">
              <h4 className="font-semibold text-foreground text-xl mb-2">ARIMA Model Performance</h4>
              <p className="text-foreground/70">Comparison of ARIMA predicted values vs expected results, showing model limitations with 97.49 RMSE</p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Impact</h2>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 border border-primary/20">
            <p className="text-foreground leading-relaxed mb-6">
              With a <strong>2.94 RMSE for quality predictions</strong> and <strong>0.58% error for electricity</strong>, this system reduces costs, mitigates health risks, and promotes sustainable consumption. Its affordability and scalability make it ideal for homes and businesses, supporting global sustainability initiatives.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Water Quality</h3>
                <p className="text-foreground/80 text-sm">Real-time monitoring prevents health risks from contaminated water</p>
              </div>
              <div className="text-center">
                <Wind className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Air Quality</h3>
                <p className="text-foreground/80 text-sm">Predictive analytics enable proactive air quality management</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Energy Efficiency</h3>
                <p className="text-foreground/80 text-sm">Accurate electricity monitoring reduces consumption costs</p>
              </div>
            </div>
          </div>
          
          {/* Random Forest Results */}
          <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
            <img 
              src="/images/random-forest.gif" 
              alt="Random Forest Model Performance" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-card/50">
              <h4 className="font-semibold text-foreground text-xl mb-2">Random Forest Model Performance</h4>
              <p className="text-foreground/70">Superior performance with 2.94 RMSE, demonstrating Random Forest's effectiveness for IoT sensor data prediction</p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Key Learnings</h2>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">IoT and Machine Learning Synergy</h3>
            <p className="text-foreground leading-relaxed mb-6">
              This project highlighted the powerful synergy of IoT and machine learning in solving real-world problems. <strong>Random Forest's robustness with small datasets</strong> was pivotal to our success, demonstrating that sophisticated analytics can work effectively with limited data.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Technical Insights</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Random Forest's ensemble approach proved superior to LSTM and ARIMA for time-series prediction with limited data, achieving remarkable accuracy with only ~400 training samples.
                </p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Design Principles</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Affordable design and intuitive interfaces are critical for driving user adoption and sustainable behavior change in resource management systems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Comprehensive ML Results */}
          <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
            <img 
              src="/images/ml-results.gif" 
              alt="Comprehensive Machine Learning Results" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-card/50">
              <h4 className="font-semibold text-foreground text-xl mb-2">Complete ML Model Analysis</h4>
              <p className="text-foreground/70">Comprehensive comparison of LSTM, ARIMA, and Random Forest models showing performance metrics and prediction accuracy</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Smart Today, Sustainable Tomorrow</h2>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              The "Smart Electricity, Water, and Air Quality Monitoring System" redefines resource management with precise, accessible insights. By blending affordable hardware, predictive analytics, and user-friendly dashboards, it empowers sustainable living.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Future enhancements could include gas monitoring or smart grid integration, amplifying its global impact and contributing to a more sustainable world.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">2.94</div>
                <p className="text-foreground font-medium">RMSE Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">0.58%</div>
                <p className="text-foreground font-medium">Electricity Error</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">28</div>
                <p className="text-foreground font-medium">Days Validated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Impact Visual */}
        <div className="rounded-xl overflow-hidden border border-border/30 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-teal-500/20 p-8 text-center">
            <div className="text-2xl font-bold text-foreground mb-4">Smart Resource Monitoring</div>
            <div className="text-foreground/80 text-lg mb-6">Revolutionizing Sustainability Through IoT and Machine Learning</div>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-foreground">Real-time Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span className="text-foreground">Predictive Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-400" />
                <span className="text-foreground">Multi-resource Tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center py-8 border-t border-border/30">
          <Link href="/case-study-llm">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous: LLM Case Study
            </Button>
          </Link>
          <Link href="/case-study-vr">
            <Button variant="outline" className="flex items-center gap-2">
              Next: VR Case Study
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}