import { ArrowRight } from 'lucide-react';
import { Agent } from '@/lib/data';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="group flex items-start space-x-4 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-blue-300 hover:shadow-md">
      {/* 左侧图标 */}
      <div
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-2xl"
        style={{ backgroundColor: `${agent.iconColor}15` }}
      >
        {agent.icon}
      </div>

      {/* 右侧内容 */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {agent.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{agent.category}</p>
        </div>

        <button className="mt-3 inline-flex items-center text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700">
          立即体验
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
