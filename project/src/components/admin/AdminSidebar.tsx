import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  FileUp, 
  LayoutDashboard, 
  Settings, 
  Tag, 
  Search,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useContent } from '../../contexts/ContentContext';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const { settings } = useContent();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-800">
        <Link to="/admin" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary-500" />
          <span className="text-xl font-bold">{settings.siteName}</span>
        </Link>
        <div className="text-sm text-gray-400 mt-1">Admin Dashboard</div>
      </div>

      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul className="space-y-1">
          <SidebarItem 
            to="/admin" 
            icon={<LayoutDashboard size={20} />} 
            text="Dashboard" 
            isActive={isActive('/admin')}
          />
          <SidebarItem 
            to="/admin/articles" 
            icon={<FileText size={20} />} 
            text="Articles" 
            isActive={isActive('/admin/articles')}
          />
          <SidebarItem 
            to="/admin/handouts" 
            icon={<FileUp size={20} />} 
            text="Handouts" 
            isActive={isActive('/admin/handouts')}
          />
          <SidebarItem 
            to="/admin/categories" 
            icon={<Tag size={20} />} 
            text="Categories" 
            isActive={isActive('/admin/categories')}
          />
          <SidebarItem 
            to="/admin/seo" 
            icon={<Search size={20} />} 
            text="SEO Settings" 
            isActive={isActive('/admin/seo')}
          />
          <SidebarItem 
            to="/admin/settings" 
            icon={<Settings size={20} />} 
            text="Website Settings" 
            isActive={isActive('/admin/settings')}
          />
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={logout}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-200 w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, text, isActive }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center space-x-3 px-4 py-3 text-sm transition duration-200 ${
          isActive
            ? 'bg-gray-800 text-white border-l-4 border-primary-500 pl-3'
            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }`}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default AdminSidebar;