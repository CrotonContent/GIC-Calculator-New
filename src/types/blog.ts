export interface Author {
  slug: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  expertise: string[];
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  certifications: {
    name: string;
    organization: string;
    year: number;
  }[];
  professional_experience?: {
    role: string;
    company: string;
    period: string;
  }[];
  publications?: {
    title: string;
    publisher: string;
    year: number;
  }[];
  speaking_engagements?: {
    title: string;
    venue: string;
    year: number;
  }[];
  memberships?: {
    name: string;
    status: string;
  }[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  thumbnail?: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  published: boolean;
}