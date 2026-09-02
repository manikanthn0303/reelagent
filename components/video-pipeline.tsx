import { cn } from "@/lib/utils"
import { Play, RefreshCw, Eye, ChartColumn } from "lucide-react"
import { StatusBadge, type VideoStatus } from "@/components/status-badge"
import { PlatformStack, type Platform } from "@/components/platform-icon"

type Action = { label: string; variant: "primary" | "outline"; icon: React.ComponentType<{ className?: string }> }

type Row = {
  title: string
  status: VideoStatus
  platforms: Platform[]
  created: string
  action: Action
}

const ALL: Platform[] = ["instagram", "youtube", "tiktok", "facebook", "x"]

const rows: Row[] = [
  {
    title: "Farmer's Lost Letter",
    status: "review",
    platforms: ["instagram", "youtube", "tiktok"],
    created: "2 hours ago",
    action: { label: "Review", variant: "primary", icon: Eye },
  },
  {
    title: "Village Rain Story",
    status: "generating",
    platforms: ALL,
    created: "30 mins ago",
    action: { label: "View Progress", variant: "outline", icon: Play },
  },
  {
    title: "Grandmother's Recipe",
    status: "posted",
    platforms: ["instagram", "facebook"],
    created: "Yesterday",
    action: { label: "Analytics", variant: "outline", icon: ChartColumn },
  },
  {
    title: "The Lost Puppy",
    status: "rejected",
    platforms: ["youtube", "tiktok"],
    created: "2 days ago",
    action: { label: "Regenerate", variant: "outline", icon: RefreshCw },
  },
  {
    title: "School Day Morning",
    status: "approved",
    platforms: ALL,
    created: "3 days ago",
    action: { label: "Analytics", variant: "outline", icon: ChartColumn },
  },
]

function Thumbnail() {
  return (
    <div className="flex h-10 w-[60px] shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-[#3b82f6]">
      <Play className="h-3.5 w-3.5 fill-white text-white" />
    </div>
  )
}

function ActionButton({ action }: { action: Action }) {
  const Icon = action.icon
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
        action.variant === "primary"
          ? "bg-status-review text-white hover:opacity-90"
          : "border border-border bg-card text-foreground hover:bg-accent",
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {action.label}
    </button>
  )
}

export function VideoPipeline() {
  return (
    <section className="rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold text-foreground">Video Pipeline</h2>
        <p className="text-sm text-muted-foreground">Recent videos and their current status</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-5 py-3 font-medium">Thumbnail</th>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Platforms</th>
              <th className="px-5 py-3 font-medium">Created</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.title} className="border-b border-border last:border-0 transition-colors hover:bg-muted/50">
                <td className="px-5 py-3">
                  <Thumbnail />
                </td>
                <td className="px-5 py-3">
                  <span className="text-sm font-medium text-foreground">{row.title}</span>
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-5 py-3">
                  <PlatformStack platforms={row.platforms} />
                </td>
                <td className="px-5 py-3">
                  <span className="whitespace-nowrap text-sm text-muted-foreground">{row.created}</span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end">
                    <ActionButton action={row.action} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
