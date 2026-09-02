import { Eye, Heart, MessageCircle, Clock3 } from "lucide-react"
import { PlatformIcon } from "@/components/platform-icon"
import { topVideos, platformLabels, formatNumber } from "./data"
import { cn } from "@/lib/utils"

const rankColors = [
  "bg-[#f59e0b] text-white",
  "bg-muted-foreground/70 text-white",
  "bg-[#b45309] text-white",
  "bg-secondary text-secondary-foreground",
  "bg-secondary text-secondary-foreground",
]

export function TopVideos() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold text-foreground">Top performing videos</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">Ranked by total views this period</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <th className="px-5 py-3 font-medium">Rank</th>
              <th className="py-3 pr-4 font-medium">Video</th>
              <th className="py-3 pr-4 font-medium">Platform</th>
              <th className="py-3 pr-4 font-medium">Views</th>
              <th className="py-3 pr-4 font-medium">Likes</th>
              <th className="py-3 pr-4 font-medium">Comments</th>
              <th className="py-3 pr-4 font-medium">Watch time</th>
              <th className="py-3 pr-5 font-medium">Posted</th>
            </tr>
          </thead>
          <tbody>
            {topVideos.map((v) => (
              <tr key={v.rank} className="border-b border-border last:border-0 transition-colors hover:bg-accent/40">
                <td className="px-5 py-4">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                      rankColors[v.rank - 1],
                    )}
                  >
                    {v.rank}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-10 w-8 shrink-0 rounded-md bg-gradient-to-br",
                        v.gradient,
                      )}
                      aria-hidden="true"
                    />
                    <a
                      href="#"
                      className="font-medium text-foreground underline-offset-2 hover:text-primary hover:underline"
                    >
                      {v.title}
                    </a>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                    <PlatformIcon platform={v.platform} className="h-4 w-4 ring-0" />
                    {platformLabels[v.platform]}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                    <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    {formatNumber(v.views)}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Heart className="h-3.5 w-3.5" />
                    {formatNumber(v.likes)}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {v.comments}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Clock3 className="h-3.5 w-3.5" />
                    {v.watchTime}
                  </span>
                </td>
                <td className="py-4 pr-5 text-muted-foreground">{v.posted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
