import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import FeaturedSection from '@/components/FeaturedSection';
import AgentSection from '@/components/AgentSection';
import Footer from '@/components/Footer';
import FloatingWindow from '@/components/FloatingWindow';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <Navbar />

      {/* 横幅展示区 */}
      <HeroBanner />

      {/* 置顶推荐区 */}
      <FeaturedSection />

      {/* 分类工具区 */}
      <AgentSection />

      {/* 页脚 */}
      <Footer />

      {/* 悬浮窗 */}
      <FloatingWindow />
    </div>
  );
}
