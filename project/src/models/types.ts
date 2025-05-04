export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image?: string;
  categoryId: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  published: boolean;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Handout {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  categoryId: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  published: boolean;
  downloadCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  type: 'article' | 'handout' | 'both';
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo: string;
  footerText: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    telegram?: string;
    instagram?: string;
    youtube?: string;
  };
  contactEmail: string;
  contactPhone?: string;
  contactAddress?: string;
}

export interface SeoSettings {
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  siteUrl: string;
  googleAnalyticsId?: string;
}