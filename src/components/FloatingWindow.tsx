'use client';

import { useState, useEffect } from 'react';
import { X, Search, ExternalLink, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { allAgents, categories } from '@/lib/data';

interface FloatingWindowProps {
  currentCategory?: string;
}

export default function FloatingWindow({ currentCategory }: FloatingWindowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // 筛选智能体
  const filteredAgents = allAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || agent.category === categories.find(c => c.id === activeTab)?.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* 悬浮按钮 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 group"
        >
          <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* 悬浮窗 */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 max-h-[70vh] flex flex-col rounded-2xl bg-white shadow-2xl transition-all duration-300 border border-gray-200">
          {/* 标题栏 */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-white" />
              <h3 className="font-semibold text-white">快速导航</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="rounded-lg p-1 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
              >
                {isCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isCollapsed && (
            <>
              {/* 搜索框 */}
              <div className="border-b border-gray-200 p-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="搜索工具..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* 分类标签 */}
              <div className="border-b border-gray-200 px-3 py-2">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      activeTab === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    全部
                  </button>
                  {categories.slice(1, 6).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        activeTab === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 智能体列表 */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {filteredAgents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center text-gray-500">
                    <Search className="h-8 w-8 mb-2 opacity-50" />
                    <p className="text-sm">未找到相关工具</p>
                  </div>
                ) : (
                  filteredAgents.map((agent) => (
                    <a
                      key={agent.id}
                      href={agent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start space-x-3 rounded-xl border border-gray-200 bg-white p-3 transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                    >
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-lg"
                        style={{ backgroundColor: `${agent.iconColor}15` }}
                      >
                        {agent.icon}
                      </div>
                      <div className="flex min-w-0 flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                          {agent.name}
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">{agent.category}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors mt-1" />
                    </a>
                  ))
                )}
              </div>

              {/* 底部统计 */}
              <div className="border-t border-gray-200 px-3 py-2 bg-gray-50 rounded-b-2xl">
                <p className="text-xs text-gray-500 text-center">
                  显示 {filteredAgents.length} / {allAgents.length} 个工具
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
