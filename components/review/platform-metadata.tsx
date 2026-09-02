"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { PlatformIcon, type Platform } from "@/components/platform-icon"

const tabs: { key: Platform; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
  { key: "facebook", label: "Facebook" },
  { key: "tiktok", label: "TikTok" },
  { key: "x", label: "X" },
]

const limits: Record<Platform, number> = {
  instagram: 2200,
  youtube: 5000,
  facebook: 63206,
  tiktok: 2200,
  x: 280,
}

const igCaption = `The letter had waited 10 years to be read.
A story of a father, a daughter, and the words left unsaid.
Watch till the end.

#indianstories #villagestories #emotionalstory #shortstory`

function HashtagField({ tags }: { tags: string[] }) {
  const [items, setItems] = useState(tags)
  return (
    <div>
      <label className="text-sm font-medium text-foreground">Hashtags</label>
      <div className="mt-2 flex flex-wrap items-center gap-2 rounded-lg border border-input bg-background p-2.5">
        {items.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
          >
            #{t}
            <button
              type="button"
              onClick={() => setItems((prev) => prev.filter((x) => x !== t))}
              aria-label={`Remove ${t}`}
              className="text-accent-foreground/60 transition-colors hover:text-accent-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full border border-dashed border-input px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Plus className="h-3 w-3" />
          Add
        </button>
      </div>
    </div>
  )
}

function CaptionField({
  label,
  value: initial,
  limit,
  rows = 6,
}: {
  label: string
  value: string
  limit: number
  rows?: number
}) {
  const [value, setValue] = useState(initial)
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative mt-2">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={rows}
          className="w-full resize-none rounded-lg border border-input bg-background p-3 pb-8 text-sm leading-relaxed text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
        />
        <span className="absolute bottom-2.5 right-3 font-mono text-xs text-muted-foreground">
          {value.length} / {limit}
        </span>
      </div>
    </div>
  )
}

function Field({
  label,
  value: initial,
}: {
  label: string
  value: string
}) {
  const [value, setValue] = useState(initial)
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
      />
    </div>
  )
}

export function PlatformMetadata() {
  const [active, setActive] = useState<Platform>("instagram")

  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-foreground">Platform metadata</h2>
      <p className="mt-1 text-xs text-muted-foreground">
        Edit captions for each platform before posting
      </p>

      {/* Tabs */}
      <div className="mt-4 flex flex-wrap gap-1 rounded-lg bg-secondary p-1">
        {tabs.map((t) => {
          const isActive = active === t.key
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
                isActive
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <PlatformIcon platform={t.key} className="h-4 w-4 ring-0" />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab content */}
      <div className="mt-5 space-y-5">
        {active === "instagram" && (
          <>
            <CaptionField label="Caption" value={igCaption} limit={2200} />
            <HashtagField
              tags={["indianstories", "villagestories", "emotionalstory", "shortstory", "reels", "storytelling"]}
            />
          </>
        )}

        {active === "youtube" && (
          <>
            <Field label="Title" value="Farmer's Lost Letter | Emotional Village Story" />
            <CaptionField
              label="Description"
              value={
                "A father's unspoken words, hidden in a letter for ten years. Watch this emotional short story from rural India about love, regret, and the words we leave behind.\n\nSubscribe for more heartfelt village stories."
              }
              limit={5000}
              rows={5}
            />
            <HashtagField tags={["shorts", "emotional", "villagestory", "india", "storytime"]} />
          </>
        )}

        {active === "facebook" && (
          <>
            <CaptionField
              label="Caption"
              value={
                "The letter had waited 10 years to be read. A story of a father, a daughter, and the words left unsaid. Watch till the end."
              }
              limit={63206}
              rows={5}
            />
            <HashtagField tags={["emotionalstory", "villagestories", "shortfilm"]} />
          </>
        )}

        {active === "tiktok" && (
          <>
            <CaptionField
              label="Caption"
              value={"10 years. One unread letter. 💔 Watch till the end. #storytime #emotional"}
              limit={2200}
              rows={4}
            />
            <HashtagField tags={["fyp", "storytime", "emotional", "villagestory", "india"]} />
          </>
        )}

        {active === "x" && (
          <>
            <CaptionField
              label="Post"
              value={"The letter had waited 10 years to be read. A story of the words left unsaid. Watch till the end."}
              limit={280}
              rows={3}
            />
            <HashtagField tags={["shortstory", "emotional", "storytelling"]} />
          </>
        )}
      </div>
    </section>
  )
}
