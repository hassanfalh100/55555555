import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, FileText, Download } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';
import ArticleCard from '../../components/articles/ArticleCard';
import HandoutCard from '../../components/handouts/HandoutCard';

const HomePage: React.FC = () => {
  const { articles, handouts, settings } = useContent();
  
  // Get latest published articles and handouts
  const latestArticles = articles
    .filter(article => article.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);
    
  const latestHandouts = handouts
    .filter(handout => handout.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Welcome to {settings.siteName}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Your source for quality educational articles and resources to enhance your learning journey
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/articles"
                className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300"
              >
                <FileText className="mr-2" size={20} />
                Browse Articles
              </Link>
              <Link
                to="/handouts"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Handouts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-800">Latest Articles</h2>
            <Link 
              to="/articles" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              <span>View All</span>
              <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Handouts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-800">Latest Handouts</h2>
            <Link 
              to="/handouts" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              <span>View All</span>
              <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestHandouts.map(handout => (
              <HandoutCard key={handout.id} handout={handout} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                  Ready to enhance your learning?
                </h2>
                <p className="text-gray-100 text-lg">
                  Explore our comprehensive collection of educational resources.
                </p>
              </div>
              <Link
                to="/about"
                className="bg-white text-secondary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300 whitespace-nowrap"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;