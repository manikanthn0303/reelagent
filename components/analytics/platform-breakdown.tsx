import { ArrowUpRight } from "lucide-react"
import { PlatformIcon } from "@/components/platform-icon"
import { platformBreakdown, platformLabels, platformColors, formatNumber } from "./data"
import { cn } from "@/lib/utils"

export function PlatformBreakdown() {
  return (
    <section>
      <h2 className="text-base font-semibold text-foreground">Platform breakdown</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {platformBreakdown.map((p) => (
          <div key={p.key} className={cn("rounded-xl border border-border p-4", p.tint)}>
            <div className="flex items-center gap-2">
              <PlatformIcon platform={p.key} className="ring-0" />
              <span className="text-sm font-semibold text-foreground">{platformLabels[p.key]}</span>
            </div>

            <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              {formatNumber(p.views)}
            </p>
            <p className="text-xs text-muted-foreground">views this period</p>

            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-status-approved">
              <ArrowUpRight className="h-3.5 w-3.5" />+{p.followers}
              <span className="font-normal text-muted-foreground">followers</span>
            </p>

            <div className="mt-3 border-t border-border/60 pt-3">
              <p className="text-xs text-muted-foreground">Best performing</p>
              <p className="truncate text-sm font-medium text-foreground" title={p.best}>
                {p.best}
              </p>
            </div>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border/70">
              <div
                className="h-full rounded-full"
                style={{ width: `${p.perf}%`, backgroundColor: platformColors[p.key] }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
