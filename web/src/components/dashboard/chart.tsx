"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
  { name: "Jun", value: 239 },
  { name: "Jul", value: 349 },
]

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#808191" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{ background: "#1C1C1C", border: "none" }}
          labelStyle={{ display: "none" }}
          cursor={false}
        />
        <Line type="monotone" dataKey="value" stroke="#6C5DD3" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

