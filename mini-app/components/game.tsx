'use client';
import { useState } from 'react';

export default function Game() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const handleFire = () => {
    const hit = Math.random() < 0.5; // 50% chance
    if (hit) {
      setScore(score + 1);
      setMessage('HIT! +1 point');
    } else {
      setMessage('MISS! 0 points');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 gap-4">
      <h1 className="text-2xl font-bold">{score}</h1>
      <div className="flex items-center gap-8">
        <span className="text-6xl">🚀</span>
        <button
          onClick={handleFire}
          className="px-4 py-2 bg-white rounded shadow"
        >
          FIRE
        </button>
        <span className="text-6xl">👾</span>
      </div>
      {message && <p className="text-xl">{message}</p>}
    </main>
  );
}
