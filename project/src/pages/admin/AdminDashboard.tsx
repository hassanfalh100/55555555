import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  FileUp, 
  Users, 
  BarChart2, 
  TrendingUp,
  Edit,
  Plus 
} from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const AdminDashboard: React.FC = () => {
  const { articles, handouts } = useContent();
  
  const publishedArticles = articles.filter(article => article.published);
  const draftArticles = articles.filter(article => !article.published);
  
  const publishedHandouts = handouts.filter(handout => handout.published);
  const draftHandouts = handouts.filter(handout => !handout.published);
  
  const totalDownloads = handouts.reduce((total, handout) => total + handout.downloadCount, 0);
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard.</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Articles" 
          value={articles.length.toString()} 
          icon={<FileText className="text-blue-500" />} 
          change="+5% from last month"
        />
        <StatCard 
          title="Total Handouts" 
          value={handouts.length.toString()} 
          icon={<FileUp className="text-green-500" />} 
          change="+2% from last month"
        />
        <StatCard 
          title="Total Downloads" 
          value={totalDownloads.toString()}
          icon={<TrendingUp className="text-purple-500" />}
          change="+12% from last month" 
        />
        <StatCard 
          title="Unique Visitors" 
          value="1,254" 
          icon={<Users className="text-amber-500" />} 
          change="+8% from last month"
        />
      </div>
      
      {/* Recent Content & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Articles */}
        <div className="col-span-1 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Articles</h2>
            <Link to="/admin/articles" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-4">
            {articles.slice(0, 3).map(article => (
              <div key={article.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50">
                <div>
                  <h3 className="font-medium text-gray-800">{article.title}</h3>
                  <div className="text-xs text-gray-500 mt-1">
                    {article.published ? (
                      <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Published</span>
                    ) : (
                      <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Draft</span>
                    )}
                  </div>
                </div>
                <Link 
                  to={`/admin/articles/${article.id}`}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded"
                  aria-label="Edit article"
                >
                  <Edit size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <Link 
            to="/admin/articles/new" 
            className="mt-4 flex items-center justify-center w-full py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition duration-200"
          >
            <Plus size={16} className="mr-1" />
            <span>Add New Article</span>
          </Link>
        </div>
        
        {/* Recent Handouts */}
        <div className="col-span-1 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Handouts</h2>
            <Link to="/admin/handouts" className="text-sm text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          
          <div className="space-y-4">
            {handouts.slice(0, 3).map(handout => (
              <div key={handout.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50">
                <div>
                  <h3 className="font-medium text-gray-800">{handout.title}</h3>
                  <div className="text-xs text-gray-500 mt-1">
                    {handout.published ? (
                      <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Published</span>
                    ) : (
                      <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Draft</span>
                    )}
                    <span className="ml-2">{handout.downloadCount} downloads</span>
                  </div>
                </div>
                <Link 
                  to={`/admin/handouts/${handout.id}`}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded"
                  aria-label="Edit handout"
                >
                  <Edit size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <Link 
            to="/admin/handouts/new" 
            className="mt-4 flex items-center justify-center w-full py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition duration-200"
          >
            <Plus size={16} className="mr-1" />
            <span>Add New Handout</span>
          </Link>
        </div>
        
        {/* Quick Stats */}
        <div className="col-span-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Content Overview</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-600 font-medium mb-2">Articles Status</h3>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-primary-500 h-full"
                  style={{ width: `${(publishedArticles.length / Math.max(articles.length, 1)) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-600">
                  <span className="font-medium">{publishedArticles.length}</span> Published
                </span>
                <span className="text-gray-600">
                  <span className="font-medium">{draftArticles.length}</span> Drafts
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-600 font-medium mb-2">Handouts Status</h3>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-secondary-500 h-full"
                  style={{ width: `${(publishedHandouts.length / Math.max(handouts.length, 1)) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-600">
                  <span className="font-medium">{publishedHandouts.length}</span> Published
                </span>
                <span className="text-gray-600">
                  <span className="font-medium">{draftHandouts.length}</span> Drafts
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-600 font-medium mb-2">Most Downloaded</h3>
              {handouts.length > 0 ? (
                <div className="space-y-2">
                  {handouts
                    .sort((a, b) => b.downloadCount - a.downloadCount)
                    .slice(0, 3)
                    .map(handout => (
                      <div 
                        key={handout.id} 
                        className="flex justify-between items-center text-sm p-2 border-b"
                      >
                        <span className="truncate max-w-[70%]">{handout.title}</span>
                        <span className="font-medium">{handout.downloadCount}</span>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No handouts available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
          {change && (
            <p className="text-green-600 text-xs mt-1">{change}</p>
          )}
        </div>
        <div className="rounded-full p-3 bg-gray-100">{icon}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;