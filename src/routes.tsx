import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layout'
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
    path: '*',
    element: <NotFound />,
  },
])
