import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ArrowLeft } from 'lucide-react';
import { topics } from '../data/topics';

interface QuestionCountSelectorProps {
  topicId: string;
  maxQuestions: number;
  onSelect: (count: number) => void;
  onBack: () => void;
}

export default function QuestionCountSelector({ 
  topicId, 
  maxQuestions, 
  onSelect, 
  onBack 
}: QuestionCountSelectorProps) {
  const topic = topics.find(t => t.id === topicId)!;
  const questionOptions = [5, 10, 15, 20, 25];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-xl mx-auto"
    >
      <button
        onClick={onBack}
        className="mb-8 text-slate-300 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Topics
      </button>

      <div className="bg-slate-700/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-slate-600">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${topic.color}`}>
            <Settings className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Quiz Settings</h2>
        </div>

        <p className="text-slate-300 mb-6">
          How many questions would you like to answer in the {topic.title} quiz?
        </p>

        <div className="grid grid-cols-3 gap-4">
          {questionOptions
            .filter(count => count <= maxQuestions)
            .map((count) => (
              <motion.button
                key={count}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(count)}
                className={`p-4 rounded-lg bg-gradient-to-br ${topic.color} 
                  text-white font-semibold shadow-lg hover:shadow-xl transition-shadow`}
              >
                {count} Questions
              </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(maxQuestions)}
            className={`p-4 rounded-lg bg-gradient-to-br ${topic.color} 
              text-white font-semibold shadow-lg hover:shadow-xl transition-shadow`}
          >
            All ({maxQuestions})
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}