"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Play, LayoutDashboard, Video, ChartColumn, Globe, Settings } from "lucide-react"

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, key: "dashboard" },
  { label: "Videos", icon: Video, key: "videos" },
  { label: "Analytics", icon: ChartColumn, key: "analytics" },
  { label: "Platforms", icon: Globe, key: "platforms" },
  { label: "Settings", icon: Settings, key: "settings" },
]

export function Sidebar() {
  const [active, setActive] = useState("dashboard")

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[#7c3aed] text-primary-foreground">
          <Play className="h-4 w-4 fill-current" />
        </span>
        <span className="text-lg font-semibold tracking-tight text-white">ReelAgent</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {nav.map((item) => {
          const Icon = item.icon
          const isActive = active === item.key
          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#7c3aed] text-sm font-semibold text-primary-foreground">
            AR
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Anya Rao</p>
            <p className="truncate text-xs text-sidebar-foreground">anya@reelagent.io</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
