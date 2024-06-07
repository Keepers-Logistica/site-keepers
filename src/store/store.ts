import { configureStore } from '@reduxjs/toolkit'

import { article } from './articles/artcile-slice'

export default configureStore({
  reducer: {
    article,
  },
})
