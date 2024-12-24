import { Button } from "@/components/ui/button"
import { HeroSection } from '@/components/landing/HeroSection'
import { Spotlight } from "@/components/ui/spotlight";
import { Navbar } from '@/components/landing/Navbar'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-6 h-full w-full'>
        <Spotlight
          className="-top-60 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        {/* <Spotlight
          className="absolute -top-20 left-220 md:right-60 md:-top-40"
          fill="purple"
        /> */}


        <HeroSection />
      </div>

  )
}





