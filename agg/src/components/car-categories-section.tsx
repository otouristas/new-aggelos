'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CarCategory {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  models: string[];
  priceFrom: string;
  icon: string;
}

const carCategories: CarCategory[] = [
  {
    id: 'economy',
    name: 'Economy',
    image: '/economy.png',
    description: 'Perfect for daily commuting',
    features: ['Petrol', '5 Doors', 'Manual'],
    models: ['Fiat Panda', 'Peugeot 108', 'Citroen C1'],
    priceFrom: '€25/day',
    icon: '/economy.png'
  },
  {
    id: 'compact',
    name: 'Compact',
    image: '/compact.png',
    description: 'Balance between economy and comfort',
    features: ['Petrol', '5 Doors', 'Automatic'],
    models: ['Opel Corsa', 'Toyota Yaris', 'Volkswagen Polo'],
    priceFrom: '€35/day',
    icon: '/compact.png'
  },
  {
    id: 'sedan',
    name: 'Sedan',
    image: '/sedan.png',
    description: 'Comfort and space for family trips',
    features: ['Petrol', '4 Doors', 'Automatic'],
    models: ['Audi A3', 'BMW 3 Series', 'Mercedes C-Class'],
    priceFrom: '€45/day',
    icon: '/sedan.png'
  },
  {
    id: 'suv',
    name: 'SUV',
    image: '/suv.png',
    description: 'Space and comfort for all your needs',
    features: ['Petrol', '5 Doors', 'Automatic'],
    models: ['Range Rover Evoque', 'Audi Q3', 'Tesla Model Y'],
    priceFrom: '€65/day',
    icon: '/suv.png'
  }
];

export default function CarCategoriesSection() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleFlip = (cardId: string) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(cardId)) {
      newFlippedCards.delete(cardId);
    } else {
      newFlippedCards.add(cardId);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <section id="fleet" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Βρες την κατηγορία που σου ταιριάζει
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Δες αναλυτικά τα χαρακτηριστικά κάθε κατηγορίας και επιλέξτε το αυτοκίνητο 
            που ταιριάζει στις ανάγκες σας.
          </p>
        </div>

        {/* Car Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {carCategories.map((category) => (
            <div
              key={category.id}
              className="relative h-96 perspective-1000 cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => toggleFlip(category.id)}
            >
              {/* Card Inner */}
              <div
                className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                  flippedCards.has(category.id) ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex-grow flex items-center justify-center mb-6">
                    <div className="w-40 h-24 bg-gradient-to-r from-[#2951a0] to-[#2951a0fe] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      <Image
                        src={category.icon}
                        alt={category.name}
                        width={160}
                        height={96}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="text-3xl font-bold text-[#2951a0] mb-6">
                      {category.priceFrom}
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-[#2951a0] font-semibold">
                      <span>View Details</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#2951a0] to-[#2951a0fe] text-white rounded-3xl shadow-xl p-8 flex flex-col"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">
                        {category.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(category.id);
                        }}
                        className="text-white hover:text-[#e7cd01] transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold mb-4 text-[#e7cd01] text-lg">Features:</h4>
                      <ul className="space-y-3">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3 text-base">
                            <svg className="w-5 h-5 text-[#e7cd01] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Models */}
                    <div className="mb-8">
                      <h4 className="font-bold mb-4 text-[#e7cd01] text-lg">Available Models:</h4>
                      <div className="flex flex-wrap gap-3">
                        {category.models.map((model, index) => (
                          <span
                            key={index}
                            className="bg-white/20 text-white text-sm px-3 py-2 rounded-full border border-white/30"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="text-center space-y-4">
                      <div className="text-3xl font-bold text-[#e7cd01]">
                        {category.priceFrom}
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle booking
                        }}
                        className="w-full bg-white text-[#2951a0] py-3 px-6 rounded-xl hover:bg-[#e7cd01] hover:text-white transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Δεν βρήκατε αυτό που ψάχνετε; Επικοινωνήστε μαζί μας για προσφορά.
          </p>
          <button className="btn-primary inline-flex items-center px-8 py-3 bg-[#2951a0] text-white font-semibold rounded-full hover:bg-[#2951a0fe] transition-all duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Επικοινωνία
          </button>
        </div>
      </div>
    </section>
  );
}
