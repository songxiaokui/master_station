import type { icons } from "lucide-react"

interface Item {
  name: string
  desc: string
  link: string
  icon: keyof typeof icons
}

interface Config {
  github: string
  projects: Item[]
  links: Item[]
  about: { mail: string; me: string; frontend: string[]; backend: string[] }
}
// https://lucide.dev/icons/
// https://yesicon.app/
export const config: Config = {
  github: "https://github.com/songxiaokui",
  projects: [
    {
      name: "AustMusic",
      desc: "私人音乐空间 - 收藏心动旋律，享受专属聆听体验",
      link: "https://music.austsxk.com/",
      icon: "Headphones",
    },
    {
      name: "动析 ATHLETICAX",
      desc: "AI 运动数据分析 - 聚合 Garmin、COROS 与 Keep，生成训练洞察与计划",
      link: "https://athleticax.austsxk.com/",
      icon: "Activity",
    },
    {
      name: "DeepSeek Harness",
      desc: "AI 智能体平台 - 自托管的 DeepSeek Agent",
      link: "https://deepseek.austsxk.com/",
      icon: "Bot",
    },
    {
      name: "SceneMint",
      desc: "AI 图像生成 - 输入自然语言描述，一键生成创意图片",
      link: "https://img.austsxk.com/",
      icon: "ImagePlus",
    },
    {
      name: "幸运抽卡",
      desc: "趣味随机抽卡 - 用随机选择开启惊喜时刻",
      link: "https://wellgame.austsxk.com/",
      icon: "Dices",
    },
  ],
  links: [
    // {
    //   name: "UPTIME",
    //   link: "https://up.sunls.de",
    //   desc: "服务监控，看看挂了没",
    //   icon: "Activity",
    // },
    {
      name: "running",
      desc: "运动 - 丈量每一寸走过的土地",
      link: "https://running.austsxk.com",
      icon: "PlaneLanding",
    },
    {
      name: "blog",
      desc: "博客 - 记录成长点滴",
      link: "https://blog.austsxk.com",
      icon: "BookOpenCheck",
    },
  ],
  about: {
    mail: "www.austsxk@gmail.com",
    me: "天之道，损有余而补不足；人之道，损不足而补有余。",
    backend: ["Golang", "Python", "C++", "Linux", "Kubernetes", "Docker", "LLM", "RAG", "MCP"],
    frontend: ["Vue", "React", "Next.js"],
  },
}
