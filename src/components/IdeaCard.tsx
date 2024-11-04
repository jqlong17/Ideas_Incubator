import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IdeaCardProps {
  id: number;
  title: string;
  description: string;
  author: string;
  progress: number;
  likes: number;
  image: string;
}

const IdeaCard = ({ id, title, description, author, progress, likes, image }: IdeaCardProps) => {
  console.log('IdeaCard rendering:', { id, title });
  
  return (
    <Link to={`/idea/${id}`} className="block" onClick={() => console.log('IdeaCard clicked:', id)}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load:', image);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=500';
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">by {author}</span>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm text-gray-500">{likes}</span>
              <MessageCircle className="h-4 w-4 text-blue-500 ml-2" />
              <span className="text-sm text-gray-500">24</span>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {progress}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IdeaCard;