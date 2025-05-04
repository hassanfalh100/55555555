import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, FileText, Home, Info, Mail, ChevronDown } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { settings } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary-600"
          aria-label="Go to homepage"
        >
          <BookOpen size={28} />
          <span className="text-xl font-serif font-bold">{settings.siteName}</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" icon={<Home size={18} />} isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink 
            to="/articles" 
            icon={<FileText size={18} />}
            isActive={location.pathname.startsWith('/articles')}
          >
            Articles
          </NavLink>
          <NavLink 
            to="/handouts" 
            icon={<FileText size={18} />}
            isActive={location.pathname.startsWith('/handouts')}
          >
            Handouts
          </NavLink>
          <NavLink 
            to="/about" 
            icon={<Info size={18} />}
            isActive={location.pathname === '/about'}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            icon={<Mail size={18} />}
            isActive={location.pathname === '/contact'}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          <MobileNavLink 
            to="/" 
            icon={<Home size={20} />}
            isActive={location.pathname === '/'}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            to="/articles" 
            icon={<FileText size={20} />}
            isActive={location.pathname.startsWith('/articles')}
          >
            Articles
          </MobileNavLink>
          <MobileNavLink 
            to="/handouts" 
            icon={<FileText size={20} />}
            isActive={location.pathname.startsWith('/handouts')}
          >
            Handouts
          </MobileNavLink>
          <MobileNavLink 
            to="/about" 
            icon={<Info size={20} />}
            isActive={location.pathname === '/about'}
          >
            About Us
          </MobileNavLink>
          <MobileNavLink 
            to="/contact" 
            icon={<Mail size={20} />}
            isActive={location.pathname === '/contact'}
          >
            Contact
          </MobileNavLink>
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 font-medium transition duration-200 ${
        isActive
          ? 'text-primary-600 border-b-2 border-primary-600'
          : 'text-gray-700 hover:text-primary-600'
      }`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 text-xl font-medium ${
        isActive ? 'text-primary-600' : 'text-gray-700'
      }`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

export default Header;