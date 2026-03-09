import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Agent } from '@/lib/data';

interface FeaturedCardProps {
  agent: Agent;
}

export default function FeaturedCard({ agent }: FeaturedCardProps) {
  return (
    <a
      href={agent.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* 顶部区域 */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
            style={{ backgroundColor: `${agent.iconColor}15` }}
          >
            {agent.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {agent.name}
            </h3>
            {agent.badge && (
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-700">
                <Star className="h-3 w-3 fill-current" />
                {agent.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 功能描述 */}
      <p className="mb-4 text-sm font-semibold text-gray-600">{agent.category}</p>
      <p className="mb-6 text-sm text-gray-500 line-clamp-2">{agent.description}</p>

      {/* 操作提示 */}
      <div className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md">
        立即体验
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
}
