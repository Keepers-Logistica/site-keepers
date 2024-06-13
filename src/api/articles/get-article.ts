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
  const { data } = await api.get(`api/articles/${id}`, {
    params: {
      populate: {
        related_articles: {
          populate: 'thumbnail',
        },
        thumbnail: true,
        big_image: true,
        section_images: true,
      },
    },
  })

  return data
})
