"use client"

import { useState } from "react"
import { Play, Pause, Volume2, Maximize } from "lucide-react"
import { cn } from "@/lib/utils"

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const progress = 0

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      {/* Stage */}
      <div className="relative flex justify-center rounded-lg bg-[#0a0a0a] py-6">
        {/* Duration badge */}
        <span className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-2 py-1 font-mono text-xs font-medium text-white">
          0:47
        </span>

        {/* Phone-shaped 9:16 preview */}
        <div
          className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d1b4e] via-[#1a1030] to-[#0a0a0a] ring-1 ring-white/10"
          style={{ width: 300, height: 540 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,0.25),transparent_60%)]" />
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105"
          >
            {playing ? (
              <Pause className="h-6 w-6 fill-primary text-primary" />
            ) : (
              <Play className="ml-1 h-6 w-6 fill-primary text-primary" />
            )}
          </button>
          <span className="absolute bottom-4 left-0 right-0 text-center text-xs font-medium text-white/70">
            Farmer&apos;s Lost Letter
          </span>
        </div>
      </div>

      {/* Scrubber */}
      <div className="mt-4 px-1">
        <div className="relative h-1.5 w-full rounded-full bg-secondary">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-primary"
            style={{ width: `${progress || 12}%` }}
          />
          <span
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary ring-2 ring-card"
            style={{ left: `calc(${progress || 12}% - 6px)` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-3 flex items-center gap-4 px-1 text-muted-foreground">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause" : "Play"}
          className="text-foreground transition-colors hover:text-primary"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
        </button>
        <span className="font-mono text-sm tabular-nums">
          <span className="text-foreground">0:00</span> / 0:47
        </span>
        <div className="ml-auto flex items-center gap-4">
          <button type="button" aria-label="Volume" className="transition-colors hover:text-foreground">
            <Volume2 className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Fullscreen" className="transition-colors hover:text-foreground">
            <Maximize className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
