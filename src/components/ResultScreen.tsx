import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultScreen({ score, totalQuestions, onRestart }: ResultScreenProps) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <div className="mb-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
      <div className="text-6xl font-bold text-emerald-400 mb-4">{Math.round(percentage)}%</div>
      <p className="text-xl text-slate-300 mb-8">
        You got {score} out of {totalQuestions} questions correct
      </p>
      <button
        onClick={onRestart}
        className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg
          hover:bg-emerald-600 transition-colors font-semibold"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Try Again
      </button>
    </motion.div>
  );
}