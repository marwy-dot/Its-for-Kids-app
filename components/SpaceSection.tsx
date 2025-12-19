
import React, { useState } from 'react';
import { PLANETS } from '../constants';
import { Planet } from '../types';

interface SpaceSectionProps {
  onBack: () => void;
}

const SpaceSection: React.FC<SpaceSectionProps> = ({ onBack }) => {
  const [activePlanet, setActivePlanet] = useState<Planet | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
      <div className="text-center text-indigo-900">
        <h2 className="text-4xl font-bold mb-2">Space Adventures! 🚀</h2>
        <p className="text-xl">Learn about our magical Solar System neighbors.</p>
      </div>

      <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide px-4 justify-start md:justify-center">
        {PLANETS.map((planet) => (
          <button
            key={planet.id}
            onClick={() => setActivePlanet(planet)}
            className={`flex-shrink-0 w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all transform hover:scale-110 shadow-lg ${planet.color} ${activePlanet?.id === planet.id ? 'ring-8 ring-indigo-300 scale-105' : ''}`}
          >
            <span className="text-6xl">{planet.emoji}</span>
            <span className="text-lg font-bold mt-2 text-indigo-900">{planet.name}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[300px] flex items-center justify-center">
        {activePlanet ? (
          <div className="bg-indigo-900 text-white p-10 rounded-[3rem] shadow-2xl max-w-3xl w-full flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-4 right-8 text-8xl opacity-10 select-none">✨</div>
            <div className={`w-40 h-40 rounded-full flex items-center justify-center text-8xl shadow-inner ${activePlanet.color}`}>
              {activePlanet.emoji}
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-5xl font-bold text-yellow-400">{activePlanet.name}</h3>
              <p className="text-2xl font-medium leading-relaxed italic">"{activePlanet.description}"</p>
              <div className="flex gap-2">
                <span className="bg-indigo-700 px-4 py-2 rounded-full text-sm font-bold">#SpaceExploration</span>
                <span className="bg-indigo-700 px-4 py-2 rounded-full text-sm font-bold">#Planets</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-indigo-400 text-2xl animate-bounce font-bold">
            👆 Tap a planet to zoom in!
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceSection;
