# 学生成绩认证系统 (Academic Performance Star Travel Chain)

![版本](https://img.shields.io/badge/版本-1.0.0-blue)
![许可证](https://img.shields.io/badge/许可证-MIT-green)

一个基于Next.js和Ant Design开发的现代化学生成绩管理与认证系统，使用区块链技术保障数据真实性。

## 📝 目录

- [项目介绍](#项目介绍)
- [功能特点](#功能特点)
- [技术栈](#技术栈)
- [安装与部署](#安装与部署)
  - [本地开发](#本地开发)
  - [生产环境部署](#生产环境部署)
- [系统使用指南](#系统使用指南)
  - [管理员功能](#管理员功能)
  - [教师功能](#教师功能)
  - [学生功能](#学生功能)
- [系统架构](#系统架构)
- [数据库说明](#数据库说明)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 项目介绍

学生成绩认证系统是一个专为教育机构设计的成绩管理平台，它不仅提供了传统的成绩录入与管理功能，还通过现代技术保障数据的真实性和可靠性。系统支持多角色访问控制，为管理员、教师和学生提供不同的功能和视图。

## 功能特点

- **安全可靠**: 基于区块链技术，保障数据真实性，防止成绩被篡改
- **全面记录**: 详细记录学生所有课程成绩，提供完整的学习轨迹
- **数据分析**: 智能分析成绩趋势，帮助学生了解自己的学习状况
- **权威认证**: 提供权威的成绩认证服务，方便升学和就业使用
- **多角色支持**: 为管理员、教师和学生提供不同的功能和界面
- **响应式设计**: 支持各种设备，从移动设备到桌面环境
- **简洁美观的界面**: 使用Ant Design组件，提供现代化用户体验

## 技术栈

- **前端**：
  - Next.js: React框架，支持SSR
  - Ant Design: UI组件库
  - Framer Motion: 动画库
  - TypeScript: 类型安全的JavaScript

- **后端**：
  - Next.js API Routes: 服务端API
  - Prisma: 数据库ORM
  - MySQL: 关系型数据库
  - JWT: 用户认证

- **部署**：
  - Vercel: 应用部署
  - PlanetScale/MySQL: 数据库部署

## 安装与部署

### 本地开发

1. **克隆仓库**

```bash
git clone https://github.com/jwyismynane/Academic-performance-star-travel-chain.git
cd Academic-performance-star-travel-chain
```

2. **安装依赖**

```bash
npm install
```

3. **环境配置**

复制环境变量示例文件并根据需要修改：

```bash
cp .env.example .env
```

4. **数据库设置**

确保MySQL已安装并运行，然后执行：

```bash
npx prisma migrate dev
npm run db:seed
```

5. **启动开发服务器**

```bash
npm run dev
```

6. **访问应用**

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 生产环境部署

#### Vercel部署

1. Fork此仓库到你的GitHub账户
2. 在Vercel上导入项目
3. 设置必要的环境变量
4. 部署!

## 系统使用指南

### 默认账户

系统初始化时会创建以下测试账户：

- **管理员**:
  - 账号: admin@example.com
  - 密码: admin123

- **教师**:
  - 账号: teacher@example.com
  - 密码: teacher123

- **学生**:
  - 账号: student@example.com
  - 密码: student123

### 管理员功能

管理员拥有系统的最高权限，可以：

- 管理用户：创建、编辑、删除用户
- 管理课程：创建、编辑、删除课程
- 查看系统日志：监控所有用户活动
- 查看全局统计数据：系统整体使用情况

### 教师功能

教师可以：

- 管理课程和班级：查看负责的课程
- 录入和修改学生成绩：为学生添加成绩记录
- 生成成绩分析报告：了解学生表现
- 查看课程统计数据：课程的整体情况

### 学生功能

学生可以：

- 查看个人所有课程成绩：了解学习情况
- 查看成绩统计与分析：了解学习趋势
- 导出成绩认证报告：用于求职或升学
- 分享成绩证明：向第三方提供成绩证明

## 系统架构

系统采用三层架构：

1. **表示层**：Next.js前端应用，负责用户界面
2. **业务逻辑层**：Next.js API Routes，处理业务逻辑
3. **数据访问层**：Prisma ORM，负责数据库操作

## 数据库说明

系统使用MySQL数据库，主要包含以下实体：

- **User**: 用户信息
- **Course**: 课程信息
- **Grade**: 成绩记录
- **Verification**: 成绩验证记录
- **SystemLog**: 系统日志

详细的数据库结构可以在`prisma/schema.prisma`文件中查看。

## 贡献指南

我们欢迎任何形式的贡献！如果你想参与项目开发，请遵循以下步骤：

1. Fork本仓库
2. 创建你的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到远程分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证

本项目采用MIT许可证。详情请参阅LICENSE文件。

---

© 2023 学生成绩认证系统 - 保障教育数据真实可信 