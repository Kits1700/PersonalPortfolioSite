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
              Smart Environmental Monitoring System
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8">
              Leveraging IoT and Machine Learning for Sustainable Resource Management
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                IoT & Embedded Systems
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Cloud Computing
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-sm font-medium">
                Published Research
              </span>
            </div>
            <div className="text-center mb-8">
              <p className="text-foreground font-medium">
                Published at 2023 IEEE 8th International Conference for Convergence in Technology (I2CT), Pune, India
              </p>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="bg-card/30 rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <p className="text-foreground font-medium">Smart Environmental Monitoring Dashboard</p>
                  <p className="text-foreground/70 text-sm">Real-time IoT system visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Project Overview</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    In response to escalating global challenges of urbanization, resource depletion, and environmental pollution, 
                    I developed a comprehensive smart monitoring system that integrates IoT sensors with advanced Machine Learning 
                    algorithms. This system provides real-time monitoring and forecasting of electricity consumption, water quality, 
                    and air quality, enabling users to make informed decisions about their environmental impact and resource consumption.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">Duration: 6 months research & development</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">Team: Solo project</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">Role: IoT System Designer & ML Researcher</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-10 border border-border space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">The Problem</h3>
                  <p className="text-foreground mb-6 leading-relaxed">
                    Rapid urbanization and industrialization have led to critical environmental quality degradation and 
                    unsustainable resource consumption:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Declining Quality</h4>
                        <p className="text-foreground/80">Air and water quality deteriorating due to pollution</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Resource Depletion</h4>
                        <p className="text-foreground/80">Inefficient consumption of electrical energy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Inefficient Systems</h4>
                        <p className="text-foreground/80">Manual monitoring prone to errors with no predictive capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Fragmented Solutions</h4>
                        <p className="text-foreground/80">Existing systems focus on single resources, not holistic monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Solution Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-foreground">Real-time monitoring of electricity, water quality (pH, turbidity, temperature), and air quality (NOx, NH3, CO2)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-foreground">Machine Learning forecasting for proactive environmental management</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-foreground">Affordable IoT hardware mimicking smart meter functionality at lower cost</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-foreground">Integrated dashboard with real-time alerts and predictive analytics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Technical Architecture</h2>
            
            {/* Architecture Diagram Placeholder */}
            <div className="bg-card/30 rounded-2xl p-12 border border-border/50 mb-16">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏗️</div>
                  <p className="text-foreground font-semibold text-xl mb-2">System Architecture Diagram</p>
                  <p className="text-foreground/70 text-base">IoT Sensors → Arduino → NodeMCU → Cloud Dashboard</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <Wifi className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Sensor Network</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Arduino Uno + NodeMCU collecting data from MQ135, ACS712, DHT11, pH sensors
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Cpu className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Data Processing</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Python scripts for data cleaning, transformation, and ML model training
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                  <BarChart3 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Dashboard</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Web application with Google Sheets API and Adafruit IO integration
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors">
                  <Shield className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Machine Learning</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Random Forest Regressor for 7-day air and water quality forecasting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Implementation Details</h2>
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-10">
                <h3 className="text-3xl font-semibold mb-8 text-foreground text-center">Hardware Development</h3>
                <p className="text-lg text-foreground mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                  The system architecture integrates multiple sensors with Arduino Uno as the central processing unit and 
                  NodeMCU ESP8266 for Wi-Fi connectivity. The hardware design enables simultaneous monitoring of electricity 
                  consumption, air quality parameters (CO2, NOx, NH3), and water quality metrics (pH, turbidity, temperature).
                </p>
                
                {/* Hardware Setup Image Placeholder */}
                <div className="bg-card/30 rounded-xl p-8 border border-border/50 mb-8">
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl h-56 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔌</div>
                      <p className="text-foreground font-semibold text-xl mb-2">IoT Hardware Setup</p>
                      <p className="text-foreground/70 text-base">Arduino Uno + NodeMCU + Sensor Array</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-card/30 rounded-xl">
                    <h4 className="font-semibold mb-4 text-primary text-lg">Electricity Monitoring</h4>
                    <p className="text-foreground leading-relaxed">
                      ACS712 current sensor for real-time amperage measurement and consumption analysis
                    </p>
                  </div>
                  <div className="text-center p-6 bg-card/30 rounded-xl">
                    <h4 className="font-semibold mb-4 text-primary text-lg">Air Quality Sensing</h4>
                    <p className="text-foreground leading-relaxed">
                      MQ135 gas sensor for detecting CO2, NOx, and ammonia with PPM conversion
                    </p>
                  </div>
                  <div className="text-center p-6 bg-card/30 rounded-xl">
                    <h4 className="font-semibold mb-4 text-primary text-lg">Water Quality Analysis</h4>
                    <p className="text-foreground leading-relaxed">
                      pH sensors, turbidity measurement, and DHT11 for temperature monitoring
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-10">
                <h3 className="text-3xl font-semibold mb-8 text-foreground text-center">Machine Learning & Data Pipeline</h3>
                <p className="text-lg text-foreground mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                  The system integrates real-time IoT data with advanced ML algorithms for environmental forecasting. 
                  Data flows from Arduino sensors through NodeMCU Wi-Fi to Google Sheets and Adafruit IO dashboards. 
                  Python handles data cleaning (PPM/NTU conversion, NaN handling) and ML model training on 400+ entries.
                </p>
                
                {/* Dashboard Visualization Placeholder */}
                <div className="bg-card/30 rounded-xl p-8 border border-border/50 mb-8">
                  <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl h-56 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-3">📊</div>
                      <p className="text-foreground font-semibold text-xl mb-2">Real-time Environmental Dashboard</p>
                      <p className="text-foreground/70 text-base">Google Sheets API + Adafruit IO Integration</p>
                    </div>
                  </div>
                </div>
                
                {/* ML Model Performance Comparison */}
                <div className="bg-background/80 rounded-xl p-8 mb-8">
                  <h4 className="font-semibold mb-6 text-foreground text-xl text-center">Machine Learning Model Performance (MAE Comparison)</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-3">15.53</div>
                      <div className="text-base text-foreground font-semibold mb-1">Random Forest</div>
                      <div className="text-sm text-foreground/70">Best Performance</div>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-secondary mb-3">38.34</div>
                      <div className="text-base text-foreground font-semibold mb-1">ARIMA</div>
                      <div className="text-sm text-foreground/70">Statistical Model</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent mb-3">41.46</div>
                      <div className="text-base text-foreground font-semibold mb-1">LSTM</div>
                      <div className="text-sm text-foreground/70">Neural Network</div>
                    </div>
                  </div>
                  <p className="text-base text-foreground/80 mt-6 text-center leading-relaxed">
                    Random Forest Regressor achieved the lowest Mean Absolute Error, demonstrating superior accuracy 
                    for environmental forecasting with limited datasets.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-card/30 rounded-xl">
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Data Storage</h4>
                    <p className="text-foreground leading-relaxed">
                      Google Sheets API for dynamic dataset with real-time sensor values
                    </p>
                  </div>
                  <div className="text-center p-6 bg-card/30 rounded-xl">
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Model Training</h4>
                    <p className="text-foreground leading-relaxed">
                      Python libraries (Pandas, Scikit-learn) for data processing and ML implementation
                    </p>
                  </div>
                  <div className="text-center p-6 bg-card/30 rounded-xl">
                    <h4 className="font-semibold mb-4 text-secondary text-lg">Real-time Performance</h4>
                    <p className="text-foreground leading-relaxed">
                      0.5-second latency from sensor reading to dashboard display
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
                <h3 className="text-2xl font-semibold mb-4 text-foreground">System Validation & Research Impact</h3>
                <p className="text-foreground mb-4">
                  The system underwent comprehensive testing with real-world deployment scenarios. Key validation metrics included:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Response Time:</strong> 0.5-second latency from sensor reading to dashboard display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Accuracy:</strong> Random Forest achieved 15.53 MAE, outperforming LSTM and ARIMA models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Scalability:</strong> Successfully processed 400+ environmental monitoring entries</span>
                  </li>
                </ul>
                <p className="text-foreground mb-6">
                  The research contribution was recognized through publication at the IEEE I2CT 2023 conference, 
                  demonstrating the system's effectiveness in real-world environmental monitoring applications.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Research Insights</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Random Forest Regressors excel at environmental forecasting with limited datasets compared to deep learning approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Real-time IoT monitoring systems can achieve sub-second response times with proper hardware optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrated environmental monitoring provides more comprehensive insights than single-parameter systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cloud-based data storage and processing enables scalable environmental monitoring solutions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Tools & Technologies</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Arduino Uno, NodeMCU ESP8266, MQ135, ACS712, DHT11, pH sensors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Python (Pandas, Scikit-learn), Google Sheets API, Adafruit IO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Random Forest Regressor, ARIMA, LSTM models for forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Future Research Directions</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement edge computing with microcontrollers for reduced latency and offline capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrate additional sensors for noise pollution, PM2.5, and volatile organic compounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop federated learning models for privacy-preserving collaborative environmental monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create adaptive alert systems with personalized thresholds based on user behavior patterns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Scalability & Impact Vision</h3>
              <p className="text-foreground">
                This research demonstrates the potential for affordable IoT solutions in environmental monitoring. 
                Future deployments could scale to smart city networks, providing comprehensive environmental data 
                for urban planning and public health initiatives. The system's cost-effectiveness and modular design 
                make it suitable for implementation in developing regions where environmental monitoring infrastructure 
                is limited but critically needed.
              </p>
            </div>
            
            {/* Research Results & Impact */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Research Results & IEEE Publication</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-background/80 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-foreground">Key Research Findings</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Achieved 0.5-second latency from sensor reading to dashboard display</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Random Forest Regressor outperformed LSTM and ARIMA for environmental forecasting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Demonstrated cost-effective alternative to expensive commercial smart monitoring systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrated monitoring of electricity, water quality, and air quality in single system</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background/80 rounded-xl p-6">
                  <h4 className="font-semibold mb-4 text-foreground">Technical Specifications</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Hardware:</strong> Arduino Uno, NodeMCU, ACS712, MQ135, DHT11, pH sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Cloud Integration:</strong> Google Sheets API, Adafruit IO Dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>ML Framework:</strong> Python with Pandas, Scikit-learn for data processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Dataset:</strong> 400+ real-time environmental monitoring entries</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-foreground font-medium mb-2">
                  Published at IEEE 8th International Conference for Convergence in Technology (I2CT), 2023
                </p>
                <p className="text-foreground/70">
                  Contributing to the global knowledge base on sustainable IoT solutions for environmental monitoring
                </p>
              </div>
            </div>
            
            {/* Performance Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card/30 rounded-2xl">
                <div className="text-5xl font-bold text-primary mb-4">0.5s</div>
                <div className="text-xl font-semibold mb-3 text-foreground">Response Time</div>
                <p className="text-foreground/80 leading-relaxed">Sensor to dashboard latency</p>
              </div>
              <div className="text-center p-8 bg-card/30 rounded-2xl">
                <div className="text-5xl font-bold text-secondary mb-4">15.53</div>
                <div className="text-xl font-semibold mb-3 text-foreground">Best MAE Score</div>
                <p className="text-foreground/80 leading-relaxed">Random Forest model accuracy</p>
              </div>
              <div className="text-center p-8 bg-card/30 rounded-2xl">
                <div className="text-5xl font-bold text-accent mb-4">400+</div>
                <div className="text-xl font-semibold mb-3 text-foreground">Training Dataset</div>
                <p className="text-foreground/80 leading-relaxed">Environmental monitoring entries</p>
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