
import React, { useState, useEffect } from 'react';
import { STATIC_QUIZ, ENCOURAGEMENTS } from '../constants';
import { QuizQuestion } from '../types';
import { getNewQuizQuestions } from '../geminiService';

interface QuizSectionProps {
  onBack: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(STATIC_QUIZ);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    const fetchFreshQuiz = async () => {
      setLoading(true);
      const dynamicQuestions = await getNewQuizQuestions();
      if (dynamicQuestions.length > 0) {
        setQuestions(dynamicQuestions);
      }
      setLoading(false);
    };
    fetchFreshQuiz();
  }, []);

  const handleAnswer = (answer: string) => {
    if (feedback) return; // Prevent double clicking

    const isCorrect = answer === questions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("🌟 " + ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]);
      setCelebrating(true);
      setTimeout(() => setCelebrating(false), 2000);
    } else {
      setFeedback("❌ Almost! Keep trying! 💪");
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setFeedback(null);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-20">
        <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-2xl font-bold text-blue-600">Preparing a fun quiz for you...</p>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto text-center space-y-8 p-10 bg-white rounded-3xl shadow-2xl border-8 border-green-400">
        <h2 className="text-6xl font-black text-green-600">You're a Star! ⭐</h2>
        <div className="text-8xl py-4">🏆</div>
        <p className="text-4xl font-bold">Your Score: {score} / {questions.length}</p>
        <div className="space-y-4">
          <button 
            onClick={restartQuiz}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold py-6 rounded-2xl shadow-xl transition transform active:scale-95"
          >
            🔄 Play Again
          </button>
          <button 
            onClick={onBack}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-2xl font-bold py-6 rounded-2xl shadow-xl transition transform active:scale-95"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-8 relative">
      {celebrating && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute text-4xl confetti-anim"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {['✨', '⭐', '🎈', '🎉', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center text-blue-800 font-bold text-xl px-4">
        <span>Question {currentIndex + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden shadow-inner">
        <div 
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-4 border-blue-200">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 leading-tight">
          {currentQ.question}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              disabled={!!feedback}
              className={`text-2xl font-bold py-6 px-4 rounded-2xl transition-all shadow-md transform active:scale-95 border-b-8
                ${feedback && option === currentQ.correctAnswer ? 'bg-green-400 border-green-600 text-white' : ''}
                ${feedback && option !== currentQ.correctAnswer ? 'bg-gray-100 border-gray-300 opacity-50' : 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200 text-yellow-900'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white px-12 py-8 rounded-full shadow-2xl border-8 border-yellow-400 text-4xl font-black animate-bounce whitespace-nowrap">
            {feedback}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
