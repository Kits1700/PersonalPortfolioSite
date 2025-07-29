import { useState } from 'react';
import { Music, Headphones, Volume2, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

export default function VibeSelector() {
  const { selectedVibe, setSelectedVibe } = useMusic();
  const [isOpen, setIsOpen] = useState(false);

  const handleVibeSelect = (vibeId: string) => {
    setSelectedVibe(vibeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 left-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="bg-card/95 backdrop-blur-sm border-border hover:bg-card/90 text-foreground"
        >
          <Music className="w-4 h-4 mr-2" />
          {selectedVibe ? `${vibes.find(v => v.id === selectedVibe)?.name} vibes` : 'Pick your vibe today'}
        </Button>
      ) : (
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Pick your vibe today</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              ×
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {vibes.map((vibe) => {
              const Icon = vibe.icon;
              const isSelected = selectedVibe === vibe.id;
              
              return (
                <button
                  key={vibe.id}
                  onClick={() => handleVibeSelect(vibe.id)}
                  className={cn(
                    "relative p-4 rounded-lg border transition-all duration-200 text-left",
                    "hover:border-primary/50 hover:bg-gradient-to-br",
                    vibe.color,
                    isSelected
                      ? "border-primary bg-gradient-to-br shadow-md"
                      : "border-border bg-background/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      isSelected ? "bg-primary/20" : "bg-muted/50"
                    )}>
                      <Icon className={cn(
                        "w-4 h-4",
                        isSelected ? "text-primary" : vibe.accent
                      )} />
                    </div>
                    <div>
                      <p className={cn(
                        "font-medium text-sm",
                        isSelected ? "text-primary" : "text-foreground"
                      )}>
                        {vibe.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {vibe.description}
                      </p>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="mt-4 pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Music continues across all pages
            </p>
          </div>
        </div>
      )}
    </div>
  );
}