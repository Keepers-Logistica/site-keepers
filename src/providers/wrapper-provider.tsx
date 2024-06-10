import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from '../routes'
import { ReduxProvider } from './redux-provider'

export default function WrapperProvider() {
  return (
    <ReduxProvider>
      <RouterProvider router={router} />
      <Toaster richColors />
    </ReduxProvider>
  )
}
