import { PlatformIcon } from "@/components/platform-icon"
import { Timer, DollarSign } from "lucide-react"

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <p className="text-sm font-medium text-muted-foreground">Best Platform</p>
        <div className="mt-3 flex items-center gap-2.5">
          <PlatformIcon platform="instagram" />
          <span className="text-lg font-semibold text-foreground">Instagram</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">42% of total views</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary">
            <Timer className="h-3.5 w-3.5" />
          </span>
          <p className="text-sm font-medium text-muted-foreground">Avg View Duration</p>
        </div>
        <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">38 seconds</p>
        <p className="mt-1 text-sm text-muted-foreground">Per viewer session</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary">
            <DollarSign className="h-3.5 w-3.5" />
          </span>
          <p className="text-sm font-medium text-muted-foreground">This Week Revenue</p>
        </div>
        <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">$0</p>
        <p className="mt-1 text-sm text-muted-foreground">Not monetized yet</p>
      </div>
    </div>
  )
}
