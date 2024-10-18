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

    // {
    //   name: "divination",
    //   desc: "AI 算卦 - 根据六次硬币随机结果，生成卦象，并使用 AI 分析",
    //   link: "https://divination.sunls.de",
    //   icon: "BrainCircuit",
    // },
    // {
    //   name: "online-tools",
    //   desc: "一款简洁高效的在线工具箱｜JSON 格式化，Crontab 时间计算，Base64 / URL 编解码",
    //   link: "https://tool.sunls.de",
    //   icon: "DraftingCompass",
    // },
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
    backend: ["Golang", "Python", "C++", "Linux", "Kubernetes", "Docker"],
    frontend: ["Vue", "React", "Next.js"],
  },
}
