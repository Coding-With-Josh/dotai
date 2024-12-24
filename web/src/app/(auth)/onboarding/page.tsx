'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Icons } from "@/components/icons"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Upload,
  Check,
  X,
  User,
  Mail,
  AtSign,
  Lock,
  Linkedin
} from "lucide-react"
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { useRouter } from 'next/navigation'

// Enhanced Zod schema with more validation
const formSchema = z.object({
  profilePicture: z.instanceof(File).optional(),
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username must be less than 20 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores." }),
  bio: z.string().max(200, { message: "Bio must be less than 200 characters." }).optional(),
  interests: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  location: z.string().optional(),
  linkedin: z.string().optional(),
  xlink: z.string().optional(),
})

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [profilePreview, setProfilePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      username: "",
      linkedin: "",
      xlink: "",
      bio: "",
      interests: [],
      skills: [],
      location: "",
    },
  })

  // Handle profile picture upload
  const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePreview(reader.result as string)
        form.setValue('profilePicture', file)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setStep(step + 1)
    console.log(values)
    // router.push("/dashboard")
  }

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100%" }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  // Render different steps with enhanced design
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            key="welcome"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="rounded-lg border bg-transparent text-card-foreground shadow-sm p-8 max-w-md w-full"
          >
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Welcome Aboard!
              </h1>
              <p className="text-muted-foreground">
                Let's create your personalized profile and unlock a world of possibilities.
              </p>
              <Button
                onClick={() => setStep(1)}
                className="w-full group text-white"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        )

      case 1:
        return (
          <motion.div
            key="profile-pic"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="rounded-lg border bg-transparent text-card-foreground shadow-sm p-8 max-w-md w-full"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Profile Picture</h2>
              <div className="flex flex-col items-center space-y-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleProfilePictureUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Avatar className="w-32 h-32 border-4 border-muted">
                  {profilePreview ? (
                    <AvatarImage src={profilePreview} alt="Profile Preview" />
                  ) : (
                    <AvatarFallback>
                      <User className="w-16 h-16 text-muted-foreground" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button
                  variant="link"
                  effect="underline"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center space-x-2 text-white"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Profile Picture</span>
                </Button>
              </div>
              <Button
                onClick={() => setStep(2)}
                className="w-full text-white"
              // disabled={!profilePreview}
              >
                Next
              </Button>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="auth-info"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="rounded-lg border bg-transparent text-card-foreground shadow-sm p-8 max-w-md w-full"
          >
            <div className='w-full mb-6'>
              <h2 className="text-sm text-muted-foreground">These are the things you'll use to login later on.</h2>
            </div>
            <h2 className="text-xl">Auth Info</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-3">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-3">
                        <Lock className="w-4 h-4" />
                        <span>Password</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type='password'
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  onClick={() => {
                    setStep(3)
                  }}
                  className="w-full text-white"
                >
                  Continue
                </Button>
              </form>
            </Form>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="personal-info"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="rounded-lg border bg-transparent text-card-foreground shadow-sm p-8 max-w-md w-full"
          >
            <div className='w-full mb-6'>
              <h2 className="text-xl">Personal Info</h2>
              <h2 className="text-sm text-muted-foreground">Now let's setup your personal data.</h2>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-3">
                        <AtSign className="w-4 h-4" />
                        <span>Username</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johndoe"
                          {...field}
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-3">
                        <User className="w-4 h-4" />
                        <span>Full Name</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-3">
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="linkedin.com/in/johndoe"
                          {...field}
                          type='url'
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="xlink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-3">
                        <span className="text-lg">X</span>
                        <span>X Profile</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="x.com/johndoe"
                          {...field}
                          type='text'
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  onClick={() => {
                    setStep(4)
                  }}
                  className="w-full text-white"
                >
                  Continue
                </Button>
              </form>
            </Form>

          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
      <Spotlight
        className="-top-60 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  )
}