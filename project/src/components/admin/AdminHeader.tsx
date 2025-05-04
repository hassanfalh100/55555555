import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, User } from 'lucide-react';

const AdminHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex-1">
        <h1 className="text-xl font-medium text-gray-800">Admin Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 transition duration-200">
          <Bell size={20} />
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
            <User size={16} />
          </div>
          <span className="text-sm font-medium text-gray-700">{user?.username}</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;