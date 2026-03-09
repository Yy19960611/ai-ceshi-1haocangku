'use client';

import { useState } from 'react';
import { categories, getAgentsByCategory } from '@/lib/data';
import CategoryNav from './CategoryNav';
import AgentCard from './AgentCard';

export default function AgentSection() {
  const [activeCategory, setActiveCategory] = useState('ai-general');

  const currentCategoryName = categories.find(c => c.id === activeCategory)?.name || '全部';
  const filteredAgents = getAgentsByCategory(activeCategory);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* 左侧分类导航 */}
        <aside className="flex-shrink-0">
          <CategoryNav
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </aside>

        {/* 右侧工具列表 */}
        <main className="flex-1">
          {/* 分类标题 */}
          <div className="mb-6 flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">{currentCategoryName}</h2>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
              {filteredAgents.length} 个工具
            </span>
          </div>

          {/* 工具网格 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {/* 空状态 */}
          {filteredAgents.length === 0 && (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
              <p className="text-lg font-semibold text-gray-600">暂无相关工具</p>
              <p className="mt-2 text-sm text-gray-500">请选择其他分类</p>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
