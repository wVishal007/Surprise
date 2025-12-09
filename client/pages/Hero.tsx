import { useConfig } from '@/hooks/useConfig';
import { Typewriter } from '@/components/Typewriter';
import { FloatingHearts } from '@/components/FloatingHearts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { config } = useConfig();

  return (
    <div className="relative min-h-screen bg-gradient-soft overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        {/* Main heading with typewriter effect */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl sm:text-7xl font-serif font-bold text-rose mb-4 animate-fade-in">
            For {config.name},
          </h1>

          <div className="text-2xl sm:text-4xl font-serif text-lavender min-h-16">
            <Typewriter
              text="With all my love ❤️"
              speed={80}
              delay={300}
              className="inline-block"
            />
          </div>

          {/* Decorative line */}
          <div className="flex justify-center gap-2 py-6">
            <div className="w-12 h-0.5 bg-gradient-heart rounded-full"></div>
            <span className="text-2xl">✨</span>
            <div className="w-12 h-0.5 bg-gradient-heart rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A digital love letter crafted with tenderness, filled with poems, memories, and 
            heartfelt words. This space is dedicated to celebrating the beauty and grace that 
            you bring into the world.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link to="/cards">
            <Button className="bg-gradient-heart text-white hover:shadow-lg transition-all hover:scale-105">
              Greeting Cards
            </Button>
          </Link>
          <Link to="/poems">
            <Button
              variant="outline"
              className="border-rose/30 text-rose hover:bg-rose/10"
            >
              Read Poems
            </Button>
          </Link>
          <Link to="/letters">
            <Button
              variant="outline"
              className="border-lavender/30 text-lavender hover:bg-lavender/10"
            >
              Write Letter
            </Button>
          </Link>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="text-3xl">↓</div>
      </div>
    </div>
  );
};
