import { CryptoCard } from "@/components/dashboard/crypto-card"
import { PortfolioToken } from "@/components/dashboard/portfolio-token"
import { ExpectedEvent } from "@/components/dashboard/expected-event"
import { Chart } from "@/components/dashboard/chart"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react'
import { BitcoinIcon, EthereumIcon, TetherIcon, PolygonIcon } from "@/components/dashboard/icons"
import { ArrowUpRight, Download } from 'lucide-react'
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const { data: session } = useSession()
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">
          {session ? `Welcome, ${session.user?.name || 'User'}` : 'DAO1 Activity Dashboard'}
        </h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-9 rounded-full border-dao-purple bg-transparent text-dao-purple hover:bg-dao-purple hover:text-white">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="h-9 rounded-full border-dao-purple bg-transparent text-dao-purple hover:bg-dao-purple hover:text-white">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CryptoCard name="Bitcoin" icon={<BitcoinIcon />} price="$3,470,780" change={8.2} />
        <CryptoCard name="ETH" icon={<EthereumIcon />} price="$3,480" change={-5.4} />
        <CryptoCard name="Tether" icon={<TetherIcon />} price="$3,480" change={0.5} />
        <CryptoCard name="Polygon" icon={<PolygonIcon />} price="$3,480" change={-2.8} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2 bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Portfolio Tokens</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-md p-0">
              <MoreHorizontal className="h-4 w-4 text-dao-text" />
            </Button>
          </CardHeader>
          <CardContent>
            <PortfolioToken name="Aptos" amount="4,371 APT" value="$3,480" change={8.2} />
            <PortfolioToken name="Solana" amount="3,700 SOL" value="$3,480" change={-5.4} />
            <PortfolioToken name="Polygon" amount="4,371 MATIC" value="$3,480" change={0.5} />
          </CardContent>
        </Card>

        <Card className="bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Expected Events</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-md p-0">
              <MoreHorizontal className="h-4 w-4 text-dao-text" />
            </Button>
          </CardHeader>
          <CardContent>
            <ExpectedEvent name="Google I/O Interview" date="5/7/24" time="10:30" />
            <ExpectedEvent name="Google I/O Interview" date="5/7/24" time="10:30" />
            <ExpectedEvent name="Google I/O Interview" date="5/7/24" time="10:30" />
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Earnings Activity</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs text-dao-text">
                1D
              </Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-md bg-dao-purple px-2 text-xs text-white">
                1W
              </Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs text-dao-text">
                1M
              </Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs text-dao-text">
                1Y
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$8,000.00</div>
            <p className="text-xs text-dao-text">Total Earnings</p>
            <Chart />
          </CardContent>
        </Card>

        <Card className="bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Activity</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 space-x-2 rounded-md bg-dao-input px-3 text-xs text-white">
              <span>Weekly</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ActivityChart />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">$7,400</div>
                <p className="text-xs text-dao-text">This Week</p>
              </div>
              <div className="flex items-center space-x-1 text-dao-green">
                <ChevronUp className="h-4 w-4" />
                <span className="text-sm font-medium">32%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}