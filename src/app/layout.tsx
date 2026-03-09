import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '智能体集合 | 发现最好的AI工具',
    template: '%s | 智能体集合',
  },
  description: '精选国内外优质AI工具和智能体，助你提升工作效率，释放创造力。包含AI通用模型、AI绘画设计、AI视频生成等多个分类。',
  keywords: [
    'AI工具',
    '智能体',
    'AI通用模型',
    'AI绘画',
    'AI视频',
    'ChatGPT',
    'DeepSeek',
    'Kimi',
    'Midjourney',
    'AI助手',
    '人工智能',
  ],
  authors: [{ name: '智能体集合', url: 'https://example.com' }],
  generator: '智能体集合',
  openGraph: {
    title: '智能体集合 | 发现最好的AI工具',
    description: '精选国内外优质AI工具和智能体，助你提升工作效率，释放创造力。',
    url: 'https://example.com',
    siteName: '智能体集合',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
