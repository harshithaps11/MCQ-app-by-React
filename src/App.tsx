import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultScreen from './components/ResultScreen';
import { GameState } from './types';
import { Brain } from 'lucide-react';

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isComplete: false,
  });

  const currentQuestion = questions[gameState.currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    if (gameState.answers[gameState.currentQuestionIndex] !== undefined) return;

    const newAnswers = [...gameState.answers];
    newAnswers[gameState.currentQuestionIndex] = answerIndex;

    const newScore = answerIndex === currentQuestion.correctAnswer 
      ? gameState.score + 1 
      : gameState.score;

    setTimeout(() => {
      if (gameState.currentQuestionIndex === questions.length - 1) {
        setGameState({
          ...gameState,
          answers: newAnswers,
          score: newScore,
          isComplete: true,
        });
      } else {
        setGameState({
          ...gameState,
          currentQuestionIndex: gameState.currentQuestionIndex + 1,
          answers: newAnswers,
          score: newScore,
        });
      }
    }, 750);
  };

  const handleRestart = () => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2">
            <Brain className="w-8 h-8 text-emerald-400" />
            <h1 className="text-3xl font-bold text-white">Knowledge Quest</h1>
          </div>
        </div>

        <div className="bg-slate-700 rounded-xl shadow-2xl p-8 border border-slate-600">
          {!gameState.isComplete ? (
            <>
              <ProgressBar
                current={gameState.currentQuestionIndex}
                total={questions.length}
              />
              <AnimatePresence mode="wait">
                <QuestionCard
                  key={currentQuestion.id}
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  selectedAnswer={gameState.answers[gameState.currentQuestionIndex]}
                />
              </AnimatePresence>
            </>
          ) : (
            <ResultScreen
              score={gameState.score}
              totalQuestions={questions.length}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
}