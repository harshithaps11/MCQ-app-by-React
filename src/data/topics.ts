import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'tech',
    title: 'Technology',
    description: 'Test your knowledge of programming, AI, and digital innovations',
    icon: 'Laptop',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Explore the mysteries of physics, chemistry, and biology',
    icon: 'Atom',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'sports',
    title: 'Sports',
    description: 'Challenge yourself with questions about various sports',
    icon: 'Trophy',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'geography',
    title: 'Geography',
    description: 'Journey through countries, capitals, and landmarks',
    icon: 'Globe',
    color: 'from-purple-500 to-pink-500'
  }
];