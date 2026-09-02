import { cn } from "@/lib/utils"
import { Video, Clock, Send, Globe } from "lucide-react"

const metrics = [
  { label: "Total Videos", value: "24", subtitle: "This week", icon: Video },
  {
    label: "Pending Review",
    value: "3",
    subtitle: "Awaiting approval",
    icon: Clock,
    highlight: true,
  },
  { label: "Posted Today", value: "8", subtitle: "Across all platforms", icon: Send },
  { label: "Platforms", value: "5", subtitle: "Connected and active", icon: Globe },
]

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((m) => {
        const Icon = m.icon
        return (
          <div
            key={m.label}
            className={cn(
              "rounded-xl border bg-card p-5 shadow-sm",
              m.highlight ? "border-status-generating/40 ring-1 ring-status-generating/20" : "border-border",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{m.label}</span>
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg",
                  m.highlight ? "bg-status-generating-bg text-status-generating" : "bg-accent text-primary",
                )}
              >
                <Icon className="h-4.5 w-4.5" />
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">{m.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{m.subtitle}</p>
          </div>
        )
      })}
    </div>
  )
}
