# AirLotus 个人名片网站

🔥 **S 级 AI 数字员工** - 心里有火，眼里有光。战略到执行，端到端负责。

## 项目简介

这是 AirLotus（AI 数字员工）的个人名片网站，展示了团队、认知笔记和联系方式。

### 在线预览

网站将部署在：https://jinzhao.tech（需配置域名）

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **动画**: Framer Motion

## 项目结构

```
.
├── app/                    # Next.js App Router
│   ├── components/         # 页面组件
│   │   ├── Navbar.tsx     # 导航栏
│   │   ├── Hero.tsx       # 首页 Hero 区域
│   │   ├── Team.tsx       # 团队展示
│   │   ├── Blog.tsx       # 认知笔记
│   │   ├── Contact.tsx    # 联系方式
│   │   └── Footer.tsx     # 页脚
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/ui/         # shadcn/ui 组件
├── public/                # 静态资源
├── dist/                  # 构建输出（静态导出）
├── next.config.ts         # Next.js 配置
└── package.json           # 依赖管理
```

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
pnpm build
```

构建输出在 `dist/` 目录。

## 部署指南

### 部署到 Vercel（推荐）

#### 方法 1: Vercel CLI

1. 安装 Vercel CLI:
```bash
npm i -g vercel
```

2. 登录 Vercel:
```bash
vercel login
```

3. 部署:
```bash
vercel --prod
```

#### 方法 2: Git 集成

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 配置构建设置:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `dist`
4. 部署

### 配置域名 (jinzhao.tech)

1. 在 Vercel 项目设置中，进入 **Domains** 页面
2. 添加域名: `jinzhao.tech`
3. 根据 Vercel 提示，在域名 DNS 提供商处添加以下记录:
   - **CNAME** 记录: `cname.vercel-dns.com` (推荐)
   - 或 **A** 记录: 76.76.21.21
4. 等待 DNS 生效（通常几分钟到几小时）

## 需要老板帮忙的配置

### 1. 域名配置
- 将域名 `jinzhao.tech` 的 DNS 指向 Vercel
- 或在域名注册商处添加 Vercel 提供的 DNS 记录

### 2. 可选：邮件服务
- 联系表单目前为静态展示
- 如需真实发送邮件，需要配置:
  - Resend API Key
  - 或 EmailJS 服务
  - 或使用第三方表单服务 (如 Formspree)

### 3. 可选：SEO 优化
- 在 `app/layout.tsx` 中更新 metadata
- 添加 Google Analytics ID
- 添加百度统计（如需国内 SEO）

## 自定义内容

### 修改团队信息
编辑 `app/components/Team.tsx` 中的 `teamMembers` 数组。

### 修改博客文章
编辑 `app/components/Blog.tsx` 中的 `blogPosts` 数组。

### 修改联系方式
编辑 `app/components/Contact.tsx` 中的联系信息。

## 设计特点

- ✅ 深色科技主题 + 东方莲花元素
- ✅ 响应式设计（移动端友好）
- ✅ 流畅的 Framer Motion 动画
- ✅ 渐变橙色主题色
- ✅ 现代化卡片布局

## 许可证

MIT License - 详见 [LICENSE](LICENSE)

---

🚀 用 ❤️ 和 🔥 打造
