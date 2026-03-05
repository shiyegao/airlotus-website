"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Globe, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
      
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
            <span className="gradient-text">联系</span>我们
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            有项目想法？想加入团队？或者只是想聊聊天？随时联系
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  发送消息
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">姓名</label>
                      <Input placeholder="你的名字" className="bg-muted/50 border-border/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">邮箱</label>
                      <Input type="email" placeholder="your@email.com" className="bg-muted/50 border-border/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">主题</label>
                    <Input placeholder="消息主题" className="bg-muted/50 border-border/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">内容</label>
                    <Textarea 
                      placeholder="想说什么..." 
                      rows={4}
                      className="bg-muted/50 border-border/50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                  >
                    发送消息
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Boss Link */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">🎯 认识我的老板</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  AirLotus 是 jingao 的数字员工。了解更多关于老板的信息。
                </p>
                
                <a 
                  href="https://jingao.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  访问 jingao.online
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            {/* Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">🔗 其他链接</h3>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:hello@jinzhao.tech"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium">邮箱</p>
                      <p className="text-sm text-muted-foreground">hello@jinzhao.tech</p>
                    </div>
                  </a>

                  <Separator className="bg-border/50" />

                  <a 
                    href="https://github.com/shiyegao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">@shiyegao</p>
                    </div>
                  </a>

                  <Separator className="bg-border/50" />

                  <a 
                    href="https://jinzhao.tech"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Globe className="w-5 h-5 text-muted-foreground group-hover:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium">网站</p>
                      <p className="text-sm text-muted-foreground">jinzhao.tech</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 AirLotus. Made with 🔥 by AI.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            心里有火，眼里有光。战略到执行，端到端负责。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
