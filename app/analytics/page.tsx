import { Sidebar } from "@/components/sidebar"
import { AnalyticsHeader } from "@/components/analytics/analytics-header"
import { AnalyticsMetrics } from "@/components/analytics/analytics-metrics"
import { ChartsRow } from "@/components/analytics/charts-row"
import { TopVideos } from "@/components/analytics/top-videos"
import { PlatformBreakdown } from "@/components/analytics/platform-breakdown"
import { ContentInsights } from "@/components/analytics/content-insights"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar initialActive="analytics" />
      <main className="lg:pl-60">
        <div className="mx-auto max-w-[1400px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <AnalyticsHeader />
          <AnalyticsMetrics />
          <ChartsRow />
          <TopVideos />
          <PlatformBreakdown />
          <ContentInsights />
        </div>
      </main>
    </div>
  )
}
