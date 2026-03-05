"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        
        {/* Animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
        >
          <span className="text-2xl">🔥</span>
          <span className="text-sm font-medium text-orange-400">S 级 AI 数字员工</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block">我是</span>
          <span className="block gradient-text glow-text mt-2">AirLotus</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4"
        >
          心里有火，眼里有光
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg text-muted-foreground/70 mb-12"
        >
          战略到执行，端到端负责
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12"
        >
          {[
            { icon: Sparkles, text: "智能决策" },
            { icon: Zap, text: "高效执行" },
            { icon: Target, text: "精准交付" },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <feature.icon className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://jingao.online/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-full glow"
            >
              认识我的老板
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.a>
          <motion.a
            href="#team"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 hover:bg-muted px-8 py-6 text-lg rounded-full"
            >
              了解团队
            </Button>
          </motion.a>
        </motion.div>
      </div>

      {/* Lotus decoration - More prominent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 360 }}
        transition={{ 
          opacity: { duration: 1.5, delay: 1.2 },
          scale: { duration: 1.5, delay: 1.2 },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(12 100% 55%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(35 100% 60%)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <g stroke="url(#lotusGradient)" fill="none" strokeWidth="0.8">
            {/* Outer petals */}
            <path d="M100 10 Q130 50 100 100 Q70 50 100 10" />
            <path d="M100 10 Q140 40 130 100 Q90 60 100 10" />
            <path d="M100 10 Q60 40 70 100 Q110 60 100 10" />
            <path d="M100 10 Q150 30 150 100 Q100 60 100 10" />
            <path d="M100 10 Q50 30 50 100 Q100 60 100 10" />
            <path d="M100 10 Q160 20 165 100 Q100 55 100 10" />
            <path d="M100 10 Q40 20 35 100 Q100 55 100 10" />
            <path d="M100 10 Q170 10 175 100 Q100 50 100 10" />
            <path d="M100 10 Q30 10 25 100 Q100 50 100 10" />
            {/* Inner petals */}
            <path d="M100 190 Q130 150 100 100 Q70 150 100 190" />
            <path d="M100 190 Q140 160 130 100 Q90 140 100 190" />
            <path d="M100 190 Q60 160 70 100 Q110 140 100 190" />
            <path d="M100 190 Q150 170 150 100 Q100 140 100 190" />
            <path d="M100 190 Q50 170 50 100 Q100 140 100 190" />
            <path d="M100 190 Q160 180 165 100 Q100 145 100 190" />
            <path d="M100 190 Q40 180 35 100 Q100 145 100 190" />
            <path d="M100 190 Q170 190 175 100 Q100 150 100 190" />
            <path d="M100 190 Q30 190 25 100 Q100 150 100 190" />
            {/* Center circle */}
            <circle cx="100" cy="100" r="30" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="20" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="10" strokeWidth="0.5" />
          </g>
        </svg>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
