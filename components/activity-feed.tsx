import { cn } from "@/lib/utils"
import { Send, CircleCheck, Mic, FileText, Sparkles } from "lucide-react"

const activity = [
  { icon: Send, text: "Video posted to Instagram", time: "10 mins ago", tone: "green" },
  { icon: CircleCheck, text: "Video approved by user", time: "25 mins ago", tone: "purple" },
  { icon: Mic, text: "Audio generation complete", time: "1 hour ago", tone: "blue" },
  { icon: FileText, text: "Script generated", time: "2 hours ago", tone: "blue" },
  { icon: Sparkles, text: "New video started", time: "2 hours ago", tone: "purple" },
  { icon: Send, text: "Video posted to YouTube", time: "3 hours ago", tone: "green" },
] as const

const tones: Record<string, string> = {
  green: "bg-status-approved-bg text-status-approved",
  purple: "bg-accent text-primary",
  blue: "bg-status-review-bg text-status-review",
}

export function ActivityFeed() {
  return (
    <section className="rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold text-foreground">Recent Activity</h2>
      </div>
      <ol className="relative px-5 py-4">
        {activity.map((item, i) => {
          const Icon = item.icon
          const isLast = i === activity.length - 1
          return (
            <li key={i} className="relative flex gap-3 pb-5 last:pb-0">
              {!isLast && <span className="absolute left-[15px] top-9 h-full w-px bg-border" aria-hidden="true" />}
              <span
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  tones[item.tone],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="pt-1">
                <p className="text-sm font-medium leading-snug text-foreground">{item.text}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
