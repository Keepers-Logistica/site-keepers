import { motion } from 'framer-motion'
import { useEffect } from 'react'

import { AboutMeSection } from '@/components/home/about-me-section'
import { ContactMe } from '@/components/home/contact-me'
import { HeroSection } from '@/components/home/hero-section'
import { IntegradorSection } from '@/components/home/integrador-section'
import { NumbersSection } from '@/components/home/number-section'
import { RoadSection } from '@/components/home/road-section'
import { SegmentsSection } from '@/components/home/segments-section'
import { SeparatorIcons } from '@/components/home/separator-icons'
import { SoluctionSection } from '@/components/home/solutions-section'
import { Separator } from '@/components/ui/separator'

export function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="relative m-auto block overflow-hidden">
      <motion.div
        style={{ perspective: 800 }}
        initial={{ opacity: 0, rotateX: '30deg' }}
        animate={{ opacity: 1, rotateX: '0deg' }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutMeSection />
        <SeparatorIcons />
        <SoluctionSection />
        <NumbersSection />
        <SegmentsSection />
        <IntegradorSection />
        <Separator className="mb-20" />
        <RoadSection />
        <ContactMe />
      </motion.div>
    </div>
  )
}
