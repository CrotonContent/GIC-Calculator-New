import React, { useEffect } from 'react';
import type { Post } from '../../types/blog';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  post?: Post;
  url: string;
  /** Pass true only on the homepage to inject WebApplication + FAQPage schema */
  isHomePage?: boolean;
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

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  type = 'website',
  post,
  url,
  isHomePage = false,
}) => {
  const baseUrl = 'https://giccalculator.ca';
  const fullUrl = `${baseUrl}${url}`;
  const siteName = 'GICCalculator.ca';

  useEffect(() => {
    // Update title — don't append site name for home page
    document.title = url === '/' ? title : `${title} | ${siteName}`;

    // Build meta tags object
    const metaTags: MetaTags = {
      description,
      'og:site_name': siteName,
      'og:title': title,
      'og:description': description,
      'og:url': fullUrl,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
    };

    // Article-specific Open Graph meta tags
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
      let meta =
        document.querySelector(`meta[property="${name}"]`) ||
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

    // ----------------------------------------------------------------
    // Structured data
    // ----------------------------------------------------------------
    const organization = {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: siteName,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.svg`,
      },
    };

    const website = {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: siteName,
      publisher: { '@id': `${baseUrl}/#organization` },
    };

    const getStructuredData = (): object | object[] => {
      // ── Blog post: Article + BreadcrumbList ──────────────────────────
      if (post) {
        const authorSchema = {
          '@type': 'Person',
          '@id': `${baseUrl}/blog/author/${post.author.slug}`,
          name: post.author.name,
          description: post.author.bio,
          image: post.author.avatar,
          jobTitle: post.author.role,
          url: `${baseUrl}/blog/author/${post.author.slug}`,
          sameAs: [post.author.social?.linkedin].filter(Boolean),
          worksFor: { '@id': `${baseUrl}/#organization` },
          knowsAbout: post.author.expertise,
        };

        return {
          '@context': 'https://schema.org',
          '@graph': [
            organization,
            website,
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
                  item: { '@id': baseUrl, name: 'Home' },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: { '@id': `${baseUrl}/blog`, name: 'Blog' },
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: { '@id': fullUrl, name: post.title },
                },
              ],
            },
          ],
        };
      }

      // ── Homepage: WebApplication + FAQPage ──────────────────────────
      if (isHomePage) {
        return [
          {
            '@context': 'https://schema.org',
            '@graph': [organization, website],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'GIC Calculator',
            description:
              'Calculate Guaranteed Investment Certificate (GIC) returns and compare rates with our free Canadian GIC calculator.',
            url: baseUrl,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a GIC?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Guaranteed Investment Certificate (GIC) is a secure investment that guarantees 100% of your initial investment plus a fixed rate of interest over a specific term.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is the interest calculated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GIC interest is typically calculated using compound interest, where interest is earned not only on your initial investment but also on the accumulated interest from previous periods.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the common GIC terms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GIC terms typically range from 30 days to 10 years, with the most common terms being 1–5 years. Generally, longer terms offer higher interest rates.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are GICs a safe investment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, GICs are considered very safe investments as they are guaranteed by the issuing financial institution and are eligible for CDIC insurance up to $100,000.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the minimum investment for a GIC?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Minimum investments vary by institution but typically start at $500 or $1,000.',
                },
              },
            ],
          },
        ];
      }

      // ── All other pages: Organization + WebSite only ─────────────────
      return {
        '@context': 'https://schema.org',
        '@graph': [organization, website],
      };
    };

    // Remove all existing ld+json script tags injected by this component
    document.querySelectorAll('script[type="application/ld+json"][data-seo-component]').forEach(
      (el) => el.remove()
    );

    // Inject fresh structured data
    const schemas = getStructuredData();
    const schemasArray = Array.isArray(schemas) ? schemas : [schemas];
    schemasArray.forEach((schema) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-component', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      Object.keys(metaTags).forEach((name) => {
        const meta =
          document.querySelector(`meta[property="${name}"]`) ||
          document.querySelector(`meta[name="${name}"]`);
        if (meta) meta.remove();
      });
      document.querySelectorAll('script[type="application/ld+json"][data-seo-component]').forEach(
        (el) => el.remove()
      );
    };
  }, [title, description, type, post, url, isHomePage]);

  return null;
};

export default SEO;
