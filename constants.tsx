
import { Animal, Planet, QuizQuestion } from './types';

export const ANIMALS: Animal[] = [
  { id: 'lion', name: 'Lion', emoji: '🦁', color: 'bg-yellow-400' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', color: 'bg-blue-300' },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', color: 'bg-slate-300' },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', color: 'bg-cyan-300' },
  { id: 'panda', name: 'Panda', emoji: '🐼', color: 'bg-gray-100' },
  { id: 'giraffe', name: 'Giraffe', emoji: '🦒', color: 'bg-orange-300' },
  { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', color: 'bg-amber-400' },
  { id: 'monkey', name: 'Monkey', emoji: '🐒', color: 'bg-yellow-600' },
];

export const PLANETS: Planet[] = [
  { id: 'mercury', name: 'Mercury', emoji: '🌑', color: 'bg-gray-400', description: 'Smallest planet and closest to the Sun!' },
  { id: 'venus', name: 'Venus', emoji: '🌕', color: 'bg-orange-400', description: 'The hottest planet in our solar system!' },
  { id: 'earth', name: 'Earth', emoji: '🌍', color: 'bg-blue-500', description: 'Our home! The only planet with life.' },
  { id: 'mars', name: 'Mars', emoji: '🔴', color: 'bg-red-500', description: 'Known as the Red Planet. It has big dust storms!' },
  { id: 'jupiter', name: 'Jupiter', emoji: '🪐', color: 'bg-orange-300', description: 'The biggest planet! It is a gas giant.' },
  { id: 'saturn', name: 'Saturn', emoji: '🪐', color: 'bg-yellow-200', description: 'Famous for its beautiful giant rings!' },
  { id: 'uranus', name: 'Uranus', emoji: '💎', color: 'bg-cyan-200', description: 'An ice giant that spins on its side!' },
  { id: 'neptune', name: 'Neptune', emoji: '🌊', color: 'bg-blue-700', description: 'A cold, dark, and very windy planet!' },
];

export const STATIC_QUIZ: QuizQuestion[] = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    question: "Which animal is the king of the jungle?",
    options: ["Panda", "Elephant", "Lion", "Giraffe"],
    correctAnswer: "Lion"
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: "Jupiter"
  }
];

export const ENCOURAGEMENTS = [
  "Great job!",
  "You're a star!",
  "Amazing!",
  "Fantastic!",
  "Super work!",
  "Wow, you're smart!"
];
