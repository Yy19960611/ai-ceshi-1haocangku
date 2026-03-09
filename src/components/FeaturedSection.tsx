import { Star } from 'lucide-react';
import { featuredAgents } from '@/lib/data';
import FeaturedCard from './FeaturedCard';

export default function FeaturedSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* 标签栏 */}
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">置顶推荐</h2>
        </div>
        <span className="text-sm font-medium text-gray-500">编辑精选</span>
      </div>

      {/* 推荐卡片网格 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredAgents.map((agent) => (
          <FeaturedCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
}
