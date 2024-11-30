'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ESGCategory } from '@/lib/types';
import { cardVariants } from '@/lib/animations';

interface ESGCardProps {
  category: ESGCategory;
  onClick: () => void;
  isExpanded?: boolean;
  isSubCard?: boolean;
  isActive?: boolean;
}

export function ESGCard({ category, onClick, isExpanded, isSubCard, isActive }: ESGCardProps) {
  const Icon = Icons[category.icon as keyof typeof Icons];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClick}
      className={cn(
        "relative cursor-pointer group rounded-lg p-6 transition-all duration-300",
        "bg-white hover:bg-red-50 border-2",
        isActive ? "border-red-500 shadow-lg" : "border-transparent hover:border-red-200",
        isSubCard ? "shadow-sm" : "shadow-md hover:shadow-lg",
        !isActive && "hover:scale-102 transform"
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "p-3 rounded-full",
          category.color,
          "bg-opacity-10 group-hover:bg-opacity-20 transition-colors"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            category.color.replace('bg-', 'text-')
          )} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-red-900">
            {category.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 group-hover:text-gray-700">
            {category.description}
          </p>
        </div>
        {category.subcategories && (
          <div className={cn(
            "transition-transform duration-300",
            isExpanded ? "rotate-180" : ""
          )}>
            <Icons.ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
          </div>
        )}
      </div>
    </motion.div>
  );
}