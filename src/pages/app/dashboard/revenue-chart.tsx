import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 800 },
  { date: "12/12", revenue: 200 },
  { date: "13/12", revenue: 437 },
  { date: "14/12", revenue: 77 },
  { date: "15/12", revenue: 2200 },
  { date: "16/12", revenue: 677 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6 bg-dark">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors["violet"]["500"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#999", strokeWidth: 0.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;

  const revenue = payload[0].value;

  return (
    <div className="rounded px-2 py-1 text-xs bg-muted text-foreground shadow-sm">
      {revenue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </div>
  );
};
