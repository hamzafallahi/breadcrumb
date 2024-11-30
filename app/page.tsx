'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { ESGCard } from '@/components/ui/esg-card';
import { ESGArticle } from '@/components/ui/esg-article';
import { esgData } from '@/lib/data';
import { articleData } from '@/lib/article-data';
import { BreadcrumbItem, ESGCategory } from '@/lib/types';
import { pageTransition } from '@/lib/animations';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  const handleCardClick = (category: ESGCategory) => {
    if (activeCategory === category.id) {
      setActiveCategory(null);
      setBreadcrumbs([]);
    } else {
      setActiveCategory(category.id);
      setBreadcrumbs([{
        id: category.id,
        title: category.title,
        path: `/${category.id}`
      }]);
    }
  };

  const handleSubCardClick = (parentId: string, category: ESGCategory) => {
    const parent = findCategory(esgData, parentId);
    if (!parent) return;

    setBreadcrumbs([
      {
        id: parent.id,
        title: parent.title,
        path: `/${parent.id}`
      },
      {
        id: category.id,
        title: category.title,
        path: `/${parent.id}/${category.id}`
      }
    ]);
  };

  const handleNavigate = (path: string) => {
    if (path === '/') {
      setActiveCategory(null);
      setBreadcrumbs([]);
      return;
    }

    const segments = path.split('/').filter(Boolean);
    const categoryId = segments[segments.length - 1];
    setActiveCategory(categoryId);

    const newBreadcrumbs: BreadcrumbItem[] = [];
    for (const segment of segments) {
      const category = findCategory(esgData, segment);
      if (category) {
        newBreadcrumbs.push({
          id: category.id,
          title: category.title,
          path: `/${newBreadcrumbs.map(b => b.id).concat(category.id).join('/')}`
        });
      }
    }
    setBreadcrumbs(newBreadcrumbs);
  };

  const findCategory = (categories: ESGCategory[], id: string): ESGCategory | undefined => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.subcategories) {
        const found = findCategory(category.subcategories, id);
        if (found) return found;
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbNav items={breadcrumbs} onNavigate={handleNavigate} />
      
      <motion.main
        className="pt-20 pb-12 px-4"
        variants={pageTransition}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {esgData.map((category) => (
              <ESGCard
                key={category.id}
                category={category}
                onClick={() => handleCardClick(category)}
                isExpanded={activeCategory === category.id}
                isActive={activeCategory === category.id}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <ESGArticle articleId={activeCategory} />

                {findCategory(esgData, activeCategory)?.subcategories && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {findCategory(esgData, activeCategory)?.subcategories?.map((subCategory) => (
                      <div key={subCategory.id}>
                        <ESGCard
                          category={subCategory}
                          onClick={() => handleSubCardClick(activeCategory, subCategory)}
                          isSubCard
                          isActive={breadcrumbs[1]?.id === subCategory.id}
                        />
                        
                        <AnimatePresence>
                          {breadcrumbs[1]?.id === subCategory.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4"
                            >
                              <ESGArticle articleId={subCategory.id} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>
    </div>
  );
}