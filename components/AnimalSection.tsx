
import React, { useState } from 'react';
import { ANIMALS } from '../constants';
import { Animal } from '../types';
import { getAnimalFact } from '../geminiService';

interface AnimalSectionProps {
  onBack: () => void;
}

const AnimalSection: React.FC<AnimalSectionProps> = ({ onBack }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [fact, setFact] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleAnimalClick = async (animal: Animal) => {
    setSelectedAnimal(animal);
    setLoading(true);
    setFact('Thinking of a fun fact...');
    const newFact = await getAnimalFact(animal.name);
    setFact(newFact);
    setLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-2">Wonderful Wild Animals!</h2>
        <p className="text-xl text-gray-600">Tap an animal to hear a secret fact!</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {ANIMALS.map((animal) => (
          <button
            key={animal.id}
            onClick={() => handleAnimalClick(animal)}
            className={`${animal.color} p-6 rounded-2xl shadow-md bounce-on-hover transition-all flex flex-col items-center justify-center border-4 ${selectedAnimal?.id === animal.id ? 'border-orange-500 scale-110 shadow-lg' : 'border-transparent'}`}
          >
            <span className="text-6xl mb-2">{animal.emoji}</span>
            <span className="text-xl font-bold text-gray-800">{animal.name}</span>
          </button>
        ))}
      </div>

      {selectedAnimal && (
        <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-orange-400 max-w-2xl mx-auto transform animate-bounce-in">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{selectedAnimal.emoji}</span>
            <h3 className="text-3xl font-bold text-orange-700">{selectedAnimal.name} Fact:</h3>
          </div>
          <p className={`text-2xl leading-relaxed text-gray-800 ${loading ? 'animate-pulse opacity-50' : ''}`}>
            {fact}
          </p>
          {!loading && (
            <div className="mt-6 flex justify-end">
              <span className="text-4xl">✨</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimalSection;
