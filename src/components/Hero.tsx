import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  t: {
    badge: string;
    title: string;
    subtitle: string;
    startButton: string;
    exploreButton: string;
  };
}

const Hero = ({ t }: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">{t.badge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t.startButton}
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {t.exploreButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;