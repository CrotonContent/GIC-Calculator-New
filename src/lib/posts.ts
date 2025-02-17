import frontMatter from 'front-matter';
import { marked } from 'marked';
import type { Post, Author } from '../types/blog';

// Configure marked for better table rendering
marked.setOptions({
  gfm: true,
  breaks: true
});

interface AuthorFrontMatterData {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
  professional_experience: Array<{
    role: string;
    company: string;
    period: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  certifications: Array<{
    name: string;
    organization: string;
    year: string;
  }>;
  social: {
    linkedin: string;
    twitter?: string;
  };
}

// Import author data
import authorContent from '../../content/authors/daniel-schoester.md?raw';

// Parse author data
const authorData = frontMatter<AuthorFrontMatterData>(authorContent);
const authors: Record<string, Author> = {
  'daniel-schoester': {
    slug: 'daniel-schoester',
    name: authorData.attributes.name,
    role: authorData.attributes.role,
    avatar: authorData.attributes.avatar,
    bio: authorData.attributes.bio,
    expertise: authorData.attributes.expertise,
    professional_experience: authorData.attributes.professional_experience,
    education: authorData.attributes.education,
    certifications: authorData.attributes.certifications,
    social: authorData.attributes.social
  }
};

export const getAuthor = (slug: string): Author => {
  const author = authors[slug];
  if (!author) {
    throw new Error(`Author not found: ${slug}`);
  }
  return author;
};

interface FrontMatterData {
  title: string;
  excerpt: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  published: boolean;
  lastUpdated?: string;
  estimatedReadingTime?: number;
}

// Import the pre-processed blog post content
import blogPostContent from '../../content/blog/are-gics-good-investment.md?raw';

export const getPosts = async (): Promise<Post[]> => {
  try {
    console.log('Parsing frontmatter...');
    const { attributes, body } = frontMatter<FrontMatterData>(blogPostContent);
    console.log('Parsed frontmatter:', attributes);

    console.log('Converting markdown to HTML...');
    const htmlContent = await Promise.resolve(marked(body));
    console.log('HTML content length:', htmlContent.length);

    const post: Post = {
      slug: 'are-gics-good-investment',
      title: attributes.title,
      excerpt: attributes.excerpt,
      description: attributes.description,
      content: htmlContent,
      author: getAuthor(attributes.author),
      date: attributes.date,
      category: attributes.category,
      tags: attributes.tags,
      published: attributes.published,
      lastUpdated: attributes.lastUpdated,
      estimatedReadingTime: attributes.estimatedReadingTime
    };

    console.log('Created post object:', { ...post, content: '...' });
    return [post];
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};