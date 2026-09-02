"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { PlatformIcon, type Platform } from "@/components/platform-icon"

const accounts: { key: Platform; label: string; handle: string }[] = [
  { key: "instagram", label: "Instagram", handle: "@reelstudio_ig" },
  { key: "youtube", label: "YouTube", handle: "@reelstudio" },
  { key: "facebook", label: "Facebook", handle: "@reelstudio.fb" },
  { key: "tiktok", label: "TikTok", handle: "@reelstudio_tk" },
  { key: "x", label: "X", handle: "@reelstudio_x" },
]

function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors",
        on ? "bg-primary" : "bg-input",
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform",
          on ? "translate-x-4" : "translate-x-0.5",
        )}
      />
    </button>
  )
}

function RadioRow({
  selected,
  onSelect,
  title,
  description,
}: {
  selected: boolean
  onSelect: () => void
  title: string
  description: string
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-colors",
        selected ? "border-primary bg-accent" : "border-border hover:bg-secondary",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
          selected ? "border-primary" : "border-input",
        )}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-primary" />}
      </span>
      <span>
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="block text-xs text-muted-foreground">{description}</span>
      </span>
    </button>
  )
}

export function PublishSettings() {
  const [schedule, setSchedule] = useState<"now" | "later">("now")
  const [toggles, setToggles] = useState<Record<Platform, boolean>>({
    instagram: true,
    youtube: true,
    facebook: true,
    tiktok: true,
    x: true,
  })

  return (
    <div className="space-y-5">
      {/* Publish settings */}
      <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-foreground">Publish settings</h2>
        <div className="mt-4 space-y-2">
          <RadioRow
            selected={schedule === "now"}
            onSelect={() => setSchedule("now")}
            title="Post immediately"
            description="Publish as soon as you approve"
          />
          <RadioRow
            selected={schedule === "later"}
            onSelect={() => setSchedule("later")}
            title="Schedule for later"
            description="Pick a date and time to publish"
          />
        </div>

        {schedule === "later" && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Date</label>
              <input
                type="date"
                defaultValue="2026-09-05"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Time</label>
              <input
                type="time"
                defaultValue="09:00"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </div>
        )}
      </section>

      {/* Post to platforms */}
      <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-foreground">Post to platforms</h2>
        <ul className="mt-4 space-y-1">
          {accounts.map((a) => (
            <li key={a.key} className="flex items-center gap-3 rounded-lg px-1 py-2">
              <PlatformIcon platform={a.key} className="ring-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{a.label}</p>
                <p className="truncate text-xs text-muted-foreground">{a.handle}</p>
              </div>
              <Toggle
                on={toggles[a.key]}
                onToggle={() => setToggles((prev) => ({ ...prev, [a.key]: !prev[a.key] }))}
                label={`Toggle ${a.label}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
