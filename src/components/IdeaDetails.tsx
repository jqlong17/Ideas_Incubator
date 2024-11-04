import React from 'react';
import { ArrowRight, Brain, Star, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { useParams } from 'react-router-dom';

interface BranchPath {
  id: string;
  title: string;
  description: string;
  potential: number;
  collaboration: number;
  feasibility: number;
}

interface IdeaDetailsProps {
  id: number;
  title: string;
  description: string;
  author: string;
  likes: number;
  image: string;
  branches: BranchPath[];
}

const IdeaDetails = ({ title, description, author, likes, image, branches }: IdeaDetailsProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const { id } = useParams();

  console.log('IdeaDetails rendering with id:', id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-64 relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm">{t.ideaDetails.by} {author}</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm">{likes} {t.ideaDetails.likes}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-lg mb-8">{description}</p>
          
          <h2 className="text-2xl font-bold mb-6">{t.ideaDetails.possiblePaths}</h2>
          
          <div className="relative">
            <div className="w-48 h-48 mx-auto bg-blue-600 rounded-full flex items-center justify-center p-4 relative z-10 mb-8">
              <Brain className="w-16 h-16 text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-all cursor-pointer"
                >
                  <h3 className="text-xl font-semibold mb-3">{branch.title}</h3>
                  <p className="text-gray-600 mb-4">{branch.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{t.ideaDetails.potential}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < branch.potential ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{t.ideaDetails.collaboration}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Users
                            key={i}
                            className={`w-4 h-4 ${
                              i < branch.collaboration ? 'text-blue-500' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{t.ideaDetails.feasibility}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <ArrowRight
                            key={i}
                            className={`w-4 h-4 ${
                              i < branch.feasibility ? 'text-green-500' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetails;