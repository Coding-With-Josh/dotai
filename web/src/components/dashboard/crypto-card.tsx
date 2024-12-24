import { ArrowDown, ArrowUp } from 'lucide-react'

interface CryptoCardProps {
  name: string
  icon: any
  price: string
  change: number
}

export function CryptoCard({ name, icon, price, change }: CryptoCardProps) {
  const isPositive = change >= 0

  return (
    <div className="flex items-center justify-between rounded-xl bg-dao-card p-4">
      <div className="flex items-center space-x-3">
        {/* <img src={icon} alt={name} className="h-10 w-10" /> */}
        {icon}
        <div>
          <h3 className="font-medium text-white">{name}</h3>
          <p className="text-sm text-dao-text">{price}</p>
        </div>
      </div>
      <div className={`flex items-center space-x-1 ${isPositive ? 'text-dao-green' : 'text-dao-red'}`}>
        {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        <span className="text-sm font-medium">{Math.abs(change)}%</span>
      </div>
    </div>
  )
}

