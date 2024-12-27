import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topicId: string) => void;
}

export default function TopicCard({ topic, onSelect }: TopicCardProps) {
  const Icon = Icons[topic.icon as keyof typeof Icons];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(topic.id)}
      className={`w-full p-6 rounded-xl bg-gradient-to-br ${topic.color} 
        text-white shadow-xl hover:shadow-2xl transition-shadow`}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-white/20 rounded-lg">
          <Icon className="w-8 h-8" />
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
          <p className="text-white/80 text-sm">{topic.description}</p>
        </div>
      </div>
    </motion.button>
  );
}