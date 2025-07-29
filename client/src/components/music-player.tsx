import { useState } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useMusic } from '@/contexts/music-context';
import { cn } from '@/lib/utils';

export default function MusicPlayer() {
  const { 
    currentTrack, 
    isPlaying, 
    volume, 
    togglePlayback, 
    setVolume, 
    nextTrack, 
    previousTrack 
  } = useMusic();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!currentTrack) return null;

  return (
    <div className={cn(
      "fixed bottom-32 right-6 z-50 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-xl transition-all duration-300",
      isExpanded ? "w-80 animate-in fade-in-0 zoom-in-95" : "w-16 hover:scale-105"
    )}>
      {isExpanded ? (
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {currentTrack.name}
              </p>
              <p className="text-xs text-muted-foreground capitalize">
                {currentTrack.genre} • Now playing
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="ml-2 h-8 w-8 p-0 hover:bg-muted/50"
            >
              <Music className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={previousTrack}
              className="h-8 w-8 p-0"
            >
              <SkipBack className="h-3 w-3" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlayback}
              className="h-8 w-8 p-0"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTrack}
              className="h-8 w-8 p-0"
            >
              <SkipForward className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={[volume * 100]}
              onValueChange={(value) => setVolume(value[0] / 100)}
              max={100}
              step={1}
              className="flex-1"
            />
          </div>
        </div>
      ) : (
        <div className="p-4 group">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="h-8 w-8 p-0 transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-primary" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          
          {/* Floating hint */}
          <div className="absolute -top-8 right-4 bg-popover text-popover-foreground text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {isPlaying ? 'Music playing' : 'Music paused'}
          </div>
        </div>
      )}
    </div>
  );
}