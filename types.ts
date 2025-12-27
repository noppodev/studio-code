
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content?: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  content?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export enum Section {
  Home = 'home',
  News = 'news',
  Products = 'products',
  Blog = 'blog',
  About = 'about',
  Contact = 'contact'
}
