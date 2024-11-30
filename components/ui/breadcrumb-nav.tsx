'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BreadcrumbItem } from '@/lib/types';
import { breadcrumbVariants } from '@/lib/animations';

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export function BreadcrumbNav({ items, onNavigate }: BreadcrumbNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 space-x-2">
          <button
            onClick={() => onNavigate('/')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 text-gray-600" />
          </button>
          
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center"
              variants={breadcrumbVariants}
              initial="hidden"
              animate="visible"
            >
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              <button
                onClick={() => onNavigate(item.path)}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors text-sm font-medium",
                  index === items.length - 1
                    ? "text-red-600 bg-red-50 hover:bg-red-100"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {item.title}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}