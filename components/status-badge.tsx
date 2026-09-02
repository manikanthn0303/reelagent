import { cn } from "@/lib/utils"

export type VideoStatus = "generating" | "review" | "approved" | "posted" | "rejected"

const config: Record<VideoStatus, { label: string; className: string; dot?: boolean }> = {
  generating: {
    label: "Generating",
    className: "bg-status-generating-bg text-status-generating",
    dot: true,
  },
  review: {
    label: "Ready for Review",
    className: "bg-status-review-bg text-status-review",
  },
  approved: {
    label: "Approved",
    className: "bg-status-approved-bg text-status-approved",
  },
  posted: {
    label: "Posted",
    className: "bg-status-posted-bg text-white",
  },
  rejected: {
    label: "Rejected",
    className: "bg-status-rejected-bg text-status-rejected",
  },
}

export function StatusBadge({ status }: { status: VideoStatus }) {
  const c = config[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium",
        c.className,
      )}
    >
      {c.dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-generating opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-generating" />
        </span>
      )}
      {c.label}
    </span>
  )
}
