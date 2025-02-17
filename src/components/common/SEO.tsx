import React, { useEffect } from 'react';
import type { Post } from '../../types/blog';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  post?: Post;
  url: string;
}

interface MetaTags {
  description: string;
  'og:site_name': string;
  'og:title': string;
  'og:description': string;
  'og:url': string;
  'og:type': 'website' | 'article';
  'og:image'?: string;
  'twitter:card': string;
  'twitter:title': string;
  'twitter:description': string;
  'twitter:image'?: string;
  'article:published_time'?: string;
  'article:modified_time'?: string;
  'article:author'?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', post, url }) => {
  const baseUrl = 'https://giccalculator.ca';
  const fullUrl = `${baseUrl}${url}`;
  const siteName = 'GICCalculator.ca';

  useEffect(() => {
    // Update title - don't append site name for home page
    document.title = url === '/' ? title : `${title} | ${siteName}`;

    // Update meta tags
    const metaTags: MetaTags = {
      'description': description,
      'og:site_name': siteName,
      'og:title': title,
      'og:description': description,
      'og:url': fullUrl,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
    };

    // Add article specific meta tags
    if (type === 'article' && post) {
      metaTags['article:published_time'] = post.date;
      metaTags['article:modified_time'] = post.lastUpdated || post.date;
      metaTags['article:author'] = post.author.name;

      if (post.author.avatar) {
        metaTags['og:image'] = post.author.avatar;
        metaTags['twitter:image'] = post.author.avatar;
      }
    }

    // Update existing or create new meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[property="${name}"]`) ||
                 document.querySelector(`meta[name="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('article:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Add structured data
    const getStructuredData = () => {
      const organization = {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: siteName,
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/favicon.svg`,
        }
      };

      if (!post) {
        return {
          '@context': 'https://schema.org',
          '@graph': [
            organization,
            {
              '@type': 'WebSite',
              '@id': `${baseUrl}/#website`,
              url: baseUrl,
              name: siteName,
              publisher: { '@id': `${baseUrl}/#organization` },
            }
          ]
        };
      }

      const authorSchema = {
        '@type': 'Person',
        '@id': `${baseUrl}/blog/author/${post.author.slug}`,
        name: post.author.name,
        description: post.author.bio,
        image: post.author.avatar,
        jobTitle: post.author.role,
        url: `${baseUrl}/blog/author/${post.author.slug}`,
        sameAs: [
          post.author.social?.linkedin,
        ].filter(Boolean),
        worksFor: { '@id': `${baseUrl}/#organization` },
        knowsAbout: post.author.expertise,
      };

      return {
        '@context': 'https://schema.org',
        '@graph': [
          organization,
          {
            '@type': 'Article',
            '@id': fullUrl,
            isPartOf: { '@id': `${baseUrl}/#website` },
            headline: post.title,
            description: post.description,
            author: authorSchema,
            publisher: { '@id': `${baseUrl}/#organization` },
            datePublished: post.date,
            dateModified: post.lastUpdated || post.date,
            mainEntityOfPage: fullUrl,
            keywords: post.tags.join(', '),
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${fullUrl}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': baseUrl,
                  name: 'Home'
                }
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@id': `${baseUrl}/blog`,
                  name: 'Blog'
                }
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@id': fullUrl,
                  name: post.title
                }
              }
            ]
          }
        ]
      };
    };

    // Update structured data
    let ldJson = document.querySelector('script[type="application/ld+json"]');
    if (!ldJson) {
      ldJson = document.createElement('script');
      ldJson.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldJson);
    }
    ldJson.textContent = JSON.stringify(getStructuredData());

    // Cleanup function
    return () => {
      // Remove meta tags and structured data when component unmounts
      Object.keys(metaTags).forEach(name => {
        const meta = document.querySelector(`meta[property="${name}"]`) ||
                    document.querySelector(`meta[name="${name}"]`);
        if (meta) {
          meta.remove();
        }
      });
      if (ldJson) {
        ldJson.remove();
      }
    };
  }, [title, description, type, post, url]);

  return null;
};

export default SEO;