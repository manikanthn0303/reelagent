import Link from "next/link"
import { ArrowLeft, MessageSquare, X, Send } from "lucide-react"

export function ActionBar() {
  return (
    <div className="sticky bottom-0 z-20 flex flex-col gap-3 border-t border-border bg-card/95 px-6 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to dashboard
      </Link>

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-status-generating/40 bg-status-generating-bg px-3.5 py-2 text-sm font-medium text-status-generating transition-colors hover:bg-status-generating/10"
        >
          <MessageSquare className="h-4 w-4" />
          Request Changes
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-status-rejected/40 bg-status-rejected-bg px-3.5 py-2 text-sm font-medium text-status-rejected transition-colors hover:bg-status-rejected/10"
        >
          <X className="h-4 w-4" />
          Reject
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[#7c3aed] px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          <Send className="h-4 w-4" />
          Approve and Post
        </button>
      </div>
    </div>
  )
}
