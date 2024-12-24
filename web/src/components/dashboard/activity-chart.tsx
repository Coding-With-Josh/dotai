"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
  { name: "Jun", value: 239 },
  { name: "Jul", value: 349 },
]

export function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#808191" fontSize={12} tickLine={false} axisLine={false} />
        <Bar dataKey="value" fill="#6C5DD3" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

