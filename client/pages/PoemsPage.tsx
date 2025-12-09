import { useState } from 'react';
import { usePoems, Poem } from '@/hooks/usePoems';
import { PoemModal } from '@/components/PoemModal';
import { BookOpen } from 'lucide-react';

export const PoemsPage = () => {
  const { poems, loading } = usePoems();
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPoem = (poem: Poem) => {
    setSelectedPoem(poem);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-soft flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-rose mx-auto mb-4 animate-spin-slow" />
          <p className="text-xl text-foreground/60">Loading poems...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose mb-4">
            Poetry Collection
          </h1>
          <p className="text-lg text-foreground/70">
            A collection of verses written from the heart
          </p>
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {poems.map((poem, idx) => (
            <div
              key={idx}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => openPoem(poem)}
            >
              <div className="h-full bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:border-rose/50 transition-all hover:shadow-xl hover:-translate-y-2">
                <BookOpen className="w-12 h-12 text-rose mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-bold text-rose mb-4">
                  {poem.title}
                </h3>
                <p className="text-foreground/60 line-clamp-4 leading-relaxed text-sm">
                  {poem.lines.join(' ')}
                </p>
                <div className="mt-6 text-rose font-serif text-lg group-hover:translate-x-2 transition-transform">
                  Read →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative footer */}
        <div className="text-center py-8">
          <p className="text-foreground/60 italic">
            Click any poem to read the complete verses
          </p>
        </div>
      </div>

      {/* Poem Modal */}
      <PoemModal
        poem={selectedPoem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
