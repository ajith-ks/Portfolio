import { useState, useEffect } from 'react'
import { HangingIdCard } from '@/components/lightswind/hanging-id-card'
import { ToggleTheme } from '@/components/lightswind/toggle-theme'
import Lenis from 'lenis'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md rounded-full border border-border">
        <span className="font-bold text-xl">Ajith KS</span>
        <ToggleTheme />
      </nav>
      <section className="flex flex-col items-center justify-center min-h-screen pt-20">
        <div className="max-w-md w-full p-4">
          <HangingIdCard 
            photoUrl={import.meta.env.BASE_URL + 'images/profile-id-web.png'}
            name="Ajith KS"
            role="Automation Engineer"
            detail="Process Automation"
          />
        </div>
      </section>
    </div>
  )
}
