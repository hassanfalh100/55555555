import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const Footer: React.FC = () => {
  const { settings } = useContent();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-serif font-bold">{settings.siteName}</span>
            </Link>
            <p className="mt-4 text-gray-300">{settings.siteDescription}</p>
            <div className="mt-6 flex space-x-4">
              {settings.socialLinks.facebook && (
                <a 
                  href={settings.socialLinks.facebook} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition duration-300"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              )}
              {settings.socialLinks.twitter && (
                <a 
                  href={settings.socialLinks.twitter} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition duration-300"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              )}
              {settings.socialLinks.youtube && (
                <a 
                  href={settings.socialLinks.youtube} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition duration-300"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-primary-500 transition duration-300">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/handouts" className="text-gray-300 hover:text-primary-500 transition duration-300">
                  Handouts
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <a 
                  href={`mailto:${settings.contactEmail}`} 
                  className="text-gray-300 hover:text-primary-500 transition duration-300"
                >
                  {settings.contactEmail}
                </a>
              </li>
              {settings.contactPhone && (
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1 flex-shrink-0">📞</span>
                  <span className="text-gray-300">{settings.contactPhone}</span>
                </li>
              )}
              {settings.contactAddress && (
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1 flex-shrink-0">📍</span>
                  <span className="text-gray-300">{settings.contactAddress}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>{settings.footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;