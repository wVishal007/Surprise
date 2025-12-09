import { useConfig } from '@/hooks/useConfig';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const { config } = useConfig();

  return (
    <footer className="bg-background/50 backdrop-blur-xl border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <span className="text-lg font-serif text-foreground">
              Made for {config.name} with love ❤️
            </span>
          </div>
          <p className="text-sm text-foreground/60">
            A digital love letter crafted with care and tenderness
          </p>
          <p className="text-xs text-foreground/40">
            © 2024 • This website respects your privacy • All saved data is stored locally
          </p>
        </div>
      </div>
    </footer>
  );
};
