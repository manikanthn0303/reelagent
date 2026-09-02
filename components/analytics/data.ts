export type PlatformKey = "instagram" | "youtube" | "tiktok" | "facebook" | "x"

export const platformColors: Record<PlatformKey, string> = {
  instagram: "#E1306C",
  youtube: "#FF0000",
  tiktok: "#010101",
  facebook: "#1877F2",
  x: "#657786",
}

export const platformLabels: Record<PlatformKey, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  tiktok: "TikTok",
  facebook: "Facebook",
  x: "X",
}

// 30 days of per-platform view counts
function seed(base: number, variance: number, day: number) {
  const wave = Math.sin(day / 3.2) * variance * 0.5
  const drift = (day / 30) * base * 0.4
  const noise = ((day * 9301 + 49297) % 233280) / 233280
  return Math.round(base + drift + wave + noise * variance)
}

export const viewsOverTime = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2025, 7, 3)
  date.setDate(date.getDate() + i)
  return {
    date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    instagram: seed(420, 260, i),
    youtube: seed(300, 180, i + 4),
    tiktok: seed(520, 340, i + 2),
    facebook: seed(180, 120, i + 7),
    x: seed(120, 90, i + 5),
  }
})

export const engagementByPlatform = [
  { platform: "Instagram", key: "instagram" as const, views: 14200, likes: 1180, comments: 340 },
  { platform: "TikTok", key: "tiktok" as const, views: 13800, likes: 1420, comments: 410 },
  { platform: "YouTube", key: "youtube" as const, views: 9200, likes: 640, comments: 190 },
  { platform: "Facebook", key: "facebook" as const, views: 6800, likes: 380, comments: 120 },
  { platform: "X", key: "x" as const, views: 4300, likes: 227, comments: 88 },
]

export const topVideos = [
  {
    rank: 1,
    title: "Farmer's Lost Letter",
    platform: "instagram" as const,
    views: 12400,
    likes: 1420,
    comments: 210,
    watchTime: "38s",
    posted: "Aug 24",
    gradient: "from-[#f97316] to-[#db2777]",
  },
  {
    rank: 2,
    title: "Grandmother's Recipe",
    platform: "tiktok" as const,
    views: 9800,
    likes: 1180,
    comments: 340,
    watchTime: "44s",
    posted: "Aug 22",
    gradient: "from-[#06b6d4] to-[#3b82f6]",
  },
  {
    rank: 3,
    title: "Village Rain Story",
    platform: "youtube" as const,
    views: 7200,
    likes: 610,
    comments: 150,
    watchTime: "1m 02s",
    posted: "Aug 19",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
  },
  {
    rank: 4,
    title: "The Lost Puppy",
    platform: "instagram" as const,
    views: 5600,
    likes: 720,
    comments: 96,
    watchTime: "31s",
    posted: "Aug 15",
    gradient: "from-[#f43f5e] to-[#f59e0b]",
  },
  {
    rank: 5,
    title: "School Day Morning",
    platform: "facebook" as const,
    views: 3900,
    likes: 280,
    comments: 61,
    watchTime: "40s",
    posted: "Aug 11",
    gradient: "from-[#10b981] to-[#0ea5e9]",
  },
]

export const platformBreakdown = [
  {
    key: "instagram" as const,
    views: 14200,
    followers: 96,
    best: "Farmer's Lost Letter",
    perf: 100,
    tint: "bg-[#E1306C]/8",
  },
  {
    key: "youtube" as const,
    views: 9200,
    followers: 41,
    best: "Village Rain Story",
    perf: 65,
    tint: "bg-[#FF0000]/8",
  },
  {
    key: "tiktok" as const,
    views: 13800,
    followers: 72,
    best: "Grandmother's Recipe",
    perf: 97,
    tint: "bg-[#010101]/6",
  },
  {
    key: "facebook" as const,
    views: 6800,
    followers: 18,
    best: "School Day Morning",
    perf: 48,
    tint: "bg-[#1877F2]/8",
  },
  {
    key: "x" as const,
    views: 4300,
    followers: 7,
    best: "Farmer's Lost Letter",
    perf: 30,
    tint: "bg-[#657786]/10",
  },
]

export function formatNumber(n: number) {
  return n.toLocaleString("en-US")
}
