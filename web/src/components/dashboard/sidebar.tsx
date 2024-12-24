"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, LayoutDashboard, BarChart3, MessagesSquare, Users, Settings, Plus, Menu, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession, signOut } from "next-auth/react"

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <div className="flex h-screen w-[240px] flex-col items-center border-r border-dao-border bg-dao-bg py-4 hh">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>
      </div>

      {/* Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="my-4 h-8 w-8 rounded-lg bg-dao-input p-0">
            <ChevronDown className="h-4 w-4 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
          <DropdownMenuItem>Option 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center justify-center space-y-3">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white",
              pathname === "/" && "bg-dao-input text-white"
            )}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span className="ml-2">Dashboard</span>
          </Button>
        </Link>
        <Link href="/analytics">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white",
              pathname === "/analytics" && "bg-dao-input text-white"
            )}
          >
            <BarChart3 className="h-5 w-5" />
            <span className="ml-2">Analytics</span>
          </Button>
        </Link>
        <Link href="/messages">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white",
              pathname === "/messages" && "bg-dao-input text-white"
            )}
          >
            <MessagesSquare className="h-5 w-5" />
            <span className="ml-2">Messages</span>
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
        >
          <Users className="h-5 w-5" />
          <span className="ml-2">Team</span>
        </Button>
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center space-y-3 py-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl text-dao-text hover:bg-dao-input hover:text-white"
        >
          <Settings className="h-5 w-5" />
          <span className="ml-2">Settings</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl bg-dao-purple text-white hover:bg-dao-purple/90"
        >
          <Plus className="h-5 w-5" />
          <span className="ml-2">Add New</span>
        </Button>
      </div>

      {/* User Menu */}
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-12 w-full rounded-full p-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session.user?.image || "/placeholder.svg?height=32&width=32"} alt={session.user?.name || "User"} />
                <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-white">{session.user?.name || "User"}</span>
              <ChevronDown className="ml-auto h-4 w-4 text-dao-text" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">
          <Button variant="ghost" className="h-12 w-full rounded-full p-0">
            <span className="text-white">Sign In</span>
          </Button>
        </Link>
      )}
    </div>
  )
}

