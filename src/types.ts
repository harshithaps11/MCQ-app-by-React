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
}