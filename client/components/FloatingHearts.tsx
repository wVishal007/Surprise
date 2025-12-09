import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            top: '-10px',
            animationDelay: `${heart.delay}s`,
            animationDuration: '6s',
          }}
        >
          <span className="text-4xl opacity-60">♥️</span>
        </div>
      ))}
    </div>
  );
};
