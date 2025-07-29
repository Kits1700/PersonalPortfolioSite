import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward, Music, Headphones, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useMusic } from '@/contexts/music-context';
import { cn } from '@/lib/utils';

const vibes = [
  {
    id: 'indie',
    name: 'Indie',
    description: 'Alternative vibes',
    icon: Headphones,
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400'
  },
  {
    id: 'carnatic',
    name: 'Carnatic',
    description: 'Traditional sounds',
    icon: Music,
    color: 'from-orange-500/20 to-red-500/20',
    accent: 'text-orange-400'
  },
  {
    id: 'mellow',
    name: 'Mellow',
    description: 'Calm & peaceful',
    icon: Volume2,
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'text-blue-400'
  },
  {
    id: 'focus',
    name: 'Focus',
    description: 'Deep work mode',
    icon: Brain,
    color: 'from-green-500/20 to-emerald-500/20',
    accent: 'text-green-400'
  }
];

export default function MusicPlayer() {
  const { 
    currentTrack, 
    selectedVibe,
    isPlaying, 
    volume, 
    setSelectedVibe,
    togglePlayback, 
    setVolume, 
    nextTrack, 
    previousTrack 
  } = useMusic();
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleVibeSelect = (vibeId: string) => {
    setSelectedVibe(vibeId);
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isExpanded]);

  return (
    <div ref={containerRef} className="fixed bottom-32 right-6 z-50">
      {/* Main music button - collapsed state */}
      {!isExpanded && (
        <div className="group">
          <Button
            onClick={() => setIsExpanded(true)}
            variant="outline"
            size="sm"
            className="bg-card/95 backdrop-blur-sm border-border hover:bg-card/90 text-foreground shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 p-0 rounded-full"
          >
            <Music className={cn(
              "w-5 h-5 transition-colors duration-200",
              selectedVibe ? "text-primary animate-pulse" : "text-muted-foreground"
            )} />
          </Button>
          
          <div className="absolute -top-10 right-0 bg-popover text-popover-foreground text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {selectedVibe ? `${vibes.find(v => v.id === selectedVibe)?.name} vibes` : 'Pick your vibe'}
          </div>
        </div>
      )}

      {/* Expanded music player with vibe selector and controls */}
      {isExpanded && (
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-xl p-4 w-80 animate-in fade-in-0 zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Music Controls</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-8 w-8 p-0 hover:bg-muted/50"
            >
              <span className="text-lg">×</span>
            </Button>
          </div>

          {/* Vibe Selector */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-3">Pick your vibe today</h4>
            <div className="grid grid-cols-2 gap-2">
              {vibes.map((vibe) => {
                const Icon = vibe.icon;
                const isSelected = selectedVibe === vibe.id;
                
                return (
                  <button
                    key={vibe.id}
                    onClick={() => handleVibeSelect(vibe.id)}
                    className={cn(
                      "relative p-3 rounded-lg border transition-all duration-200 text-left",
                      "hover:border-primary/50 hover:bg-gradient-to-br",
                      vibe.color,
                      isSelected
                        ? "border-primary bg-gradient-to-br shadow-md"
                        : "border-border bg-background/50"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "p-1.5 rounded-lg",
                        isSelected ? "bg-primary/20" : "bg-muted/50"
                      )}>
                        <Icon className={cn(
                          "w-3 h-3",
                          isSelected ? "text-primary" : vibe.accent
                        )} />
                      </div>
                      <div>
                        <p className={cn(
                          "font-medium text-xs",
                          isSelected ? "text-primary" : "text-foreground"
                        )}>
                          {vibe.name}
                        </p>
                      </div>
                    </div>
                    
                    {isSelected && (
                      <div className="absolute top-1 right-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Music Controls - only show if there's a track */}
          {currentTrack && (
            <>
              <div className="border-t border-border pt-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {currentTrack.name}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {currentTrack.genre} • Now playing
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
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
            </>
          )}

          {/* No vibe selected message */}
          {!selectedVibe && (
            <div className="text-center py-4 text-muted-foreground text-sm">
              Select a vibe above to start the music
            </div>
          )}
        </div>
      )}
    </div>
  );
}