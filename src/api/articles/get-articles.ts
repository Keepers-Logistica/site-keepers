import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '@/entities/articles'
import { ResponseApi } from '@/interfaces/api'
import { PaginationParams } from '@/interfaces/pagination'
import { api } from '@/lib/axios'

interface GetArticlesBody {
  search: string
  locale: string
  pagination?: PaginationParams
}

export const getArticles = createAsyncThunk<
  ResponseApi<Article[]>,
  GetArticlesBody
>('articles/get', async ({ search, locale, pagination }: GetArticlesBody) => {
  const fields = ['slug', 'title', 'subtitle', 'publishedAt']

  const { data } = await api.get('api/articles', {
    params: {
      fields,
      populate: 'thumbnail',
      locale,
      filters: {
        title: {
          $contains: search,
        },
      },
      ...pagination,
    },
  })

  return { data: data.data, meta: data.meta }
})
