import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import type { Post, Author } from '../types/blog';

export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch('/content/blog/index.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts index');
    }
    const data = await response.json();
    return data.posts.filter((post: Post) => post.published);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`/content/blog/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Post not found: ${slug}`);
    }
    const markdown = await response.text();
    const { data, content } = matter(markdown);
    
    if (!data.title || !data.author || !data.date) {
      throw new Error('Invalid post data: missing required fields');
    }
    
    return {
      slug,
      title: data.title,
      author: data.author,
      date: data.date,
      thumbnail: data.thumbnail,
      description: data.description,
      content,
      category: data.category,
      tags: data.tags || [],
      published: data.published
    };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const response = await fetch(`/content/authors/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Author not found: ${slug}`);
    }
    const markdown = await response.text();
    const { data } = matter(markdown);
    
    if (!data.name || !data.role || !data.bio) {
      throw new Error('Invalid author data: missing required fields');
    }
    
    return {
      slug,
      name: data.name,
      avatar: data.avatar,
      role: data.role,
      bio: data.bio,
      expertise: data.expertise || [],
      education: data.education || [],
      certifications: data.certifications || [],
      professional_experience: data.professional_experience || [],
      publications: data.publications || [],
      speaking_engagements: data.speaking_engagements || [],
      memberships: data.memberships || [],
      social: data.social || {}
    };
  } catch (error) {
    console.error(`Error fetching author ${slug}:`, error);
    return null;
  }
}

export async function getPostsByAuthor(authorSlug: string): Promise<Post[]> {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.author === authorSlug);
  } catch (error) {
    console.error(`Error fetching posts for author ${authorSlug}:`, error);
    return [];
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  try {
    const result = await remark()
      .use(html)
      .use(remarkGfm)
      .process(markdown);
    return result.toString();
  } catch (error) {
    console.error('Error converting markdown:', error);
    return '';
  }
}