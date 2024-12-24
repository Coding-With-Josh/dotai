import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default async function MessagesPage() {
  const session = await useSession()

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-white">Messages</h1>
      
      <Card className="bg-dao-card">
        <CardHeader>
          <CardTitle className="text-white">Inbox</CardTitle>
        </CardHeader>
        <CardContent>
          {session ? (
            <p className="text-dao-text">No new messages</p>
          ) : (
            <div>
              <p className="text-dao-text mb-4">Please sign in to view your messages</p>
              <Link href="/login">
                <Button className="bg-dao-purple hover:bg-dao-purple/90">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}

