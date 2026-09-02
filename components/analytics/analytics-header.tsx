"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const ranges = ["7D", "30D", "90D", "All time"]

export function AnalyticsHeader() {
  const [active, setActive] = useState("30D")

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track performance across all platforms</p>
      </div>

      <div className="inline-flex items-center rounded-lg border border-border bg-card p-1">
        {ranges.map((r) => {
          const isActive = active === r
          return (
            <button
              key={r}
              onClick={() => setActive(r)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-pressed={isActive}
            >
              {r}
            </button>
          )
        })}
      </div>
    </header>
  )
}
