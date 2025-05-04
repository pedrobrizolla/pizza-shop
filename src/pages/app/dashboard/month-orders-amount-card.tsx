import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { TrendingDown, TrendingUp, Utensils } from "lucide-react";

// export interface MonthRevenueCardProps {}

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-orders-amount"],
  });

  return (
    <Card className="bg-dark">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="flex gap-1 text-xs text-muted-foreground">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <TrendingUp className="h-4 w-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersAmount.diffFromLastMonth}%
                  </span>
                  em{" "}
                </>
              ) : (
                <>
                  <TrendingDown className="h-4 w-4 mr-2 text-rose-500 dark:text-rose-400" />
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrdersAmount.diffFromLastMonth}%
                  </span>
                  em{" "}
                </>
              )}
              relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
