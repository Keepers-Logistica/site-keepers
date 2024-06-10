import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '@/entities/articles'
import { ResponseApi } from '@/interfaces/api'
import { api } from '@/lib/axios'

interface GetArticlesBody {
  id: string
}

export const getArticle = createAsyncThunk<
  ResponseApi<Article>,
  GetArticlesBody
>('article/get', async ({ id }: GetArticlesBody) => {
  const fields = ['big_image', 'section_images', 'related_articles']

  const { data } = await api.get(`api/articles/${id}`, {
    params: {
      populate: fields,
    },
  })

  return data
})
