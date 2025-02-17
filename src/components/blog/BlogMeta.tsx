import React from 'react';
import type { Post } from '../../types/blog';

interface BlogMetaProps {
  post?: Post;
  isList?: boolean;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ post, isList = false }) => {
  React.useEffect(() => {
    const baseTitle = 'GICCalculator.ca Blog';
    const title = post 
      ? `${post.title} | ${baseTitle}`
      : isList 
        ? `Latest Articles | ${baseTitle}`
        : baseTitle;
    
    document.title = title;
  }, [post, isList]);

  return null;
};

export default BlogMeta;