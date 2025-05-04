import React from 'react';
import { Download, Calendar, FileText } from 'lucide-react';
import { Handout } from '../../models/types';
import { useContent } from '../../contexts/ContentContext';
import { formatDate } from '../../utils/formatters';

interface HandoutCardProps {
  handout: Handout;
  compact?: boolean;
}

const HandoutCard: React.FC<HandoutCardProps> = ({ handout, compact = false }) => {
  const { categories } = useContent();
  const category = categories.find(c => c.id === handout.categoryId);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // In a real implementation, we'd increment the download count
    window.open(handout.fileUrl, '_blank');
  };

  return compact ? (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {handout.title}
          </h3>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{formatDate(handout.createdAt)}</span>
        </div>
        
        <a 
          href={handout.fileUrl}
          onClick={handleDownload}
          className="text-primary-600 hover:text-primary-700 flex items-center text-sm font-medium mt-2"
        >
          <Download size={16} className="mr-1" />
          Download ({handout.downloadCount})
        </a>
      </div>
    </div>
  ) : (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          {category && (
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary-100 text-secondary-800">
              {category.name}
            </span>
          )}
          <span className="text-sm text-gray-500 flex items-center">
            <Download size={14} className="mr-1" />
            {handout.downloadCount}
          </span>
        </div>
        
        <div className="flex items-start mb-4">
          <div className="mr-4 bg-gray-100 p-3 rounded-lg">
            <FileText size={36} className="text-secondary-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {handout.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              <span>{formatDate(handout.createdAt)}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{handout.description}</p>
        
        <a 
          href={handout.fileUrl}
          onClick={handleDownload}
          className="block w-full bg-secondary-600 hover:bg-secondary-700 text-white text-center py-2 rounded-lg transition duration-300 flex items-center justify-center"
        >
          <Download size={18} className="mr-2" />
          Download Handout
        </a>
      </div>
    </div>
  );
};

export default HandoutCard;