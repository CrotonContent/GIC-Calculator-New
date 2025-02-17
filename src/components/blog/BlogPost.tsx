import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosts } from '../../lib/posts';
import type { Post } from '../../types/blog';
import AuthorCard from './AuthorCard';
import SEO from '../common/SEO';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getPosts();
        const foundPost = posts.find((p: Post) => p.slug === slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          navigate('/blog');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        type="article"
        post={post}
        url={`/blog/${post.slug}`}
      />

      <article className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={post.author.avatar}
                  alt={`${post.author.name}'s profile picture`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div>
                  <div className="text-base font-medium">Written by {post.author.name}</div>
                  <div className="text-sm opacity-90">{post.author.role}</div>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center text-sm space-x-4">
                <time dateTime={post.date} className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('en-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v1H5V6zm10 3H5v1h10V9zm0 3H5v1h10v-1z" clipRule="evenodd" />
                  </svg>
                  {post.category}
                </span>
                {post.estimatedReadingTime && (
                  <>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {post.estimatedReadingTime} min read
                    </span>
                  </>
                )}
              </div>
            </header>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800
            prose-table:w-full prose-table:overflow-hidden prose-table:rounded-xl
            prose-table:shadow-lg prose-table:border-2 prose-table:border-blue-100
            
            prose-th:p-4 prose-th:bg-gradient-to-r prose-th:from-blue-600 prose-th:to-blue-700
            prose-th:text-white prose-th:font-semibold prose-th:border-0
            prose-th:text-base prose-th:[&>*]:text-white
            
            prose-tr:even:bg-blue-50/70 prose-tr:odd:bg-white
            prose-tr:hover:bg-blue-50 prose-tr:transition-colors prose-tr:duration-200
            
            prose-td:p-4 prose-td:border-b prose-td:border-blue-100
            prose-td:text-gray-700
            
            prose-ul:list-disc prose-ol:list-decimal mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={post.author.avatar}
                  alt={`${post.author.name}'s profile picture`}
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-white shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author.name}</h3>
                <p className="text-gray-700 font-medium mb-4">{post.author.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.author.bio}</p>
                {post.author.expertise && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.author.expertise.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {post.author.social && (
                  <div className="flex space-x-4">
                    {post.author.social.linkedin && (
                      <a
                        href={post.author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {post.author.social.twitter && (
                      <a
                        href={post.author.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Article Footer */}
          <footer className="border-t border-gray-200 pt-8">
            {post.lastUpdated && (
              <div className="text-sm text-gray-500 mb-4">
                Last updated: {new Date(post.lastUpdated).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
            <div className="text-sm text-gray-500 italic bg-gray-50 p-4 rounded-lg border border-gray-200">
              Disclaimer: This article is for informational purposes only and should not be considered financial advice.
              Always consult with a qualified financial advisor before making investment decisions.
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogPost;