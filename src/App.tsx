import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Brain, Lightbulb, Rocket, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import IdeaCard from './components/IdeaCard';
import IdeaDetails from './components/IdeaDetails';
import Hero from './components/Hero';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';

const ideas = [
  {
    id: 1,
    title: "AI-Powered Education Platform",
    description: "Personalized learning paths using artificial intelligence",
    author: "Sarah Chen",
    progress: 75,
    likes: 234,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=500",
    branches: [
      {
        id: "b1",
        title: "K-12 Focus",
        description: "Adapt the platform specifically for primary and secondary education with curriculum alignment",
        potential: 4,
        collaboration: 3,
        feasibility: 5
      },
      {
        id: "b2",
        title: "Corporate Training",
        description: "Extend the platform to corporate learning and development programs",
        potential: 5,
        collaboration: 4,
        feasibility: 4
      },
      {
        id: "b3",
        title: "Language Learning",
        description: "Specialize in adaptive language learning with native speaker integration",
        potential: 4,
        collaboration: 5,
        feasibility: 3
      }
    ]
  },
  {
    id: 2,
    title: "Sustainable Urban Farming",
    description: "Vertical farming solutions for urban environments",
    author: "Marcus Green",
    progress: 60,
    likes: 189,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=500",
    branches: [
      {
        id: "b1",
        title: "Residential Integration",
        description: "Develop compact systems for apartment buildings and homes",
        potential: 5,
        collaboration: 3,
        feasibility: 4
      },
      {
        id: "b2",
        title: "Commercial Scale",
        description: "Scale up for restaurants and local grocery stores",
        potential: 4,
        collaboration: 4,
        feasibility: 3
      },
      {
        id: "b3",
        title: "Community Gardens",
        description: "Create shared spaces for neighborhood farming",
        potential: 3,
        collaboration: 5,
        feasibility: 5
      }
    ]
  },
  {
    id: 3,
    title: "Smart Home Health Monitor",
    description: "IoT-based health tracking integrated into living spaces",
    author: "Lisa Kumar",
    progress: 85,
    likes: 312,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=500",
    branches: [
      {
        id: "b1",
        title: "Elderly Care",
        description: "Focus on monitoring and assistance for senior citizens",
        potential: 5,
        collaboration: 4,
        feasibility: 4
      },
      {
        id: "b2",
        title: "Family Wellness",
        description: "Track health metrics for the whole family",
        potential: 4,
        collaboration: 3,
        feasibility: 5
      },
      {
        id: "b3",
        title: "Medical Integration",
        description: "Connect with healthcare providers for real-time monitoring",
        potential: 5,
        collaboration: 5,
        feasibility: 3
      }
    ]
  }
];

const HomePage = ({ t }: { t: any }) => {
  return (
    <>
      <Hero t={t.hero} />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t.main.featuredIdeas}</h2>
            <div className="relative">
              <input
                type="text"
                placeholder={t.main.searchPlaceholder}
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideas.map(idea => (
              <IdeaCard key={idea.id} {...idea} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.main.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.main.submit.title}</h3>
              <p className="text-gray-600">{t.main.submit.desc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.main.develop.title}</h3>
              <p className="text-gray-600">{t.main.develop.desc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.main.launch.title}</h3>
              <p className="text-gray-600">{t.main.launch.desc}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar language={language} toggleLanguage={toggleLanguage} t={t.nav} />
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/idea/:id" element={<IdeaDetails {...ideas[0]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;