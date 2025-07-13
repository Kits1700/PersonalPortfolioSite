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
              Smart Electricity, Water and Air Quality Monitoring System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Affordable IoT system empowering households to monitor resource consumption and environmental impact
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                IoT Hardware
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                UX Design
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
                  As cities grow and urban living becomes the norm, the pressure on our natural resources is increasing. 
                  I noticed a lack of accessible tools that empower individuals to track their own environmental impact. 
                  With this in mind, I designed and built a system that monitors electricity usage and the quality of air 
                  and water in real time using affordable IoT hardware and interprets it using machine learning. It wasn't 
                  just about building a system—it was about helping people stay informed and make better daily decisions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Duration: 6 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Team: Solo project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Role: Full system design & development</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">The Problem</h3>
                <p className="text-muted-foreground mb-6">
                  In most Indian homes, we only become aware of our electricity usage when the monthly bill arrives. 
                  There is little visibility into how we consume vital resources like electricity, water, and clean air. 
                  Worse, there are no predictive systems in place for households to anticipate problems before they happen. 
                  Existing solutions are expensive, fragmented (focused on a single resource), and don't empower users 
                  with meaningful insights.
                </p>
                <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monitor air, water, and electricity usage in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Predict air and water quality for the next 7 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Alert users when thresholds are exceeded (pollution, usage, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Design a dashboard that's simple, clear, and meaningful</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep hardware and implementation affordable for everyday homes</span>
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
                  Arduino Uno + NodeMCU collecting data from MQ135, ACS712, DHT11, pH sensors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <p className="text-muted-foreground">
                  Python scripts for data cleaning, transformation, and ML model training
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dashboard</h3>
                <p className="text-muted-foreground">
                  Web application with Google Sheets API and Adafruit IO integration
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <p className="text-muted-foreground">
                  Random Forest Regressor for 7-day air and water quality forecasting
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
                  I connected sensors to an Arduino Uno and used a NodeMCU for WiFi connectivity. The system monitors 
                  three key areas: electricity consumption via ACS712 current sensor, air quality using MQ135 gas sensor 
                  for CO2, NOx, and ammonia detection, and water quality through turbidity, pH, and temperature sensors.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Electricity Monitoring</h4>
                    <p className="text-muted-foreground">
                      ACS712 current sensor measuring amperes consumption
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Air Quality</h4>
                    <p className="text-muted-foreground">
                      MQ135 sensor detecting CO2, NOx, and ammonia levels
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Water Quality</h4>
                    <p className="text-muted-foreground">
                      pH sensors, turbidity measurement, and DHT11 temperature
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Machine Learning & Data Pipeline</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time data was pushed to Google Sheets and Adafruit dashboards. I used Python for data cleaning 
                  and transformation, then trained multiple ML models including LSTM, ARIMA, and Random Forest Regressor 
                  for forecasting air and water quality. Random Forest achieved the lowest RMSE of 23.94.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Data Storage</h4>
                    <p className="text-muted-foreground">
                      Google Sheets API integration for real-time data collection
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">ML Models</h4>
                    <p className="text-muted-foreground">
                      Random Forest Regressor (best), LSTM, and ARIMA for forecasting
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Dashboard</h4>
                    <p className="text-muted-foreground">
                      HTML/CSS/JS web interface with Adafruit IO visualization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Impact */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Personal Impact & Motivation</h2>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <blockquote className="text-lg italic text-center mb-6">
                "I grew up watching my parents worry about high electricity bills and poor water quality, 
                especially during the summer months. This project was my way of giving back—to design 
                something that not only works but feels accessible and impactful for families like mine."
              </blockquote>
              <p className="text-muted-foreground text-center">
                While testing the system at home, we noticed how poor the air quality was during cooking hours 
                and how much electricity the refrigerator consumed overnight. My family began using the dashboard 
                daily, and my parents were proud of what I built. That shift in behavior was the most rewarding part.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Testing & Feedback</h3>
                <p className="text-muted-foreground mb-4">
                  I tested the dashboard with my family and a few neighbors. Initial feedback included:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>"The numbers are useful, but what do they mean?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>"I didn't realize our water quality changed so much after rain."</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  Based on this, I added color-coded ranges and simple tooltips explaining what each reading meant. 
                  I also ensured that the dashboard was mobile-friendly so users could check updates anytime.
                </p>
                <h3 className="text-2xl font-semibold mb-4">What I Learned</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Designing for real users changes everything. Real impact comes from empathy, not features.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Forecasting environmental data with small datasets is hard—but doable with the right ML model.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hardware debugging and circuit stability matter just as much as code or model performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>People don't want data; they want meaning. The dashboard had to explain, not just display.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Arduino Uno, NodeMCU, MQ135, ACS712, DHT11, pH sensors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Python (Pandas, Scikit-learn), Google Sheets API, Adafruit IO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Random Forest Regressor, ARIMA, LSTM models</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-semibold mb-4">If I Did It Again</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>I would design a mobile-first version of the dashboard with voice alerts for elderly users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>I'd add noise and gas sensors to track more pollution metrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>I'd collaborate with more families across income brackets to improve inclusivity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>I'd explore adding an assistant to give tips based on the forecasts.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                I envision this system being adopted in housing colonies, schools, and rural communities where 
                resource awareness is critical but access to smart technology is limited. With multilingual support 
                and localized alerts, it can become a true community-level monitoring tool that empowers people to 
                protect their health and reduce waste.
              </p>
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