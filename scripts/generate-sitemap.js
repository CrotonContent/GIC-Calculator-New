import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://giccalculator.ca';
const CONTENT_DIR = 'content/blog';
const BUILD_DIR = 'dist';

function ensureBuildDir() {
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
}

function generateSitemap() {
  ensureBuildDir();

  // Get all blog posts
  const blogPosts = fs.readdirSync(CONTENT_DIR)
    .filter(file => file.endsWith('.md') && file !== 'gic-laddering-strategy.md')
    .map(file => {
      const content = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
      const { data } = matter(content);
      return {
        slug: file.replace('.md', ''),
        date: data.date || new Date().toISOString()
      };
    });

  // Static pages
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    { url: '/privacy', changefreq: 'yearly', priority: '0.5' },
    { url: '/terms', changefreq: 'yearly', priority: '0.5' },
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  // Write files to both public and dist directories
  ['public', BUILD_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write sitemap
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemap);
    fs.chmodSync(path.join(dir, 'sitemap.xml'), 0o644);
    
    // Write robots.txt
    fs.writeFileSync(path.join(dir, 'robots.txt'), robotsTxt);
    fs.chmodSync(path.join(dir, 'robots.txt'), 0o644);
  });

  console.log('Sitemap and robots.txt generated successfully in both public and dist directories!');
}

generateSitemap();