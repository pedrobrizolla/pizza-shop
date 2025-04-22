import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Utensils } from "lucide-react";

// export interface MonthRevenueCardProps {}

export function MonthOrdersAmountCard() {
  return (
    <Card className="bg-dark">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="flex gap-1 text-xs text-muted-foreground">
          <TrendingUp className="h-4 w-4 mr-2 text-emerald-500 dark:text-emerald-400" />
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
