import React, { createContext, useState, useContext, useEffect } from 'react';
import { Article, Handout, Category, SiteSettings } from '../models/types';
import { mockArticles, mockHandouts, mockCategories, mockSettings } from '../data/mockData';

interface ContentContextType {
  articles: Article[];
  handouts: Handout[];
  categories: Category[];
  settings: SiteSettings;
  addArticle: (article: Omit<Article, 'id' | 'createdAt'>) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  addHandout: (handout: Omit<Handout, 'id' | 'createdAt'>) => void;
  updateHandout: (id: string, handout: Partial<Handout>) => void;
  deleteHandout: (id: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [handouts, setHandouts] = useState<Handout[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(mockSettings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // In a real app, this would be API calls
      setArticles(mockArticles);
      setHandouts(mockHandouts);
      setCategories(mockCategories);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const addArticle = (articleData: Omit<Article, 'id' | 'createdAt'>) => {
    const newArticle: Article = {
      ...articleData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setArticles([newArticle, ...articles]);
  };

  const updateArticle = (id: string, articleData: Partial<Article>) => {
    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, ...articleData } : article
      )
    );
  };

  const deleteArticle = (id: string) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const addHandout = (handoutData: Omit<Handout, 'id' | 'createdAt'>) => {
    const newHandout: Handout = {
      ...handoutData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setHandouts([newHandout, ...handouts]);
  };

  const updateHandout = (id: string, handoutData: Partial<Handout>) => {
    setHandouts(
      handouts.map((handout) =>
        handout.id === id ? { ...handout, ...handoutData } : handout
      )
    );
  };

  const deleteHandout = (id: string) => {
    setHandouts(handouts.filter((handout) => handout.id !== id));
  };

  const addCategory = (categoryData: Omit<Category, 'id'>) => {
    const newCategory: Category = {
      ...categoryData,
      id: Date.now().toString(),
    };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (id: string, categoryData: Partial<Category>) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, ...categoryData } : category
      )
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const updateSettings = (settingsData: Partial<SiteSettings>) => {
    setSettings({ ...settings, ...settingsData });
  };

  return (
    <ContentContext.Provider
      value={{
        articles,
        handouts,
        categories,
        settings,
        addArticle,
        updateArticle,
        deleteArticle,
        addHandout,
        updateHandout,
        deleteHandout,
        addCategory,
        updateCategory,
        deleteCategory,
        updateSettings,
        isLoading,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};