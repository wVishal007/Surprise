import { useEffect } from 'react';
import { Poem } from '@/hooks/usePoems';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PoemModalProps {
  poem: Poem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PoemModal = ({ poem, isOpen, onClose }: PoemModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !poem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Poem reader"
    >
      <div
        className="relative w-full max-w-2xl mx-4 p-8 bg-gradient-soft backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close poem"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        <h2 className="text-4xl font-serif font-bold text-center mb-8 text-rose">
          {poem.title}
        </h2>

        <div className="space-y-4 mb-8">
          {poem.lines.map((line, idx) => (
            <p
              key={idx}
              className="text-lg text-foreground leading-relaxed text-center animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={onClose}
            className="bg-gradient-heart text-white hover:shadow-lg transition-shadow"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
