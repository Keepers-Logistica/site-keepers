import { useState } from 'react'

import { ArticlesSearch } from '@/components/blog/articles-search'
import { ArticlesSection } from '@/components/blog/articles-section'
import { CarouselArticles } from '@/components/blog/carousel-articles'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Blog() {
  const [search, setSearch] = useState<string>('')

  return (
    <ScrollArea className="h-full">
      <CarouselArticles />
      <ArticlesSearch setSearch={setSearch} />
      <ArticlesSection search={search} />
    </ScrollArea>
  )
}
