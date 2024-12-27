import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { questionsByTopic } from './data/questionsByTopic';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultScreen from './components/ResultScreen';
import TopicSelection from './components/TopicSelection';
import QuestionCountSelector from './components/QuestionCountSelector';
import { GameState } from './types';

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isComplete: false,
    selectedTopic: null,
    questionCount: null
  });

  const handleTopicSelect = (topicId: string) => {
    setGameState({
      ...gameState,
      selectedTopic: topicId,
      questionCount: null
    });
  };

  const handleQuestionCountSelect = (count: number) => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false,
      selectedTopic: gameState.selectedTopic,
      questionCount: count
    });
  };

  const handleAnswer = (answerIndex: number) => {
    if (!gameState.selectedTopic || !gameState.questionCount || 
        gameState.answers[gameState.currentQuestionIndex] !== undefined) return;

    const currentQuestion = questionsByTopic[gameState.selectedTopic][gameState.currentQuestionIndex];
    const newAnswers = [...gameState.answers];
    newAnswers[gameState.currentQuestionIndex] = answerIndex;

    const newScore = answerIndex === currentQuestion.correctAnswer 
      ? gameState.score + 1 
      : gameState.score;

    setTimeout(() => {
      if (gameState.currentQuestionIndex === gameState.questionCount! - 1) {
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
      selectedTopic: null,
      questionCount: null
    });
  };

  const handleBack = () => {
    setGameState({
      ...gameState,
      selectedTopic: null,
      questionCount: null
    });
  };

  const renderContent = () => {
    if (!gameState.selectedTopic) {
      return <TopicSelection onSelectTopic={handleTopicSelect} />;
    }

    if (!gameState.questionCount) {
      return (
        <QuestionCountSelector
          topicId={gameState.selectedTopic}
          maxQuestions={questionsByTopic[gameState.selectedTopic].length}
          onSelect={handleQuestionCountSelect}
          onBack={handleBack}
        />
      );
    }

    return (
      <motion.div
        key="quiz"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-slate-700/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-slate-600">
          {!gameState.isComplete ? (
            <>
              <ProgressBar
                current={gameState.currentQuestionIndex}
                total={gameState.questionCount}
              />
              <QuestionCard
                key={questionsByTopic[gameState.selectedTopic][gameState.currentQuestionIndex].id}
                question={questionsByTopic[gameState.selectedTopic][gameState.currentQuestionIndex]}
                onAnswer={handleAnswer}
                selectedAnswer={gameState.answers[gameState.currentQuestionIndex]}
              />
            </>
          ) : (
            <ResultScreen
              score={gameState.score}
              totalQuestions={gameState.questionCount}
              onRestart={handleRestart}
            />
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
}