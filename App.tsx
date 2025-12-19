
import React, { useState } from 'react';
import { AppView } from './types';
import Home from './components/Home';
import AnimalSection from './components/AnimalSection';
import SpaceSection from './components/SpaceSection';
import QuizSection from './components/QuizSection';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onNavigate={setCurrentView} />;
      case AppView.ANIMALS:
        return <AnimalSection onBack={() => setCurrentView(AppView.HOME)} />;
      case AppView.SPACE:
        return <SpaceSection onBack={() => setCurrentView(AppView.HOME)} />;
      case AppView.QUIZ:
        return <QuizSection onBack={() => setCurrentView(AppView.HOME)} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <header className="w-full max-w-4xl flex justify-between items-center py-6 mb-8">
        <h1 
          className="text-4xl md:text-5xl font-bold text-blue-600 cursor-pointer drop-shadow-sm"
          onClick={() => setCurrentView(AppView.HOME)}
        >
          🚀 KidExplorer 🐾
        </h1>
        {currentView !== AppView.HOME && (
          <button 
            onClick={() => setCurrentView(AppView.HOME)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform transition active:scale-95 text-xl"
          >
            🏠 Home
          </button>
        )}
      </header>

      <main className="w-full max-w-5xl flex-grow">
        {renderView()}
      </main>

      <footer className="w-full py-8 text-center text-gray-500 font-medium">
        Made with ❤️ for little explorers
      </footer>
    </div>
  );
};

export default App;
