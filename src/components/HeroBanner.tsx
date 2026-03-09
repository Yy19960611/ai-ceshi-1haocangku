import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* 左侧内容 */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              发现最好的
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}AI工具
              </span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
              精选国内外优质AI工具和智能体，助你提升工作效率，释放创造力
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                开始探索
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 transition-all hover:border-blue-500 hover:text-blue-600">
                了解更多
              </button>
            </div>
          </div>

          {/* 右侧二维码卡片 */}
          <div className="flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">扫码参加特训营</span>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700">
                  3天
                </span>
              </div>
              <div className="flex aspect-square w-40 items-center justify-center bg-gray-100 md:w-48">
                {/* 这里可以用实际的二维码图片 */}
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="h-32 w-32 rounded bg-gradient-to-br from-blue-100 to-purple-100 md:h-36 md:w-36">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-4xl">📱</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">扫码体验AI工具</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/40 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-200/40 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
