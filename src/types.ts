export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  isComplete: boolean;
  selectedTopic: string | null;
  questionCount: number | null;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}