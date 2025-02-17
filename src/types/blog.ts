export interface Author {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise?: string[];
  professional_experience?: {
    role: string;
    company: string;
    period: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications?: {
    name: string;
    organization: string;
    year: string;
  }[];
  publications?: {
    title: string;
    publisher: string;
    year: string;
  }[];
  speaking_engagements?: {
    title: string;
    venue: string;
    year: string;
  }[];
  memberships?: {
    name: string;
    status: string;
  }[];
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  content: string;
  author: Author;
  date: string;
  category: string;
  tags: string[];
  published: boolean;
  lastUpdated?: string;
  estimatedReadingTime?: number;
  featuredImage?: string;
}