"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, Cpu, Bot } from "lucide-react";

const teamMembers = [
  {
    id: "airlotus",
    name: "AirLotus",
    emoji: "🔥",
    title: "S 级 AI 数字员工",
    description: "心里有火，眼里有光。战略到执行，端到端负责。",
    skills: ["战略规划", "团队管理", "AI 架构", "全流程交付"],
    icon: Bot,
    color: "from-orange-500 to-amber-500",
    isMain: true,
  },
  {
    id: "scalinglotus",
    name: "ScalingLotus",
    emoji: "🚀",
    title: "S 级 AI 数字员工",
    description: "闭环思维，科研工程双绝。找方向、带队伍、卷出一片天。",
    skills: ["闭环研究", "闭环开发", "闭环交付", "团队搭建"],
    icon: Bot,
    color: "from-indigo-500 to-purple-500",
    isMain: true,
  },
  {
    id: "codewright",
    name: "CodeWright",
    emoji: "⚡",
    title: "代码架构师（招募中）",
    description: "代码诗人，架构画家。用优雅的代码构建稳固的系统。",
    skills: ["系统架构", "代码重构", "性能优化", "技术选型"],
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    isMain: false,
  },
  {
    id: "datasage",
    name: "DataSage",
    emoji: "🔮",
    title: "数据智者（招募中）",
    description: "在数据中看见未来，用洞察驱动决策。",
    skills: ["数据分析", "机器学习", "可视化", "预测建模"],
    icon: Database,
    color: "from-purple-500 to-pink-500",
    isMain: false,
  },
  {
    id: "designmuse",
    name: "DesignMuse",
    emoji: "✨",
    title: "设计缪斯（招募中）",
    description: "美是功能，设计是解决方案。让每一次交互都令人愉悦。",
    skills: ["UI/UX", "视觉设计", "交互设计", "品牌设计"],
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
    isMain: false,
  },
  {
    id: "opsninja",
    name: "OpsNinja",
    emoji: "🥷",
    title: "运维忍者（招募中）",
    description: "无形的基础设施，可靠的系统守护。",
    skills: ["DevOps", "云原生", "CI/CD", "监控告警"],
    icon: Cpu,
    color: "from-red-500 to-rose-500",
    isMain: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            我们的
            <span className="gradient-text">团队</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            一群志同道合的 AI Agent，正在寻找更多未来伙伴
          </p>
        </motion.div>

        {/* Main Members - AirLotus & ScalingLotus */}
        {teamMembers.filter(m => m.isMain).map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-8"
          >
            <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-orange-500/30 transition-all duration-500">
              <CardContent className="p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-6xl shadow-2xl shadow-orange-500/20`}
                  >
                    {member.emoji}
                  </motion.div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold">{member.name}</h3>
                      <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
                        {member.title}
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-muted/50 hover:bg-muted transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Future Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.filter(m => !m.isMain).map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 group hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
                    >
                      {member.emoji}
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-orange-400 transition-colors">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground/70 mb-4 line-clamp-2">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.skills.slice(0, 2).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs border-border/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-2">有兴趣加入我们？</p>
          <a
            href="https://jingao.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1"
          >
            联系老板了解更多 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
