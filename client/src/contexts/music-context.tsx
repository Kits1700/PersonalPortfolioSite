import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface MusicTrack {
  id: string;
  name: string;
  url: string;
  genre: string;
}

interface MusicContextType {
  currentTrack: MusicTrack | null;
  selectedVibe: string | null;
  isPlaying: boolean;
  volume: number;
  setSelectedVibe: (vibe: string) => void;
  togglePlayback: () => void;
  setVolume: (volume: number) => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Music tracks for different vibes - using your custom audio files
const musicTracks: Record<string, MusicTrack[]> = {
  indie: [
    {
      id: 'indie-1',
      name: 'Indie Vibes',
      url: '/audio/indie.mp3',
      genre: 'indie'
    }
  ],
  carnatic: [
    {
      id: 'carnatic-1',
      name: 'Carnatic Sounds',
      url: '/audio/carnatic.mp3',
      genre: 'carnatic'
    }
  ],
  mellow: [
    {
      id: 'mellow-1',
      name: 'Mellow Tunes',
      url: '/audio/mellow.mp3',
      genre: 'mellow'
    }
  ],
  focus: [
    {
      id: 'focus-1',
      name: 'Deep Focus',
      url: '/audio/deepfocus.mp3',
      genre: 'focus'
    }
  ]
};

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    const handleEnded = () => {
      nextTrack();
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
      }
    };
  }, []);

  // Load saved vibe from localStorage
  useEffect(() => {
    const savedVibe = localStorage.getItem('selectedVibe');
    if (savedVibe && musicTracks[savedVibe]) {
      setSelectedVibe(savedVibe);
      setCurrentTrack(musicTracks[savedVibe][0]);
    }
  }, []);

  // Update track when vibe changes and auto-play
  useEffect(() => {
    if (selectedVibe && musicTracks[selectedVibe]) {
      const tracks = musicTracks[selectedVibe];
      setCurrentTrack(tracks[0]);
      setCurrentTrackIndex(0);
      localStorage.setItem('selectedVibe', selectedVibe);
      // Auto-play when vibe is selected
      setIsPlaying(true);
    }
  }, [selectedVibe]);

  // Update audio source when track changes
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.url;
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [currentTrack, isPlaying]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayback = () => {
    if (!currentTrack || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (!selectedVibe) return;
    
    const tracks = musicTracks[selectedVibe];
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTrack(tracks[nextIndex]);
  };

  const previousTrack = () => {
    if (!selectedVibe) return;
    
    const tracks = musicTracks[selectedVibe];
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setCurrentTrack(tracks[prevIndex]);
  };

  return (
    <MusicContext.Provider value={{
      currentTrack,
      selectedVibe,
      isPlaying,
      volume,
      setSelectedVibe,
      togglePlayback,
      setVolume,
      nextTrack,
      previousTrack
    }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}