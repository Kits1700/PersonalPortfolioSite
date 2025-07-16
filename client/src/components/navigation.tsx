import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, Volume2, VolumeX } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.2);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 400);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Audio functions
  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.connect(audioContextRef.current.destination);
      gainNodeRef.current.gain.value = audioVolume;
    }
  };

  const createPinkNoise = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return null;

    const bufferSize = audioContext.sampleRate * 2;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    return buffer;
  };

  const startAmbientSound = () => {
    const audioContext = audioContextRef.current;
    const gainNode = gainNodeRef.current;
    
    if (!audioContext || !gainNode) return;

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const createOscillator = (frequency: number, type: OscillatorType, gain: number) => {
      const oscillator = audioContext.createOscillator();
      const oscGain = audioContext.createGain();
      
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      oscGain.gain.value = gain;
      
      oscillator.connect(oscGain);
      oscGain.connect(gainNode);
      oscillator.start();
      
      return oscillator;
    };

    const osc1 = createOscillator(0.1, 'sine', 0.3);
    const osc2 = createOscillator(0.07, 'sine', 0.2);
    const osc3 = createOscillator(0.15, 'triangle', 0.1);
    
    oscillatorsRef.current = [osc1, osc2, osc3];

    const noiseBuffer = createPinkNoise();
    if (noiseBuffer) {
      const noiseSource = audioContext.createBufferSource();
      const noiseGain = audioContext.createGain();
      
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;
      noiseGain.gain.value = 0.05;
      
      noiseSource.connect(noiseGain);
      noiseGain.connect(gainNode);
      noiseSource.start();
      
      noiseNodeRef.current = noiseSource;
    }

    setIsAudioPlaying(true);
  };

  const stopAmbientSound = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });
    oscillatorsRef.current = [];

    if (noiseNodeRef.current) {
      try {
        noiseNodeRef.current.stop();
      } catch (e) {
        // Source might already be stopped
      }
      noiseNodeRef.current = null;
    }

    setIsAudioPlaying(false);
  };

  const toggleAmbientAudio = () => {
    if (isAudioPlaying) {
      stopAmbientSound();
    } else {
      initAudioContext();
      startAmbientSound();
    }
  };

  // Initialize audio on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      initAudioContext();
      startAmbientSound();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      stopAmbientSound();
    };
  }, [audioVolume]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-background/90 backdrop-blur-sm border-b border-border'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick("#home")}
              className={`text-lg font-semibold transition-all duration-300 hover:text-primary ${
                scrolled ? 'text-foreground' : 'text-foreground/90'
              }`}
            >
              Sai Keerthana Arun
            </button>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(`#${id}`)}
                    className={`relative px-3 py-2 rounded-md transition-all duration-300 group ${
                      activeSection === id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {label}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                ))}
              </div>
              
              {/* Audio Toggle */}
              <button
                onClick={toggleAmbientAudio}
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 group"
                title={isAudioPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
              >
                {isAudioPlaying ? (
                  <Volume2 size={20} className="text-primary" />
                ) : (
                  <VolumeX size={20} className="text-foreground/60 group-hover:text-primary" />
                )}
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Audio Toggle */}
              <button
                onClick={toggleAmbientAudio}
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                title={isAudioPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
              >
                {isAudioPlaying ? (
                  <Volume2 size={20} className="text-primary" />
                ) : (
                  <VolumeX size={20} className="text-foreground/60" />
                )}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slideDown">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(`#${id}`)}
                    className={`px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === id
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5 hover:translate-x-1'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
