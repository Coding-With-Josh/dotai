interface ExpectedEventProps {
    name: string
    date: string
    time: string
  }
  
  export function ExpectedEvent({ name, date, time }: ExpectedEventProps) {
    return (
      <div className="flex items-center justify-between py-3">
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-dao-text">{date}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-dao-text">{time}</p>
        </div>
      </div>
    )
  }
  
  