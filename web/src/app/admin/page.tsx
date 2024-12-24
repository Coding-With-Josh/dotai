import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSession } from "next-auth/react"

export default async function AdminPage() {
  const {data: session} = await useSession()
  if (!session || session.user.role !== "ADMIN") {
    redirect("/unauthorized")
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  })

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Admin Dashboard</h1>
      <Card className="bg-dao-card">
        <CardHeader>
          <CardTitle className="text-white">User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left text-dao-text">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-dao-border">
                  <td className="p-2 text-white">{user.name}</td>
                  <td className="p-2 text-white">{user.email}</td>
                  <td className="p-2 text-white">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

