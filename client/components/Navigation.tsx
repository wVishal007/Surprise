import { Link } from 'react-router-dom';
import { useConfig } from '@/hooks/useConfig';
import { Heart } from 'lucide-react';

export const Navigation = () => {
  const { config } = useConfig();

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <Heart className="w-6 h-6 text-rose fill-rose group-hover:scale-110 transition-transform" />
          <span className="text-xl font-serif font-bold text-rose hidden sm:inline">
            For {config.name}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4 flex-wrap justify-center">
          <Link
            to="/"
            className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
          >
            Home
          </Link>
          <Link
            to="/cards"
            className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
          >
            Cards
          </Link>
          <Link
            to="/poems"
            className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
          >
            Poems
          </Link>
          <Link
            to="/memories"
            className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
          >
            Memories
          </Link>
          <Link
            to="/letters"
            className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
          >
            Letters
          </Link>
          <Link
            to="/settings"
            className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};
