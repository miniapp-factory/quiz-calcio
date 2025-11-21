'use client';
import { useState } from 'react';

export default function Game() {
  const [score, setScore] = useState(0);
  const [emoji, setEmoji] = useState<string | null>(null);

  const handleTry = () => {
    const emojis = ['👾', '😀', '🐱', '🍕', '🚀'];
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(random);
    if (random === '👾') {
      setScore(score + 1);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 gap-4">
      <h1 className="text-2xl font-bold">Score: {score}</h1>
      <div className="text-6xl mb-4">👾</div>
      <button
        onClick={handleTry}
        className="px-4 py-2 bg-white rounded shadow"
      >
        TRY
      </button>
      {emoji && <div className="text-6xl mt-4">{emoji}</div>}
    </main>
  );
}
