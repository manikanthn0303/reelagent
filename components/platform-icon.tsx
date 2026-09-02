import { cn } from "@/lib/utils"

export type Platform = "instagram" | "youtube" | "tiktok" | "facebook" | "x"

const glyphs: Record<Platform, { label: string; bg: string; node: React.ReactNode }> = {
  instagram: {
    label: "Instagram",
    bg: "bg-[#E1306C]",
    node: (
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  youtube: {
    label: "YouTube",
    bg: "bg-[#FF0000]",
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
        <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#fff" />
        <path d="M10 8.5v7l6-3.5-6-3.5z" />
      </svg>
    ),
  },
  tiktok: {
    label: "TikTok",
    bg: "bg-[#111111]",
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
        <path d="M14 4c.3 1.9 1.5 3.4 3.5 3.7v2.3c-1.2 0-2.4-.4-3.5-1v5.3c0 2.9-2.3 5.2-5.2 5.2S3.6 17.2 3.6 14.3s2.3-5.2 5.2-5.2c.3 0 .6 0 .9.1v2.4c-.3-.1-.6-.2-.9-.2-1.6 0-2.8 1.3-2.8 2.9s1.3 2.9 2.8 2.9c1.6 0 2.9-1.2 2.9-2.8V4H14z" />
      </svg>
    ),
  },
  facebook: {
    label: "Facebook",
    bg: "bg-[#1877F2]",
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
        <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.3-1.3 1.4-1.3h1.4V5.8c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8.4V14h2.2v7h2.9z" />
      </svg>
    ),
  },
  x: {
    label: "X",
    bg: "bg-[#4b5563]",
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5" aria-hidden="true">
        <path d="M17.5 4h2.6l-5.7 6.5L21 20h-4.9l-3.8-5-4.4 5H5.3l6.1-7L4.5 4h5l3.4 4.5L17.5 4zm-1.7 14h1.4L8.3 5.4H6.8L15.8 18z" />
      </svg>
    ),
  },
}

export function PlatformIcon({ platform, className }: { platform: Platform; className?: string }) {
  const g = glyphs[platform]
  return (
    <span
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center rounded-full text-white ring-2 ring-card",
        g.bg,
        className,
      )}
      title={g.label}
    >
      <span className="sr-only">{g.label}</span>
      {g.node}
    </span>
  )
}

export function PlatformStack({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="flex items-center -space-x-1.5">
      {platforms.map((p) => (
        <PlatformIcon key={p} platform={p} />
      ))}
    </div>
  )
}
