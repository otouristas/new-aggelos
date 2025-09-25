'use client';

import { useState } from 'react';

interface Feature {
  id: string;
  title: string;
  titleHighlight: string;
  icon: string;
  question: string;
  answer: string;
}

const features: Feature[] = [
  {
    id: 'flexibility',
    title: 'Absolute',
    titleHighlight: 'Flexibility',
    icon: 'flexibility',
    question: 'Need a car for a short period?',
    answer: 'Rental duration from 1 day to as long as you need. You can change car category according to your needs.'
  },
  {
    id: 'free-cancellation',
    title: 'Free',
    titleHighlight: 'Cancellation',
    icon: 'cancellation',
    question: 'Changed your mind?',
    answer: 'Cancel your booking online through your account at any time, without penalties or charges.'
  },
  {
    id: 'online',
    title: '100%',
    titleHighlight: 'Online',
    icon: 'online',
    question: 'With AGGELOS Rentals, booking and management are exclusively online.',
    answer: 'From car selection to payment and booking management, everything is done exclusively online with a few simple steps.'
  },
  {
    id: 'no-down-payment',
    title: 'No',
    titleHighlight: 'Down Payment',
    icon: 'payment',
    question: 'Pay only when you pick up the car.',
    answer: 'No down payment or deposit required. You pay the rental only when you receive the car.'
  }
];

export default function FeaturesSection() {
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  const toggleFeature = (featureId: string) => {
    setOpenFeature(openFeature === featureId ? null : featureId);
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Τι κάνει την <span className="gradient-text">AGGELOS Rentals</span> να ξεχωρίζει;
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Μόνο με την AGGELOS Rentals, έχεις αυτοκίνητο για όσο χρειάζεσαι, 
                με 100% online διαδικασία και διαφανή τιμολόγηση.
                <br /><br />
                Ακυρώνεις οποιαδήποτε στιγμή, αλλάζεις κατηγορία αυτοκινήτου 
                ακόμα και κάθε μήνα.
              </p>
            </div>

            {/* Car Image */}
            <div className="relative">
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/car-section.jpg"
                  alt="AGGELOS Rentals Car Fleet in Piraeus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2951a0] rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon === 'flexibility' && (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                          <path fillRule="evenodd" d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14.05 4H15a1 1 0 011 1v10a1 1 0 01-1 1h-.05a2.5 2.5 0 01-4.9 0H10V5a1 1 0 011-1h3.05z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {feature.icon === 'cancellation' && (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {feature.icon === 'online' && (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {feature.icon === 'payment' && (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-xl font-semibold text-gray-900">
                      <span className="text-[#2951a0]">{feature.title}</span>{' '}
                      <span>{feature.titleHighlight}</span>
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openFeature === feature.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFeature === feature.id && (
                  <div className="px-6 pb-6">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[#2951a0]">
                      <p className="font-semibold text-gray-900 mb-2">
                        {feature.question}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
