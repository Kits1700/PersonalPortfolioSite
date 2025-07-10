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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Smart Environmental Monitoring
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              IoT-based intelligent monitoring system for environmental safety and sustainability
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                IoT Development
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Data Analytics
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
                  A comprehensive IoT-based environmental monitoring system that combines sensor networks, machine learning, and real-time analytics to track air quality, noise levels, and environmental hazards. The system provides predictive insights and automated alerts for environmental safety management.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Duration: 10 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Team: 6 engineers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Role: System Architect & ML Engineer</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">System Capabilities</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Real-time air quality monitoring across multiple locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Predictive modeling for environmental hazards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated alert system for safety thresholds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Machine learning-driven anomaly detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Architecture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sensor Network</h3>
                <p className="text-muted-foreground">
                  Distributed IoT sensors collecting environmental data via LoRaWAN
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Edge Computing</h3>
                <p className="text-muted-foreground">
                  Local processing units for real-time data analysis and preprocessing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics Platform</h3>
                <p className="text-muted-foreground">
                  Cloud-based analytics with ML models for pattern recognition
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security Layer</h3>
                <p className="text-muted-foreground">
                  End-to-end encryption and secure communication protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Implementation Details</h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Hardware Development</h3>
                <p className="text-muted-foreground mb-4">
                  Designed custom IoT devices using ESP32 microcontrollers with multiple environmental sensors including 
                  PM2.5, CO2, temperature, humidity, and noise level sensors. Each device features low-power design 
                  for extended battery life and weather-resistant enclosures.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Sensor Suite</h4>
                    <p className="text-muted-foreground">
                      PM2.5, CO2, temperature, humidity, noise, and light sensors
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Connectivity</h4>
                    <p className="text-muted-foreground">
                      LoRaWAN for long-range, low-power wireless communication
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Power Management</h4>
                    <p className="text-muted-foreground">
                      Solar charging with battery backup for 24/7 operation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Software Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Built a scalable microservices architecture with real-time data processing, machine learning pipeline, 
                  and web-based dashboard. The system processes thousands of sensor readings per hour and provides 
                  predictive analytics for environmental trends.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Backend</h4>
                    <p className="text-muted-foreground">
                      Node.js microservices with MongoDB for data storage
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">ML Pipeline</h4>
                    <p className="text-muted-foreground">
                      Python-based ML models for anomaly detection and prediction
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Frontend</h4>
                    <p className="text-muted-foreground">
                      React dashboard with real-time visualizations and alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Impact & Results</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Environmental Impact</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>25% reduction in environmental incidents through early detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Real-time monitoring across 50+ locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improved response time to environmental hazards by 60%</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Technical Achievements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>99.5% system uptime with fault-tolerant architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>95% accuracy in environmental hazard prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Processing 10,000+ sensor readings per hour</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-lg font-semibold mb-2">Monitoring Sites</div>
                <p className="text-muted-foreground">Active environmental monitoring locations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Prediction Accuracy</div>
                <p className="text-muted-foreground">ML model accuracy for hazard prediction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">60%</div>
                <div className="text-lg font-semibold mb-2">Faster Response</div>
                <p className="text-muted-foreground">Improvement in emergency response time</p>
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
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}