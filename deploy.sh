#!/bin/bash

# GitHub Pages 部署脚本
# 使用方法: bash deploy.sh

echo "🚀 开始部署到 GitHub Pages..."

# 检查是否在 git 仓库中
if [ ! -d ".git" ]; then
    echo "❌ 错误: 当前目录不是一个 git 仓库"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
pnpm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 检查 out 目录是否存在
if [ ! -d "out" ]; then
    echo "❌ 错误: out 目录不存在，构建可能失败"
    exit 1
fi

# 创建 gh-pages 分支
echo "🌿 准备 gh-pages 分支..."

# 临时保存当前分支
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# 检查 gh-pages 分支是否存在
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git branch -D gh-pages
fi

# 从当前分支创建孤儿分支
git checkout --orphan gh-pages

# 清空工作目录，只保留 out 目录内容
git rm -rf .

# 复制 out 目录的内容到根目录
cp -r out/* .
cp -r out/.* . 2>/dev/null || true

# 添加所有文件
git add .

# 提交
git commit -m "Deploy to GitHub Pages - $(date +'%Y-%m-%d %H:%M:%S')"

# 推送
echo "📤 推送到 GitHub..."
git push origin gh-pages --force

# 切换回原分支
git checkout $CURRENT_BRANCH

echo "✅ 部署完成！"
echo "🌐 访问地址: https://yy19960611.github.io/ai-ceshi-1haocangku/"
