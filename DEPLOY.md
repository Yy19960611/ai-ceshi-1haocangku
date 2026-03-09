# GitHub Pages 部署指南

## 快速开始

### 步骤 1：准备 GitHub 仓库

1. 在 GitHub 上创建新仓库或使用现有仓库
2. 确保仓库名为 `ai-ceshi-1haocangku`，或者使用你自己的仓库名

### 步骤 2：关联本地仓库

```bash
# 如果还没有初始化 git 仓库
git init
git add .
git commit -m "Initial commit"

# 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/yy19960611/ai-ceshi-1haocangku.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

#### 使用 GitHub Actions（推荐）：

1. 进入 GitHub 仓库
2. 点击 **Settings** 标签
3. 左侧菜单选择 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source** 选择 **GitHub Actions**
   - 点击 **Save**
5. 推送代码或手动触发 workflow：
   - 进入 **Actions** 标签
   - 选择 **Deploy to GitHub Pages**
   - 点击 **Run workflow** > **Run workflow**

#### 使用 gh-pages 分支：

1. 进入 GitHub 仓库
2. 点击 **Settings** 标签
3. 左侧菜单选择 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source** 选择 **Deploy from a branch**
   - **Branch** 选择 **gh-pages** 和 **/ (root)**
   - 点击 **Save**
5. 使用部署脚本：
   ```bash
   bash deploy.sh
   ```

### 步骤 4：验证部署

1. 等待几分钟让 GitHub Pages 部署完成
2. 访问：https://yy19960611.github.io/ai-ceshi-1haocangku/
3. 如果使用不同的仓库名，地址为：`https://你的用户名.github.io/仓库名/`

## 详细说明

### GitHub Actions 自动部署

项目已配置 GitHub Actions 工作流（`.github/workflows/deploy.yml`），当你推送代码到 `main` 或 `master` 分支时，会自动：

1. 安装依赖
2. 构建项目
3. 部署到 GitHub Pages

优势：
- ✅ 自动化，无需手动操作
- ✅ 每次推送都会自动更新
- ✅ 支持手动触发部署
- ✅ 自动处理构建和部署流程

### 手动部署脚本

如果不想使用 GitHub Actions，可以使用 `deploy.sh` 脚本：

```bash
# 给脚本添加执行权限（只需一次）
chmod +x deploy.sh

# 运行部署脚本
bash deploy.sh
```

脚本会自动：
1. 构建项目
2. 创建/更新 `gh-pages` 分支
3. 推送到 GitHub

### 手动部署（不使用脚本）

如果你想完全手动控制：

```bash
# 1. 构建项目
pnpm run build

# 2. 切换到新分支
git checkout --orphan gh-pages

# 3. 清空所有文件
git rm -rf .

# 4. 复制构建产物
cp -r out/* .
cp -r out/.* . 2>/dev/null || true

# 5. 提交更改
git add .
git commit -m "Deploy to GitHub Pages"

# 6. 推送分支
git push origin gh-pages --force

# 7. 切换回原分支
git checkout main
```

## 常见问题

### Q: 构建失败怎么办？

A: 检查以下几点：
1. 确保 `node` 版本 >= 20
2. 确保 `pnpm` 已安装
3. 检查 `next.config.ts` 配置是否正确

### Q: 部署后页面空白？

A: 可能的原因：
1. `basePath` 配置不正确，需要与仓库名匹配
2. 检查浏览器控制台是否有错误
3. 确保所有静态文件都已上传

### Q: 如何修改部署路径？

A: 编辑 `next.config.ts`：

```typescript
const nextConfig: NextConfig = {
  basePath: '/你的子路径',  // 修改这里
  // ... 其他配置
};
```

### Q: GitHub Actions 部署失败？

A: 检查 GitHub Actions 日志：
1. 进入仓库的 **Actions** 标签
2. 查看失败的 workflow 运行
3. 点击查看详细日志

常见失败原因：
- 仓库没有授予 Actions 写入权限
- Node.js 版本不兼容
- 构建脚本错误

## 更新网站内容

### 更新 AI 工具数据

编辑 `src/lib/data.ts` 文件：

```typescript
export const allAgents: Agent[] = [
  // 添加或修改工具
];
```

然后提交并推送：

```bash
git add src/lib/data.ts
git commit -m "更新工具数据"
git push origin main
```

### 更新网站样式

修改对应的组件文件（如 `src/components/Navbar.tsx`），然后提交推送。

### 添加新功能

1. 创建新组件或修改现有组件
2. 更新 `src/app/page.tsx` 引用新组件
3. 测试本地效果：`pnpm dev`
4. 提交并推送，自动触发部署

## 优化建议

### 添加自定义域名

1. 在 `public/` 目录下创建 `CNAME` 文件
2. 在文件中写入你的域名（如：`www.yourdomain.com`）
3. 在域名 DNS 设置中添加 CNAME 记录
4. 在 GitHub Pages 设置中配置自定义域名

### 优化构建速度

- 在 `next.config.ts` 中启用 `swcMinify`
- 使用图片优化（已配置 `images.remotePatterns`）
- 启用静态生成（已配置）

### SEO 优化

- 更新 `src/app/layout.tsx` 中的 metadata
- 在每个页面添加合适的标题和描述
- 使用语义化 HTML 标签

## 技术支持

如果遇到问题，可以：
1. 查看 [Next.js 文档](https://nextjs.org/docs)
2. 查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
3. 检查项目 README.md
