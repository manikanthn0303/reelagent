const scenes = [
  { n: 1, title: "Village at sunrise", range: "0:00 to 0:08", dur: "8s" },
  { n: 2, title: "Farmer at doorway", range: "0:08 to 0:16", dur: "8s" },
  { n: 3, title: "Close up: old letter", range: "0:16 to 0:24", dur: "8s" },
  { n: 4, title: "Walking through fields", range: "0:24 to 0:34", dur: "10s" },
  { n: 5, title: "Emotional close up", range: "0:34 to 0:42", dur: "8s" },
  { n: 6, title: "Village sunset wide", range: "0:42 to 0:47", dur: "5s" },
]

export function SceneBreakdown() {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-foreground">Scene breakdown</h2>
      <ul className="mt-4 divide-y divide-border">
        {scenes.map((s) => (
          <li key={s.n} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent text-xs font-semibold text-accent-foreground">
              {s.n}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.range}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{s.dur}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
