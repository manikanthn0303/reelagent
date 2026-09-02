import { Bell, Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-6 py-4 backdrop-blur lg:px-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Your video production pipeline at a glance</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-card" />
        </button>

        <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[#7c3aed] px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Video
        </button>
      </div>
    </header>
  )
}
