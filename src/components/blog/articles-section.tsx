import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getArticles } from '@/api/articles/get-articles'
import { useFormatter } from '@/hooks/formatter'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'

import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { ArticleCard } from './article-card'

interface ArticlesSectionProps {
  search: string
}

export function ArticlesSection({ search }: ArticlesSectionProps) {
  const dispatch = useAppDispatch()
  const { data: articles, meta } = useAppSelector(
    (state) => state.article.articles,
  )
  const [page, setPage] = useState<number>(1)
  const [isLoadingArticles, setIsLoadingArticles] = useState(false)
  const { formatI18nNextForCms } = useFormatter()
  const {
    i18n: { language },
  } = useTranslation()

  function nextPage() {
    setPage(page + 1)
  }

  function prevPage() {
    setPage(page - 1)
  }

  async function fetchArticles() {
    const pagination = {
      'pagination[pageSize]': 12,
      'pagination[page]': page,
    }

    setIsLoadingArticles(true)
    await dispatch(
      getArticles({
        search,
        locale: formatI18nNextForCms(language),
        pagination,
      }),
    )
    setIsLoadingArticles(false)
  }

  useEffect(() => {
    fetchArticles()
  }, [search, page])

  return (
    <section className="m-auto w-full max-w-[1440px]">
      <div className="mb-10 grid grid-cols-12 gap-x-10 gap-y-10  px-10 lg:px-0">
        {isLoadingArticles ? (
          <>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <div key={i} className="col-span-6 flex flex-col">
                  <Skeleton className="h-[436px]" />
                  <section className="mt-4">
                    <Skeleton className="h-4 w-72" />
                    <Skeleton className="mt-2 h-3 w-40" />
                  </section>
                </div>
              )
            })}
          </>
        ) : (
          <>
            {articles.map((article, i) => {
              return (
                <ArticleCard
                  key={article.id}
                  title={article.attributes.title}
                  subtitle={article.attributes.subtitle}
                  long={(i + 1) % 3 === 0}
                  id={article.id}
                  thumbnail={article.attributes.thumbnail.data.attributes.url}
                />
              )
            })}
          </>
        )}
      </div>
      <div className="my-10 flex w-full items-center justify-center gap-8 px-10 lg:px-40 ">
        <Button
          variant="ghost"
          disabled={page === 1 || page - 1 <= 0}
          onClick={() => prevPage()}
          className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-orange-400 transition-all hover:bg-orange-400"
        >
          <span className="font-title text-2xl text-orange-400 group-hover:text-white">
            <CaretLeft />
          </span>
        </Button>
        <Button
          onClick={() => nextPage()}
          disabled={page + 1 > meta.pagination.pageCount}
          variant="ghost"
          className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-orange-400 transition-all hover:bg-orange-400"
        >
          <span className="font-title text-2xl text-orange-400 group-hover:text-white">
            <CaretRight />
          </span>
        </Button>
      </div>
    </section>
  )
}
