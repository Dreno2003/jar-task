import { ThemeProvider } from '@context/ThemeProvider'
import { AuthContextProvider } from '@context/AuthContext'
import * as  reactRouter from 'react-router-dom'
import PrivateRoute from './app/routes/private-routes/PrivateRoute'
import DashboardMain from './app/views/dashboard/DashboardMain'
import AuthPageMain from './app/views/auth-page/AuthPageMain'
function App() {


  const router = reactRouter.createBrowserRouter([
    {
      path: '/',
      element:
        <PrivateRoute>
          <DashboardMain />
        </PrivateRoute>


    },
    {
      path: '/auth',
      element: <AuthPageMain />,
    }
  ])
  return (
    <>
      <AuthContextProvider >
        <ThemeProvider >
          <reactRouter.RouterProvider router={router} />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
