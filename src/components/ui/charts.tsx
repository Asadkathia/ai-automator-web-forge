
import * as React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
  options?: any;
}

export const LineChart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, options, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        <ChartContainer
          config={{}}
          className="h-full w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data.datasets ? data.datasets[0].data.map((value: number, index: number) => ({
                value,
                name: data.labels[index],
              })) : data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis 
                dataKey="name" 
                tickLine={false}
                axisLine={false}
                stroke="#888888"
                fontSize={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                stroke="#888888"
                fontSize={12}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {payload[0].name}
                            </span>
                            <span className="font-bold text-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={data.datasets?.[0]?.borderColor || "#38BDF8"}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    );
  }
);

LineChart.displayName = "LineChart";

export const BarChart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, options, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        <ChartContainer
          config={{}}
          className="h-full w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={data.datasets ? data.labels.map((label: string, index: number) => ({
                name: label,
                value: data.datasets[0].data[index],
              })) : data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                stroke="#888888"
                fontSize={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                stroke="#888888"
                fontSize={12}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {payload[0].name}
                            </span>
                            <span className="font-bold text-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="value"
                fill={data.datasets?.[0]?.backgroundColor?.[0] || "rgba(56, 189, 248, 0.8)"}
                radius={4}
              />
            </RechartsBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    );
  }
);

BarChart.displayName = "BarChart";
