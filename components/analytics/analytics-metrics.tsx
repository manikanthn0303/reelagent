import { ArrowUpRight, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const metrics = [
  { label: "Total Views", value: "48,291", change: "+12%", note: "vs last week", trend: "up" as const },
  { label: "Total Likes", value: "3,847", change: "+8%", note: "vs last week", trend: "up" as const },
  { label: "Followers Gained", value: "234", change: "+23%", note: "vs last week", trend: "up" as const },
  { label: "Videos Posted", value: "18", change: null, note: "this period", trend: "neutral" as const },
]

export function AnalyticsMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-xl border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground">{m.label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{m.value}</p>
          <div className="mt-3 flex items-center gap-1.5 text-sm">
            {m.trend === "up" ? (
              <span className="inline-flex items-center gap-0.5 font-medium text-status-approved">
                <ArrowUpRight className="h-4 w-4" />
                {m.change}
              </span>
            ) : (
              <span className="inline-flex items-center text-muted-foreground">
                <Minus className="h-4 w-4" />
              </span>
            )}
            <span className={cn("text-muted-foreground", m.trend === "neutral" && "ml-0")}>{m.note}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
