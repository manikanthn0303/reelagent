"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Play, Search, Video } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/status-badge"

const videos = [
  ["Farmer's Lost Letter", "Ready for Review", "Mar 18, 2026"],
  ["Village Rain Story", "Generating", "Mar 18, 2026"],
  ["Grandmother's Recipe", "Posted", "Mar 17, 2026"],
  ["The Lost Puppy", "Rejected", "Mar 16, 2026"],
  ["School Day Morning", "Approved", "Mar 15, 2026"],
  ["The Potter's Hands", "Posted", "Mar 14, 2026"],
]
const filters = ["All", "Generating", "Pending", "Posted", "Rejected"]

export default function VideosPage() {
  const [filter, setFilter] = useState("All")
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => videos.filter(([title, status]) => (filter === "All" || status.includes(filter === "Pending" ? "Review" : filter)) && title.toLowerCase().includes(query.toLowerCase())), [filter, query])
  return <div className="min-h-screen bg-background"><Sidebar initialActive="videos" /><div className="lg:pl-60"><header className="flex flex-col gap-4 border-b border-border bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><h1 className="text-xl font-semibold tracking-tight">Videos</h1><p className="text-sm text-muted-foreground">Manage your production pipeline</p></div><Button><Video data-icon="inline-start" />New video</Button></header><main className="flex flex-col gap-6 px-6 py-6 lg:px-8"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="flex gap-1 overflow-x-auto rounded-lg bg-muted p-1">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm ${filter === item ? "bg-card font-medium shadow-sm" : "text-muted-foreground"}`}>{item}</button>)}</div><div className="relative w-full md:max-w-xs"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search videos" className="pl-9" /></div></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map(([title, status, date], index) => <article key={title} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"><div className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${index % 2 ? "from-indigo-900 via-blue-800 to-slate-900" : "from-violet-900 via-purple-700 to-blue-900"}`}><span className="flex size-12 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur"><Play className="ml-0.5 size-5 fill-current" /></span><span className="absolute bottom-3 left-3 rounded bg-background/70 px-2 py-1 font-mono text-xs text-foreground">0{index + 1}:2{index}</span></div><div className="flex flex-col gap-3 p-4"><div className="flex items-start justify-between gap-3"><h2 className="font-medium leading-5">{title}</h2><StatusBadge status={status === "Ready for Review" ? "review" : status.toLowerCase() as "generating" | "posted" | "rejected" | "approved"} /></div><div className="flex items-center justify-between text-xs text-muted-foreground"><span>IG · YT · TikTok</span><span>{date}</span></div><Button asChild variant="outline" size="sm" className="w-full"><Link href={status === "Ready for Review" ? "/review/1" : "/review/1"}>{status === "Ready for Review" ? "Review" : "View details"}</Link></Button></div></article>)}</div></main></div></div>
}
