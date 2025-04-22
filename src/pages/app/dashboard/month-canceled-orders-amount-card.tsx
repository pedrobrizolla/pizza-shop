import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card className="bg-dark">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="flex gap-1 text-xs text-muted-foreground">
          <TrendingUp className="h-4 w-4 mr-2 text-emerald-500 dark:text-emerald-400" />
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  );
}
