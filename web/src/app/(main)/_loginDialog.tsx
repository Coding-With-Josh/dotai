import { LoginForm } from '@/components/forms/auth/login-form'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Dialog, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React from 'react'
export const LoginDialog = ({}) => {
  return (
    <div className="bg-black/80 backdrop-blur-md h-screen w-screen z-[5000] flex items-center justify-center">
          <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>
          Login to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub />
            GitHub
          </Button>
          <Button variant="outline">
            <Icons.google />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="green">Login</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
