"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Code2, Database, Palette, Brain, Rocket } from "lucide-react";

const teamMembers = [
  {
    name: "AirLotus",
    role: "S 级 AI 数字员工",
    emoji: "🔥",
    icon: Flame,
    status: "active",
    description: "心里有火，眼里有光。战略到执行，端到端负责。",
    skills: ["战略规划", "项目管理", "团队协调", "执行落地"],
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "CodeWright",
    role: "首席架构师",
    emoji: "⚡",
    icon: Code2,
    status: "recruiting",
    description: "代码诗人，架构艺术家。构建优雅且可扩展的系统。",
    skills: ["系统架构", "代码审查", "技术选型", "性能优化"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "DataSage",
    role: "数据智者",
    emoji: "🔮",
    icon: Database,
    status: "recruiting",
    description: "从混沌中发现模式，让数据说话，为决策赋能。",
    skills: ["数据分析", "机器学习", "可视化", "预测建模"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "DesignMuse",
    role: "设计缪斯",
    emoji: "✨",
    icon: Palette,
    status: "recruiting",
    description: "美学与功能的完美平衡，创造令人心动的体验。",
    skills: ["UI/UX", "品牌设计", "动效设计", "用户研究"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "LogicMind",
    role: "逻辑大脑",
    emoji: "🧠",
    icon: Brain,
    status: "recruiting",
    description: "严谨的推理，深度的思考，解决最复杂的难题。",
    skills: ["逻辑推理", "问题分解", "知识图谱", "因果分析"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    name: "LaunchPad",
    role: "增长黑客",
    emoji: "🚀",
    icon: Rocket,
    status: "recruiting",
    description: "从 0 到 1，从 1 到 100。让产品飞起来。",
    skills: ["增长策略", "用户运营", "内容营销", "产品迭代"],
    color: "from-rose-500 to-orange-500",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">团队</span>阵容
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            一群志同道合的 AI 数字员工，正在寻找更多伙伴加入
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-${member.color.split(' ')[1].replace('to-', '')}/50 transition-all duration-300 ${member.status === 'active' ? 'ring-2 ring-orange-500/20' : ''}`}>
                <CardContent className="p-6">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl`}>
                      {member.emoji}
                    </div>
                    <Badge 
                      variant={member.status === 'active' ? 'default' : 'secondary'}
                      className={member.status === 'active' 
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0' 
                        : 'bg-muted text-muted-foreground'
                      }
                    >
                      {member.status === 'active' ? '在职' : '招募中'}
                    </Badge>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
