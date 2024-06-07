import { Article } from '@/entities/articles'
import { ResponseApi } from '@/interfaces/api'

interface initialState {
  articles: ResponseApi<Article[]>
}

export const initialState: initialState = {
  articles: {
    data: [],
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
}
