import { useState } from 'react'

import { ArticlesSearch } from '@/components/blog/articles-search'
import { ArticlesSection } from '@/components/blog/articles-section'
import { CarouselArticles } from '@/components/blog/carousel-articles'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useResponsive } from '@/hooks/responisve'

export function Blog() {
  const [search, setSearch] = useState<string>('')
  const { Desktop } = useResponsive()

  return (
    <ScrollArea className="m-auto h-full">
      <Desktop>
        <CarouselArticles />
      </Desktop>
      <ArticlesSearch setSearch={setSearch} />
      <ArticlesSection search={search} />
    </ScrollArea>
  )
}
