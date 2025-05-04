import React from 'react';
import { useContent } from '../../contexts/ContentContext';
import HandoutCard from '../../components/handouts/HandoutCard';
import { Search } from 'lucide-react';

const HandoutsPage: React.FC = () => {
  const { handouts, categories } = useContent();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const filteredHandouts = handouts
    .filter(handout => handout.published)
    .filter(handout => 
      handout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      handout.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(handout => 
      selectedCategory ? handout.categoryId === selectedCategory : true
    );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Handouts</h1>
        
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search handouts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-48 py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories
              .filter(category => category.type === 'handout' || category.type === 'both')
              .map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            }
          </select>
        </div>

        {filteredHandouts.length > 0 ? (
          <div className="grid gap-6">
            {filteredHandouts.map(handout => (
              <HandoutCard key={handout.id} handout={handout} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No handouts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandoutsPage;