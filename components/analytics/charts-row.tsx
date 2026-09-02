"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  LabelList,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { viewsOverTime, engagementByPlatform, platformColors, platformLabels } from "./data"

const lineConfig: ChartConfig = {
  instagram: { label: platformLabels.instagram, color: platformColors.instagram },
  youtube: { label: platformLabels.youtube, color: platformColors.youtube },
  tiktok: { label: platformLabels.tiktok, color: platformColors.tiktok },
  facebook: { label: platformLabels.facebook, color: platformColors.facebook },
  x: { label: platformLabels.x, color: platformColors.x },
}

const barConfig: ChartConfig = {
  views: { label: "Views" },
  likes: { label: "Likes" },
  comments: { label: "Comments" },
}

export function ChartsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      {/* Views over time - 60% */}
      <div className="rounded-xl border border-border bg-card p-5 lg:col-span-3">
        <h2 className="text-base font-semibold text-foreground">Views over time</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">Daily views per platform, last 30 days</p>
        <ChartContainer config={lineConfig} className="mt-4 h-[300px] w-full">
          <LineChart data={viewsOverTime} margin={{ left: 4, right: 8, top: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" strokeOpacity={0.5} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={4}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
              className="text-xs"
              tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : `${v}`)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            {(["instagram", "youtube", "tiktok", "facebook", "x"] as const).map((k) => (
              <Line
                key={k}
                dataKey={k}
                type="monotone"
                stroke={`var(--color-${k})`}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            ))}
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Engagement by platform - 40% */}
      <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
        <h2 className="text-base font-semibold text-foreground">Engagement by platform</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">Views, likes and comments this period</p>
        <ChartContainer config={barConfig} className="mt-4 h-[300px] w-full">
          <BarChart
            data={engagementByPlatform}
            layout="vertical"
            margin={{ left: 8, right: 16, top: 8 }}
            barCategoryGap={12}
          >
            <CartesianGrid horizontal={false} stroke="var(--border)" strokeOpacity={0.5} />
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="platform"
              tickLine={false}
              axisLine={false}
              width={72}
              className="text-xs"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="likes" fill="var(--chart-2)" radius={3} />
            <Bar dataKey="comments" fill="var(--chart-4)" radius={3} />
            <Bar dataKey="views" fill="var(--primary)" radius={3}>
              <LabelList dataKey="views" position="right" className="fill-muted-foreground text-[10px]" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  )
}
