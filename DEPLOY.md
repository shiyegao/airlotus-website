# 🚀 AirLotus 网站部署指南

## 📦 交付物清单

✅ 完整的 Next.js 14 项目代码
✅ README.md 项目文档
✅ vercel.json Vercel 配置文件
✅ .gitignore 文件
✅ 构建输出 (dist/)

---

## 🚀 快速部署步骤

### 方式一：Vercel CLI 部署（推荐）

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署到生产环境**
   ```bash
   cd ~/.openclaw/workspace/website-airlotus
   vercel --prod
   ```

### 方式二：Git 集成部署

1. **创建 GitHub 仓库**
   ```bash
   cd ~/.openclaw/workspace/website-airlotus
   git init
   git add .
   git commit -m "Initial commit: AirLotus website"
   git remote add origin https://github.com/yourusername/airlotus-website.git
   git push -u origin main
   ```

2. **在 Vercel 导入项目**
   - 访问 https://vercel.com/new
   - 选择 GitHub 仓库
   - 框架预设: Next.js
   - 构建命令: `pnpm build`
   - 输出目录: `dist`
   - 点击 Deploy

---

## 🌐 配置域名 (jinzhao.tech)

### 步骤 1: 在 Vercel 添加域名

1. 进入 Vercel 项目 Dashboard
2. 点击 **Settings** → **Domains**
3. 输入 `jinzhao.tech` 并点击 **Add**

### 步骤 2: 配置 DNS 记录

在域名注册商（如阿里云、腾讯云、Cloudflare）的 DNS 管理页面添加以下记录之一：

**推荐：CNAME 记录**
```
类型: CNAME
主机: @
值: cname.vercel-dns.com
TTL: 自动/600
```

**备选：A 记录**
```
类型: A
主机: @
值: 76.76.21.21
TTL: 自动/600
```

### 步骤 3: 等待生效

- DNS 生效通常需要 **几分钟到几小时**
- Vercel 会自动配置 HTTPS 证书

---

## ⚙️ 环境变量配置（可选）

如需配置邮件服务或其他 API，在项目设置中添加：

| 变量名 | 说明 |
|--------|------|
| `RESEND_API_KEY` | Resend 邮件服务 API Key |
| `CONTACT_EMAIL` | 接收联系表单通知的邮箱 |

---

## 🔧 本地开发命令

```bash
# 进入项目目录
cd ~/.openclaw/workspace/website-airlotus

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
npx serve dist
```

---

## 📝 后续更新维护

### 修改内容
- **团队信息**: 编辑 `app/components/Team.tsx`
- **博客文章**: 编辑 `app/components/Blog.tsx`
- **联系信息**: 编辑 `app/components/Contact.tsx`

### 更新部署
```bash
git add .
git commit -m "Update content"
git push
# Vercel 会自动重新部署
```

---

## 🐛 常见问题

### 1. 构建失败
```bash
# 清除缓存后重试
rm -rf .next dist node_modules/.cache
pnpm build
```

### 2. 域名不生效
- 检查 DNS 记录是否正确
- 使用 `dig jinzhao.tech` 或在线 DNS 检查工具验证
- 等待 DNS 传播（最长 24 小时）

### 3. 静态资源 404
- 确保 `next.config.ts` 中配置了 `output: 'export'`
- 确保 `dist` 目录包含所有资源

---

## 🎨 网站特色

- 🔥 **S 级 AI 数字员工** 主题
- 🌙 深色科技感 + 东方莲花元素
- 📱 响应式设计，移动端友好
- ✨ Framer Motion 流畅动画
- 🎯 链接到老板网站 https://jingao.online/

---

**祝部署顺利！** 🚀
