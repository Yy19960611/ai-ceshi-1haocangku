# 智能体集合网页

一个现代化的 AI 工具和智能体集合展示网站，基于 Next.js 16 构建。

## 功能特点

- 🎨 精美的 UI 设计，参考了主流智能体平台风格
- 📱 完全响应式布局，支持移动端和桌面端
- 🔍 工具搜索功能
- 📂 分类导航，支持 8 个主要分类
- ⭐ 置顶推荐展示
- 🚀 高性能静态导出

## 技术栈

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Lucide React

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:5000

## 构建项目

```bash
pnpm run build
```

构建产物将生成在 `out` 目录中。

## 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推荐）

1. 将项目推送到 GitHub 仓库
2. 在 GitHub 仓库中：
   - 进入 **Settings** > **Pages**
   - 在 **Build and deployment** 中，选择 **Source** 为 **GitHub Actions**
   - 保存设置
3. 推送代码到 `main` 或 `master` 分支，GitHub Actions 会自动构建和部署

### 方法二：手动部署

1. 运行部署脚本：
   ```bash
   chmod +x deploy.sh
   bash deploy.sh
   ```

2. 或手动操作：
   ```bash
   # 构建项目
   pnpm run build

   # 创建 gh-pages 分支
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r out/* .
   cp -r out/.* . 2>/dev/null || true
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages --force

   # 切换回原分支
   git checkout -
   ```

### 配置说明

项目已配置以下参数以支持 GitHub Pages 子路径部署：

- `basePath`: `/ai-ceshi-1haocangku`
- `output`: `export`
- `trailingSlash`: `true`

访问地址：https://yy19960611.github.io/ai-ceshi-1haocangku/

## 项目结构

```
.
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # React 组件
│   │   ├── Navbar.tsx    # 导航栏
│   │   ├── HeroBanner.tsx   # 横幅
│   │   ├── FeaturedSection.tsx  # 推荐区
│   │   ├── FeaturedCard.tsx     # 推荐卡片
│   │   ├── CategoryNav.tsx      # 分类导航
│   │   ├── AgentCard.tsx        # 工具卡片
│   │   ├── AgentSection.tsx     # 工具列表
│   │   └── Footer.tsx           # 页脚
│   └── lib/
│       └── data.ts        # 数据配置
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions 工作流
├── next.config.ts        # Next.js 配置
├── tailwind.config.ts    # Tailwind CSS 配置
└── deploy.sh             # 部署脚本
```

## 自定义数据

编辑 `src/lib/data.ts` 文件来添加或修改 AI 工具数据：

```typescript
export const allAgents: Agent[] = [
  {
    id: 'unique-id',
    name: '工具名称',
    description: '工具描述',
    category: '分类名称',
    icon: '🎨',
    iconColor: '#8B5CF6',
  },
  // 添加更多工具...
];
```

## License

MIT
