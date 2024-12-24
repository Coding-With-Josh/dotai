import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
  
  const transactions = [
    {
      id: "1",
      type: "Swap",
      amount: "0.345 SOL",
      value: "$23.45",
      time: "2 minutes ago",
      status: "completed",
    },
    {
      id: "2",
      type: "Stake",
      amount: "123.45 USDC",
      value: "$123.45",
      time: "5 minutes ago",
      status: "completed",
    },
    {
      id: "3",
      type: "Unstake",
      amount: "1.234 SOL",
      value: "$89.12",
      time: "10 minutes ago",
      status: "completed",
    },
  ]
  
  export function RecentTransactions() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.value}</TableCell>
              <TableCell>{transaction.time}</TableCell>
              <TableCell className="capitalize">{transaction.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  