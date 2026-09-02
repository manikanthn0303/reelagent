import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricCards } from "@/components/metric-cards"
import { VideoPipeline } from "@/components/video-pipeline"
import { QuickStats } from "@/components/quick-stats"
import { ActivityFeed } from "@/components/activity-feed"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="lg:pl-60">
        <DashboardHeader />

        <main className="space-y-6 px-6 py-6 lg:px-8">
          <MetricCards />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-10">
            <div className="space-y-6 xl:col-span-7">
              <VideoPipeline />
              <QuickStats />
            </div>
            <div className="xl:col-span-3">
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
