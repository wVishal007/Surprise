import { useEffect, useState } from 'react';

export interface Poem {
  title: string;
  lines: string[];
}

export const usePoems = () => {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await fetch('/poems.json');
        if (!response.ok) throw new Error('Failed to load poems');
        const data = await response.json();
        setPoems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPoems();
  }, []);

  return { poems, loading, error };
};
