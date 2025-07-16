import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';

const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize Web Audio API and start automatically
  useEffect(() => {
    const initAudioContext = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.connect(audioContextRef.current.destination);
        gainNodeRef.current.gain.value = volume;
      }
    };

    // Initialize and start audio on user interaction
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
  }, [volume]);

  // Generate pink noise for natural sound
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

  // Start ambient sound
  const startAmbientSound = () => {
    const audioContext = audioContextRef.current;
    const gainNode = gainNodeRef.current;
    
    if (!audioContext || !gainNode) return;

    // Resume audio context if suspended
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    // Create low-frequency oscillators for ocean-like waves
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

    // Create multiple oscillators for rich ambient sound
    const osc1 = createOscillator(0.1, 'sine', 0.3); // Very low frequency wave
    const osc2 = createOscillator(0.07, 'sine', 0.2); // Even lower frequency
    const osc3 = createOscillator(0.15, 'triangle', 0.1); // Subtle triangle wave
    
    oscillatorsRef.current = [osc1, osc2, osc3];

    // Add pink noise for natural texture
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

    setIsPlaying(true);
  };

  // Stop ambient sound
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

    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  const toggleMute = () => {
    const gainNode = gainNodeRef.current;
    if (!gainNode) return;

    if (isMuted) {
      gainNode.gain.value = volume;
      setIsMuted(false);
    } else {
      gainNode.gain.value = 0;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const gainNode = gainNodeRef.current;
    if (gainNode && !isMuted) {
      gainNode.gain.value = newVolume;
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full hover:bg-accent transition-colors"
          title={isPlaying ? 'Pause ambient sound' : 'Resume ambient sound'}
        >
          {isPlaying ? (
            <Pause size={16} className="text-foreground" />
          ) : (
            <Play size={16} className="text-foreground" />
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-accent transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX size={16} className="text-foreground" />
          ) : (
            <Volume2 size={16} className="text-foreground" />
          )}
        </button>
        
        <input
          type="range"
          min="0"
          max="0.5"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-2 bg-accent rounded-lg appearance-none cursor-pointer"
          title="Volume"
        />
        
        <span className="text-xs text-foreground/70 font-medium flex items-center gap-1">
          {isPlaying && (
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          )}
          {isPlaying ? 'Ocean' : 'Silent'}
        </span>
      </div>
    </div>
  );
};

export default AmbientAudio;