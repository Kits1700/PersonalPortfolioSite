import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ambientAudio from '@assets/ambient.mp3';

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.3; // Set to 30% volume for ambient background
    audio.preload = 'auto';

    // Try to autoplay (will be blocked by most browsers until user interaction)
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay blocked, user needs to interact first
        console.log('Autoplay blocked, waiting for user interaction');
      }
    };

    tryAutoplay();

    // Add event listeners for user interaction to enable audio
    const enableAudioOnInteraction = async () => {
      if (!isPlaying && audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Could not start audio:', error);
        }
      }
    };

    // Listen for first user interaction
    document.addEventListener('click', enableAudioOnInteraction, { once: true });
    document.addEventListener('keydown', enableAudioOnInteraction, { once: true });

    return () => {
      document.removeEventListener('click', enableAudioOnInteraction);
      document.removeEventListener('keydown', enableAudioOnInteraction);
    };
  }, [isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio toggle error:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={ambientAudio}
        preload="auto"
        loop
      />
      
      {/* Audio controls - positioned in top right */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border/30 rounded-lg p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="h-8 w-8 p-0 hover:bg-primary/20"
          title={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
        >
          {isPlaying ? (
            <div className="w-3 h-3 bg-primary rounded-sm animate-pulse" />
          ) : (
            <div className="w-3 h-3 bg-muted-foreground rounded-sm" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="h-8 w-8 p-0 hover:bg-primary/20"
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-primary" />
          )}
        </Button>
      </div>
    </>
  );
}