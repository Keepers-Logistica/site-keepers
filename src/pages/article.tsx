import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getArticle } from '@/api/articles/get-article'
import { Article as ArticleEntity } from '@/entities/articles'
import { useAppDispatch } from '@/hooks/redux'

export function Article() {
  const { articleId } = useParams()

  const [article, setArticle] = useState<ArticleEntity>()

  const dispatch = useAppDispatch()

  async function fetchArticle() {
    if (!articleId) return

    const res = dispatch(getArticle({ slug: articleId }))

    setArticle(res)
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return <div>{JSON.stringify(article)}</div>
}
