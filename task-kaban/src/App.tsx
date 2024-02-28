import { ThemeSwitcher } from '@components/theme-switcher/ThemeSwitcherMain'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@context/ThemeProvider'

function App() {

  return (
    <>
      <ThemeProvider >
        <p>
          <ThemeSwitcher />
          kjbuj
        </p>
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
