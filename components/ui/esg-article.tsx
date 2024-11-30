'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { articleData } from '@/lib/article-data';
import { cn } from '@/lib/utils';

interface ESGArticleProps {
  articleId: string;
  className?: string;
}

export function ESGArticle({ articleId, className }: ESGArticleProps) {
  const article = articleData[articleId];
  
  if (!article) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn(
        "bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500",
        className
      )}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{article.title}</h2>
      <div className="prose prose-red max-w-none">
        {article.content}
      </div>
    </motion.article>
  );
}