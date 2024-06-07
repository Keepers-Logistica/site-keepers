import { createSlice } from '@reduxjs/toolkit'

import { getArticles } from '@/api/articles/get-articles'

import { initialState } from './state'

export const articleSlice = createSlice({
  name: 'article',
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.articles = action.payload
    })
  },
})

export const article = articleSlice.reducer
