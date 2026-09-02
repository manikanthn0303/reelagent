"use client"

import { useState } from "react"
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  MoreHorizontal,
  Save,
  ShieldCheck,
  Trash2,
  Unplug,
  Video,
} from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

const platforms = [
  { name: "Instagram", handle: "@reelstudio_ig", mark: "IG", tone: "text-pink-500", last: "Last posted 2 hours ago", permissions: "Publish videos · Read insights" },
  { name: "YouTube", handle: "@reelstudio", mark: "YT", tone: "text-red-500", last: "Last posted yesterday", permissions: "Upload videos · Manage channel" },
  { name: "Facebook", handle: "@reelstudio.fb", mark: "f", tone: "text-blue-500", last: "Last posted 3 days ago", permissions: "Publish to page · Read insights" },
  { name: "TikTok", handle: "", mark: "♪", tone: "text-foreground", last: "", permissions: "Publish videos · Read profile" },
  { name: "X", handle: "@reelstudio_x", mark: "𝕏", tone: "text-foreground", last: "Last posted 5 days ago", permissions: "Publish posts · Read analytics" },
]

const keys = [
  { label: "Anthropic (Claude) API Key", value: "sk-ant-••••••••••••3f8a", valid: true },
  { label: "Google AI Studio (Veo)", value: "AIza••••••••••••••••••Kx9", valid: true },
  { label: "ElevenLabs API Key", value: "••••••••••••••••••••••••••••", valid: true },
  { label: "Mubert API Key", value: "••••••••••••••••••••••••", valid: false },
  { label: "Freesound API Key", value: "••••••••••••••••••••", valid: true },
]

const notices = [
  ["Email when video is ready for review", "Get notified when a draft needs your attention."],
  ["Email when video is posted", "Confirm successful publishing across your channels."],
  ["Email on generation errors", "Know immediately when a render needs retrying."],
  ["Weekly analytics summary", "A Monday digest of your content performance."],
]

function SectionTitle({ icon: Icon, title, description }: { icon: typeof Video; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-4" /></div>
      <div><h2 className="font-semibold text-foreground">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>
    </div>
  )
}

function SaveButton({ onClick }: { onClick: () => void }) {
  return <Button onClick={onClick} className="w-full"><Save data-icon="inline-start" />Save changes</Button>
}

export default function SettingsPage() {
  const [connected, setConnected] = useState<Record<string, boolean>>({ Instagram: true, YouTube: true, Facebook: true, TikTok: false, X: true })
  const [visible, setVisible] = useState<Record<number, boolean>>({})
  const [copied, setCopied] = useState<number | null>(null)
  const [length, setLength] = useState([45])
  const [ratio, setRatio] = useState("9:16")
  const [saved, setSaved] = useState("")
  const [autoCaptions, setAutoCaptions] = useState(true)
  const [approval, setApproval] = useState(true)
  const [noticeState, setNoticeState] = useState([true, true, true, true])

  const notifySaved = (section: string) => { setSaved(section); window.setTimeout(() => setSaved(""), 2200) }
  const copyKey = (index: number) => { setCopied(index); window.setTimeout(() => setCopied(null), 1500) }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar initialActive="settings" />
      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur lg:px-8">
          <div><h1 className="text-xl font-semibold tracking-tight">Settings</h1><p className="text-sm text-muted-foreground">Manage your API keys, platforms, and preferences</p></div>
          <Button variant="outline" size="icon" aria-label="More settings"><MoreHorizontal /></Button>
        </header>

        <main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-6 lg:px-8">
          <Card><CardHeader><SectionTitle icon={ShieldCheck} title="Social media platforms" description="Connect your accounts to enable auto-posting" /></CardHeader><CardContent className="flex flex-col gap-1">
            {platforms.map((platform) => { const isConnected = connected[platform.name]; return <div key={platform.name} className="flex flex-col gap-4 border-t border-border py-5 first:border-t-0 first:pt-0 md:flex-row md:items-center md:justify-between">
              <div className="flex min-w-0 items-start gap-3"><div className={`flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted font-semibold ${platform.tone}`}>{platform.mark}</div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><p className="font-medium">{platform.name}</p><span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${isConnected ? "bg-emerald-500/10 text-emerald-600" : "bg-muted text-muted-foreground"}`}><span className={`size-1.5 rounded-full ${isConnected ? "bg-emerald-500" : "bg-muted-foreground"}`} />{isConnected ? "Connected" : "Not connected"}</span></div><p className="text-sm text-muted-foreground">{platform.handle || "Connect an account to get started"}</p><p className="mt-1 text-xs text-muted-foreground">{isConnected ? platform.last : platform.permissions}</p></div></div>
              <Button variant={isConnected ? "outline" : "default"} size="sm" onClick={() => setConnected((state) => ({ ...state, [platform.name]: !isConnected }))}>{isConnected ? <><Unplug data-icon="inline-start" />Disconnect</> : "Connect"}</Button>
            </div> })}
          </CardContent><CardFooter><SaveButton onClick={() => notifySaved("platforms")} /></CardFooter></Card>

          <Card><CardHeader><SectionTitle icon={KeyRound} title="API keys" description="Keys are encrypted and stored securely" /></CardHeader><CardContent className="flex flex-col gap-4">
            <div className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-700 dark:text-amber-300"><AlertTriangle className="mt-0.5 size-4 shrink-0" /><p>Never share these keys. They are masked for security.</p></div>
            {keys.map((item, index) => <div key={item.label} className="grid gap-2 md:grid-cols-[minmax(190px,1fr)_minmax(260px,1.6fr)_auto] md:items-end"><Label htmlFor={`key-${index}`} className="flex items-center gap-2 text-sm">{item.label}<span className={`size-1.5 rounded-full ${item.valid ? "bg-emerald-500" : "bg-destructive"}`} title={item.valid ? "Verified and working" : "Invalid or expired"} /></Label><div className="relative"><Input id={`key-${index}`} type={visible[index] ? "text" : "password"} value={item.value} readOnly className="pr-10 font-mono text-xs" aria-label={`${item.label} masked value`} /><button type="button" onClick={() => setVisible((state) => ({ ...state, [index]: !state[index] }))} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label={visible[index] ? "Hide key" : "Show key"}>{visible[index] ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div><div className="flex gap-2"><Button variant="outline" size="icon" onClick={() => copyKey(index)} aria-label={`Copy ${item.label}`}>{copied === index ? <Check className="text-emerald-500" /> : <Copy />}</Button><Button variant="outline" size="sm">Edit</Button></div></div>)}
          </CardContent><CardFooter><SaveButton onClick={() => notifySaved("keys")} /></CardFooter></Card>

          <Card><CardHeader><SectionTitle icon={Video} title="Video generation preferences" description="Choose the defaults for new videos" /></CardHeader><CardContent className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2"><Label>Primary video model</Label><Select defaultValue="veo"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="veo">Veo 3.1</SelectItem><SelectItem value="kling">Kling 2.1</SelectItem><SelectItem value="runway">Runway</SelectItem></SelectContent></Select></div>
            <div className="flex flex-col gap-2"><Label>Backup video model</Label><Select defaultValue="kling"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="kling">Kling 2.1</SelectItem><SelectItem value="runway">Runway</SelectItem><SelectItem value="veo">Veo 3.1</SelectItem></SelectContent></Select></div>
            <div className="flex flex-col gap-3 md:col-span-2"><div className="flex justify-between"><Label>Default video length</Label><span className="text-sm font-medium">{length[0]}s</span></div><Slider value={length} onValueChange={setLength} min={30} max={90} step={5} /><div className="flex justify-between text-xs text-muted-foreground"><span>30s</span><span>90s</span></div></div>
            <div className="flex flex-col gap-2"><Label>Default aspect ratio</Label><div className="flex rounded-lg border border-border p-1">{["9:16", "16:9", "1:1"].map((item) => <button key={item} type="button" onClick={() => setRatio(item)} className={`flex-1 rounded-md px-3 py-2 text-sm transition-colors ${ratio === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{item}</button>)}</div></div>
            <div className="flex flex-col gap-2"><Label>Default voice</Label><Select defaultValue="male"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="male">Narrator Male</SelectItem><SelectItem value="female">Narrator Female</SelectItem><SelectItem value="character">Character voices</SelectItem></SelectContent></Select></div>
            <div className="flex flex-col gap-2"><Label>Default music mood</Label><Select defaultValue="uplifting"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="emotional">Emotional</SelectItem><SelectItem value="uplifting">Uplifting</SelectItem><SelectItem value="peaceful">Peaceful</SelectItem><SelectItem value="dramatic">Dramatic</SelectItem></SelectContent></Select></div>
            <div className="flex flex-col gap-4 md:col-span-2">{[["Auto-generate captions", "Create captions for every new video.", autoCaptions, setAutoCaptions], ["Require human approval before posting", "Videos must be approved before they are published.", approval, setApproval]].map(([title, description, checked, setter]) => <div key={title as string} className="flex items-center justify-between gap-4 rounded-lg border border-border p-4"><div className="flex items-start gap-3"><div><p className="flex items-center gap-2 text-sm font-medium">{title as string}{title === "Require human approval before posting" && <Lock className="size-3.5 text-muted-foreground" />}</p><p className="text-xs leading-5 text-muted-foreground">{description as string}</p></div></div><Switch checked={checked as boolean} onCheckedChange={setter as (checked: boolean) => void} disabled={title === "Require human approval before posting"} aria-label={title as string} /></div>)}</div>
          </CardContent><CardFooter><SaveButton onClick={() => notifySaved("preferences")} /></CardFooter></Card>

          <Card><CardHeader><SectionTitle icon={CheckCircle2} title="Notifications" description="Choose when ReelAgent should email you" /></CardHeader><CardContent className="flex flex-col gap-3">{notices.map(([title, description], index) => <div key={title} className="flex items-center justify-between gap-4 py-2"><div><p className="text-sm font-medium">{title}</p><p className="text-xs leading-5 text-muted-foreground">{description}</p></div><Switch checked={noticeState[index]} onCheckedChange={(checked) => setNoticeState((state) => state.map((value, item) => item === index ? checked : value))} aria-label={title} /></div>)}<div className="mt-2 flex flex-col gap-2"><Label htmlFor="notification-email">Notification email</Label><Input id="notification-email" type="email" defaultValue="anya@reelagent.io" /></div></CardContent><CardFooter><SaveButton onClick={() => notifySaved("notifications")} /></CardFooter></Card>

          <Card className="border-destructive/40"><CardHeader><SectionTitle icon={Trash2} title="Danger zone" description="Irreversible actions for your ReelAgent workspace" /></CardHeader><CardContent className="flex flex-col gap-4">{[["Clear all generated assets", "This will delete all video files from storage. Cannot be undone."], ["Reset all API keys", "This will invalidate all connected API keys."]].map(([title, description]) => <div key={title} className="flex flex-col gap-4 rounded-lg border border-destructive/20 p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-medium">{title}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p></div><Button variant="outline" className="shrink-0 border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive" onClick={() => notifySaved(title)}><Trash2 data-icon="inline-start" />Delete</Button></div>)}</CardContent></Card>
          {saved && <div className="fixed bottom-5 right-5 flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-lg"><Check className="size-4 text-emerald-500" />{saved} saved</div>}
        </main>
      </div>
    </div>
  )
}
