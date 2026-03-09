'use client';

import { categories, Category } from '@/lib/data';
import { useState } from 'react';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav className="w-full space-y-2 md:w-64 md:sticky md:top-24">
      <h3 className="mb-4 text-lg font-bold text-gray-900">分类导航</h3>
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        const isHovered = hoveredCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : isHovered
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </div>
            <span
              className={`text-sm ${
                isActive ? 'text-white/80' : 'text-gray-400'
              }`}
            >
              {category.count}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
