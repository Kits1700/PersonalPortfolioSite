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

    // Create indie ambient soundscape with warm chord progressions
    const createIndieAmbientLayer = (baseFreq: number, gain: number) => {
      // Create a warm fifth chord (root + perfect fifth)
      const root = createOscillator(baseFreq, 'sine', gain * 0.6);
      const fifth = createOscillator(baseFreq * 1.5, 'sine', gain * 0.3);
      const octave = createOscillator(baseFreq * 2, 'triangle', gain * 0.2);
      
      // Add subtle vibrato for indie warmth
      const lfo = audioContext.createOscillator();
      const lfoGain = audioContext.createGain();
      
      lfo.frequency.value = 0.2; // Slow vibrato
      lfoGain.gain.value = baseFreq * 0.005; // Subtle depth
      
      lfo.connect(lfoGain);
      lfoGain.connect(root.frequency);
      lfo.start();
      
      return [root, fifth, octave, lfo];
    };

    // Create indie ambient layers
    const layer1 = createIndieAmbientLayer(65.4, 0.15); // C2
    const layer2 = createIndieAmbientLayer(82.4, 0.12); // E2
    const layer3 = createIndieAmbientLayer(98.0, 0.10); // G2
    
    // Add subtle breathing/pad effect
    const breathingOsc = createOscillator(0.08, 'sine', 0.25);
    const breathingGain = audioContext.createGain();
    breathingOsc.disconnect();
    breathingOsc.connect(breathingGain);
    breathingGain.connect(gainNode);
    
    // Create breathing effect with gain automation
    const breathingLfo = audioContext.createOscillator();
    const breathingLfoGain = audioContext.createGain();
    breathingLfo.frequency.value = 0.05; // Very slow breathing
    breathingLfoGain.gain.value = 0.1;
    
    breathingLfo.connect(breathingLfoGain);
    breathingLfoGain.connect(breathingGain.gain);
    breathingLfo.start();
    
    // Flatten all oscillators for tracking
    oscillatorsRef.current = [
      ...layer1, 
      ...layer2, 
      ...layer3, 
      breathingOsc, 
      breathingLfo
    ];

    // Create warm vinyl-style noise for indie texture
    const noiseBuffer = createPinkNoise();
    if (noiseBuffer) {
      const noiseSource = audioContext.createBufferSource();
      const noiseGain = audioContext.createGain();
      const noiseFilter = audioContext.createBiquadFilter();
      
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;
      noiseGain.gain.value = 0.02; // Much subtler noise
      
      // Add warm filtering like vinyl
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.value = 1200; // Warm, muffled sound
      noiseFilter.Q.value = 0.7;
      
      noiseSource.connect(noiseGain);
      noiseGain.connect(noiseFilter);
      noiseFilter.connect(gainNode);
      noiseSource.start();
      
      noiseNodeRef.current = noiseSource;
    }

    setIsAudioPlaying(true);
  };

  const stopAmbientSound = () => {
    // Stop all oscillators
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });
    oscillatorsRef.current = [];

    // Stop noise source
    if (noiseNodeRef.current) {
      try {
        noiseNodeRef.current.stop();
        noiseNodeRef.current.disconnect();
      } catch (e) {
        // Source might already be stopped
      }
      noiseNodeRef.current = null;
    }

    // Reset gain to ensure silence
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current?.currentTime || 0);
      setTimeout(() => {
        if (gainNodeRef.current) {
          gainNodeRef.current.gain.setValueAtTime(audioVolume, audioContextRef.current?.currentTime || 0);
        }
      }, 100);
    }

    setIsAudioPlaying(false);
  };

  const toggleAmbientAudio = () => {
    if (isAudioPlaying) {
      stopAmbientSound();
    } else {
      initAudioContext();
      // Small delay to ensure audio context is ready
      setTimeout(() => {
        startAmbientSound();
      }, 50);
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

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
