
export enum AppView {
  HOME = 'home',
  ANIMALS = 'animals',
  SPACE = 'space',
  QUIZ = 'quiz'
}

export interface Animal {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export interface Planet {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}
