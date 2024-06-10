import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { getArticle } from '@/api/articles/get-article'
import { getRelatedArticles } from '@/api/articles/get-related-articles'
import { OtherArticles } from '@/components/article/other-articles'
import { Article as ArticleEntity } from '@/entities/articles'
import { env } from '@/env'
import { useAppDispatch } from '@/hooks/redux'

export function Article() {
  const { articleId } = useParams()

  const [article, setArticle] = useState<ArticleEntity | null>(null)

  const dispatch = useAppDispatch()

  async function fetchArticle() {
    if (!articleId) return

    try {
      const resultArticle = await dispatch(getArticle({ id: articleId }))

      const { payload: payloadArticle } = resultArticle as {
        payload: { data: ArticleEntity }
      }
      setArticle(payloadArticle.data)
    } catch (e) {
      toast.error('Artigo não encontrado !')
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <main className="m-auto max-w-[1440px] px-10 lg:px-20">
      <div className="mb-12 lg:w-[900px]">
        <h1 className="font-title text-dark mb-4 text-4xl font-bold text-[#391805] lg:mt-32 lg:text-6xl">
          {article?.attributes.title}
        </h1>
        <h4 className="text-xl text-zinc-400 lg:text-2xl">
          {article?.attributes.subtitle}
        </h4>
      </div>
      <img
        src={
          env.VITE_CMS_API + article?.attributes.big_image.data.attributes.url
        }
        alt="banner principal"
        className="rounded-lg"
      />
      <section className="my-20 flex items-center justify-center">
        <p className="text-dark w-[842px]  whitespace-pre-wrap text-xl font-medium leading-[160%]">
          {article?.attributes.first_text}
        </p>
      </section>
      <div className="my-20 flex w-full flex-col justify-between space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-[47%]">
          <img
            src={
              env.VITE_CMS_API +
              article?.attributes.section_images.data[0].attributes.url
            }
            alt="banner principal"
            className="h-full rounded-lg object-cover"
          />
        </div>
        <div className="lg:w-[47%]">
          <img
            src={
              env.VITE_CMS_API +
              article?.attributes.section_images.data[1].attributes.url
            }
            alt="banner principal"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <section className="my-20 flex items-center justify-center">
        <p className="text-dark w-[842px] whitespace-pre-wrap text-xl font-medium leading-[160%]">
          {article?.attributes.second_text}
        </p>
      </section>
      <OtherArticles relateds={article?.attributes.related_articles.data} />
    </main>
  )
}
