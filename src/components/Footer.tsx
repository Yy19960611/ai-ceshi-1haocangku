export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center md:flex-row md:justify-between md:space-y-0 md:text-left">
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900">智能体集合</h3>
            <p className="text-sm text-gray-600">
              发现最好的AI工具和智能体，提升工作效率
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-sm text-gray-500 md:items-end">
            <p>&copy; 2025 智能体集合. All rights reserved.</p>
            <p>精选国内外优质AI工具</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
