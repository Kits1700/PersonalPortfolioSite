import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ambientAudio from '@assets/ambient.mp3';

// Global audio state - persists across component unmounts
let globalAudio: HTMLAudioElement | null = null;
let globalIsPlaying = false;
let globalIsMuted = false;

export default function GlobalAudio() {
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);
  const [isMuted, setIsMuted] = useState(globalIsMuted);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize or reuse global audio
    if (!globalAudio) {
      globalAudio = new Audio(ambientAudio);
      globalAudio.loop = true;
      globalAudio.volume = 0.3;
      globalAudio.preload = 'auto';
      
      // Add event listeners
      globalAudio.addEventListener('play', () => {
        globalIsPlaying = true;
        setIsPlaying(true);
      });
      
      globalAudio.addEventListener('pause', () => {
        globalIsPlaying = false;
        setIsPlaying(false);
      });
    }

    // Sync component state with global state
    setIsPlaying(globalIsPlaying);
    setIsMuted(globalIsMuted);

    // Try to autoplay on first load
    if (!globalIsPlaying) {
      const enableAudioOnInteraction = async () => {
        try {
          if (globalAudio && globalAudio.paused) {
            await globalAudio.play();
          }
        } catch (error) {
          console.log('Could not start audio:', error);
        }
      };

      // Listen for first user interaction
      document.addEventListener('click', enableAudioOnInteraction, { once: true });
      document.addEventListener('keydown', enableAudioOnInteraction, { once: true });

      return () => {
        document.removeEventListener('click', enableAudioOnInteraction);
        document.removeEventListener('keydown', enableAudioOnInteraction);
      };
    }
  }, []);

  const togglePlay = async () => {
    if (!globalAudio) return;

    try {
      if (globalAudio.paused) {
        await globalAudio.play();
      } else {
        globalAudio.pause();
      }
    } catch (error) {
      console.log('Audio toggle error:', error);
    }
  };

  const toggleMute = () => {
    if (!globalAudio) return;

    globalAudio.muted = !globalAudio.muted;
    globalIsMuted = globalAudio.muted;
    setIsMuted(globalIsMuted);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={togglePlay}
        className="h-8 w-8 p-0 hover:bg-primary/20 transition-colors"
        title={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-primary" />
        ) : (
          <Play className="w-4 h-4 text-muted-foreground" />
        )}
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMute}
        className="h-8 w-8 p-0 hover:bg-primary/20 transition-colors"
        title={isMuted ? 'Unmute audio' : 'Mute audio'}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Volume2 className="w-4 h-4 text-primary" />
        )}
      </Button>
    </div>
  );
}