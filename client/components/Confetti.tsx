import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  angle: number;
  distance: number;
  type: string;
}

interface ConfettiProps {
  trigger?: boolean;
}

export const Confetti = ({ trigger = false }: ConfettiProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    setIsActive(true);
    const emojis = ['💕', '🌹', '✨', '💫', '🎀', '💘', '🌸'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: 50,
      delay: Math.random() * 0.1,
      angle: Math.random() * 360,
      distance: Math.random() * 300 + 100,
      type: emojis[Math.floor(Math.random() * emojis.length)],
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const rad = (particle.angle * Math.PI) / 180;
        const x = Math.cos(rad) * particle.distance;
        const y = Math.sin(rad) * particle.distance;

        return (
          <div
            key={particle.id}
            className="absolute text-2xl opacity-0"
            style={{
              left: `${particle.left}%`,
              top: '50%',
              transform: `translate(${x}px, ${y - 150}px) scale(0)`,
              animation: isActive ? `none` : `none`,
              transition: isActive
                ? `all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${particle.delay}s`
                : 'none',
              opacity: isActive ? 1 : 0,
            }}
          >
            {particle.type}
          </div>
        );
      })}
    </div>
  );
};
