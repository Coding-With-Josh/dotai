import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRightIcon, Wallet } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-6">
      <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            ALL OF SOLANA
            <br /> IN ONE PLACE
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Solana's Intelligent Interface: Where AI Meets Decentralization, Empowering a Global Community of Innovators, Creators, and Visionaries to Build, Explore, and Thrive in a Decentralized World
          </p>
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center gap-5">
        <Link href="/onboarding">
          <Button variant={"purple"} effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right" className="bg-primary-purple border-4 border-[#441e6e] h-[3.5rem] px-8 rounded-lg font-semibold text-white hover:bg-primary-purple shadow-lg hover:shadow-xl hover:shadow-zinc-950/60 shadow-zinc-950/60 transition-all duration-400">Get started</Button>
        </Link>
      </div>
    </div>
  );
}
