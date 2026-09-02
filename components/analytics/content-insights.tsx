import { Clock, Sparkles, Timer } from "lucide-react"

const insights = [
  {
    icon: Clock,
    label: "Best posting time",
    value: "6PM to 9PM",
    note: "Your videos get 3x more views in this window",
  },
  {
    icon: Sparkles,
    label: "Best story type",
    value: "Emotional family stories",
    note: "68% of your top videos are family stories",
  },
  {
    icon: Timer,
    label: "Optimal video length",
    value: "45 to 60 seconds",
    note: "Highest average view duration in this range",
  },
]

export function ContentInsights() {
  return (
    <section>
      <h2 className="text-base font-semibold text-foreground">Content insights</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {insights.map((i) => {
          const Icon = i.icon
          return (
            <div key={i.label} className="rounded-xl border border-border bg-card p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{i.label}</p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">{i.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.note}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
