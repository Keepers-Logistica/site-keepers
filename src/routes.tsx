import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layout/app-layout'
import { BlogLayout } from './layout/blog-layout'
import { Article } from './pages/article'
import { Blog } from './pages/blog'
import { Error } from './pages/error'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <BlogLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/article/:articleId',
        element: <Article />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])
