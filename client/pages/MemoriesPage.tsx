import { useConfig } from '@/hooks/useConfig';

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
}

export const MemoriesPage = () => {
  const { config } = useConfig();

  const memories: Memory[] = [
    {
      id: 1,
      date: 'January 15',
      title: 'First Meeting',
      emoji: '💫',
      description: 'The day everything changed. The moment I saw you, I knew my life was never going to be the same again.',
    },
    {
      id: 2,
      date: 'March 20',
      title: 'First Date',
      emoji: '🌹',
      description: 'Walking through the park, laughing at silly jokes, and realizing that this was just the beginning of something beautiful.',
    },
    {
      id: 3,
      date: 'May 8',
      title: 'Confessions',
      emoji: '💕',
      description: 'Under the starlight, I told you what my heart had been feeling all along. You smiled, and I knew I was home.',
    },
    {
      id: 4,
      date: 'July 22',
      title: 'Adventure Time',
      emoji: '🌊',
      description: 'Racing down the beach, sharing secrets, and dancing like nobody was watching. Pure joy, pure you.',
    },
    {
      id: 5,
      date: 'September 10',
      title: 'Quiet Moments',
      emoji: '🌙',
      description: 'Sometimes the best moments are the quiet ones. Sitting together, holding hands, needing no words.',
    },
    {
      id: 6,
      date: 'November 30',
      title: 'Forever Decided',
      emoji: '👑',
      description: 'Every day with you makes me more certain that you are my forever. My person. My love.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose mb-4">
            Our Memories
          </h1>
          <p className="text-lg text-foreground/70">
            A timeline of moments that matter
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {memories.map((memory, idx) => (
            <div
              key={memory.id}
              className="mb-8 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-heart flex items-center justify-center text-white text-xl">
                    {memory.emoji}
                  </div>
                  {idx !== memories.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-heart/30 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <p className="text-rose font-semibold text-sm">{memory.date}</p>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {memory.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-16 text-center bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 animate-fade-in">
          <p className="text-xl text-foreground/80 leading-relaxed">
            Every moment with you is a memory I treasure. With you, I've learned that love 
            isn't just a feeling—it's a journey, a choice, and a promise I make every single day.
          </p>
          <p className="text-2xl mt-6 font-serif text-rose">
            I love you, {config.name} ❤️
          </p>
        </div>
      </div>
    </div>
  );
};
