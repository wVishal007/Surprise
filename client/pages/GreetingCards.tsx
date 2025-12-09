import { useState } from 'react';
import { useConfig } from '@/hooks/useConfig';
import { Confetti } from '@/components/Confetti';
import { Button } from '@/components/ui/button';

interface CardData {
  id: number;
  title: string;
  emoji: string;
  message: string;
}

export const GreetingCards = () => {
  const { config } = useConfig();
  const [flipped, setFlipped] = useState<number[]>([]);
  const [confetti, setConfetti] = useState(false);

  const cards: CardData[] = [
    {
      id: 1,
      title: 'Thinking of You',
      emoji: '💭',
      message: `Every moment with you feels like a dream, ${config.name}. Your smile lights up my darkest days and reminds me why love is the most beautiful emotion.`,
    },
    {
      id: 2,
      title: 'Forever Grateful',
      emoji: '🙏',
      message: `Thank you for being exactly who you are. Thank you for the laughter, the quiet moments, and the way you make me want to be better.`,
    },
    {
      id: 3,
      title: 'You Are My Sunshine',
      emoji: '☀️',
      message: `On cloudy days when everything seems dark, you are my sunshine. Your warmth, your kindness, your presence—they mean everything to me.`,
    },
    {
      id: 4,
      title: 'My Greatest Blessing',
      emoji: '✨',
      message: `Among all the stars in the sky, you shine the brightest. You are my greatest blessing, my deepest joy, and my forever love.`,
    },
    {
      id: 5,
      title: 'In Your Eyes',
      emoji: '👀',
      message: `In your eyes, I found my home. A place where I can be myself, be loved completely, and know that I am safe with you always.`,
    },
    {
      id: 6,
      title: 'Forever and Always',
      emoji: '💕',
      message: `You are my person, ${config.name}. My forever, my always, my everything. I promise to love you through every season, every challenge, and every joy.`,
    },
  ];

  const toggleFlip = (id: number) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const sendCard = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <Confetti trigger={confetti} />

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose mb-4">
            Greeting Cards
          </h1>
          <p className="text-lg text-foreground/70">
            Click any card to reveal its message ✨
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="h-80 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => toggleFlip(card.id)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped.includes(card.id)
                    ? 'rotateY(180deg)'
                    : 'rotateY(0deg)',
                  transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center border border-white/30 shadow-xl hover:shadow-2xl transition-shadow"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="text-6xl mb-4">{card.emoji}</div>
                  <h3 className="text-2xl font-serif font-bold text-rose text-center">
                    {card.title}
                  </h3>
                  <p className="text-center text-foreground/60 mt-4 text-sm">
                    Click to reveal
                  </p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full bg-gradient-heart rounded-2xl p-8 flex flex-col items-center justify-center border border-white/30 shadow-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <p className="text-white text-center leading-relaxed text-lg">
                    {card.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Send Button */}
        <div className="flex justify-center">
          <Button
            onClick={sendCard}
            className="bg-gradient-heart text-white text-lg px-8 py-6 rounded-full hover:shadow-2xl transition-all hover:scale-105 animate-pulse"
          >
            Send these cards to {config.name} 💌
          </Button>
        </div>
      </div>
    </div>
  );
};
