// 智能体分类
export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

// 智能体/工具
export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  iconColor?: string;
  url: string;
  isFeatured?: boolean;
  badge?: string;
}

// 分类数据
export const categories: Category[] = [
  { id: 'all', name: '全部', icon: '🔹', count: 0 },
  { id: 'ai-general', name: 'AI通用模型', icon: '🤖', count: 16 },
  { id: 'ai-drawing', name: 'AI绘画设计', icon: '🎨', count: 23 },
  { id: 'ai-video', name: 'AI视频生成', icon: '🎬', count: 15 },
  { id: 'ai-agent', name: 'AI智能体', icon: '🧠', count: 12 },
  { id: 'ai-writing', name: 'AI写作助手', icon: '✍️', count: 18 },
  { id: 'ai-coding', name: 'AI编程助手', icon: '💻', count: 10 },
  { id: 'ai-tools', name: '常用小工具', icon: '🛠️', count: 8 },
];

// 推荐的智能体（置顶）
export const featuredAgents: Agent[] = [
  {
    id: 'mx-draw',
    name: 'MX绘画中文站',
    description: '集成国内外所有AI绘画/视频模型',
    category: 'AI绘画设计',
    icon: '🎨',
    iconColor: '#9333EA',
    url: 'https://mxpainting.com/',
    isFeatured: true,
    badge: '推荐',
  },
  {
    id: 'jimeng',
    name: '即梦AI',
    description: '抖音旗下AI图像视频创作工具',
    category: 'AI视频生成',
    icon: '🎬',
    iconColor: '#3B82F6',
    url: 'https://jimeng.jianying.com/',
    isFeatured: true,
  },
  {
    id: 'coze',
    name: '扣子',
    description: '字节旗下通用智能体平台',
    category: 'AI智能体',
    icon: '🧠',
    iconColor: '#EC4899',
    url: 'https://www.coze.cn/',
    isFeatured: true,
  },
  {
    id: 'video-downloader',
    name: '一键下载视频',
    description: '去水印下载抖音等平台高清视频',
    category: '常用小工具',
    icon: '📥',
    iconColor: '#F59E0B',
    url: 'https://www.douyin.wtf/',
    isFeatured: true,
  },
];

// 所有智能体数据
export const allAgents: Agent[] = [
  // AI通用模型
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: '国产最强的深度思考大模型',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#6366F1',
    url: 'https://www.deepseek.com/',
  },
  {
    id: 'tencent-yuanbao',
    name: '腾讯元宝',
    description: '腾讯推出的AI全能助手',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#3B82F6',
    url: 'https://yuanbao.tencent.com/',
  },
  {
    id: 'kimi',
    name: 'Kimi',
    description: '长文本和深度思考AI大模型',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#8B5CF6',
    url: 'https://kimi.moonshot.cn/',
  },
  {
    id: 'tongyi',
    name: '通义千问',
    description: '阿里推出的AI全能助手',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#F59E0B',
    url: 'https://tongyi.aliyun.com/',
  },
  {
    id: 'doubao',
    name: '豆包',
    description: '字节推出的AI全能助手',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#EC4899',
    url: 'https://www.doubao.com/',
  },
  {
    id: 'ernie',
    name: '文心一言',
    description: '百度推出的AI大模型',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#EF4444',
    url: 'https://yiyan.baidu.com/',
  },
  {
    id: 'spark',
    name: '讯飞星火',
    description: '科大讯飞推出的认知智能大模型',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#06B6D4',
    url: 'https://xinghuo.xfyun.cn/',
  },
  {
    id: 'glm',
    name: '智谱GLM',
    description: '清华系AI大模型',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#14B8A6',
    url: 'https://chatglm.cn/',
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic推出的安全AI助手',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#8B5CF6',
    url: 'https://claude.ai/',
  },
  {
    id: 'gpt4',
    name: 'GPT-4',
    description: 'OpenAI的强大AI模型',
    category: 'AI通用模型',
    icon: '🤖',
    iconColor: '#10B981',
    url: 'https://chat.openai.com/',
  },

  // AI绘画设计
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '全球领先的AI绘画工具',
    category: 'AI绘画设计',
    icon: '🎨',
    iconColor: '#8B5CF6',
    url: 'https://www.midjourney.com/',
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: '开源的AI图像生成模型',
    category: 'AI绘画设计',
    icon: '🎨',
    iconColor: '#F59E0B',
    url: 'https://stability.ai/',
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    description: 'OpenAI的图像生成模型',
    category: 'AI绘画设计',
    icon: '🎨',
    iconColor: '#10B981',
    url: 'https://openai.com/dall-e-3',
  },
  {
    id: 'leonardo',
    name: 'Leonardo AI',
    description: '专业的AI艺术创作平台',
    category: 'AI绘画设计',
    icon: '🎨',
    iconColor: '#EC4899',
    url: 'https://leonardo.ai/',
  },
  {
    id: 'canva',
    name: 'Canva AI',
    description: '集成AI的在线设计平台',
    category: 'AI绘画设计',
    icon: '🎨',
    iconColor: '#3B82F6',
    url: 'https://www.canva.com/',
  },

  // AI视频生成
  {
    id: 'runway',
    name: 'Runway ML',
    description: '专业的AI视频编辑工具',
    category: 'AI视频生成',
    icon: '🎬',
    iconColor: '#8B5CF6',
    url: 'https://runwayml.com/',
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    description: 'AI文本生成视频工具',
    category: 'AI视频生成',
    icon: '🎬',
    iconColor: '#F59E0B',
    url: 'https://pika.art/',
  },
  {
    id: 'sora',
    name: 'Sora',
    description: 'OpenAI的AI视频生成模型',
    category: 'AI视频生成',
    icon: '🎬',
    iconColor: '#10B981',
    url: 'https://openai.com/sora',
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI虚拟人视频生成',
    category: 'AI视频生成',
    icon: '🎬',
    iconColor: '#3B82F6',
    url: 'https://www.synthesia.io/',
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI数字人视频制作平台',
    category: 'AI视频生成',
    icon: '🎬',
    iconColor: '#EC4899',
    url: 'https://www.heygen.com/',
  },

  // AI智能体
  {
    id: 'autogpt',
    name: 'AutoGPT',
    description: '自主AI智能体框架',
    category: 'AI智能体',
    icon: '🧠',
    iconColor: '#EF4444',
    url: 'https://github.com/Significant-Gravitas/AutoGPT',
  },
  {
    id: 'langchain',
    name: 'LangChain',
    description: '构建AI应用的框架',
    category: 'AI智能体',
    icon: '🧠',
    iconColor: '#8B5CF6',
    url: 'https://www.langchain.com/',
  },
  {
    id: 'gpt-engineer',
    name: 'GPT Engineer',
    description: 'AI代码生成智能体',
    category: 'AI智能体',
    icon: '🧠',
    iconColor: '#3B82F6',
    url: 'https://github.com/AntonOsika/gpt-engineer',
  },
  {
    id: 'babyagi',
    name: 'BabyAGI',
    description: '任务管理AI智能体',
    category: 'AI智能体',
    icon: '🧠',
    iconColor: '#10B981',
    url: 'https://github.com/yoheinakajima/babyagi',
  },
  {
    id: 'chatgpt-plugins',
    name: 'ChatGPT Plugins',
    description: 'ChatGPT插件生态',
    category: 'AI智能体',
    icon: '🧠',
    iconColor: '#F59E0B',
    url: 'https://openai.com/blog/chatgpt-plugins',
  },

  // AI写作助手
  {
    id: 'copyai',
    name: 'Copy.ai',
    description: 'AI文案写作工具',
    category: 'AI写作助手',
    icon: '✍️',
    iconColor: '#8B5CF6',
    url: 'https://www.copy.ai/',
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: '企业级AI内容创作平台',
    category: 'AI写作助手',
    icon: '✍️',
    iconColor: '#EF4444',
    url: 'https://www.jasper.ai/',
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'AI营销文案生成器',
    category: 'AI写作助手',
    icon: '✍️',
    iconColor: '#3B82F6',
    url: 'https://writesonic.com/',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Notion内置AI写作助手',
    category: 'AI写作助手',
    icon: '✍️',
    iconColor: '#F59E0B',
    url: 'https://www.notion.so/',
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI写作和语法检查工具',
    category: 'AI写作助手',
    icon: '✍️',
    iconColor: '#10B981',
    url: 'https://www.grammarly.com/',
  },

  // AI编程助手
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI编程助手',
    category: 'AI编程助手',
    icon: '💻',
    iconColor: '#6366F1',
    url: 'https://github.com/features/copilot',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI驱动的代码编辑器',
    category: 'AI编程助手',
    icon: '💻',
    iconColor: '#3B82F6',
    url: 'https://cursor.sh/',
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI代码补全工具',
    category: 'AI编程助手',
    icon: '💻',
    iconColor: '#8B5CF6',
    url: 'https://www.tabnine.com/',
  },
  {
    id: 'replit',
    name: 'Replit AI',
    description: '集成AI的在线IDE',
    category: 'AI编程助手',
    icon: '💻',
    iconColor: '#F59E0B',
    url: 'https://replit.com/',
  },
  {
    id: 'codium',
    name: 'Codium AI',
    description: 'AI代码生成和测试工具',
    category: 'AI编程助手',
    icon: '💻',
    iconColor: '#10B981',
    url: 'https://www.codium.ai/',
  },

  // 常用小工具
  {
    id: 'image-upscale',
    name: 'AI图片放大',
    description: '智能提升图片分辨率',
    category: '常用小工具',
    icon: '🖼️',
    iconColor: '#EC4899',
    url: 'https://www.upscayl.com/',
  },
  {
    id: 'bg-remove',
    name: 'AI去背景',
    description: '一键移除图片背景',
    category: '常用小工具',
    icon: '✂️',
    iconColor: '#8B5CF6',
    url: 'https://www.remove.bg/',
  },
  {
    id: 'pdf-ai',
    name: 'AI PDF分析',
    description: '智能解析PDF文档',
    category: '常用小工具',
    icon: '📄',
    iconColor: '#EF4444',
    url: 'https://chatpdf.com/',
  },
  {
    id: 'voice-clone',
    name: 'AI声音克隆',
    description: '克隆任意人的声音',
    category: '常用小工具',
    icon: '🎙️',
    iconColor: '#3B82F6',
    url: 'https://elevenlabs.io/',
  },
  {
    id: 'translate-ai',
    name: 'AI翻译',
    description: '智能多语言翻译',
    category: '常用小工具',
    icon: '🌐',
    iconColor: '#10B981',
    url: 'https://www.deepl.com/translator',
  },
];

// 根据分类筛选智能体
export function getAgentsByCategory(categoryId: string): Agent[] {
  if (categoryId === 'all') {
    return allAgents;
  }
  return allAgents.filter(agent => agent.category === categories.find(c => c.id === categoryId)?.name);
}

// 获取所有分类的智能体数量
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  allAgents.forEach(agent => {
    const category = categories.find(c => c.name === agent.category);
    if (category) {
      counts[category.id] = (counts[category.id] || 0) + 1;
    }
  });
  return counts;
}
