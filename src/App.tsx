import { useState, useEffect } from 'react'
import { HangingIdCard } from '@/components/lightswind/hanging-id-card'
import { ToggleTheme } from '@/components/lightswind/toggle-theme'
import Lenis from 'lenis'

export default function App() {
  const [shortBio, setShortBio] = useState('Building intelligent workflows that connect people, systems and data. 7+ years specializing in enterprise automation, workflow optimization and systems integration.')

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
      <nav className='fixed top-4 left-4 right-4 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md rounded-full border border-border'>
        <span className='font-bold text-xl'>Ajith KS</span>
        <a href='#about' className='hidden sm:block'>About</a>
        <a href='#services' className='hidden sm:block'>Services</a>
        <a href='#education' className='hidden sm:block'>Education</a>
        <a href='#projects' className='hidden sm:block'>Projects</a>
        <a href='#skills' className='hidden sm:block'>Skills</a>
        <a href='#contact' className='hidden sm:block'>Contact</a>
        <ToggleTheme />
        <a href='#contact' className='block sm:hidden'>Contact</a>
      </nav>

      <section className='flex flex-col items-center justify-center min-h-screen pt-20'>
        <div className='flex flex-col items-center w-full max-w-md space-y-6'>
          <HangingIdCard name='Ajith KS' role='Automation Engineer' badgeId='Process Automation'>
            <img src={import.meta.env.BASE_URL + 'images/profile-id-web.png'} alt='Ajith KS' className='w-24 h-24 rounded-full object-cover' />
          </HangingIdCard>

          {shortBio && (
            <p className='text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed'>{shortBio}</p>
          )}

          <div className='flex gap-2'>
            <a href='#projects' className='btn btn-primary'>View work</a>
            <a href={import.meta.env.BASE_URL + 'resume/Ajith_KS_Automation_Engineer_Resume.pdf'} className='btn btn-outline'>Download resume</a>
            <a href='#contact' className='btn btn-outline'>Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}
