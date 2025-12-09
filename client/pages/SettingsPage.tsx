import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Palette, Music, Zap } from 'lucide-react';

type Theme = 'light' | 'dark' | 'pastel';

export const SettingsPage = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    const savedAnimations = localStorage.getItem('animations') !== 'false';
    const savedMusic = localStorage.getItem('music') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as 'sm' | 'md' | 'lg') || 'md';

    setTheme(savedTheme);
    setAnimationsEnabled(savedAnimations);
    setMusicEnabled(savedMusic);
    setFontSize(savedFontSize);

    applyTheme(savedTheme);
    applyAnimations(savedAnimations);
    applyFontSize(savedFontSize);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark', 'pastel');
    html.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const applyAnimations = (enabled: boolean) => {
    if (!enabled) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }
    localStorage.setItem('animations', enabled ? 'true' : 'false');
  };

  const applyFontSize = (size: 'sm' | 'md' | 'lg') => {
    const html = document.documentElement;
    html.classList.remove('text-sm', 'text-md', 'text-lg');
    if (size === 'sm') html.style.fontSize = '14px';
    else if (size === 'lg') html.style.fontSize = '18px';
    else html.style.fontSize = '16px';
    localStorage.setItem('fontSize', size);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const handleAnimationsToggle = () => {
    const newState = !animationsEnabled;
    setAnimationsEnabled(newState);
    applyAnimations(newState);
  };

  const handleMusicToggle = () => {
    setMusicEnabled(!musicEnabled);
    localStorage.setItem('music', !musicEnabled ? 'true' : 'false');
  };

  const handleFontSizeChange = (size: 'sm' | 'md' | 'lg') => {
    setFontSize(size);
    applyFontSize(size);
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose mb-4">
            Settings
          </h1>
          <p className="text-lg text-foreground/70">
            Customize your experience
          </p>
        </div>

        {/* Settings Cards */}
        <div className="space-y-6">
          {/* Theme Settings */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-rose" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Theme</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  theme === 'light'
                    ? 'border-rose bg-rose/10'
                    : 'border-border hover:border-rose/50'
                }`}
              >
                <Sun className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-semibold">Light</span>
              </button>

              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  theme === 'dark'
                    ? 'border-rose bg-rose/10'
                    : 'border-border hover:border-rose/50'
                }`}
              >
                <Moon className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-semibold">Dark</span>
              </button>

              <button
                onClick={() => handleThemeChange('pastel')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  theme === 'pastel'
                    ? 'border-rose bg-rose/10'
                    : 'border-border hover:border-rose/50'
                }`}
              >
                <Palette className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-semibold">Pastel</span>
              </button>
            </div>
          </div>

          {/* Animation Settings */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-rose" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Animations</h2>
            </div>

            <button
              onClick={handleAnimationsToggle}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                animationsEnabled
                  ? 'border-rose bg-rose/10'
                  : 'border-border hover:border-rose/50'
              }`}
            >
              <span className="font-semibold">
                {animationsEnabled ? '✨ Animations Enabled' : '⏸️ Animations Disabled'}
              </span>
              <div className={`w-12 h-7 rounded-full transition-colors ${
                animationsEnabled ? 'bg-rose' : 'bg-muted'
              }`}></div>
            </button>
          </div>

          {/* Font Size Settings */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Font Size</h2>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleFontSizeChange('sm')}
                className={`p-4 rounded-lg border-2 transition-all text-sm ${
                  fontSize === 'sm'
                    ? 'border-rose bg-rose/10'
                    : 'border-border hover:border-rose/50'
                }`}
              >
                <span className="font-semibold">Small</span>
              </button>

              <button
                onClick={() => handleFontSizeChange('md')}
                className={`p-4 rounded-lg border-2 transition-all text-base ${
                  fontSize === 'md'
                    ? 'border-rose bg-rose/10'
                    : 'border-border hover:border-rose/50'
                }`}
              >
                <span className="font-semibold">Medium</span>
              </button>

              <button
                onClick={() => handleFontSizeChange('lg')}
                className={`p-4 rounded-lg border-2 transition-all text-lg ${
                  fontSize === 'lg'
                    ? 'border-rose bg-rose/10'
                    : 'border-border hover:border-rose/50'
                }`}
              >
                <span className="font-semibold">Large</span>
              </button>
            </div>
          </div>

          {/* Music Settings */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-rose" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Background Music</h2>
            </div>

            <button
              onClick={handleMusicToggle}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                musicEnabled
                  ? 'border-rose bg-rose/10'
                  : 'border-border hover:border-rose/50'
              }`}
            >
              <span className="font-semibold">
                {musicEnabled ? '🎵 Music On' : '🔇 Music Off'}
              </span>
              <div className={`w-12 h-7 rounded-full transition-colors ${
                musicEnabled ? 'bg-rose' : 'bg-muted'
              }`}></div>
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 text-center animate-fade-in">
          <p className="text-foreground/70">
            All your preferences are saved locally. This website loads no tracking scripts and respects your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};
