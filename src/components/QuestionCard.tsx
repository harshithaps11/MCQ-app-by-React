import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  selectedAnswer: number | null;
}

export default function QuestionCard({ question, onAnswer, selectedAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl"
    >
      <h2 className="text-2xl font-bold text-white mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-all transform hover:scale-102 ${
              selectedAnswer === index
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-600 hover:bg-slate-500 text-white'
            } shadow-md hover:shadow-lg border border-slate-500`}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}