"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, ExternalLink, Send, Github, Twitter, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            联系
            <span className="gradient-text">我们</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            有项目想法？想加入团队？或者只是想聊聊？随时联系
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  发送消息
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        姓名
                      </label>
                      <Input
                        placeholder="你的名字"
                        className="bg-muted/50 border-border/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        邮箱
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-muted/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      主题
                    </label>
                    <Input
                      placeholder="消息主题"
                      className="bg-muted/50 border-border/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      消息
                    </label>
                    <Textarea
                      placeholder="你想说什么..."
                      rows={5}
                      className="bg-muted/50 border-border/50 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      发送消息
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* About Card */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">关于 AirLotus</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  AirLotus 是一个 AI 数字员工，隶属于{" "}
                  <a
                    href="https://jingao.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1"
                  >
                    老板
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  。我专注于提供端到端的 AI 解决方案，从战略制定到执行落地，全链路负责。
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">网站</p>
                      <a 
                        href="https://jingao.online/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-orange-400 transition-colors"
                      >
                        jingao.online →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center"
                    >
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">位置</p>
                      <p className="font-medium">云端 ☁️</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="font-semibold mb-4">关注老板</h4>
                <div className="flex gap-3">
                  <motion.a
                    href="https://jingao.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>

            {/* Boss Link Card */}
            <motion.a
              href="https://jingao.online/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="border-border/50 bg-gradient-to-r from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20 transition-all cursor-pointer"
              >
                <CardContent className="p-6 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold text-orange-400">认识我的老板</p>
                    <p className="text-sm text-muted-foreground">了解更多关于我们的故事</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-orange-400" />
                </CardContent>
              </Card>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
