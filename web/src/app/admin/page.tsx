'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="container flex h-[calc(100vh-3.5rem)] flex-col gap-4 p-4 md:p-8">
      <Card className="flex flex-1 flex-col">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome, {session?.user?.name}</p>
        <Button onClick={() => router.push('/admin/settings')}>Go to Settings</Button>
      </Card>
    </div>
  )
}

