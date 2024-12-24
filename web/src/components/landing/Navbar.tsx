"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { ArrowRightIcon } from "lucide-react"
import { useState } from "react"
import { LoginDialog } from "@/app/(main)/_loginDialog"

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className="p-4 mx-auto min-w-fit h-[5rem] bg-transparent">
      <div className="flex items-center justify-between h-full w-full gap-[16rem]">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-foreground">
            dot
          </span>
          <span className="text-xl font-semibold text-primary-purple">
            .
          </span>
        </Link>
        <div className="lg:flex items-center space-x-7 min-w-fit border-[3px] border-muted rounded-2xl p-3 px-5 hidden">
          <Link href="/features" className="text-sm font-semibold text-zinc-400">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-foreground text-zinc-400">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-semibold text-foreground text-zinc-400">
            About

          </Link>
          <Link href="/docs" className="text-sm font-semibold text-foreground text-zinc-400">
            Docs

          </Link>
          <Link href="/changelog" className="text-sm font-semibold text-foreground text-zinc-400">
            Changelog

          </Link>
        </div>
        <Link href="/login">
          <Button className="transition-all duration-300 rounded-xl bg-muted border-[2.39px] border-zinc-600 text-gray-300 hover:bg-muted/80 hover:border-zinc-600/80 font-semibold ">Log In</Button>
        </Link>


      </div>
    </div>
  )
}