
import React from 'react';
import { AppView } from '../types';

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <button 
        onClick={() => onNavigate(AppView.ANIMALS)}
        className="group bg-yellow-400 hover:bg-yellow-500 p-8 rounded-3xl shadow-xl transform transition hover:scale-105 flex flex-col items-center justify-center text-center space-y-4"
      >
        <span className="text-8xl group-hover:animate-bounce">🦁</span>
        <h2 className="text-3xl font-bold text-yellow-900">Animals</h2>
        <p className="text-yellow-800 text-lg">Click to meet amazing animals and learn fun facts!</p>
      </button>

      <button 
        onClick={() => onNavigate(AppView.SPACE)}
        className="group bg-indigo-500 hover:bg-indigo-600 p-8 rounded-3xl shadow-xl transform transition hover:scale-105 flex flex-col items-center justify-center text-center space-y-4"
      >
        <span className="text-8xl group-hover:animate-pulse">🪐</span>
        <h2 className="text-3xl font-bold text-white">Space</h2>
        <p className="text-indigo-100 text-lg">Blast off to discover planets in our galaxy!</p>
      </button>

      <button 
        onClick={() => onNavigate(AppView.QUIZ)}
        className="group bg-green-400 hover:bg-green-500 p-8 rounded-3xl shadow-xl transform transition hover:scale-105 flex flex-col items-center justify-center text-center space-y-4"
      >
        <span className="text-8xl group-hover:rotate-12 transition-transform">🏆</span>
        <h2 className="text-3xl font-bold text-green-900">Quiz Time</h2>
        <p className="text-green-800 text-lg">Show off your smarts and win big points!</p>
      </button>
    </div>
  );
};

export default Home;
