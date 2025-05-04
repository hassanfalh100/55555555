import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ChevronLeft, Calendar } from 'lucide-react';
import { formatDate } from '../../utils/formatters';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { articles, categories } = useContent();
  
  const article = articles.find(a => a.slug === id);
  const category = article ? categories.find(c => c.id === article.categoryId) : null;

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/articles"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft size={20} />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/articles"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to Articles</span>
        </Link>

        {article.image && (
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
            {category && (
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                {category.name}
              </span>
            )}
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(article.createdAt)}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;