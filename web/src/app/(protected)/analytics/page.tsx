import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "@/components/dashboard/chart"
import { ActivityChart } from "@/components/dashboard/activity-chart"

export default function AnalyticsPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-white">Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-dao-card">
          <CardHeader>
            <CardTitle className="text-white">Earnings Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
        
        <Card className="bg-dao-card">
          <CardHeader>
            <CardTitle className="text-white">Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityChart />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

