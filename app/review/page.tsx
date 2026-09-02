import { Sidebar } from "@/components/sidebar"
import { ReviewHeader } from "@/components/review/review-header"
import { VideoPlayer } from "@/components/review/video-player"
import { SceneBreakdown } from "@/components/review/scene-breakdown"
import { PlatformMetadata } from "@/components/review/platform-metadata"
import { PublishSettings } from "@/components/review/publish-settings"
import { ActionBar } from "@/components/review/action-bar"

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar initialActive="videos" />

      <div className="flex min-h-screen flex-col lg:pl-60">
        <ReviewHeader />

        <main className="flex-1 px-6 py-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[58fr_42fr]">
            {/* Left column */}
            <div className="space-y-6">
              <VideoPlayer />
              <SceneBreakdown />
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <PlatformMetadata />
              <PublishSettings />
            </div>
          </div>
        </main>

        <ActionBar />
      </div>
    </div>
  )
}
