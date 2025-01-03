import { Suspense } from 'react'
import { GalleryVerticalEnd } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { LoginForm } from "@/components/forms/auth/login-form"

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Spotlight
            className="-top-60 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <LoginForm />
        </div>
      </div>
    </Suspense>
  )
}
