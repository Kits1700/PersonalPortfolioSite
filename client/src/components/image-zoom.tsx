import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageZoom({ src, alt, className }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const openZoom = () => setIsZoomed(true);
  const closeZoom = () => setIsZoomed(false);

  return (
    <>
      {/* Clickable image */}
      <div 
        className={cn(
          "relative group cursor-pointer overflow-hidden rounded-lg",
          className
        )}
        onClick={openZoom}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Zoom indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-full p-2">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Zoomed overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={closeZoom}
            className="absolute top-4 right-4 z-[10000] bg-black/50 hover:bg-black/70 text-white border-white/20"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Zoomed image */}
          <div 
            className="relative max-w-[95vw] max-h-[95vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src} 
              alt={alt} 
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm text-center">
            Click anywhere outside the image to close
          </div>
        </div>
      )}
    </>
  );
}