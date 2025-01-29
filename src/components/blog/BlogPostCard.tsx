import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import type { Post } from '../../types/blog';

interface Props {
  post: Post;
}

const BlogPostCard: React.FC<Props> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span>{post.category}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block">
          <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4">{post.description}</p>
        
        <div className="flex items-center justify-between">
          <Link
            to={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
          
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;