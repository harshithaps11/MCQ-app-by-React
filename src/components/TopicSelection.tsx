import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { topics } from '../data/topics';
import TopicCard from './TopicCard';

interface TopicSelectionProps {
  onSelectTopic: (topicId: string) => void;
}

export default function TopicSelection({ onSelectTopic }: TopicSelectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center space-x-3 mb-4">
          <Brain className="w-12 h-12 text-emerald-400" />
          <h1 className="text-4xl font-bold text-white">Knowledge Quest</h1>
        </div>
        <p className="text-slate-300 text-lg">Choose your preferred topic and test your knowledge!</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {topics.map((topic) => (
          <motion.div key={topic.id} variants={item}>
            <TopicCard topic={topic} onSelect={onSelectTopic} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}