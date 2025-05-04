import React from 'react';
import { useContent } from '../../contexts/ContentContext';
import { BookOpen, Users, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const { settings } = useContent();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
          About {settings.siteName}
        </h1>

        <div className="prose max-w-none mb-12">
          <p className="text-xl text-gray-600 text-center mb-12">
            {settings.siteDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold ml-3">Educational Articles</h3>
              </div>
              <p className="text-gray-600">
                Access comprehensive articles covering various educational topics, written by experts in their fields.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Download className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold ml-3">Study Resources</h3>
              </div>
              <p className="text-gray-600">
                Download high-quality handouts and study materials to enhance your learning experience.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to providing accessible, high-quality educational resources to students and educators worldwide. Our platform serves as a bridge between knowledge and learners, making education more accessible and engaging.
            </p>
            <p className="text-gray-700">
              Through our carefully curated content and resources, we aim to support both independent learning and classroom education, helping students achieve their academic goals.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Started Today</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/articles"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Articles
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>

          {settings.contactAddress && (
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h2>
              <p className="text-gray-700">{settings.contactAddress}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;