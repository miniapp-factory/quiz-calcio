'use client';
import { useState } from 'react';

type Question = {
  text: string;
  options: { label: string; value: string }[];
  correct: string;
};

const questions: Question[] = [
  {
    text: 'Who won the World Cup in 2006?',
    options: [
      { label: 'A', value: 'Italy' },
      { label: 'B', value: 'France' },
      { label: 'C', value: 'Brazil' },
    ],
    correct: 'Italy',
  },
  {
    text: 'Which club does Haaland play for?',
    options: [
      { label: 'A', value: 'Real Madrid' },
      { label: 'B', value: 'Manchester City' },
      { label: 'C', value: 'PSG' },
    ],
    correct: 'Manchester City',
  },
  {
    text: 'Who wears the number 10 for Argentina?',
    options: [
      { label: 'A', value: 'Messi' },
      { label: 'B', value: 'Di Maria' },
      { label: 'C', value: 'Alvarez' },
    ],
    correct: 'Messi',
  },
  {
    text: 'Who won the Ballon d\'Or in 2023?',
    options: [
      { label: 'A', value: 'Haaland' },
      { label: 'B', value: 'Messi' },
      { label: 'C', value: 'Mbappé' },
    ],
    correct: 'Messi',
  },
  {
    text: 'Which country has won the most World Cups?',
    options: [
      { label: 'A', value: 'Brazil' },
      { label: 'B', value: 'Germany' },
      { label: 'C', value: 'Argentina' },
    ],
    correct: 'Brazil',
  },
];

export default function Game() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState<Question | null>(null);
  const [result, setResult] = useState<string>('');

  const loadRandom = () => {
    const q = questions[Math.floor(Math.random() * questions.length)];
    setCurrent(q);
    setResult('');
  };

  const handleAnswer = (value: string) => {
    if (!current) return;
    if (value === current.correct) {
      setScore(score + 1);
      setResult('Correct! +1 point');
    } else {
      setResult('Wrong! 0 points');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 gap-4 p-4">
      <h1 className="text-2xl font-bold">Score: {score}</h1>
      {current && (
        <>
          <p className="text-xl mb-2">{current.text}</p>
          <div className="flex flex-col gap-2">
            {current.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt.value)}
                className="px-4 py-2 bg-white rounded shadow"
              >
                {opt.label}: {opt.value}
              </button>
            ))}
          </div>
        </>
      )}
      {result && <p className="text-lg mt-4">{result}</p>}
      {result && (
        <button
          onClick={loadRandom}
          className="px-4 py-2 bg-white rounded shadow mt-2"
        >
          Next Question
        </button>
      )}
    </main>
  );
}
