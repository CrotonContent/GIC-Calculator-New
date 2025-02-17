import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../lib/posts';
import { Post } from '../../types/blog';
import SEO from '../common/SEO';

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="GIC Investment Blog"
        description="Expert insights on GICs, investment strategies, and financial planning from our team of professionals."
        url="/blog"
      />

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">GIC Investment Blog</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Expert insights on GICs, investment strategies, and financial planning from our team of professionals.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="p-6">
                    {/* Author Info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={post.author.avatar}
                        alt={`${post.author.name}'s profile picture`}
                        className="w-10 h-10 rounded-full object-cover"
                        itemProp="image"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900" itemProp="author">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                      </div>
                    </div>

                    {/* Post Info */}
                    <h2 
                      className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600"
                      itemProp="headline"
                    >
                      {post.title}
                    </h2>
                    <p 
                      className="text-gray-600 mb-4 line-clamp-3"
                      itemProp="description"
                    >
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <time dateTime={post.date} itemProp="datePublished">
                        {new Date(post.date).toLocaleDateString('en-CA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="mx-2">•</span>
                      {post.estimatedReadingTime && (
                        <span>{post.estimatedReadingTime} min read</span>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogList;