interface PortfolioTokenProps {
    name: string
    amount: string
    value: string
    change: number
  }
  
  export function PortfolioToken({ name, amount, value, change }: PortfolioTokenProps) {
    const isPositive = change >= 0
  
    return (
      <div className="flex items-center justify-between py-3">
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-dao-text">{amount}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-white">{value}</p>
          <p className={`text-sm ${isPositive ? 'text-dao-green' : 'text-dao-red'}`}>
            {isPositive ? '+' : '-'}{Math.abs(change)}%
          </p>
        </div>
      </div>
    )
  }
  
  