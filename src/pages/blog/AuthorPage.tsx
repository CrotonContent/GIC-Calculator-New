import React from 'react';
import { useParams } from 'react-router-dom';
import { getAuthorBySlug, getPostsByAuthor } from '../../lib/posts';
import AuthorCard from '../../components/blog/AuthorCard';
import BlogPostCard from '../../components/blog/BlogPostCard';
import type { Author, Post } from '../../types/blog';

const AuthorPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = getAuthorBySlug(slug as string) as Author;
  const posts = getPostsByAuthor(slug as string) as Post[];

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AuthorCard author={author} showFull />
      
      {posts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Articles by {author.name}
          </h2>
          <div className="grid gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorPage;