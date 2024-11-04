import React from 'react';
import { Menu, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  t: {
    logo: string;
    home: string;
    ideasMarket: string;
    myIncubator: string;
    about: string;
    signIn: string;
    getStarted: string;
  };
}

const Navbar = ({ language, toggleLanguage, t }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">{t.logo}</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">{t.home}</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">{t.ideasMarket}</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">{t.myIncubator}</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">{t.about}</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Globe className="h-5 w-5 text-gray-600" />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
              </span>
            </button>
            <button className="hidden md:block px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              {t.signIn}
            </button>
            <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {t.getStarted}
            </button>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div className="hidden md:block">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;