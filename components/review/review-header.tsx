import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export function ReviewHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-border bg-background/80 px-6 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Link
          href="/"
          aria-label="Back to dashboard"
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Video Review
          </p>
          <div className="mt-1 flex items-center gap-3">
            <h1 className="text-xl font-semibold tracking-tight text-foreground text-balance">
              Farmer&apos;s Lost Letter
            </h1>
            <StatusBadge status="review" />
          </div>
        </div>
      </div>
      <p className="shrink-0 text-sm text-muted-foreground">Generated 2 hours ago</p>
    </header>
  )
}
