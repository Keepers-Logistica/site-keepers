import { AboutMeSection } from '@/components/home/about-me-section'
import { HeroSection } from '@/components/home/hero-section'
import { NumbersSection } from '@/components/home/number-section'
import { SegmentsSection } from '@/components/home/segments-section'
import { SeparatorIcons } from '@/components/home/separator-icons'
import { SoluctionSection } from '@/components/home/solutions-section'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Home() {
  return (
    <ScrollArea className="relative">
      <HeroSection />
      <AboutMeSection />
      <SeparatorIcons />
      <SoluctionSection />
      <NumbersSection />
      <SegmentsSection />
    </ScrollArea>
  )
}
