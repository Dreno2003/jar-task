import { ThemeProvider } from '@context/ThemeProvider'
import { AuthContextProvider } from '@context/AuthContext'
import * as  reactRouter from 'react-router-dom'
import PrivateRoute from './app/routes/private-routes/PrivateRoute'
import DashboardMain from './app/views/dashboard/DashboardMain'
import AuthPageMain from './app/views/auth-page/AuthPageMain'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {ReactQueryDevtools} from '@tanstack/react-query'
function App() {


  const router = reactRouter.createBrowserRouter([

    {
      path: '/auth',
      element: <AuthPageMain />,
    },
    {
      path: '/',
      element:
        <PrivateRoute>
          <DashboardMain />
        </PrivateRoute>


    },
  ])

  const queryClient = new QueryClient({

  })
  return (
    <>
      <AuthContextProvider >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider >
            <reactRouter.RouterProvider router={router} />
          </ThemeProvider>
          {/* <ReactQueryDevtools initialIsOpen={false}/> */}
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
