import { useState, useEffect } from 'react';
import { useConfig } from '@/hooks/useConfig';
import { Button } from '@/components/ui/button';
import { Trash2, Save } from 'lucide-react';

export const LettersPage = () => {
  const { config } = useConfig();
  const [letter, setLetter] = useState('');
  const [savedLetters, setSavedLetters] = useState<Array<{ id: number; text: string; date: string }>>([]);
  const [showSaved, setShowSaved] = useState(false);

  const STORAGE_KEY = 'love-letters';

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSavedLetters(JSON.parse(saved));
    }
  }, []);

  const saveLetter = () => {
    if (!letter.trim()) return;

    const newLetter = {
      id: Date.now(),
      text: letter,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updated = [newLetter, ...savedLetters];
    setSavedLetters(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setLetter('');
  };

  const deleteLetter = (id: number) => {
    const updated = savedLetters.filter((l) => l.id !== id);
    setSavedLetters(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose mb-4">
            Love Letters
          </h1>
          <p className="text-lg text-foreground/70">
            Write your heart out. These letters are saved only for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Writer Section */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-rose mb-4">
                Write a Letter to {config.name}
              </h2>

              <textarea
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                placeholder={`Dear ${config.name},\n\nWrite what's in your heart...`}
                className="w-full h-64 p-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose resize-none"
                aria-label="Letter content"
              />

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={saveLetter}
                  className="bg-gradient-heart text-white hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Letter
                </Button>
                <Button
                  onClick={() => setLetter('')}
                  variant="outline"
                  className="border-border text-foreground hover:bg-foreground/5"
                >
                  Clear
                </Button>
              </div>

              {letter.length > 0 && (
                <p className="text-sm text-foreground/60 mt-4">
                  {letter.length} characters
                </p>
              )}
            </div>
          </div>

          {/* Saved Letters Section */}
          <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="sticky top-20">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
                <button
                  onClick={() => setShowSaved(!showSaved)}
                  className="w-full text-lg font-serif font-bold text-rose mb-4 hover:text-lavender transition-colors"
                >
                  Saved Letters ({savedLetters.length})
                </button>

                {showSaved && (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {savedLetters.length === 0 ? (
                      <p className="text-foreground/60 text-sm italic">
                        No letters saved yet. Write your first one!
                      </p>
                    ) : (
                      savedLetters.map((saved) => (
                        <div
                          key={saved.id}
                          className="bg-background/50 p-3 rounded-lg border border-border/50 hover:border-rose/30 transition-colors"
                        >
                          <p className="text-xs text-foreground/60 mb-2">{saved.date}</p>
                          <p className="text-sm text-foreground line-clamp-3 mb-2">
                            {saved.text}
                          </p>
                          <button
                            onClick={() => deleteLetter(saved.id)}
                            className="text-xs text-destructive hover:text-destructive/80 flex items-center gap-1 transition-colors"
                            aria-label="Delete letter"
                          >
                            <Trash2 className="w-3 h-3" />
                            Delete
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="mt-12 bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 animate-fade-in">
          <h3 className="text-2xl font-serif font-bold text-rose mb-4">
            💭 Letter Writing Inspiration
          </h3>
          <div className="space-y-3 text-foreground/70">
            <p>• What made you fall in love with them?</p>
            <p>• Describe a moment that changed everything for you.</p>
            <p>• What do you admire most about them?</p>
            <p>• How do they make you a better person?</p>
            <p>• What are your dreams together?</p>
            <p>• Simply say what you feel, in your own words.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
