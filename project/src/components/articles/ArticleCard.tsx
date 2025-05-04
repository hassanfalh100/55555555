import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Article } from '../../models/types';
import { useContent } from '../../contexts/ContentContext';
import { formatDate } from '../../utils/formatters';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, compact = false }) => {
  const { categories } = useContent();
  const category = categories.find(c => c.id === article.categoryId);

  return compact ? (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
      <Link to={`/articles/${article.slug}`}>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600">
              {article.title}
            </h3>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(article.createdAt)}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
        </div>
      </Link>
    </div>
  ) : (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
      <Link to={`/articles/${article.slug}`}>
        {article.image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          {category && (
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-800 mb-3">
              {category.name}
            </span>
          )}
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-primary-600">
            {article.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(article.createdAt)}</span>
          </div>
          <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
          <div className="mt-4 text-primary-600 font-medium hover:text-primary-700">
            Read More
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;