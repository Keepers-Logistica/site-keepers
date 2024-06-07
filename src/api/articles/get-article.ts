import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '@/entities/articles'
import { ResponseApi } from '@/interfaces/api'
import { api } from '@/lib/axios'

interface GetArticlesBody {
  slug: string
}

export const getArticle = createAsyncThunk<
  ResponseApi<Article>,
  GetArticlesBody
>('article/get', async ({ slug }: GetArticlesBody) => {
  const { data } = await api.get(`api/articles/${slug}`)

  return data
})
